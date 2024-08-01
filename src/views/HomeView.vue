<template>
  <div class="landing">
    <div class="container">
      <div class="info">
        <p class="job">UI/UX Designer & Developer</p>
        <h1>
          I'm John Schmidt
        </h1>
        <div class="buttons">
          <div class="more">
            More about me <font-awesome-icon class="icon" :icon="['fas', 'arrow-right']" />
          </div>
          <div class="hire">
            Hire me <font-awesome-icon class="icon" :icon="['fas', 'arrow-right']" />
          </div>
        </div>
      </div>
      <CopyRight />
      <div class="img-slider">
        <transition-group name="slide">
          <template v-for="(x, i) in imgs" :key="i">
            <img v-if="this.index === i" :src="getImage(x)">
          </template>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import CopyRight from '@/components/CopyRight.vue';

export default {
  components: {
    CopyRight,
  },
  data() {
    return {
      imgs: ['jschmidt.png.webp', 'jschmidt-2.png.webp'],
      index: 0,
    }
  },
  methods: {
    getImage(path) {
      return new URL(`../assets/images/${path}`, import.meta.url).href
    },
    checkWidth() {
      let x = window.matchMedia("(max-width: 991px)").matches;
      this.isMobile = x
      if (!x) this.showMenu = false
    }
  },
  mounted() {
    setInterval(() => {
      this.index = this.index === 0 ? 1 : 0
    }, 4500);
  },
  beforeCreate() {
    document.body.classList.add("mix-background");
  },
  beforeUnmount() {
    document.body.classList.remove("mix-background");
  },
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  min-height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 60px;

  .copyright {
    padding-block: initial;
    position: absolute;
    bottom: 40px;

    @include sm {
      color: $background;
      font-weight: 500;
      text-shadow: -1px -1px 0 #0000008c, 1px -1px 0 #0000008c, -1px 1px 0 #0000008c, 1px 1px 0 #0000008c;
    }
  }

  .info {
    width: 50%;

    .layer {
      display: none
    }

    p {
      color: $primary;
      font-weight: 700;
      text-transform: uppercase;
    }

    h1 {
      font-size: $base * 10;
      line-height: 1.2;
      margin-bottom: $base * 3
    }

    .buttons {
      display: flex;
      font-weight: 700;
      gap: 20px;
      text-transform: uppercase;

      div {
        padding: $base * 2 $base * 3;
        font-size: $base * 1.5;
        display: flex;
        align-items: center;
        letter-spacing: 1px;
        user-select: none;
        cursor: pointer;
        box-shadow: 0px 24px 36px -11px rgba(0, 0, 0, 0.09);
        gap: 10px;
      }

      .more {
        background-color: $primary;
        color: white;
      }

      .hire {
        background-color: white;
      }
    }
  }

  .img-slider {
    width: calc(50% - 30px);
    position: absolute;
    right: 15px;
    top: calc(0px - var(--header-height));
    height: 100vh;
    overflow: hidden;

    img {
      max-width: 100%;
    }

    .slide-enter-active,
    .slide-leave-active {
      transition: .8s;
      position: absolute;
    }

    .slide-leave-to {
      transform: translateX(-100%)
    }

    .slide-enter-from {
      transform: translateX(100%);
    }

    @include xl {
      right: 5px;
      width: calc(50% - 10px);
      top: 0;
      height: 100%;
    }

    @include lg {
      display: none;
    }

    @include sm {
      display: block;
      left: 0;
      top: auto;
      bottom: 0;
      height: calc(100vh - 350px);
      width: 100%;
      z-index: 3;
    }
  }

  @include lg {
    justify-content: center;
    background-color: $background;

    .info {
      width: 100%;
      text-align: center;
      position: relative;
    }

    .buttons {
      justify-content: center;
    }
  }

  @include md {
    .info {
      h1 {
        font-size: $base * 4;
      }
    }
  }

  @include sm {
    align-items: flex-start;
    padding-top: $base * 3;

    .info {
      p {
        font-size: $base * 1.5;
      }

      .buttons {
        flex-direction: column;
        gap: $base;

        div {
          justify-content: center;
          line-height: 1.6;
        }
      }
    }
  }
}
</style>