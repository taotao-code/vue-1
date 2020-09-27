<template>
	<div class="nav" :style="{background:'bgColor','border-width':borderWidth+'px'}">
		<ul>
			<li :class="'gray'" @click="$router.go(-1)">
				<slot></slot>
				<h1>{{ title }}</h1>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'uc-nav',
		props: {
			bgColor: {
				type: String,
				default: '#fff'
			},
			borderWidth: {
				type: Number,
				default: 1
			},
			arrow: {
				type: String,
				default: 'default'
			},
			title: {
				type: String,
				default: '喵喵电影'
			}
		},
		data() {
			return {

			}
		},
		components: {},
		mounted() {},
		updated() {},
		methods: {}
	}
</script>

<style scoped>
	.nav h1 {
		font-size: 20px;
		text-align: center;
		line-height: 50px;
		font-weight: normal;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-top: -25px;
		transform: translateX(-50%);
		 color: #fff;
	}

	.nav {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: #e54847;
		border-bottom: 1px solid #e54847;
		z-index: 99;
	}

	.nav ul {
		width: 6.4rem;
		height: 0.45rem;
		padding-top: 0.15rem;
		margin: 0 auto;
		position: relative;
	}

	.nav ul li {
		width: 0.29rem;
		height: 0.31rem;
		background-size: 100%;
		margin: 0 0 0 0.38rem;

	}

	.nav ul li.gray {
		background: url(./assets/img/history1.png) no-repeat 0 0;
		width: 0.29rem;
		height: 0.31rem;
		background-size: 100%;
		margin: 0 0 0 0.38rem;
	}

	.nav ul li.default {
		background: url(./assets/img/history.png) no-repeat 0 0;
		width: 0.29rem;
		height: 0.31rem;
		background-size: 100%;
		margin: 0 0 0 0.38rem;
	}
</style>
