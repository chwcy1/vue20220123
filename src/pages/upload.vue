<template>
	<div class="home" style="max-width:1100px;margin:auto">
		<div style="font-size: 20px; padding: 10px 0; font-weight: normal; border-bottom: dashed 1px #DCDFE6">
			<table style="width:100%" border="0" cellspacing="0" cellpadding="0">
				<tr>
					<td width="1" style="padding-top:3px;padding-right:7px">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
							<path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
						</svg>
					</td>
					<td valign="top" align="left">
						导入数据
					</td>
				</tr>
			</table>
		</div>
		<div style="width:100%;padding:10px 0"></div>
		<div style="margin: 10px auto;border: 1px solid #DCDFE6;border-radius: 5px;color: #909399;padding: 10px 0;font-size: 14px;width: 100%;">
			<h4 style="text-align: center;font-size: 16px;color:#777">注意事项</h4>
			<ul style="list-style:none;padding:0 20px;line-height:200%">
				<li>请选择国家下发数据的ZIP文件：</li>
				<li>著录项例如：19850910-1-001.ZIP</li>
				<li>pdf例如：19850910-1-001.ZIP</li>
				<li>如果pdf里出现了连同前面著录项和全部数据库里都没有的公开/著录号,无法上传。</li>
			</ul>
		</div>
		<el-card style="margin: 20px auto;width: 100%;" v-loading="loading" shadow="never">
			<div style="padding-bottom: 20px;">
				<el-radio v-model="radio" label="FM" border>发明申请</el-radio>
				<el-radio v-model="radio" label="SYXX" border>实用新型</el-radio>
				<el-radio v-model="radio" label="WG" border >外观设计</el-radio>
				<el-radio v-model="radio" label="FMSQ" border>发明授权</el-radio>
			</div>
			<table style="width:100%" border="0" cellspacing="0" cellpadding="0">
				<tr>
					<td width="50%" valign="top">
						<p class="title">导入著录项、附图</p>
						<el-upload ref="upload1" :auto-upload="false" class="upload-demo" drag>
							<i class="el-icon-upload"></i>
							<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
							<!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
						</el-upload>
					</td>
					<td valign="top" style="border-left:dashed 1px #DCDFE6;padding-left:20px">
						<p class="title">导入PDF</p>
						<el-upload ref="upload2" :auto-upload="false" class="upload-demo" drag>
							<i class="el-icon-upload"></i>
							<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
							<!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
						</el-upload>
					</td>
				</tr>
			</table>

		</el-card>
		<div style="text-align: center;">
			<el-button type="primary" @click="onSubmit">上传</el-button>
			<el-button @click="form = {}">清空</el-button>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import {
		baseURL
	} from '../api/base.js'
	export default {
		name: 'HelloWorld',
		data() {
			return {
				baseURL: baseURL,
				radio: 'FM',
				loading: false
			}
		},
		mounted() {},
		methods: {
			onSubmit() {
				if (!this.$refs.upload1.uploadFiles[0] || !this.$refs.upload2.uploadFiles[0]) {
					this.$message.warning('两个文件必须同时上传')
					return
				}
				this.loading = true
				let formData = new FormData();
				formData.append("file1", this.$refs.upload1.uploadFiles[0].raw);
				formData.append("file2", this.$refs.upload2.uploadFiles[0].raw);
				formData.append("type", this.radio);
				var that = this
				axios({
						method: "POST",
						url: this.baseURL + '/res/upload',
						data: formData,
						headers: {
							"Content-Type": localStorage.getItem("token")
						}
					})
					.then(function(res) {
						console.log(res)
						that.loading = false
						that.$message.success("成功上传")
						location.reload()
					})
					.catch(function(error) {
						console.log(error)
						that.loading = false
						that.$message.error(error.response.data.msg)
					})
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file);
			}
		}
	}
</script>

<style scoped>
	.home {
		text-align: left;
		padding: 20px;
	}

	.title {
		font-size: 20px;
		line-height: 30px;
	}

	.upload-demo {
		margin: 30px auto;
	}
</style>
