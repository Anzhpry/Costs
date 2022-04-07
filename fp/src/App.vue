<template>
  <div id="app">
    <div class="wrapper">
      <header class="title">My personal costs</header>
      <div>My total {{ getFPV }}</div>
      <main>
        <AddPaumentForm @addNewPayment="addDate" />
        <PaymentsDisplay :list="paymentsList" />
        <ListCosts />
      </main>
    </div>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddPaumentForm from "./components/AddPaymentForm.vue";
import ListCosts from "./components/ListCosts.vue";
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaumentForm,
    ListCosts,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getFullPaymentValue", "getPaymentList"]),
    getFPV() {
      return this.$store.getters.getFullPaymentValue;
    },
    paymentsList() {
      return this.$store.getters.getPaymentList;
    },
  },
  methods: {
    ...mapMutations(["setPaymentListData"]),
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
      /* this.paymentsList.push(data); */
      this.$store.commit("addDataPaymentsList", data);
    },
  },
  created() {
    /*    this.paymentsList = this.fetchData(); */
    this.setPaymentListData(this.fetchData());
  },
  mounted() {
    if (!this.paymentsList.length) {
      this.$store.dispatch("fetchData");
    }
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

.title {
  font-size: 30px;
}
</style>
