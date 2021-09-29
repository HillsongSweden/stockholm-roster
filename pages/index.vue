<template>
  <div class="p-4">
    <h1 class="text-xl font-black mb-4">{{ date }}</h1>
    <table class="border-collapse text-xs">
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
            <td class="p-1">
              {{ teamMembers.find(t => t).team_position_name }}
            </td>
            <td
              v-for="teamMember in teamMembers"
              class="p-1"
              :class="{
                'bg-yellow-200': !teamMember,
                'bg-red-200':
                  teamMember && ['D', 'TBC'].includes(teamMember.status),
                'text-yellow-400 italic':
                  teamMember && teamMember.status === 'U'
              }"
            >
              <span v-if="teamMember">{{ teamMember.name }}</span>
              <span v-else>N/A</span>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      teams: {},
      date: ""
    };
  },
  async created() {
    const pcoResponse = await axios.get("/.netlify/functions/pco");
    this.date = pcoResponse.data.date;

    const formattedTeams = pcoResponse.data.serviceTypes.reduce(
      (acc, serviceType) => {
        for (const team of serviceType.teams) {
          const teamPositions = team.teamPositions;

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

    this.teams = Object.entries(formattedTeams).reduce(
      (acc, [teamName, team]) => {
        acc[teamName] = Array.from(team)
          .map(position => {
            return pcoResponse.data.serviceTypes.map(st => {
              if (st.neededPositions[position])
                return {
                  name: "TBC",
                  team_position_name: position,
                  status: "TBC"
                };
              return st.teamMembers[position] || null;
            });
          })
          .filter(serviceTypePositions => {
            return serviceTypePositions.some(
              teamMemberExists => teamMemberExists
            );
          });

        return acc;
      },
      {}
    );
  }
};
</script>
