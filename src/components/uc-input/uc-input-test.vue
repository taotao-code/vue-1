<template>
  <div id="app">
   <h3>测试input</h3>
    <UcInput/>
	<uc-input v-model="ipt"></uc-input>
	<uc-input v-model="ipt2" type="password" label="密 码"></uc-input>
	   
  </div>
</template>

<script>
import UcInput from "../components/uc-input/uc-input.vue"
export default {
  name: 'App',
  data(){
	return{
		ipt:"taotao",
		ipt2:"jinjin",
	}  
  },
  components: {
    UcInput
  },

}
</script>

<style>

</style>
