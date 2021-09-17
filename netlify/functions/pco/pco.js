const axios = require("axios");

const httpClient = axios.create({
  baseURL: "https://api.planningcenteronline.com/services/v2",
  auth: {
    username: process.env.PCO_ID,
    password: process.env.PCO_SECRET
  }
});

httpClient.interceptors.response.use(response => response.data);

const handler = async function(event, context) {
  try {
    const plansResponse = await httpClient.get(
      `/service_types/${event.queryStringParameters.serviceTypeId}/plans`,
      {
        params: {
          filter: "future",
          per_page: 1
        }
      }
    );

    const teams = await httpClient.get(
      `/service_types/${event.queryStringParameters.serviceTypeId}/teams`,
      {
        params: {
          include: "team_positions"
        }
      }
    );
    const teamMembers = await httpClient.get(
      plansResponse.data[0].links.self + "/team_members"
    );

    const res = teams.data.map(team => {
      return {
        id: team.id,
        name: team.attributes.name,
        positions: team.relationships.team_positions.data
          .map(tp => {
            const position = teams.included.find(pos => pos.id === tp.id);
            const people = teamMembers.data.filter(
              tm =>
                tm.attributes.team_position_name === position.attributes.name
            );
            return {
              id: position.id,
              name: position.attributes.name,
              people: people.map(p => ({ id: p.id, ...p.attributes }))
            };
          })
          .filter(tp => tp.people.length)
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(res)
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
