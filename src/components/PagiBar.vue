<template>
  <div class="pagination">
    <span @click="current--"> < </span>
    <span
      v-for="c in count"
      :key="c"
      :class="{ active: c === current }"
      @click="current = c"
    >
      {{ c }}
    </span>
    <span @click="current++"> > </span>
  </div>
</template>

<script>
export default {
  emits: ["change", "containerSize"],
  props: ["length", "size"],
  data() {
    return {
      current: 1,
      count: 5,
    };
  },
  methods: {
    getCount() {
      this.count = Math.ceil(this.length / this.size) || 5;
    },
    changeIndex(c) {
      this.current = c;
      this.$emit("change", c);
    },
  },
  mounted() {
    this.getCount();
  },
  watch: {
    current(n, o) {
      this.changeIndex(n);
      if (n > this.getCount) this.current = 1;
      if (n === 0) this.current = this.getCount;
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  margin: $base * 9 auto 0;
  width: fit-content;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  gap: $base * 0.4;
  user-select: none;
  span {
    height: 40px;
    width: 40px;
    line-height: 40px;
    display: grid;
    place-items: center;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    transition: 0.3s ease;
    cursor: pointer;

    &.active,
    &:hover {
      background-color: $primary;
      border-color: transparent;
      color: white;
    }
  }
}
</style>
