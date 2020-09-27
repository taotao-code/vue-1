<template>
  <div class="nav">   
    <ul>
		<router-link tag="li" active-class="active" to="/follow" id="city"><a href="javascript;">大连</a><i class="iconfont icon-lower-triangle"></i></router-link>  
		<li id="k"></li>
     <router-link tag="li" active-class="active" to="/home"><a href="javascript;" >正在热映</a></router-link>
 
     <router-link tag="li" active-class="active" to="/column"><a href="javascript;">即将上映</a></router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'Header',
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
 .nav{width:100%; position:fixed; top:40px;left:0; z-index:2; background:#fff;}
 .nav ul{width:4.38rem;height:0.6rem; margin:0 auto;}
 .nav ul li{width:1.46rem;height:0.6rem; float:left;}
 .nav ul li a{ display:block;width:1.46rem;height:0.6rem; line-height:0.6rem; text-align:center; font-size:0.3rem; color:#0E2231;}
 .nav ul li.active a{height:0.5rem; border-bottom:0.1rem solid #e54847; color:#0E2231;}
 #city{width:1.46rem;height:0.6rem; float:left;  display:block;text-align:center;font-size:0.3rem; color:#0E2231; position: absolute;left: 0;margin-right: 8.0rem;}
 #city.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
 .iconfont{position: absolute;left:1.0rem;top: 0.15rem;}
 #k{width: 1.0rem;}
</style>
