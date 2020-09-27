<template>
  <div class="follow">
              <div>
                  <div class="city_hot">
                      <h2>热门城市</h2>
                      <ul class="clearfix">
                          <li v-for="item in $store.state.follow" :key="item._id" @tap="handleToCity(item.ct , item._id)">{{ item.ct }}</li>
                      </ul>
                  </div>
                  <div class="city_sort" ref="city_sort">
                      <div v-for="item in $store.state.follow" :key="item._id">
                          <h2>{{ item.ab}}</h2>
                          <ul>
                              <li v-for="itemList in $store.state.follow" :key="itemList._id" @tap="handleToCity(itemList.um , itemList._id)">{{ itemList.um }}</li>
                          </ul>
                      </div>	
                  </div>
              </div>

      <div class="city_index">
          <ul>
              <li v-for="item in $store.state.follow" :key="item._id" @touchstart="handleToIndex(item.ab)">{{ item.ab }}</li>
          </ul>
      </div>
  </div>

</template>

<script>
	import  * as types from '../store/types.js'
  export default {
    props:{},
    data(){
      return {
        list:[]
      }
    },
    components:{},
    mounted(){
		this.$store.dispatch('UPDATE_FOLLOW')
	},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .follow{padding-left:0.34rem;padding-right:0.34rem; padding-bottom: 0.8rem;padding-top:1.2rem ;background: #fff5f0;}
  
  #content .follow{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
  .follow .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
  .follow .city_list::-webkit-scrollbar{
      background-color:transparent;
      width:0;
  }
  .follow .city_hot{ margin-top: 20px;margin-bottom: 250px;}
  .follow .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
  .follow .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
  .follow .city_sort div{ margin-top: 20px;}
  .follow .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
  .follow .city_sort ul{ padding-left: 10px; margin-top: 10px;}
  .follow .city_sort ul li{ line-height: 30px; line-height: 30px;}
  .follow .city_index{ width:20px;float: right; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;position: fixed;right: 0;top:30%;}
</style>
