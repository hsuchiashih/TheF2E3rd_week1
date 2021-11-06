<template>
  <div>
    <div class="row align-items-center">
      <div class="title_icon_size mb-2 mr-2">
      <img src="@/assets/image/popularCities_img/triangle.png" alt="" class="title_icon">
      </div>
      <p class="second_title">熱門活動</p>
    </div>
    <div class="active_grid">
      <div v-for='index in 4' :key='index'>
        <div class="activities_card row align-items-center">
          <div class="activities_img_size col-5">
            <img src="@/assets/image/searchBar_img/BG_IMG.png" alt="" class="activities_img">
          </div>
          <div class="col-7">
            <div>
              <p>合歡山國際暗空公園-星空清境跨年活動</p>
              <p>南投縣與各單位多年於合歡山舉辦清境高山跨年晚會活動，今年將活動主軸由傳統跨年晚會轉化成為台灣高山星空遊程之體驗活動，以剛通過美國IDA認證的華語區第一座國際暗空公園作為宣傳主題，在擁有東南的的...</p>
            </div>
            <div class="row justify-content-around align-items-center">
              <div class="d-flex col-6">
                <div class="map_img_size">
                  <img src="@/assets/image/icon/map.png" alt="" class="map_img">
                </div>
                <p class="m-0">南投縣仁愛鄉</p>
              </div>
              <div class="col-5">
                <button type="button" class="btn btn-outline-primary">活動詳情</button>
              </div>
            </div>
          </div>
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'PopularActivities',
  data () {
    return {
    
    }
  }
}
</script>

<style lang="scss">

</style>