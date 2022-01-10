<template>
  <div class="body">
    <div class="search">
      <form @submit.prevent="submit">
        <input type="text" placeholder="Add Category" v-model="category" />
        <button>Submit</button>
      </form>
    </div>
    <ul class="list">
      <li
        v-for="category in getListOfCategories"
        :key="category.id"
        class="item"
      >
        <router-link :to="getUrl(category)">{{
          getName(category)
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      category: "",
      // listOfCategories: [],
    };
  },
  // mounted() {
  //   // this.listOfCategories = JSON.parse(localStorage.getItem('animated_basson') || '[]');
  // },
  // computed: {
  //   ...mapGetters("auth", ["getListOfCategories"]),
  // },
  mapGetters() {
    return { auth: ["getListOfCategories"] };
  },
  mapActions() {
    return {
      auth: { addToListOfCategories: "addToListOfCategories" },
    };
  },
  methods: {
    getName: (v) => v.name.toUpperCase(),
    getUrl: (v) => `/category/${v.id}`,
    submit(v) {
      const newItem = { id: uuid(), name: this.category };
      this.$store.dispatch("addToListOfCategories", newItem);
      // const existing = JSON.parse(localStorage.getItem("animated_basson") || '[]');
      // console.log('before', existing)

      // existing.push(newItem);
      // localStorage.setItem(`animated_basson`, JSON.stringify(existing));

      // console.log('after',localStorage.getItem("to_do"));
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
  /* background-color: red; */
  list-style-type: none;
}
</style>