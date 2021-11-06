<template>
  <div id="app">
    <div class="container">
      <Nav/>
      <SearchBar/>
      <PopularCities/>
      <PopularActivities/>
      <PopularFoods/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Nav from './components/Nav'
import SearchBar from './components/SearchBar'
import PopularCities from './components/PopularCities'
import PopularActivities from './components/PopularActivities'
import PopularFoods from './components/PopularFoods'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Nav,
    SearchBar,
    PopularCities,
    PopularActivities,
    PopularFoods
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; */
  background-color: #F6F7FB;
  /* margin-top: 60px; */
}
</style>
