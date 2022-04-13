<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/about">About</router-link>
      <div @click="goToPageAbout">Go About</div>
    </nav>
    <main>
      <router-view />
    </main>
    <transition name="fade">
      <ModalWindowAddPaymentForm v-if="modalShown" :settings="settings" />
    </transition>
  </div>
</template>

<script>
import ModalWindowAddPaymentForm from "./components/ModalWindowAddPaymentForm.vue";
export default {
  name: "App",
  components: { ModalWindowAddPaymentForm },
  data() {
    return {
      modalShown: false,
      settings: {},
    };
  },
  methods: {
    goToPageAbout() {
      this.$router.push({
        name: "about",
        params: {
          isTrial: 0,
        },
        query: {
          isTrial: true,
        },
      });
    },
    onShow(settings) {
      this.modalShown = true;
      this.settings = settings;
    },
    onHide() {
      this.modalShown = false;
      this.settings = {};
    },
  },
  created() {
    console.log(this.$router);
  },
  mounted() {
    this.$modal.EventBus.$on("shown", this.onShow);
    this.$modal.EventBus.$on("hide", this.onHide);
  },
  beforeDestroy() {
    this.$modal.EventBus.$on("shown", this.onShow);
    this.$modal.EventBus.$on("hide", this.onHide);
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.9s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
