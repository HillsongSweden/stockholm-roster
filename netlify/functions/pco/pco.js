const axios = require("axios");

const httpClient = axios.create({
  baseURL: "https://api.planningcenteronline.com/services/v2",
  auth: {
    username: process.env.PCO_ID,
    password: process.env.PCO_SECRET
  }
});

httpClient.interceptors.response.use(response => response.data);

async function getRosterByServiceType(serviceTypeId, opts = {}) {
  const [plans, teams] = await Promise.all([
    httpClient.get(`/service_types/${serviceTypeId}/plans`, {
      params: {
        filter: "future",
        per_page: 1,
        offset: opts.offset
      }
    }),
    httpClient.get(`/service_types/${serviceTypeId}/teams`, {
      params: {
        include: "team_positions"
      }
    })
  ]);
  const teamMembers = await httpClient.get(
    plans.data[0].links.self + "/team_members"
  );
  const neededPositions = await httpClient.get(
    plans.data[0].links.self + "/needed_positions"
  );

  return {
    teamMembers,
    neededPositions: neededPositions.data,
    plan: plans.data[0],
    teams: {
      ...teams,
      included: teams.included.reduce((acc, inc) => {
        acc[inc.type] = { ...acc[inc.type], [inc.id]: inc.attributes };
        return acc;
      }, {})
    }
  };
}

const handler = async function(event, context) {
  try {
    const services = {
      norraAm: "1134523",
      cityAm: "1155896",
      cityPm: "1155898"
    };
    const response = await Promise.all(
      Object.values(services).map(serviceTypeId =>
        getRosterByServiceType(serviceTypeId, event.queryStringParameters)
      )
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        date: response[0].plan.attributes.short_dates,
        serviceTypes: response.map(serviceType => {
          return {
            neededPositions: serviceType.neededPositions.reduce((acc, pos) => {
              acc[pos.attributes.team_position_name] = pos.attributes;
              return acc;
            }, {}),
            teamMembers: serviceType.teamMembers.data.reduce(
              (acc, teamMember) => {
                acc[teamMember.attributes.team_position_name] =
                  teamMember.attributes;
                return acc;
              },
              {}
            ),
            teams: serviceType.teams.data.map(team => {
              return {
                id: team.id,
                name: team.attributes.name,
                teamPositions: team.relationships.team_positions.data.map(
                  teamPosition => {
                    const foundRelatedPosition =
                      serviceType.teams.included.TeamPosition[teamPosition.id];
                    return foundRelatedPosition.name;
                  }
                )
              };
            })
          };
        })
      })
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: error.message })
    };
  }
};

module.exports = { handler };
