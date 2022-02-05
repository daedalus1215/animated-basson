import { getCategories, STORAGE_LIST_OF_CATEGORIES } from "../../constants";

const addToListOfCategories = (state, category) => {
    const existing = getCategories();
    existing.push(category);

    localStorage.setItem(STORAGE_LIST_OF_CATEGORIES, JSON.stringify(existing));
    state.listOfCategories = existing
    return state;
}

export default addToListOfCategories;