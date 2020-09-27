<template>
	<div class="uc-button">
		<button class="login-btn" :style="{background:bgColor}" @click="$emit('click',$event)">
			<template v-if="text!=='按 钮'">{{text}}</template>
			<slot v-if="text==='按 钮'">按 钮</slot>
		</button>
	</div>
</template>

<script>
	export default {
		name: 'uc-button',
		props: {
			text: {
				type: String,
				default: '按 钮'
			},
			bgColor: {
				type: String,
				default: '#e54847'
			}
		},
		data() {
			return {};
		},
		components: {},
		mounted() {},
		updated() {},
		methods: {}
	};
</script>

<style scoped>
	.uc-button{
		width:100%;
	}
	.login-btn {
		width: 100%;
		margin: 0 auto;
		background: #e54847;
		border-radius: 3px;
		border: none;
		display: block;
		font-size: 20px;
		color: #fff;
		text-align: center;
		height:50px; 
	}
</style>
