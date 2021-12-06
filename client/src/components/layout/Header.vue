<template>
  <header>
    <h1>Todo List</h1>
    <span>
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link>
    </span>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  header{
    display:flex;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    background: rgb(230, 230, 200);
    padding: 10px 0;
  }
</style>
