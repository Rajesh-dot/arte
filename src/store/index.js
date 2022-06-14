import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import { auth } from '../firebase'
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    snackbar: false,
    text: "Hello",
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    },
    CLEAR_USER (state, user) {
      state.user = null
    },
    SET_MESSAGE (state, message) {
      state.snackbar = true
      state.text = message
    }
  },
  actions: {
    async login ({ commit }, details) {
      //
      const { email, password } = details

      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error) {
        switch(error.code) {
          case 'auth/invalid-email':
            commit('SET_MESSAGE', "Invalid email")
            break
          case 'auth/user-not-found':
            commit('SET_MESSAGE', "User not found")
            break
          case 'auth/wrong-password':
            commit('SET_MESSAGE', "Wrong password")
            break
          default:
            commit('SET_MESSAGE', "Something went wrong")
            break
        }

        return
      }

      commit('SET_MESSAGE', "Logged in successfully")
      commit('SET_USER', auth.currentUser)

      router.push('/')
    },

    async register ({ commit }, details) {
      //
      const { email, password } = details

      try {
        await createUserWithEmailAndPassword(auth, email, password)
      } catch (error) {
        switch(error.code) {
          case 'auth/email-already-in-use':
            commit('SET_MESSAGE', "Email already in use")
            break
          case 'auth/invalid-email':
            commit('SET_MESSAGE', "Invalid email")
            break
          case 'auth/operation-not-allowed':
            commit('SET_MESSAGE', "Operation not allowed")
            break
          case 'auth/weak-password':
            commit('SET_MESSAGE', "Weak password")
            break
          default:
            commit('SET_MESSAGE', "Something went wrong")
            break
        }

        return
      }

      commit('SET_MESSAGE', "User Registered successfully")
      commit('SET_USER', auth.currentUser)

      router.push('/');
    },

    async logout ({ commit }) {
      //
      await signOut(auth)

      commit('CLEAR_USER')

      router.push('/login')
    },

    fetchUser ({ commit }) {
      auth.onAuthStateChanged(async user => {
        if (user === null) {
          commit('CLEAR_USER')
        } else {
          commit('SET_USER', user)

          if (router.isReady() && router.currentRoute.value.path === '/login') {
            router.push('/')
          }
        }
      })
    }
  },
  modules: {
  }
})
