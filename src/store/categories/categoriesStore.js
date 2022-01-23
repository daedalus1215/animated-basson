import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const store = {
    // namespaced: true,
    state() {
        return {
            listOfCategories: [],
            currentCategory: null
        }
    },
    mutations,
    actions,
    getters
}


export default store;