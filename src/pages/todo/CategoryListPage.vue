<template>
  <div class="body">
    <div class="search">
      <form @submit.prevent="submit">
        <input type="text" placeholder="Add Category" v-model="category" />
      </form>
    </div>
    <ul v-if="listOfCategories" class="list">
      <li  v-for="category in listOfCategories" :key="category.id" class="item">
        <router-link :to="getUrl(category)">{{getName(category)}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";

export default {
  data() {
    return {
      category: "",
      listOfCategories: [],
    };
  },
  async mounted () {
    this.listOfCategories =  await this.$store.getters['getListOfCategories'];
  },
  mapActions() {
    return {
      addToListOfCategories: "addToListOfCategories",
    };
  },
  methods: {
    getName: (v) => v?.name?.toUpperCase(),
    getUrl: (v) => `/category/${v.id}`,
    async submit() {
      await this.$store.dispatch("addToListOfCategories", { id: uuid(), name: this.category, todos: [] });
      console.log('check', this.$store)
      this.listOfCategories = this.$store.getters['getListOfCategories']
      console.log('listOfCategories', this.listOfCategories)
      this.category = '';
    },
  },
};
</script>

<style scoped>
.body {
  margin: auto;
  /* background-color: black; */
}

.search {
  height: 50px;
  margin: 0 auto;
  border-radius: 6;
}
.search input {
  height: 40px;
  border-radius: 3px;
}
.list {
  /* background-color: green; */
  margin: 0 auto;
  border-radius: 3px;
}
.item {
  height: 40px;
  width: 90%;
  padding: 12px 10px;
  margin: 10px auto;
  background-color: #ddd;
  border-radius: 4px;
  line-height: 3;
  list-style-type: none;
}
</style>