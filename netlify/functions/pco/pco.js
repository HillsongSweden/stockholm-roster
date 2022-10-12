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
        offset: opts.offset,
        include: "service_type"
      }
    }),
    httpClient.get(`/service_types/${serviceTypeId}/teams`, {
      params: {
        include: "team_positions"
      }
    })
  ]);

  const [teamMembers, neededPositions] = await Promise.all([
    httpClient.get(plans.data[0].links.self + "/team_members"),
    httpClient.get(plans.data[0].links.self + "/needed_positions")
  ]);

  return {
    teamMembers,
    neededPositions: neededPositions.data,
    serviceTypeName: plans.included[0].attributes.name,
    date: plans.data[0].attributes.short_dates,
    teams: {
      ...teams,
      included: teams.included.reduce((acc, inc) => {
        acc[inc.type] = { ...acc[inc.type], [inc.id]: inc.attributes };
        return acc;
      }, {})
    }
  };
}

const handler = async function(event) {
	const servicesMap = {
		norraam: "1134523",
		cityam: "1155896",
		citypm: "1155898"
	};

  try {
		const servicesFilter = event.queryStringParameters.services?.split(',').map(service => service.toLowerCase())
		let services = Object.values(servicesMap)
		if (servicesFilter) {
			services = servicesFilter.map(filter => {
				return servicesMap[filter]
			})
		}

    const response = await Promise.all(
      services.map(serviceTypeId =>
        getRosterByServiceType(serviceTypeId, event.queryStringParameters)
      )
    );

    const { teams, serviceTypes } = response.reduce(
      (acc, serviceType) => {
        acc.serviceTypes.push({
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
          )
        });

				const teamsFilter = event.queryStringParameters.teams?.split(',').map(team => team.toLowerCase())
        serviceType.teams.data.filter(team => {
					if (!teamsFilter) {
						return true
					}

					return teamsFilter.includes(team.attributes.name.toLowerCase())
				}).forEach(team => {
          const teamName = team.attributes.name;
          const oldTeamPositions = acc.teams[teamName] || [];
          const newTeamPositions = team.relationships.team_positions.data.map(
            teamPosition => {
              const foundRelatedPosition =
                serviceType.teams.included.TeamPosition[teamPosition.id];
              return foundRelatedPosition.name;
            }
          );
          const uniqueTeamPositions = new Set([
            ...oldTeamPositions,
            ...newTeamPositions
          ]);
          acc.teams[teamName] = Array.from(uniqueTeamPositions);
        });
        return acc;
      },
      { teams: {}, serviceTypes: [] }
    );

    for (const [team, positions] of Object.entries(teams)) {
      teams[team] = positions.reduce((acc, position) => {
        const teamPeople = serviceTypes.map(st => {
          if (st.neededPositions[position]) {
            return {
              name: "TBC",
              team_position_name: position,
              status: "TBC"
            };
          }
          return st.teamMembers[position] || null;
        });

        if (teamPeople.some(teamPersonExists => teamPersonExists)) {
          acc[position] = teamPeople;
        }

        return acc;
      }, {});
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        date: response[0].date,
        teams,
        serviceTypeNames: response.map(st => st.serviceTypeName)
      })
    };
  } catch (error) {
    console.log(error.response.data);
    return {
      statusCode: 500,
    };
  }
};

module.exports = { handler };
