<template>
  <div id="app">
   <h3>测试button</h3>
   
    <UcButton/>
	<uc-button/>
	<uc-button text="登录"></uc-button>
	<uc-button bg-color="#399"/>
    <uc-button>注 册</uc-button>
	<uc-button @xx="show"></uc-button>
	   
   </ul>
  </div>
</template>

<script>
import UcButton from "../components/uc-button/uc-button.vue"
export default {
  name: 'App',
  components: {
    UcButton
  },
  methods:{
	  show(ev){
		  console.log(ev)
	  }
  },
}
</script>

<style>

</style>
