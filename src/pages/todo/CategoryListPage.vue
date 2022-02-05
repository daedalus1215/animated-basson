<template>
  <div class="body">
    <div class="search">
      <form @submit.prevent="submit">
        <input type="text" placeholder="Add Category" v-model="category" />
      </form>
    </div>
    <ul v-if="listOfCategories" class="list">
      <li v-for="category in listOfCategories" :key="category.id" class="item">
        <button
          class="categoryDeleteButton"
          @click="deleteCategory(category.id)"
        >
          X
        </button>
        <router-link :to="getUrl(category)">{{
          getName(category)
        }}</router-link>
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
  async mounted() {
    this.listOfCategories = await this.$store.getters["getListOfCategories"];
  },
  mapActions() {
    return {
      addToListOfCategories: "addToListOfCategories",
    };
  },
  methods: {
    getName: (v) => v?.name,
    getUrl: (v) => `/category/${v.id}`,
    async submit() {
      await this.$store.dispatch("addToListOfCategories", {
        id: uuid(),
        name: this.category,
        todos: [],
      });
      // console.log("check", this.$store);
      this.listOfCategories = this.$store.getters["getListOfCategories"];
      // console.log("listOfCategories", this.listOfCategories);
      this.category = "";
    },
    deleteCategory(categoryId) {
      if (
        confirm(
          `Do you really want to delete ${this.getName(
            this.listOfCategories.find((c) => c.id === categoryId)
          )}`
        )
      ) {
        this.$store.dispatch("deleteCategory", categoryId);
        this.listOfCategories = this.$store.getters["getListOfCategories"];
      }
    },
  },
};
</script>

<style scoped>
.body {
  margin: auto;
  /* background-color: black; */
  display: flex;
  flex-direction: column;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.search {
  height: 50px;
  margin: 0 5px;
  border-radius: 6;
}
.search input {
  height: 40px;
  width: 98%;
  border-radius: 3px;
}
.list {
  border-radius: 3px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  overflow-y: scroll;
}
ul {
  list-style: none;
}

ul li::before {
  content: "\200B";
}

.item {
  height: 60px;
  background-color: #ddd;
  border-radius: 4px;
  line-height: 3;
  display: flex;
  padding: 0;
  margin: 5px 0px;
}
.item a {
  text-decoration: none;
  padding: 0;
  margin: auto 10px;
  width: 80%;
}
.categoryDeleteButton {
  width: 25px;
  height: 25px;
  padding: 0;
  border-radius: 4px;
  margin: auto 10px;
}
</style>