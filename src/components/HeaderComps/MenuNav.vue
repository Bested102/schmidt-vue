<template>
  <div class="wrapper">
    <ul class="menu">
      <li v-for="(r, i) in routes" :key="i">
        <router-link :to="{ name: r }" @click="$emit('closeMenu')">
          {{ r }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        'Home',
        'About Us',
        'Services',
        'Experiences',
        'Works',
        'Blog',
        'Contact',
      ]
    }
  },
  emits: ['closeMenu'],
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  overflow:hidden;
  right: 10px;
  top: 100%;

  ul {
    list-style: none;
    font-weight: 500;
    background-color: white;
    font-size: 13px;
    width: 180px;
    border-radius: 2px;
    padding: 10px 25px;
    box-shadow: 0px 5px 25px -2px rgba(0, 0, 0, 0.06);

    li {
      padding-block: 8px;

      a {
        opacity: .8;

        &.router-link-active {
          color: $primary;
          opacity: 1;
        }
      }
    }
  }

  @include lg {
    position: relative;
    right: initial;
    left: 0;

    ul {
      width: 100%;
      background-color: $offBlack;
      background-color: initial;
      box-shadow: initial;
      padding: 0 $base * 2.5 $base * 2.5;

      li {
        &:first-child {
          padding-top: 0
        }

        a {
          opacity: 1;
        }
      }
    }
  }
}
</style>