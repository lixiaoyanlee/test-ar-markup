<template>
	<view class="container">
		<image
			:src="imgModel"
			class="mode-img"
			@load="imgLoad"
			:style="{ width: canvasObj.width + 'px', height: canvasObj.height + 'px', top: canvasObj.top + 'px', left: canvasObj.left + 'px' }"
		></image>
		<canvas
			id="arcanvas"
			type="webgl"
			
			:style="{ width: canvasObj.width + 'px', height: canvasObj.height + 'px', top: canvasObj.top + 'px', left: canvasObj.left + 'px' }"
		></canvas>
	</view>
</template>

<script>
var canvas;
var gl;

var w = 0;
var h = 0;

//唇彩特效透明度
var translucent;
var translucentBase = 1;

//唇彩图片
var img;
//唇彩图片路径
var imgPath;

//德劳内三角化退化成查找表
const lipIndex = new Int32Array([
	84,
	85,
	96,
	96,
	85,
	97,
	97,
	85,
	86,
	97,
	86,
	87,
	97,
	87,
	98,
	98,
	87,
	88,
	98,
	88,
	99,
	99,
	88,
	89,
	99,
	89,
	100,
	100,
	89,
	90,
	84,
	96,
	95,
	95,
	96,
	103,
	95,
	103,
	94,
	94,
	103,
	102,
	94,
	102,
	93,
	93,
	102,
	101,
	93,
	101,
	92,
	92,
	101,
	91,
	91,
	101,
	100,
	91,
	100,
	90
]);

//关键点缩放的点对索引
const lipScaleIndex = new Int32Array([
	84,
	96,
	96,
	84,
	85,
	97,
	86,
	97,
	97,
	86,
	87,
	98,
	98,
	87,
	88,
	99,
	99,
	88,
	89,
	99,
	90,
	100,
	100,
	90,
	91,
	101,
	92,
	101,
	101,
	92,
	93,
	102,
	102,
	93,
	94,
	103,
	103,
	94,
	95,
	103
]);

//纹理坐标
const lipTexCoordnate = new Float32Array([
	0,
	0.5,
	0.153,
	0.686,
	0.368,
	0.741,
	0.5,
	0.693,
	0.632,
	0.741,
	0.847,
	0.686,
	1,
	0.5,
	0.863,
	0.311,
	0.677,
	0.24,
	0.5,
	0.212,
	0.323,
	0.24,
	0.137,
	0.311,
	0.072,
	0.499,
	0.363,
	0.504,
	0.5,
	0.488,
	0.637,
	0.504,
	0.928,
	0.499,
	0.637,
	0.475,
	0.5,
	0.464,
	0.363,
	0.475
]);

const quadVertex = new Float32Array([-1.0, 1.0, 0.0, 0.0, -1.0, -1.0, 0.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, -1.0, 1.0, 0.0, 0.0]);

