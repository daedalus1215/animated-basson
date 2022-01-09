<template>
  <div class="container">
    <div class="row">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      text: "Hello there!",
      fruits: ["Apple", "Banana", "Mango", "Melon"],
      filterText: "",
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((element) => {
        return element.match(this.filterText);
      });
    },
  },
};
</script>

<style>
</style>
