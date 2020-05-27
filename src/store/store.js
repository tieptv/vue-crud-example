import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
 state: {
   tutorials:[],
   tutorial:{}
 },
 getters: {
  tutorials: state => {
    return state.tutorials
  },
  tutorial:state=>{
    return state.tutorial
  }
},
 mutations: {
      GET_TUTORIALS(state, tutorials){
        state.tutorials = tutorials;
      },
      ADD_TUTORIAL(state,tutorial){
        state.tutorials.push(tutorial);
      },
      EDIT_TUTORIAL(state, tutorial){
         state.tutorials=state.tutorials.map(ele=>{
             if(ele.id===tutorial.id){
               return tutorial;
             }
             else return ele;
         })
      },
      REMOVE_TUTORIAL(state, id){
        state.tutorials=state.tutorials.filter(ele=>ele.id!==id);
      },
 },
 actions: {
      GET_TUTORIALS({commit}, tutorials){
        commit('GET_TUTORIALS', tutorials)
      },
      ADD_TUTORIAL({commit},tutorial){
        commit('ADD_TUTORIAL',tutorial)
      },
      EDIT_TUTORIAL({commit}, tutorial){
        commit('EDIT_TUTORIAL', tutorial)
      },
      REMOVE_TUTORIAL({commit}, id){
        commit('REMOVE_TUTORIAL', id)
      },
 }
})