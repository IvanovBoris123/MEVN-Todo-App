<template>
  <div class="todo-list">
    <TodoItem
      v-for="todo in todos"
      v-bind:key="todo._id"
      v-bind:todo="todo"
    />
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'

export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    TodoItem
  }
}
</script>

<style scoped>
  .todo-list {
    background: rgb(235, 235, 200);
    display: flex;
    flex-direction: column;
    border-radius: 10%;
    margin: 10px;
    overflow-y: auto;
    max-height: 60vh;
    width: 100%;
  }
</style>
