import deleteTodoFromCategories from "./mutations/deleteTodoFromCategories";
import deleteCategory from "./mutations/deleteCategory";
import addTodoToCategory from "./mutations/addTodoToCategory";
import addToListOfCategories from "./mutations/addToListOfCategories";

export default {
    deleteTodoInCategory: (state, todoIdWithCategoryId) => {
        deleteTodoFromCategories(todoIdWithCategoryId.todoId, todoIdWithCategoryId.categoryId)
    },
    addToListOfCategories: (state, category) => {
        addToListOfCategories(state, category);
    },
    addTodoToCategory(state, todoWithCategoryId) {
        addTodoToCategory(state, todoWithCategoryId);
    },
    deleteCategory(state, categoryId) {
        deleteCategory(state, categoryId);
    },
    updateCategoryName(state, category) {
        this.updateCategoryName(state, category);
    }
}