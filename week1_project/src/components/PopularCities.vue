<template>
  <div class="container arrow_father">
    <div class="row align-items-center mb-3">
      <div class="title_icon_size mb-2 mr-2">
        <img src="@/assets/image/popularCities_img/triangle.png" alt="" class="title_icon">
      </div>
      <p class="second_title">熱門城市</p>
    </div>
    <div class="photo_father">
      <div class="photo_container photo_child" v-show="isPage1">
        <div :class="city.class" v-for="(city, index) in citysPage1" :key="index" @click="chooseCity" :data-city="city.ref">
          <img :src="city.url" alt="" class="photo">
          <img src="@/assets/image/icon/map_M.png" alt="" class="map">
          <p>{{city.name}}</p>
        </div>
      </div>
      <div class="photo_container photo_child" v-show="isPage2" ref="page2">
        <div :class="city.class" v-for="(city, index) in citysPage2" :key="index" @click="chooseCity" :data-city="city.ref">
          <img :src="city.url" alt="" class="photo">
          <img src="@/assets/image/icon/map_M.png" alt="" class="map">
          <p>{{city.name}}</p>
        </div>
      </div>
    </div>
    <button class="arrow_img_size arrow_child1" @click="goToPage2" v-show="isPage1">
      <img src="@/assets/image/popularCities_img/arrow_black.png" alt="" class="title_icon">
    </button>
    <button class="arrow_img_size arrow_child2" @click="goToPage1" v-show="isPage2">
      <img src="@/assets/image/popularCities_img/arrow_white.png" alt="" class="title_icon">
    </button>
  </div>
</template>

<script>
import { apiSearchActivity, apiSearchFoods } from "../assets/js/utils/api"; 
export default {
  data() {
    return {
     citysPage1: [
       {
         name: '台北',
         url:'../../static/img_test/PopularCities_img/city_a1.png',
         class:'item item-1',
         ref: 'Taipei'
       },
       {
         name: '新北',
         url:'../../static/img_test/PopularCities_img/city_a2.png',
         class:'item item-2',
         ref: 'NewTaipei'
       },
       {
         name: '桃園',
         url:'../../static/img_test/PopularCities_img/city_a3.png',
         class:'item item-3',
         ref: 'Taoyuan'
       },
       {
         name: '新竹',
         url:'../../static/img_test/PopularCities_img/city_a4.png',
         class:'item item-4',
         ref: 'Hsinchu'
       },
       {
         name: '台中',
         url:'../../static/img_test/PopularCities_img/city_a5.png',
         class:'item item-5',
         ref: 'Taichung'
       },
       {
         name: '南投',
         url:'../../static/img_test/PopularCities_img/city_a6.png',
         class:'item item-6',
         ref: 'NantouCounty'
       },
       {
         name: '嘉義',
         url:'../../static/img_test/PopularCities_img/city_a7.png',
         class:'item item-7',
         ref: 'Chiayi'
       }
     ],
     citysPage2: [
       {
         name: '台南',
         url:'../../static/img_test/PopularCities_img/city_b1.png',
         class:'item item-1',
         ref: 'Tainan'
       },
       {
         name: '高雄',
         url:'../../static/img_test/PopularCities_img/city_b2.png',
         class:'item item-2',
         ref: 'Kaohsiung'
       },
       {
         name: '屏東',
         url:'../../static/img_test/PopularCities_img/city_b3.png',
         class:'item item-3',
         ref: 'PingtungCounty'
       },
       {
         name: '宜蘭',
         url:'../../static/img_test/PopularCities_img/city_b4.png',
         class:'item item-4',
         ref: 'YilanCounty'
       },
       {
         name: '花蓮',
         url:'../../static/img_test/PopularCities_img/city_b5.png',
         class:'item item-5',
         ref: 'HualienCounty'
       },
       {
         name: '台東',
         url:'../../static/img_test/PopularCities_img/city_b6.png',
         class:'item item-6',
         ref: 'TaitungCounty'
       },
       {
         name: '金門馬祖.澎湖',
         url:'../../static/img_test/PopularCities_img/city_b7.png',
         class:'item item-7',
         ref: 'KinmenCounty'
       }
     ],
     isPage1: true,
     isPage2: false,
     activityData : [],
     foodsData: [],
     isBase: false
    }
  },
  methods: {
    goToPage1() {
     this.isPage1 = true;
     this.isPage2 = false;
    },
    goToPage2() {
     this.isPage1 = false;
     this.isPage2 = true;
    },
    async chooseCity(e) {
      this.isBase = true
    const city = e.target.parentNode.dataset.city
    try {
        this.activityData = await apiSearchActivity(
          `${city}?$top=4&$format=JSON`
          ).then(res => {
              return res.data
        })
        this.foodsData = await apiSearchFoods(
          `${city}?$top=10&$format=JSON`
          ).then(res => {
              return res.data
        });
      } catch (err) {
        console.error(err);
      }
      this.$emit('getBaseDataFromSearchBar', [this.activityData, this.foodsData, this.isBase])
    }  
  }
}
</script>

<style lang="scss">

</style>