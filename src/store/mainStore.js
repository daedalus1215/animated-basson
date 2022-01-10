import Vuex from 'vuex';
import authModule from './auth/authStore'
import Vue from 'vue'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: { auth: authModule },
});

export { Vuex };