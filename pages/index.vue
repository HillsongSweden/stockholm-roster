<template>
  <div class="p-4">
    <h1 class="mb-4 text-xl font-black">
      <span v-if="isLoading">Loading roster...</span>
      <span v-if="isError">Oooops, looks like we messed something up 🙈</span>
      <span v-if="isResolved">{{ date }} 🗓</span>
    </h1>
    <main v-if="teams">
      <section class="space-x-2 text-sm">
        <btn :disabled="!$route.query.offset" @click="fetchThisSunday">
          This sunday
        </btn>
        <btn @click="fetchNextSunday">
          Next sunday
        </btn>
      </section>

      <section v-if="excludedTeams.length">
        <ul class="flex gap-2 mb-2 flex-wrap">
          <li v-for="team in excludedTeams">
            <badge class="bg-red-400">
              {{ team }} <button @click="toggleTeam(team)">×</button>
            </badge>
          </li>
          <li>
            <badge class="bg-blue-400">
              <button @click="showAllTeams">Show all</button>
            </badge>
          </li>
        </ul>
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
          <template v-for="team in displayTeams">
            <tr
              class="font-bold text-white uppercase bg-black sticky top-6 z-10"
            >
              <table-cell colspan="4"
                >{{ team.teamName }}
                <button @click="toggleTeam(team.teamName)" class="float-right">
                  ×
                </button></table-cell
              >
            </tr>
            <tr
              v-for="teamPosition in team.teamPositions"
              :key="team.teamName + '_' + teamPosition.positionName"
            >
              <table-cell class="uppercase">
                {{ teamPosition.positionName }}
              </table-cell>
              <people
                :people="people"
                :key="index"
                v-for="(people, index) in teamPosition.roster"
              />
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
      excludedTeams: []
    };
  },

  mounted() {
    const cache = window.localStorage.getItem("excluded_teams");
    if (cache) {
      this.excludedTeams = JSON.parse(cache);
    }
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
    displayTeams() {
      return this.teams.filter(team => {
        return !this.excludedTeams.includes(team.teamName);
      });
    }
  },
  methods: {
    fetchNextSunday() {
      this.$router.push({
        path: this.$route.path,
        query: {
          offset: Number(this.$route.query.offset || 0) + 1
        }
      });
    },
    showAllTeams() {
      this.excludedTeams = [];
    },
    toggleTeam(teamName) {
      if (this.excludedTeams.includes(teamName)) {
        this.excludedTeams = this.excludedTeams.filter(team => {
          return team !== teamName;
        });
      } else {
        this.excludedTeams.push(teamName);
      }
    },
    fetchThisSunday() {
      this.$router.push({ path: this.$route.path });
    },
    async fetchPcoData() {
      try {
        this.state = LOADING;
        const pcoResponse = await axios.get("/.netlify/functions/pco", {
          params: this.$route.query
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
    }
  },
  watch: {
    "$route.query": {
      handler() {
        this.fetchPcoData();
      },
      immediate: true
    },
    excludedTeams() {
      window.localStorage.setItem(
        "excluded_teams",
        JSON.stringify(this.excludedTeams)
      );
    }
  }
};
</script>
