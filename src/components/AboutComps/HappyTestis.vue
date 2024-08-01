<template>
  <section class="testimonials">
    <div class="container">
      <div class="header" v-motion-animate>
        <h3>Tesimonial</h3>
        <h4>Happy Guests</h4>
      </div>
      <div class="content">
        <div class="wrapper">
          <TestiComment
            :style="{ translate: `-${index * boxWidth}px` }"
            v-for="(t, i) in testis"
            :key="i"
            :testi="t"
            ref="comments"
          />
        </div>
      </div>
      <div class="bullets">
        <div
          :class="{
            active:
              index >= (c - 1) * this.rowCount && index < c * this.rowCount,
          }"
          v-for="c in this.testis.length / this.rowCount"
          @click="changeIndex((c - 1) * this.rowCount, $event)"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
import TestiComment from "@/components/AboutComps/TestiComment.vue";

export default {
  components: { TestiComment },
  data() {
    return {
      testis: [
        {
          img: "person_1.jpg",
          name: "Roger Scott",
          job: "marketing manager",
          comment: `Far far away, behind the word mountains, far from the 
        countries Vokalia and Consonantia, there live the blind texts.`,
        },
        {
          img: "person_2.jpg",
          name: "Roger Scott",
          job: "marketing manager",
          comment: `Far far away, behind the word mountains, far from the 
        countries Vokalia and Consonantia, there live the blind texts.`,
        },
        {
          img: "person_3.jpg",
          name: "Roger Scott",
          job: "marketing manager",
          comment: `Far far away, behind the word mountains, far from the 
        countries Vokalia and Consonantia, there live the blind texts.`,
        },
        {
          img: "person_2.jpg",
          name: "Roger Scott",
          job: "marketing manager",
          comment: `Far far away, behind the word mountains, far from the 
        countries Vokalia and Consonantia, there live the blind texts.`,
        },
        {
          img: "person_3.jpg",
          name: "Roger Scott",
          job: "marketing manager",
          comment: `Far far away, behind the word mountains, far from the 
        countries Vokalia and Consonantia, there live the blind texts.`,
        },
        {
          img: "person_1.jpg",
          name: "Roger Scott",
          job: "marketing manager",
          comment: `Far far away, behind the word mountains, far from the 
        countries Vokalia and Consonantia, there live the blind texts.`,
        },
      ],
      index: 0,
      multiplyer: 1,
      interval: null,
      boxWidth: 390,
      rowCount: 3,
    };
  },
  mounted() {
    this.changeWidth();
    window.addEventListener("resize", this.changeWidth);
    let indicator = 0;
    this.interval = setInterval(() => {
      indicator++;
      this.index += this.multiplyer;
      if (
        (indicator % this.rowCount === 0 && this.rowCount > 1) ||
        (this.rowCount === 1 && this.index === this.testis.length - 1)
      ) {
        this.multiplyer *= -1;
      }
    }, 3000);
  },
  methods: {
    changeIndex(num, event) {
      this.index = num;
      clearInterval(this.interval);
    },
    changeWidth() {
      setTimeout(() => {
        this.boxWidth =
          24 +
          document.querySelector(".testimonials .content .comment").offsetWidth;
        if (window.innerWidth <= 580) {
          this.rowCount = 1;
        } else if (window.innerWidth <= 992) {
          this.rowCount = 2;
        } else {
          this.rowCount = 3;
        }
      }, 600);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  .content {
    overflow-x: hidden;

    .wrapper {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: $base * 3;

      > .comment {
        transition: 0.5s;
        width: calc(((100% - $base * 6) / 3));
        flex-shrink: 0;
        @include lg {
          width: calc(((100% - $base * 3) / 2));
        }
        @include breakpoint(580px) {
          width: 100%;
        }
      }
    }
  }

  .bullets {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: $base * 1.125;
    margin-top: $base * 5;

    div {
      cursor: pointer;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background-color: #ddd;
      transition: 0.15s;

      &.active {
        background-color: $secondary;
      }
    }
  }
}
</style>
