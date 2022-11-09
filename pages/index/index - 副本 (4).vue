<template>
	<view class="container">
	<image
		:src="imgModel"
		class="mode-img"
		@load="imgLoad"
		:style="{ width: canvasObj.width + 'px', height: canvasObj.height + 'px', top: canvasObj.top + 'px', left: canvasObj.left + 'px' }"
	></image>
	<button style="position: absolute;top: 100px; "> 哈哈哈</button>
	<!-- h5、app-vue 中单个尺寸过大的 canvas 在 iOS/Safari 无法绘制（具体限制尺寸未公布） -->
	<canvas
		id="arcanvas"
		type="webgl"
		ref="arcanvas"
		:style="{ width: canvasObj.width + 'px', height: canvasObj.height + 'px', top: canvasObj.top + 'px', left: canvasObj.left + 'px' }"
	></canvas>
	<button style="position: absolute;top: 200px; z-index: 22;"> 略略</button>
	
	</view>
</template>

<script>
var canvas;
var gl;

var test;

var w = 0;
var h = 0;

//唇彩图片
var img;
//唇彩图片路径
var imgPath;
//唇彩特效透明度
var translucent;
var translucentBase = 1
//嘴唇面片缩放系数
var lipScale;

//阿里ar sdk嘴唇关键点起始索引
var lipMarkBeginIndex;
//德劳内三角化退化成查找表
const lipIndex = new Int32Array([
  84, 85, 96,
  96, 85, 97,
  97, 85, 86,
  97, 86, 87,
  97, 87, 98,
  98, 87, 88,
  98, 88, 99,
  99, 88, 89,
  99, 89, 100,
  100, 89, 90,
  84, 96, 95,
  95, 96, 103,
  95, 103, 94,
  94, 103, 102,
  94, 102, 93,
  93, 102, 101,
  93, 101, 92,
  92, 101, 91,
  91, 101, 100,
  91, 100, 90
    ]);

//关键点缩放的点对索引
const lipScaleIndex = new Int32Array([
  84, 96,
  96, 84,
  85, 97,
  86, 97,
  97, 86,
  87, 98,
  98, 87,
  88, 99,
  99, 88,
  89, 99,
  90, 100,
  100, 90,
  91, 101,
  92, 101,
  101, 92,
  93, 102,
  102, 93,
  94, 103,
  103, 94,
  95, 103
    ]);

const lipTexCoordnate = new Float32Array([
    0, 0.5,
    0.153, 0.686,
    0.368, 0.741,
    0.5, 0.693,
    0.632, 0.741,
    0.847, 0.686,
    1, 0.5,
    0.863, 0.311,
    0.677, 0.24,
    0.5, 0.212,
    0.323, 0.24,
    0.137, 0.311,
    0.072, 0.499,
    0.363, 0.504,
    0.5, 0.488,
    0.637, 0.504,
    0.928, 0.499,
    0.637, 0.475,
    0.5, 0.464,
    0.363, 0.475
  ]);

const quadVertex = new Float32Array([
    -1.0, 1.0, 0.0, 0.0,
    -1.0, -1.0, 0.0, 1.0,
    1.0, -1.0, 1.0, 1.0,
    1.0, -1.0, 1.0, 1.0,
    1.0, 1.0, 1.0, 0.0,
    -1.0, 1.0, 0.0, 0.0]);

const lipVertex = new Float32Array([
    -1.0, 1.0, 0.0, 0.0, 1.0,
    -1.0, -1.0, 0.0, 1.0, 1.0,
    1.0, -1.0, 1.0, 1.0, 1.0,
    1.0, -1.0, 1.0, 1.0, 1.0,
    1.0, 1.0, 1.0, 0.0, 1.0,
    -1.0, 1.0, 0.0, 0.0, 1.0]);

//render resource
var vertShader;
var fragShader;
var shaderProgram;
var quadVertShader;
var quadFragShader;
var quadShaderProgram;
var vertexbuffer;
var quadVertexbuffer;
var lipPoints;
var lipPointsIndex;
var lipPointsScale;
var lipPointsUnScale;
var lipTexture;
var cameraTexture;


