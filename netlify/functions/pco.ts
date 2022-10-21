import { Handler } from '@netlify/functions'
import axios from 'axios';
import type { IPcoPlansResponse, IPcoTeamsResponse, IPcoNeededPositionsResponse, IPcoTeamMemberResponse } from '../pco-interfaces';

if (!process.env.PCO_ID || !process.env.PCO_SECRET) {
	throw new Error('Missing config')
}

const httpClient = axios.create({
	baseURL: "https://api.planningcenteronline.com/services/v2",
	auth: {
		username: process.env.PCO_ID,
		password: process.env.PCO_SECRET
	}
});

interface IQuery {
	offset?: string
}

async function getRosterByServiceType(serviceTypeId: string, opts: IQuery | null) {
	const [plans, teams] = await Promise.all([
		httpClient.get<IPcoPlansResponse>(`/service_types/${serviceTypeId}/plans`, {
			params: {
				filter: "future",
				per_page: 1,
				offset: opts?.offset,
				include: "service_type"
			}
		}),
		httpClient.get<IPcoTeamsResponse>(`/service_types/${serviceTypeId}/teams`, {
			params: {
				include: "team_positions"
			}
		})
	]);

	const [teamMembers, neededPositions] = await Promise.all([
		httpClient.get<IPcoTeamMemberResponse>(plans.data.data[0].links.self + "/team_members"),
		httpClient.get<IPcoNeededPositionsResponse>(plans.data.data[0].links.self + "/needed_positions")
	]);

	return {
		teamMembers: teamMembers.data.data,
		neededPositions: neededPositions.data.data,
		serviceTypeName: plans.data.included[0].attributes.name,
		date: plans.data.data[0].attributes.short_dates,
		teams: {
			...teams.data,
			included: teams.data.included.reduce((acc: {
				[k: string]: {
					[k: string]: {
						name: string,
						negative_tag_group: any[],
						tag_group: any[],
						tags: any[]
					}
				}
			}, inc) => {
				acc[inc.type] = { ...acc[inc.type], [inc.id]: inc.attributes };
				return acc;
			}, {})
		}
	};
}

const handler: Handler = async (event) => {
	const servicesMap = {
		norraam: "1134523",
		cityam: "1155896",
		citypm: "1155898"
	};

	try {
		const servicesFilter = event.queryStringParameters?.services?.split(',').map(service => service.toLowerCase())
		let services = Object.values(servicesMap)
		if (servicesFilter) {
			services = servicesFilter.map(filter => {
				return servicesMap[filter]
			})
		}

		const responses = await Promise.all(
			services.map(serviceTypeId =>
				getRosterByServiceType(serviceTypeId, event.queryStringParameters)
			)
		);
		const { teams, serviceTypes } = responses.reduce(
			(acc: { teams: { [k: string]: any[] }, serviceTypes: { teamMembers: { [k: string]: {} | null }, neededPositions: { [k: string]: any } }[] }, serviceType) => {
				acc.serviceTypes.push({
					neededPositions: serviceType.neededPositions.reduce((acc, pos) => {
						acc[pos.attributes.team_position_name] = pos.attributes;
						return acc;
					}, {}),
					teamMembers: serviceType.teamMembers.reduce(
						(acc, teamMember) => {
							acc[teamMember.attributes.team_position_name] =
								teamMember.attributes;
							return acc;
						},
						{}
					)
				});

				const teamsFilter = event.queryStringParameters?.teams?.split(',').map(team => team.toLowerCase())
				serviceType.teams.data.filter(team => {
					if (!teamsFilter) {
						return true
					}

					return teamsFilter.includes(team.attributes.name.toLowerCase())
				}).forEach(team => {
					const teamName = team.attributes.name;
					const oldTeamPositions = acc.teams[teamName] || [];
					const newTeamPositions = team.relationships.team_positions.data.map(
						(teamPosition: { id: string }) => {
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
			teams[team] = positions.reduce((acc: { [k: string]: ({ name: string, team_position_name: string, status: string } | null)[] }, position: string) => {
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
				date: responses[0].date,
				teams,
				serviceTypeNames: responses.map(st => st.serviceTypeName)
			})
		};
	} catch (error) {
		console.log(error)
		console.log(error.response.data);
		return {
			statusCode: 500,
		};
	}
};

export { handler };
