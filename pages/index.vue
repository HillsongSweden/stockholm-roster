<template>
  <div class="p-4">
    <h1 class="text-xl font-black mb-4">
      <span v-if="isLoading">Loading roster...</span>
      <span v-else>{{ date }}</span>
    </h1>
    <main v-if="teams">
      <section class="space-x-2 text-sm">
        <button
          v-if="$route.query.offset"
          @click="fetchThisSunday"
          class="bg-blue-800 text-white py-1 px-2 rounded-md shadow-md mb-4 cursor-pointer transition duration-200 hover:bg-blue-900"
        >
          This sunday
        </button>
        <button
          @click="fetchNextSunday"
          class="bg-blue-800 text-white py-1 px-2 rounded-md shadow-md mb-4 cursor-pointer transition duration-200 hover:bg-blue-900"
        >
          Next sunday
        </button>
      </section>
      <table class="border-collapse text-xs" v-if="teams && !isLoading">
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
    </main>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      teams: null,
      date: "",
      isLoading: false
    };
  },
  methods: {
    fetchNextSunday() {
      this.$router.push({
        path: this.$route.path,
        query: { offset: Number(this.$route.query.offset || 0) + 1 }
      });
    },
    fetchThisSunday() {
      this.$router.push({ path: this.$route.path });
    },
    async fetchPcoData() {
      this.isLoading = true;
      const pcoResponse = await axios.get("/.netlify/functions/pco", {
        params: this.$route.query
      });
      this.isLoading = false;
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
  },
  watch: {
    "$route.query": {
      handler() {
        this.fetchPcoData();
      },
      immediate: true
    }
  }
};
</script>
