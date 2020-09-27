<template>
	<div class="detail" v-if="detail.title">
		<div id="content" class="contentDetail" >
			<uc-nav title="影片详情" />
			<div class="detail_list">
				<div class="detail_list_bg"></div>
				<div class="detail_list_filter"></div>
				<div class="detail_list_content">
					<div class="detail_list_img">
						<img :src="detail.detail.auth_icon" alt="">
					</div>
					<div class="detail_list_info">
						<h2>{{detail.title}}</h2>
						<p>A Cool Fish</p>
						<p>{{detail.cs}}</p>
						<p>{{detail.title}}</p>
						<p>中国大陆 / 108分钟</p>
						<p>2018-11-16大陆上映</p>
					</div>
				</div>
			</div>
			<div class="detail_intro">
				<p v-html="detail.detail.content"></p>
			</div>
			<div class="detail_player swiper-container">
				<ul class="swiper-wrapper">
					<li class="swiper-slide">
						<div>
							<img :src="detail.detail.auth_img" alt="">
						</div>
						<p>{{detail.des}}</p>
						<p>{{detail.dep}}</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import UcNav from "../components/uc-nav/uc-nav.vue"
	import axios from '../plugins/axios.js'
	import {mapActions,mapState} from 'vuex'
	import {UPDATE_DETAIL} from '../store/types.js'
	export default {
		name: 'detail',
		props: {
			collectionName:{
				type:String,
				default:""
			},
			_id:{
				type:String,
				default:""
			}
		},
		components: {
			UcNav
		},
		mounted() {
			this[UPDATE_DETAIL]({collectionName:this.collectionName,_id:this._id})
		},
		updated() {},
		methods:mapActions([UPDATE_DETAIL]),
		computed:mapState(['detail']),
	}
</script>

<style scoped>
	#detailContrainer {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 100;
		width: 100%;
		min-height: 100%;
		background: white;
	}

	#detailContrainer.slide-enter-active {
		animation: .3s slideMove;
	}

	@keyframes slideMove {
		0% {
			transform: translateX(100%);
		}

		100% {
			transform: translateX(0);
		}
	}

	#content.contentDetail {
		display: block;
		margin-bottom: 0;
		padding-top: 1.2rem;
	}

	#content .detail_list {
		height: 200px;
		width: 100%;
		position: relative;
		overflow: hidden;
	}

	.detail_list .detail_list_bg {
		width: 100%;
		height: 100%;
		background: 0 40%;
		filter: blur(20px);
		background-size: cover;
		position: absolute;
		left: 0;
		top: 0;
	}

	.detail_list .detail_list_filter {
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #40454d;
		opacity: .55;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1;
	}

	.detail_list .detail_list_content {
		display: flex;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 2;
	}

	.detail_list .detail_list_img {
		width: 108px;
		height: 150px;
		border: solid 1px #f0f2f3;
		margin: 20px;
	}

	.detail_list .detail_list_img img {
		width: 100%;
		height: 100%;
	}

	.detail_list .detail_list_info {
		margin-top: 20px;
	}

	.detail_list .detail_list_info h2 {
		font-size: 20px;
		color: white;
		font-weight: normal;
		line-height: 40px;
	}

	.detail_list .detail_list_info p {
		color: white;
		line-height: 20px;
		font-size: 14px;
		color: #ccc;
	}

	#content .detail_intro {
		padding: 10px;
	}

	#content .detail_player {
		margin: 20px;
	}

	.detail_player .swiper-slide {
		width: 70px;
		margin-right: 20px;
		text-align: center;
		font-size: 14px;
	}

	.detail_player .swiper-slide img {
		width: 100%;
		margin-bottom: 5px;
	}

	.detail_player .swiper-slide p:nth-of-type(2) {
		color: #999;
	}
</style>
