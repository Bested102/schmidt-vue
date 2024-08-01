<template>
  <section class="plans">
    <div class="container">
      <div class="header" v-animate>
        <h3>Pricing</h3>
        <h4>Choose Your Pricing Plan</h4>
      </div>
      <div class="content">
        <PricingPlan v-for="(p, i) in plans" :key="p.name" :plan="p" :index="i"/>
      </div>
    </div>
  </section>
</template>

<script>
import PricingPlan from "./PricingPlan.vue";
export default {
  components: { PricingPlan },
  data() {
    return {
      plans: [
        {
          price: 49,
          name: "Personal",
          features: {
            "Strategic Alliance": true,
            "Growth Expansion": true,
            "Business Planning": false,
            "Contact Negotiation": false,
            "Market Positioning": false,
          },
        },
        {
          price: 79,
          name: "Professional",
          features: {
            "Strategic Alliance": true,
            "Growth Expansion": true,
            "Business Planning": true,
            "Contact Negotiation": false,
            "Market Positioning": false,
          },
        },
        {
          price: 109,
          name: "Medium Business",
          features: {
            "Strategic Alliance": true,
            "Growth Expansion": true,
            "Business Planning": true,
            "Contact Negotiation": true,
            "Market Positioning": false,
          },
        },
        {
          price: 149,
          name: "Gigantic Business",
          features: {
            "Strategic Alliance": true,
            "Growth Expansion": true,
            "Business Planning": true,
            "Contact Negotiation": true,
            "Market Positioning": true,
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  .content {
    margin-top: $base * 6;
    display: grid;
    gap: $base * 2.5 $base * 3.5;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

    @include xl{
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }

    @include sm{
      grid-template-columns:1fr; 
    }
  }
}
</style>
