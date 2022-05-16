<template>
<v-container>
  <v-row>
        <v-col :cols="3">#</v-col>
        <v-col :cols="4">Date</v-col>
        <v-col :cols="4">Category</v-col>
        <v-col :cols="1">Value</v-col>
  </v-row>
  <v-row v-for="item in list" :key="item.id">
    <v-col :cols="3"> {{item.id}} </v-col>
     <v-col :cols="4">{{item.date}}</v-col>
      <v-col :cols="4">{{item.category}}</v-col>
       <v-col :cols="1">{{item.value}}</v-col>
  </v-row>
</v-container>


 <!--  <div class="list">
    <table>
      <tr>
        <th>#</th>
        <th>Date</th>
        <th>Categoty</th>
        <th>Value</th>
        <th></th>
      </tr>
    </table>
    <div class="item" v-for="item in list" :key="item.id">
      <table>
        <tr>
          <th>{{ item.id }}</th>
          -
          <th>{{ item.date }}</th>
          -
          <th>{{ item.category }}</th>
          -
          <th>{{ item.value }}</th>
          -
          <span class="action" @click="onClickContextItem($event, item)"
            >...</span
          >
          <th></th>
        </tr>
      </table>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
 /*  methods: {
    editItem(item) {
      console.log(item);
    },
    deleteItem(id) {
      this.$store.commit("paymentListDeleteItem", id);
    },
    onClickContextItem(event, item) {
      const items = [
        {
          text: "Edit",
          action: () => {
            this.editItem(item);
          },
        },
        {
          text: "Delete",
          action: () => {
            this.deleteItem(item.id);
          },
        },
      ];
      this.$contextMenu.show({ event, items });
    },
  }, */
};
</script>

<style lang="scss" scoped>
.action {
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
}
</style>