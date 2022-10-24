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
          <template v-for="team in teams">
            <tr class="font-bold text-white uppercase bg-black">
              <table-cell colspan="4">{{ team.teamName }}</table-cell>
            </tr>
            <tr
              v-for="teamPosition in team.teamPositions"
              :key="team.teamName + '_' + teamPosition.positionName"
            >
              <table-cell class="uppercase">
                {{ teamPosition.positionName }}
              </table-cell>
              <table-cell
                v-for="(people, index) in teamPosition.roster"
                :key="index"
								:class="{' bg-yellow-200': !people.length }"
								>
                <span v-if="people.length" class="space-y-1">
									<div
										v-for="person in people"
										:class="{
											'text-red-400 italic line-through': person.status === 'D',
											'text-yellow-400 italic': person.status === 'U',
										}">
										<img :src="person.photo_thumbnail" class="hidden w-6 h-6 border-2 rounded-full shadow-lg md:inline" :class="{ 'border-red-400': person.status === 'D', 'border-green-400': person.status === 'C' }"> {{ person.name }}
									</div>
								</span>
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