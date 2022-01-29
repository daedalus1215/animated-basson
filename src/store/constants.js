export const STORAGE_LIST_OF_CATEGORIES = 'animated_basson';

export const getCategories = () => JSON.parse(localStorage.getItem(STORAGE_LIST_OF_CATEGORIES) || '[]');

export const getCurrentCategory = categoryId => getCategories().find(item => item.id === categoryId) || {};

export const setCategories = (categories) => localStorage.setItem(STORAGE_LIST_OF_CATEGORIES, JSON.stringify(categories));
