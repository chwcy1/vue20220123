<template>
	<div class="w3l-hotair-form">
		<h1>专利检索分析系统</h1>
		<div class="container">

			<div class="workinghny-form-grid">
				<div class="main-hotair">
					<div class="content-wthree">
						<h2 v-if="state==0">登 录</h2>
						<h2 v-if="state==1">注 册</h2>
						<input v-model="form.username" type="username" class="text" placeholder="User Name" required=""
							autofocus>
						<input v-model="form.password" type="password" class="password" placeholder="User Password"
							required="" autofocus>
						<button v-if="state==0" class="btn" @click="onSubmit()">登 录</button>
						<button v-if="state==1" class="btn" @click="onSubmit()">注 册</button>
						<p v-if="state==0" class="account">Don't have an account? <a href="#"
								@click="state=1">Register</a></p>
						<p v-if="state==1" class="account">Already have an account? <a href="#"
								@click="state=0">Login</a></p>
					</div>
					<div class="w3l_form align-self">
						<div class="left_grid_info">
							<img src="../assets/index.png" alt="" class="img-fluid">
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import {
		login,
		register
	} from '../api/user.js'
	const jwt = require('jsonwebtoken');
	export default {
		data() {
			return {
				state: 0,
				form: {
					username: '',
					password: ''
				}
			}
		},
		mounted() {
			localStorage.removeItem('token')
		},
		methods: {
			onSubmit() {
				if (this.form.username == '') return this.$message.error("请输入用户名")
				if (this.form.password == '') return this.$message.error("请输入密码")
				localStorage.setItem('name', this.form.username)
				this.$message.success('登录成功')
				this.$router.push('/home')
				// if(this.state==0){
				// 	login(this.form).then(res => {
				// 		console.log(res.token)
				// 		if (res.token) {
				// 			var data = jwt.decode(res.token)
				// 			localStorage.setItem('token', res.token)
				// 			localStorage.setItem('name', data.username)
				// 			localStorage.setItem('privilege', data.privilege)
				// 			this.$message.success('登录成功')
				// 			this.$router.push('/home')
				// 		} else{
				// 			this.$message.warning('登录失败')
				// 		}
				// 	});					
				// }
				// else {
				// 	register(this.form).then(res => {
				// 		console.log(res.token)
				// 		if (res.token) {
				// 			var data = jwt.decode(res.token)
				// 			localStorage.setItem('token', res.token)
				// 			localStorage.setItem('name', data.username)
				// 			localStorage.setItem('privilege', data.privilege)
				// 			this.$message.success('注册成功')
				// 			this.$router.push('/home')
				// 		} else{
				// 			this.$message.warning('注册失败')
				// 		}
				// 	});
				// }
			}
		}
	}
