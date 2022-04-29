<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <ModalWindowAddPaymentForm
      v-if="authFormShown"
      :settings="settings"
      @close="authFormShown = false"
    />
    <button @click="authFormShown = true">Auth</button> -->
  </div>
</template>

<script>
/* import ModalWindowAddPaymentForm from "../components/ModalWindowAddPaymentForm.vue"; */
export default {
  name: "AboutView",
  /*  components: { ModalWindowAddPaymentForm }, */
  data() {
    return {
      settings: {
        content: "auth",
        title: "Auth form",
      },
      authFormShown: false,
    };
  },
};
</script>

