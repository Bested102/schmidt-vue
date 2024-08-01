<template>
  <section class="my-skills">
    <div class="container">
      <div class="header" v-motion-animate>
        <h3>
          Skills
        </h3>
        <h4>
          My Skills
        </h4>
      </div>
      <div class="content">
        <SkillBox v-for="(v, s, i) in skills" :skill="s" :percent="v" :key="i" :index="i"/>
      </div>
    </div>
  </section>
</template>

<script>
import SkillBox from './SkillBox.vue';

export default {
  components: {SkillBox},
  data() {
    return {
      skills: {
        'Adobe photoshop': 90,
        Figma: 95,
        'Adobe illustrator': 90,
        JavaScript: 85,
        HTML5: 95,
        CSS3: 90,
        WordPress: 70,
        'Adobe XD': 80,
        SEO: 80,
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .content{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap:$base * 4 $base * 3;

    @include md{
     grid-template-columns: 1fr;
    }
  }
</style>