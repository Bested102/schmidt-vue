<template>
  <RouteInfo text="Contact us" />
  <ContactUs/>
  <CopyRight/>
</template>

<script>
import CopyRight from '@/components/CopyRight.vue';
import RouteInfo from '@/components/routeInfo.vue';
import ContactUs from '@/components/ContactComps/ContactUs.vue';

export default {
  components: {
    RouteInfo,
    CopyRight,
    ContactUs,
  },
}
</script>

<style lang="scss" scoped>

</style>