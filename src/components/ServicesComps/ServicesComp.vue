<template>
  <section class="services">
    <div class="container">
      <ServiceCard v-for="(s, i) in services" :key="i" :service="s" :index="i"/>
    </div>
  </section>
</template>

<script>
import ServiceCard from './ServiceCard.vue';

export default {
  components: {
    ServiceCard,
  },
  data() {
    return {
      services: [
        {
          name: "UI/UX Design",
          info: `Far far away, behind the word mountains, far from the countries 
            Vokalia and Consonantia, there live the blind texts.`,
          icon: "object-ungroup",
        },
        {
          name: "Web Development",
          info: `Far far away, behind the word mountains, far from the countries 
            Vokalia and Consonantia, there live the blind texts.`,
          icon: "code",
        },
        {
          name: "Graphic Design",
          info: `Far far away, behind the word mountains, far from the countries 
            Vokalia and Consonantia, there live the blind texts.`,
          icon: "pen-fancy",
        },
        {
          name: "Branding",
          info: `Far far away, behind the word mountains, far from the countries 
            Vokalia and Consonantia, there live the blind texts.`,
          icon: "file-contract",
        },
        {
          name: "Marketing",
          info: `Far far away, behind the word mountains, far from the countries 
            Vokalia and Consonantia, there live the blind texts.`,
          icon: "bullhorn",
        },
        {
          name: "Mobile App Design",
          info: `Far far away, behind the word mountains, far from the countries 
            Vokalia and Consonantia, there live the blind texts.`,
          icon: "mobile-screen-button",
        },
        {
          name: "Visual Editor",
          info: `Far far away, behind the word mountains, far from the countries 
            Vokalia and Consonantia, there live the blind texts.`,
          icon: "pen-to-square",
        },
        {
          name: "IT Consultancy",
          info: `Far far away, behind the word mountains, far from the countries 
            Vokalia and Consonantia, there live the blind texts.`,
          icon: "chalkboard-user",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .container{
    display:grid;
    gap:$base * 2.5 $base * 3.5;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
</style>
