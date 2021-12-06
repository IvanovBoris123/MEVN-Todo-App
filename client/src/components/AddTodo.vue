<template>
  <form class="add-todo form-inline" v-on:submit="add">
    <input type="text" placeholder="Add Todo..." v-model="todoTitle" class="form-control">
    <button type="submit" class="ml-1 btn btn-primary">Submit</button>
  </form>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'AddTodo',
  data () {
    return {
      todoTitle: ''
    }
  },
  methods: {
    ...mapActions([
      'addTodo'
    ]),
    add (e) {
      e.preventDefault()
      this.addTodo({'title': this.todoTitle, 'completed': false})
      this.todoTitle = ''
    }
  }
}
</script>

<style scoped>
  .add-todo {
    display: flex;
    width: 95% !important;
  }
  .add-todo > input[type="text"] {
    flex-grow: 10;
  }
  .add-todo > button[type="submit"] {
    flex-grow: 1;
  }
</style>
