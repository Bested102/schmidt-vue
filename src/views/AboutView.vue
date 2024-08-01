<template>
  <RouteInfo text="About Us"/>
  <AboutMe/>
  <MySkills/>
  <HappyTestis/>
  <CopyRight/>
</template>

<script>
import AboutMe from '@/components/AboutComps/AboutMe.vue';
import RouteInfo from '@/components/routeInfo.vue';
import MySkills from '@/components/AboutComps/MySkills.vue';
import HappyTestis from '@/components/AboutComps/HappyTestis.vue'
import CopyRight from '@/components/CopyRight.vue';

  export default {
    components:{RouteInfo, AboutMe, MySkills, HappyTestis, CopyRight}
  }
</script>

<style lang="scss" scoped>
</style>