import { STORAGE_LIST_OF_CATEGORIES } from "../../constants";

const getListOfCategories = () => JSON.parse(localStorage.getItem(STORAGE_LIST_OF_CATEGORIES));

export default getListOfCategories;