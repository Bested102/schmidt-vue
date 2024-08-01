<template>
  <section class="contact">
    <div class="container">
      <div class="wrapper">
        <div class="content">
          <h3>Contact us</h3>
          <h4>We're open for any suggestion or just to have a chat</h4>
          <div class="info">
            <div>
              <h5>Address:</h5>
              <p>198 West 21th Street, Suite 721 New York NY 10016</p>
            </div>
            <div>
              <h5>Email:</h5>
              <p>
                <a :href="`mailto:${email}`">{{ email }}</a>
              </p>
            </div>
            <div>
              <h5>Phone:</h5>
              <p>
                <a :href="`tel:${phone.replace(/ /g, '')}`">{{ phone }}</a>
              </p>
            </div>
          </div>
          <form class="form" @submit.prevent>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea
              name="text"
              placeholder="Create a message here"
            ></textarea>
            <button class="send">Send message</button>
          </form>
          <div class="links">
            <h5>Follow us here</h5>
            <ul>
              <li v-for="l in socials" :key="l.name">
                <a :href="l.link">{{ l.name }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.879350445393!2d-73.99903742458059!3d40.74268023573777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bb665a5b95%3A0x37d23ed9e6c9479e!2s198%20W%2021st%20St%20%23721%2C%20New%20York%2C%20NY%2010011%2C%20USA!5e0!3m2!1sen!2seg!4v1722004449995!5m2!1sen!2seg" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "info@yoursite.com",
      phone: "+ 1235 2355 98",
      socials:[
        {
          name:'Facebook',
          link:'#',
        },
        {
          name:'Twitter',
          link:'#',
        },
        {
          name:'Instagram',
          link:'#',
        },
        {
          name:'Dribbble',
          link:'#',
        },
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.container{
  @include md-sp {
    max-width: 720px;
  }
  @include sm-sp{
    max-width:540px
  }
}
.wrapper {
  display: flex;
  background-color: white;

  .content {
    flex: 1 1 0;
    padding: $base * 6;
    padding-bottom: $base * 8;
    @include md{
      padding:$base * 3;
      padding-bottom:$base * 4.5;
    }
    h3 {
      font-weight: 700;
      font-size: $base * 3.75;
      margin-bottom: $base;
    }
    h4 {
      color: $secondary;
      margin-bottom: $base * 3;
      font-weight: 400;
    }
    .info {
      display: flex;
      gap: $base * 3;
      margin-bottom: $base * 3;

      @include md{
        flex-direction:column;
      }
      > div {
        flex: 1 1 0;
        h5 {
          font-weight: 700;
          text-transform: uppercase;
          font-size: $base * 1.5 + 1px;
          line-height: 1.8;
        }
        p {
          color: $secondary;
          a {
            color: $offBlack;
          }
        }
      }
    }
    .form {
      line-height: 1.5;
      margin-bottom: $base * 6;
      input,
      textarea {
        font-size: $base * 1.5 + 2px;
        padding: 0;
        display: block;
        width: 100%;
        height: 45px;
        outline: none;
        border: none;
        border-radius: 2px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        font-weight: 400;
        font-family: inherit;

        &::placeholder {
          opacity: 1;
          color: rgba(0, 0, 0, 0.3);
        }
      }
      textarea {
        height: initial;
        resize: none;
        line-height: 21px;
        min-height: 85px;
        max-height: 200px;
        padding-block: $base;
      }
      button{
        outline: none;
        border: none;
        font-family:inherit;
        background-color: $primary;
        color: white;
        padding: $base + 1px $base * 1.5;
        letter-spacing: 1px;
        font-weight: 700;
        text-transform: uppercase;
        font-size: $base * 1.5;
      }
    }
    .links{
      h5{
        font-size: $base * 2.5;
        font-weight: 400;
        margin-bottom: $base;
      }
      ul{
        display: flex;
        flex-wrap:wrap;
        gap: $base * 1.25;
        text-transform: uppercase;
        font-weight: 600;
        font-size: $base * 1.5 + 1px;
      }
    }
  }
  .map {
    flex: 1 1 0;
    iframe{
      width: 100%;
      height: 100%
    }
  }

  @include lg{
    display: block;

    .map{
      height: 300px;
    }
  }
}
</style>
