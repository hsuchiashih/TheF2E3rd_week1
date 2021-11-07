<template>
  <div id="app">
    <div class="row nav_bg">
      <Nav/>
    </div>
    <SearchBar @getBaseDataFromSearchBar='appGetBaseData'/>
    <div class="container">
      <PopularCities class="mt-5"/>
      <PopularActivities :itemData='baseData[0]'/>
      <PopularFoods :itemData='baseData[1]'/>
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
  },
  data () {
    return {
      baseData: []
    }
  },
  methods: {
    appGetBaseData(val) {
      this.baseData = val
      console.log('appGetTestData',val)
    }
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
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
  /* margin-top: 60px; */
}
</style>
