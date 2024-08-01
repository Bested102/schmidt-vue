<template>
  <div
    class="experience"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visible-once="{ opacity: 1, y: 0 }"
    :delay="150 * (index % 2)"
    :duration="700"
  >
    <div class="icon">
      <font-awesome-icon :icon="['fas', experience.icon]" />
    </div>

    <div class="duration">
      {{ experience.duration }}
    </div>
    <h5>{{ experience.name }}</h5>
    <div class="place">
      <font-awesome-icon class="dot" :icon="['fas', 'location-dot']" />
      {{ experience.place }}
    </div>
    <p class="info">
      {{ experience.info }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["experience", "index"],
};
</script>

<style lang="scss" scoped>
.experience {
  background-color: white;
  padding: 0 $base * 3.75 $base * 5.75;

  .icon {
    background-color: $primary;
    border-radius: 50%;
    display: grid;
    place-items: center;
    width: 60px;
    height: 60px;
    color: white;
    font-size: $base * 4;
    transform: translateY(-50%);
  }

  .duration {
    margin-top: -$base * 1.5;
    font-weight: 500;
    color: $primary;
  }

  h5 {
    font-size: $base * 3;
    font-weight: 500;
    margin-bottom: $base;
  }

  .place {
    font-size: $base * 1.625;
    display: flex;
    align-items: center;
    gap: $base;
    font-weight: 500;
    color: $secondary;

    .dot {
      color: $primary;
      font-size: $base * 1.25;
    }
  }

  .info {
    color: $secondary;
    margin-top: $base * 3;
  }

  @include sm {
    padding: 0 $base * 3 $base * 4.75;
    .info{
      margin-top: $base * 2.5;
    }
  }
}
</style>
