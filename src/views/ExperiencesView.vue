<template>
  <RouteInfo text="Experiences" />
  <DegreesComp/>
  <CopyRight/>
</template>

<script>
import CopyRight from '@/components/CopyRight.vue';
import RouteInfo from '@/components/routeInfo.vue';
import DegreesComp from '@/components/ExpComps/DegreesComp.vue';

export default {
  components: {
    RouteInfo,
    CopyRight,
    DegreesComp
  },
}
</script>

<style lang="scss" scoped>

</style>