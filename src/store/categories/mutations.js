export default {
    addToListOfCategories(state, category) {
        const existing = JSON.parse(localStorage.getItem("animated_basson") || '[]');
        console.log('before', existing)

        existing.push(category);
        localStorage.setItem(`animated_basson`, JSON.stringify(existing));

        console.log('after', localStorage.getItem("animated_basson"));
        state.listOfCategories = existing
    }
}