<template>
  <div
    class="service"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visible-once="{ opacity: 1, y: 0 }"
    :delay="100 * rowIndex"
    :duration="600"
  >
    <font-awesome-icon class="icon" fa-fw :icon="['fas', service.icon]" />
    <h5>{{ service.name }}</h5>
    <p>
      {{ service.info }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["service", "index"],
  computed: {
    rowIndex() {
        if (this.index > 3) {
          return 4
      }else{
        return this.index
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.service {
  padding: 30px 32px 46px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: white;
  box-shadow: 0px 5px 25px -2px rgba(0, 0, 0, 0.06);
  transition: 0.2s;

  h5 {
    font-size: $base * 2.5;
    font-weight: 600;
    margin-bottom: $base * 1.5;
    transition: 0.1s;
  }

  p {
    transition: 0.2s;
    color: $secondary;
  }

  .icon {
    transition: 0.2s;
    color: $primary;
    font-size: $base * 7;
    margin-block: $base $base * 2;
  }

  &:hover {
    background-color: $primary;

    * {
      color: white;
    }
  }

  @include sm{
    padding:24px 28px 36px ;
  }
}
</style>
