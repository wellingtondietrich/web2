import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './modules/user'

import userService from "../../api/user"

const state = {
    financialRelease:[],
    currentBalance:0.0,

};

const actions = {
    addCredit({ commit }, credit){        
        commit('addInFinancialRelease',credit)
    },

    addDebit(debit){
        commit('addInFinancialRelease', debit)
    }
};

const mutations = {
    addInFinancialRelease(state, payload){
        state.financialRelease.push(payload)
        state.currentBalance = state.financialRelease.map(financial => financial.value).reduce((acc, valorAtual) => acc + valorAtual)      
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions
})