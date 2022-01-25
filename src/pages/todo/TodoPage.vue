<template>
  <div>
    <h2>Todo: {{ titleCase(currentCategory) }}</h2>
    <div class="search">
      <form @submit.prevent="submit">
        <input type="text" placeholder="Add Todo" v-model="addTodo" />
        <button>Submit</button>
      </form>
    </div>
    <ul v-if="todos.length > 0" class="list">
      <li v-for="todo in todos" :key="todo.id" class="item" draggable="true">
        <button class="todoDeleteButton" @click="deleteTodo(todo.id)">X</button>
        <span class="todoDescription">{{ todo.description }}</span>
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
      currentCategory: { name: "" },
      todos: [],
    };
  },
  mounted() {
    console.log("CategoryPage - mounted - getters", this.$store.getters);
    this.currentCategory = this.$store.getters.getListOfTodosFromCategoryId(
      this.id
    );
    console.log(
      "CategoryPage - getters [getListOfTodosFromCategoryId]",
      this.$store.getters.getListOfTodosFromCategoryId(this.id)
    );
    console.log("currentCategory", this.currentCategory);
    this.todos = this.currentCategory?.todos || [];
    console.log("CategoryPage - mounted - todos", this.todos);
  },
  methods: {
    async deleteTodo(todoId) {
      await this.$store.dispatch("deleteTodoInCategory", {
        todoId,
        categoryId: this.id,
      });
      this.todos = this.$store.getters.getListOfTodosFromCategoryId(this.id)?.todos || [];
    },
    titleCase(category) {
      if (category?.name) {
        return category.name
          ?.toLowerCase()
          .split(" ")
          .map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
          })
          .join(" ");
      }
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

<style scoped>
ul {
  background-color: coral;
  margin: 10px;
  padding: 10px;
}
li {
  list-style: none;
  margin: 10px;
  padding: 10px;
  background-color: cadetblue;
}
.todoDescription {
  width: 200px;
  margin: 10px;
}
.todoDeleteButton {
  width: 25px;
  height: 25px;
  margin: 10px;
}
</style>
