<template>
  <RouteInfo text="What I Do? " />
  <ServicesComp/>
  <PricingPlans/>
  <CopyRight/>
</template>

<script>
import RouteInfo from '@/components/routeInfo.vue'
import ServicesComp from '@/components/ServicesComps/ServicesComp.vue'
import PricingPlans from '@/components/ServicesComps/PricingPlans.vue'
import CopyRight from '@/components/CopyRight.vue';


export default {
  components: {
    RouteInfo,
    ServicesComp,
    PricingPlans,
    CopyRight
  },
}
</script>

<style lang="scss" scoped>

</style>