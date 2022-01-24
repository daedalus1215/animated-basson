export default {
    addToListOfCategories(context, category) {
        context.commit('addToListOfCategories', category);
    },
    addTodoToCategory(context, todo) {
        context.commit('addTodoToCategory', todo);
    },
    deleteTodoInCategory(context, todoIdWithCategoryId) {
        context.commit('deleteTodoInCategory', todoIdWithCategoryId);
    }
}