<template>
	<view class="container">
		<image
			:src="imgModel"
			class="mode-img"
			@load="imgLoad"
			:style="{ width: canvasObj.width + 'px', height: canvasObj.height + 'px', top: canvasObj.top + 'px', left: canvasObj.left + 'px' }"
		></image>
		<button style="position: absolute;top: 100px; "> 哈哈哈</button>
		<canvas
			id="arcanvas"
			type="webgl"
			
			:style="{ width: canvasObj.width + 'px', height: canvasObj.height + 'px', top: canvasObj.top + 'px', left: canvasObj.left + 'px' }"
		></canvas>
		<button style="position: absolute;top: 200px; z-index: 22;"> 略略</button>
		
	</view>
</template>

<script>
	var VSHADER_SOURCE = "" +
	  "attribute vec4 a_position;" +//
	  "attribute vec2 a_texCoord;" +//
	  "varying vec2 v_texCoord;" +//
	  "void main(){\n" +
	  "   gl_Position = a_position;" +
	  "   v_texCoord = a_texCoord;" +//
	  "}";
	
	var FSHADER_SOURCE = "" +
	  "precision mediump float;" +//
	  "uniform sampler2D u_image;" +//
	  "varying vec2 v_texCoord;" +//
	  "void main(){" +
	  "   gl_FragColor = texture2D(u_image,v_texCoord);" +//
	  "}";
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
	
