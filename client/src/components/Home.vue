<template>
  <div class="home">
    <AddTodo/>
    <TodoList
      v-bind:todos="all"
    />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import AddTodo from '@/components/AddTodo'
import TodoList from '@/components/TodoList'
import '@/styles/bootstrap.min.css'

export default {
  name: 'Home',
  components: {
    AddTodo,
    TodoList
  },
  computed: {
    ...mapGetters([
      'all'
    ])
  },
  mounted () {
    this.getTodo()
  },
  methods: {
    ...mapActions([
      'getTodo'
    ])
    // addTodo (todoTitle) {
    //   // const todo = {
    //   //   title: todoTitle,
    //   //   completed: false
    //   // }
    //   // axios.post(`${baseUrl}/addTodo`, { todo }).then((res) => {
    //   //   const todo = res.data
    //   //   console.log(todo)
    //   //   this.todos = [...this.todos, todo]
    //   // }).catch(error => console(error))
    // },
    // deleteTodo (id) {
    //   // this.todos = this.todos.filter(todo => todo._id !== id)
    //   // console.log(`Trying DELETE request on: ${baseUrl}/deleteTodo/${id}`)
    //   // axios.delete(`${baseUrl}/deleteTodo/${id}`).then((response) => {
    //   //   console.log('DELETE request returned OK', response)
    //   // }).catch(error => console.log(error))
    // },
    // toggleCompleted (id) {
    //   // this.todos = this.todos.map((t) => {
    //   //   const todo = t
    //   //   if (todo._id === id) {
    //   //     todo.completed = !todo.completed
    //   //   }
    //   //   return todo
    //   // })
    //   // console.log(`Trying PUT request on: ${baseUrl}/${id}`)
    //   // axios.put(`${baseUrl}/updateTodo/${id}`, { todo: this.todos.find(t => t.id === id) })
    //   //   .then((response) => {
    //   //     console.log('PUT request returned OK', response)
    //   //   }).catch(error => console.log(error))
    // }
  }
}
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
