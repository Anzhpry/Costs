<template>
  <div class="list">
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
  </div>
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
  methods: {
    editItem(item) {
      console.log(item);
    },
    deleteItem(id) {
      console.log(id);
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
  },
};
</script>

<style lang="scss" scoped>
.action {
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
}
</style>