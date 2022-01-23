export const STORAGE_LIST_OF_CATEGORIES = 'animated_basson';

export const getCategories = () => JSON.parse(localStorage.getItem(STORAGE_LIST_OF_CATEGORIES) || '[]');
