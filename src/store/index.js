import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dialog: {
            data: [],
            pristine: true
        },
        characters: {
            data: [],
            pristine: true
        }
    },
    getters: {
        dialog: state => {
            return state.dialog.data;
        },
        characters: state => {
            return state.characters.data;
        }
    },
    mutations: {
        setDialog: (state, payload) => {
            state.dialog.pristine = false
            state.dialog.data = payload
        },
        setCharacters: (state, payload) => {
            state.characters.pristine = false
            state.characters.data = payload
        },
    },
    actions: {
        loadDialog: async (context, payload) => {
            if(context.state.dialog.pristine){
            let data = await import(/* webpackChunkName: "storyboard-dialog" */ "@/dialog")
            context.commit('setDialog', data.default)
            }
        },
        loadCharacters: async (context, payload) => {
            if(context.state.characters.pristine) {
                let data = await import(/* webpackChunkName: "storyboard-characters" */ "@/characters")
                context.commit('setCharacters', data.default)
            }
        },
    },
    modules: {}
})
