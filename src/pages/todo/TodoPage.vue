<template>
  <div>
    <h2>{{ titleCase(currentCategory) }}</h2>
    <div class="search">
      <form @submit.prevent="submit">
        <input
          type="text"
          placeholder="Add Todo"
          v-model="addTodo"
          class="addTodo"
        />
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
    // console.log("CategoryPage - mounted - getters", this.$store.getters);
    this.currentCategory = this.$store.getters.getListOfTodosFromCategoryId(
      this.id
    );
    // console.log(
    //   "CategoryPage - getters [getListOfTodosFromCategoryId]",
    //   this.$store.getters.getListOfTodosFromCategoryId(this.id)
    // );
    // console.log("currentCategory", this.currentCategory);
    this.todos = this.currentCategory?.todos || [];
    // console.log("CategoryPage - mounted - todos", this.todos);
  },
  methods: {
    async deleteTodo(todoId) {
      if (
        confirm(
          `Do you really want to delete ${this.titleCase(this.currentCategory)}`
        )
      ) {
        await this.$store.dispatch("deleteTodoInCategory", {
          todoId,
          categoryId: this.id,
        });
        this.todos =
          this.$store.getters.getListOfTodosFromCategoryId(this.id)?.todos ||
          [];
      }
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
      this.addTodo = "";
    },
  },
};
</script>

<style scoped>
body {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.row {
  display: flex;
  flex-direction: column;
}
.addTodo {
  height: 50px;
  width: 94%;
  margin: 0 5px;
  border-radius: 6;
}
.addTodo input {
  height: 40px;
  border-radius: 3px;
}
ul {
  /* background-color: coral; */
  margin: 10px;
  padding: 10px;
}
.list {
  border-radius: 3px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  overflow-y: scroll;
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
.todoDescription {
  padding: 0;
  margin: auto 10px;
  width: 80%;
}
.todoDeleteButton {
  width: 25px;
  height: 25px;
  padding: 0;
  border-radius: 4px;
  margin: auto 10px;
}
</style>
