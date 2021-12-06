import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const baseUrl = 'http://localhost:5000/todos'

const store = new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    all: state => state.todos,
    completed: state => state.todos.filter(todo => todo.completed),
    pending: state => state.todos.filter(todo => !todo.completed)
  },
  mutations: {
    GET_ALL_TODO: (state, todos) => {
      state.todos = todos
    },
    ADD_TODO: (state, todo) => {
      state.todos.push(todo)
    },
    UPDATE_TODO: (state, id) => {
      state.todos.map((t) => {
        const todo = t
        if (todo._id === id) {
          todo.completed = !todo.completed
        }
      })
    },
    FILTER_TODO: (state, id) => {
      state.todos = state.todos.filter(todo => todo._id !== id)
    }
  },
  actions: {
    getTodo: (context) => {
      axios
        .get(`${baseUrl}/getTodos`)
        .then(res => {
          context.commit('GET_ALL_TODO', res.data)
        })
        .catch(error => console.log(error))
    },
    addTodo: (context, todo) => {
      axios
        .post(`${baseUrl}/addTodo`, {'todo': todo})
        .then(res => {
          context.commit('ADD_TODO', res.data)
        })
        .catch(error => console.log(error))
    },
    toggleCompleted: ({ commit }, id) => {
      axios
        .put(`${baseUrl}/updateTodo/${id}`)
        .then(res => {
          commit('UPDATE_TODO', id)
        }).catch(error => console.log(error))
    },
    deleteTodo: ({ commit }, id) => {
      commit('FILTER_TODO', id)
      axios.delete(`${baseUrl}/deleteTodo/${id}`).then((response) => {
        console.log('DELETE request returned OK', response)
      }).catch(error => console.log(error))
    }
  }
})

export default store
