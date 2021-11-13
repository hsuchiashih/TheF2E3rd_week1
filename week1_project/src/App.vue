<template>
  <div id="app">
    <div class="row justify-content-center align-items-center">
      <div class="col-12">
        <div class="nav_bg">
          <Nav/>
        </div>
      </div>
      <div class="col-12">
        <SearchBar @getBaseDataFromSearchBar='appGetBaseData' @getSearchDataFromSearchBar='appGetSearchData'/>
      </div>
      <div class="col-12 mt-5 mb-5" v-if="!fristIn">
        <div class="bg">
          <Populars :itemTitle="popularTitle" :itemData='searchedData'/>
        </div>
      </div>
      <div class="col-12 mt-5 mb-5" v-if="fristIn"> 
        <div class="bg">
          <PopularCities @getBaseDataFromSearchBar='appGetBaseData'/>    
        </div>
      </div>
      <div class="col-12 mt-5 mb-5" v-if="fristIn">
        <div class="bg">
          <PopularActivities :itemData='baseData[0]'/>
        </div>
      </div>
      <div class="col-12 mt-5 mb-5" v-if="fristIn">
        <div class="bg">
          <PopularFoods :itemData='baseData[1]'/>
        </div>
      </div>
      
    </div>
    <button type="button" class="btn_custom btn btn-outline-primary" data-toggle="modal" data-target="#exampleModal">活動詳情</button>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
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
import Populars from './components/Populars'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Nav,
    SearchBar,
    PopularCities,
    PopularActivities,
    PopularFoods,
    Populars
  },
  data () {
    return {
      baseData: [],
      searchedData: [],
      type: '',
      city: '',
      popularTitle: '',
      fristIn: false
    }
  },
  methods: {
    appGetBaseData(val) {
      this.fristIn = val[2]
      this.baseData = val
    },
    appGetSearchData(val) {
      console.log('appGetSearchData',val)
      this.searchedData = val[0]
      this.type = val[1]
      this.city = val[2]
      this.fristIn = val[3]
      if (this.type === 'actives') {
        if (this.city !== null && this.city !== undefined) {
          this.popularTitle = `在【${this.city}】的熱門活動`
        } else {
          this.popularTitle = '熱門活動'
        }
      } else {
        if (this.city !== null && this.city !== undefined) {
          this.popularTitle = `在【${this.city}】的熱門景點`
        } else {
          this.popularTitle = '熱門景點'
        }
      }
    }
  }
}
</script>

<style>
#app {
  z-index: 1;
  position: relative;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; */
  background-color: #F6F7FB;
  /* position: absolute; */
  /* left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1; */
  /* margin-top: 60px; */
}
</style>
