# AR试色 2D 调研

1. 快手小程序目前不支持使用webg1，无法实现
2. 微信小程序、抖音小程序可以显示嘴唇图片
3. 淘宝小程序中目前测试ios无法显示

## 微信小程序中注意事项
1. 图片的大小不要超过2000*2000
2. 因为部分安卓手机生成的慢，需要异步请求生成canvas
```
// #ifdef MP-WEIXIN  || MP-TOUTIAO
	setTimeout(()=>{
		uni.createSelectorQuery()
		      .select('#arcanvas')
		      .node()
		      .exec(res => {
				console.log('drawAiwendy', res);
				const c = res[0].node;
				// if(!c){
					
				// }
				if (!gl) {
				  console.log('webgl未受支持');
				  return
				}
				// 。。。代码区域
			});
	},1000)
	
// #endif
```

3. 微信小程序中使用透明度为0清楚画布是黑色，
```
gl.clearColor(0.0, 0.0, 0.0, 0.0);
gl.clear(gl.COLOR_BUFFER_BIT);	
```

## 淘宝小程序注意事项
1. 
