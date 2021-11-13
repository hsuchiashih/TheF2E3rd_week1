<template>
  <div class="container">
    <div class="row align-items-center mb-3">
      <div class="title_square_icon_size mr-2">
        <img src="@/assets/image/popularCities_img/square.png" alt="" class="title_icon">
      </div>
      <p class="second_title">{{itemTitle}}</p>
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
    <div class="row mt-5">
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center" id="pagination" @click="pageClickEvent">
          <li class="page-item">
            <a class="page-link" href="#">1</a>
          </li>
        </ul>
      </nav> 
    </div> 
  </div>
</template>

<script>
export default {
  name: 'Populars',
  props: {
    itemIcon: {
      type: String,
      default: ''
    },
    itemData: {
      type: Array,
      default: () => []
    },
    itemTitle: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      itemDataInChild: [],
      dataForSlice: []
    }
  },
  mounted() {
    this.dataForSlice = JSON.parse(JSON.stringify(this.itemData))
    this.itemDataInChild = JSON.parse(JSON.stringify(this.itemData)).slice(0, 15)
    this.getTotalPages(this.itemData)
  },
  updated() {
  },
  watch: {
    itemData(val) {
      this.$nextTick(() => {
        this.itemDataInChild = val
        this.getTotalPages(val)
        this.getPageData(1, val)  
      })
    },
  },
  computed: {
    foodsData: {
      get () {
        return this.itemDataInChild
      },
      set (val) {
        this.itemDataInChild = val
      }
    }
  },
  methods: {
    getTotalPages(data){
      const ITEM_PER_PAGE = 15
      const pagination = document.getElementById('pagination')
      let totalPages = Math.ceil(data.length/ITEM_PER_PAGE ) || 1
      let pageItemContent = ''
      for (let i = 0; i< totalPages ;i++) {
        pageItemContent +=`
          <li class="page-item">
            <a class="page-link" href="javascript:;" data-page="${i + 1}">${i + 1}</a>
          </li>
        ` 
      }
      pagination.innerHTML = pageItemContent
    },
    getPageData (pageNum, data) {
      const ITEM_PER_PAGE = 15
      // paginationData = data || paginationData
      let offset = (pageNum - 1) * ITEM_PER_PAGE
      const sliceData  = JSON.parse(JSON.stringify(data)).slice(offset, offset + ITEM_PER_PAGE)
      this.foodsData = sliceData
    },
    pageClickEvent(e) {
      if (e.target.tagName === 'A') {
        let page = e.target.dataset.page
        this.getPageData(page, this.itemData)
      }
      // console.log('page', this.dataForSlice)
    }
  }
}
</script>

<style lang="scss">

</style>