<template>
  <div class="container">
    <div class="row align-items-center mb-3">
      <div class="title_square_icon_size mr-2">
        <img src="@/assets/image/popularCities_img/square.png" alt="" class="title_icon">
      </div>
      <p class="second_title">熱門美食</p>
    </div>
    <div class="row">
      <div class="col-12 p-0">
        <div class="foods_grid">
          <div class="foods_card p-3" v-for='(item, index) in foodsData' :key='index'>
            <div class="food_img_size">
              <img v-if="item.Picture.PictureUrl1 !== undefined" :src="`${item.Picture.PictureUrl1}`" alt="" class="food_img">
              <img v-else src="@/assets/image/popularCities_img/square.png" alt="" class="food_img">
            </div>
            <p>{{item.Name}}</p>
            <div class="d-flex">
              <div class="map_img_size">
                <img src="@/assets/image/icon/map.png" alt="" class="map_img">
              </div>
              <p class="m-0">{{item.Address}}</p>
            </div>
            </div>  
          </div>
        </div>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'PopularFoods',
  props: {
    itemData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      
    }
  },
  computed: {
    foodsData() {
      return this.itemData
    }
  },
}
</script>

<style lang="scss">

</style>