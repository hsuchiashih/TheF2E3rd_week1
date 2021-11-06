<template>
  <div>
    <div class="row align-items-center">
      <div class="title_square_icon_size mr-2">
        <img src="@/assets/image/popularCities_img/square.png" alt="" class="title_icon">
      </div>
      <p class="second_title">熱門美食</p>
    </div>
    <div class="foods_grid row">
      <div v-for='index in 10' :key='index'>
        <div class="foods_card p-3">
          <div class="food_img_size mr-2">
            <img src="@/assets/image/popularCities_img/square.png" alt="" class="food_img">
          </div>
          <p>正濱漁港懷舊碼頭</p>
          <div class="d-flex ">
            <div class="map_img_size">
              <img src="@/assets/image/icon/map.png" alt="" class="map_img">
            </div>
            <p class="m-0">南投縣仁愛鄉</p>
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopularFoods',
  data () {
    return {
    
    }
  }
}
</script>

<style lang="scss">

</style>