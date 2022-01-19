import { STORAGE_LIST_OF_CATEGORIES } from "../constants";

export default {
    getListOfCategories(state) {
        state.listOfCategories = JSON.parse(localStorage.getItem(STORAGE_LIST_OF_CATEGORIES));
        return state;
    },
    getListOfTodosFromCategoryId(state, getters) {
        return (categoryId) => {
            const newState = getters.getListOfCategories(state);
            
            const category = newState.listOfCategories
                .filter(category => category.id === categoryId);
            const newerState = {
                ...newState,
                categoryOfTodos: category
            }
            return newerState;
        }
    }
}