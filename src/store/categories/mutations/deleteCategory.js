import { getCategories, STORAGE_LIST_OF_CATEGORIES } from "../../constants";


const deleteCategory = async (state, categoryId) => {
    const remainingCategories = getCategories().filter(category => category.id !== categoryId) || [];
    localStorage.removeItem(STORAGE_LIST_OF_CATEGORIES);
    localStorage.setItem(STORAGE_LIST_OF_CATEGORIES, JSON.stringify(remainingCategories));
    state.listOfCategories = remainingCategories;
}
export default deleteCategory;