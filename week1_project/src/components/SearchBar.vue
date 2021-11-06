<template>
  <div class="row searchbar_bg searchbar_bg_shadow d-flex justify-content-center align-items-center pr-5 pl-5 ">
    <div class="searchbar_img_size">
      <img src="@/assets/image/searchBar_img/BG_IMG.png" alt="" class="logo_img">
      <div class="welcome_icon_size">
        <div>
          <img src="@/assets/image/searchBar_img/welcome.png" alt="" class="welcome_icon">
          <p class="welcome_p">台北、台中、台南、屏東、宜蘭……遊遍台灣</p>  
        </div>
        <div class="d-flex align-items-center justify-content-between input_width mb-2">
          <input type="text" class="form-control" placeholder="">
          <button class="search_button" type='submit'>
            <img src="@/assets/image/searchBar_img/search_icon.png" alt="" class="search_icon">
          </button>
        </div>
        <div class="row m-0 align-items-center justify-content-between">
          <treeselect class="col-5 m-0" v-model="citySelect" :multiple="false" :options="cityOptions"/>
          <treeselect class="col-5 m-0" v-model="areaSelect" :multiple="false" :options="areaOptions"/>
          <button class="place_button" type='submit'>
            <img src="@/assets/image/searchBar_img/place_icon.png" alt="" class="place_icon">
          </button>
        </div>
        
      </div>
    </div>
    <div role="tw-city-selector">123123</div>
  </div>
</template>

<script src="https://gist.github.com/vinta/079cb8d4da486f471365c31388ed1b85.js"></script>

<script>
import Treeselect from '@riophae/vue-treeselect'
import TwCitySelector from '../../node_modules/tw-city-selector/dist/tw-city-selector';
import { area_data } from '../assets/js/utils/taiwan_area';

export default {
  components: { Treeselect },

  name: 'SearchBar',
  mixins: [ area_data ],
  data () {
    return {
       // define the default value
        value: null,
        // define options
        options: [ {
          id: 'a',
          label: 'a',
          children: [ {
            id: 'aa',
            label: 'aa',
          }, {
            id: 'ab',
            label: 'ab',
          } ],
        }, {
          id: 'b',
          label: 'b',
        }, {
          id: 'c',
          label: 'c',
        } ],
      
      cityOptions: [],
      citySelect: null,
      areaOptions: [],
      areaSelect: null,
      reFormatAreaData: {}
    }
  },
  mounted() {
    for(let key in area_data) {
      this.cityOptions.push({
        id: `${key}`,
        label: `${key}`
      })
    }

    this.reFormatAreaData = Object.keys(area_data).reduce((pre, key) => {
        area_data[key] = area_data[key].map(item => {
          let Obj = {}
          Obj.id = item
          Obj.label = item
          return Obj
        })
        return area_data
    },{})
    console.log(this.reFormatAreaData)
    
    // console.log('123',Object.entries(area_data))
    // console.log(this.cityOptions)
  },
  watch:{
    citySelect(val) {
      if(val !== null) {
        this.areaOptions = this.reFormatAreaData[val]
        this.areaSelect = this.areaOptions[0]['id']
      }
      
    }
  }
}
</script>

<style lang="scss">

</style>