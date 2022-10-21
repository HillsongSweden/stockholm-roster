export interface IPcoPlansResponse {
	data: {
		attributes: {
			short_dates: string
		},
		links: {
			self: string
		},
	}[],
	included: {
		attributes: {
			name: string
		}
	}[]
}

export interface IPcoTeamsResponse {
	data: {
		attributes: any,
		links: {
			self: string
		},
		relationships: {
			team_positions: {
				data: { 
					id: string
				}[]
			}
		}
	}[],
	included: any[],
}

export interface IPcoNeededPositionsResponse {
	data: {
		attributes: {
			team_position_name: string
		},
		links: {
			self: string
		},
		relationships: any
	}[],
	included: any[],
}

export interface IPcoTeamMemberResponse {
	data: {
		attributes: any,
		links: {
			self: string
		},
		relationships: any
	}[],
	included: any[],
}