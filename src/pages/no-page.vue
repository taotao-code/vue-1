<template>
 <div class="col-md-6 align-self-center">
   <uc-nav bg-color="transparent" :border-width="0" arrow="gray"></uc-nav>
   <div class="nopage">
   <h1>404</h1>
   <h2>UH OH! 页面丢失</h2>
   <p>您所寻找的页面不存在。你可以点击下面的按钮，返回主页。
   </p>
   <router-link to="/home">回到首页</router-link>
   </div>
 </div>
</template>

<script>
	import UcNav from "../components/uc-nav/uc-nav.vue"
  export default {
    name:'no-page',
    props:{},
    data(){
      return {
        
      }
    },
    components:{UcNav},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style>
    .nopage{
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%);
	}
</style>
