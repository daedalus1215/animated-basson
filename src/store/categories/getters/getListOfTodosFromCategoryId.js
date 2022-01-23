import { STORAGE_LIST_OF_CATEGORIES } from "../../constants";

const getListOfTodosFromCategoryId = () => (categoryId) => {
    return JSON.parse(localStorage.getItem(STORAGE_LIST_OF_CATEGORIES))
        .find(cat => cat.id === categoryId)
}

export default getListOfTodosFromCategoryId;