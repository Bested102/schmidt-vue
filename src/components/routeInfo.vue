<template>
  <div class="route-info">
    <div class="container">
      <p>
        <router-link :to="prevRoute">
          <span>{{ getPrevRoute.slice(1).replace('-', ' ') }}
            <font-awesome-icon :icon="['fas', 'angle-right']" />
          </span>
        </router-link>
        <span>{{ $route.name.replace('-', ' ') }}
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </span>
      </p>
      <h2 class="info">
        {{ text }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ['text'],
  data() {
    return {
      prevRoute: null,
    }
  },
  created() {
    this.prevRoute = this.$router.options.history.state.back
  },
  computed: {
    getPrevRoute() {
      if (this.prevRoute == "/") return "/home"
      return this.prevRoute ? this.prevRoute : '/home'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: $base * 18;

  p {
    font-size: $base * 1.75;
    font-weight: 600;
    text-transform: uppercase;
    color: $secondary;
    margin-bottom: $base;

    span:first-child {
      transition: .2s;
      margin-right: $base * 2;
      cursor: pointer;
      user-select: none;

      &:hover {
        color: $primary;
      }
    }
  }

  .info {
    font-weight: 600;
    font-size: $base * 5;
    line-height:1.2;
  }

  @include md{
    .info{
      font-size:$base * 4.75;
    }
    p{
      font-size:$base * 1.5 + 1px;
    }
  }

  @include sm{
    padding-top: $base * 16;
  }
}
</style>