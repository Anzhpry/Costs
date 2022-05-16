<template>
<v-card class="text-left pa-8">
  <v-text-field v-model="date" label="Date"/>
  <v-text-field v-model="value" label="Value"/>
  <v-select v-model="category" :items="categoryList" label="Category"/>
  <v-btn  color="teal" dark @click="onSave">Save</v-btn>
  </v-card>
</template>

<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
      value: "",
      category: "",
      date: "",
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();

      return `${d}.${m}.${y}`;
    },
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
  },
  methods: {
    onSave() {
      const data = {
        value: this.value,
        category: this.category,
        date: this.data || this.getCurrentDate,
      };
      this.$store.commit("addDataPaymentsList", data);
      this.$emit("addNewPayment", data);
    },
  },
  async mounted() {
    if (!this.categoryList.length) {
      await this.$store.dispatch("fetchCategoryList");
    }

    if (this.$route.params?.category) {
      this.category = this.$route.params.category;
      if (this.$route.query?.value) {
        this.value = this.$route.query.value;
      }
    }

    if (this.category && this.value) {
      this.onSave();
      this.router.push({
        name: "dashpoard",
      });
    }
  },
};
</script>

<style>
</style>