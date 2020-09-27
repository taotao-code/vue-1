import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Home from "../pages/home.vue"
import Follow from "../pages/follow.vue"
import Column from "../pages/column.vue"
import Detail from "../pages/detail.vue"
import Login from "../pages/login.vue"
import Reg from "../pages/reg.vue"
import User from "../pages/user.vue"
import NoPage from "../pages/no-page.vue"
import CiList from "../pages/cilist.vue"

let routes=[
	{path:'/home',component:Home},
	{path:'/detail/:_id',component:Detail,name:'detail',props: route => ({_id:route.params._id,...route.query})},//只传递query
	{path:'/follow',component:Follow},
	{path:'/column',component:Column},
	{path:'/login',component:Login},
	{path:'/reg',component:Reg},
	{path:'/user',component:User},
	{path:'/nopage',component:NoPage},
	{path:'/cilist',component:CiList},
	{path:'/',redirect:'/home'},
	{path:'*',component:NoPage},
	
];

let router=new VueRouter({
	routes
});

export default router;