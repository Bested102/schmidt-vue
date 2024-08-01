<template>
  <section class="blogs">
    <div class="container">
      <div class="content">
        <BlogCard v-for="(b, i) in blogs" :key="i" :index="i + 1" :blog="b" />
      </div>
      <PagiBar />
    </div>
  </section>
</template>

<script>
import PagiBar from "../PagiBar.vue";
import BlogCard from "./BlogCard.vue";

export default {
  components: { BlogCard, PagiBar },
  data() {
    return {
      blogs: [
        {
          img: "image_1.jpg",
          role: "Admin",
          date: "Jan. 07, 2020",
          comments: 3,
          title: "The Newest and Updated Bootstrap 5 is Here",
          content:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        },
        {
          img: "image_2.jpg",
          role: "Admin",
          date: "Jun. 09, 2022",
          comments: 4,
          title: "The Newest and Updated Bootstrap 5 is Here",
          content:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        },
        {
          img: "image_3.jpg",
          role: "Member",
          date: "Jan. 07, 2021",
          comments: 2,
          title: "The Newest and Updated Bootstrap 5 is Here",
          content:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        },
        {
          img: "image_4.jpg",
          role: "Admin",
          date: "Jul. 07, 2021",
          comments: 6,
          title: "The Newest and Updated Bootstrap 5 is Here",
          content:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        },
        {
          img: "image_5.jpg",
          role: "Member",
          date: "Jan. 18, 2021",
          comments: 8,
          title: "The Newest and Updated Bootstrap 5 is Here",
          content:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        },
        {
          img: "image_6.jpg",
          role: "Member",
          date: "Jan. 07, 2024",
          comments: 5,
          title: "The Newest and Updated Bootstrap 5 is Here",
          content:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        },
        {
          img: "image_7.jpg",
          role: "Admin",
          date: "Jan. 08, 2021",
          comments: 9,
          title: "The Newest and Updated Bootstrap 5 is Here",
          content:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        },
        {
          img: "image_8.jpg",
          role: "Admin",
          date: "Jun. 07, 2021",
          comments: 1,
          title: "The Newest and Updated Bootstrap 5 is Here",
          content:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: $base * 5 $base * 3;
}
</style>
