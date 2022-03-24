/**
 * Actions are essentially just registrations of mutations.
 * 
 * So it seems ok to have one registry file (actions) for this
 * particular domain (categories). Whereas, with mutations, we have individual 
 * mutation files because there is so much logic in each one of the mutations.
 * It seemed in the best interest of cognitive load to carve them out individually 
 * opposed to what we are doing with actions, which is one file (for domain). 
 */
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