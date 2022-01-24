import { setCategories, STORAGE_LIST_OF_CATEGORIES } from "../../constants";
// import getListOfCategories from "../getters/getListOfCategories";
import getListOfTodosFromCategoryId from "../getters/getListOfTodosFromCategoryId";

const deleteTodoFromCategories = async (todoId, categoryId) => {
    const editCategory = await getListOfTodosFromCategoryId()(categoryId);
    console.log('deleteTodoFromCategories - category', editCategory)

    const todos = editCategory?.todos?.filter(todo => todo.id != todoId) || [];
    console.log('deleteTodoFromCategories - other todos', todos)
    editCategory.todos = todos;
    console.log('deleteTodoFromCategories - editCategory.todos', todos)

    const categories = await JSON.parse(localStorage.getItem(STORAGE_LIST_OF_CATEGORIES));
    const allCategories = categories.filter(category => category.id !== categoryId);
    allCategories.push(editCategory);
    console.log('deleteTodoFromCategories - allCategories', ...allCategories)
    setCategories(allCategories);
}
export default deleteTodoFromCategories;