<template>
  <div class="p-4">
    <h1 class="mb-4 text-xl font-black">
      <span v-if="isLoading">Loading roster...</span>
      <span v-else>{{ date }}</span>
    </h1>
    <main v-if="teams">
      <section class="space-x-2 text-sm">
        <button
          :disabled="!$route.query.offset"
          @click="fetchThisSunday"
          class="px-2 py-1 mb-4 text-white transition duration-200 bg-blue-800 rounded-md shadow-md cursor-pointer hover:bg-blue-900 disabled:opacity-50"
        >
          This sunday
        </button>
        <button
          @click="fetchNextSunday"
          class="px-2 py-1 mb-4 text-white transition duration-200 bg-blue-800 rounded-md shadow-md cursor-pointer hover:bg-blue-900"
        >
          Next sunday
        </button>
      </section>
      <table class="text-xs border-collapse" v-if="teams && !isLoading">
        <thead>
          <tr class="text-left">
            <th class="p-1">Team</th>
            <th
              class="p-1"
              v-for="serviceTypeName in serviceTypeNames"
              :key="serviceTypeName"
            >
              {{ serviceTypeName }}
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(team, teamName) in teams">
            <tr class="font-bold text-white bg-black" :key="teamName">
              <td colspan="4" class="p-1">{{ teamName }}</td>
            </tr>
            <tr
              v-for="(teamMembers, positionName) in team"
              :key="teamName + '_' + positionName"
            >
              <td class="p-1 border-b border-gray-200 border-solid">
                {{ teamMembers.find(t => t).team_position_name }}
              </td>
              <td
                v-for="(teamMember, index) in teamMembers"
                :key="index"
                class="p-1 border-b border-gray-200 border-solid"
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
      serviceTypeNames: [],
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
      this.teams = pcoResponse.data.teams;
      this.serviceTypeNames = pcoResponse.data.serviceTypeNames;
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
