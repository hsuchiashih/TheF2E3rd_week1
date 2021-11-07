<template>
<div class="container">
  <div class="row justify-content-around align-items-end">
    <div class="col-6 nav_margin">
      <div class="logo_size">
        <img src="@/assets/image/Nav_img/logo.png" alt="" class="logo_img">  
      </div>
    </div>
    <div class="col-6 nav_margin">
      <ul class="nav justify-content-end">
        <li>
          <a class="d-flex align-items-end mr-2" href="#">
            <div class="link_icon_size mr-2">
              <img src="@/assets/image/Nav_img/Taiwan1.png" alt="" class="link_icon">
            </div>
            <div class="link_title_size">
              <p class="title pink">台灣景點</p>
            </div>
          </a>
        </li>
        <li>
          <a class="d-flex align-items-end mr-2" href="#">
            <div class="link_icon_size mr-2">
              <img src="@/assets/image/Nav_img/Taiwan2.png" alt="" class="link_icon">
            </div>
            <div class="link_title_size">
              <p class="title yellow">美食住宿</p>
            </div>
          </a>
        </li>
        <li>
          <a class="d-flex align-items-end" href="#">
            <div class="link_icon_size mr-2">
              <img src="@/assets/image/Nav_img/Taiwan3.png" alt="" class="link_icon">
            </div>
            <div class="link_title_size">
              <p class="title green">景點交通</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
    
    }
  }
}
</script>

<style lang="scss">

</style>
