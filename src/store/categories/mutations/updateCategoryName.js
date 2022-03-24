import { getCategories, STORAGE_LIST_OF_CATEGORIES } from "../../constants";

const updateCategoryName = (state, category) => {
    const allCategories = getCategories();
    const currentCategory = allCategories.find(item => item.id === category.id);
    const otherCategories = allCategories.filter(item => item.id !== category.id);

    currentCategory.name = category.name;
    otherCategories.push(currentCategory);

    localStorage.setItem(STORAGE_LIST_OF_CATEGORIES, JSON.stringify(otherCategories));
    state.listOfCategories = otherCategories;
}


export default updateCategoryName;