const lipVertex = new Float32Array([
	-1.0,
	1.0,
	0.0,
	0.0,
	1.0,
	-1.0,
	-1.0,
	0.0,
	1.0,
	1.0,
	1.0,
	-1.0,
	1.0,
	1.0,
	1.0,
	1.0,
	-1.0,
	1.0,
	1.0,
	1.0,
	1.0,
	1.0,
	1.0,
	0.0,
	1.0,
	-1.0,
	1.0,
	0.0,
	0.0,
	1.0
]);

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
			canvasObj: {
				width: 0,
				height: 0,
				top: 0,
				left: 0,
				pixelRatio: 1
			},
			gl: null,
			canvas: null,
			lipMarkBeginIndex: null, //阿里ar sdk嘴唇关键点起始索引
			lipScale: null, //嘴唇面片缩放系数
			facePoints: {},
			points84By63: [
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
			isShowFacePoints: false
		};
	},
	props: {},
	components: {},
	computed: {},
	created() {
		// this.setCanvasWh();
	},
	watch: {
		translucent(val) {
			console.log(canvas, gl, this.gl, '。。。11。。translucent。。。。', val);
			// 透明度 0-1
			if (!canvas || !gl) return;
			// console.log('。。。。。translucent。。。。', val);
			if (typeof val === 'number') {
				translucent = val * translucentBase;
			}
		},
		faceBeautyLevel(val) {
			console.log('。。。11。。faceBeautyLevel。。。。', val);
			// 是否美颜
			if (!this.arcameracontext) return;
			// console.log('。。isFaceBeauty。。。是否美颜。。。。',this.faceBeautyLevel)
			if (val) {
				this.arcameracontext.faceBeauty({ level: val });
			} else {
				this.arcameracontext.faceBeauty({ level: 0 });
			}
		},
		imgLipstick(val) {
			// 口红色号图片
			if (!canvas || !gl) return;
			if (val && typeof val === 'string') {
				translucent = this.translucent * translucentBase;
				this.changeLipStyle(val);
			} else {
				translucent = 0;
			}
		},
		isFaceBeauty(val) {
			// 是否美颜
			if (!this.arcameracontext) return;
			// console.log('。。isFaceBeauty。。。是否美颜。。。。',this.faceBeautyLevel)
			if (val) {
				this.arcameracontext.faceBeauty({ level: this.faceBeautyLevel });
			} else {
				this.arcameracontext.faceBeauty({ level: 0 });
			}
		}
	},
	onReady() {},
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
			this.canvasWxFn();
		},
		canvasWxFn() {
			// #ifdef MP-WEIXIN
			var self = this;
			translucent = this.translucent * translucentBase;
			this.lipMarkBeginIndex = 84;
			this.lipScale = 0.01;

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
						console.log('。。。。。。。uni.createCanvas。。success。', gl);

						// this.initRenderPipeline();
						// this.changeLipStyle(this.imgLipstick);

						this.handleARFrame1();
					});
			} catch (e) {
				//TODO handle the exception
				console.log('....', e);
			}

			// #endif
		},
		onCanvasReady(id) {
			console.log('。。。。。onCanvasReadyonCanvasReady。。。。。。', id);
			// 页面加载完成
			var self = this;
			translucent = this.translucent * translucentBase;
			this.lipMarkBeginIndex = 84;
			this.lipScale = 0.01;
			// #ifdef MP-ALIPAY
			uni.createCanvas({
				id,
				success: c => {
					var systemInfo = uni.getSystemInfoSync();
					console.log('。。。systemInfo。。', JSON.stringify(systemInfo));
					c.height = this.canvasObj.height * this.canvasObj.pixelRatio;
					c.width = this.canvasObj.width * this.canvasObj.pixelRatio;
					console.log('。。。。。。。uni.createCanvas。。success。', c);
					self.gl = c.getContext('webgl');
					gl = self.gl;
					self.canvas = c;
					canvas = c;
					self.initRenderPipeline();

					self.changeLipStyle(self.imgLipstick);
				},
				fail: () => {
					console.log('。。。。。。。uni.createCanvas。。fail。');
				}
			});

			this.faceBeautyFn();
			// #endif

			// #ifdef H5

			//  #endif
		},

		faceBeautyFn() {
			// #ifdef MP-ALIPAY
			this.arcameracontext = uni.createArCameraContext('arcamera');
			if (this.isFaceBeauty) {
				setTimeout(() => {
					this.arcameracontext.faceBeauty({ level: this.faceBeautyLevel });
				}, 500);
			}
			// #endif
		},
		handleARFrame(data) {
			// console.log(data.detail.width,data.detail.height);

			var data1 = data.detail;
			var rawPoints = data1.anchors[0].landmarks;
			function transformPoint(point, fw, fh) {
				return [(point[0] / fw) * 2 - 1, (1 - point[1] / fh) * 2 - 1];
			}
			var points = [];

			for (var i = 0; i < len; i++) {
				points.push(transformPoint([rawPoints[i * 2], rawPoints[i * 2 + 1]], this.imgWidth, this.imgHeight));
			}

			// if(data1.capturedImage){
			// 	this.updateFaceData(data1.capturedImage, data1.width, data1.height);
			// }

			// this.updateFaceData();
			// // console.log('...gl 出来了么....',gl)
			// this.drawFaceLip(points);
			this.drawFacePoints(points);
		},
		handleARFrame1() {
			var rawPoints = this.points84By63;
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
			var points = [];

			for (var i = 0; i < 106; i++) {
				points.push(transformPoint([rawPoints[i * 2], rawPoints[i * 2 + 1]], this.imgWidth, this.imgHeight));
			}

			// if(data1.capturedImage){
			// 	this.updateFaceData(data1.capturedImage, data1.width, data1.height);
			// }

			// this.updateFaceData1();
			console.log(points,'...gl 出来了么....',this.imgWidth,this.imgHeight)
			// this.drawFaceLip(points);
			this.drawFacePoints(points);
		},
		initRenderPipeline() {
			var vertCode = `#version 300 es
			          layout(location = 0) in vec2 a_position;
			          layout(location = 1) in vec3 a_uv;
			          out vec3 uv_out;
			          void main() {
			            gl_Position = vec4(a_position, 1.0, 1.0);
			            uv_out = a_uv;
			            //uv_out = vec2(1.0, 0.0);
			          }
			          `;

			const fragCode = `#version 300 es
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

			fragShader = gl.createShader(gl.FRAGMENT_SHADER);
			gl.shaderSource(fragShader, fragCode);
			gl.compileShader(fragShader);

			shaderProgram = gl.createProgram();
			gl.attachShader(shaderProgram, vertShader);
			gl.attachShader(shaderProgram, fragShader);
			gl.linkProgram(shaderProgram);
			gl.useProgram(shaderProgram);

			const FSIZE = 4;

			vertexbuffer = gl.createBuffer();
			const aposlocation = gl.getAttribLocation(shaderProgram, 'a_position');
			gl.enableVertexAttribArray(aposlocation);
			gl.vertexAttribPointer(aposlocation, 2, gl.FLOAT, false, FSIZE * 5, 0);

			const auv = gl.getAttribLocation(shaderProgram, 'a_uv');
			gl.enableVertexAttribArray(auv);
			gl.vertexAttribPointer(auv, 3, gl.FLOAT, false, FSIZE * 5, FSIZE * 2);

			var quadVertCode = `#version 300 es
				  layout(location = 0) in vec2 a_position;
				  layout(location = 1) in vec2 a_uv;
				  out vec2 uv_out;
				  void main() {
					gl_Position = vec4(a_position, 1.0, 1.0);
					uv_out = a_uv;
				  }
				  `;

			const quadFragCode = `#version 300 es
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

			const quv = gl.getAttribLocation(quadShaderProgram, 'a_uv');
			gl.enableVertexAttribArray(quv);
			gl.vertexAttribPointer(quv, 2, gl.FLOAT, false, FSIZE * 4, FSIZE * 2);

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

				lipPointsScale.push(0.0);
				lipPointsScale.push(0.0);
				lipPointsUnScale.push(0.0);
				lipPointsUnScale.push(0.0);
			}

			lipPointsIndex = [];
			const lipPointsIndexCount = lipIndex.length;
			for (var i = 0; i < lipPointsIndexCount; i++) {
				lipPointsIndex.push(i);
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
		ScaleLipKeyPoint(index1, index2, scaleIntensity) {
			var x_index1 = lipPointsUnScale[index1 * 2];
			var y_index1 = lipPointsUnScale[index1 * 2 + 1];

			var x_index2 = lipPointsUnScale[index2 * 2];
			var y_index2 = lipPointsUnScale[index2 * 2 + 1];

			var x_vector_index1 = x_index1 - x_index2;
			var y_vector_index1 = y_index1 - y_index2;

			var vector_index1_length = Math.sqrt(x_vector_index1 * x_vector_index1 + y_vector_index1 * y_vector_index1);
			var x_vector_index1_nor = x_vector_index1 / vector_index1_length;
			var y_vector_index1_nor = y_vector_index1 / vector_index1_length;

			if (index1 == 1 || index1 == 5 || index1 == 11 || index1 == 7) {
				scaleIntensity = scaleIntensity * 2.3;
			}

			var x_vector_index1_scale = x_vector_index1_nor * scaleIntensity;
			var y_vector_index1_scale = y_vector_index1_nor * scaleIntensity;

			lipPointsScale[index1 * 2] = x_vector_index1_scale + x_index1;
			lipPointsScale[index1 * 2 + 1] = y_vector_index1_scale + y_index1;

			//console.error(index1 * 2, lipPointsScale[index1 * 2]);
			//console.error(index1 * 2 + 1, lipPointsScale[index1 * 2 + 1]);
		},
		//////////////////////////////////////////////////////
		//用于将上下嘴唇扩大之后交错在一起的关键点进行缩放，缓解唇彩重叠的问题，保留代码，暂不使用
		adjustLipOverlap(index1, index2, index3, index4) {
			var x_index1 = lipPointsUnScale[index1 * 2];
			var y_index1 = lipPointsUnScale[index1 * 2 + 1];

			var x_index2 = lipPointsUnScale[index2 * 2];
			var y_index2 = lipPointsUnScale[index2 * 2 + 1];

			var x_index3 = lipPointsUnScale[index3 * 2];
			var y_index3 = lipPointsUnScale[index3 * 2 + 1];

			var x_index4 = lipPointsUnScale[index4 * 2];
			var y_index4 = lipPointsUnScale[index4 * 2 + 1];

			var x_vector_index14 = x_index1 - x_index4;
			var y_vector_index14 = y_index1 - y_index4;

			var x_vector_index34 = x_index3 - x_index4;
			var y_vector_index34 = y_index3 - y_index4;

			var vector_index14_length = Math.sqrt(x_vector_index14 * x_vector_index14 + y_vector_index14 * y_vector_index14);
			var vector_index34_length = Math.sqrt(x_vector_index34 * x_vector_index34 + y_vector_index34 * y_vector_index34);

			if (vector_index14_length < vector_index34_length) {
				var x_vector_index13 = x_index1 - x_index3;
				var y_vector_index13 = y_index1 - y_index3;

				var vector_index13_length = Math.sqrt(x_vector_index13 * x_vector_index13 + y_vector_index13 * y_vector_index13);

				var x_vector_index12 = x_index1 - x_index2;
				var y_vector_index12 = y_index1 - y_index2;
				var vector_index12_length = Math.sqrt(x_vector_index12 * x_vector_index12 + y_vector_index12 * y_vector_index12);

				var x_vector_index12_nor = x_vector_index12 / vector_index12_length;
				var y_vector_index12_nor = y_vector_index12 / vector_index12_length;

				var x_vector_index12_offset = x_vector_index12_nor * vector_index13_length * 0.5;
				var y_vector_index12_offset = y_vector_index12_nor * vector_index13_length * 0.5;

				lipPointsScale[index1 * 2] = lipPointsScale[index1 * 2] - x_vector_index12_offset;
				lipPointsScale[index1 * 2 + 1] = lipPointsScale[index1 * 2 + 1] - y_vector_index12_offset;

				var x_vector_index34_nor = x_vector_index34 / vector_index34_length;
				var y_vector_index34_nor = y_vector_index34 / vector_index34_length;

				var x_vector_index34_offset = x_vector_index34_nor * vector_index13_length * 0.5;
				var y_vector_index34_offset = y_vector_index34_nor * vector_index13_length * 0.5;

				lipPointsScale[index3 * 2] = lipPointsScale[index3 * 2] - x_vector_index34_offset;
				lipPointsScale[index3 * 2 + 1] = lipPointsScale[index3 * 2 + 1] - y_vector_index34_offset;
			}
		},

		//////////////////////////////////////////////////////
		//判断如果关键点98和关键点102交错了，就不移动97，98，99，101，102，103这几个关键点，防止嘴唇重叠在一起
		adjustLipPosition(index1, index2, index3, index4) {
			var x_index1 = lipPointsUnScale[index1 * 2];
			var y_index1 = lipPointsUnScale[index1 * 2 + 1];

			var x_index2 = lipPointsUnScale[index2 * 2];
			var y_index2 = lipPointsUnScale[index2 * 2 + 1];

			var x_index3 = lipPointsUnScale[index3 * 2];
			var y_index3 = lipPointsUnScale[index3 * 2 + 1];

			var x_index4 = lipPointsUnScale[index4 * 2];
			var y_index4 = lipPointsUnScale[index4 * 2 + 1];

			var x_vector_index14 = x_index1 - x_index4;
			var y_vector_index14 = y_index1 - y_index4;

			var x_vector_index34 = x_index3 - x_index4;
			var y_vector_index34 = y_index3 - y_index4;

			var vector_index14_length = Math.sqrt(x_vector_index14 * x_vector_index14 + y_vector_index14 * y_vector_index14);
			var vector_index34_length = Math.sqrt(x_vector_index34 * x_vector_index34 + y_vector_index34 * y_vector_index34);

			const lipPointCount = lipIndex.length;
			for (var i = 0; i < lipPointCount; i++) {
				var index = lipIndex[i];
				lipPoints[i * 5] = lipPointsScale[(index - this.lipMarkBeginIndex) * 2];
				lipPoints[i * 5 + 1] = lipPointsScale[(index - this.lipMarkBeginIndex) * 2 + 1];
			}

			if (vector_index14_length < vector_index34_length) {
				for (var i = 0; i < lipPointCount; i++) {
					var index = lipIndex[i];
					if (index == 97 || index == 98 || index == 99 || index == 101 || index == 102 || index == 103) {
						lipPoints[i * 5] = lipPointsUnScale[(index - this.lipMarkBeginIndex) * 2];
						lipPoints[i * 5 + 1] = lipPointsUnScale[(index - this.lipMarkBeginIndex) * 2 + 1];
					}
				}
			}
		},
		drawFaceLip(points) {
			const lipPointCount = lipIndex.length;
			for (var i = 0; i < lipPointCount; i++) {
				var index = lipIndex[i];
				lipPoints[i * 5] = points[index][0];
				lipPoints[i * 5 + 1] = points[index][1];
				lipPoints[i * 5 + 2] = lipTexCoordnate[2 * (index - this.lipMarkBeginIndex)];
				lipPoints[i * 5 + 3] = lipTexCoordnate[2 * (index - this.lipMarkBeginIndex) + 1];
				lipPoints[i * 5 + 4] = translucent;
				//console.error(i * 5, lipPoints[i * 5]);
				//console.error(i * 5 + 1, lipPoints[i * 5 + 1]);
			}

			//缩放关键点坐标
			const lipUnScalePointCount = 20;
			for (var i = 0; i < lipUnScalePointCount; i++) {
				var index = i + this.lipMarkBeginIndex;
				lipPointsUnScale[i * 2] = points[index][0];
				lipPointsUnScale[i * 2 + 1] = points[index][1];
				lipPointsScale[i * 2] = points[index][0];
				lipPointsScale[i * 2 + 1] = points[index][1];
			}

			const lipScaleCount = lipScaleIndex.length;
			for (var i = 0; i < lipScaleCount; i = i + 2) {
				var index1 = lipScaleIndex[i] - this.lipMarkBeginIndex;
				var index2 = lipScaleIndex[i + 1] - this.lipMarkBeginIndex;
				this.ScaleLipKeyPoint(index1, index2, this.lipScale);
			}

			this.adjustLipPosition(98 - this.lipMarkBeginIndex, 87 - this.lipMarkBeginIndex, 102 - this.lipMarkBeginIndex, 93 - this.lipMarkBeginIndex);

			//////////////////////////////////////////////////////
			//保留代码，暂不使用
			// for (var i = 0; i < lipPointCount; i++) {
			//   var index = lipIndex[i];
			//   lipPoints[i * 5] = lipPointsScale[(index - this.lipMarkBeginIndex) * 2];
			//   lipPoints[i * 5 + 1] = lipPointsScale[(index - this.lipMarkBeginIndex) * 2 + 1];
			// }

			// //防止扩大后的网格交叠到一起
			// this.adjustLipOverlap(97 - this.lipMarkBeginIndex, 86 - this.lipMarkBeginIndex, 103 - this.lipMarkBeginIndex, 94 - this.lipMarkBeginIndex);
			// this.adjustLipOverlap(98 - this.lipMarkBeginIndex, 87 - this.lipMarkBeginIndex, 102 - this.lipMarkBeginIndex, 93 - this.lipMarkBeginIndex);
			// this.adjustLipOverlap(99 - this.lipMarkBeginIndex, 88 - this.lipMarkBeginIndex, 101 - this.lipMarkBeginIndex, 92 - this.lipMarkBeginIndex);
			// ////////////////////////////////////////////////////

			gl.bindBuffer(gl.ARRAY_BUFFER, vertexbuffer);
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lipPoints), gl.STREAM_DRAW);

			gl.clearColor(0.0, 0.0, 0.0, 0.0);
			gl.clear(gl.COLOR_BUFFER_BIT);
			gl.disable(gl.DEPTH_TEST);

			const FSIZE = 4;

			//Pass one
			gl.disable(gl.BLEND);
			gl.bindBuffer(gl.ARRAY_BUFFER, quadVertexbuffer);

			const qposlocation = gl.getAttribLocation(quadShaderProgram, 'a_position');
			gl.enableVertexAttribArray(qposlocation);
			gl.vertexAttribPointer(qposlocation, 2, gl.FLOAT, false, FSIZE * 4, 0);

			const quv = gl.getAttribLocation(quadShaderProgram, 'a_uv');
			gl.enableVertexAttribArray(quv);
			gl.vertexAttribPointer(quv, 2, gl.FLOAT, false, FSIZE * 4, FSIZE * 2);

			gl.activeTexture(gl.TEXTURE0);
			gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
			gl.useProgram(quadShaderProgram);
			//gl.polygonMode(gl.FRONT_AND_BACK, gl.FILL);
			gl.drawArrays(gl.TRIANGLES, 0, 6);

			//Pass two
			gl.enable(gl.BLEND);
			gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
			gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
			gl.bindBuffer(gl.ARRAY_BUFFER, vertexbuffer);
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lipPoints), gl.STREAM_DRAW);

			const aposlocation = gl.getAttribLocation(shaderProgram, 'a_position');
			gl.enableVertexAttribArray(aposlocation);
			gl.vertexAttribPointer(aposlocation, 2, gl.FLOAT, false, FSIZE * 5, 0);

			const auv = gl.getAttribLocation(shaderProgram, 'a_uv');
			gl.enableVertexAttribArray(auv);
			gl.vertexAttribPointer(auv, 3, gl.FLOAT, false, FSIZE * 5, FSIZE * 2);

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
			console.log(this.canvas, '......图片.this.canvas.', lipTexturePath);
			let imgPath = lipTexturePath;
			let img = this.canvas.createImage();
			img.onload = res => {
				console.log('......图片..', res, img);
				gl.bindTexture(gl.TEXTURE_2D, lipTexture);
				gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
			};
			img.onerror = res => {
				console.log('......图片错误..', res, img);
			};
			img.src = imgPath;
			
			// let poster = this.canvas.createImage();
			// wx.getImageInfo({
			//    src: lipTexturePath, //图片的网络地址
			//    success: (res) => {
			//      poster.src = res.path //图片缓存地址
			//      poster.onload = (e) => {
			//        // ctx.drawImage(poster, 0, 0, 200, 200)
			// 	console.log(lipTexture, '......图片..', e, poster);
			//      }
			//    }
			// })
		},

		updateFaceData(data, width, height) {
			var dataFrame = new Uint8Array(data);
			gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, dataFrame);
		},
		updateFaceData1() {
			uni.getImageInfo({
				src: this.imgModel,
				success: res => {
					console.log('getImageInfo', res);
					uni.getFileSystemManager().readFile({
						filePath: res.path, // 选择图片返回的相对路径
						// encoding: 'base64', // 编码格式
						success: res1 => {
							// 成功的回调
							console.log('--将图片图片转为base64方法toBase64  success--', res1);
							gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
							gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, res.width, res.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, res1.data);
						},
						fail: err => {
							console.log('--将图片图片转为base64方法toBase64 fail--', err);
							reject(err);
						}
					});
				}
			});
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
			var vertCode =
			  'attribute vec3 coordinates;' +
			
			  'void main(void) {' +
			     ' gl_Position = vec4(coordinates, 1.0);' +
			     'gl_PointSize = 10.0;'+
			  '}';
			
			// Create a vertex shader object
			var vertShader = gl.createShader(gl.VERTEX_SHADER);
			
			// Attach vertex shader source code
			gl.shaderSource(vertShader, vertCode);
			
			// Compile the vertex shader
			gl.compileShader(vertShader);
			
			// fragment shader source code
			var fragCode =
			  'void main(void) {' +
			     ' gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);' +
			  '}';
			
			// Create fragment shader object
			var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
			
			// Attach fragment shader source code
			gl.shaderSource(fragShader, fragCode);
			
			// Compile the fragmentt shader
			gl.compileShader(fragShader);
			
			// Create a shader program object to store
			// the combined shader program
			var shaderProgram = gl.createProgram();
			
			// Attach a vertex shader
			gl.attachShader(shaderProgram, vertShader); 
			
			// Attach a fragment shader
			gl.attachShader(shaderProgram, fragShader);
			
			// Link both programs
			gl.linkProgram(shaderProgram);
			
			// Use the combined shader program object
			gl.useProgram(shaderProgram);
			
			/*======== Associating shaders to buffer objects ========*/
			
			// Bind vertex buffer object
			gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
			
			// Get the attribute location
			var coord = gl.getAttribLocation(shaderProgram, "coordinates");
			
			// Point an attribute to the currently bound VBO
			gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
			
			// Enable the attribute
			gl.enableVertexAttribArray(coord);
			
			gl.clearColor(0.0,0.0,0.0,0.0);
			gl.clear(gl.COLOR_BUFFER_BIT);
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
	width: 100%;
	height: 100%;
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
