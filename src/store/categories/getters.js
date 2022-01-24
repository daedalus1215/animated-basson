import { STORAGE_LIST_OF_CATEGORIES } from "../constants";
// import getListOfCategories from "./getters/getListOfCategories";
import getListOfTodosFromCategoryId from "./getters/getListOfTodosFromCategoryId";

export default {
    getListOfCategories: (state) =>  state.listOfCategories = JSON.parse(localStorage.getItem(STORAGE_LIST_OF_CATEGORIES)),
    getListOfTodosFromCategoryId
}
