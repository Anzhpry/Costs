<template>
  <div id="app">
    <div class="wrapper">
      <header class="title">My personal costs</header>
      <main>
        <AddPaumentForm @addNewPayment="addDate" />
        <PaymentsDisplay :list="paymentsList" />
      </main>
    </div>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddPaumentForm from "./components/AddPaymentForm.vue";
export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaumentForm,
  },
  data() {
    return {
      paymentsList: [],
    };
  },
  methods: {
    fetchData() {
      return [
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
          id: "1",
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360,
          id: "2",
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
          id: "3",
        },
      ];
    },
    addDate(data) {
      this.paymentsList.push(data);
    },
  },
  created() {
    this.paymentsList = this.fetchData();
  },
};
</script>

<style lang='scss' scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
}

.title {
  font-size: 30px;
}
</style>
