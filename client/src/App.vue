<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <footer>
      <em>2021 - Ivanov</em>
    </footer>
  </div>
</template>

<script>
import Header from '@/components/layout/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background: beige;
    font-family: -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: center;
    margin: auto;
    background: rgb(240, 240, 210);
  }
  #app > * {
    width: 100%;
  }
  @media screen and (min-width: 600px) {
    #app {
      width: 80%;
    }
  }
  @media screen and (min-width: 800px) {
    #app {
      width: 50%;
    }
  }
  footer {
    padding: 5px 0 0 0;
    text-align: center;
  }
</style>
