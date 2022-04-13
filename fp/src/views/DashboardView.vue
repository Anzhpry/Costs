<template>
  <div id="app">
    <div class="wrapper">
      <header class="title">My personal costs</header>
      <div>My total {{ getFPV }}</div>
      <main>
        <!--   <AddPaymentForm @addNewPayment="addDate" /> -->
        <!--   <ModalWindowAddPaymentForm /> -->
        <PaymentsDisplay :list="currentElements" />
        <MyPagination
          :length="paymentsList.length"
          :n="n"
          :cur="cur"
          @changePage="onChangePage"
        />
        <button @click="addFormOpen">ADD NEW COST +</button>
      </main>
    </div>
  </div>
</template>

<script>
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
/* import AddPaymentForm from "../components/AddPaymentForm.vue"; */
import MyPagination from "../components/MyPagination.vue";
import { mapMutations } from "vuex";
/* import ModalWindowAddPaymentForm from "../components/ModalWindowAddPaymentForm.vue"; */
export default {
  name: "App",
  components: {
    PaymentsDisplay,
    /*     AddPaymentForm, */
    MyPagination,
    /* ModalWindowAddPaymentForm, */
  },
  data() {
    return {
      /* addFormShown: false, */
      settings: {
        content: "addpaymentform",
        title: "Add new Payment",
      },
      n: 5,
      cur: 1,
    };
  },
  computed: {
    /*   ...mapGetters(["getFullPaymentValue", "getPaymentList"]), */
    getFPV() {
      return this.$store.getters.getFullPaymentValue;
    },
    paymentsList() {
      return this.$store.getters.getPaymentList;
    },
    currentElements() {
      return this.paymentsList.slice(
        this.n * (this.cur - 1),
        this.n * (this.cur - 1) + this.n
      );
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
      this.$store.commit("addDataPaymentsList", data);
    },
    onChangePage(p) {
      this.cur = p;
    },
    addFormOpen() {
      this.$modal.show("addpaymentform", {
        content: "addpaymentform",
        title: "Add new Payment",
      });
    },
  },
  created() {
    this.setPaymentListData(this.fetchData());
  },
  async mounted() {
    await this.$store.dispatch("fetchData");
    this.cur = Number(this.$route.params.page);
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