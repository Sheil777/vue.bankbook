import axios from 'axios'
import {error} from '../../utils/error'

export default {
    namespaced: true,

    state() {
        return {
            token: localStorage.getItem('jwt-token')
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem('jwt-token', token)
        },
        logout(state) {
            state.token = null
            localStorage.removeItem('jwt-token')
        }
    },
    actions: {
        // async login({ commit }, payload) {
        login({ commit }, payload) {
            return new Promise((resolve, reject) => {
                const url = `${process.env.VUE_APP_API_URL}/api/v1/login`
                const body = {email: payload.login, password: payload.password}
                
                axios.post(url, body).then(response => {
                    // запрос выполнен успешно
                    commit('setToken', response.data.token)
                    resolve()
                }).catch(e => {
                    // запрос не выполнен
                    if(Object.hasOwn(e, 'response')) {
                        // console.log(e.response.data.message)
                        reject(error(e.response.data.message)) // вернуть сообщение об ошибке вызывающей функции

                    }else{
                        // console.log(e.code)
                        reject(error(e.code))          
                    }
                })
            })


            // try {
            //     const url = `${process.env.VUE_APP_API_URL}/api/v1/login`
            //     const body = {email: payload.login, password: payload.password}
            //     const {data} = await axios.post(url, body)

            //     commit('setToken', data.token)
            // } catch (e) {
            //     console.log(error(e.response.data.message))
            //     // throw new Error(e.response.data.message)
            // }
        }
    },
    getters: {
        token(state) {
            return state.token
        },
        // isAuthenticated(state) {
        //     return !!state.token
        // },
        isAuthenticated(_, getters) {
            return !!getters.token
        }
    }
}