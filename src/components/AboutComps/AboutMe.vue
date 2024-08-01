<template>
  <section class="about-me">
    <div class="container">
      <div class="stats">
        <StatBox
          v-for="(c, s, i) in stats"
          :key="i"
          :stat="s"
          :count="c"
          :index="i"
        />
      </div>
      <div
        class="info"
        v-motion
        :initial="{ opacity: 0, y: 140 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :delay="100"
        :duration="750"
      >
        <div class="header">
          <h3>About me</h3>
          <h4>A UI/UX Designer & Web Developer Based in Philippines</h4>
        </div>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blindtexts.
        </p>
        <ul class="data">
          <li v-for="(v, k, i) in info" :key="i">
            <span class="key">{{ k }}: </span>
            <span class="value">{{ v }}</span>
          </li>
        </ul>
        <div class="cv">Download CV</div>
      </div>
    </div>
  </section>
</template>

<script>
import StatBox from "./StatBox.vue";

export default {
  components: { StatBox },
  data() {
    return {
      stats: {
        "Happy Clients": 5000,
        "Projects Done": 1200,
        "Cups of Coffee": 500,
        "Working Hourse": 587,
      },
      info: {
        Name: "Clyde Nowitzki",
        "Date of birth": "January 01, 1990",
        Address: "San Francisco CA 97987 USA",
        "Zip code": 1000,
        Email: "cydenowitzki@gmail.com",
        Phone: "+1 - 2234 - 5678 - 9 - 0",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: flex-start;
  gap: $base * 7;

  .stats {
    flex: 1 1 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $base * 2.5 $base * 3;
    min-width: 0;
  }

  .info {
    flex: 1 1 0;
    min-width: 0;

    .header {
      text-align: initial;
      margin-bottom: $base * 3.25;
    }

    p {
      margin-bottom: $base * 5;
      color: $secondary;
    }

    ul {
      font-size: $base * 2 - 2px;
      column-count: 2;
      font-weight: 600;
      margin-bottom: $base * 3;

      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: $base * 1.25;

        span {
          width: 50%;
          flex: 1 1 0;
          word-wrap: break-word;

          &:last-child {
            color: $primary;
            line-height: 1.4;
          }
        }
      }
    }

    .cv {
      background-color: $primary;
      color: $background;
      text-transform: uppercase;
      padding: $base * 2 $base * 3;
      font-size: $base * 1.5;
      letter-spacing: 1px;
      font-weight: 700;
      width: fit-content;
      box-shadow: 0px 24px 36px -11px rgba(0, 0, 0, 0.09);
    }
  }

  @include xl {
    gap: $base * 3;
  }

  @include md {
    flex-direction: column;
    max-width: 540px;
    gap:$base * 4;

    > * {
      width: 100%;
      flex: initial;
    }

    .info {
      .header{
        margin-bottom:$base * 2.5;
      }
      p{
        margin-bottom:$base * 3.5;
      }
      ul {
      margin-bottom: $base * 2.5;
        column-count: 1;
        li {
          justify-content: flex-start;
          gap: $base;
          .key{
            width:110px;
            flex: initial;
          }
        }
      }
    }
  }

  @include sm{
    .stats{
      grid-template-columns: 1fr;
    }
    .info .header{
      h4{
        font-size: $base * 4.5;
      }
    }
  }
}
</style>
