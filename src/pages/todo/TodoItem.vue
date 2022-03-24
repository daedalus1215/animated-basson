<template>
  <div>
    <input
      type="checkbox"
      class="todoCheckboxToggle"
      v-bind:checked="isChecked"
      @click="todoCheckboxToggle(todoId)"
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
  },
  data() {
    return {
        isChecked: false,
    };
  },
  methods: {
    async todoCheckboxToggle(todoId) {
      await this.$store.dispatch("todoCheckboxToggle", {
        todoId,
        categoryId: this.id,
        isChecked: this.isChecked
      });
      this.todos =
        this.$store.getters.getListOfTodosFromCategoryId(this.id)?.todos || [];
    },
  },
};
</script>