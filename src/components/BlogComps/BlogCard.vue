<template>
  <div class="blog">
    <img :src="getImage" alt="" />
    <div class="content">
      <div class="info">
        <span>{{ blog.role }}</span>
        <span>{{ blog.date }}</span>
        <span>{{ blog.comments }} Comments</span>
      </div>
      <h5>
        {{ blog.title }}
      </h5>
      <p>
        {{ blog.content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blog"],
  computed: {
    getImage() {
      return `https://preview.colorlib.com/theme/schmidt/images/${this.blog.img}.webp`;
    },
  },
};
</script>

<style lang="scss" scoped>
.blog {
  background-color: white;
  img {
    width: 100%;
    height: 300px;
  }

  .content {
    padding-inline: $base * 3.75;
    padding-block: $base * 3 $base * 5.75;

    .info {
      font-size: $base * 1.5 + 1px;
      font-weight: 500;
      text-transform: uppercase;
      margin-bottom: $base * 2;

      span {
        color: $secondary;
        margin-right: $base * 1.25;
        &:last-of-type {
          color: $primary;
        }
      }
    }
    h5 {
      font-size: $base * 2.75;
      font-weight: 400;
      margin-bottom: $base * 2;
    }
    p {
      color: $secondary;
    }
  }

  @include sm {
    .content {
      padding-inline: $base * 3.25;
      padding-block: $base * 2.5 $base * 5;
      .info{
        margin-bottom: $base * 1.75;
      }
      h5{
        margin-bottom: $base * 1.75;
      }
    }
  }
}
</style>
