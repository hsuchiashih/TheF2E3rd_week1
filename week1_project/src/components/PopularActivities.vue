<template>
  <div class="container">
    <div class="row align-items-center mb-3">
      <div class="title_icon_size mb-2 mr-2">
      <img src="@/assets/image/popularCities_img/triangle.png" alt="" class="title_icon">
      </div>
      <p class="second_title">熱門活動</p>
    </div>
    <div class="row">
      <div class="col-12 p-0">
        <div class="active_grid">
          <div class="activities_card" v-for='(item,index) in activitiesData' :key='index'>
            <div class="row p-3">
              <div class="col-5">
                <div class="activities_img_size">
                  <img v-if="item.Picture.PictureUrl1 !== undefined" :src="`${item.Picture.PictureUrl1}`" alt="" class="activities_img">
                  <img v-else src="@/assets/image/no_img/no_img_187X196.png" alt="" class="activities_img">
                </div>
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
                  <div class="col-6">
                    <button type="button" class="btn_custom btn btn-outline-primary" data-toggle="modal" data-target="#exampleModal">活動詳情</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
<vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content">
      <button class="modal__close" @click="showModal = false">
        <mdi-close></mdi-close>
      </button>
      <span class="modal__title">Hello, vue-final-modal</span>
      <div class="modal__content">
        <p v-for="i in 100" :key="i">
          Vue Final Modal is a renderless, stackable, detachable and lightweight modal component.
        </p>
      </div>
    </vue-final-modal>
    <v-button @click="showModal = true">Open modal</v-button>
  </div>
</template>

<script>
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal';
export default {
  name: 'PopularActivities',
    components: {
    VueFinalModal,
    ModalsContainer
  },
  props: {
    itemData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      showModal:false
    }
  },
  computed: {
    activitiesData() {
      return this.itemData
    }
  },
}
</script>

<style lang="scss" scoped>

</style>