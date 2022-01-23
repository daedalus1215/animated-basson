<template>
  <div>
    <h1>category page {{ titleCase(currentCategory.name) }}</h1>
    <div class="search">
      <form @submit.prevent="submit">
        <input type="text" placeholder="Add Todo" v-model="addTodo" />
        <button>Submit</button>
      </form>
    </div>
    <ul v-if="todos.length > 0" class="list">
      <li v-for="todo in todos" :key="todo.id" class="item">
        {{ todo.description }}
      </li>
    </ul>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";

export default {
  data() {
    return {
      id: this.$route.params.id,
      addTodo: null,
      currentCategory: {name: ''},
      todos: [],
    };
  },
  mounted() {
    console.log("CategoryPage - mounted - getters", this.$store.getters);
    this.currentCategory = this.$store.getters['getListOfTodosFromCategoryId'](this.id);
    console.log('currentCategory', this.currentCategory)
    this.todos = this.currentCategory.todos;
    console.log("CategoryPage - mounted - todos", this.todos);
  },
  methods: {
    titleCase(str) {
      return str
        ?.toLowerCase()
        .split(" ")
        .map(function (word) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
    },
    async submit() {
      await this.$store.dispatch("addTodoToCategory", {
        categoryId: this.id,
        id: uuid(),
        description: this.addTodo,
      });
      this.currentCategory = await this.$store.getters[
        "getListOfTodosFromCategoryId"
      ](this.id);
      this.todos = this.currentCategory.todos;
    },
  },
};
</script>
