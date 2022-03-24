export const STORAGE_LIST_OF_CATEGORIES = 'animated_basson';

/**
 * 
 * @returns categories: [{id: string, name: string, todos: [{categoryId: string, description: string, id: string}, ...]}, ...]
 */
export const getCategories = () => JSON.parse(localStorage.getItem(STORAGE_LIST_OF_CATEGORIES) || '[]');

export const getCurrentCategory = categoryId => getCategories().find(item => item.id === categoryId) || {};

export const setCategories = (categories) => localStorage.setItem(STORAGE_LIST_OF_CATEGORIES, JSON.stringify(categories));
