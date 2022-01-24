import { STORAGE_LIST_OF_CATEGORIES } from "../../constants";

const getListOfCategories = (state) => {
    state.listOfCategories = JSON.parse(localStorage.getItem(STORAGE_LIST_OF_CATEGORIES))
    return state.listOfCategories;
}
export default getListOfCategories;