//纹理坐标
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
	//顶点坐标   纹理坐标
	//------\\ //----\\
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
var lipMarkBeginIndex = 84;
var dataFrame;
// var points = []
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
			this.handleARFrame1();
			// #ifdef MP-WEIXIN
			var self = this;
			translucent = 0.7;
			lipMarkBeginIndex = this.lipMarkBeginIndex = 84;
			// this.lipScale = 0.01;

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
						
						Promise.all([this.changeLipStyle(this.imgLipstick),
							// this.updateFaceData1()
							this.changeLipStyle(this.imgModel)
						]).then(res=>{
							console.log('zhixingwanbi 哈哈哈',res)
							// this.initRenderPipeline();
							// gl.bindTexture(gl.TEXTURE_2D, lipTexture);
							// gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, res[0]);
							
							this.quadRenderPipeline();
							this.lipRenderPipeline()
							// var dataFrame = new Uint8Array(res1.data);
							// gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
							// gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, res[1].width, res[1].height, 0, gl.RGBA, gl.UNSIGNED_BYTE, res[1].data);
							// this.drawFaceLip(this.points);
							this.drawQuan(res[1])
							this.drawLip(res[0])
							// this.drawFacePoints(this.points);
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
					// c.height = this.canvasObj.height * this.canvasObj.pixelRatio;
					// c.width = this.canvasObj.width * this.canvasObj.pixelRatio;
					console.log('。。。。。。。uni.createCanvas。。success。', c);
					self.gl = c.getContext('webgl');
					gl = self.gl;
					self.canvas = c;
					canvas = c;
					
					Promise.all([this.changeLipStyle(this.imgLipstick),
						// this.updateFaceData1()
						this.changeLipStyle(this.imgModel)
					]).then(res=>{
						console.log('zhixingwanbi 哈哈哈',res)
						// this.initRenderPipeline();
						// gl.bindTexture(gl.TEXTURE_2D, lipTexture);
						// gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, res[0]);
						
						this.quadRenderPipeline();
						// this.lipRenderPipeline()
						// var dataFrame = new Uint8Array(res1.data);
						// gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
						// gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, res[1].width, res[1].height, 0, gl.RGBA, gl.UNSIGNED_BYTE, res[1].data);
						// this.drawFaceLip(this.points);
						this.drawQuan(res[1])
						// this.drawLip(res[0])
						// this.drawFacePoints(this.points);
					}).catch(err=>{
						console.log('失败 哈哈哈',err)
					})
				},
				fail: () => {
					console.log('。。。。。。。uni.createCanvas。。fail。');
				}
			});
		
			// this.faceBeautyFn();
			// #endif
		
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
			var points = []

			for (var i = 0; i < 106; i++) {
				points.push(transformPoint([rawPoints[i * 2], rawPoints[i * 2 + 1]], this.imgWidth, this.imgHeight));
			}

			console.log(points,'...gl 出来了么....',this.imgWidth,this.imgHeight)
			this.points = points;
		},
		quadRenderPipeline() {
			/*=========================Shaders========================*/
			const FSIZE = 4;
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
			quadVertShader = gl.createShader(gl.VERTEX_SHADER); // 创建顶点着色器
			gl.shaderSource(quadVertShader, quadVertCode); // 绑定顶点着色器源码
			gl.compileShader(quadVertShader); // 编译定点着色器
			console.log("quadVertShader的值", quadVertShader);
			
			quadFragShader = gl.createShader(gl.FRAGMENT_SHADER); // 创建片元着色器
			gl.shaderSource(quadFragShader, quadFragCode); // 绑定片元着色器源码
			gl.compileShader(quadFragShader); // 编译片元着色器
			console.log("quadFragShader的值", quadFragShader);
			
			quadShaderProgram = gl.createProgram();  // 创建着色器程序
			gl.attachShader(quadShaderProgram, quadVertShader); // 指定顶点着色器
			gl.attachShader(quadShaderProgram, quadFragShader);  // 指定片元着色色器
			gl.linkProgram(quadShaderProgram);  // 链接程序
			gl.useProgram(quadShaderProgram);  //使用着色器
			console.log("quadShaderProgram 渲染成功否");
			
			
		},
		drawQuan(res){
			const FSIZE = 4;
			quadVertexbuffer = gl.createBuffer(); //  创建缓冲区对象(gl.createBuffer())
			if (quadVertexbuffer === null) {
			      console.log("quadVertexbuffer is null");
			}
			console.log("quadVertexbuffer", quadVertexbuffer);
			// 绑定缓冲区对象(gl.bindBuffer(target, buffer))
			gl.disable(gl.BLEND)
			gl.bindBuffer(gl.ARRAY_BUFFER, quadVertexbuffer);
			// 将数据写入缓冲区对象(gl.bufferData()) WebGL 不支持直接使用 JavaScript 原始数组类型，需要转换
			gl.bufferData(gl.ARRAY_BUFFER, quadVertex, gl.STATIC_DRAW);
			
			const qposlocation = gl.getAttribLocation(quadShaderProgram, 'a_position');
			gl.vertexAttribPointer(qposlocation, 2, gl.FLOAT, false, FSIZE * 4, 0);  //将顶点坐标的位置赋值
			gl.enableVertexAttribArray(qposlocation);    // 赋能-批处理
			console.log("qposlocation", qposlocation);
			
			const quv = gl.getAttribLocation(quadShaderProgram, 'a_uv');
			gl.vertexAttribPointer(quv, 2, gl.FLOAT, false, FSIZE * 4, FSIZE * 2);
			gl.enableVertexAttribArray(quv);
			console.log("quv 222", quv);
			
			cameraTexture = gl.createTexture(); //创建纹理对象
			console.log("cameraTexture gl.createTexture", cameraTexture);
			if (cameraTexture === null) {
			  console.log("cameraTexture is null");
			  // return false;
			}
			gl.activeTexture(gl.TEXTURE0);// 开启0号纹理单元
			gl.bindTexture(gl.TEXTURE_2D, cameraTexture); // 向target绑定纹理对象
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
			console.log("cameraTexture ", cameraTexture);
			
			
			// gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
			// gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, res.width, res.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, res.data);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, res);
			
			// gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
			gl.clearColor(0.0, 0.0, 0.0, 0.0);
			gl.clear(gl.COLOR_BUFFER_BIT);		  
			gl.useProgram(quadShaderProgram);
			gl.drawArrays(gl.TRIANGLES, 0, 6);
		},
		lipRenderPipeline() {
			const FSIZE = 4;
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
			        outColor = vec4(color.xyz, alpha * uv_out.z);
			      }
			      `;
			
			
				  
			vertShader = gl.createShader(gl.VERTEX_SHADER);
			
			if (vertShader === null) {
			  console.log("vertShader is null");
			}
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
			
			console.log('。。。。初始化着色器是否成功。。。。');
			
		},
		drawLip(res){
			lipPoints = [];
			let lipPointCount = 106 * 2;
			for (var i = 0; i < lipPointCount; i++) {
			  lipPoints.push(0.0);
			  lipPoints.push(0.0);
			  lipPoints.push(0.0);
			  lipPoints.push(0.0);
			  lipPoints.push(0.0);
			}
			console.log(this.points,"lipPoints的值 ", lipPoints);
			
			lipPointCount = lipIndex.length;
			for (var i = 0; i < lipPointCount; i++) {
			  var index = lipIndex[i];
			  lipPoints[i * 5] = this.points[index][0];
			  lipPoints[i * 5 + 1] = this.points[index][1];
			  lipPoints[i * 5 + 2] = lipTexCoordnate[2 * (index - lipMarkBeginIndex)];
			  lipPoints[i * 5 + 3] = lipTexCoordnate[2 * (index - lipMarkBeginIndex) + 1];
			  lipPoints[i * 5 + 4] = translucent;
			}
			console.log("translucent的值 hah", translucent);
			console.log(translucent,"lipPoints的值 hah", lipPoints);
			vertexbuffer = gl.createBuffer();
			if (vertexbuffer === null) {
			  console.log("vertexbuffer is null");
			}
			console.log('drawFaceLipdrawFaceLip开始gl.ARRAY_BUFFER', vertexbuffer)
			
			
			const FSIZE = 4;
			gl.enable(gl.BLEND);
			gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.NONE, gl.ONE);
			gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
			gl.bindBuffer(gl.ARRAY_BUFFER, vertexbuffer);
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lipPoints), gl.STREAM_DRAW);
			
			const aposlocation = gl.getAttribLocation(shaderProgram, 'a_position');
			gl.enableVertexAttribArray(aposlocation);
			gl.vertexAttribPointer(aposlocation, 2, gl.FLOAT, false, FSIZE * 5, 0);
			console.log("aposlocation的值 ", aposlocation);
			
			const auv = gl.getAttribLocation(shaderProgram, 'a_uv');
			gl.enableVertexAttribArray(auv);
			gl.vertexAttribPointer(auv, 3, gl.FLOAT, false, FSIZE * 5, FSIZE * 2);
			console.log("auv的值 ", auv);
			
			// gl.useProgram(0);
			
			lipTexture = gl.createTexture();
			console.log("lipTexture gl.createTexture", lipTexture);
			if (lipTexture === null) {
			  console.log("lipTexture is null");
			  // return false;
			}
			// gl.bindTexture(gl.TEXTURE_2D, lipTexture);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
			console.log("createTexturecreateTexture ", lipTexture);
			gl.activeTexture(gl.TEXTURE0);
			gl.bindTexture(gl.TEXTURE_2D, lipTexture);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, res); // 配置纹理图像
			
			// gl.activeTexture(gl.TEXTURE1);
			// gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
			gl.useProgram(shaderProgram);
			
			gl.drawArrays(gl.TRIANGLES, 0, 60);
		},

		releaseRenderFacePoints() {
			// gl.deleteShader(this.facePoints.vertShader);
			// gl.deleteShader(this.facePoints.fragShader);
			// gl.deleteProgram(this.facePoints.shaderProgram);
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


	
		 changeLipStyle(lipTexturePath) {
			//let imgPath = '/static/images/lipColor.png';
			// //唇彩图片
			// var img;
			// //唇彩图片路径
			// var imgPath;
			
			return new Promise((resolve,reject)=>{
				console.log(this.canvas, '......图片.this.canvas.', lipTexturePath);
				let imgPath = lipTexturePath;
				let img1 = canvas.createImage();
				img1.onload =  (res) => {
					// this.initRenderPipeline();
					// gl.bindTexture(gl.TEXTURE_2D, lipTexture);
					// gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
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
		updateFaceData1() {
			return new Promise((resolve,reject)=>{
				uni.getImageInfo({
					src: this.imgModel,
					success: res => {
						console.log('getImageInfo  updateFaceData1', res);
						uni.getFileSystemManager().readFile({
							filePath: res.path, // 选择图片返回的相对路径
							// encoding: 'base64', // 编码格式
							success: res1 => {
								// 成功的回调
								console.log(res.width,'--将图片图片转为base64方法toBase64  success--', res1.data);
								var dataFrame = new Uint8Array(res1.data);
								// gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
								// gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, res.width, res.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, dataFrame);
								resolve({data:dataFrame,width:res.width,height:res.height})
							},
							fail: err => {
								console.log('--将图片图片转为base64方法toBase64 fail--', err);
								reject(err);
							}
						});
					},
					fail: (err) => {
						console.log('--getImageInfo  updateFaceData1 fail--', err);
					}
				});
			})
			
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
			  `attribute vec3 coordinates;
			  void main(void) {
			  	gl_Position = vec4(coordinates, 1.0);
			  	gl_PointSize = 2.0;
			  }`;
			
			// Create a vertex shader object
			var vertShader = gl.createShader(gl.VERTEX_SHADER);
			
			// Attach vertex shader source code
			gl.shaderSource(vertShader, vertCode);
			
			// Compile the vertex shader
			gl.compileShader(vertShader);
			
			// fragment shader source code
			var fragCode =
			  `precision mediump float;
						uniform vec4 u_FragColor;
						void main(){
						    gl_FragColor=u_FragColor;
						}`;
			
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
			
			//获取uniform 变量
			const u_FragColor = gl.getUniformLocation(shaderProgram, "u_FragColor");
			let rgba = this.isShowFacePoints ? 1.0 : 0.0;
			//修改uniform 变量
			gl.uniform4f(u_FragColor, 1.0, 1.0, 0.0, 1.0);
			
			
			// gl.clearColor(0.0,0.0,0.0,0.0);
			// gl.clear(gl.COLOR_BUFFER_BIT);
			// Draw the triangle
			gl.drawArrays(gl.POINTS, 0, pointCount);
		},
		 renderImg() {
		    let imgpath = this.imgModel;
		    console.log(imgpath, 'imgpath');
		    let canvas = this.canvas;
		    let gl = this.gl;
		    let img = canvas.createImage();
		    img.onload = (r) => {
		      console.log('图片加载成功', r)
		
		      if (!this.initShader(gl)) {
		        console.log('initShader is failed，初始化着色器失败')
		        return;
		      }
		      if (!this.initVertexs(gl)) {
		        console.log('drawVertexs is failed 设置顶点的相关信息失败 ')
		        return;
		      }
		      if (!this.initTextures(gl, img)) {
		        console.log('drawTextures is failed 无法配置纹理')
		        return;
		      }
		
		      console.log('gl.drawArrays');
		      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
		    }
		    img.onerror = function (r) {
		      console.log('onError', r)
		    }
		    img.src = imgpath;
		
		
		  },
		  initShader(gl) {
		
		    /*=========================Shaders========================*/
		    let vertexShader = gl.createShader(gl.VERTEX_SHADER);// 创建顶点着色器
		    gl.shaderSource(vertexShader, VSHADER_SOURCE);// 绑定顶点着色器源码
		    gl.compileShader(vertexShader);// 编译定点着色器
		
		    let fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);// 创建片元着色器
		    gl.shaderSource(fragmentShader, FSHADER_SOURCE);// 绑定片元着色器源码
		    gl.compileShader(fragmentShader);// 编译片元着色器
		
		
		    let shaderProgram = gl.createProgram();// 创建着色器程序
		    gl.attachShader(shaderProgram, vertexShader);// 指定顶点着色器
		    gl.attachShader(shaderProgram, fragmentShader);// 指定片元着色色器
		
		    gl.linkProgram(shaderProgram);// 链接程序
		    gl.useProgram(shaderProgram);//使用着色器
		    gl.program = shaderProgram;
		    return true
		  },
		  initVertexs(gl, img) {
		    // Create an empty buffer object to store the vertex buffer 创建缓冲区对象(gl.createBuffer())
		    let vertexsBuffer = gl.createBuffer();
		
		
		    if (vertexsBuffer === null) {
		      console.log("vertexsBuffer is null");
		      return false;
		    }
		    // 绑定缓冲区对象(gl.bindBuffer(target, buffer))
		    gl.bindBuffer(gl.ARRAY_BUFFER, vertexsBuffer);
		
		    // 将数据写入缓冲区对象(gl.bufferData()) WebGL 不支持直接使用 JavaScript 原始数组类型，需要转换
		    gl.bufferData(gl.ARRAY_BUFFER, this.vertexs, gl.STATIC_DRAW);
		
		    let a_Position = gl.getAttribLocation(gl.program, "a_position");
		    console.log("a_Position 的值", a_Position);
		
		    if (a_Position < 0) {
		      console.log("a_Position < 0");
		      return false;
		    }
		
		    let a_TexCoord = gl.getAttribLocation(gl.program, "a_texCoord");
		    console.log("a_TexCoord的值", a_TexCoord);
		    if (a_TexCoord < 0) {
		      console.log("a_TexCoord < 0");
		      return false;
		    }
		
		    console.log("this.vertexs", this.vertexs, 'BYTES_PER_ELEMENT:\\', this.vertexs.BYTES_PER_ELEMENT);
		    // gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
		    //将顶点坐标的位置赋值
		    gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, this.vertexs.BYTES_PER_ELEMENT * 5, 0);
		    // 赋能-批处理
		    gl.enableVertexAttribArray(a_Position);
		
		    //将纹理坐标赋值
		    gl.vertexAttribPointer(a_TexCoord, 2, gl.FLOAT, false, this.vertexs.BYTES_PER_ELEMENT * 5, this.vertexs.BYTES_PER_ELEMENT * 3);
		    gl.enableVertexAttribArray(a_TexCoord);
		
		    return true;
		  },
		  initTextures(gl, img) {
		
		    let textureId = gl.createTexture(); //创建纹理对象
		
		    if (textureId === null) {
		      console.log("textureId is null");
		      return false;
		    }
		
		
		    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1); // 对纹理图像进行y轴反转
		    gl.activeTexture(gl.TEXTURE0); // 开启0号纹理单元
		    gl.bindTexture(gl.TEXTURE_2D, textureId); // 向target绑定纹理对象
		    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); // 配置纹理参数
		    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		
		    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img); // 配置纹理图像
		
		    let u_image = gl.getUniformLocation(gl.program, "u_image");
		    if (u_image < 0) {
		      console.log("u_image < 0");
		      return false;
		    }
		    gl.uniform1i(u_image, 0); // 将0号纹理传递给着色器
		
		    return true
		  },
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
	onShareAppMessage(){},
	onShareTimeline(){
		return{
		          title: '自定义转发标题',
		          query: '?openid=123',
		          imageUrl:''
		      }
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
