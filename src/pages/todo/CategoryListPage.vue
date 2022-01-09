<template>
  <div class="body">
    <div class="search">
      <input type="text" placeholder="Search" />
    </div>
    <ul class="list">
      <li v-for="category in listOfCategories" :key="category.id" class="item">
        <router-link :to="getUrl(category)">{{ getName(category) }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listOfCategories: [
        {
          name: "groceries",
          id: 1,
        },
        { name: "saturday", id: 2 },
      ],
    };
  },
  methods: {
    getName: (v) => v.name.toUpperCase(),
    getUrl: (v) => `/category/${v.id}`
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