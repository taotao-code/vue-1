<template>
  <div id="app">
   <h3>测试cell</h3>
    <UcCell :data="{_id:3,title:'xxx',des:'oo'}" :index="0" collectionName="detail"/>
	<uc-cell :data="{_id:2,title:'xxx',des:'oo'}" :index="0" collectionName="detail"></uc-cell>
	 <uc-cell :data="{_id:4,title:'xxx',des:'oo'}" isAdd @add-item="show"></uc-cell>
	  <uc-cell :data="{_id:5,title:'xxx',des:'oo'}" collectionName="detail" isAdd @add-item="show"></uc-cell>
  </div>
</template>

<script>
import UcCell from "../components/uc-cell/uc-cell.vue"
export default {
  name: 'App',
  data(){
    return {
    }
  },
 mounted(){

 },
 components: {
   UcCell
 },
 methods:{
   show(ev){
      console.log(ev)
    }
 }

}
</script>

<style>

</style>
