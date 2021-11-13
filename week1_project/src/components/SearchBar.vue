<template> 
  <div class="row justify-content-center align-items-center pr-5 pl-5">
    <div class="col-12">
      <div class="searchbar_bg">
        <img src="@/assets/image/searchBar_img/BG_IMG.png" alt="" class="search_img">
        <div class="welcome_icon_size">
          <div>
            <img src="@/assets/image/searchBar_img/welcome.png" alt="" class="welcome_icon">
            <p class="welcome_p">台北、台中、台南、屏東、宜蘭……遊遍台灣</p>  
          </div>
          <div class="d-flex align-items-center justify-content-between input_width mb-2">
            <input type="text" class="form-control" placeholder="" v-model="keyWord">
            <button class="place_button" type='submit'>
              <img src="@/assets/image/searchBar_img/place_icon.png" alt="" class="place_icon">
            </button>
          </div>
          <div class="row m-0 align-items-center justify-content-between">
            <treeselect class="col-5 m-0 p-0" v-model="typeSelect" :multiple="false" :options="typeOptions" placeholder="類別"/>
            <treeselect class="col-5 ml-4 p-0" v-model="citySelect" :multiple="false" :options="cityOptions" placeholder="不分縣市"/>
            <button class="search_button" type='submit' @click='search'>
              <img src="@/assets/image/searchBar_img/search_icon.png" alt="" class="search_icon">
            </button>
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect'
import { apiBaseActivity, apiBaseFoods, apiSearchActivity, apiSearchScenicSpot } from "../assets/js/utils/api"; 
export default {
  components: { Treeselect },

  name: 'SearchBar',
  data () {
    return {
      citys: {
        Keelung: "基隆市",
        Taipei: "臺北市",
        NewTaipei: "新北市",
        Taoyuan: "桃園市",
        Hsinchu: "新竹市",
        HsinchuCounty: "新竹縣",
        MiaoliCounty: "苗栗縣",
        Taichung: "臺中市",
        ChanghuaCounty: "彰化縣",
        NantouCounty: "南投縣",
        YunlinCounty: "雲林縣",
        Chiayi: "嘉義市",
        ChiayiCounty: "嘉義縣",
        Tainan: "臺南市",
        Kaohsiung: "高雄市",
        PingtungCounty: "屏東縣",
        TaitungCounty: "臺東縣",
        HualienCounty: "花蓮縣",
        YilanCounty: "宜蘭縣",
        PenghuCounty: "澎湖縣",
        KinmenCounty: "金門縣",
        LienchiangCounty: "連江縣",  
      },
      cityOptions: [],
      citySelect: null,
      typeOptions: [
        {
          id:'scenicSpot',
          label:'景點'
        },
        {
          id:'actives',
          label:'活動'
        }
      ],
      typeSelect: null,
      keyWord: '',
      activityData: [],
      foodsData: [],
      filterData: [],
      isBase: false
    }
  },
  mounted() {
    for(let key in this.citys) {
      this.cityOptions.push({
        id: `${key}`,
        label: `${this.citys[key]}`
      })
    }
    this.getBaseData()
  },
  methods: {
    async getBaseData() {
      this.isBase = true
      try {
        this.activityData = await apiBaseActivity().then(res => {
          return res.data
        });
        this.foodsData = await apiBaseFoods().then(res => {
          return res.data
        });
      } catch (err) {
        console.error(err);
      }
      this.$emit('getBaseDataFromSearchBar', [this.activityData, this.foodsData, this.isBase])
    },
    activityAPI() {
      apiBaseActivity().then(res => {
        this.$emit('getTestData', res.data)
      })
      .catch(err=> {
          console.log(err);
      })
    },
    async search() {
      const citySelect = this.citySelect
      const typeSelect = this.typeSelect
      const keyWord = this.keyWord
      if ((typeSelect === null || typeSelect === undefined)
        && (citySelect === null || citySelect === undefined)) {
        this.getBaseData()
      } else {
        this.isBase = false
        if (typeSelect === 'actives' 
        && (citySelect === null || citySelect === undefined)) {
          this.filterData = await apiSearchActivity().then(res => {
              return res.data
          });
        } else if (typeSelect === 'actives'
        && (citySelect !== null && citySelect !== undefined)) {
          this.filterData = await apiSearchActivity(
          `${citySelect}?$filter=contains(Name, '${keyWord}')&$format=JSON`
          ).then(res => {
              return res.data
          })
        } else if (typeSelect === 'scenicSpot' 
        && (citySelect === null || citySelect === undefined)) {
          this.filterData = await apiSearchScenicSpot().then(res => {
            return res.data
          });
        } else if (typeSelect === 'scenicSpot' 
        && (citySelect !== null && citySelect !== undefined)) {
          this.filterData = await apiSearchScenicSpot(
          `${citySelect}?$filter=contains(Name, '${keyWord}')&$format=JSON`
          ).then(res => {
              return res.data
          });
        } else if ((typeSelect === null || typeSelect === undefined) 
        && (citySelect !== null || citySelect !== undefined)) {
          this.filterData = await apiSearchScenicSpot(
          `${citySelect}?$filter=contains(Name, '${keyWord}')&$format=JSON`
          ).then(res => {
              return res.data
          });
        } else {
          console.log('查詢錯誤')
          return;
        }
        this.$emit('getSearchDataFromSearchBar', [this.filterData, this.typeSelect, this.citys[this.citySelect], this.isBase])
        }
      }
      // console.log(this.filterActivityData, this.filterScenicSpotData)
    }
  }
</script>

<style lang="scss">

</style>