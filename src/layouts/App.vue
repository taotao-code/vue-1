<template>
	<div id="app">
		<loading v-show="$store.state.bLoading" />
		<Nav v-show="hNav" />
		<Header v-show="bNav" />
		<router-view />
		<Footer v-show="bFoot" />
	</div>
</template>

<script>
	import Header from './header.vue'
	import Footer from './Footer.vue'
	import loading from '../components/uc-loading/uc-loading.vue'
	import Nav from "../components/uc-nav/uc-nav.vue"
	import {
		mapState
	} from "vuex"
	import * as types from '../store/types.js'
	export default {
		name: 'App',
		data() {
			return {}
		},
		watch: {
			$route: {
				handler(newVal) {
					let path = newVal.path;
					if (/home|follow|column|cilist|detail/.test(path)) {
						this.$store.commit(types.UPDATE_NAV, true);
						this.$store.commit(types.UPDATE_FOOT, true);
						this.$store.commit(types.UPDATE_HEADER, true);
					}
					if (/login|reg|user/.test(path)){
					this.$store.commit(types.UPDATE_NAV, false);
					this.$store.commit(types.UPDATE_FOOT, false);
					this.$store.commit(types.UPDATE_HEADER, true);
				}
			},
			immediate: true
		}
	},
	mounted() {

		},
		beforeUpdate() {
			console.log('app updated');
		},
		components: {
			Header,
			Footer,
			loading,
			Nav
		},
		computed: mapState(['bFoot', 'bNav', 'hNav']),
		methods: {

		}

	}
</script>

<style>

</style>
