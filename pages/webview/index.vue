<template>
	<view>
		<!-- http://localhost:4000/ -->
		<!-- <web-view src='http://meidaojia.com' ></web-view> -->
			<!-- <web-view src='http://192.168.1.75:9999/face-check.html' ></web-view> -->
			<!-- <web-view src='http://192.168.1.75:8080/' ></web-view> -->
			<!-- #ifdef MP -->
			<web-view :src='url' ></web-view>
			<!-- #endif -->
			
	</view>
</template>

<script>
	
	export default {
		data(){
			return {
				url:'http://192.168.1.75:8080/'
			}
		},
		methods:{
			handlePostMessage(e){
				console.log('..handlePostMessage...监听...',e,e.detail.data)
			}
		},
		onLoad(params) {
			console.log('..onLoad...params...',params)
			// if(params.url){
			// 	let recon = encodeURIComponent('&recon_redirect =pages/index/index')
			// 	let preview = encodeURIComponent('&preview_redirect =pages/index/index')
			// 	this.url = decodeURIComponent(params.url)+recon+preview
			// }
		},
		mounted() {
			// wx.setStorageSync('sharePagePath', '/pages/webview/webview?url=' +      url)
		},
		onShareAppMessage: function (options) {
			console.log('..onShareAppMessage...params...',options)
		    return {
		      title: '官网',
		      // 这里是关键一
		      path: '/pages/webview/webview?url=' + options.webewUrl,
			  imageUrl: 'https://cdn.meidaojia.com/skindetect/images/share/share20200327.png',
		      // success: (res) => {
		      //   this.setData({
		      // // 这里是关键二
		      //     url: options.webViewUrl
		      //   })
		      // }
		    }
		  }
	}
</script>

<style>
</style>
