import { getCategories, STORAGE_LIST_OF_CATEGORIES } from "../constants";
// import addTodoToCategory from "./mutations/addTodoToCategory";
// import addToListOfCategories from "./mutations/addToListOfCategories";


export default {
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
    }
}