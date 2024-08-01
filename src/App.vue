<template>
  <NavBar/>
  <RouterView></RouterView>
</template>

<script>
  import NavBar from './components/HeaderComps/NavBar.vue';
  export default {
    components:{NavBar}
  }
</script>

<style lang="scss">
</style>