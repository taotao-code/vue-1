<template>
	<div class="uc-cell">
		<div class="movie_body">
			<div @click="toDetail">
					<ul>
						<li>
							<div class="pic_show" @tap="handleToDetail(data._id)"><img :src="data.detail.auth_icon"></div>
							<div class="info_list">
								<h2 @tap="handleToDetail(data._id)">{{ data.title }} <img alt=""></h2>
								<p><span class="person"></span> {{ data.num }}人想看</p>
								<p>主演: {{ data.des }}</p>
								<p>2020-10-01 上映</p>
							</div>
							<div class="btn_pre">
								预售
							</div>

						</li>
					</ul>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'uc-cell',
		props: {
			data: { //{id:,title:,des:xx}
				type: Object,
				required: true
			},
			collectionName: { //集合名
				type: String,
				default: null
			},
			index: {
				type: Number,
				default: null
			},
			isAdd: {
				type: Boolean,
				default: true
			}
		},
		components: {},
		mounted() {},
		updated() {},
		methods: {
			toDetail() {
				if (this.collectionName) {
					this.$router.push(`/detail/${this.data._id}?collectionName=${this.collectionName}`)
				}
			}
		}
	}
</script>

<style scoped>
	.uc-cell {
		position: relative;
		overflow: hidden;
	}

	.uc-cell:active {
		background: #ccc;
	}

	.movie_body {
		flex: 1;
		overflow: auto;
	}

	.movie_body ul {
		margin: 0 12px;
		overflow: hidden;
	}

	.movie_body ul li {
		margin-top: 12px;
		display: flex;
		align-items: center;
		border-bottom: 1px #e6e6e6 solid;
		padding-bottom: 10px;
	}

	.movie_body .pic_show {
		width: 64px;
		height: 90px;
	}

	.movie_body .pic_show img {
		width: 100%;
	}

	.movie_body .info_list {
		margin-left: 10px;
		flex: 1;
		position: relative;
	}

	.movie_body .info_list h2 {
		font-size: 17px;
		line-height: 24px;
		width: 150px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.movie_body .info_list p {
		font-size: 13px;
		color: #666;
		line-height: 22px;
		width: 200px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.movie_body .info_list .grade {
		font-weight: 700;
		color: #faaf00;
		font-size: 15px;
	}

	.movie_body .info_list img {
		width: 50px;
		position: absolute;
		right: 10px;
		top: 5px;
	}

	.movie_body .btn_mall,
	.movie_body .btn_pre {
		width: 47px;
		height: 27px;
		line-height: 28px;
		text-align: center;
		background-color: #f03d37;
		color: #fff;
		border-radius: 4px;
		font-size: 12px;
		cursor: pointer;
	}

	.movie_body .btn_pre {
		background-color: #3c9fe6;
	}
</style>
