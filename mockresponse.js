module.exports = [
	{
		"neededPositions": {
			"links": {
				"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/needed_positions?include=team"
			},
			"data": [
				{
					"type": "NeededPosition",
					"id": "767195127",
					"attributes": {
						"quantity": 1,
						"scheduled_to": "plan",
						"team_position_name": "Co-Tech"
					},
					"relationships": {
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4585959"
							},
							"data": {
								"type": "Team",
								"id": "4585959"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"time": {
							"data": null
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/needed_positions/767195127"
					}
				},
				{
					"type": "NeededPosition",
					"id": "767195143",
					"attributes": {
						"quantity": 1,
						"scheduled_to": "plan",
						"team_position_name": "Link Tech"
					},
					"relationships": {
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4585959"
							},
							"data": {
								"type": "Team",
								"id": "4585959"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"time": {
							"data": null
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/needed_positions/767195143"
					}
				},
				{
					"type": "NeededPosition",
					"id": "767195161",
					"attributes": {
						"quantity": 1,
						"scheduled_to": "plan",
						"team_position_name": "Team Lead"
					},
					"relationships": {
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4585962"
							},
							"data": {
								"type": "Team",
								"id": "4585962"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"time": {
							"data": null
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/needed_positions/767195161"
					}
				},
				{
					"type": "NeededPosition",
					"id": "767195176",
					"attributes": {
						"quantity": 1,
						"scheduled_to": "plan",
						"team_position_name": "External"
					},
					"relationships": {
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4586024"
							},
							"data": {
								"type": "Team",
								"id": "4586024"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"time": {
							"data": null
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/needed_positions/767195176"
					}
				},
				{
					"type": "NeededPosition",
					"id": "767195196",
					"attributes": {
						"quantity": 1,
						"scheduled_to": "plan",
						"team_position_name": "Lighting Operator"
					},
					"relationships": {
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4585956"
							},
							"data": {
								"type": "Team",
								"id": "4585956"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"time": {
							"data": null
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/needed_positions/767195196"
					}
				},
				{
					"type": "NeededPosition",
					"id": "767195214",
					"attributes": {
						"quantity": 1,
						"scheduled_to": "plan",
						"team_position_name": "Service Producer"
					},
					"relationships": {
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4585956"
							},
							"data": {
								"type": "Team",
								"id": "4585956"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"time": {
							"data": null
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/needed_positions/767195214"
					}
				}
			],
			"included": [
				{
					"type": "Team",
					"id": "4585959",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-08-10T07:10:42Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Audio",
						"rehearsal_team": true,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2022-08-17T15:49:51Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4585959"
					}
				},
				{
					"type": "Team",
					"id": "4585962",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-08-10T07:18:46Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Communications",
						"rehearsal_team": true,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2022-08-17T15:49:51Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4585962"
					}
				},
				{
					"type": "Team",
					"id": "4586024",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-08-10T13:21:45Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Creative Events",
						"rehearsal_team": true,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2022-10-25T06:55:24Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4586024"
					}
				},
				{
					"type": "Team",
					"id": "4585956",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-08-10T07:05:19Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Production",
						"rehearsal_team": true,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2022-08-17T15:49:51Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4585956"
					}
				}
			],
			"meta": {
				"total_count": 6,
				"count": 6,
				"can_query_by": [
					"team_id"
				],
				"can_include": [
					"team",
					"time"
				],
				"parent": {
					"id": "60540217",
					"type": "Plan"
				}
			}
		},
		"teamMembers": {
			"links": {
				"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members?include=team",
				"next": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members?include=team&offset=25"
			},
			"data": [
				{
					"type": "PlanPerson",
					"id": "842859242",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-08-29T21:28:14Z",
						"decline_reason": null,
						"name": "Emelie FÃ¥llsten",
						"notes": null,
						"notification_changed_at": "2022-09-29T10:17:38Z",
						"notification_changed_by_name": "Emelie FÃ¥llsten",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-06T21:23:04Z",
						"notification_sender_name": "Frida Vincent Appiah",
						"notification_sent_at": "2022-09-06T20:33:34Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/ef.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-09-29T10:17:38Z",
						"team_position_name": "Vox 1",
						"updated_at": "2022-09-29T10:17:38Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71199694"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4585961"
							},
							"data": {
								"type": "Team",
								"id": "4585961"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members/842859242"
					}
				},
				{
					"type": "PlanPerson",
					"id": "843575127",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-08-31T15:05:36Z",
						"decline_reason": null,
						"name": "Oskar Larsen",
						"notes": null,
						"notification_changed_at": "2022-09-08T11:08:36Z",
						"notification_changed_by_name": "Oskar Larsen",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-06T20:35:10Z",
						"notification_sender_name": "Frida Vincent Appiah",
						"notification_sent_at": "2022-09-06T20:33:42Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/person/71199943-1578578222/avatar.10.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-09-08T11:08:36Z",
						"team_position_name": "Drums",
						"updated_at": "2022-09-08T11:08:36Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71199943"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4585960"
							},
							"data": {
								"type": "Team",
								"id": "4585960"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members/843575127"
					}
				},
				{
					"type": "PlanPerson",
					"id": "843589093",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-08-31T15:27:08Z",
						"decline_reason": null,
						"name": "Joakim Ã…gren",
						"notes": null,
						"notification_changed_at": "2022-10-06T18:07:41Z",
						"notification_changed_by_name": "Joakim Ã…gren",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-07T04:39:00Z",
						"notification_sender_name": "Frida Vincent Appiah",
						"notification_sent_at": "2022-09-06T20:35:29Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/person/71199335-1578578185/avatar.2.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-10-06T18:07:41Z",
						"team_position_name": "Bass",
						"updated_at": "2022-10-06T18:07:41Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71199335"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4585960"
							},
							"data": {
								"type": "Team",
								"id": "4585960"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members/843589093"
					}
				},
				{
					"type": "PlanPerson",
					"id": "843589304",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-08-31T15:27:23Z",
						"decline_reason": null,
						"name": "Joakim Ã…gren",
						"notes": null,
						"notification_changed_at": "2022-10-06T18:07:44Z",
						"notification_changed_by_name": "Joakim Ã…gren",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-07T04:39:00Z",
						"notification_sender_name": "Frida Vincent Appiah",
						"notification_sent_at": "2022-09-06T20:35:29Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/person/71199335-1578578185/avatar.2.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-10-06T18:07:44Z",
						"team_position_name": "MD",
						"updated_at": "2022-10-06T18:07:44Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71199335"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4585960"
							},
							"data": {
								"type": "Team",
								"id": "4585960"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members/843589304"
					}
				},
				{
					"type": "PlanPerson",
					"id": "843602652",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-08-31T15:51:21Z",
						"decline_reason": null,
						"name": "Daniel Cross",
						"notes": null,
						"notification_changed_at": "2022-10-09T18:04:57Z",
						"notification_changed_by_name": "Daniel Cross",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-06T20:35:37Z",
						"notification_sender_name": "Frida Vincent Appiah",
						"notification_sent_at": "2022-09-06T20:35:09Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/DC.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-10-09T18:04:57Z",
						"team_position_name": "Gtr 1",
						"updated_at": "2022-10-09T18:04:57Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71201544"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4585960"
							},
							"data": {
								"type": "Team",
								"id": "4585960"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members/843602652"
					}
				},
				{
					"type": "PlanPerson",
					"id": "844831763",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-09-06T12:46:54Z",
						"decline_reason": null,
						"name": "Eric Liljero",
						"notes": null,
						"notification_changed_at": "2022-10-24T10:24:44Z",
						"notification_changed_by_name": "Moa Segerfeldt",
						"notification_prepared_at": "2022-10-24T10:24:44Z",
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/EL.png?g=224x224%23",
						"prepare_notification": true,
						"status": "C",
						"status_updated_at": "2022-10-24T10:24:44Z",
						"team_position_name": "Vox 3 WL",
						"updated_at": "2022-10-24T10:24:44Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71202409"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71203164"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4585961"
							},
							"data": {
								"type": "Team",
								"id": "4585961"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members/844831763"
					}
				},
				{
					"type": "PlanPerson",
					"id": "844831803",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-09-06T12:46:58Z",
						"decline_reason": null,
						"name": "Eric Liljero",
						"notes": null,
						"notification_changed_at": "2022-10-24T10:24:49Z",
						"notification_changed_by_name": "Moa Segerfeldt",
						"notification_prepared_at": "2022-10-24T10:24:49Z",
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/EL.png?g=224x224%23",
						"prepare_notification": true,
						"status": "C",
						"status_updated_at": "2022-10-24T10:24:49Z",
						"team_position_name": "Keys 2",
						"updated_at": "2022-10-24T10:24:49Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71202409"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71203164"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4585960"
							},
							"data": {
								"type": "Team",
								"id": "4585960"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members/844831803"
					}
				},
				{
					"type": "PlanPerson",
					"id": "847246776",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-09-14T12:37:26Z",
						"decline_reason": null,
						"name": "Anna Honardost",
						"notes": null,
						"notification_changed_at": null,
						"notification_changed_by_name": null,
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-14T12:43:48Z",
						"notification_sender_name": "Jasmine Forsberg",
						"notification_sent_at": "2022-09-14T12:37:36Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/AH.png?g=224x224%23",
						"prepare_notification": false,
						"status": "U",
						"status_updated_at": null,
						"team_position_name": "Lyrics/Clock",
						"updated_at": "2022-09-14T12:43:48Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "72372892"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71201554"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4586055"
							},
							"data": {
								"type": "Team",
								"id": "4586055"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "71201554"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members/847246776"
					}
				},
				{
					"type": "PlanPerson",
					"id": "848367816",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-09-19T11:31:06Z",
						"decline_reason": null,
						"name": "Ade Muzazi",
						"notes": null,
						"notification_changed_at": "2022-09-27T04:47:20Z",
						"notification_changed_by_name": "Ade Muzazi",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-26T12:38:48Z",
						"notification_sender_name": "Joseph Hettrel",
						"notification_sent_at": "2022-09-26T11:40:10Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/person/82522053-1600540476/avatar.6.jpg?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-09-27T04:47:20Z",
						"team_position_name": "Camera 2",
						"updated_at": "2022-09-27T04:47:20Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "82522053"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71202006"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4585964"
							},
							"data": {
								"type": "Team",
								"id": "4585964"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "71202006"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members/848367816"
					}
				},
				{
					"type": "PlanPerson",
					"id": "848367879",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-09-19T11:32:46Z",
						"decline_reason": null,
						"name": "Joel Acevedo",
						"notes": null,
						"notification_changed_at": null,
						"notification_changed_by_name": null,
						"notification_prepared_at": "2022-09-19T11:32:46Z",
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/person/93930403-1623676193/avatar.1.jpg?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": null,
						"team_position_name": "Link Tech",
						"updated_at": "2022-10-25T08:06:29Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "93930403"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71202006"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4585964"
							},
							"data": {
								"type": "Team",
								"id": "4585964"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "71202006"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members/848367879"
					}
				},
				{
					"type": "PlanPerson",
					"id": "848367944",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-09-19T11:34:37Z",
						"decline_reason": null,
						"name": "Ida Svahn",
						"notes": null,
						"notification_changed_at": "2022-09-27T14:05:15Z",
						"notification_changed_by_name": "Ida Svahn",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-26T18:23:35Z",
						"notification_sender_name": "Joseph Hettrel",
						"notification_sent_at": "2022-09-26T11:40:10Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/IS.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-09-27T14:05:15Z",
						"team_position_name": "Camera 3",
						"updated_at": "2022-09-27T14:05:16Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71200466"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71202006"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4585964"
							},
							"data": {
								"type": "Team",
								"id": "4585964"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "71202006"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members/848367944"
					}
				},
				{
					"type": "PlanPerson",
					"id": "848715331",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-09-19T20:40:21Z",
						"decline_reason": null,
						"name": "Daniel Gundersen",
						"notes": null,
						"notification_changed_at": "2022-10-15T21:39:31Z",
						"notification_changed_by_name": "Daniel Gundersen",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-30T15:25:23Z",
						"notification_sender_name": "Frida Vincent Appiah",
						"notification_sent_at": "2022-09-30T15:20:05Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/DG.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-10-15T21:39:31Z",
						"team_position_name": "Keys 1",
						"updated_at": "2022-10-15T21:39:31Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71199754"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71203397"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4585960"
							},
							"data": {
								"type": "Team",
								"id": "4585960"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members/848715331"
					}
				},
				{
					"type": "PlanPerson",
					"id": "852979578",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-03T18:04:38Z",
						"decline_reason": null,
						"name": "Philip Sandwall",
						"notes": null,
						"notification_changed_at": "2022-10-07T22:18:24Z",
						"notification_changed_by_name": "Philip Sandwall",
						"notification_prepared_at": null,
						"notification_read_at": null,
						"notification_sender_name": "Philip Sandwall",
						"notification_sent_at": "2022-10-07T21:48:51Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/person/71205934-1578580806/avatar.1.jpg?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-10-07T22:18:24Z",
						"team_position_name": "Hot Seat",
						"updated_at": "2022-10-07T22:18:24Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71205934"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71205934"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4586024"
							},
							"data": {
								"type": "Team",
								"id": "4586024"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "71205934"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members/852979578"
					}
				},
				{
					"type": "PlanPerson",
					"id": "852979595",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-03T18:04:41Z",
						"decline_reason": null,
						"name": "Philip Sandwall",
						"notes": null,
						"notification_changed_at": "2022-10-07T22:18:22Z",
						"notification_changed_by_name": "Philip Sandwall",
						"notification_prepared_at": null,
						"notification_read_at": null,
						"notification_sender_name": "Philip Sandwall",
						"notification_sent_at": "2022-10-07T21:48:51Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/person/71205934-1578580806/avatar.1.jpg?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-10-07T22:18:22Z",
						"team_position_name": "Events Oversight",
						"updated_at": "2022-10-07T22:18:22Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71205934"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71205934"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4586024"
							},
							"data": {
								"type": "Team",
								"id": "4586024"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "71205934"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members/852979595"
					}
				},
				{
					"type": "PlanPerson",
					"id": "852979634",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-03T18:04:48Z",
						"decline_reason": null,
						"name": "Magdalena Palm",
						"notes": null,
						"notification_changed_at": null,
						"notification_changed_by_name": null,
						"notification_prepared_at": null,
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/MP.png?g=224x224%23",
						"prepare_notification": true,
						"status": "U",
						"status_updated_at": null,
						"team_position_name": "Internal",
						"updated_at": "2022-10-03T18:04:48Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71200227"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71205934"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4586024"
							},
							"data": {
								"type": "Team",
								"id": "4586024"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "71205934"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members/852979634"
					}
				},
				{
					"type": "PlanPerson",
					"id": "852979639",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-03T18:04:48Z",
						"decline_reason": null,
						"name": "Patricia Nilsson",
						"notes": null,
						"notification_changed_at": "2022-10-09T21:03:04Z",
						"notification_changed_by_name": "Philip Sandwall",
						"notification_prepared_at": null,
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/PN.png?g=224x224%23",
						"prepare_notification": true,
						"status": "C",
						"status_updated_at": "2022-10-09T21:03:04Z",
						"team_position_name": "Internal",
						"updated_at": "2022-10-09T21:03:04Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71200125"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71205934"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4586024"
							},
							"data": {
								"type": "Team",
								"id": "4586024"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "71205934"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members/852979639"
					}
				},
				{
					"type": "PlanPerson",
					"id": "852979788",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-03T18:05:13Z",
						"decline_reason": null,
						"name": "Julie Douib",
						"notes": null,
						"notification_changed_at": null,
						"notification_changed_by_name": null,
						"notification_prepared_at": null,
						"notification_read_at": "2022-10-07T21:50:09Z",
						"notification_sender_name": "Philip Sandwall",
						"notification_sent_at": "2022-10-07T21:49:12Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/JD.png?g=224x224%23",
						"prepare_notification": false,
						"status": "U",
						"status_updated_at": null,
						"team_position_name": "Internal",
						"updated_at": "2022-10-07T21:50:09Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71199597"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71205934"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4586024"
							},
							"data": {
								"type": "Team",
								"id": "4586024"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "71205934"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members/852979788"
					}
				},
				{
					"type": "PlanPerson",
					"id": "852980036",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-03T18:05:40Z",
						"decline_reason": null,
						"name": "Zantana Ibrahim",
						"notes": null,
						"notification_changed_at": null,
						"notification_changed_by_name": null,
						"notification_prepared_at": null,
						"notification_read_at": null,
						"notification_sender_name": "Philip Sandwall",
						"notification_sent_at": "2022-10-07T21:48:51Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/ZI.png?g=224x224%23",
						"prepare_notification": false,
						"status": "U",
						"status_updated_at": null,
						"team_position_name": "External",
						"updated_at": "2022-10-07T21:48:51Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71199818"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71205934"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4586024"
							},
							"data": {
								"type": "Team",
								"id": "4586024"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "71205934"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members/852980036"
					}
				},
				{
					"type": "PlanPerson",
					"id": "852980051",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-03T18:05:41Z",
						"decline_reason": null,
						"name": "Emma Pettersson",
						"notes": null,
						"notification_changed_at": "2022-10-07T22:12:50Z",
						"notification_changed_by_name": "Emma Pettersson",
						"notification_prepared_at": null,
						"notification_read_at": "2022-10-07T22:12:05Z",
						"notification_sender_name": "Philip Sandwall",
						"notification_sent_at": "2022-10-07T21:48:51Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/EP.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-10-07T22:12:50Z",
						"team_position_name": "External",
						"updated_at": "2022-10-07T22:12:50Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "99680559"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71205934"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4586024"
							},
							"data": {
								"type": "Team",
								"id": "4586024"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "71205934"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members/852980051"
					}
				},
				{
					"type": "PlanPerson",
					"id": "853185348",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-04T11:15:48Z",
						"decline_reason": null,
						"name": "Julie Douib",
						"notes": null,
						"notification_changed_at": "2022-10-04T11:29:49Z",
						"notification_changed_by_name": "Julie Douib",
						"notification_prepared_at": null,
						"notification_read_at": "2022-10-04T11:29:40Z",
						"notification_sender_name": "Joseph Hettrel",
						"notification_sent_at": "2022-10-04T11:17:09Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/JD.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-10-04T11:29:49Z",
						"team_position_name": "Link Communicator",
						"updated_at": "2022-10-04T11:29:49Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71199597"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71202006"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4585964"
							},
							"data": {
								"type": "Team",
								"id": "4585964"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "71202006"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members/853185348"
					}
				},
				{
					"type": "PlanPerson",
					"id": "853833233",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-06T09:03:57Z",
						"decline_reason": null,
						"name": "Jouni Niemi",
						"notes": null,
						"notification_changed_at": "2022-10-06T09:04:02Z",
						"notification_changed_by_name": "Kevin StrÃ¶mberg",
						"notification_prepared_at": null,
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/JN.png?g=224x224%23",
						"prepare_notification": true,
						"status": "C",
						"status_updated_at": "2022-10-06T09:04:02Z",
						"team_position_name": "FOH Tech",
						"updated_at": "2022-10-06T09:04:02Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "75824129"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "57666197"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4585959"
							},
							"data": {
								"type": "Team",
								"id": "4585959"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "57666197"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members/853833233"
					}
				},
				{
					"type": "PlanPerson",
					"id": "854653644",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-10T20:18:02Z",
						"decline_reason": null,
						"name": "Jasmine Forsberg",
						"notes": null,
						"notification_changed_at": "2022-10-15T18:24:56Z",
						"notification_changed_by_name": "Frida Vincent Appiah",
						"notification_prepared_at": "2022-10-15T18:24:56Z",
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/person/71201554-1578579812/avatar.2.png?g=224x224%23",
						"prepare_notification": true,
						"status": "C",
						"status_updated_at": "2022-10-15T18:24:56Z",
						"team_position_name": "VD",
						"updated_at": "2022-10-15T18:24:56Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71201554"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71202980"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4585961"
							},
							"data": {
								"type": "Team",
								"id": "4585961"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members/854653644"
					}
				},
				{
					"type": "PlanPerson",
					"id": "855633235",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-13T21:05:41Z",
						"decline_reason": null,
						"name": "Aron Levi Sigmundsson",
						"notes": null,
						"notification_changed_at": null,
						"notification_changed_by_name": null,
						"notification_prepared_at": null,
						"notification_read_at": null,
						"notification_sender_name": "Ida Svahn",
						"notification_sent_at": "2022-10-24T11:53:28Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/person/98219606-1632394443/avatar.2.jpg?g=224x224%23",
						"prepare_notification": false,
						"status": "U",
						"status_updated_at": null,
						"team_position_name": "Fotograf",
						"updated_at": "2022-10-24T11:53:28Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "98219606"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71200466"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4585962"
							},
							"data": {
								"type": "Team",
								"id": "4585962"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "71200466"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members/855633235"
					}
				},
				{
					"type": "PlanPerson",
					"id": "855633279",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-13T21:05:52Z",
						"decline_reason": null,
						"name": "Sebastian Ekman",
						"notes": null,
						"notification_changed_at": null,
						"notification_changed_by_name": null,
						"notification_prepared_at": null,
						"notification_read_at": null,
						"notification_sender_name": "Ida Svahn",
						"notification_sent_at": "2022-10-24T11:53:28Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/SE.png?g=224x224%23",
						"prepare_notification": false,
						"status": "U",
						"status_updated_at": null,
						"team_position_name": "Fotograf",
						"updated_at": "2022-10-24T11:53:28Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "80651429"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71200466"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4585962"
							},
							"data": {
								"type": "Team",
								"id": "4585962"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "71200466"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members/855633279"
					}
				},
				{
					"type": "PlanPerson",
					"id": "855633333",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-13T21:06:02Z",
						"decline_reason": null,
						"name": "Gabriel Bilby",
						"notes": null,
						"notification_changed_at": "2022-10-25T08:37:34Z",
						"notification_changed_by_name": "Ida Svahn",
						"notification_prepared_at": null,
						"notification_read_at": null,
						"notification_sender_name": "Ida Svahn",
						"notification_sent_at": "2022-10-24T11:53:28Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/gb.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-10-25T08:37:34Z",
						"team_position_name": "Fotograf",
						"updated_at": "2022-10-25T08:37:34Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "74984287"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540217"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71200466"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4585962"
							},
							"data": {
								"type": "Team",
								"id": "4585962"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "71200466"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284898"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1134523/plans/60540217/team_members/855633333"
					}
				}
			],
			"included": [
				{
					"type": "Team",
					"id": "4585961",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-08-10T07:12:52Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Worship Vocals",
						"rehearsal_team": true,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2022-08-17T15:49:51Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4585961"
					}
				},
				{
					"type": "Team",
					"id": "4585960",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-08-10T07:11:54Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Worship Band",
						"rehearsal_team": true,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2022-08-17T15:49:51Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4585960"
					}
				},
				{
					"type": "Team",
					"id": "4586055",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-08-10T13:39:24Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Media",
						"rehearsal_team": true,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2022-08-17T15:49:51Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4586055"
					}
				},
				{
					"type": "Team",
					"id": "4585964",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-08-10T07:23:25Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "TV",
						"rehearsal_team": true,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2022-08-17T15:49:51Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4585964"
					}
				},
				{
					"type": "Team",
					"id": "4586024",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-08-10T13:21:45Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Creative Events",
						"rehearsal_team": true,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2022-10-25T06:55:24Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4586024"
					}
				},
				{
					"type": "Team",
					"id": "4585959",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-08-10T07:10:42Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Audio",
						"rehearsal_team": true,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2022-08-17T15:49:51Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4585959"
					}
				},
				{
					"type": "Team",
					"id": "4585962",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-08-10T07:18:46Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Communications",
						"rehearsal_team": true,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2022-08-17T15:49:51Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1134523"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4585962"
					}
				}
			],
			"meta": {
				"total_count": 36,
				"count": 25,
				"next": {
					"offset": 25
				},
				"can_query_by": [
					"team_id"
				],
				"can_include": [
					"declined_plan_times",
					"person",
					"plan",
					"team"
				],
				"can_filter": [
					"confirmed",
					"not_deleted",
					"not_archived"
				],
				"parent": {
					"id": "60540217",
					"type": "Plan"
				}
			}
		},
		"date": "30 Oct 2022",
		"serviceTypeName": "Norra AM"
	},
	{
		"neededPositions": {
			"links": {
				"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/needed_positions?include=team"
			},
			"data": [
				{
					"type": "NeededPosition",
					"id": "769808916",
					"attributes": {
						"quantity": 1,
						"scheduled_to": "plan",
						"team_position_name": "Photo 1"
					},
					"relationships": {
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4640591"
							},
							"data": {
								"type": "Team",
								"id": "4640591"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"time": {
							"data": null
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/needed_positions/769808916"
					}
				},
				{
					"type": "NeededPosition",
					"id": "769808919",
					"attributes": {
						"quantity": 1,
						"scheduled_to": "plan",
						"team_position_name": "Photo 2"
					},
					"relationships": {
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4640591"
							},
							"data": {
								"type": "Team",
								"id": "4640591"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"time": {
							"data": null
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/needed_positions/769808919"
					}
				},
				{
					"type": "NeededPosition",
					"id": "769808922",
					"attributes": {
						"quantity": 1,
						"scheduled_to": "plan",
						"team_position_name": "Photo Editing"
					},
					"relationships": {
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4640591"
							},
							"data": {
								"type": "Team",
								"id": "4640591"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"time": {
							"data": null
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/needed_positions/769808922"
					}
				},
				{
					"type": "NeededPosition",
					"id": "769808934",
					"attributes": {
						"quantity": 1,
						"scheduled_to": "plan",
						"team_position_name": "Camera Live-Feed"
					},
					"relationships": {
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4572867"
							},
							"data": {
								"type": "Team",
								"id": "4572867"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"time": {
							"data": null
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/needed_positions/769808934"
					}
				},
				{
					"type": "NeededPosition",
					"id": "769808943",
					"attributes": {
						"quantity": 1,
						"scheduled_to": "plan",
						"team_position_name": "Co-tech"
					},
					"relationships": {
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4572868"
							},
							"data": {
								"type": "Team",
								"id": "4572868"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"time": {
							"data": null
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/needed_positions/769808943"
					}
				},
				{
					"type": "NeededPosition",
					"id": "785302759",
					"attributes": {
						"quantity": 1,
						"scheduled_to": "plan",
						"team_position_name": "Stage Manager"
					},
					"relationships": {
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4572868"
							},
							"data": {
								"type": "Team",
								"id": "4572868"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"time": {
							"data": null
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/needed_positions/785302759"
					}
				},
				{
					"type": "NeededPosition",
					"id": "785464481",
					"attributes": {
						"quantity": 1,
						"scheduled_to": "plan",
						"team_position_name": "Acoustic"
					},
					"relationships": {
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4586003"
							},
							"data": {
								"type": "Team",
								"id": "4586003"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"time": {
							"data": null
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/needed_positions/785464481"
					}
				},
				{
					"type": "NeededPosition",
					"id": "785628759",
					"attributes": {
						"quantity": 1,
						"scheduled_to": "plan",
						"team_position_name": "Office"
					},
					"relationships": {
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4640592"
							},
							"data": {
								"type": "Team",
								"id": "4640592"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"time": {
							"data": null
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/needed_positions/785628759"
					}
				}
			],
			"included": [
				{
					"type": "Team",
					"id": "4640591",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-09-17T08:09:13Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Communications",
						"rehearsal_team": null,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2021-09-17T08:09:13Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4640591"
					}
				},
				{
					"type": "Team",
					"id": "4572867",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-07-29T17:17:57Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Media",
						"rehearsal_team": true,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2021-07-29T17:17:57Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4572867"
					}
				},
				{
					"type": "Team",
					"id": "4572868",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-07-29T17:17:57Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Production",
						"rehearsal_team": true,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2021-07-29T17:17:57Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4572868"
					}
				},
				{
					"type": "Team",
					"id": "4586003",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-08-10T12:40:20Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Worship Vocals",
						"rehearsal_team": false,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2022-02-24T09:41:16Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "0"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4586003"
					}
				},
				{
					"type": "Team",
					"id": "4640592",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-09-17T08:12:14Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Creative Events",
						"rehearsal_team": false,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2022-03-30T08:06:18Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4640592"
					}
				}
			],
			"meta": {
				"total_count": 8,
				"count": 8,
				"can_query_by": [
					"team_id"
				],
				"can_include": [
					"team",
					"time"
				],
				"parent": {
					"id": "60725429",
					"type": "Plan"
				}
			}
		},
		"teamMembers": {
			"links": {
				"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members?include=team",
				"next": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members?include=team&offset=25"
			},
			"data": [
				{
					"type": "PlanPerson",
					"id": "841587796",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-08-25T12:37:28Z",
						"decline_reason": null,
						"name": "Rebecca Ginal",
						"notes": null,
						"notification_changed_at": "2022-09-06T20:44:08Z",
						"notification_changed_by_name": "Rebecca Ginal",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-06T20:42:49Z",
						"notification_sender_name": "Frida Vincent Appiah",
						"notification_sent_at": "2022-09-06T20:33:08Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/RG.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-09-06T20:44:08Z",
						"team_position_name": "Vox 4",
						"updated_at": "2022-09-06T20:44:08Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71201856"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71202980"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4586003"
							},
							"data": {
								"type": "Team",
								"id": "4586003"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "0"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members/841587796"
					}
				},
				{
					"type": "PlanPerson",
					"id": "841587810",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-08-25T12:37:35Z",
						"decline_reason": null,
						"name": "Rebecca Ginal",
						"notes": null,
						"notification_changed_at": "2022-09-06T20:44:08Z",
						"notification_changed_by_name": "Rebecca Ginal",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-06T20:42:48Z",
						"notification_sender_name": "Frida Vincent Appiah",
						"notification_sent_at": "2022-09-06T20:33:08Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/RG.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-09-06T20:44:08Z",
						"team_position_name": "VD",
						"updated_at": "2022-09-06T20:44:08Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71201856"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71202980"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4586003"
							},
							"data": {
								"type": "Team",
								"id": "4586003"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "0"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members/841587810"
					}
				},
				{
					"type": "PlanPerson",
					"id": "841587838",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-08-25T12:37:50Z",
						"decline_reason": null,
						"name": "Linnea Ikpo",
						"notes": null,
						"notification_changed_at": "2022-09-06T20:43:06Z",
						"notification_changed_by_name": "Linnea Ikpo",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-06T20:37:57Z",
						"notification_sender_name": "Frida Vincent Appiah",
						"notification_sent_at": "2022-09-06T20:34:40Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/LI.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-09-06T20:43:06Z",
						"team_position_name": "Vox 1",
						"updated_at": "2022-09-06T20:43:06Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "81065929"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71202980"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4586003"
							},
							"data": {
								"type": "Team",
								"id": "4586003"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "0"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members/841587838"
					}
				},
				{
					"type": "PlanPerson",
					"id": "843575006",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-08-31T15:05:23Z",
						"decline_reason": null,
						"name": "Josef Lekardal",
						"notes": null,
						"notification_changed_at": "2022-09-13T12:48:21Z",
						"notification_changed_by_name": "Josef Lekardal",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-06T21:56:01Z",
						"notification_sender_name": "Frida Vincent Appiah",
						"notification_sent_at": "2022-09-06T20:33:39Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/person/70400156-1576512034/avatar.1.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-09-13T12:48:21Z",
						"team_position_name": "Drums",
						"updated_at": "2022-09-13T12:48:21Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4586002"
							},
							"data": {
								"type": "Team",
								"id": "4586002"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "0"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members/843575006"
					}
				},
				{
					"type": "PlanPerson",
					"id": "843595279",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-08-31T15:37:25Z",
						"decline_reason": null,
						"name": "Cristian DurÃ©",
						"notes": null,
						"notification_changed_at": "2022-09-08T05:16:02Z",
						"notification_changed_by_name": "Cristian DurÃ©",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-07T05:02:51Z",
						"notification_sender_name": "Frida Vincent Appiah",
						"notification_sent_at": "2022-09-06T20:34:03Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/CD.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-09-08T05:16:02Z",
						"team_position_name": "Keys 1",
						"updated_at": "2022-09-08T05:16:02Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71199603"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4586002"
							},
							"data": {
								"type": "Team",
								"id": "4586002"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "0"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members/843595279"
					}
				},
				{
					"type": "PlanPerson",
					"id": "843595334",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-08-31T15:37:29Z",
						"decline_reason": null,
						"name": "Cristian DurÃ©",
						"notes": null,
						"notification_changed_at": "2022-09-08T05:16:02Z",
						"notification_changed_by_name": "Cristian DurÃ©",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-07T05:02:51Z",
						"notification_sender_name": "Frida Vincent Appiah",
						"notification_sent_at": "2022-09-06T20:34:03Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/CD.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-09-08T05:16:02Z",
						"team_position_name": "MD",
						"updated_at": "2022-09-08T05:16:02Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71199603"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4586002"
							},
							"data": {
								"type": "Team",
								"id": "4586002"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "0"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members/843595334"
					}
				},
				{
					"type": "PlanPerson",
					"id": "844650213",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-09-05T14:17:44Z",
						"decline_reason": null,
						"name": "Wilhelm Dahlroe",
						"notes": null,
						"notification_changed_at": "2022-10-24T18:50:13Z",
						"notification_changed_by_name": "Hanna HjelmÃ¥ker",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-06T20:55:38Z",
						"notification_sender_name": "Frida Vincent Appiah",
						"notification_sent_at": "2022-09-06T20:34:35Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/WD.png?g=224x224%23",
						"prepare_notification": false,
						"status": "D",
						"status_updated_at": "2022-10-24T18:50:13Z",
						"team_position_name": "Acoustic",
						"updated_at": "2022-10-24T18:50:13Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71201568"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71203164"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4586003"
							},
							"data": {
								"type": "Team",
								"id": "4586003"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "0"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members/844650213"
					}
				},
				{
					"type": "PlanPerson",
					"id": "844650261",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-09-05T14:17:48Z",
						"decline_reason": null,
						"name": "Wilhelm Dahlroe",
						"notes": null,
						"notification_changed_at": "2022-10-24T18:49:52Z",
						"notification_changed_by_name": "Hanna HjelmÃ¥ker",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-06T20:55:38Z",
						"notification_sender_name": "Frida Vincent Appiah",
						"notification_sent_at": "2022-09-06T20:34:35Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/WD.png?g=224x224%23",
						"prepare_notification": false,
						"status": "D",
						"status_updated_at": "2022-10-24T18:49:52Z",
						"team_position_name": "Vox 2 Co-WL",
						"updated_at": "2022-10-24T18:49:52Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71201568"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71203164"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4586003"
							},
							"data": {
								"type": "Team",
								"id": "4586003"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "0"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members/844650261"
					}
				},
				{
					"type": "PlanPerson",
					"id": "845158673",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-09-06T20:52:44Z",
						"decline_reason": null,
						"name": "Evelyn Barrantes",
						"notes": null,
						"notification_changed_at": "2022-10-24T09:24:41Z",
						"notification_changed_by_name": "Evelyn Barrantes",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-06T21:27:51Z",
						"notification_sender_name": "Sonia Qureshi",
						"notification_sent_at": "2022-09-06T21:03:50Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/EB.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-10-24T09:24:41Z",
						"team_position_name": "Lyrics/Clock",
						"updated_at": "2022-10-24T09:24:42Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "80448658"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4572867"
							},
							"data": {
								"type": "Team",
								"id": "4572867"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members/845158673"
					}
				},
				{
					"type": "PlanPerson",
					"id": "846372803",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-09-12T06:03:59Z",
						"decline_reason": null,
						"name": "Sara Cerda",
						"notes": null,
						"notification_changed_at": "2022-10-19T12:56:10Z",
						"notification_changed_by_name": "Sara Cerda",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-20T14:35:02Z",
						"notification_sender_name": "Julia Gagnert",
						"notification_sent_at": "2022-09-20T06:15:13Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/SC.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-10-19T12:56:10Z",
						"team_position_name": "Lighting Operator",
						"updated_at": "2022-10-19T12:56:10Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71204275"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71201220"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4572868"
							},
							"data": {
								"type": "Team",
								"id": "4572868"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "71201220"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members/846372803"
					}
				},
				{
					"type": "PlanPerson",
					"id": "846499809",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-09-12T15:53:53Z",
						"decline_reason": null,
						"name": "Gabriel FrÃ¶dÃ©n",
						"notes": null,
						"notification_changed_at": null,
						"notification_changed_by_name": null,
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-29T17:12:26Z",
						"notification_sender_name": "Julia Gagnert",
						"notification_sent_at": "2022-09-28T18:25:00Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/GF.png?g=224x224%23",
						"prepare_notification": false,
						"status": "U",
						"status_updated_at": null,
						"team_position_name": "FOH Tech",
						"updated_at": "2022-09-29T17:12:26Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71201814"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71201220"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4586001"
							},
							"data": {
								"type": "Team",
								"id": "4586001"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "71201220"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members/846499809"
					}
				},
				{
					"type": "PlanPerson",
					"id": "848236667",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-09-18T16:11:54Z",
						"decline_reason": null,
						"name": "Kevin StrÃ¶mberg",
						"notes": null,
						"notification_changed_at": null,
						"notification_changed_by_name": null,
						"notification_prepared_at": null,
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/KS.png?g=224x224%23",
						"prepare_notification": false,
						"status": "U",
						"status_updated_at": null,
						"team_position_name": "PM",
						"updated_at": "2022-10-24T08:07:29Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "57666197"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71201220"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4572868"
							},
							"data": {
								"type": "Team",
								"id": "4572868"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "71201220"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members/848236667"
					}
				},
				{
					"type": "PlanPerson",
					"id": "848266663",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-09-18T19:08:07Z",
						"decline_reason": null,
						"name": "Martin Tunhav",
						"notes": null,
						"notification_changed_at": "2022-09-19T10:36:39Z",
						"notification_changed_by_name": "Martin Tunhav",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-19T10:36:29Z",
						"notification_sender_name": "Miranda Prim",
						"notification_sent_at": "2022-09-18T19:08:16Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/MT.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-09-19T10:36:39Z",
						"team_position_name": "Vox 5",
						"updated_at": "2022-09-19T10:36:39Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71203434"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71202980"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4586003"
							},
							"data": {
								"type": "Team",
								"id": "4586003"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "0"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members/848266663"
					}
				},
				{
					"type": "PlanPerson",
					"id": "850534992",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-09-25T20:40:14Z",
						"decline_reason": null,
						"name": "Daniel SÃ¶derlund",
						"notes": null,
						"notification_changed_at": "2022-09-25T20:40:23Z",
						"notification_changed_by_name": "Frida Vincent Appiah",
						"notification_prepared_at": "2022-09-25T20:40:23Z",
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/person/71203255-1578579903/avatar.1.jpg?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-09-25T20:40:23Z",
						"team_position_name": "Keys 2",
						"updated_at": "2022-10-24T08:07:32Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71203255"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71203397"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4586002"
							},
							"data": {
								"type": "Team",
								"id": "4586002"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "0"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members/850534992"
					}
				},
				{
					"type": "PlanPerson",
					"id": "852053738",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-09-29T06:06:06Z",
						"decline_reason": null,
						"name": "Taneli Hakkarainen",
						"notes": null,
						"notification_changed_at": "2022-09-30T15:35:18Z",
						"notification_changed_by_name": "Taneli Hakkarainen",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-30T15:34:39Z",
						"notification_sender_name": "Frida Vincent Appiah",
						"notification_sent_at": "2022-09-30T15:20:08Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/TH.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-09-30T15:35:18Z",
						"team_position_name": "Gtr 1",
						"updated_at": "2022-09-30T15:35:18Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "74729270"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71203397"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4586002"
							},
							"data": {
								"type": "Team",
								"id": "4586002"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "0"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members/852053738"
					}
				},
				{
					"type": "PlanPerson",
					"id": "855826624",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-15T08:21:09Z",
						"decline_reason": null,
						"name": "Annabelle Stijvers",
						"notes": null,
						"notification_changed_at": null,
						"notification_changed_by_name": null,
						"notification_prepared_at": null,
						"notification_read_at": null,
						"notification_sender_name": "Julia Gagnert",
						"notification_sent_at": "2022-10-19T13:05:11Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/AS.png?g=224x224%23",
						"prepare_notification": false,
						"status": "U",
						"status_updated_at": null,
						"team_position_name": "Light Assist",
						"updated_at": "2022-10-19T13:05:11Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "84293597"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71201220"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4572868"
							},
							"data": {
								"type": "Team",
								"id": "4572868"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "71201220"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members/855826624"
					}
				},
				{
					"type": "PlanPerson",
					"id": "857925209",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-24T07:40:15Z",
						"decline_reason": null,
						"name": "Abraham Setiawan",
						"notes": null,
						"notification_changed_at": "2022-10-24T07:49:25Z",
						"notification_changed_by_name": "Frida Vincent Appiah",
						"notification_prepared_at": "2022-10-24T07:49:25Z",
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/person/71203184-1578579900/avatar.2.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-10-24T07:49:25Z",
						"team_position_name": "Bass",
						"updated_at": "2022-10-24T08:07:30Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71203184"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71203397"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4586002"
							},
							"data": {
								"type": "Team",
								"id": "4586002"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "0"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members/857925209"
					}
				},
				{
					"type": "PlanPerson",
					"id": "857929793",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-24T10:24:57Z",
						"decline_reason": null,
						"name": "Frida Vincent Appiah",
						"notes": null,
						"notification_changed_at": "2022-10-24T18:48:58Z",
						"notification_changed_by_name": "Hanna HjelmÃ¥ker",
						"notification_prepared_at": "2022-10-24T18:48:58Z",
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/FV.png?g=224x224%23",
						"prepare_notification": true,
						"status": "C",
						"status_updated_at": "2022-10-24T18:48:58Z",
						"team_position_name": "Vox 3 WL",
						"updated_at": "2022-10-24T18:48:58Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71203397"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71203164"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4586003"
							},
							"data": {
								"type": "Team",
								"id": "4586003"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "0"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members/857929793"
					}
				},
				{
					"type": "PlanPerson",
					"id": "857942814",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-24T12:58:19Z",
						"decline_reason": null,
						"name": "Moa Segerfeldt",
						"notes": null,
						"notification_changed_at": "2022-10-24T13:18:17Z",
						"notification_changed_by_name": "Sonia Qureshi",
						"notification_prepared_at": "2022-10-24T13:18:17Z",
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/MS.png?g=224x224%23",
						"prepare_notification": true,
						"status": "C",
						"status_updated_at": "2022-10-24T13:18:17Z",
						"team_position_name": "Co-Tech",
						"updated_at": "2022-10-24T13:18:17Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71203164"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4586001"
							},
							"data": {
								"type": "Team",
								"id": "4586001"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members/857942814"
					}
				},
				{
					"type": "PlanPerson",
					"id": "857943481",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-24T13:01:31Z",
						"decline_reason": null,
						"name": "Sonia Qureshi",
						"notes": null,
						"notification_changed_at": "2022-10-24T13:01:43Z",
						"notification_changed_by_name": "Sonia Qureshi",
						"notification_prepared_at": "2022-10-24T13:01:43Z",
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/person/75824246-1587424950/avatar.1.png?g=224x224%23",
						"prepare_notification": true,
						"status": "C",
						"status_updated_at": "2022-10-24T13:01:43Z",
						"team_position_name": "Service Producer",
						"updated_at": "2022-10-24T13:01:43Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4572868"
							},
							"data": {
								"type": "Team",
								"id": "4572868"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members/857943481"
					}
				},
				{
					"type": "PlanPerson",
					"id": "857952774",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-24T13:31:13Z",
						"decline_reason": null,
						"name": "Emeline Antonson",
						"notes": null,
						"notification_changed_at": null,
						"notification_changed_by_name": null,
						"notification_prepared_at": "2022-10-24T13:31:13Z",
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/EA.png?g=224x224%23",
						"prepare_notification": true,
						"status": "U",
						"status_updated_at": null,
						"team_position_name": "Creative Oversight",
						"updated_at": "2022-10-24T13:31:13Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "83761799"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4807207"
							},
							"data": {
								"type": "Team",
								"id": "4807207"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members/857952774"
					}
				},
				{
					"type": "PlanPerson",
					"id": "857979455",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-24T14:22:15Z",
						"decline_reason": null,
						"name": "Jitse van Esch",
						"notes": null,
						"notification_changed_at": "2022-10-24T14:22:21Z",
						"notification_changed_by_name": "Sonia Qureshi",
						"notification_prepared_at": "2022-10-24T14:22:21Z",
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/person/99334747-1634798288/avatar.2.jpg?g=224x224%23",
						"prepare_notification": true,
						"status": "C",
						"status_updated_at": "2022-10-24T14:22:21Z",
						"team_position_name": "Multimedia",
						"updated_at": "2022-10-24T14:22:21Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "99334747"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4572867"
							},
							"data": {
								"type": "Team",
								"id": "4572867"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members/857979455"
					}
				},
				{
					"type": "PlanPerson",
					"id": "857979461",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-24T14:22:15Z",
						"decline_reason": null,
						"name": "Zoriana Kinash",
						"notes": null,
						"notification_changed_at": null,
						"notification_changed_by_name": null,
						"notification_prepared_at": null,
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/ZK.png?g=224x224%23",
						"prepare_notification": false,
						"status": "U",
						"status_updated_at": null,
						"team_position_name": "Multimedia",
						"updated_at": "2022-10-24T14:22:15Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "94291098"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4572867"
							},
							"data": {
								"type": "Team",
								"id": "4572867"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members/857979461"
					}
				},
				{
					"type": "PlanPerson",
					"id": "857996362",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-24T14:45:52Z",
						"decline_reason": null,
						"name": "Evelyn Lindahl",
						"notes": null,
						"notification_changed_at": "2022-10-24T14:45:59Z",
						"notification_changed_by_name": "Events Hillsong",
						"notification_prepared_at": "2022-10-24T14:45:59Z",
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/el.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-10-24T14:45:59Z",
						"team_position_name": "Hot Seat",
						"updated_at": "2022-10-25T08:06:26Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "83197301"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824079"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4640592"
							},
							"data": {
								"type": "Team",
								"id": "4640592"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824079"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members/857996362"
					}
				},
				{
					"type": "PlanPerson",
					"id": "857996859",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-24T14:46:12Z",
						"decline_reason": null,
						"name": "Karen Guirguis",
						"notes": null,
						"notification_changed_at": "2022-10-24T14:50:18Z",
						"notification_changed_by_name": "Events Hillsong",
						"notification_prepared_at": "2022-10-24T14:50:18Z",
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/KG.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-10-24T14:50:18Z",
						"team_position_name": "Hot Seat Support",
						"updated_at": "2022-10-25T08:06:27Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "90401726"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60725429"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824079"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4640592"
							},
							"data": {
								"type": "Team",
								"id": "4640592"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824079"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147742436"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155896/plans/60725429/team_members/857996859"
					}
				}
			],
			"included": [
				{
					"type": "Team",
					"id": "4586003",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-08-10T12:40:20Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Worship Vocals",
						"rehearsal_team": false,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2022-02-24T09:41:16Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "0"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4586003"
					}
				},
				{
					"type": "Team",
					"id": "4586002",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-08-10T12:40:20Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Worship Band",
						"rehearsal_team": false,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2022-02-24T09:36:51Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "0"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4586002"
					}
				},
				{
					"type": "Team",
					"id": "4572867",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-07-29T17:17:57Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Media",
						"rehearsal_team": true,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2021-07-29T17:17:57Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4572867"
					}
				},
				{
					"type": "Team",
					"id": "4572868",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-07-29T17:17:57Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Production",
						"rehearsal_team": true,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2021-07-29T17:17:57Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4572868"
					}
				},
				{
					"type": "Team",
					"id": "4586001",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-08-10T12:40:20Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Audio",
						"rehearsal_team": false,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2021-08-10T12:40:20Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4586001"
					}
				},
				{
					"type": "Team",
					"id": "4807207",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2022-01-19T09:18:59Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Oversights",
						"rehearsal_team": false,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2022-01-19T09:58:12Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4807207"
					}
				},
				{
					"type": "Team",
					"id": "4640592",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-09-17T08:12:14Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Creative Events",
						"rehearsal_team": false,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2022-03-30T08:06:18Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155896"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4640592"
					}
				}
			],
			"meta": {
				"total_count": 31,
				"count": 25,
				"next": {
					"offset": 25
				},
				"can_query_by": [
					"team_id"
				],
				"can_include": [
					"declined_plan_times",
					"person",
					"plan",
					"team"
				],
				"can_filter": [
					"confirmed",
					"not_deleted",
					"not_archived"
				],
				"parent": {
					"id": "60725429",
					"type": "Plan"
				}
			}
		},
		"date": "30 Oct 2022",
		"serviceTypeName": "City AM"
	},
	{
		"neededPositions": {
			"links": {
				"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/needed_positions?include=team"
			},
			"data": [
				{
					"type": "NeededPosition",
					"id": "767195432",
					"attributes": {
						"quantity": 1,
						"scheduled_to": "plan",
						"team_position_name": "Photo 1"
					},
					"relationships": {
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4587909"
							},
							"data": {
								"type": "Team",
								"id": "4587909"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"time": {
							"data": null
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/needed_positions/767195432"
					}
				},
				{
					"type": "NeededPosition",
					"id": "767195439",
					"attributes": {
						"quantity": 1,
						"scheduled_to": "plan",
						"team_position_name": "Photo Editing"
					},
					"relationships": {
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4587909"
							},
							"data": {
								"type": "Team",
								"id": "4587909"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"time": {
							"data": null
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/needed_positions/767195439"
					}
				},
				{
					"type": "NeededPosition",
					"id": "767195472",
					"attributes": {
						"quantity": 1,
						"scheduled_to": "plan",
						"team_position_name": "Camera Live-Feed"
					},
					"relationships": {
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4648866"
							},
							"data": {
								"type": "Team",
								"id": "4648866"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"time": {
							"data": null
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/needed_positions/767195472"
					}
				},
				{
					"type": "NeededPosition",
					"id": "767195496",
					"attributes": {
						"quantity": 1,
						"scheduled_to": "plan",
						"team_position_name": "Co-tech"
					},
					"relationships": {
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4572875"
							},
							"data": {
								"type": "Team",
								"id": "4572875"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"time": {
							"data": null
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/needed_positions/767195496"
					}
				},
				{
					"type": "NeededPosition",
					"id": "785282376",
					"attributes": {
						"quantity": 1,
						"scheduled_to": "plan",
						"team_position_name": "Gtr 1"
					},
					"relationships": {
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4587912"
							},
							"data": {
								"type": "Team",
								"id": "4587912"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"time": {
							"data": null
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/needed_positions/785282376"
					}
				},
				{
					"type": "NeededPosition",
					"id": "785304103",
					"attributes": {
						"quantity": 1,
						"scheduled_to": "plan",
						"team_position_name": "Creative Oversight"
					},
					"relationships": {
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4807208"
							},
							"data": {
								"type": "Team",
								"id": "4807208"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"time": {
							"data": null
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/needed_positions/785304103"
					}
				}
			],
			"included": [
				{
					"type": "Team",
					"id": "4587909",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-08-11T13:17:48Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Communications",
						"rehearsal_team": false,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2021-08-11T13:17:48Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4587909"
					}
				},
				{
					"type": "Team",
					"id": "4648866",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-09-23T08:08:48Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Media",
						"rehearsal_team": false,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2021-09-23T08:08:48Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4648866"
					}
				},
				{
					"type": "Team",
					"id": "4572875",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-07-29T17:18:53Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Production",
						"rehearsal_team": true,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2021-07-29T17:18:53Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4572875"
					}
				},
				{
					"type": "Team",
					"id": "4587912",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-08-11T13:17:49Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Worship Band",
						"rehearsal_team": false,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2021-09-10T08:38:04Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4587912"
					}
				},
				{
					"type": "Team",
					"id": "4807208",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2022-01-19T09:39:41Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Oversights",
						"rehearsal_team": false,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2022-01-19T09:39:41Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4807208"
					}
				}
			],
			"meta": {
				"total_count": 6,
				"count": 6,
				"can_query_by": [
					"team_id"
				],
				"can_include": [
					"team",
					"time"
				],
				"parent": {
					"id": "60540226",
					"type": "Plan"
				}
			}
		},
		"teamMembers": {
			"links": {
				"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members?include=team",
				"next": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members?include=team&offset=25"
			},
			"data": [
				{
					"type": "PlanPerson",
					"id": "842852354",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-08-29T21:16:28Z",
						"decline_reason": null,
						"name": "Sofia Zetterberg",
						"notes": null,
						"notification_changed_at": "2022-09-17T06:46:52Z",
						"notification_changed_by_name": "Sofia Zetterberg",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-06T21:18:01Z",
						"notification_sender_name": "Frida Vincent Appiah",
						"notification_sent_at": "2022-09-06T20:33:23Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/SZ.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-09-17T06:46:52Z",
						"team_position_name": "Vox 2 CO-WL",
						"updated_at": "2022-09-17T06:46:52Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71203598"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4587914"
							},
							"data": {
								"type": "Team",
								"id": "4587914"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "0"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members/842852354"
					}
				},
				{
					"type": "PlanPerson",
					"id": "842860434",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-08-29T21:30:46Z",
						"decline_reason": null,
						"name": "Emeline Antonson",
						"notes": null,
						"notification_changed_at": "2022-09-11T10:39:13Z",
						"notification_changed_by_name": "Emeline Antonson",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-06T20:50:43Z",
						"notification_sender_name": "Frida Vincent Appiah",
						"notification_sent_at": "2022-09-06T20:33:11Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/EA.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-09-11T10:39:13Z",
						"team_position_name": "Vox 4",
						"updated_at": "2022-09-11T10:39:13Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "83761799"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4587914"
							},
							"data": {
								"type": "Team",
								"id": "4587914"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "0"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members/842860434"
					}
				},
				{
					"type": "PlanPerson",
					"id": "843562486",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-08-31T14:44:04Z",
						"decline_reason": null,
						"name": "Peder Lewenhaupt",
						"notes": null,
						"notification_changed_at": "2022-10-12T11:18:28Z",
						"notification_changed_by_name": "Hanna HjelmÃ¥ker",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-06T21:27:15Z",
						"notification_sender_name": "Frida Vincent Appiah",
						"notification_sent_at": "2022-09-06T20:34:11Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/PL.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-10-12T11:18:28Z",
						"team_position_name": "Bass",
						"updated_at": "2022-10-12T11:18:28Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71202400"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4587912"
							},
							"data": {
								"type": "Team",
								"id": "4587912"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members/843562486"
					}
				},
				{
					"type": "PlanPerson",
					"id": "843562516",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-08-31T14:44:08Z",
						"decline_reason": null,
						"name": "Peder Lewenhaupt",
						"notes": null,
						"notification_changed_at": "2022-10-12T11:18:32Z",
						"notification_changed_by_name": "Hanna HjelmÃ¥ker",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-06T21:27:15Z",
						"notification_sender_name": "Frida Vincent Appiah",
						"notification_sent_at": "2022-09-06T20:34:11Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/PL.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-10-12T11:18:32Z",
						"team_position_name": "MD",
						"updated_at": "2022-10-12T11:18:32Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71202400"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4587912"
							},
							"data": {
								"type": "Team",
								"id": "4587912"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members/843562516"
					}
				},
				{
					"type": "PlanPerson",
					"id": "843574942",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-08-31T15:05:14Z",
						"decline_reason": null,
						"name": "Vinson McMurtery",
						"notes": null,
						"notification_changed_at": "2022-09-20T18:44:18Z",
						"notification_changed_by_name": "Vinson McMurtery",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-13T08:03:56Z",
						"notification_sender_name": "Frida Vincent Appiah",
						"notification_sent_at": "2022-09-06T20:33:47Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/person/71202593-1578579875/avatar.8.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-09-20T18:44:18Z",
						"team_position_name": "Drums",
						"updated_at": "2022-09-20T18:44:18Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71202593"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4587912"
							},
							"data": {
								"type": "Team",
								"id": "4587912"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members/843574942"
					}
				},
				{
					"type": "PlanPerson",
					"id": "843600587",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-08-31T15:47:04Z",
						"decline_reason": null,
						"name": "Danny Isaac",
						"notes": null,
						"notification_changed_at": "2022-09-19T18:14:18Z",
						"notification_changed_by_name": "Danny Isaac",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-06T20:59:03Z",
						"notification_sender_name": "Frida Vincent Appiah",
						"notification_sent_at": "2022-09-06T20:33:57Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/person/71202072-1578579836/avatar.1.jpeg?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-09-19T18:14:18Z",
						"team_position_name": "Keys 1",
						"updated_at": "2022-09-19T18:14:18Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71202072"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4587912"
							},
							"data": {
								"type": "Team",
								"id": "4587912"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members/843600587"
					}
				},
				{
					"type": "PlanPerson",
					"id": "844831886",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-09-06T12:47:28Z",
						"decline_reason": null,
						"name": "Joel Nordenberg",
						"notes": null,
						"notification_changed_at": "2022-09-07T06:09:09Z",
						"notification_changed_by_name": "Joel Nordenberg",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-07T05:00:21Z",
						"notification_sender_name": "Frida Vincent Appiah",
						"notification_sent_at": "2022-09-06T20:33:02Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/JN.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-09-07T06:09:09Z",
						"team_position_name": "Vox 1",
						"updated_at": "2022-09-07T06:09:09Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71202769"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71203164"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4587914"
							},
							"data": {
								"type": "Team",
								"id": "4587914"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "0"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members/844831886"
					}
				},
				{
					"type": "PlanPerson",
					"id": "845160329",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-09-06T20:56:05Z",
						"decline_reason": null,
						"name": "Anna Honardost",
						"notes": null,
						"notification_changed_at": "2022-10-24T12:57:53Z",
						"notification_changed_by_name": "Sonia Qureshi",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-06T21:03:47Z",
						"notification_sender_name": "Sonia Qureshi",
						"notification_sent_at": "2022-09-06T21:03:29Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/AH.png?g=224x224%23",
						"prepare_notification": false,
						"status": "D",
						"status_updated_at": "2022-10-24T12:57:53Z",
						"team_position_name": "Lyrics/Clock",
						"updated_at": "2022-10-24T12:57:53Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "72372892"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4648866"
							},
							"data": {
								"type": "Team",
								"id": "4648866"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members/845160329"
					}
				},
				{
					"type": "PlanPerson",
					"id": "846500024",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-09-12T15:54:11Z",
						"decline_reason": null,
						"name": "Gabriel FrÃ¶dÃ©n",
						"notes": null,
						"notification_changed_at": null,
						"notification_changed_by_name": null,
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-29T17:12:25Z",
						"notification_sender_name": "Julia Gagnert",
						"notification_sent_at": "2022-09-28T18:25:00Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/GF.png?g=224x224%23",
						"prepare_notification": false,
						"status": "U",
						"status_updated_at": null,
						"team_position_name": "FOH Tech",
						"updated_at": "2022-09-29T17:12:25Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71201814"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71201220"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4587908"
							},
							"data": {
								"type": "Team",
								"id": "4587908"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "71201220"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members/846500024"
					}
				},
				{
					"type": "PlanPerson",
					"id": "848236696",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-09-18T16:12:06Z",
						"decline_reason": null,
						"name": "Kevin StrÃ¶mberg",
						"notes": null,
						"notification_changed_at": null,
						"notification_changed_by_name": null,
						"notification_prepared_at": null,
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/KS.png?g=224x224%23",
						"prepare_notification": false,
						"status": "U",
						"status_updated_at": null,
						"team_position_name": "PM",
						"updated_at": "2022-10-24T08:07:29Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "57666197"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71201220"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4572875"
							},
							"data": {
								"type": "Team",
								"id": "4572875"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "71201220"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members/848236696"
					}
				},
				{
					"type": "PlanPerson",
					"id": "848856007",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-09-20T06:11:01Z",
						"decline_reason": null,
						"name": "AndrÃ© Henriksson",
						"notes": null,
						"notification_changed_at": "2022-09-20T06:13:34Z",
						"notification_changed_by_name": "AndrÃ© Henriksson",
						"notification_prepared_at": null,
						"notification_read_at": "2022-09-20T06:37:34Z",
						"notification_sender_name": "Julia Gagnert",
						"notification_sent_at": "2022-09-20T06:13:20Z",
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/AH.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-09-20T06:13:34Z",
						"team_position_name": "Lighting operator",
						"updated_at": "2022-09-20T06:37:34Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "103332034"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71201220"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4572875"
							},
							"data": {
								"type": "Team",
								"id": "4572875"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "71201220"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members/848856007"
					}
				},
				{
					"type": "PlanPerson",
					"id": "850709215",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-09-26T14:32:29Z",
						"decline_reason": null,
						"name": "Oskar Larsen",
						"notes": null,
						"notification_changed_at": "2022-09-26T21:43:58Z",
						"notification_changed_by_name": "Sonia Qureshi",
						"notification_prepared_at": "2022-09-26T21:43:58Z",
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/person/71199943-1578578222/avatar.10.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-09-26T21:43:58Z",
						"team_position_name": "Stage Manager",
						"updated_at": "2022-10-24T08:07:30Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71199943"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4572875"
							},
							"data": {
								"type": "Team",
								"id": "4572875"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members/850709215"
					}
				},
				{
					"type": "PlanPerson",
					"id": "854401884",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-10T01:52:12Z",
						"decline_reason": null,
						"name": "Emeline Antonson",
						"notes": null,
						"notification_changed_at": "2022-10-10T01:52:21Z",
						"notification_changed_by_name": "Frida Vincent Appiah",
						"notification_prepared_at": "2022-10-10T01:52:21Z",
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/EA.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-10-10T01:52:21Z",
						"team_position_name": "VD",
						"updated_at": "2022-10-24T08:07:33Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "83761799"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71203397"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4587914"
							},
							"data": {
								"type": "Team",
								"id": "4587914"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "0"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members/854401884"
					}
				},
				{
					"type": "PlanPerson",
					"id": "854501390",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-10T15:21:06Z",
						"decline_reason": null,
						"name": "Ellen Agemo",
						"notes": null,
						"notification_changed_at": "2022-10-10T18:16:02Z",
						"notification_changed_by_name": "Miranda Prim",
						"notification_prepared_at": "2022-10-10T18:16:02Z",
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/EA.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-10-10T18:16:02Z",
						"team_position_name": "Vox 5",
						"updated_at": "2022-10-24T08:07:34Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71202968"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71202980"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4587914"
							},
							"data": {
								"type": "Team",
								"id": "4587914"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "0"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members/854501390"
					}
				},
				{
					"type": "PlanPerson",
					"id": "857925381",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-24T07:49:38Z",
						"decline_reason": null,
						"name": "Eric Liljero",
						"notes": null,
						"notification_changed_at": "2022-10-24T19:04:28Z",
						"notification_changed_by_name": "Hanna HjelmÃ¥ker",
						"notification_prepared_at": null,
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/EL.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-10-24T19:04:28Z",
						"team_position_name": "Vox 3 WL",
						"updated_at": "2022-10-24T19:04:28Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71202409"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71203397"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4587914"
							},
							"data": {
								"type": "Team",
								"id": "4587914"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "0"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members/857925381"
					}
				},
				{
					"type": "PlanPerson",
					"id": "857925390",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-24T07:49:54Z",
						"decline_reason": null,
						"name": "Eric Liljero",
						"notes": null,
						"notification_changed_at": "2022-10-25T09:26:17Z",
						"notification_changed_by_name": "Hanna HjelmÃ¥ker",
						"notification_prepared_at": "2022-10-24T07:49:54Z",
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/EL.png?g=224x224%23",
						"prepare_notification": false,
						"status": "C",
						"status_updated_at": "2022-10-25T09:26:17Z",
						"team_position_name": "Keys 2",
						"updated_at": "2022-10-25T09:26:17Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71202409"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71203397"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4587912"
							},
							"data": {
								"type": "Team",
								"id": "4587912"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members/857925390"
					}
				},
				{
					"type": "PlanPerson",
					"id": "857942865",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-24T12:58:31Z",
						"decline_reason": null,
						"name": "Moa Segerfeldt",
						"notes": null,
						"notification_changed_at": "2022-10-24T13:18:21Z",
						"notification_changed_by_name": "Sonia Qureshi",
						"notification_prepared_at": "2022-10-24T13:18:21Z",
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/MS.png?g=224x224%23",
						"prepare_notification": true,
						"status": "C",
						"status_updated_at": "2022-10-24T13:18:21Z",
						"team_position_name": "Co-Tech",
						"updated_at": "2022-10-24T13:18:21Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71203164"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4587908"
							},
							"data": {
								"type": "Team",
								"id": "4587908"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members/857942865"
					}
				},
				{
					"type": "PlanPerson",
					"id": "857943504",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-24T13:01:36Z",
						"decline_reason": null,
						"name": "Sonia Qureshi",
						"notes": null,
						"notification_changed_at": "2022-10-24T13:01:48Z",
						"notification_changed_by_name": "Sonia Qureshi",
						"notification_prepared_at": "2022-10-24T13:01:48Z",
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/person/75824246-1587424950/avatar.1.png?g=224x224%23",
						"prepare_notification": true,
						"status": "C",
						"status_updated_at": "2022-10-24T13:01:48Z",
						"team_position_name": "Service Producer",
						"updated_at": "2022-10-24T13:01:48Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4572875"
							},
							"data": {
								"type": "Team",
								"id": "4572875"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members/857943504"
					}
				},
				{
					"type": "PlanPerson",
					"id": "857949898",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-24T13:24:38Z",
						"decline_reason": null,
						"name": "Jasmine Fathi",
						"notes": null,
						"notification_changed_at": null,
						"notification_changed_by_name": null,
						"notification_prepared_at": null,
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/person/93304157-1622642085/avatar.2.png?g=224x224%23",
						"prepare_notification": true,
						"status": "U",
						"status_updated_at": null,
						"team_position_name": "Lyrics/Clock",
						"updated_at": "2022-10-24T13:24:38Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "93304157"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4648866"
							},
							"data": {
								"type": "Team",
								"id": "4648866"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members/857949898"
					}
				},
				{
					"type": "PlanPerson",
					"id": "857977756",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-24T14:19:17Z",
						"decline_reason": null,
						"name": "Jitse van Esch",
						"notes": null,
						"notification_changed_at": "2022-10-24T14:21:23Z",
						"notification_changed_by_name": "Sonia Qureshi",
						"notification_prepared_at": "2022-10-24T14:21:23Z",
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/person/99334747-1634798288/avatar.2.jpg?g=224x224%23",
						"prepare_notification": true,
						"status": "C",
						"status_updated_at": "2022-10-24T14:21:23Z",
						"team_position_name": "Multimedia",
						"updated_at": "2022-10-24T14:21:23Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "99334747"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4648866"
							},
							"data": {
								"type": "Team",
								"id": "4648866"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members/857977756"
					}
				},
				{
					"type": "PlanPerson",
					"id": "857999555",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-24T14:48:46Z",
						"decline_reason": null,
						"name": "Evelyn Lindahl",
						"notes": null,
						"notification_changed_at": "2022-10-24T14:48:50Z",
						"notification_changed_by_name": "Events Hillsong",
						"notification_prepared_at": "2022-10-24T14:48:50Z",
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/el.png?g=224x224%23",
						"prepare_notification": true,
						"status": "C",
						"status_updated_at": "2022-10-24T14:48:50Z",
						"team_position_name": "Hot Seat",
						"updated_at": "2022-10-24T14:48:50Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "83197301"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824079"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4587910"
							},
							"data": {
								"type": "Team",
								"id": "4587910"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824079"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members/857999555"
					}
				},
				{
					"type": "PlanPerson",
					"id": "858000247",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-24T14:49:32Z",
						"decline_reason": null,
						"name": "Zoe Ludvigsson",
						"notes": null,
						"notification_changed_at": "2022-10-24T16:04:28Z",
						"notification_changed_by_name": "Events Hillsong",
						"notification_prepared_at": "2022-10-24T16:04:29Z",
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/zl.png?g=224x224%23",
						"prepare_notification": true,
						"status": "C",
						"status_updated_at": "2022-10-24T16:04:28Z",
						"team_position_name": "Hot Seat Support",
						"updated_at": "2022-10-24T16:04:29Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "107440171"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824079"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4587910"
							},
							"data": {
								"type": "Team",
								"id": "4587910"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824079"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members/858000247"
					}
				},
				{
					"type": "PlanPerson",
					"id": "858000344",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-24T14:49:45Z",
						"decline_reason": null,
						"name": "Elvira Nordin",
						"notes": null,
						"notification_changed_at": null,
						"notification_changed_by_name": null,
						"notification_prepared_at": null,
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/EN.png?g=224x224%23",
						"prepare_notification": true,
						"status": "U",
						"status_updated_at": null,
						"team_position_name": "Office",
						"updated_at": "2022-10-24T14:49:45Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "106782531"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824079"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4587910"
							},
							"data": {
								"type": "Team",
								"id": "4587910"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824079"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members/858000344"
					}
				},
				{
					"type": "PlanPerson",
					"id": "858000427",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-24T14:49:53Z",
						"decline_reason": null,
						"name": "Laura Munala",
						"notes": null,
						"notification_changed_at": null,
						"notification_changed_by_name": null,
						"notification_prepared_at": null,
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/LM.png?g=224x224%23",
						"prepare_notification": true,
						"status": "U",
						"status_updated_at": null,
						"team_position_name": "Office",
						"updated_at": "2022-10-24T14:49:53Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "76312994"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "75824079"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4587910"
							},
							"data": {
								"type": "Team",
								"id": "4587910"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "75824079"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members/858000427"
					}
				},
				{
					"type": "PlanPerson",
					"id": "858166821",
					"attributes": {
						"can_accept_partial": false,
						"created_at": "2022-10-24T18:50:24Z",
						"decline_reason": null,
						"name": "Hanna HjelmÃ¥ker",
						"notes": null,
						"notification_changed_at": "2022-10-24T18:50:29Z",
						"notification_changed_by_name": "Hanna HjelmÃ¥ker",
						"notification_prepared_at": "2022-10-24T18:50:29Z",
						"notification_read_at": null,
						"notification_sender_name": null,
						"notification_sent_at": null,
						"photo_thumbnail": "https://avatars.planningcenteronline.com/uploads/initials/HH.png?g=224x224%23",
						"prepare_notification": true,
						"status": "C",
						"status_updated_at": "2022-10-24T18:50:29Z",
						"team_position_name": "Vox 2 Co-WL",
						"updated_at": "2022-10-24T18:50:29Z"
					},
					"relationships": {
						"person": {
							"data": {
								"type": "Person",
								"id": "71202009"
							}
						},
						"plan": {
							"data": {
								"type": "Plan",
								"id": "60540226"
							}
						},
						"scheduled_by": {
							"data": {
								"type": "Person",
								"id": "71202009"
							}
						},
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"team": {
							"links": {
								"related": "https://api.planningcenteronline.com/services/v2/teams/4587914"
							},
							"data": {
								"type": "Team",
								"id": "4587914"
							}
						},
						"responds_to": {
							"data": {
								"type": "Person",
								"id": "0"
							}
						},
						"times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						},
						"service_times": {
							"data": [
								{
									"type": "PlanTime",
									"id": "147284915"
								},
								{
									"type": "PlanTime",
									"id": "147284916"
								}
							]
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/service_types/1155898/plans/60540226/team_members/858166821"
					}
				}
			],
			"included": [
				{
					"type": "Team",
					"id": "4587914",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-08-11T13:17:50Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Worship Vocals",
						"rehearsal_team": false,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2022-02-24T09:38:21Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "0"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4587914"
					}
				},
				{
					"type": "Team",
					"id": "4587912",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-08-11T13:17:49Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Worship Band",
						"rehearsal_team": false,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2021-09-10T08:38:04Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "75824246"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4587912"
					}
				},
				{
					"type": "Team",
					"id": "4648866",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-09-23T08:08:48Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Media",
						"rehearsal_team": false,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2021-09-23T08:08:48Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4648866"
					}
				},
				{
					"type": "Team",
					"id": "4587908",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-08-11T13:17:47Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Audio",
						"rehearsal_team": false,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2021-08-11T13:17:47Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4587908"
					}
				},
				{
					"type": "Team",
					"id": "4572875",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-07-29T17:18:53Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Production",
						"rehearsal_team": true,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2021-07-29T17:18:53Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4572875"
					}
				},
				{
					"type": "Team",
					"id": "4587910",
					"attributes": {
						"archived_at": null,
						"assigned_directly": true,
						"created_at": "2021-08-11T13:17:48Z",
						"default_prepare_notifications": true,
						"default_status": "U",
						"last_plan_from": "organization",
						"name": "Creative Events",
						"rehearsal_team": false,
						"schedule_to": "plan",
						"secure_team": false,
						"sequence": null,
						"stage_color": "orange",
						"stage_variant": null,
						"updated_at": "2021-09-23T08:09:55Z"
					},
					"relationships": {
						"service_type": {
							"data": {
								"type": "ServiceType",
								"id": "1155898"
							}
						},
						"default_responds_to": {
							"data": {
								"type": "Person",
								"id": "70400156"
							}
						}
					},
					"links": {
						"self": "https://api.planningcenteronline.com/services/v2/teams/4587910"
					}
				}
			],
			"meta": {
				"total_count": 28,
				"count": 25,
				"next": {
					"offset": 25
				},
				"can_query_by": [
					"team_id"
				],
				"can_include": [
					"declined_plan_times",
					"person",
					"plan",
					"team"
				],
				"can_filter": [
					"confirmed",
					"not_deleted",
					"not_archived"
				],
				"parent": {
					"id": "60540226",
					"type": "Plan"
				}
			}
		},
		"date": "30 Oct 2022",
		"serviceTypeName": "City PM"
	}
]