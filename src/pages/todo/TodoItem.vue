<template>
  <div>
    <button class="todoDeleteButton" @click="deleteItem">X</button>
    <input
      type="checkbox"
      class="todoCheckboxToggle"
      v-bind:checked="isChecked"
      @click="todoCheckboxToggle"
    />
    <span class="todoDescription">{{ description }}</span>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    description: String,
    todoId: String,
    isChecked: Boolean,
    categoryId: String,
    todos: Array,
    deleteTodo: Function,
  },
  data() {
    return {};
  },
  methods: {
    async todoCheckboxToggle(e) {
      await this.$store.dispatch("updateTodoCheckboxStatus", {
        todoId: this.todoId,
        isChecked: e.target.checked,
        categoryId: this.categoryId,
      });
    },
    deleteItem() {
      if (confirm(`Do you really want to delete '${this.description}'`)) {
        this.deleteTodo(this.todoId);
      }
    },
  },
};
</script>