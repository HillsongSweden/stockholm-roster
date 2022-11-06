const axios = require('axios')

const httpClient = axios.create({
	baseURL: "https://api.planningcenteronline.com/services/v2",
	auth: {
		username: process.env.PCO_ID,
		password: process.env.PCO_SECRET
	}
});

async function getRosterByServiceType(serviceTypeId, opts) {
	const plans = await httpClient.get(`/service_types/${serviceTypeId}/plans`, {
		params: {
			filter: "future",
			per_page: 1,
			offset: opts?.offset,
			include: "service_type"
		}
	});

	const [teamMembers, neededPositions] = await Promise.all([
		httpClient.get(plans.data.data[0]?.links.self + "/team_members", {
			params: {
				include: 'team',
				per_page: 100
			}
		}),
		httpClient.get(plans.data.data[0]?.links.self + "/needed_positions", {
			params: {
				include: 'team',
				per_page: 100
			}
		})
	]);

	return {
		neededPositions: neededPositions.data,
		teamMembers: teamMembers.data,
		date: plans.data.data[0].attributes.short_dates,
		serviceTypeName: plans.data.included[0]?.attributes.name
	}
}

exports.handler = async (event) => {
	const servicesMap = {
		norraam: "1134523",
		cityam: "1155896",
		citypm: "1155898"
	};

	const servicesFilter = event.queryStringParameters?.services?.split(',').map(service => service.toLowerCase())
	let services = []
	if (servicesFilter) {
		for (const filter of servicesFilter) {
			const validFilter = servicesMap[filter]
			if (validFilter) {
				services.push(validFilter)
			}
		}
	} else {
		services = Object.values(servicesMap)
	}

	let serviceTypes = []
	if (process.env.USE_MOCK) {
		serviceTypes = require('../../mockresponse.js')
	} else {
		serviceTypes = await Promise.all(
			services.map(serviceTypeId =>
				getRosterByServiceType(serviceTypeId, event.queryStringParameters)
			)
		);
	}

	const teams = {}
	for (const serviceType of serviceTypes) {
		for (const team of [...serviceType.teamMembers.included, ...serviceType.neededPositions.included]) {
			const uniquePositions = serviceType.teamMembers.data
				.filter(person => person.relationships.team.data.id === team.id)
				.reduce((acc, person) => {
					acc.add(person.attributes.team_position_name.toLowerCase())

					return acc
				}, new Set(teams[team.attributes.name.toLowerCase()]))

			teams[team.attributes.name.toLowerCase()] = Array.from(uniquePositions)
		}
	}

	const output = Object.entries(teams).map(([teamName, positions]) => {
		const teamPositions = positions.sort().map((positionName) => {
			const roster = serviceTypes.map(serviceType => {
				const people = serviceType.teamMembers.data.filter(person => {
					const isPositionMatch = person.attributes.team_position_name.toLowerCase() === positionName
					const isTeamMatch = serviceType.teamMembers.included.find((t) => {
						return t.id === person.relationships.team.data.id
					})?.attributes.name.toLowerCase() === teamName

					return isPositionMatch && isTeamMatch
				}).map(person => person.attributes)

				return people
			})

			return {
				positionName,
				roster
			}
		})

		return {
			teamName,
			teamPositions
		}
	}).sort((a, b) => b.teamName.localeCompare(a.teamName))

	return {
		statusCode: 200,
		body: JSON.stringify({
			date: serviceTypes[0].date,
			teams: output,
			serviceTypeNames: serviceTypes.map(st => st.serviceTypeName)
		})
	}
}
