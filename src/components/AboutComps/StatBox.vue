<template>
  <div v-motion
    :initial="{ opacity: 0, y: 140 }"
    :visible-once="{ opacity: 1, y: 0}"
    :delay="50 * index"
    :duration="750">
    <span class="count">{{ Math.round(currentCount).toLocaleString() }}</span>
    <span class="stat">{{ stat }}</span>
  </div>
</template>

<script>
export default {
  props: ['count', 'stat', 'index'],
  data() {
    return {
      currentCount: 0,
    }
  },
  mounted() {
    this.currentCount = Math.round(this.count - this.count / 1.2);
    let differance = this.count - this.currentCount
    let countUp = setInterval(() => {
      this.currentCount += differance - differance / 1.002
      if (this.currentCount >= this.count) {
        this.currentCount = this.count
        clearInterval(countUp)
      }
    }, 1);
  },
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  justify-content: center;
  gap: $base;
  line-height: 1;
  padding-block: $base * 8;

  .count {
    color: $primary;
    font-weight: 700;
    font-size: $base * 5;
  }
}
</style>