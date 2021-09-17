<template>
  <main class="p-5">
    <h1 class="text-5xl font-bold mb-10">Teams söndag</h1>
    <section>
      <div v-for="team in teams" class="mb-6" :key="team.id">
        <h2 class="text-lg font-semibold mb-2">{{ team.name }}</h2>
        <ul>
          <li v-for="position in team.positions" :key="position.id">
            {{ position.name }}
            <span
              v-for="person in position.people"
              :class="
                person.status === 'C' ? 'text-green-500' : 'text-yellow-500'
              "
              :key="person.id"
            >
              {{ person.name }}
            </span>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      serviceType: null,
      positions: null,
      teams: null
    };
  },
  async mounted() {
    const services = {
      cityPm: "1155898",
      cityAm: "1155896"
    };

    const pcoResponse = await axios.get(
      `/.netlify/functions/pco?serviceTypeId=${services.cityPm}`
    );

    this.teams = pcoResponse.data;
  }
};
</script>
