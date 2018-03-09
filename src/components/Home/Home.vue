<template>
<div>
<!-- <AppHeader></AppHeader> -->
<app-header></app-header>
<!-- 主体 -->
<div class="main">
	<AppAside></AppAside>
	<!-- 其它页面自已调整吧 -->
	<div class="container-fluid">
		<!-- 个人资料 -->
		<div class="body teacher-profile">
			<div class="profile">
				<div class="row survey">
					<div class="col-md-3">
						<div class="cell money">
							<i class="fa fa-money"></i>
							<span>我的收入</span>
							<h5>￥11.11</h5>
						</div>
					</div>
					<div class="col-md-3">
						<div class="cell th">
							<i class="fa fa-th"></i>
							<span>课程数量</span>
							<h5>12</h5>
						</div>
					</div>
					<div class="col-md-3">
						<div class="cell user">
							<i class="fa fa-user"></i>
							<span>用户数量</span>
							<h5>236</h5>
						</div>
					</div>
					<div class="col-md-3">
						<div class="cell eye">
							<i class="fa fa-eye"></i>
							<span>浏览量</span>
							<h5>22435</h5>
						</div>
					</div>
				</div>
				<div class="chart">
					<div id="main" style="width: 600px;height:400px;"></div>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</template>
<script>
import AppHeader from '../AppHeader/AppHeader'
import AppAside from '../AppAside/AppAside'
export default {
	data () {
		return {}
	},
	components: {
		AppHeader,
		AppAside
	}
}
</script>
<style>
	
</style>