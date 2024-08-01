<template>
  <header ref="header">
    <div class="container">
      <div class="logo">
        Schmt.
      </div>
      <font-awesome-icon class="icon" :icon="icon" @click="menu = !menu" />
      <transition name="menu">
        <MenuNav v-if="menu && !isMobile" @closeMenu="menu = false" />
      </transition>
    </div>
    <transition name="menu">
      <MenuNav v-show="menu && isMobile" @closeMenu="menu = false" />
    </transition>
  </header>
</template>

<script>
import MenuNav from './MenuNav.vue';


export default {
  components: {
    MenuNav,
  },
  data() {
    return {
      isMobile: false,
      menu: false,
    }
  },
  computed: {
    icon() {
      return this.menu ? ['fas', 'xmark'] : ['fas', 'bars']
    }
  },
  methods: {
    changeHeight() {
      document.documentElement.style
        .setProperty('--header-height', `${this.$refs.header.offsetHeight}px`)
    },
    checkWidth() {
      let x = window.matchMedia("(max-width: 991px)").matches;
      this.isMobile = x
      if (!x) this.showMenu = false
    }
  },
  mounted() {
    this.changeHeight();
    this.checkWidth()
    window.addEventListener('resize', () => {
      this.checkWidth()
      this.changeHeight()
    })
  }
}
</script>

<style lang="scss" scoped>
header {
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: $base * 3 $base * 1.5;
    position: relative;
    z-index: 10;
    user-select: none;

    @include lg {
      padding: $base * 1.5;
      line-height: 1.6;
    }

    .logo {
      font-size: $base * 3;
      font-weight: 800;
      cursor: pointer;
    }

    .icon {
      cursor: pointer;
    }
  }

  
  .menu-enter-active,
    .menu-leave-active {
      transition: .3s ease-out;
      overflow: hidden;
    }

    .menu-enter-to,
    .menu-leave-from {
      max-height: 300px;
    }

    .menu-enter-from,
    .menu-leave-to {
      max-height: 0;
    }

    .menu-mobile-enter-active,
    .menu-mobile-leave-active {
      transition: .175 ease-out;
      overflow: hidden;
    }

    .menu-mobile-enter-from,
    .menu-mobile-leave-to {
      max-height: 0;
    }

    .menu-mobile-enter-to,
    .menu-mobile-leave-from {
      max-height: 400px;
    }

  @include lg {
    background-color: $offBlack ;
    color: $background
  }
}
</style>