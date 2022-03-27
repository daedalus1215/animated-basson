import mutations from './mutations';
import actions from './actions';
import categoryGetters from './categoryGetters';

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
    getters:categoryGetters
}


export default store;