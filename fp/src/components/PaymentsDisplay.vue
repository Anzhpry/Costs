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
          <th>{{ item.date }}</th>
          <th>{{ item.category }}</th>
          <th>{{ item.value }}</th>
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
};
</script>

<style>
</style>