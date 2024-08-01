<template>
  <section class="experiences">
    <div class="container">
      <DegreeBox
        v-for="(e, i) in experiences"
        :key="i"
        :experience="e"
        :index="i"
      />
    </div>
  </section>
</template>

<script>
import DegreeBox from "./DegreeBox.vue";
export default {
  components: {
    DegreeBox,
  },
  data() {
    return {
      experiences: [
        {
          icon: "user-graduate",
          duration: "2014-2015",
          name: "Master Degree of Design",
          place: "Google Inc.",
          info: `A small river named Duden flows by their place and supplies it with the necessary 
          regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.`,
        },
        {
          icon: "laptop",
          duration: "2014-2015",
          name: "Art & Creative Director",
          place: "Google Inc.",
          info: `A small river named Duden flows by their place and supplies it with the necessary 
          regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.`,
        },
        {
          icon: "user-graduate",
          duration: "2014-2015",
          name: "Bachelor's Degree of C.A",
          place: "Google Inc.",
          info: `A small river named Duden flows by their place and supplies it with the necessary 
          regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.`,
        },
        {
          icon: "laptop",
          duration: "2015-2017",
          name: "Wordpress Developer",
          place: "Google Inc.",
          info: `A small river named Duden flows by their place and supplies it with the necessary 
          regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.`,
        },
        {
          icon: "user-graduate",
          duration: "2017-2018",
          name: "Diploma in Computer",
          place: "Google Inc.",
          info: `A small river named Duden flows by their place and supplies it with the necessary 
          regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.`,
        },
        {
          icon: "laptop",
          duration: "2018-2020",
          name: "UI/UX Designer",
          place: "Google Inc.",
          info: `A small river named Duden flows by their place and supplies it with the necessary 
          regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: $base * 6 $base * 3;

  @include md {
    grid-template-columns: 1fr;
  }
}
</style>
