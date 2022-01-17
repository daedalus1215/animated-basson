export default {
    getListOfCategories(state) {
        state.listOfCategories = JSON.parse(localStorage.getItem('animated_basson'));
        return state;
    },
}