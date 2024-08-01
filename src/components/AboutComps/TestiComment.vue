<template>
  <div class="comment">
    <div class="profile">
      <div class="img">
        <img :src="imgSrc" alt="" />
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'quote-left']" />
        </div>
      </div>
      <div class="info">
        <h5 class="name">
          {{ testi.name }}
        </h5>
        <span class="job">
          {{ testi.job }}
        </span>
      </div>
    </div>
    <p class="text">
      {{ testi.comment }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["testi"],
  computed: {
    imgSrc() {
      return new URL(`../../assets/images/${this.testi.img}`, import.meta.url)
        .href;
    },
  },
};
</script>

<style lang="scss" scoped>
.comment {
  padding: 35px 30px 54px;
  background-color: white;

  .profile {
    display: flex;
    align-items: center;
    gap: $base * 2;
    margin-bottom: $base * 3;

    .img {
      position: relative;
      width: $base * 10;
      height: $base * 10;

      img {
        max-width: 100%;
        border-radius: 50%;
      }

      .icon {
        position: absolute;
        bottom: 0;
        right: 0;
        display: grid;
        place-items: center;
        color: white;
        font-size: $base * 2.5;
        background-color: $primary;
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }

    .name {
      font-weight: 700;
      font-size: $base * 3 - 2px;
    }

    .job {
      text-transform: uppercase;
      font-weight: 600;
      color: $primary;
      font-size: $base * 1.5 + 1px;
    }
  }

  .text {
    color: $secondary;
  }

  @include md{
    padding: 30px 26px 46px;
  }
}
</style>
