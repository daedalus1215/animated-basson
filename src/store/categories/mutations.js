import { getCategories, STORAGE_LIST_OF_CATEGORIES } from "../constants";
// import getListOfTodosFromCategoryId from "./getters/getListOfTodosFromCategoryId";
import deleteTodoFromCategories from "./mutations/deleteTodoFromCategories";
// import addTodoToCategory from "./mutations/addTodoToCategory";
// import addToListOfCategories from "./mutations/addToListOfCategories";


export default {
    deleteTodoInCategory: (state, todoIdWithCategoryId) => {
        // console.log('deleteTodoInCategory - todoIdWithCategoryId', todoIdWithCategoryId);
        // conso.log('deleteTodoInCategory - getCategories()', getCategories());
        // console.log('deleteTodoInCategory - getters - ', getListOfTodosFromCategoryId(state)(todoIdWithCategoryId.categoryId));
        deleteTodoFromCategories(todoIdWithCategoryId.todoId, todoIdWithCategoryId.categoryId)
    },
    addToListOfCategories: (state, category) => {
        const existing = getCategories();
        existing.push(category);
        console.log('existing', existing)

        localStorage.setItem(STORAGE_LIST_OF_CATEGORIES, JSON.stringify(existing));
        state.listOfCategories = existing;
    },
    addTodoToCategory(state, todoWithCategoryId) {
        const { categoryId } = todoWithCategoryId;

        const allCategories = getCategories();
        const currentCategory = allCategories.find(item => item.id === categoryId);

        const allOtherCategories = allCategories
            .filter(item => item.id !== categoryId);

        const allOtherTodos = currentCategory
            .todos
            ?.filter(todoItem => todoItem.id !== todoWithCategoryId.id) || [];

        allOtherTodos.push(todoWithCategoryId);
        currentCategory.todos = allOtherTodos;

        allOtherCategories.push(currentCategory);
        localStorage.removeItem(STORAGE_LIST_OF_CATEGORIES);
        localStorage.setItem(STORAGE_LIST_OF_CATEGORIES, JSON.stringify(allOtherCategories));
    },
    deleteCategory(state, categoryId) {
        const remainingCategories = getCategories().filter(category => category.id !== categoryId) || [];
        localStorage.removeItem(STORAGE_LIST_OF_CATEGORIES);
        localStorage.setItem(STORAGE_LIST_OF_CATEGORIES, JSON.stringify(remainingCategories));
        state.listOfCategories = remainingCategories;
    }
}