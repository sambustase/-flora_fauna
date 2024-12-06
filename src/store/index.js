import {createStore} from 'vuex';

const store = createStore({
    state: {
        floraFauna: {
            especies: [],
        },
    },
    mutations: {
        SET_FLORA_FAUNA(state, especies) {
        state.floraFauna.especies = especies;
        },
    },
    actions: {
        async fetchFloraFauna({commit}) {
            try{
                const response = await fetch('/db.json');
                const data = await response.json();
                commit('SET_FLORA_FAUNA', data.especies);
            }catch(error){
                console.log(error)
            }
        },
    },
    getters:{
        especies: (state) => state.floraFauna.especies
    }
});

export default store