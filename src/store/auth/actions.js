export default {
    addToListOfCategories(context, category) {
        context.commit('addItem', category);
    }
}