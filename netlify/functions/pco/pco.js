const axios = require("axios");

const httpClient = axios.create({
  baseURL: "https://api.planningcenteronline.com/services/v2",
  auth: {
    username: process.env.PCO_ID,
    password: process.env.PCO_SECRET
  }
});

httpClient.interceptors.response.use(response => response.data);

async function getRosterByServiceType(serviceTypeId) {
  const [plans, teams] = await Promise.all([
    httpClient.get(`/service_types/${serviceTypeId}/plans`, {
      params: {
        filter: "future",
        per_page: 1
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

  return {
    teamMembers,
    plan: plans[0],
    teams
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
      Object.values(services).map(getRosterByServiceType)
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        serviceTypes: response.map(serviceType => {
          return {
            teamMembers: serviceType.teamMembers,
            teams: serviceType.teams.data.map(team => {
              return {
                id: team.id,
                name: team.attributes.name,
                team_positions: team.relationships.team_positions.data.map(
                  teamPosition => {
                    const foundRelatedPosition = serviceType.teams.included.find(
                      relatedPosition => relatedPosition.id === teamPosition.id
                    );
                    return {
                      id: foundRelatedPosition.id,
                      name: foundRelatedPosition.attributes.name
                    };
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
