export default {
    addToListOfCategories(context, category) {
        context.commit('addToListOfCategories', category);
    },
    addTodoToCategory(context, todo) {
        context.commit('addTodoToCategory', todo);
    },
    deleteTodoInCategory(context, todoIdWithCategoryId) {
        context.commit('deleteTodoInCategory', todoIdWithCategoryId);
    },
    updateTodoCheckboxStatus(context, todoIdWithCategoryidAndStatus) {
        context.commit('updateTodoCheckboxStatus', todoIdWithCategoryidAndStatus)
    },
    deleteCategory(context, categoryId){
        context.commit('deleteCategory', categoryId);
    },
    updateCategoryName(context, category){
        context.commit('updateCategoryName', category);
    }
}