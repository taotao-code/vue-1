<template>
 <div class="foot-btn" >
   <ul>
       <router-link tag="li" to="/home">
           <i class="iconfont icon-dianying"></i>
           <p>电影</p>
       </router-link>
       <router-link tag="li" to="/cilist">
           <i class="iconfont icon-yingyuan"></i>
           <p>影院</p>
       </router-link>
       <router-link tag="li" to="/user">
           <i class="iconfont icon-wode"></i>
           <p>我的</p>
       </router-link>
   </ul>
 </div>
</template>

<script>
  export default {
    name:'Footer',
    props:{},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .foot-btn{ width:100%; height:50px; background: white; border-top:2px #ebe8e3 solid; position: fixed; left: 0; bottom:0;}
  .foot-btn ul{ display: flex; text-align: center; height:50px; align-items:center;}
  .foot-btn ul li{ flex:1; height:40px;}
  .foot-btn ul li.active{ color: #f03d37;}
  .foot-btn ul li.router-link-active{ color: #f03d37;}
  .foot-btn ul i{ font-size: 20px;}
  .foot-btn ul p{ font-size: 12px; line-height: 18px;}
</style>
