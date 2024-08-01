<template>
  <RouteInfo text="Blog Posts" />
  <BlogsComp />
  <CopyRight />
</template>

<script>
import BlogsComp from "@/components/BlogComps/BlogsComp.vue";
import CopyRight from "@/components/CopyRight.vue";
import RouteInfo from "@/components/routeInfo.vue";

export default {
  components: {
    RouteInfo,
    CopyRight,
    BlogsComp,
  },
};
</script>

<style lang="scss" scoped></style>
