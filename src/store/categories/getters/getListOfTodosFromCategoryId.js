import { STORAGE_LIST_OF_CATEGORIES } from "../../constants";

const getListOfTodosFromCategoryId = () => (categoryId) => {
    return JSON.parse(localStorage.getItem(STORAGE_LIST_OF_CATEGORIES))
        .find(category => {
            if (category.id === categoryId) {
                return category;
            }
        })
}
export default getListOfTodosFromCategoryId;