<template>
  <p class="copyright">
    Template copy by
    <span><a href="https://bested102.github.io">Omar.dev</a></span> | This
    template is made with <font-awesome-icon :icon="['fas', 'heart']" /> by
    <span>Colorlib</span>
  </p>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
p {
  padding: $base * 4 $base * 2.5;
  z-index: 100;
  font-size: $base * 1.6;
  color: rgba($offBlack, 0.4);
  text-align: center;
  margin-inline: auto;
  span {
    color: $primary;
  }

  @include xl {
    max-width: 500px;
  }
}
</style>
