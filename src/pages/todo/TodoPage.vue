<template>
  <div>
    <form @submit.prevent="updateCategoryName" class="formNameChange">
      <input v-model="todoNameChange" class="title" type="text" />
    </form>
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
        <!-- <button class="todoDeleteButton" @click="deleteTodo(todo.id)">X</button> -->
        <!-- @TODO: Need to pass down the checked status  -->
        <todo-item
          :description="todo.description"
          :todoId="todo.id"
          :key="todo.id"
          :isChecked="todo.isChecked"
          :categoryId="currentCategory.id"
          :deleteTodo="deleteTodo"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";
import TodoItem from "./TodoItem.vue";

export default {
  components: { TodoItem },
  data() {
    return {
      id: this.$route.params.id,
      addTodo: null,
      currentCategory: { name: "" },
      todoNameChange: null,
      todos: [],
    };
  },
  mounted() {
    this.currentCategory = this.$store.getters.getListOfTodosFromCategoryId(
      this.id
    );
    this.todos = this.currentCategory?.todos || [];
    this.todoNameChange = this.currentCategory.name;
  },
  methods: {
    async deleteTodo(todoId) {
      await this.$store.dispatch("deleteTodoInCategory", {
        todoId,
        categoryId: this.id,
      });
      this.todos =
        this.$store.getters.getListOfTodosFromCategoryId(this.id)?.todos || [];
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
    async updateCategoryName() {
      await this.$store.dispatch("updateCategoryName", {
        id: this.id,
        name: this.todoNameChange,
      });
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
.formNameChange {
  background-color: cornflowerblue;
  margin-bottom: 10px;
}
.formNameChange input {
  background-color: cornflowerblue;
  color: white;
}
.title {
  font-size: 18px;
  height: 40px;
  width: 94%;
  border: none;
  margin: 0 5px;
}
.addTodo {
  height: 50px;
  width: 99%;
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
