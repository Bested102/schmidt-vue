<template>
  <div
    class="plan"
    v-motion
    :initial="{ opacity: 0, rotateY:80 }"
    :visible-once="{ opacity: 1, rotateY: 0 }"
    :delay="100 * index"
    :duration="600"
  >
    <h5>{{ plan.price }}</h5>
    <span class="name">{{ plan.name }}</span>
    <ul class="features">
      <li v-for="(a, f) in plan.features" :key="f">
        <font-awesome-icon class="icon" :icon="['fas', available(a)]" />
        <p>{{ f }}</p>
      </li>
    </ul>
    <div class="start">Get Started</div>
  </div>
</template>

<script>
export default {
  props: ["plan", "index"],
  methods: {
    available(x) {
      return x ? "check" : "xmark";
    },
  },
};
</script>

<style lang="scss" scoped>
.plan {
  background-color: white;
  box-shadow: 0px 5px 25px -2px rgba(0, 0, 0, 0.06);
  padding: $base * 4 - 2px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h5 {
    color: $primary;
    font-size: $base * 6.25;
    position: relative;
    font-weight: 400;

    &:before {
      content: "$";
      margin-right: $base * 0.25;
      color: $secondary;
      font-size: $base * 3;
      position: relative;
      top: -20px;
    }
  }

  .name {
    font-size: $base * 2.25;
    font-weight: 500;
    margin-bottom: $base * 2.5;
  }

  .features {
    width: 100%;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: calc($base);
      padding: $base + 2px $base;
      color: $secondary;
      &:nth-child(2n) {
        background: #f8f8f8;
      }

      .icon {
        color: $primary;
        font-size: $base * 2.25;
      }
    }
  }

  .start {
    text-transform: uppercase;
    color: white;
    background-color: $primary;
    margin-top: $base * 6;
    letter-spacing: 1px;
    font-weight: 600;
    font-size: $base * 1.5;
    padding: $base * 2;
    border-radius: 2px;
  }
}
</style>
