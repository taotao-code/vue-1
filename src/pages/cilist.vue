<template>
	<div class="cinema_body">
		<UcNav title="喵喵影院" />
		<ul>
			<li v-for="item in $store.state.cilist" :key="item._id">
				<div>
					<span>{{ item.title }}</span>
					<span class="q"><span class="price">{{ item.sellPrice }}</span> 元起</span>
				</div>
				<div class="address">
					<span>{{ item.des}}</span>
					<span>{{ item.km }}km</span>
				</div>
				<div class="card">
					<div>小吃</div>
					<div>折扣卡</div>
				</div>
			</li>
		</ul>
	</div>

</template>

<script>
	import UcNav from "../components/uc-nav/uc-nav.vue"
	import * as types from '../store/types.js'
	export default {
		name: 'cilist',
		props: {},
		components: {
			UcNav
		},
		mounted() {
			this.$store.dispatch( types.UPDATE_CILIST )
		},
		updated() {},
		methods: {}
	}
</script>

<style scoped>
	#content .cinema_body {
		flex: 1;
		overflow: auto;
	}

	.cinema_body ul {
		padding: 20px;
		padding-top: 100px;
	}

	.cinema_body li {
		border-bottom: 1px solid #e6e6e6;
		margin-bottom: 20px;
	}

	.cinema_body div {
		margin-bottom: 10px;
	}

	.cinema_body .q {
		font-size: 11px;
		color: #f03d37;
	}

	.cinema_body .price {
		font-size: 18px;
	}

	.cinema_body .address {
		font-size: 13px;
		color: #666;
	}

	.cinema_body .address span:nth-of-type(2) {
		float: right;
	}

	.cinema_body .card {
		display: flex;
	}

	.cinema_body .card div {
		padding: 0 3px;
		height: 15px;
		line-height: 15px;
		border-radius: 2px;
		color: #f90;
		border: 1px solid #f90;
		font-size: 13px;
		margin-right: 5px;
	}

	.cinema_body .card div.or {
		color: #f90;
		border: 1px solid #f90;
	}

	.cinema_body .card div.bl {
		color: #589daf;
		border: 1px solid #589daf;
	}
</style>
