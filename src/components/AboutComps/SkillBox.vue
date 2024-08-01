<template>
  <div
    class="skill"
    v-motion
    :initial="{ opacity: 0, y: 140 }"
    :visible-once="{ opacity: 1, y: 0 }"
    :delay="100 * rowIndex"
    :duration="800"
  >
    <span>{{ skill }}</span>
    <div class="bar">
      <div
        class="progress"
        :style="{ width: currentVal + '%' }"
        :data-percent="currentVal"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["skill", "percent", "index"],
  data() {
    return {
      currentVal: 0
    }
  },
  computed: {
    rowIndex() {
      for (let i = 1; ; i++) {
        if (this.index < i * 3) {
          return this.index - (i - 1) * 3 + (i - 1);
        }
      }
    },
  },
  mounted () {
    let countUp = setInterval(() => {
      this.currentVal++
      if (this.currentVal >= this.percent) {
        this.currentVal = this.percent
        clearInterval(countUp)
      }
    }, 15);;
  },
};
</script>

<style lang="scss" scoped>
.skill {
  span {
    display: block;
    font-size: $base * 2 - 2px;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: $base;
  }

  .bar {
    height: 8px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;

    .progress {
      height: 100%;
      border-radius: 2px;
      position: relative;
      background-color: $primary;

      &::after {
        content: attr(data-percent) "%";
        position: absolute;
        font-size: $base * 2;
        color: $primary;
        bottom: calc(95% + $base);
        right: 0;
        font-weight: 500;
      }
    }
  }
}
</style>
