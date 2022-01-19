import { STORAGE_LIST_OF_CATEGORIES } from "../constants";

export default {
    getListOfCategories(state) {
        state.listOfCategories = JSON.parse(localStorage.getItem(STORAGE_LIST_OF_CATEGORIES));
        return state;
    },
}