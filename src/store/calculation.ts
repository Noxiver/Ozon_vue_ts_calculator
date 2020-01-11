import {Module} from 'vuex'
import {Mutation, State} from 'vuex-simple';
import {Sign} from '@/types/sign'
import {Num} from '@/types/num'


interface ICalculationState {
    result: number
    line: string
}

const LINE = 'LINE'
const RESULT = 'RESULT'


const calculation: Module<ICalculationState, {}> = {
    namespaced: true,

    state: {
        result: 0,
        line: ''
    },

    getters: {
        LINE: state => {
            return state.line;
        },
        RESULT: state => {
            return state.result;
        },
    },


    mutations: {
        ADD_LINE: state => {
            state.line += LINE
        },
        ADD_RESULT: state => {
            state.result += parseInt(RESULT)
        },
    }
}

export {
    calculation,
    ICalculationState
}
