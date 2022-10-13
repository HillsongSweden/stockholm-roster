<template>
  <div class="p-4">
    <h1 class="mb-4 text-xl font-black">
      <span v-if="isLoading">Loading roster...</span>
      <span v-if="isError">Oooops, looks like we messed something up 🙈</span>
      <span v-if="isResolved">{{ date }} 🗓</span>
    </h1>
    <main v-if="teams">
      <section class="space-x-2 text-sm">
        <btn
          :disabled="!$route.query.offset"
          @click="fetchThisSunday"
        >
          This sunday 
        </btn>
        <btn @click="fetchNextSunday">
          Next sunday
        </btn>
      </section>
      <table class="text-xs border-collapse">
        <thead>
          <tr class="text-left uppercase">
            <table-header>Team</table-header>
            <table-header
              v-for="serviceTypeName in serviceTypeNames"
              :key="serviceTypeName"
            >
              {{ serviceTypeName }}
            </table-header>
          </tr>
        </thead>
        <tbody>
          <template v-for="(team, teamName) in teams">
            <tr class="font-bold text-white bg-black" :key="teamName">
              <table-cell colspan="4">{{ teamName }}</table-cell>
            </tr>
            <tr
              v-for="(teamMembers, positionName) in team"
              :key="teamName + '_' + positionName"
            >
              <table-cell>
                {{ teamMembers.find((t) => t).team_position_name }}
              </table-cell>
              <table-cell
                v-for="(teamMember, index) in teamMembers"
                :key="index"
                :class="{
                  'bg-yellow-200': !teamMember,
                  'bg-red-200':
                    teamMember && ['D', 'TBC'].includes(teamMember.status),
                  'text-yellow-400 italic':
                    teamMember && teamMember.status === 'U',
                }"
              >
                <span v-if="teamMember">{{ teamMember.name }}</span>
                <span v-else>N/A</span>
              </table-cell>
            </tr>
          </template>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script>
import axios from "axios";
const IDLE = "IDLE";
const LOADING = "LOADING";
const RESOLVED = "RESOLVED";
const ERROR = "ERROR";

export default {
  data() {
    return {
      teams: null,
      date: "",
      serviceTypeNames: [],
      state: IDLE,
    };
  },
  computed: {
    isResolved() {
      return this.state === RESOLVED;
    },
    isLoading() {
      return this.state === LOADING;
    },
    isError() {
      return this.state === ERROR;
    },
  },
  methods: {
    fetchNextSunday() {
      this.$router.push({
        path: this.$route.path,
        query: { offset: Number(this.$route.query.offset || 0) + 1 },
      });
    },
    fetchThisSunday() {
      this.$router.push({ path: this.$route.path });
    },
    async fetchPcoData() {
      try {
        this.state = LOADING;
        const pcoResponse = await axios.get("/.netlify/functions/pco", {
          params: this.$route.query,
        });
        this.state = RESOLVED;

        this.date = pcoResponse.data.date;
        this.teams = pcoResponse.data.teams;
        this.serviceTypeNames = pcoResponse.data.serviceTypeNames;
      } catch (error) {
        this.state = ERROR;
        console.log("error fetching pco data");
        console.log(error);
      }
    },
  },
  watch: {
    "$route.query": {
      handler() {
        this.fetchPcoData();
      },
      immediate: true,
    },
  },
};
</script>