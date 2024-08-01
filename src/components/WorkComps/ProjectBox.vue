<template>
  <div class="project" :style="{ backgroundImage: `url(${getImage})` }">
    <div class="overlay">
      <p class="name">{{ project.name }}</p>
      <span class="type">{{ project.type }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  computed: {
    getImage() {
      return `https://preview.colorlib.com/theme/schmidt/images/project-${this.project.num}.jpg.webp`;
    },
  },
};
</script>

<style lang="scss" scoped>
.project {
  height: 350px;
  background-position: center;
  background-size: cover;

  .overlay {
    height: 100%;
    background-color: rgba($primary, 0.9);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: $base * 1.5;
    text-align: center;
    opacity: 0;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      opacity: 1;
    }

    .name {
      max-width: 80%;
      font-size: $base * 2.5;
      line-height: 1.5;
    }

    .type {
      text-transform: uppercase;
      font-size: $base * 1.5;
      letter-spacing: 2px;
      font-weight: 600;
    }

    @include md {
      opacity: 1;
      background-color: rgba($primary, 0.2);

      &:hover {
        background-color: rgba($primary, 0.9);
      }
    }
  }

  @include lg {
    height: 300px;
  }
}
</style>
