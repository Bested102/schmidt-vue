<template>
  <RouteInfo text="Portfolio" />
  <ProjectsComp/>
  <CopyRight/>
</template>

<script>
import CopyRight from '@/components/CopyRight.vue';
import RouteInfo from '@/components/routeInfo.vue';
import ProjectsComp from '@/components/WorkComps/ProjectsComp.vue';

export default {
  components: {
    RouteInfo,
    CopyRight,
    ProjectsComp
  },
}
</script>

<style lang="scss" scoped>

</style>