export default {
	name: 'ar-camera-com',
	data() {
		return {
			points:[],
			canvasObj: {
				width: 0,
				height: 0,
				top: 0,
				left: 0,
				pixelRatio: 1
			},
			gl: null,
			canvas: null,
			lipMarkBeginIndex: 84, //阿里ar sdk嘴唇关键点起始索引
			lipScale: null, //嘴唇面片缩放系数
			facePoints: {},
			points84By103: [
				957.50409482,
				2048.25090186,
				1024.20328954,
				2021.00354189,
				1100.35535717,
				1996.00218737,
				1145.56652331,
				2007.07288401,
				1189.2633217,
				1996.04795256,
				1261.4984701,
				2017.43906306,
				1325.22831509,
				2046.56618589,
				1276.55727626,
				2093.84743997,
				1224.39282784,
				2134.3206981,
				1144.65582022,
				2144.29859945,
				1069.32946318,
				2129.80846816,
				1011.42414683,
				2094.29104754,
				988.1676205,
				2055.62188232,
				1054.90785861,
				2052.97282839,
				1152.7350715,
				2054.15642762,
				1241.12630101,
				2056.98369944,
				1299.69763407,
				2046.2361438,
				1237.68592091,
				2062.30674812,
				1145.72936507,
				2071.47383073,
				1024.20328954,
				2021.00354189
			],
			translucent: 0.5,
			imgLipstick: 'https://cdn-mdj.oss-cn-beijing.aliyuncs.com/common/test-ar-makeup/lipColor1.png',
			imgModel: 'https://cdn-mdj.oss-cn-beijing.aliyuncs.com/common/test-ar-makeup/model.jpg',
			isFaceBeauty: true,
			isShowFacePoints: false,
			 vertexs: new Float32Array([
			      -1.0, 1.0, 0.0, 0.0, 1.0,
			      -1.0, -1.0, 0.0, 0.0, 0.0,
			      1.0, 1.0, 0.0, 1.0, 1.0,
			      1.0, -1.0, 0.0, 1.0, 0.0])
		};
	},
	props: {},
	components: {},
	computed: {},
	created() {
		// this.setCanvasWh();
		// this.handleARFrame1();
	},
	onReady() {
		console.log('。。。。。。。onReady。。。');
	},
	methods: {
		imgLoad(e) {
			console.log(e, 'width', e.detail.width);
			console.log('height：', e.detail.height);
			var systemInfo = uni.getSystemInfoSync();
			this.imgWidth = e.detail.width
			this.imgHeight = e.detail.height
			let w =  systemInfo.windowWidth;
			let h =  systemInfo.windowHeight;
			let r = e.detail.width / e.detail.height;
			console.log(systemInfo, 'getImageInfo', this.canvasObj, w, h, r);
			if (w / h < r) {
				// 表示高是短边,现在宽剧中
				this.canvasObj.height = h;
				this.canvasObj.width = r * h;
				this.canvasObj.top = 0 + 'px';
				this.canvasObj.left = (w - this.canvasObj.width) / 2;
			} else {
				this.canvasObj.width = w;
				this.canvasObj.height = w / r;
				this.canvasObj.top = (h - this.canvasObj.height) / 2;
				this.canvasObj.left = 0;
			}
			this.canvasObj.pixelRatio = systemInfo.pixelRatio;
			console.log(w / h < r, '。。。。。。。this.canvasObj。。。', this.canvasObj);
			this.handleARFrame1();
			
			var self = this;
			translucent = 0.7;
			lipMarkBeginIndex = this.lipMarkBeginIndex = 84;
			// this.lipScale = 0.01;
			// #ifdef MP
			this.canvasWxFn();
			// #endif
			
		},
		handleARFrame1() {
			var rawPoints = this.points84By103;
			let len = 106;
			for (var i = 0; i < 84; i++) {
				rawPoints.unshift(0.1, 0.1);
			}
			for (var i = 104; i < len; i++) {
				rawPoints.push(0.1, 0.1);
			}
			function transformPoint(point, fw, fh) {
				return [(point[0] / fw) * 2 - 1, (1 - point[1] / fh) * 2 - 1];
			}
			var points = []
		
			for (var i = 0; i < 106; i++) {
				points.push(transformPoint([rawPoints[i * 2], rawPoints[i * 2 + 1]], this.imgWidth, this.imgHeight));
			}
		
			console.log(points,'...gl 出来了么....',this.imgWidth,this.imgHeight)
			this.points = points;
		},
		canvasWxFn() {
			// #ifdef MP
		
			try {
				uni.createSelectorQuery()
					.select('#arcanvas')
					.fields({ node: true, size: true })
					.exec(res => {
						console.log('drawAiwendy', res);
						const c = res[0].node;
						var systemInfo = uni.getSystemInfoSync();
						console.log('。。。systemInfo。。', this.canvasObj, this.canvasObj);
						c.height = this.canvasObj.height;
						c.width = this.canvasObj.width;
						console.log(c.width, '。。。。。。。uni.createCanvas。。success。', c);
						this.gl = c.getContext('webgl');
						gl = this.gl;
						this.canvas = c;
						canvas = c;
						console.log(this.points,'。。。。。。。uni.createCanvas。。success。', gl);
						// this.renderImg()
						
						Promise.all([
							this.changeLipStyle(this.imgLipstick),
							this.changeLipStyle(this.imgModel)
						]).then(res=>{
							console.log('zhixingwanbi 哈哈哈',res)
							this.initRenderPipeline();
							gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
							gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, res[1]);
								
							
							gl.bindTexture(gl.TEXTURE_2D, lipTexture);
							gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, res[0]);
						
							// var dataFrame = new Uint8Array(res1.data);
												
							this.drawFaceLip(this.points);
							
							this.drawFacePoints(this.points);
						}).catch(err=>{
							console.log('失败 哈哈哈',err)
						})
						
					});
			} catch (e) {
				//TODO handle the exception
				console.log('....', e);
			}
			
			// #endif
			// this.onCanvasReady('arcanvas')
		},
		canvasH5Fn(){
			// //通过getElementById()方法获取canvas画布
			// // canvas = document.getElementById('arcanvas');
			// // const canvas = document.querySelector("#arcanvas");
			// //     const gl = canvas.getContext("webgl");

			// canvas = this.$refs.arcanvas.$refs.canvas;
			// console.log(canvas,'。。canvas。。。',this.$refs.arcanvas)
			// // canvas.height = this.canvasObj.height ;
			// // canvas.width = this.canvasObj.width;
			// // gl = uni.createCanvasContext('arcanvas')
			
			// // //通过方法getContext()获取WebGL上下文
			// gl = canvas.getContext('webgl');
			// console.log('。。ctx。。。',gl)
			// // this.initRenderPipeline();
			// Promise.all([this.changeLipStyle(this.imgLipstick),
			// 	this.changeLipStyle(this.imgModel)
			// ]).then(res=>{
			// 	console.log('zhixingwanbi 哈哈哈',res)
			// 	this.initRenderPipeline();
			// 	gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
			// 	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, res[1]);
					
				
			// 	gl.bindTexture(gl.TEXTURE_2D, lipTexture);
			// 	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, res[0]);
			
			// 	// var dataFrame = new Uint8Array(res1.data);
									
			// 	this.drawFaceLip(this.points);
				
			// 	// this.drawFacePoints(this.points);
			// }).catch(err=>{
			// 	console.log('失败 哈哈哈',err)
			// })
			
		},
		loadTexTureH5(gl, n, u_Sampler, image, texUnit) {
		
		      var texture = gl.createTexture() //创建纹理对象
		      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1) //对纹理图像镜像y轴反转 
		      if (texUnit === 0) {
		        gl.activeTexture(gl.TEXTURE0) //激活纹理单元0 
		        g_texUnit = true
		      } else if (texUnit === 1) {
		        gl.activeTexture(gl.TEXTURE1) //激活纹理单元1 
		        g_texUnit1 = true
		      } else if (texUnit === 2) {
		        gl.activeTexture(gl.TEXTURE2) //激活纹理单元2 
		        g_texUnit2 = true
		      }
		
		      gl.bindTexture(gl.TEXTURE_2D, texture) //绑定纹理对象
		      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR) //配置纹理对象参数
		      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image) //纹理图像分配给纹理对象
		      gl.uniform1i(u_Sampler, texUnit) //纹理单元编号传给片元着色器中uniform变量
		
		      //清空canvas
		      gl.clear(gl.COLOR_BUFFER_BIT);
		
		      //纹理图像全部处理完绘制图像
		      if (g_texUnit && g_texUnit1 && g_texUnit2) {
		        gl.drawArrays(gl.TRIANGLE_STRIP, 0, n)
		        gl.deleteTexture(texture)
		      }
		
		    },
		onCanvasReady(id) {
			// #ifdef MP-ALIPAY

			// 页面加载完成
			var self = this;
			translucent = this.translucent * translucentBase;
			lipMarkBeginIndex = this.lipMarkBeginIndex = 84;
			lipScale = this.lipScale = 0.01;
			my._createCanvas({
				id,
				success: c => {
					var systemInfo = my.getSystemInfoSync();
					console.log('。。。systemInfo。。', JSON.stringify(systemInfo));
					c.height = this.canvasObj.height * systemInfo.pixelRatio;
					c.width = this.canvasObj.width * systemInfo.pixelRatio;
					console.log('。。。。。。。my.createCanvas。。success。', c);
					self.gl = c.getContext('webgl');
					gl = self.gl;
					self.canvas = c;
					canvas = c;
					
				},
				fail: () => {
					console.log('。。。。。。。my.createCanvas。。fail。');
				}
			});

			this.initRenderPipeline();
			
			this.changeLipStyle(this.imgLipstick);
			this.faceBeautyFn();
			// #endif
		},


		initRenderPipeline() {
			 var vertCode = 
					  `#version 300 es
					  layout(location = 0) in vec2 a_position;
					  layout(location = 1) in vec3 a_uv;
					  out vec3 uv_out;
					  void main() {
						gl_Position = vec4(a_position, 1.0, 1.0);
						uv_out = a_uv;
						//uv_out = vec2(1.0, 0.0);
					  }
					  `;

				const fragCode = 
					  `#version 300 es
					  precision mediump float;
					  in vec3 uv_out;
					  uniform sampler2D u_texture;
					  uniform sampler2D u_texture2;
					  layout(location = 0) out vec4 outColor;
					  void main() {

						vec2 uv = vec2(uv_out.x, 1.0 - uv_out.y);
						vec3 lipColor = texture(u_texture, uv).xyz;
						vec3 c = lipColor;
						vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
						vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
						vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

						float d = q.x - min(q.w, q.y);
						float e = 1.0e-10;
						vec3 hc = vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);

						hc.y *= 1.2;

						vec4 L = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
						vec3 M = abs(fract(hc.xxx + L.xyz) * 6.0 - L.www);
						vec3 color = hc.z * mix(L.xxx, clamp(M - L.xxx, 0.0, 1.0), hc.y);

						//outColor = vec4(color, 1.0);
						
						
						//vec4 lipColor = texture(u_texture, uv);
						vec4 frameColor = texture(u_texture2, uv_out.xy);
						//vec3 finalColor = lipColor.xyz * lipColor.w + frameColor.xyz * (1.0 - lipColor.w);
						float alpha = texture(u_texture, uv).w;
						//outColor = vec4(color.xyz, alpha);
						outColor = vec4(color.xyz, alpha * uv_out.z);
					  }
					  `;
			
			vertShader = gl.createShader(gl.VERTEX_SHADER);
			gl.shaderSource(vertShader, vertCode);
			gl.compileShader(vertShader);
			console.log("vertShader is compileShader ");
			
			fragShader = gl.createShader(gl.FRAGMENT_SHADER);
			gl.shaderSource(fragShader, fragCode);
			gl.compileShader(fragShader);
			console.log("fragShader is compileShader ");
			
			shaderProgram = gl.createProgram();
			gl.attachShader(shaderProgram, vertShader); 
			gl.attachShader(shaderProgram, fragShader);
			gl.linkProgram(shaderProgram);
			gl.useProgram(shaderProgram);
			console.log("shaderProgram ");

			const FSIZE = 4;

			vertexbuffer = gl.createBuffer();
			const aposlocation = gl.getAttribLocation(shaderProgram, 'a_position');
			gl.enableVertexAttribArray(aposlocation);
			gl.vertexAttribPointer(aposlocation, 3, gl.FLOAT, false, FSIZE * 6, 0);
			console.log("aposlocation： ",aposlocation);

			const auv = gl.getAttribLocation(shaderProgram, 'a_uv');
			gl.enableVertexAttribArray(auv);
			gl.vertexAttribPointer(auv, 3, gl.FLOAT, false, FSIZE * 6, FSIZE * 3);
			console.log("auv： ",auv);
			
			
			var quadVertCode = 
				  `#version 300 es
				  layout(location = 0) in vec2 a_position;
				  layout(location = 1) in vec2 a_uv;
				  out vec2 uv_out;
				  void main() {
					gl_Position = vec4(a_position, 1.0, 1.0);
					uv_out = a_uv;
				  }
				  `;

			const quadFragCode = 
				  `#version 300 es
				  precision mediump float;
				  in vec2 uv_out;
				  uniform sampler2D u_texture;
				  layout(location = 0) out vec4 outColor;
				  void main() {
					vec2 uv = vec2(uv_out.x, uv_out.y);
					outColor = vec4(texture(u_texture, uv).xyz, 1.0);
				  }
				  `;

			quadVertShader = gl.createShader(gl.VERTEX_SHADER);
			gl.shaderSource(quadVertShader, quadVertCode);
			gl.compileShader(quadVertShader);

			quadFragShader = gl.createShader(gl.FRAGMENT_SHADER);
			gl.shaderSource(quadFragShader, quadFragCode);
			gl.compileShader(quadFragShader);

			quadShaderProgram = gl.createProgram();
			gl.attachShader(quadShaderProgram, quadVertShader); 
			gl.attachShader(quadShaderProgram, quadFragShader);
			gl.linkProgram(quadShaderProgram);
			gl.useProgram(quadShaderProgram);


			quadVertexbuffer = gl.createBuffer();
			gl.bindBuffer(gl.ARRAY_BUFFER, quadVertexbuffer);
			gl.bufferData(gl.ARRAY_BUFFER, quadVertex, gl.STATIC_DRAW);

			const qposlocation = gl.getAttribLocation(quadShaderProgram, 'a_position');
			gl.enableVertexAttribArray(qposlocation);
			gl.vertexAttribPointer(qposlocation, 2, gl.FLOAT, false, FSIZE * 4, 0);
			console.log("qposlocation： ",qposlocation);

			const quv = gl.getAttribLocation(quadShaderProgram, 'a_uv');
			gl.enableVertexAttribArray(quv);
			gl.vertexAttribPointer(quv, 2, gl.FLOAT, false, FSIZE * 4, FSIZE * 2);
			console.log("quv： ",quv);
			
			gl.useProgram(0);

			lipTexture = gl.createTexture();
			gl.bindTexture(gl.TEXTURE_2D, lipTexture);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);


			cameraTexture = gl.createTexture();
			gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

			gl.bindTexture(0);

			lipPoints = [];
			lipPointsScale = [];
			lipPointsUnScale = [];
			const lipPointCount = 106 * 2;
			for (var i = 0; i < lipPointCount; i++) {
			  lipPoints.push(0.0);
			  lipPoints.push(0.0);
			  lipPoints.push(0.0);
			  lipPoints.push(0.0);
			  lipPoints.push(0.0);
			}

			
		},
		releaseRenderFacePoints() {
			gl.deleteShader(this.facePoints.vertShader);
			gl.deleteShader(this.facePoints.fragShader);
			gl.deleteProgram(this.facePoints.shaderProgram);
		},
		releaseRenderResource() {
			gl.deleteShader(vertShader);
			gl.deleteShader(fragShader);
			gl.deleteProgram(shaderProgram);
			gl.deleteShader(quadVertShader);
			gl.deleteShader(quadFragShader);
			gl.deleteProgram(quadShaderProgram);
			gl.deleteBuffer(vertexbuffer);
			gl.deleteTexture(lipTexture);
			gl.deleteTexture(cameraTexture);
			this.releaseRenderFacePoints();
		},
		drawFaceLip(points) {
			const lipPointCount = lipIndex.length;
			for (var i = 0; i < lipPointCount; i++) {
			  var index = lipIndex[i];
			        lipPoints[i * 5] = points[index][0];
			        lipPoints[i * 5 + 1] = points[index][1];
			        lipPoints[i * 5 + 2] = lipTexCoordnate[2 * (index - lipMarkBeginIndex)];
			        lipPoints[i * 5 + 3] = lipTexCoordnate[2 * (index - lipMarkBeginIndex) + 1];
			        lipPoints[i * 5 + 4] = translucent;
			}

			

			gl.bindBuffer(gl.ARRAY_BUFFER, vertexbuffer);
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lipPoints), gl.STREAM_DRAW);

			gl.clearColor(0.0,0.0,0.0,0.0);
			// gl.clearDepth(1.0);
			gl.clear(gl.COLOR_BUFFER_BIT);
			gl.disable(gl.DEPTH_TEST);
			


			const FSIZE = 4;

			//Pass one
			gl.disable(gl.BLEND);
			gl.bindBuffer(gl.ARRAY_BUFFER, quadVertexbuffer);
			console.log('draw quadVertexbuffer:',quadVertexbuffer)

			const qposlocation = gl.getAttribLocation(quadShaderProgram, 'a_position');
			gl.vertexAttribPointer(qposlocation, 2, gl.FLOAT, false, FSIZE * 4, 0);
			gl.enableVertexAttribArray(qposlocation);
			console.log('draw qposlocation:',qposlocation)
			

			const quv = gl.getAttribLocation(quadShaderProgram, 'a_uv');
			gl.vertexAttribPointer(quv, 2, gl.FLOAT, false, FSIZE * 4, FSIZE * 2);
			gl.enableVertexAttribArray(quv);
			console.log('draw quv:',quv)
			
			
			gl.activeTexture(gl.TEXTURE0);
			gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
			gl.useProgram(quadShaderProgram);
			//gl.polygonMode(gl.FRONT_AND_BACK, gl.FILL);
			gl.drawArrays(gl.TRIANGLES, 0, 6);
			console.log('draw drawArrays zhengge :')
			
			
			//Pass two
			gl.enable(gl.BLEND);
			// gl.enable(gl.DEPTH_TEST);
			// gl.depthFunc(gl.LESS);
			gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
			gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
			gl.bindBuffer(gl.ARRAY_BUFFER, vertexbuffer);
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lipPoints), gl.STREAM_DRAW);

			const aposlocation = gl.getAttribLocation(shaderProgram, 'a_position');
			gl.vertexAttribPointer(aposlocation, 2, gl.FLOAT, false, FSIZE * 5, 0);
			gl.enableVertexAttribArray(aposlocation);
			console.log('draw aposlocation :',aposlocation)

			const auv = gl.getAttribLocation(shaderProgram, 'a_uv');
			gl.vertexAttribPointer(auv, 3, gl.FLOAT, false, FSIZE * 5, FSIZE * 2);
			gl.enableVertexAttribArray(auv);
			console.log('draw auv :',auv)
			
			gl.activeTexture(gl.TEXTURE0);
			gl.bindTexture(gl.TEXTURE_2D, lipTexture);
			gl.activeTexture(gl.TEXTURE1);
			gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
			gl.useProgram(shaderProgram);
			//gl.polygonMode(gl.FRONT_AND_BACK, gl.LINE);
			
			gl.drawArrays(gl.TRIANGLES, 0, 60);
		},
		
		changeLipStyle(lipTexturePath) {
			//let imgPath = '/static/images/lipColor.png';
			// //唇彩图片
			// var img;
			// //唇彩图片路径
			// var imgPath;
			
			return new Promise((resolve,reject)=>{
				
				console.log(canvas,this.canvas, '......图片.this.canvas.', lipTexturePath);
				let imgPath = lipTexturePath;
				let img1 = canvas.createImage();
				img1.onload =  (res) => {
					resolve(img1)
					console.log(lipTexture,'......图片..', res, img);
					
				};
				img1.onerror = res => {
					console.log('......图片错误..', res, img);
					reject()
				};
				img1.src = imgPath;
				
			})
			
		},

		updateFaceData(data, width, height) {
			var dataFrame = new Uint8Array(data);
			gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, dataFrame);
		},
		drawFacePoints(points) {
			var pointCount = points.length;
			if (pointCount == 0) return;
			var vertices = [];
			for (var i = 0; i < pointCount; i++) {
				vertices.push(points[i][0]);
				vertices.push(points[i][1]);
				vertices.push(0.0);
			}

			// Create an empty buffer object to store the vertex buffer
			var vertex_buffer = gl.createBuffer();

			//Bind appropriate array buffer to it
			gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

			// Pass the vertex data to the buffer
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
			// Unbind the buffer
			gl.bindBuffer(gl.ARRAY_BUFFER, null);

			/*=========================Shaders========================*/

			// vertex shader source code
			var vertCode = `attribute vec3 coordinates;
		    void main(void) {
				gl_Position = vec4(coordinates, 1.0);
				gl_PointSize = 5.0;
		    }`;

			// Create a vertex shader object
			this.facePoints.vertShader = gl.createShader(gl.VERTEX_SHADER);
			// Attach vertex shader source code
			gl.shaderSource(this.facePoints.vertShader, vertCode);

			// Compile the vertex shader
			gl.compileShader(this.facePoints.vertShader);

			// fragment shader source code
			var fragCode = `precision mediump float;
			uniform vec4 u_FragColor;
			void main(){
			    gl_FragColor=u_FragColor;
			}`;

			// Create fragment shader object
			this.facePoints.fragShader = gl.createShader(gl.FRAGMENT_SHADER);

			// Attach fragment shader source code
			gl.shaderSource(this.facePoints.fragShader, fragCode);

			// Compile the fragmentt shader
			gl.compileShader(this.facePoints.fragShader);

			// Create a shader program object to store
			// the combined shader program
			this.facePoints.shaderProgram = gl.createProgram();

			// Attach a vertex shader
			gl.attachShader(this.facePoints.shaderProgram, this.facePoints.vertShader);

			// Attach a fragment shader
			gl.attachShader(this.facePoints.shaderProgram, this.facePoints.fragShader);

			// Link both programs
			gl.linkProgram(this.facePoints.shaderProgram);

			// Use the combined shader program object
			gl.useProgram(this.facePoints.shaderProgram);

			/*======== Associating shaders to buffer objects ========*/

			// Bind vertex buffer object
			gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

			// Get the attribute location
			var coord = gl.getAttribLocation(this.facePoints.shaderProgram, 'coordinates');

			// Point an attribute to the currently bound VBO
			gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);

			//获取uniform 变量
			const u_FragColor = gl.getUniformLocation(this.facePoints.shaderProgram, 'u_FragColor');
			let rgba = this.isShowFacePoints ? 1.0 : 0.0;
			//修改uniform 变量
			gl.uniform4f(u_FragColor, 1.0, 0.0, 0.0, 1.0);

			// gl.clearColor(0.0,0.0,0.0,0.0);
			// gl.clear(gl.COLOR_BUFFER_BIT);
			// Draw the triangle
			gl.drawArrays(gl.POINTS, 0, pointCount);
		}
	},
	mounted() {},
	onShow() {
		// this.$nextTick(() => {
		// 	this.$refs.brightness.getScreenBrightness()
		// })
	},
	async onLoad() {},
	beforeDestroy() {
		// 退出释放资源
		this.releaseRenderResource();
	},
	onUnload() {},
	onHide() {}
};
</script>
<style>
.container {
	position: relative;
	width: 100vw;
	height: 100vh;
}
.mode-img {
	position: absolute;
	width: 100%;
	height: 100%;
}
#arcanvas {
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 11;
}
</style>
