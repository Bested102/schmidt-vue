import "./assets/scss/style.scss";

import { MotionPlugin } from "@vueuse/motion";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faArrowRight,
  faBars,
  faHeart,
  faXmark,
  faAngleRight,
  faQuoteLeft,
  faObjectUngroup,
  faCode,
  faPenFancy,
  faFileContract,
  faBullhorn,
  faMobileScreenButton,
  faPenToSquare,
  faChalkboardUser,
  faCheck,
  faUserGraduate,
  faLaptop,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faBars,
  faXmark,
  faHeart,
  faArrowRight,
  faAngleRight,
  faQuoteLeft,
  faObjectUngroup,
  faCode,
  faPenFancy,
  faFileContract,
  faBullhorn,
  faMobileScreenButton,
  faPenToSquare,
  faChalkboardUser,
  faCheck,
  faXmark,
  faUserGraduate,
  faLaptop,
  faLocationDot,
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(MotionPlugin, {
  directives: {
    animate: {
      initial: {
        opacity: 0,
        y: 135,
      },
      visibleOnce: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 750,
        },
      },
    },
  },
});
app.mount("#app");
