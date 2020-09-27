<template>
	<div class="home">
		<UcBanner :data="$store.state.banner" collectionName="banner" />
		<div class="list">
			<UcCell v-for="(item,index) of $store.state.home" :key="item._id" :data="item" :index=index collectionName="home" />
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	import Header from "../layouts/header.vue"
	import Footer from "../layouts/Footer.vue"
	import UcBanner from "../components/uc-banner/uc-banner.vue"
	import UcCell from "../components/uc-cell/uc-cell.vue"
	import {
		mapState
	} from 'vuex'
	import * as types from '../store/types.js'
	export default {
		name: 'home',
		props: {},
		components: {
			UcBanner,
			UcCell,
			Header,
			Footer
		},
		mounted() {
			this.$store.dispatch('UPDATE_HOME')
			this.$store.dispatch('UPDATE_BANNER')
		},
		updated() {},
		methods: {},
		computed: mapState({
			list: state => state.home.home
		})
	}
</script>

<style scoped>
	.home {
		padding-bottom: 0.8rem;
		padding-top: 40px;
	}

	.list {
		padding-left: 0.34rem;
		padding-right: 0.34rem;
	}
</style>
