import { v4 as uuid } from "uuid";

export default {
    getListOfCategories(state) {
        state.listOfCategories = LocalStorage.get('animated_basson');
    },
    addToListOfCategories(state, category) {
        const newItem = { id: uuid(), name: category };
        const existing = JSON.parse(localStorage.getItem("animated_basson") || '[]');
        console.log('before', existing)

        existing.push(newItem);
        localStorage.setItem(`animated_basson`, JSON.stringify(existing));

        console.log('after', localStorage.getItem("animated_basson"));
        state.listOfCategories = existing
    }
}