</script>
<style scoped>
	html {
		scroll-behavior: smooth;
	}

	body,
	html {
		margin: 0;
		padding: 0;
		font-family: 'Noto Sans JP', sans-serif;
	}

	* {
		box-sizing: border-box;
	}

	.margin_top {
		margin-top: 10px;
	}

	.d-grid {
		display: grid;
	}

	.d-flex {
		display: flex;
		display: -webkit-flex;
	}

	.text-center {
		text-align: center;
	}

	.text-left {
		text-align: left;
	}

	.text-right {
		text-align: right;
	}

	button,
	input,
	select {
		-webkit-appearance: none;
		outline: none;
		font-family: 'Noto Sans JP', sans-serif;
	}

	button,
	.btn,
	select {
		cursor: pointer;
	}

	a {
		text-decoration: none;
	}

	img {
		max-width: 100%;
	}

	ul {
		margin: 0;
		padding: 0
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
		padding: 0
	}

	p {
		color: #666;
		font-size: 16px;
		line-height: 25px;
		opacity: .6;
		text-align: center;
	}

	.p-relative {
		position: relative;
	}

	.p-absolute {
		position: absolute;
	}

	.p-fixed {
		position: fixed;
	}

	.p-sticky {
		position: sticky;
	}

	.btn,
	button,
	.actionbg,
	input {
		border-radius: 36px;
		-webkit-border-radius: 36px;
		-moz-border-radius: 36px;
		-o-border-radius: 36px;
		-ms-border-radius: 36px;
	}

	.btn:hover,
	button:hover {
		transition: 0.5s ease;
		-webkit-transition: 0.5s ease;
		-o-transition: 0.5s ease;
		-ms-transition: 0.5s ease;
		-moz-transition: 0.5s ease;
	}

	/*-- wrapper start --*/
	.wrapper {
		width: 100%;
		padding-right: 15px;
		padding-left: 15px;
		margin-right: auto;
		margin-left: auto;
	}

	@media (min-width: 576px) {
		.wrapper {
			max-width: 540px;
		}
	}

	@media (min-width: 768px) {
		.wrapper {
			max-width: 720px;
		}
	}

	@media (min-width: 992px) {
		.wrapper {
			max-width: 960px;
		}
	}

	@media (min-width: 1200px) {
		.wrapper {
			max-width: 1140px;
		}
	}

	.wrapper-full {
		width: 100%;
		padding-right: 15px;
		padding-left: 15px;
		margin-right: auto;
		margin-left: auto;
	}

	/*-- //wrapper start --*/

	/*-- form styling --*/
	.w3l-hotair-form {
		position: relative;
		min-height: 100vh;
		z-index: 0;
		background: linear-gradient(to left, #035aa6 0%, #409EFF 100%);
		/* background: #394965; */
		padding: 40px 40px;
		justify-content: center;
		display: grid;
		grid-template-rows: 1fr auto 1fr;
		align-items: center;
	}

	.container {
		max-width: 890px;
		margin: 0 auto;
	}

	.w3l_form {
		flex-basis: 50%;
		-webkit-flex-basis: 50%;
		background: #f4f9fd;
		background-size: cover;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		-ms-background-size: cover;
		padding: 40px;
		border-top-right-radius: 8px;
		border-bottom-right-radius: 8px;
		align-items: center;
		display: grid;
	}

	.content-wthree {
		flex-basis: 50%;
		-webkit-flex-basis: 50%;
		box-sizing: border-box;
		padding: 3em 3em;
		background: #fff;
		box-shadow: 2px 9px 49px -17px rgba(0, 0, 0, 0.1);
		border-top-left-radius: 8px;
		border-bottom-left-radius: 8px;
	}

	.w3l-workinghny-form .logo {
		text-align: center;
	}

	.w3l-hotair-form .main-hotair {
		position: relative;
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		margin: 40px 0;
	}

	.w3l-hotair-form form {
		margin-top: 30px;
		margin-bottom: 30px;
	}

	.social-icons {
		text-align: center;
		margin-top: 16px;
	}

	p.account,
	p.account a {
		text-align: center;
		padding-top: 20px;
		padding-bottom: 0px;
		font-size: 16px;
		color: #333;
	}

	p.account a {
		color: #0568C1;
	}

	p.account a:hover {
		text-decoration: underline;
	}

	.w3l-hotair-form h1 {
		text-align: center;
		font-size: 40px;
		font-weight: 700;
		color: #fff;
	}

	.w3l-hotair-form h2 {
		font-size: 30px;
		line-height: 40px;
		margin-bottom: 5px;
		font-weight: 900;
		color: #272346;
		text-align: center;
	}

	.w3l-hotair-form input {
		outline: none;
		margin-bottom: 15px;
		font-size: 16px;
		color: #999;
		text-align: left;
		padding: 14px 20px;
		width: 100%;
		display: inline-block;
		box-sizing: border-box;
		border: none;
		outline: none;
		background: #f7fafc;
		border: 1px solid #e5e5e5;
		transition: .3s ease;
		-webkit-transition: .3s ease;
		-moz-transition: .3s ease;
		-ms-transition: .3s ease;
		-o-transition: .3s ease;
	}

	.w3l-hotair-form input:focus {
		background: transparent;
		border: 1px solid #0568C1;
	}

	.w3l-hotair-form button {
		font-size: 18px;
		color: #fff;
		width: 100%;
		background: #0568C1;
		border: none;
		padding: 14px 15px;
		font-weight: 700;
		transition: .3s ease;
		-webkit-transition: .3s ease;
		-moz-transition: .3s ease;
		-ms-transition: .3s ease;
		-o-transition: .3s ease;
	}

	.w3l-hotair-form button:hover {
		background: #fdc500;
	}

	.w3l-hotair-form .social-icons ul li {
		list-style: none;
		display: inline-block;
	}

	.w3l-hotair-form .social-icons ul li a {
		padding: 8px;
	}

	.w3l-hotair-form .social-icons ul li a:hover {
		opacity: 0.8;
		transition: 0.5s ease;
		-webkit-transition: 0.5s ease;
		-o-transition: 0.5s ease;
		-ms-transition: 0.5s ease;
		-moz-transition: 0.5s ease;
	}

	.w3l-hotair-form .social-icons ul span.fa {
		color: #696687;
		font-size: 18px;
		opacity: .8;
	}

	.w3l-hotair-form .social-icons ul li a.facebook span {
		font-size: 18px;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		margin-right: 6px;
		border: 2px solid #696687;
		line-height: 32px;
	}

	.w3l-hotair-form .social-icons ul li a.twitter span {
		color: #1da1f2;
		font-size: 18px;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		margin-right: 6px;
		border: 2px solid #1da1f2;
		line-height: 32px;
	}

	.w3l-hotair-form .social-icons ul li a.pinterest span {
		color: #e60023;
		font-size: 18px;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		margin-right: 6px;
		border: 2px solid #e60023;
		line-height: 32px;
	}


	.copyright p {
		text-align: center;
		font-size: 17px;
		line-height: 26px;
		color: #fff;
		opacity: 1;
	}

	p.copy-footer-29 a {
		color: #fff;
	}

	p.copy-footer-29 a:hover {
		color: #fdc500;
		transition: 0.5s ease;
		-webkit-transition: 0.5s ease;
		-o-transition: 0.5s ease;
		-ms-transition: 0.5s ease;
		-moz-transition: 0.5s ease;
	}


	/* -- placeholder --*/


	/*-- responsive design --*/

	@media (max-width:736px) {
		.w3l-hotair-form .main-hotair {
			flex-direction: column;
		}

		.w3l-hotair-form form {
			margin-top: 30px;
			margin-bottom: 10px;
		}

		.w3l_form {
			order: 2;
			border-radius: 0;
			border-bottom-left-radius: 8px;
			border-bottom-right-radius: 8px;
			border-top-right-radius: 0;
		}

		.content-wthree {
			order: 1;
			border-radius: 0;
			border-top-left-radius: 8px;
			border-top-right-radius: 8px;
		}
	}

	@media (max-width:568px) {
		.w3l-hotair-form h1 {
			font-size: 36px;
		}

		.w3l-hotair-form .main-hotair {
			margin: 30px 0;
		}

		.content-wthree {
			padding: 2.5em;
		}
	}

	@media (max-width:480px) {
		.w3l-hotair-form {
			padding: 40px 30px;
		}

		.w3l-hotair-form h1 {
			font-size: 26px;
		}
	}

	@media (max-width:384px) {
		.w3l-hotair-form {
			padding: 30px 15px;
		}

		.content-wthree {
			padding: 2em;
		}

		.w3l-hotair-form h2 {
			font-size: 22px;
			line-height: 32px;
		}

		.copyright p {
			font-size: 16px;
		}

	}
</style>
