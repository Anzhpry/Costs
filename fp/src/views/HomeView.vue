<template>
  <div class="home">
    <router-link
      :to="{
        name: 'AddPaymentPage',
        params: { category: 'Sport' },
        query: { value: 500 },
      }"
      >Sport 500</router-link
    >
    /

    <router-link
      :to="{
        name: 'AddPaymentPage',
        params: { category: 'Education' },
        query: { value: 1000 },
      }"
      >Education 1000</router-link
    >
    /
    <router-link
      :to="{
        name: 'AddPaymentPage',
        params: { category: 'Food' },
      }"
      >Food</router-link
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
