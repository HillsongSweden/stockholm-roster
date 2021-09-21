<template>
  <table class="border-collapse text-xs m-4">
    <thead>
      <tr class="text-left">
        <th class="p-1">Team</th>
        <th class="p-1">Norra AM</th>
        <th class="p-1">City AM</th>
        <th class="p-1">City PM</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(team, teamName) in teams">
        <tr class="font-bold bg-black text-white">
          <td colspan="4" class="p-1">{{ teamName }}</td>
        </tr>
        <tr v-for="teamMembers in team">
          <td class="p-1">{{ teamMembers.find(t => t).team_position_name }}</td>
          <td
            v-for="teamMember in teamMembers"
            class="p-1"
            :class="{
              'bg-yellow-200': !teamMember,
              'bg-red-200': teamMember && teamMember.status === 'D'
            }"
          >
            <span v-if="teamMember">{{ teamMember.name }}</span>
            <span v-else>N/A</span>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      teams: []
    };
  },
  async created() {
    const pcoResponse = await axios.get("/.netlify/functions/pco");
    const formattedTeams = pcoResponse.data.serviceTypes.reduce(
      (acc, serviceType) => {
        for (const team of serviceType.teams) {
          const teamPositions = team.team_positions.map(tp => tp.name);

          if (acc[team.name]) {
            // proposal feature, should be replaced
            acc[team.name].addAll(...teamPositions);
          } else {
            acc[team.name] = new Set(teamPositions);
          }
        }
        return acc;
      },
      {}
    );

    this.teams = Object.entries(formattedTeams).reduce((acc, [k, team]) => {
      acc[k] = Array.from(team)
        .map(teamMember => {
          return pcoResponse.data.serviceTypes.map(st => {
            return this.getPersonByPosition(teamMember, st.teamMembers);
          });
        })
        .filter(serviceTypePositions => {
          return serviceTypePositions.some(teamMember => teamMember);
        });
      return acc;
    }, {});
  },
  methods: {
    getPersonByPosition(position, tm) {
      return (
        tm.data.find(tm => tm.attributes.team_position_name === position)
          ?.attributes || null
      );
    }
  }
};
</script>
