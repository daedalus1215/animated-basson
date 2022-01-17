import Vuex from 'vuex';
import categoriesModule from './categories/categoriesStore'
import Vue from 'vue'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: { categories: categoriesModule },
});

export { Vuex };