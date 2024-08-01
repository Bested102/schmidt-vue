<template>
  <section class="projects">
    <div class="container">
      <div class="content">
        <transition name="fade">
          <div class="overlay" v-if="showOverlay"></div>
        </transition>
        <ProjectBox
          v-for="(p, i) in projects.slice(
            (page - 1) * containerSize,
            containerSize * page
          )"
          :project="p"
          :key="i"
        />
      </div>
      <PagiBar @change="changePage"  :length="projects.length" :size="containerSize"/>
    </div>
  </section>
</template>

<script>
import PagiBar from "../PagiBar.vue";
import ProjectBox from "./ProjectBox.vue";
import projectsData from "@/assets/data/Projects.json";

export default {
  components: { ProjectBox, PagiBar },
  data() {
    return {
      projects: null,
      containerSize: 9,
      page: 1,
      showOverlay: false,
    };
  },
  created() {
    this.projects = projectsData;
  },
  methods: {
    changePage(current) {
      this.showOverlay = true;
      setTimeout(() => {
        this.showOverlay = false;
        this.page = current;
      }, 300)
    },
    checkWidth(){
      if (window.innerWidth <= 992){
        this.containerSize = 8
      }else{
        this.containerSize = 9
      }
    }
  },
  mounted(){
    this.checkWidth()
    window.addEventListener('resize', this.checkWidth)
  }
};
</script>

<style lang="scss" scoped>
.container {
  @include md-sp{
    max-width:720px ;
  }
  .content {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
    gap: $base * 3.75 $base * 3.5;
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 3;
      background-color: $background;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
