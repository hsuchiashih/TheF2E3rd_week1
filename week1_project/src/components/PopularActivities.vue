<template>
  <div>
    <div class="row align-items-center">
      <div class="title_icon_size mb-2 mr-2">
      <img src="@/assets/image/popularCities_img/triangle.png" alt="" class="title_icon">
      </div>
      <p class="second_title">熱門活動</p>
    </div>
    <div class="active_grid">
      <div v-for='(item,index) in activitiesData' :key='index'>
        <div class="activities_card row align-items-center">
          <div class="activities_img_size col-5">
            <img v-if="item.Picture.PictureUrl1 !== undefined" :src="`${item.Picture.PictureUrl1}`" alt="" class="activities_img">
            <img v-else src="@/assets/image/no_img/no_img_187X196.png" alt="" class="activities_img">
          </div>
          <div class="col-7">
            <div>
              <p>{{item.Name}}</p>
              <p class="text_overflow_ellipsis">{{item.Description}}</p>
            </div>
            <div class="row justify-content-around align-items-center">
              <div class="d-flex col-6">
                <div class="map_img_size">
                  <img src="@/assets/image/icon/map.png" alt="" class="map_img">
                </div>
                <p class="m-0 text_overflow_ellipsis_location">{{item.Location}}</p>
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
    activitiesData() {
      return this.itemData
    }
  },
}
</script>

<style lang="scss">

</style>