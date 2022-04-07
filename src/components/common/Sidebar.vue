<template>
	<div id="sidebar">
		<el-menu default-active="/admin-home" class="el-menu-vertical-demo" :collapse="isCollapse" :router="true">

			<template v-for="item in items">
				<template v-if="item.subs">
					<el-submenu :index="item.index" :key="item.index">
						<template slot="title">
							<i :class="item.icon"></i>
							<span slot="title">{{ item.title }}</span>
						</template>
						<template v-for="subItem in item.subs">
							<el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
								<template slot="title">{{ subItem.title }}</template>
								<el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
									{{ threeItem.title }}
								</el-menu-item>
							</el-submenu>
							<el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}
							</el-menu-item>
						</template>
					</el-submenu>
				</template>
				<template v-else>
					<el-menu-item :index="item.index" :key="item.index">
						<i :class="item.icon"></i>
						<span slot="title">{{ item.title }}</span>
					</el-menu-item>
				</template>
			</template>

		</el-menu>
	</div>
</template>

<script>
	import {
		info
	} from '../../api/user.js'
	export default {
		data() {
			return {
				isCollapse: false,
				updata: false,
				myRole: localStorage.getItem("role"),
				items: []
			};
		},
		created() {
			this.items = [{
					icon: "el-icon-star-on",
					index: "/home",
					title: "首页"
				},
				{
					icon: "el-icon-s-claim",
					index: "/simple",
					title: "简单检索"
				},
				{
					icon: "el-icon-star-on",
					index: "/form-search",
					title: "表格检索"
				},
				{
					icon: "el-icon-office-building",
					index: "/high-search",
					title: "高级检索"
				},
				{
					icon: "el-icon-school",
					index: "/home",
					title: "专利分类检索"
				},
				{
					icon: "el-icon-key",
					index: "/legal-search",
					title: "法律状态"
				},
				{
					icon: "el-icon-wind-power",
					index: "/home",
					title: "统计分析"
				},
				{
					icon: "el-icon-user-solid",
					index: "/home",
					title: "统计报表"
				},
				{
					icon: "el-icon-user-solid",
					index: "/home",
					title: "行业检索"
				}
			]
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
		}
	}
</script>

<style>
	#sidebar {
		float: left;
		position: fixed;
		overflow-y: auto;
		margin-top: 60px;
		height: calc(100vh - 60px);
		width: 220px;
		background-color: white;
	}

	#sidebar::-webkit-scrollbar {
		/*滚动条整体样式*/
		width: 4px;
		/*高宽分别对应横竖滚动条的尺寸*/
		height: 4px;
	}

	#sidebar::-webkit-scrollbar-thumb {
		/*滚动条里面小方块*/
		border-radius: 5px;
		-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
		background: rgba(0, 0, 0, 0.2);
	}

	#sidebar::-webkit-scrollbar-track {
		/*滚动条里面轨道*/
		-webkit-box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.2);
		border-radius: 0;
		background: rgba(255, 255, 255, 0.1);
	}

	.el-menu-vertical-demo {
		text-align: left;
	}
</style>
