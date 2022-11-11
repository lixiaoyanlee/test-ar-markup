(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/index/index"],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/*!***********************************************************************************!*\
  !*** E:/other/diaoyan/ar/test-ar-markup/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/index/index.vue */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 13 */
/*!****************************************************************!*\
  !*** E:/other/diaoyan/ar/test-ar-markup/pages/index/index.vue ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_57280228___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=57280228& */ 14);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ 16);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ 21);
/* harmony import */ var _HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../软件/HBuilderX.3.3.11.20220209/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_57280228___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_57280228___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _index_vue_vue_type_template_id_57280228___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 14 */
/*!***********************************************************************************************!*\
  !*** E:/other/diaoyan/ar/test-ar-markup/pages/index/index.vue?vue&type=template&id=57280228& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../软件/HBuilderX.3.3.11.20220209/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../软件/HBuilderX.3.3.11.20220209/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../软件/HBuilderX.3.3.11.20220209/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../软件/HBuilderX.3.3.11.20220209/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../软件/HBuilderX.3.3.11.20220209/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../软件/HBuilderX.3.3.11.20220209/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=57280228& */ 15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 15 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/other/diaoyan/ar/test-ar-markup/pages/index/index.vue?vue&type=template&id=57280228& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 16 */
/*!*****************************************************************************************!*\
  !*** E:/other/diaoyan/ar/test-ar-markup/pages/index/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../软件/HBuilderX.3.3.11.20220209/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../软件/HBuilderX.3.3.11.20220209/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../软件/HBuilderX.3.3.11.20220209/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../软件/HBuilderX.3.3.11.20220209/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../软件/HBuilderX.3.3.11.20220209/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */ 17);
/* harmony import */ var _HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 17 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/other/diaoyan/ar/test-ar-markup/pages/index/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var VSHADER_SOURCE = "" +
"attribute vec4 a_position;" + //
"attribute vec2 a_texCoord;" + //
"varying vec2 v_texCoord;" + //
"void main(){\n" +
"   gl_Position = a_position;" +
"   v_texCoord = a_texCoord;" + //
"}";

var FSHADER_SOURCE = "" +
"precision mediump float;" + //
"uniform sampler2D u_image;" + //
"varying vec2 v_texCoord;" + //
"void main(){" +
"   gl_FragColor = texture2D(u_image,v_texCoord);" + //
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
var lipIndex = new Int32Array([
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
91, 100, 90]);


//关键点缩放的点对索引
var lipScaleIndex = new Int32Array([
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
95, 103]);


//纹理坐标
var lipTexCoordnate = new Float32Array([
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
0.363, 0.475]);


var quadVertex = new Float32Array([
//顶点坐标   纹理坐标
//------\\ //----\\
-1.0, 1.0, 0.0, 0.0,
-1.0, -1.0, 0.0, 1.0,
1.0, -1.0, 1.0, 1.0,
1.0, -1.0, 1.0, 1.0,
1.0, 1.0, 1.0, 0.0,
-1.0, 1.0, 0.0, 0.0]);

var lipVertex = new Float32Array([
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
//嘴唇面片缩放系数
var lipScale;
// var points = []
var _default = {
  name: 'ar-camera-com',
  data: function data() {
    return {
      points: [],
      canvasObj: {
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        pixelRatio: 1 },

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
      2021.00354189],

      translucent: 0.5,
      imgLipstick: '/static/images/ar-makup/lipColor1.png',
      imgModel: '/static/images/ar-makup/model1.jpg',
      // imgLipstick: 'https://cdn-mdj.oss-cn-beijing.aliyuncs.com/common/test-ar-makeup/lipColor1.png',
      // imgModel: 'https://cdn-mdj.oss-cn-beijing.aliyuncs.com/common/test-ar-makeup/model.jpg',
      isFaceBeauty: true,
      isShowFacePoints: false,
      vertexs: new Float32Array([
      -1.0, 1.0, 0.0, 0.0, 1.0,
      -1.0, -1.0, 0.0, 0.0, 0.0,
      1.0, 1.0, 0.0, 1.0, 1.0,
      1.0, -1.0, 0.0, 1.0, 0.0]) };

  },
  props: {},
  components: {},
  computed: {},
  created: function created() {
    // this.setCanvasWh();
    this.imgLoad();
  },

  onReady: function onReady() {},
  methods: {
    imgLoad: function imgLoad(e) {var _this = this;
      // console.log(e, 'width', e.detail.width);
      // console.log('height：', e.detail.height);
      this.handleARFrame1();
      var self = this;
      translucent = 0.5;
      lipMarkBeginIndex = this.lipMarkBeginIndex = 84;
      lipScale = this.lipScale = 0.01;

      var systemInfo = uni.getSystemInfoSync();
      var wImg = 1389,hImg = 1852;
      // this.imgWidth = e.detail.width
      // this.imgHeight = e.detail.height
      this.imgWidth = wImg;
      this.imgHeight = hImg;
      var w = systemInfo.windowWidth;
      var h = systemInfo.windowHeight;
      var r = wImg / hImg;
      console.log(systemInfo, 'getImageInfo', this.canvasObj, w, h, r);
      if (w / h < r) {
        // 表示高是短边,现在宽剧中
        this.canvasObj.height = h;
        this.canvasObj.width = r * h;
        this.canvasObj.top = 0;
        this.canvasObj.left = (w - this.canvasObj.width) / 2;
      } else {
        this.canvasObj.width = w;
        this.canvasObj.height = w / r;
        this.canvasObj.top = (h - this.canvasObj.height) / 2;
        this.canvasObj.left = 0;
      }
      this.canvasObj.pixelRatio = systemInfo.pixelRatio;
      console.log(w / h < r, '。。。。。。。this.canvasObj。。。', this.canvasObj);

      setTimeout(function () {
        _this.canvasWxFn();
      }, 1000);

    },
    canvasWxFn: function canvasWxFn() {var _this2 = this;



      try {
        uni.createSelectorQuery().
        select('#arcanvas').
        node().
        exec(function (res) {
          console.log('drawAiwendy', res);
          var c = res[0].node;
          // if(!c){

          // }
          var systemInfo = uni.getSystemInfoSync();
          console.log('。。。systemInfo。。', _this2.canvasObj, _this2.canvasObj);
          c.height = _this2.canvasObj.height;
          c.width = _this2.canvasObj.width;
          console.log(c.width, '。。。。。。。uni.createCanvas。。success。', c);
          _this2.gl = c.getContext('webgl');
          gl = _this2.gl;
          if (!gl) {
            console.log('webgl未受支持');
            return;
          }
          _this2.canvas = c;
          canvas = c;
          console.log(_this2.points, '。。。。。。。uni.createCanvas。。success。', gl);
          // this.renderImg()

          Promise.all([_this2.changeLipStyle(_this2.imgLipstick),
          // this.updateFaceData1()
          _this2.changeLipStyle(_this2.imgModel)]).
          then(function (res) {
            console.log('zhixingwanbi 哈哈哈', res);

            _this2.lipRenderPipeline();
            _this2.quadRenderPipeline();
            _this2.drawQuan(res[1]);

            _this2.drawLip(res[0]);
            // this.drawFacePoints(this.points);
          }).catch(function (err) {
            console.log('失败 哈哈哈', err);
          });

        });
      } catch (e) {
        //TODO handle the exception
        console.log('....', e);
      }


      // this.onCanvasReady('arcanvas')
    },
    onCanvasReady: function onCanvasReady(id) {
      console.log('onCanvasReady kaishi 哈哈哈');
      // this.imgLoad();































































    },
    handleARFrame1: function handleARFrame1() {
      var rawPoints = this.points84By63.map(function (item) {return item * 0.6;});
      var len = 106;
      for (var i = 0; i < 84; i++) {
        rawPoints.unshift(0.1, 0.1);
      }
      for (var i = 104; i < len; i++) {
        rawPoints.push(0.1, 0.1);
      }
      function transformPoint(point, fw, fh) {
        return [point[0] / fw * 2 - 1, (1 - point[1] / fh) * 2 - 1];
      }
      var points = [];

      for (var i = 0; i < 106; i++) {
        points.push(transformPoint([rawPoints[i * 2], rawPoints[i * 2 + 1]], this.imgWidth, this.imgHeight));
      }
      console.log(points, '...gl 出来了么....');
      this.points = points;
    },
    quadRenderPipeline: function quadRenderPipeline() {
      /*=========================Shaders========================*/
      var FSIZE = 4;
      var quadVertCode = "#version 300 es\n\t\t\t      layout(location = 0) in vec2 a_position;\n\t\t\t      layout(location = 1) in vec2 a_uv;\n\t\t\t      out vec2 uv_out;\n\t\t\t      void main() {\n\t\t\t        gl_Position = vec4(a_position, 1.0, 1.0);\n\t\t\t        uv_out = a_uv;\n\t\t\t      }\n\t\t\t      ";









      var quadFragCode = "#version 300 es\n\t\t\t      precision mediump float;\n\t\t\t      in vec2 uv_out;\n\t\t\t      uniform sampler2D u_texture;\n\t\t\t      layout(location = 0) out vec4 outColor;\n\t\t\t      void main() {\n\t\t\t        vec2 uv = vec2(uv_out.x, uv_out.y);\n\t\t\t        outColor = vec4(texture(u_texture, uv).xyz, 1.0);\n\t\t\t      }\n\t\t\t      ";










      console.log("quadVertShader的值", quadVertShader);
      quadVertShader = gl.createShader(gl.VERTEX_SHADER); // 创建顶点着色器
      gl.shaderSource(quadVertShader, quadVertCode); // 绑定顶点着色器源码
      gl.compileShader(quadVertShader); // 编译定点着色器

      console.log("quadVertShader的值1", quadVertShader);

      quadFragShader = gl.createShader(gl.FRAGMENT_SHADER); // 创建片元着色器
      gl.shaderSource(quadFragShader, quadFragCode); // 绑定片元着色器源码
      gl.compileShader(quadFragShader); // 编译片元着色器
      console.log("quadFragShader的值", quadFragShader);

      quadShaderProgram = gl.createProgram(); // 创建着色器程序
      gl.attachShader(quadShaderProgram, quadVertShader); // 指定顶点着色器
      gl.attachShader(quadShaderProgram, quadFragShader); // 指定片元着色色器
      gl.linkProgram(quadShaderProgram); // 链接程序
      gl.useProgram(quadShaderProgram); //使用着色器
      console.log("quadShaderProgram 渲染成功否");


    },
    drawQuan: function drawQuan(res) {
      // gl.useProgram(0);
      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      var FSIZE = 4;
      quadVertexbuffer = gl.createBuffer(); //  创建缓冲区对象(gl.createBuffer())
      if (quadVertexbuffer === null) {
        console.log("quadVertexbuffer is null");
      }
      console.log("quadVertexbuffer", quadVertexbuffer);
      // 绑定缓冲区对象(gl.bindBuffer(target, buffer))
      gl.disable(gl.BLEND);
      gl.bindBuffer(gl.ARRAY_BUFFER, quadVertexbuffer);
      // 将数据写入缓冲区对象(gl.bufferData()) WebGL 不支持直接使用 JavaScript 原始数组类型，需要转换
      gl.bufferData(gl.ARRAY_BUFFER, quadVertex, gl.STATIC_DRAW);

      var qposlocation = gl.getAttribLocation(quadShaderProgram, 'a_position');
      gl.vertexAttribPointer(qposlocation, 2, gl.FLOAT, false, FSIZE * 4, 0); //将顶点坐标的位置赋值
      gl.enableVertexAttribArray(qposlocation); // 赋能-批处理
      console.log("qposlocation", qposlocation);

      var quv = gl.getAttribLocation(quadShaderProgram, 'a_uv');
      gl.vertexAttribPointer(quv, 2, gl.FLOAT, false, FSIZE * 4, FSIZE * 2);
      gl.enableVertexAttribArray(quv);
      console.log("quv 222", quv);

      cameraTexture = gl.createTexture(); //创建纹理对象
      console.log("cameraTexture gl.createTexture", cameraTexture);
      if (cameraTexture === null) {
        console.log("cameraTexture is null");
        // return false;
      }
      gl.activeTexture(gl.TEXTURE0); // 开启0号纹理单元
      gl.bindTexture(gl.TEXTURE_2D, cameraTexture); // 向target绑定纹理对象
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      console.log("cameraTexture ", cameraTexture);


      // gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, res);

      // gl.bindTexture(gl.TEXTURE_2D, cameraTexture);

      gl.useProgram(quadShaderProgram);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    },
    lipRenderPipeline: function lipRenderPipeline() {
      var FSIZE = 4;
      var vertCode = "#version 300 es\n\t\t\t      layout(location = 0) in vec2 a_position;\n\t\t\t      layout(location = 1) in vec3 a_uv;\n\t\t\t      out vec3 uv_out;\n\t\t\t      void main() {\n\t\t\t        gl_Position = vec4(a_position, 1.0, 1.0);\n\t\t\t        uv_out = a_uv;\n\t\t\t        //uv_out = vec2(1.0, 0.0);\n\t\t\t      }\n\t\t\t      ";










      var fragCode = "#version 300 es\n\t\t\t      precision mediump float;\n\t\t\t      in vec3 uv_out;\n\t\t\t      uniform sampler2D u_texture;\n\t\t\t      uniform sampler2D u_texture2;\n\t\t\t      layout(location = 0) out vec4 outColor;\n\t\t\t      void main() {\n\t\t\t\n\t\t\t        vec2 uv = vec2(uv_out.x, 1.0 - uv_out.y);\n\t\t\t        vec3 lipColor = texture(u_texture, uv).xyz;\n\t\t\t        vec3 c = lipColor;\n\t\t\t        vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n\t\t\t        vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n\t\t\t        vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n\t\t\t\n\t\t\t        float d = q.x - min(q.w, q.y);\n\t\t\t        float e = 1.0e-10;\n\t\t\t        vec3 hc = vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n\t\t\t\n\t\t\t        hc.y *= 1.2;\n\t\t\t\n\t\t\t        vec4 L = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n\t\t\t        vec3 M = abs(fract(hc.xxx + L.xyz) * 6.0 - L.www);\n\t\t\t        vec3 color = hc.z * mix(L.xxx, clamp(M - L.xxx, 0.0, 1.0), hc.y);\n\t\t\t\n\t\t\t        //outColor = vec4(color, 1.0);\n\t\t\t        \n\t\t\t        \n\t\t\t        //vec4 lipColor = texture(u_texture, uv);\n\t\t\t        vec4 frameColor = texture(u_texture2, uv_out.xy);\n\t\t\t        //vec3 finalColor = lipColor.xyz * lipColor.w + frameColor.xyz * (1.0 - lipColor.w);\n\t\t\t        float alpha = texture(u_texture, uv).w;\n\t\t\t        outColor = vec4(color.xyz, alpha * uv_out.z);\n\t\t\t      }\n\t\t\t      ";






































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
    drawLip: function drawLip(res) {
      lipPoints = [];
      var lipPointCount = 106 * 2;
      for (var i = 0; i < lipPointCount; i++) {
        lipPoints.push(0.0);
        lipPoints.push(0.0);
        lipPoints.push(0.0);
        lipPoints.push(0.0);
        lipPoints.push(0.0);
      }
      console.log("lipPoints的值计算开始 ");

      lipPointCount = lipIndex.length;
      for (var i = 0; i < lipPointCount; i++) {
        var index = lipIndex[i];
        lipPoints[i * 5] = this.points[index][0];
        lipPoints[i * 5 + 1] = this.points[index][1];
        lipPoints[i * 5 + 2] = lipTexCoordnate[2 * (index - lipMarkBeginIndex)];
        lipPoints[i * 5 + 3] = lipTexCoordnate[2 * (index - lipMarkBeginIndex) + 1];
        lipPoints[i * 5 + 4] = translucent;
      }

      console.log(lipMarkBeginIndex, "lipPoints的值 hah", lipPoints, lipTexCoordnate);
      vertexbuffer = gl.createBuffer();
      if (vertexbuffer === null) {
        console.log("vertexbuffer is null");
      }
      console.log('drawFaceLipdrawFaceLip开始gl.ARRAY_BUFFER', vertexbuffer);


      var FSIZE = 4;
      gl.enable(gl.BLEND);
      gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.NONE, gl.ONE);
      gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexbuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lipPoints), gl.STREAM_DRAW);

      var aposlocation = gl.getAttribLocation(shaderProgram, 'a_position');
      gl.enableVertexAttribArray(aposlocation);
      gl.vertexAttribPointer(aposlocation, 2, gl.FLOAT, false, FSIZE * 5, 0);
      console.log("aposlocation的值 ", aposlocation);

      var auv = gl.getAttribLocation(shaderProgram, 'a_uv');
      gl.enableVertexAttribArray(auv);
      gl.vertexAttribPointer(auv, 3, gl.FLOAT, false, FSIZE * 5, FSIZE * 2);
      console.log("auv的值 ", auv);

      // gl.useProgram(0);
      // gl.bindTexture(0);
      lipTexture = gl.createTexture();
      console.log("lipTexture gl.createTexture", lipTexture);
      if (lipTexture === null) {
        console.log("lipTexture is null");
        // return false;
      }
      gl.bindTexture(gl.TEXTURE_2D, lipTexture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, res); // 配置纹理图像
      console.log("createTexturecreateTexture ", lipTexture);


      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, lipTexture);


      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
      gl.useProgram(shaderProgram);

      gl.drawArrays(gl.TRIANGLES, 0, 60);
    },
    initRenderPipeline: function initRenderPipeline() {
      var vertCode = "#version 300 es\n\t\t\t      layout(location = 0) in vec2 a_position;\n\t\t\t      layout(location = 1) in vec3 a_uv;\n\t\t\t      out vec3 uv_out;\n\t\t\t      void main() {\n\t\t\t        gl_Position = vec4(a_position, 1.0, 1.0);\n\t\t\t        uv_out = a_uv;\n\t\t\t        //uv_out = vec2(1.0, 0.0);\n\t\t\t      }\n\t\t\t      ";











      var fragCode = "#version 300 es\n\t\t\t      precision mediump float;\n\t\t\t      in vec3 uv_out;\n\t\t\t      uniform sampler2D u_texture;\n\t\t\t      uniform sampler2D u_texture2;\n\t\t\t      layout(location = 0) out vec4 outColor;\n\t\t\t      void main() {\n\t\t\t\n\t\t\t        vec2 uv = vec2(uv_out.x, 1.0 - uv_out.y);\n\t\t\t        vec3 lipColor = texture(u_texture, uv).xyz;\n\t\t\t        vec3 c = lipColor;\n\t\t\t        vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n\t\t\t        vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n\t\t\t        vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n\t\t\t\n\t\t\t        float d = q.x - min(q.w, q.y);\n\t\t\t        float e = 1.0e-10;\n\t\t\t        vec3 hc = vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n\t\t\t\n\t\t\t        hc.y *= 1.2;\n\t\t\t\n\t\t\t        vec4 L = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n\t\t\t        vec3 M = abs(fract(hc.xxx + L.xyz) * 6.0 - L.www);\n\t\t\t        vec3 color = hc.z * mix(L.xxx, clamp(M - L.xxx, 0.0, 1.0), hc.y);\n\t\t\t\n\t\t\t        //outColor = vec4(color, 1.0);\n\t\t\t        \n\t\t\t        \n\t\t\t        //vec4 lipColor = texture(u_texture, uv);\n\t\t\t        vec4 frameColor = texture(u_texture2, uv_out.xy);\n\t\t\t        //vec3 finalColor = lipColor.xyz * lipColor.w + frameColor.xyz * (1.0 - lipColor.w);\n\t\t\t        float alpha = texture(u_texture, uv).w;\n\t\t\t        outColor = vec4(color.xyz, alpha * uv_out.z);\n\t\t\t      }\n\t\t\t      ";




































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

      var FSIZE = 4;

      vertexbuffer = gl.createBuffer();
      if (vertexbuffer === null) {
        console.log("vertexbuffer is null");
      }

      var aposlocation = gl.getAttribLocation(shaderProgram, 'a_position');
      console.log("a_position的值", aposlocation);
      gl.vertexAttribPointer(aposlocation, 2, gl.FLOAT, false, FSIZE * 5, 0);
      gl.enableVertexAttribArray(aposlocation);

      var auv = gl.getAttribLocation(shaderProgram, 'a_uv');
      console.log("auv的值", auv);
      gl.vertexAttribPointer(auv, 3, gl.FLOAT, false, FSIZE * 5, FSIZE * 2);
      gl.enableVertexAttribArray(auv);

      var quadVertCode = "#version 300 es\n\t\t\t      layout(location = 0) in vec2 a_position;\n\t\t\t      layout(location = 1) in vec2 a_uv;\n\t\t\t      out vec2 uv_out;\n\t\t\t      void main() {\n\t\t\t        gl_Position = vec4(a_position, 1.0, 1.0);\n\t\t\t        uv_out = a_uv;\n\t\t\t      }\n\t\t\t      ";










      var quadFragCode = "#version 300 es\n\t\t\t      precision mediump float;\n\t\t\t      in vec2 uv_out;\n\t\t\t      uniform sampler2D u_texture;\n\t\t\t      layout(location = 0) out vec4 outColor;\n\t\t\t      void main() {\n\t\t\t        vec2 uv = vec2(uv_out.x, uv_out.y);\n\t\t\t        outColor = vec4(texture(u_texture, uv).xyz, 1.0);\n\t\t\t      }\n\t\t\t      ";











      quadVertShader = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(quadVertShader, quadVertCode);
      gl.compileShader(quadVertShader);
      console.log("quadVertShader的值", quadVertShader);


      quadFragShader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(quadFragShader, quadFragCode);
      gl.compileShader(quadFragShader);
      console.log("quadFragShader的值", quadFragShader);

      quadShaderProgram = gl.createProgram();
      gl.attachShader(quadShaderProgram, quadVertShader);
      gl.attachShader(quadShaderProgram, quadFragShader);
      gl.linkProgram(quadShaderProgram);
      gl.useProgram(quadShaderProgram);
      console.log("quadShaderProgram 渲染成功否");


      quadVertexbuffer = gl.createBuffer();
      console.log("quadVertexbuffer", quadVertexbuffer);
      gl.bindBuffer(gl.ARRAY_BUFFER, quadVertexbuffer);
      gl.bufferData(gl.ARRAY_BUFFER, quadVertex, gl.STATIC_DRAW);

      var qposlocation = gl.getAttribLocation(quadShaderProgram, 'a_position');
      gl.enableVertexAttribArray(qposlocation);
      gl.vertexAttribPointer(qposlocation, 2, gl.FLOAT, false, FSIZE * 4, 0);
      console.log("qposlocation", qposlocation);

      var quv = gl.getAttribLocation(quadShaderProgram, 'a_uv');
      gl.enableVertexAttribArray(quv);
      gl.vertexAttribPointer(quv, 2, gl.FLOAT, false, FSIZE * 4, FSIZE * 2);
      console.log("quv 222", quv);

      gl.useProgram(0);

      lipTexture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, lipTexture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      console.log("createTexturecreateTexture ", lipTexture);

      cameraTexture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      console.log("cameraTexture ", cameraTexture);

      gl.bindTexture(0);

      lipPoints = [];
      var lipPointCount = 106 * 2;
      for (var i = 0; i < lipPointCount; i++) {
        lipPoints.push(0.0);
        lipPoints.push(0.0);
        lipPoints.push(0.0);
        lipPoints.push(0.0);
        lipPoints.push(0.0);
      }
      console.log("lipPoints的值 ", lipPoints);


      lipPointsIndex = [];
      var lipPointsIndexCount = lipIndex.length;
      for (var i = 0; i < lipPointsIndexCount; i++) {
        lipPointsIndex.push(i);
      }
      console.log("lipPointsIndex的值 ", lipPointsIndex);
    },
    releaseRenderFacePoints: function releaseRenderFacePoints() {
      // gl.deleteShader(this.facePoints.vertShader);
      // gl.deleteShader(this.facePoints.fragShader);
      // gl.deleteProgram(this.facePoints.shaderProgram);
    },
    releaseRenderResource: function releaseRenderResource() {
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

    drawFaceLip: function drawFaceLip(points) {
      console.log(translucent, 'drawFaceLipdrawFaceLip开始', points);
      var lipPointCount = lipIndex.length;
      for (var i = 0; i < lipPointCount; i++) {
        var index = lipIndex[i];
        lipPoints[i * 5] = points[index][0];
        lipPoints[i * 5 + 1] = points[index][1];
        lipPoints[i * 5 + 2] = lipTexCoordnate[2 * (index - lipMarkBeginIndex)];
        lipPoints[i * 5 + 3] = lipTexCoordnate[2 * (index - lipMarkBeginIndex) + 1];
        lipPoints[i * 5 + 4] = translucent;
      }

      console.log('drawFaceLipdrawFaceLip开始gl.ARRAY_BUFFER', vertexbuffer);
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexbuffer);
      console.log('drawFaceLipdrawFaceLip lipPoints', points);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lipPoints), gl.STREAM_DRAW);


      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      // gl.disable(gl.DEPTH_TEST);


      // gl.disable(gl.DEPTH_WRITE);
      // gl.enable(gl.GL_CULL_FACE);
      // gl.frontFace(gl.CW);
      console.log('drawFaceLipdrawFaceLip gl.frontFace');
      var FSIZE = 4;

      //Pass one
      // gl.disable(gl.BLEND);
      gl.bindBuffer(gl.ARRAY_BUFFER, quadVertexbuffer);

      var qposlocation = gl.getAttribLocation(quadShaderProgram, 'a_position');

      gl.vertexAttribPointer(qposlocation, 2, gl.FLOAT, false, FSIZE * 4, 0);
      gl.enableVertexAttribArray(qposlocation);

      var quv = gl.getAttribLocation(quadShaderProgram, 'a_uv');

      gl.vertexAttribPointer(quv, 2, gl.FLOAT, false, FSIZE * 4, FSIZE * 2);
      gl.enableVertexAttribArray(quv);

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
      gl.useProgram(quadShaderProgram);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      //Pass two
      gl.enable(gl.BLEND);
      gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.NONE, gl.ONE);
      gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexbuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lipPoints), gl.STREAM_DRAW);

      var aposlocation = gl.getAttribLocation(shaderProgram, 'a_position');
      gl.enableVertexAttribArray(aposlocation);
      gl.vertexAttribPointer(aposlocation, 2, gl.FLOAT, false, FSIZE * 5, 0);


      var auv = gl.getAttribLocation(shaderProgram, 'a_uv');
      gl.enableVertexAttribArray(auv);
      gl.vertexAttribPointer(auv, 3, gl.FLOAT, false, FSIZE * 5, FSIZE * 2);

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, lipTexture);
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
      gl.useProgram(shaderProgram);
      gl.drawArrays(gl.TRIANGLES, 0, 60);
    },
    changeLipStyle: function changeLipStyle(lipTexturePath) {var _this3 = this;
      //let imgPath = '/static/images/lipColor.png';
      // //唇彩图片
      // var img;
      // //唇彩图片路径
      // var imgPath;

      return new Promise(function (resolve, reject) {
        console.log(_this3.canvas, '......图片.this.canvas.', lipTexturePath);
        var imgPath = lipTexturePath;
        var img1 = canvas.createImage();
        img1.onload = function (res) {
          // this.initRenderPipeline();
          // gl.bindTexture(gl.TEXTURE_2D, lipTexture);
          // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
          resolve(img1);

          console.log(lipTexture, '......图片..', res, img);

        };
        img1.onerror = function (res) {
          console.log('......图片错误..', res, img);
          reject(res);
        };
        img1.src = imgPath;
      });



      // let poster = this.canvas.createImage();
      // wx.getImageInfo({
      //    src: lipTexturePath, //图片的网络地址
      //    success: (res) => {
      //      poster.src = res.path //图片缓存地址
      //      poster.onload = (e) => {
      //        // ctx.drawImage(poster, 0, 0, 200, 200)
      // 		console.log(lipTexture, '......图片..', e, poster);
      //      }
      //    }
      // })
    },

    updateFaceData: function updateFaceData(data, width, height) {
      var dataFrame = new Uint8Array(data);
      gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, dataFrame);
    },
    updateFaceData1: function updateFaceData1() {var _this4 = this;
      return new Promise(function (resolve, reject) {
        uni.getImageInfo({
          src: _this4.imgModel,
          success: function success(res) {
            console.log('getImageInfo  updateFaceData1', res);
            uni.getFileSystemManager().readFile({
              filePath: res.path, // 选择图片返回的相对路径
              // encoding: 'base64', // 编码格式
              success: function success(res1) {
                // 成功的回调
                console.log(res.width, '--将图片图片转为base64方法toBase64  success--', res1.data);
                var dataFrame = new Uint8Array(res1.data);
                // gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
                // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, res.width, res.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, dataFrame);
                resolve({ data: dataFrame, width: res.width, height: res.height });
              },
              fail: function fail(err) {
                console.log('--将图片图片转为base64方法toBase64 fail--', err);
                reject(err);
              } });

          },
          fail: function fail(err) {
            console.log('--getImageInfo  updateFaceData1 fail--', err);
          } });

      });

    },
    drawFacePoints: function drawFacePoints(points) {
      console.log('drawFacePoints。。。', points, points.length);
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
      console.log('。vertex_buffer。。。');
      //Bind appropriate array buffer to it
      gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

      // Pass the vertex data to the buffer
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
      // Unbind the buffer
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      console.log('。Unbind the buffer。。。');
      /*=========================Shaders========================*/

      // vertex shader source code
      var vertCode =
      'attribute vec3 coordinates;' +

      'void main(void) {' +
      ' gl_Position = vec4(coordinates, 1.0);' +
      'gl_PointSize = 10.0;' +
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
      console.log('。coord。。。', coord);
      // Point an attribute to the currently bound VBO
      gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);

      // Enable the attribute
      gl.enableVertexAttribArray(coord);

      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      // Draw the triangle
      gl.drawArrays(gl.POINTS, 0, pointCount);
    },
    drawFacePoints11: function drawFacePoints11(points) {
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
      var vertCode = "attribute vec3 coordinates;\n\t\t\t  void main(void) {\n\t\t\t  \tgl_Position = vec4(coordinates, 1.0);\n\t\t\t  \tgl_PointSize = 5.0;\n\t\t\t  }";






      // Create a vertex shader object
      var vertShader = gl.createShader(gl.VERTEX_SHADER);

      // Attach vertex shader source code
      gl.shaderSource(vertShader, vertCode);

      // Compile the vertex shader
      gl.compileShader(vertShader);

      // fragment shader source code
      var fragCode = "precision mediump float;\n\t\t\t\t\t\tuniform vec4 u_FragColor;\n\t\t\t\t\t\tvoid main(){\n\t\t\t\t\t\t    gl_FragColor=u_FragColor;\n\t\t\t\t\t\t}";






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
      var u_FragColor = gl.getUniformLocation(shaderProgram, "u_FragColor");
      var rgba = this.isShowFacePoints ? 1.0 : 0.0;
      //修改uniform 变量
      gl.uniform4f(u_FragColor, 1.0, 0.0, 0.0, 1.0);


      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      // Draw the triangle
      gl.drawArrays(gl.POINTS, 0, pointCount);
    },
    renderImg: function renderImg() {var _this5 = this;
      var imgpath = this.imgModel;
      console.log(imgpath, 'imgpath');
      var canvas = this.canvas;
      var gl = this.gl;
      var img = canvas.createImage();
      img.onload = function (r) {
        console.log('图片加载成功', r);

        if (!_this5.initShader(gl)) {
          console.log('initShader is failed，初始化着色器失败');
          return;
        }
        if (!_this5.initVertexs(gl)) {
          console.log('drawVertexs is failed 设置顶点的相关信息失败 ');
          return;
        }
        if (!_this5.initTextures(gl, img)) {
          console.log('drawTextures is failed 无法配置纹理');
          return;
        }

        console.log('gl.drawArrays');
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      };
      img.onerror = function (r) {
        console.log('onError', r);
      };
      img.src = imgpath;


    },
    initShader: function initShader(gl) {

      /*=========================Shaders========================*/
      var vertexShader = gl.createShader(gl.VERTEX_SHADER); // 创建顶点着色器
      gl.shaderSource(vertexShader, VSHADER_SOURCE); // 绑定顶点着色器源码
      gl.compileShader(vertexShader); // 编译定点着色器

      var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER); // 创建片元着色器
      gl.shaderSource(fragmentShader, FSHADER_SOURCE); // 绑定片元着色器源码
      gl.compileShader(fragmentShader); // 编译片元着色器


      var shaderProgram = gl.createProgram(); // 创建着色器程序
      gl.attachShader(shaderProgram, vertexShader); // 指定顶点着色器
      gl.attachShader(shaderProgram, fragmentShader); // 指定片元着色色器

      gl.linkProgram(shaderProgram); // 链接程序
      gl.useProgram(shaderProgram); //使用着色器
      gl.program = shaderProgram;
      return true;
    },
    initVertexs: function initVertexs(gl, img) {
      // Create an empty buffer object to store the vertex buffer 创建缓冲区对象(gl.createBuffer())
      var vertexsBuffer = gl.createBuffer();


      if (vertexsBuffer === null) {
        console.log("vertexsBuffer is null");
        return false;
      }
      // 绑定缓冲区对象(gl.bindBuffer(target, buffer))
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexsBuffer);

      // 将数据写入缓冲区对象(gl.bufferData()) WebGL 不支持直接使用 JavaScript 原始数组类型，需要转换
      gl.bufferData(gl.ARRAY_BUFFER, this.vertexs, gl.STATIC_DRAW);

      var a_Position = gl.getAttribLocation(gl.program, "a_position");
      console.log("a_Position 的值", a_Position);

      if (a_Position < 0) {
        console.log("a_Position < 0");
        return false;
      }

      var a_TexCoord = gl.getAttribLocation(gl.program, "a_texCoord");
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
    initTextures: function initTextures(gl, img) {

      var textureId = gl.createTexture(); //创建纹理对象

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

      var u_image = gl.getUniformLocation(gl.program, "u_image");
      if (u_image < 0) {
        console.log("u_image < 0");
        return false;
      }
      gl.uniform1i(u_image, 0); // 将0号纹理传递给着色器

      return true;
    } },

  mounted: function mounted() {},
  onShow: function onShow() {
    // this.$nextTick(() => {
    // 	this.$refs.brightness.getScreenBrightness()
    // })
  },
  onLoad: function onLoad() {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:case "end":return _context.stop();}}}, _callee);}))();},
  beforeDestroy: function beforeDestroy() {
    // 退出释放资源
    this.releaseRenderResource();
  },
  onShareAppMessage: function onShareAppMessage() {},
  onShareTimeline: function onShareTimeline() {
    return {
      title: '自定义转发标题',
      query: '?openid=123',
      imageUrl: '' };

  },
  onUnload: function onUnload() {},
  onHide: function onHide() {} };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"]))

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/*!*************************************************************************************************!*\
  !*** E:/other/diaoyan/ar/test-ar-markup/pages/index/index.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../软件/HBuilderX.3.3.11.20220209/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../软件/HBuilderX.3.3.11.20220209/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../软件/HBuilderX.3.3.11.20220209/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../软件/HBuilderX.3.3.11.20220209/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../软件/HBuilderX.3.3.11.20220209/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../软件/HBuilderX.3.3.11.20220209/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../软件/HBuilderX.3.3.11.20220209/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=0&lang=css& */ 22);
/* harmony import */ var _HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 22 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/other/diaoyan/ar/test-ar-markup/pages/index/index.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })
],[[12,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRTovb3RoZXIvZGlhb3lhbi9hci90ZXN0LWFyLW1hcmt1cC9wYWdlcy9pbmRleC9pbmRleC52dWU/MDIwYiIsIndlYnBhY2s6Ly8vRTovb3RoZXIvZGlhb3lhbi9hci90ZXN0LWFyLW1hcmt1cC9wYWdlcy9pbmRleC9pbmRleC52dWU/MmNiMSIsIndlYnBhY2s6Ly8vRTovb3RoZXIvZGlhb3lhbi9hci90ZXN0LWFyLW1hcmt1cC9wYWdlcy9pbmRleC9pbmRleC52dWU/NjFkNCIsIndlYnBhY2s6Ly8vRTovb3RoZXIvZGlhb3lhbi9hci90ZXN0LWFyLW1hcmt1cC9wYWdlcy9pbmRleC9pbmRleC52dWU/NmJjYSIsInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIiwid2VicGFjazovLy9FOi9vdGhlci9kaWFveWFuL2FyL3Rlc3QtYXItbWFya3VwL3BhZ2VzL2luZGV4L2luZGV4LnZ1ZT8yZWY2Iiwid2VicGFjazovLy9FOi9vdGhlci9kaWFveWFuL2FyL3Rlc3QtYXItbWFya3VwL3BhZ2VzL2luZGV4L2luZGV4LnZ1ZT82Nzc2Il0sIm5hbWVzIjpbInd4IiwiX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImNyZWF0ZVBhZ2UiLCJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBQUE7OztBQUdBO0FBQ0EsNEYsOEZBSEE7QUFDQUEsRUFBRSxDQUFDQyxpQ0FBSCxHQUF1Q0MsbUJBQXZDLENBR0FDLFVBQVUsQ0FBQ0MsY0FBRCxDQUFWLEM7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrSDtBQUNsSDtBQUN5RDtBQUNMO0FBQ2E7OztBQUdqRTtBQUNzTTtBQUN0TSxnQkFBZ0IsdU1BQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFl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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQS9WQTtBQWdXQSxXQWhXQSxtQkFnV0EsR0FoV0EsRUFnV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUE1REEsQ0E0REE7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0F6YUE7QUEwYUEsc0JBMWFBLGdDQTBhQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7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QUFDQSxvQ0FYQSxDQVdBO0FBQ0EsK0NBWkEsQ0FZQTtBQUNBLHdFQWJBLENBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrRUFuQkEsQ0FtQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQTFCQSxDQTBCQTs7QUFFQTtBQUNBLEtBdGtDQSxFQWxGQTs7QUEwcENBLFNBMXBDQSxxQkEwcENBLEVBMXBDQTtBQTJwQ0EsUUEzcENBLG9CQTJwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQS9wQ0E7QUFncUNBLFFBaHFDQSxvQkFncUNBLHFRQWhxQ0E7QUFpcUNBLGVBanFDQSwyQkFpcUNBO0FBQ0E7QUFDQTtBQUNBLEdBcHFDQTtBQXFxQ0EsbUJBcnFDQSwrQkFxcUNBLEVBcnFDQTtBQXNxQ0EsaUJBdHFDQSw2QkFzcUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLDBCQUZBO0FBR0Esa0JBSEE7O0FBS0EsR0E1cUNBO0FBNnFDQSxVQTdxQ0Esc0JBNnFDQSxFQTdxQ0E7QUE4cUNBLFFBOXFDQSxvQkE4cUNBLEVBOXFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7QUN0S0E7QUFBQTtBQUFBO0FBQUE7QUFBMG1DLENBQWdCLDBoQ0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7QUNBOW5DO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvaW5kZXgvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7XG4vLyBAdHMtaWdub3JlXG53eC5fX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL2luZGV4L2luZGV4LnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NzI4MDIyOCZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3MjgwMjI4JlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG5cdDxpbWFnZVxyXG5cdFx0OnNyYz1cImltZ01vZGVsXCJcclxuXHRcdGNsYXNzPVwibW9kZS1pbWdcIlxyXG5cdFx0XHJcblx0XHQ6c3R5bGU9XCJ7IHdpZHRoOiBjYW52YXNPYmoud2lkdGggKyAncHgnLCBoZWlnaHQ6IGNhbnZhc09iai5oZWlnaHQgKyAncHgnLCB0b3A6IGNhbnZhc09iai50b3AgKyAncHgnLCBsZWZ0OiBjYW52YXNPYmoubGVmdCArICdweCcgfVwiXHJcblx0PjwvaW1hZ2U+XHJcblx0PGJ1dHRvbiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDEwMHB4OyBcIj4g5ZOI5ZOI5ZOIPC9idXR0b24+XHJcblx0PCEtLSBoNeOAgWFwcC12dWUg5Lit5Y2V5Liq5bC65a+46L+H5aSn55qEIGNhbnZhcyDlnKggaU9TL1NhZmFyaSDml6Dms5Xnu5jliLbvvIjlhbfkvZPpmZDliLblsLrlr7jmnKrlhazluIPvvIkgLS0+XHJcblx0PGNhbnZhc1xyXG5cdFx0aWQ9XCJhcmNhbnZhc1wiXHJcblx0XHRjbGFzcz1cImFyY2FudmFzXCJcclxuXHRcdHR5cGU9XCJ3ZWJnbFwiXHJcblx0XHRAcmVhZHkubmF0aXZlPVwib25DYW52YXNSZWFkeSgnYXJjYW52YXMnKVwiXHJcblx0XHQ6c3R5bGU9XCJ7IHdpZHRoOiBjYW52YXNPYmoud2lkdGggKyAncHgnLCBoZWlnaHQ6IGNhbnZhc09iai5oZWlnaHQgKyAncHgnLCB0b3A6IGNhbnZhc09iai50b3AgKyAncHgnLCBsZWZ0OiBjYW52YXNPYmoubGVmdCArICdweCcgfVwiXHJcblx0PjwvY2FudmFzPlxyXG5cdDxidXR0b24gc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAyMDBweDsgei1pbmRleDogMjI7XCI+IOeVpeeVpTwvYnV0dG9uPlxyXG5cdFxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuPCEtLSBcclxuIOatpOeJiOacrOW+ruS/oeayoeaciemXrumimO+8jOebruWJjeaYr2lcclxuIFxyXG4gLS0+XHJcbjxzY3JpcHQ+XHJcblx0dmFyIFZTSEFERVJfU09VUkNFID0gXCJcIiArXHJcblx0ICBcImF0dHJpYnV0ZSB2ZWM0IGFfcG9zaXRpb247XCIgKy8vXHJcblx0ICBcImF0dHJpYnV0ZSB2ZWMyIGFfdGV4Q29vcmQ7XCIgKy8vXHJcblx0ICBcInZhcnlpbmcgdmVjMiB2X3RleENvb3JkO1wiICsvL1xyXG5cdCAgXCJ2b2lkIG1haW4oKXtcXG5cIiArXHJcblx0ICBcIiAgIGdsX1Bvc2l0aW9uID0gYV9wb3NpdGlvbjtcIiArXHJcblx0ICBcIiAgIHZfdGV4Q29vcmQgPSBhX3RleENvb3JkO1wiICsvL1xyXG5cdCAgXCJ9XCI7XHJcblx0XHJcblx0dmFyIEZTSEFERVJfU09VUkNFID0gXCJcIiArXHJcblx0ICBcInByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1wiICsvL1xyXG5cdCAgXCJ1bmlmb3JtIHNhbXBsZXIyRCB1X2ltYWdlO1wiICsvL1xyXG5cdCAgXCJ2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcIiArLy9cclxuXHQgIFwidm9pZCBtYWluKCl7XCIgK1xyXG5cdCAgXCIgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodV9pbWFnZSx2X3RleENvb3JkKTtcIiArLy9cclxuXHQgIFwifVwiO1xyXG52YXIgY2FudmFzO1xyXG52YXIgZ2w7XHJcblxyXG52YXIgdyA9IDA7XHJcbnZhciBoID0gMDtcclxuXHJcbi8v5ZSH5b2p54m55pWI6YCP5piO5bqmXHJcbnZhciB0cmFuc2x1Y2VudDtcclxudmFyIHRyYW5zbHVjZW50QmFzZSA9IDE7XHJcblxyXG4vL+WUh+W9qeWbvueJh1xudmFyIGltZztcbi8v5ZSH5b2p5Zu+54mH6Lev5b6EXG52YXIgaW1nUGF0aDtcclxuXHJcbi8v5b635Yqz5YaF5LiJ6KeS5YyW6YCA5YyW5oiQ5p+l5om+6KGoXHJcbmNvbnN0IGxpcEluZGV4ID0gbmV3IEludDMyQXJyYXkoW1xyXG4gIDg0LCA4NSwgOTYsXHJcbiAgOTYsIDg1LCA5NyxcclxuICA5NywgODUsIDg2LFxyXG4gIDk3LCA4NiwgODcsXHJcbiAgOTcsIDg3LCA5OCxcclxuICA5OCwgODcsIDg4LFxyXG4gIDk4LCA4OCwgOTksXHJcbiAgOTksIDg4LCA4OSxcclxuICA5OSwgODksIDEwMCxcclxuICAxMDAsIDg5LCA5MCxcclxuICA4NCwgOTYsIDk1LFxyXG4gIDk1LCA5NiwgMTAzLFxyXG4gIDk1LCAxMDMsIDk0LFxyXG4gIDk0LCAxMDMsIDEwMixcclxuICA5NCwgMTAyLCA5MyxcclxuICA5MywgMTAyLCAxMDEsXHJcbiAgOTMsIDEwMSwgOTIsXHJcbiAgOTIsIDEwMSwgOTEsXHJcbiAgOTEsIDEwMSwgMTAwLFxyXG4gIDkxLCAxMDAsIDkwXHJcbiAgICBdKTtcclxuXHJcbi8v5YWz6ZSu54K557yp5pS+55qE54K55a+557Si5byVXG5jb25zdCBsaXBTY2FsZUluZGV4ID0gbmV3IEludDMyQXJyYXkoW1xuICA4NCwgOTYsXG4gIDk2LCA4NCxcbiAgODUsIDk3LFxuICA4NiwgOTcsXG4gIDk3LCA4NixcbiAgODcsIDk4LFxuICA5OCwgODcsXG4gIDg4LCA5OSxcbiAgOTksIDg4LFxuICA4OSwgOTksXG4gIDkwLCAxMDAsXG4gIDEwMCwgOTAsXG4gIDkxLCAxMDEsXG4gIDkyLCAxMDEsXG4gIDEwMSwgOTIsXG4gIDkzLCAxMDIsXG4gIDEwMiwgOTMsXG4gIDk0LCAxMDMsXG4gIDEwMywgOTQsXG4gIDk1LCAxMDNcbiAgICBdKTtcclxuXHRcclxuLy/nurnnkIblnZDmoIdcclxuY29uc3QgbGlwVGV4Q29vcmRuYXRlID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAwLCAwLjUsXHJcbiAgICAwLjE1MywgMC42ODYsXHJcbiAgICAwLjM2OCwgMC43NDEsXHJcbiAgICAwLjUsIDAuNjkzLFxyXG4gICAgMC42MzIsIDAuNzQxLFxyXG4gICAgMC44NDcsIDAuNjg2LFxyXG4gICAgMSwgMC41LFxyXG4gICAgMC44NjMsIDAuMzExLFxyXG4gICAgMC42NzcsIDAuMjQsXHJcbiAgICAwLjUsIDAuMjEyLFxyXG4gICAgMC4zMjMsIDAuMjQsXHJcbiAgICAwLjEzNywgMC4zMTEsXHJcbiAgICAwLjA3MiwgMC40OTksXHJcbiAgICAwLjM2MywgMC41MDQsXHJcbiAgICAwLjUsIDAuNDg4LFxyXG4gICAgMC42MzcsIDAuNTA0LFxyXG4gICAgMC45MjgsIDAuNDk5LFxyXG4gICAgMC42MzcsIDAuNDc1LFxyXG4gICAgMC41LCAwLjQ2NCxcclxuICAgIDAuMzYzLCAwLjQ3NVxyXG4gIF0pO1xyXG5cclxuY29uc3QgcXVhZFZlcnRleCA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG5cdC8v6aG254K55Z2Q5qCHICAg57q555CG5Z2Q5qCHXHJcblx0Ly8tLS0tLS1cXFxcIC8vLS0tLVxcXFxcclxuICAgIC0xLjAsIDEuMCwgMC4wLCAwLjAsXHJcbiAgICAtMS4wLCAtMS4wLCAwLjAsIDEuMCxcclxuICAgIDEuMCwgLTEuMCwgMS4wLCAxLjAsXHJcbiAgICAxLjAsIC0xLjAsIDEuMCwgMS4wLFxyXG4gICAgMS4wLCAxLjAsIDEuMCwgMC4wLFxyXG4gICAgLTEuMCwgMS4wLCAwLjAsIDAuMF0pO1xyXG5cclxuY29uc3QgbGlwVmVydGV4ID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAtMS4wLCAxLjAsIDAuMCwgMC4wLCAxLjAsXHJcbiAgICAtMS4wLCAtMS4wLCAwLjAsIDEuMCwgMS4wLFxyXG4gICAgMS4wLCAtMS4wLCAxLjAsIDEuMCwgMS4wLFxyXG4gICAgMS4wLCAtMS4wLCAxLjAsIDEuMCwgMS4wLFxyXG4gICAgMS4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsXHJcbiAgICAtMS4wLCAxLjAsIDAuMCwgMC4wLCAxLjBdKTtcclxuLy9yZW5kZXIgcmVzb3VyY2VcclxudmFyIHZlcnRTaGFkZXI7XG52YXIgZnJhZ1NoYWRlcjtcbnZhciBzaGFkZXJQcm9ncmFtO1xudmFyIHF1YWRWZXJ0U2hhZGVyO1xudmFyIHF1YWRGcmFnU2hhZGVyO1xudmFyIHF1YWRTaGFkZXJQcm9ncmFtO1xudmFyIHZlcnRleGJ1ZmZlcjtcbnZhciBxdWFkVmVydGV4YnVmZmVyO1xudmFyIGxpcFBvaW50cztcbnZhciBsaXBQb2ludHNJbmRleDtcbnZhciBsaXBQb2ludHNTY2FsZTtcbnZhciBsaXBQb2ludHNVblNjYWxlO1xudmFyIGxpcFRleHR1cmU7XG52YXIgY2FtZXJhVGV4dHVyZTtcclxudmFyIGxpcE1hcmtCZWdpbkluZGV4ID0gODQ7XHJcbnZhciBkYXRhRnJhbWU7XHJcbi8v5Zi05ZSH6Z2i54mH57yp5pS+57O75pWwXG52YXIgbGlwU2NhbGU7XHJcbi8vIHZhciBwb2ludHMgPSBbXVxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ2FyLWNhbWVyYS1jb20nLFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRwb2ludHM6W10sXHJcblx0XHRcdGNhbnZhc09iajoge1xyXG5cdFx0XHRcdHdpZHRoOiAwLFxyXG5cdFx0XHRcdGhlaWdodDogMCxcclxuXHRcdFx0XHR0b3A6IDAsXHJcblx0XHRcdFx0bGVmdDogMCxcclxuXHRcdFx0XHRwaXhlbFJhdGlvOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdGdsOiBudWxsLFxyXG5cdFx0XHRjYW52YXM6IG51bGwsXHJcblx0XHRcdGxpcE1hcmtCZWdpbkluZGV4OiA4NCwgLy/pmL/ph4xhciBzZGvlmLTllIflhbPplK7ngrnotbflp4vntKLlvJVcclxuXHRcdFx0bGlwU2NhbGU6IG51bGwsIC8v5Zi05ZSH6Z2i54mH57yp5pS+57O75pWwXHJcblx0XHRcdGZhY2VQb2ludHM6IHt9LFxyXG5cdFx0XHRwb2ludHM4NEJ5NjM6IFtcclxuXHRcdFx0XHQ5NTcuNTA0MDk0ODIsXHJcblx0XHRcdFx0MjA0OC4yNTA5MDE4NixcclxuXHRcdFx0XHQxMDI0LjIwMzI4OTU0LFxyXG5cdFx0XHRcdDIwMjEuMDAzNTQxODksXHJcblx0XHRcdFx0MTEwMC4zNTUzNTcxNyxcclxuXHRcdFx0XHQxOTk2LjAwMjE4NzM3LFxyXG5cdFx0XHRcdDExNDUuNTY2NTIzMzEsXHJcblx0XHRcdFx0MjAwNy4wNzI4ODQwMSxcclxuXHRcdFx0XHQxMTg5LjI2MzMyMTcsXHJcblx0XHRcdFx0MTk5Ni4wNDc5NTI1NixcclxuXHRcdFx0XHQxMjYxLjQ5ODQ3MDEsXHJcblx0XHRcdFx0MjAxNy40MzkwNjMwNixcclxuXHRcdFx0XHQxMzI1LjIyODMxNTA5LFxyXG5cdFx0XHRcdDIwNDYuNTY2MTg1ODksXHJcblx0XHRcdFx0MTI3Ni41NTcyNzYyNixcclxuXHRcdFx0XHQyMDkzLjg0NzQzOTk3LFxyXG5cdFx0XHRcdDEyMjQuMzkyODI3ODQsXHJcblx0XHRcdFx0MjEzNC4zMjA2OTgxLFxyXG5cdFx0XHRcdDExNDQuNjU1ODIwMjIsXHJcblx0XHRcdFx0MjE0NC4yOTg1OTk0NSxcclxuXHRcdFx0XHQxMDY5LjMyOTQ2MzE4LFxyXG5cdFx0XHRcdDIxMjkuODA4NDY4MTYsXHJcblx0XHRcdFx0MTAxMS40MjQxNDY4MyxcclxuXHRcdFx0XHQyMDk0LjI5MTA0NzU0LFxyXG5cdFx0XHRcdDk4OC4xNjc2MjA1LFxyXG5cdFx0XHRcdDIwNTUuNjIxODgyMzIsXHJcblx0XHRcdFx0MTA1NC45MDc4NTg2MSxcclxuXHRcdFx0XHQyMDUyLjk3MjgyODM5LFxyXG5cdFx0XHRcdDExNTIuNzM1MDcxNSxcclxuXHRcdFx0XHQyMDU0LjE1NjQyNzYyLFxyXG5cdFx0XHRcdDEyNDEuMTI2MzAxMDEsXHJcblx0XHRcdFx0MjA1Ni45ODM2OTk0NCxcclxuXHRcdFx0XHQxMjk5LjY5NzYzNDA3LFxyXG5cdFx0XHRcdDIwNDYuMjM2MTQzOCxcclxuXHRcdFx0XHQxMjM3LjY4NTkyMDkxLFxyXG5cdFx0XHRcdDIwNjIuMzA2NzQ4MTIsXHJcblx0XHRcdFx0MTE0NS43MjkzNjUwNyxcclxuXHRcdFx0XHQyMDcxLjQ3MzgzMDczLFxyXG5cdFx0XHRcdDEwMjQuMjAzMjg5NTQsXHJcblx0XHRcdFx0MjAyMS4wMDM1NDE4OVxyXG5cdFx0XHRdLFxyXG5cdFx0XHR0cmFuc2x1Y2VudDogMC41LFxyXG5cdFx0XHRpbWdMaXBzdGljazogJy9zdGF0aWMvaW1hZ2VzL2FyLW1ha3VwL2xpcENvbG9yMS5wbmcnLFxyXG5cdFx0XHRpbWdNb2RlbDogJy9zdGF0aWMvaW1hZ2VzL2FyLW1ha3VwL21vZGVsMS5qcGcnLFxyXG5cdFx0XHQvLyBpbWdMaXBzdGljazogJ2h0dHBzOi8vY2RuLW1kai5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vY29tbW9uL3Rlc3QtYXItbWFrZXVwL2xpcENvbG9yMS5wbmcnLFxyXG5cdFx0XHQvLyBpbWdNb2RlbDogJ2h0dHBzOi8vY2RuLW1kai5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vY29tbW9uL3Rlc3QtYXItbWFrZXVwL21vZGVsLmpwZycsXHJcblx0XHRcdGlzRmFjZUJlYXV0eTogdHJ1ZSxcclxuXHRcdFx0aXNTaG93RmFjZVBvaW50czogZmFsc2UsXHJcblx0XHRcdCB2ZXJ0ZXhzOiBuZXcgRmxvYXQzMkFycmF5KFtcclxuXHRcdFx0ICAgICAgLTEuMCwgMS4wLCAwLjAsIDAuMCwgMS4wLFxyXG5cdFx0XHQgICAgICAtMS4wLCAtMS4wLCAwLjAsIDAuMCwgMC4wLFxyXG5cdFx0XHQgICAgICAxLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCxcclxuXHRcdFx0ICAgICAgMS4wLCAtMS4wLCAwLjAsIDEuMCwgMC4wXSlcclxuXHRcdH07XHJcblx0fSxcclxuXHRwcm9wczoge30sXHJcblx0Y29tcG9uZW50czoge30sXHJcblx0Y29tcHV0ZWQ6IHt9LFxyXG5cdGNyZWF0ZWQoKSB7XHJcblx0XHQvLyB0aGlzLnNldENhbnZhc1doKCk7XHJcblx0XHR0aGlzLmltZ0xvYWQoKVxyXG5cdH0sXHJcblx0XHJcblx0b25SZWFkeSgpIHt9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGltZ0xvYWQoZSkge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhlLCAnd2lkdGgnLCBlLmRldGFpbC53aWR0aCk7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdoZWlnaHTvvJonLCBlLmRldGFpbC5oZWlnaHQpO1xyXG5cdFx0XHR0aGlzLmhhbmRsZUFSRnJhbWUxKCk7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFx0dHJhbnNsdWNlbnQgPSAwLjU7XHJcblx0XHRcdGxpcE1hcmtCZWdpbkluZGV4ID0gdGhpcy5saXBNYXJrQmVnaW5JbmRleCA9IDg0O1xyXG5cdFx0XHRsaXBTY2FsZSA9IHRoaXMubGlwU2NhbGUgPSAwLjAxO1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIHN5c3RlbUluZm8gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHRcdFx0bGV0IHdJbWcgPSAxMzg5LGhJbWcgPSAxODUyO1xyXG5cdFx0XHQvLyB0aGlzLmltZ1dpZHRoID0gZS5kZXRhaWwud2lkdGhcclxuXHRcdFx0Ly8gdGhpcy5pbWdIZWlnaHQgPSBlLmRldGFpbC5oZWlnaHRcclxuXHRcdFx0dGhpcy5pbWdXaWR0aCA9IHdJbWdcclxuXHRcdFx0dGhpcy5pbWdIZWlnaHQgPSBoSW1nXHJcblx0XHRcdGxldCB3ID0gIHN5c3RlbUluZm8ud2luZG93V2lkdGg7XHJcblx0XHRcdGxldCBoID0gIHN5c3RlbUluZm8ud2luZG93SGVpZ2h0O1xyXG5cdFx0XHRsZXQgciA9IHdJbWcgLyBoSW1nO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhzeXN0ZW1JbmZvLCAnZ2V0SW1hZ2VJbmZvJywgdGhpcy5jYW52YXNPYmosIHcsIGgsIHIpO1xyXG5cdFx0XHRpZiAodyAvIGggPCByKSB7XHJcblx0XHRcdFx0Ly8g6KGo56S66auY5piv55+t6L65LOeOsOWcqOWuveWJp+S4rVxyXG5cdFx0XHRcdHRoaXMuY2FudmFzT2JqLmhlaWdodCA9IGg7XHJcblx0XHRcdFx0dGhpcy5jYW52YXNPYmoud2lkdGggPSByICogaDtcclxuXHRcdFx0XHR0aGlzLmNhbnZhc09iai50b3AgPSAwIDtcclxuXHRcdFx0XHR0aGlzLmNhbnZhc09iai5sZWZ0ID0gKHcgLSB0aGlzLmNhbnZhc09iai53aWR0aCkgLyAyO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuY2FudmFzT2JqLndpZHRoID0gdztcclxuXHRcdFx0XHR0aGlzLmNhbnZhc09iai5oZWlnaHQgPSB3IC8gcjtcclxuXHRcdFx0XHR0aGlzLmNhbnZhc09iai50b3AgPSAoaCAtIHRoaXMuY2FudmFzT2JqLmhlaWdodCkgLyAyO1xyXG5cdFx0XHRcdHRoaXMuY2FudmFzT2JqLmxlZnQgPSAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuY2FudmFzT2JqLnBpeGVsUmF0aW8gPSBzeXN0ZW1JbmZvLnBpeGVsUmF0aW87XHJcblx0XHRcdGNvbnNvbGUubG9nKHcgLyBoIDwgciwgJ+OAguOAguOAguOAguOAguOAguOAgnRoaXMuY2FudmFzT2Jq44CC44CC44CCJywgdGhpcy5jYW52YXNPYmopO1xyXG5cdFx0XHQvLyAjaWZkZWYgTVAtV0VJWElOIHx8IE1QLUtVQUlTSE9VIHx8IE1QLUpEXHJcblx0XHRcdHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHR0aGlzLmNhbnZhc1d4Rm4oKTtcclxuXHRcdFx0fSwxMDAwKVxyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHRcdH0sXHJcblx0XHRjYW52YXNXeEZuKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gI2lmZGVmIE1QLVdFSVhJTiB8fCBNUC1LVUFJU0hPVSB8fCBNUC1KRFxyXG5cdFx0XHRcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHR1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpXHJcblx0XHRcdFx0ICAgICAgLnNlbGVjdCgnI2FyY2FudmFzJylcclxuXHRcdFx0XHQgICAgICAubm9kZSgpXHJcblx0XHRcdFx0ICAgICAgLmV4ZWMocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ2RyYXdBaXdlbmR5JywgcmVzKTtcclxuXHRcdFx0XHRcdFx0Y29uc3QgYyA9IHJlc1swXS5ub2RlO1xyXG5cdFx0XHRcdFx0XHQvLyBpZighYyl7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdC8vIH1cclxuXHRcdFx0XHRcdFx0dmFyIHN5c3RlbUluZm8gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+OAguOAguOAgnN5c3RlbUluZm/jgILjgIInLCB0aGlzLmNhbnZhc09iaiwgdGhpcy5jYW52YXNPYmopO1xyXG5cdFx0XHRcdFx0XHRjLmhlaWdodCA9IHRoaXMuY2FudmFzT2JqLmhlaWdodDtcclxuXHRcdFx0XHRcdFx0Yy53aWR0aCA9IHRoaXMuY2FudmFzT2JqLndpZHRoO1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhjLndpZHRoLCAn44CC44CC44CC44CC44CC44CC44CCdW5pLmNyZWF0ZUNhbnZhc+OAguOAgnN1Y2Nlc3PjgIInLCBjKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5nbCA9IGMuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcclxuXHRcdFx0XHRcdFx0Z2wgPSB0aGlzLmdsO1xyXG5cdFx0XHRcdFx0XHRpZiAoIWdsKSB7XHJcblx0XHRcdFx0XHRcdCAgY29uc29sZS5sb2coJ3dlYmds5pyq5Y+X5pSv5oyBJyk7XHJcblx0XHRcdFx0XHRcdCAgcmV0dXJuXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhpcy5jYW52YXMgPSBjO1xyXG5cdFx0XHRcdFx0XHRjYW52YXMgPSBjO1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLnBvaW50cywn44CC44CC44CC44CC44CC44CC44CCdW5pLmNyZWF0ZUNhbnZhc+OAguOAgnN1Y2Nlc3PjgIInLCBnbCk7XHJcblx0XHRcdFx0XHRcdC8vIHRoaXMucmVuZGVySW1nKClcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFByb21pc2UuYWxsKFt0aGlzLmNoYW5nZUxpcFN0eWxlKHRoaXMuaW1nTGlwc3RpY2spLFxyXG5cdFx0XHRcdFx0XHRcdC8vIHRoaXMudXBkYXRlRmFjZURhdGExKClcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmNoYW5nZUxpcFN0eWxlKHRoaXMuaW1nTW9kZWwpXHJcblx0XHRcdFx0XHRcdF0pLnRoZW4ocmVzPT57XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ3poaXhpbmd3YW5iaSDlk4jlk4jlk4gnLHJlcylcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmxpcFJlbmRlclBpcGVsaW5lKClcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnF1YWRSZW5kZXJQaXBlbGluZSgpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZHJhd1F1YW4ocmVzWzFdKVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZHJhd0xpcChyZXNbMF0pXHJcblx0XHRcdFx0XHRcdFx0Ly8gdGhpcy5kcmF3RmFjZVBvaW50cyh0aGlzLnBvaW50cyk7XHJcblx0XHRcdFx0XHRcdH0pLmNhdGNoKGVycj0+e1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCflpLHotKUg5ZOI5ZOI5ZOIJyxlcnIpXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHQvL1RPRE8gaGFuZGxlIHRoZSBleGNlcHRpb25cclxuXHRcdFx0XHRjb25zb2xlLmxvZygnLi4uLicsIGUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0Ly8gdGhpcy5vbkNhbnZhc1JlYWR5KCdhcmNhbnZhcycpXHJcblx0XHR9LFxyXG5cdFx0b25DYW52YXNSZWFkeShpZCl7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdvbkNhbnZhc1JlYWR5IGthaXNoaSDlk4jlk4jlk4gnKVxyXG5cdFx0XHQvLyB0aGlzLmltZ0xvYWQoKTtcclxuXHRcdFx0Ly8gI2lmZGVmIE1QLUFMSVBBWVxyXG5cdFx0XHR0cnl7XHJcblx0XHRcdFx0bXkuX2NyZWF0ZUNhbnZhcyh7XHJcblx0XHRcdFx0XHRpZCxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IChjKSA9PiB7XHJcblx0XHRcdFx0XHRcdHZhciBzeXN0ZW1JbmZvID0gbXkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+OAguOAguOAgnN5c3RlbUluZm/jgILjgIInLEpTT04uc3RyaW5naWZ5KHN5c3RlbUluZm8pKVxyXG5cdFx0XHRcdFx0XHQvLyBjLmhlaWdodCA9IDE4NTI7XHJcblx0XHRcdFx0XHRcdC8vIGMud2lkdGggPSAxMzg5O1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn44CC44CC44CC44CC44CC44CC44CCbXkuY3JlYXRlQ2FudmFz44CC44CCc3VjY2Vzc+OAgicsYyk7XHJcblx0XHRcdFx0XHRcdHRoaXMuZ2wgPSBjLmdldENvbnRleHQoJ3dlYmdsJyk7XHJcblx0XHRcdFx0XHRcdGdsID0gdGhpcy5nbDtcclxuXHRcdFx0XHRcdFx0dGhpcy5jYW52YXMgPSBjO1xyXG5cdFx0XHRcdFx0XHRjYW52YXMgPSBjO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnJlbmRlckltZygpXHJcblx0XHRcdFx0XHRcdC8vIHRoaXMuZHJhd0ZhY2VQb2ludHModGhpcy5wb2ludHMpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWw6KCk9PntcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+OAguOAguOAguOAguOAguOAguOAgm15LmNyZWF0ZUNhbnZhc+OAguOAgmZhaWzjgIInKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvLyBteS5fY3JlYXRlQ2FudmFzKHtcclxuXHRcdFx0XHQvLyBcdGlkOidhcmNhbnZhcycsXHJcblx0XHRcdFx0Ly8gXHRzdWNjZXNzOiAoYykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHQvLyBcdFx0dmFyIHN5c3RlbUluZm8gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHRcdFx0XHQvLyBcdFx0Y29uc29sZS5sb2coJ+OAguOAguOAgnN5c3RlbUluZm/jgILjgIInLCB0aGlzLmNhbnZhc09iaiwgdGhpcy5jYW52YXNPYmopO1xyXG5cdFx0XHRcdC8vIFx0XHRjLmhlaWdodCA9IDE4NTIqc3lzdGVtSW5mby5waXhlbFJhdGlvO1xyXG5cdFx0XHRcdC8vIFx0XHRjLndpZHRoID0gMTM4OSpzeXN0ZW1JbmZvLnBpeGVsUmF0aW87XHJcblx0XHRcdFx0Ly8gXHRcdGNvbnNvbGUubG9nKGMud2lkdGgsICfjgILjgILjgILjgILjgILjgILjgIJ1bmkuY3JlYXRlQ2FudmFz44CC44CCc3VjY2Vzc+OAgicsIGMpO1xyXG5cdFx0XHRcdC8vIFx0XHR0aGlzLmdsID0gYy5nZXRDb250ZXh0KCd3ZWJnbCcpO1xyXG5cdFx0XHRcdC8vIFx0XHRnbCA9IHRoaXMuZ2w7XHJcblx0XHRcdFx0Ly8gXHRcdHRoaXMuY2FudmFzID0gYztcclxuXHRcdFx0XHQvLyBcdFx0Y2FudmFzID0gYztcclxuXHRcdFx0XHQvLyBcdFx0Y29uc29sZS5sb2codGhpcy5wb2ludHMsJ+OAguOAguOAguOAguOAguOAguOAgnVuaS5jcmVhdGVDYW52YXPjgILjgIJzdWNjZXNz44CCJywgZ2wpO1xyXG5cdFx0XHRcdC8vIFx0XHQvLyB0aGlzLnJlbmRlckltZygpXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdC8vIFx0XHRQcm9taXNlLmFsbChbXHJcblx0XHRcdFx0Ly8gXHRcdFx0Ly8gdGhpcy5jaGFuZ2VMaXBTdHlsZSh0aGlzLmltZ0xpcHN0aWNrKSzigJlcclxuXHRcdFx0XHQvLyBcdFx0XHR0aGlzLmNoYW5nZUxpcFN0eWxlKHRoaXMuaW1nTW9kZWwpXHJcblx0XHRcdFx0Ly8gXHRcdF0pLnRoZW4ocmVzPT57XHJcblx0XHRcdFx0Ly8gXHRcdFx0Y29uc29sZS5sb2coJ3poaXhpbmd3YW5iaSDlk4jlk4jlk4gnLHJlcylcclxuXHRcdFx0XHQvLyBcdFx0XHQvLyB0aGlzLmxpcFJlbmRlclBpcGVsaW5lKCk7XHJcblx0XHRcdFx0Ly8gXHRcdFx0Ly8gdGhpcy5xdWFkUmVuZGVyUGlwZWxpbmUoKTtcclxuXHRcdFx0XHQvLyBcdFx0XHQvLyB0aGlzLmRyYXdRdWFuKHJlc1sxXSlcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHQvLyBcdFx0XHQvLyB0aGlzLmRyYXdMaXAocmVzWzBdKVxyXG5cdFx0XHRcdC8vIFx0XHRcdHRoaXMuZHJhd0ZhY2VQb2ludHModGhpcy5wb2ludHMpO1xyXG5cdFx0XHRcdC8vIFx0XHR9KS5jYXRjaChlcnI9PntcclxuXHRcdFx0XHQvLyBcdFx0XHRjb25zb2xlLmxvZygn5aSx6LSlIOWTiOWTiOWTiCcsZXJyKVxyXG5cdFx0XHRcdC8vIFx0XHR9KVxyXG5cdFx0XHRcdC8vIFx0XHR9LFxyXG5cdFx0XHRcdC8vIFx0ZmFpbDooKT0+e1xyXG5cdFx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZygn44CC44CC44CC44CC44CC44CC44CCbXkuY3JlYXRlQ2FudmFz44CC44CCZmFpbOOAgicpO1xyXG5cdFx0XHRcdC8vIFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHQvLyBcdH0pXHJcblx0XHRcdH1jYXRjaChlKXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn44CC44CC44CC44CC44CC44CC44CCbXkuY3JlYXRlQ2FudmFz44CC44CCY2F0Y2jjgIInLGUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0fSxcclxuXHRcdGhhbmRsZUFSRnJhbWUxKCkge1xyXG5cdFx0XHR2YXIgcmF3UG9pbnRzID0gdGhpcy5wb2ludHM4NEJ5NjMubWFwKGl0ZW09Pml0ZW0qMC42KTtcclxuXHRcdFx0bGV0IGxlbiA9IDEwNjtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCA4NDsgaSsrKSB7XHJcblx0XHRcdFx0cmF3UG9pbnRzLnVuc2hpZnQoMC4xLCAwLjEpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvciAodmFyIGkgPSAxMDQ7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdHJhd1BvaW50cy5wdXNoKDAuMSwgMC4xKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmdW5jdGlvbiB0cmFuc2Zvcm1Qb2ludChwb2ludCwgZncsIGZoKSB7XHJcblx0XHRcdFx0cmV0dXJuIFsocG9pbnRbMF0gLyBmdykgKiAyIC0gMSwgKDEgLSBwb2ludFsxXSAvIGZoKSAqIDIgLSAxXTtcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgcG9pbnRzID0gW11cclxuXHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA2OyBpKyspIHtcclxuXHRcdFx0XHRwb2ludHMucHVzaCh0cmFuc2Zvcm1Qb2ludChbcmF3UG9pbnRzW2kgKiAyXSwgcmF3UG9pbnRzW2kgKiAyICsgMV1dLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnNvbGUubG9nKHBvaW50cywnLi4uZ2wg5Ye65p2l5LqG5LmILi4uLicpXHJcblx0XHRcdHRoaXMucG9pbnRzID0gcG9pbnRzO1xyXG5cdFx0fSxcclxuXHRcdHF1YWRSZW5kZXJQaXBlbGluZSgpIHtcclxuXHRcdFx0Lyo9PT09PT09PT09PT09PT09PT09PT09PT09U2hhZGVycz09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblx0XHRcdGNvbnN0IEZTSVpFID0gNDtcclxuXHRcdFx0dmFyIHF1YWRWZXJ0Q29kZSA9XHJcblx0XHRcdCAgYCN2ZXJzaW9uIDMwMCBlc1xyXG5cdFx0XHQgICAgICBsYXlvdXQobG9jYXRpb24gPSAwKSBpbiB2ZWMyIGFfcG9zaXRpb247XHJcblx0XHRcdCAgICAgIGxheW91dChsb2NhdGlvbiA9IDEpIGluIHZlYzIgYV91djtcclxuXHRcdFx0ICAgICAgb3V0IHZlYzIgdXZfb3V0O1xyXG5cdFx0XHQgICAgICB2b2lkIG1haW4oKSB7XHJcblx0XHRcdCAgICAgICAgZ2xfUG9zaXRpb24gPSB2ZWM0KGFfcG9zaXRpb24sIDEuMCwgMS4wKTtcclxuXHRcdFx0ICAgICAgICB1dl9vdXQgPSBhX3V2O1xyXG5cdFx0XHQgICAgICB9XHJcblx0XHRcdCAgICAgIGA7XHJcblx0XHRcdGNvbnN0IHF1YWRGcmFnQ29kZSA9XHJcblx0XHRcdCAgYCN2ZXJzaW9uIDMwMCBlc1xyXG5cdFx0XHQgICAgICBwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcclxuXHRcdFx0ICAgICAgaW4gdmVjMiB1dl9vdXQ7XHJcblx0XHRcdCAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVfdGV4dHVyZTtcclxuXHRcdFx0ICAgICAgbGF5b3V0KGxvY2F0aW9uID0gMCkgb3V0IHZlYzQgb3V0Q29sb3I7XHJcblx0XHRcdCAgICAgIHZvaWQgbWFpbigpIHtcclxuXHRcdFx0ICAgICAgICB2ZWMyIHV2ID0gdmVjMih1dl9vdXQueCwgdXZfb3V0LnkpO1xyXG5cdFx0XHQgICAgICAgIG91dENvbG9yID0gdmVjNCh0ZXh0dXJlKHVfdGV4dHVyZSwgdXYpLnh5eiwgMS4wKTtcclxuXHRcdFx0ICAgICAgfVxyXG5cdFx0XHQgICAgICBgO1xyXG5cdFx0XHRcdCAgY29uc29sZS5sb2coXCJxdWFkVmVydFNoYWRlcueahOWAvFwiLCBxdWFkVmVydFNoYWRlcik7XHJcblx0XHRcdHF1YWRWZXJ0U2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIpOyAvLyDliJvlu7rpobbngrnnnYDoibLlmahcclxuXHRcdFx0Z2wuc2hhZGVyU291cmNlKHF1YWRWZXJ0U2hhZGVyLCBxdWFkVmVydENvZGUpOyAvLyDnu5HlrprpobbngrnnnYDoibLlmajmupDnoIFcclxuXHRcdFx0Z2wuY29tcGlsZVNoYWRlcihxdWFkVmVydFNoYWRlcik7IC8vIOe8luivkeWumueCueedgOiJsuWZqFxyXG5cdFx0XHRcclxuXHRcdFx0Y29uc29sZS5sb2coXCJxdWFkVmVydFNoYWRlcueahOWAvDFcIiwgcXVhZFZlcnRTaGFkZXIpO1xyXG5cdFx0XHRcclxuXHRcdFx0cXVhZEZyYWdTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuRlJBR01FTlRfU0hBREVSKTsgLy8g5Yib5bu654mH5YWD552A6Imy5ZmoXHJcblx0XHRcdGdsLnNoYWRlclNvdXJjZShxdWFkRnJhZ1NoYWRlciwgcXVhZEZyYWdDb2RlKTsgLy8g57uR5a6a54mH5YWD552A6Imy5Zmo5rqQ56CBXHJcblx0XHRcdGdsLmNvbXBpbGVTaGFkZXIocXVhZEZyYWdTaGFkZXIpOyAvLyDnvJbor5HniYflhYPnnYDoibLlmahcclxuXHRcdFx0Y29uc29sZS5sb2coXCJxdWFkRnJhZ1NoYWRlcueahOWAvFwiLCBxdWFkRnJhZ1NoYWRlcik7XHJcblx0XHRcdFxyXG5cdFx0XHRxdWFkU2hhZGVyUHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTsgIC8vIOWIm+W7uuedgOiJsuWZqOeoi+W6j1xyXG5cdFx0XHRnbC5hdHRhY2hTaGFkZXIocXVhZFNoYWRlclByb2dyYW0sIHF1YWRWZXJ0U2hhZGVyKTsgLy8g5oyH5a6a6aG254K5552A6Imy5ZmoXHJcblx0XHRcdGdsLmF0dGFjaFNoYWRlcihxdWFkU2hhZGVyUHJvZ3JhbSwgcXVhZEZyYWdTaGFkZXIpOyAgLy8g5oyH5a6a54mH5YWD552A6Imy6Imy5ZmoXHJcblx0XHRcdGdsLmxpbmtQcm9ncmFtKHF1YWRTaGFkZXJQcm9ncmFtKTsgIC8vIOmTvuaOpeeoi+W6j1xyXG5cdFx0XHRnbC51c2VQcm9ncmFtKHF1YWRTaGFkZXJQcm9ncmFtKTsgIC8v5L2/55So552A6Imy5ZmoXHJcblx0XHRcdGNvbnNvbGUubG9nKFwicXVhZFNoYWRlclByb2dyYW0g5riy5p+T5oiQ5Yqf5ZCmXCIpO1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0ZHJhd1F1YW4ocmVzKXtcclxuXHRcdFx0IC8vIGdsLnVzZVByb2dyYW0oMCk7XHJcblx0XHRcdGdsLmNsZWFyQ29sb3IoMC4wLCAwLjAsIDAuMCwgMC4wKTtcclxuXHRcdFx0Z2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHRcclxuXHRcdFx0XHJcblx0XHRcdGNvbnN0IEZTSVpFID0gNDtcclxuXHRcdFx0cXVhZFZlcnRleGJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpOyAvLyAg5Yib5bu657yT5Yay5Yy65a+56LGhKGdsLmNyZWF0ZUJ1ZmZlcigpKVxyXG5cdFx0XHRpZiAocXVhZFZlcnRleGJ1ZmZlciA9PT0gbnVsbCkge1xyXG5cdFx0XHQgICAgICBjb25zb2xlLmxvZyhcInF1YWRWZXJ0ZXhidWZmZXIgaXMgbnVsbFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zb2xlLmxvZyhcInF1YWRWZXJ0ZXhidWZmZXJcIiwgcXVhZFZlcnRleGJ1ZmZlcik7XHJcblx0XHRcdC8vIOe7keWumue8k+WGsuWMuuWvueixoShnbC5iaW5kQnVmZmVyKHRhcmdldCwgYnVmZmVyKSlcclxuXHRcdFx0Z2wuZGlzYWJsZShnbC5CTEVORCk7XHJcblx0XHRcdGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBxdWFkVmVydGV4YnVmZmVyKTtcclxuXHRcdFx0Ly8g5bCG5pWw5o2u5YaZ5YWl57yT5Yay5Yy65a+56LGhKGdsLmJ1ZmZlckRhdGEoKSkgV2ViR0wg5LiN5pSv5oyB55u05o6l5L2/55SoIEphdmFTY3JpcHQg5Y6f5aeL5pWw57uE57G75Z6L77yM6ZyA6KaB6L2s5o2iXHJcblx0XHRcdGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBxdWFkVmVydGV4LCBnbC5TVEFUSUNfRFJBVyk7XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zdCBxcG9zbG9jYXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihxdWFkU2hhZGVyUHJvZ3JhbSwgJ2FfcG9zaXRpb24nKTtcclxuXHRcdFx0Z2wudmVydGV4QXR0cmliUG9pbnRlcihxcG9zbG9jYXRpb24sIDIsIGdsLkZMT0FULCBmYWxzZSwgRlNJWkUgKiA0LCAwKTsgIC8v5bCG6aG254K55Z2Q5qCH55qE5L2N572u6LWL5YC8XHJcblx0XHRcdGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHFwb3Nsb2NhdGlvbik7ICAgIC8vIOi1i+iDvS3mibnlpITnkIZcclxuXHRcdFx0Y29uc29sZS5sb2coXCJxcG9zbG9jYXRpb25cIiwgcXBvc2xvY2F0aW9uKTtcclxuXHRcdFx0XHJcblx0XHRcdGNvbnN0IHF1diA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHF1YWRTaGFkZXJQcm9ncmFtLCAnYV91dicpO1xyXG5cdFx0XHRnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHF1diwgMiwgZ2wuRkxPQVQsIGZhbHNlLCBGU0laRSAqIDQsIEZTSVpFICogMik7XHJcblx0XHRcdGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHF1dik7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwicXV2IDIyMlwiLCBxdXYpO1xyXG5cdFx0XHRcclxuXHRcdFx0Y2FtZXJhVGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTsgLy/liJvlu7rnurnnkIblr7nosaFcclxuXHRcdFx0Y29uc29sZS5sb2coXCJjYW1lcmFUZXh0dXJlIGdsLmNyZWF0ZVRleHR1cmVcIiwgY2FtZXJhVGV4dHVyZSk7XHJcblx0XHRcdGlmIChjYW1lcmFUZXh0dXJlID09PSBudWxsKSB7XHJcblx0XHRcdCAgY29uc29sZS5sb2coXCJjYW1lcmFUZXh0dXJlIGlzIG51bGxcIik7XHJcblx0XHRcdCAgLy8gcmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTApOy8vIOW8gOWQrzDlj7fnurnnkIbljZXlhYNcclxuXHRcdFx0Z2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgY2FtZXJhVGV4dHVyZSk7IC8vIOWQkXRhcmdldOe7keWumue6ueeQhuWvueixoVxyXG5cdFx0XHRnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcclxuXHRcdFx0Z2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcblx0XHRcdGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpO1xyXG5cdFx0XHRnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTElORUFSKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJjYW1lcmFUZXh0dXJlIFwiLCBjYW1lcmFUZXh0dXJlKTtcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBjYW1lcmFUZXh0dXJlKTtcclxuXHRcdFx0Z2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCByZXMpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgY2FtZXJhVGV4dHVyZSk7XHJcblx0XHRcdFx0ICBcclxuXHRcdFx0Z2wudXNlUHJvZ3JhbShxdWFkU2hhZGVyUHJvZ3JhbSk7XHJcblx0XHRcdGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVTLCAwLCA2KTtcclxuXHRcdH0sXHJcblx0XHRsaXBSZW5kZXJQaXBlbGluZSgpIHtcclxuXHRcdFx0Y29uc3QgRlNJWkUgPSA0O1xyXG5cdFx0XHR2YXIgdmVydENvZGUgPVxyXG5cdFx0XHQgIGAjdmVyc2lvbiAzMDAgZXNcclxuXHRcdFx0ICAgICAgbGF5b3V0KGxvY2F0aW9uID0gMCkgaW4gdmVjMiBhX3Bvc2l0aW9uO1xyXG5cdFx0XHQgICAgICBsYXlvdXQobG9jYXRpb24gPSAxKSBpbiB2ZWMzIGFfdXY7XHJcblx0XHRcdCAgICAgIG91dCB2ZWMzIHV2X291dDtcclxuXHRcdFx0ICAgICAgdm9pZCBtYWluKCkge1xyXG5cdFx0XHQgICAgICAgIGdsX1Bvc2l0aW9uID0gdmVjNChhX3Bvc2l0aW9uLCAxLjAsIDEuMCk7XHJcblx0XHRcdCAgICAgICAgdXZfb3V0ID0gYV91djtcclxuXHRcdFx0ICAgICAgICAvL3V2X291dCA9IHZlYzIoMS4wLCAwLjApO1xyXG5cdFx0XHQgICAgICB9XHJcblx0XHRcdCAgICAgIGA7XHJcblx0XHRcdGNvbnN0IGZyYWdDb2RlID1cclxuXHRcdFx0ICBgI3ZlcnNpb24gMzAwIGVzXHJcblx0XHRcdCAgICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG5cdFx0XHQgICAgICBpbiB2ZWMzIHV2X291dDtcclxuXHRcdFx0ICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgdV90ZXh0dXJlO1xyXG5cdFx0XHQgICAgICB1bmlmb3JtIHNhbXBsZXIyRCB1X3RleHR1cmUyO1xyXG5cdFx0XHQgICAgICBsYXlvdXQobG9jYXRpb24gPSAwKSBvdXQgdmVjNCBvdXRDb2xvcjtcclxuXHRcdFx0ICAgICAgdm9pZCBtYWluKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0ICAgICAgICB2ZWMyIHV2ID0gdmVjMih1dl9vdXQueCwgMS4wIC0gdXZfb3V0LnkpO1xyXG5cdFx0XHQgICAgICAgIHZlYzMgbGlwQ29sb3IgPSB0ZXh0dXJlKHVfdGV4dHVyZSwgdXYpLnh5ejtcclxuXHRcdFx0ICAgICAgICB2ZWMzIGMgPSBsaXBDb2xvcjtcclxuXHRcdFx0ICAgICAgICB2ZWM0IEsgPSB2ZWM0KDAuMCwgLTEuMCAvIDMuMCwgMi4wIC8gMy4wLCAtMS4wKTtcclxuXHRcdFx0ICAgICAgICB2ZWM0IHAgPSBtaXgodmVjNChjLmJnLCBLLnd6KSwgdmVjNChjLmdiLCBLLnh5KSwgc3RlcChjLmIsIGMuZykpO1xyXG5cdFx0XHQgICAgICAgIHZlYzQgcSA9IG1peCh2ZWM0KHAueHl3LCBjLnIpLCB2ZWM0KGMuciwgcC55engpLCBzdGVwKHAueCwgYy5yKSk7XHJcblx0XHRcdFxyXG5cdFx0XHQgICAgICAgIGZsb2F0IGQgPSBxLnggLSBtaW4ocS53LCBxLnkpO1xyXG5cdFx0XHQgICAgICAgIGZsb2F0IGUgPSAxLjBlLTEwO1xyXG5cdFx0XHQgICAgICAgIHZlYzMgaGMgPSB2ZWMzKGFicyhxLnogKyAocS53IC0gcS55KSAvICg2LjAgKiBkICsgZSkpLCBkIC8gKHEueCArIGUpLCBxLngpO1xyXG5cdFx0XHRcclxuXHRcdFx0ICAgICAgICBoYy55ICo9IDEuMjtcclxuXHRcdFx0XHJcblx0XHRcdCAgICAgICAgdmVjNCBMID0gdmVjNCgxLjAsIDIuMCAvIDMuMCwgMS4wIC8gMy4wLCAzLjApO1xyXG5cdFx0XHQgICAgICAgIHZlYzMgTSA9IGFicyhmcmFjdChoYy54eHggKyBMLnh5eikgKiA2LjAgLSBMLnd3dyk7XHJcblx0XHRcdCAgICAgICAgdmVjMyBjb2xvciA9IGhjLnogKiBtaXgoTC54eHgsIGNsYW1wKE0gLSBMLnh4eCwgMC4wLCAxLjApLCBoYy55KTtcclxuXHRcdFx0XHJcblx0XHRcdCAgICAgICAgLy9vdXRDb2xvciA9IHZlYzQoY29sb3IsIDEuMCk7XHJcblx0XHRcdCAgICAgICAgXHJcblx0XHRcdCAgICAgICAgXHJcblx0XHRcdCAgICAgICAgLy92ZWM0IGxpcENvbG9yID0gdGV4dHVyZSh1X3RleHR1cmUsIHV2KTtcclxuXHRcdFx0ICAgICAgICB2ZWM0IGZyYW1lQ29sb3IgPSB0ZXh0dXJlKHVfdGV4dHVyZTIsIHV2X291dC54eSk7XHJcblx0XHRcdCAgICAgICAgLy92ZWMzIGZpbmFsQ29sb3IgPSBsaXBDb2xvci54eXogKiBsaXBDb2xvci53ICsgZnJhbWVDb2xvci54eXogKiAoMS4wIC0gbGlwQ29sb3Iudyk7XHJcblx0XHRcdCAgICAgICAgZmxvYXQgYWxwaGEgPSB0ZXh0dXJlKHVfdGV4dHVyZSwgdXYpLnc7XHJcblx0XHRcdCAgICAgICAgb3V0Q29sb3IgPSB2ZWM0KGNvbG9yLnh5eiwgYWxwaGEgKiB1dl9vdXQueik7XHJcblx0XHRcdCAgICAgIH1cclxuXHRcdFx0ICAgICAgYDtcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHRcdCAgXHJcblx0XHRcdHZlcnRTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUik7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAodmVydFNoYWRlciA9PT0gbnVsbCkge1xyXG5cdFx0XHQgIGNvbnNvbGUubG9nKFwidmVydFNoYWRlciBpcyBudWxsXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGdsLnNoYWRlclNvdXJjZSh2ZXJ0U2hhZGVyLCB2ZXJ0Q29kZSk7XHJcblx0XHRcdGdsLmNvbXBpbGVTaGFkZXIodmVydFNoYWRlcik7XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zb2xlLmxvZyhcInZlcnRTaGFkZXIgaXMgY29tcGlsZVNoYWRlciBcIik7XHJcblx0XHRcdFxyXG5cdFx0XHRmcmFnU2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUik7XHJcblx0XHRcdGdsLnNoYWRlclNvdXJjZShmcmFnU2hhZGVyLCBmcmFnQ29kZSk7XHJcblx0XHRcdGdsLmNvbXBpbGVTaGFkZXIoZnJhZ1NoYWRlcik7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0Y29uc29sZS5sb2coXCJmcmFnU2hhZGVyIGlzIGNvbXBpbGVTaGFkZXIgXCIpO1xyXG5cdFx0XHRzaGFkZXJQcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xyXG5cdFx0XHRnbC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgdmVydFNoYWRlcik7XHJcblx0XHRcdGdsLmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCBmcmFnU2hhZGVyKTtcclxuXHRcdFx0Z2wubGlua1Byb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XHJcblx0XHRcdGdsLnVzZVByb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCfjgILjgILjgILjgILliJ3lp4vljJbnnYDoibLlmajmmK/lkKbmiJDlip/jgILjgILjgILjgIInKTtcclxuXHRcdH0sXHJcblx0XHRkcmF3TGlwKHJlcyl7XHJcblx0XHRcdGxpcFBvaW50cyA9IFtdO1xyXG5cdFx0XHRsZXQgbGlwUG9pbnRDb3VudCA9IDEwNiAqIDI7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGlwUG9pbnRDb3VudDsgaSsrKSB7XHJcblx0XHRcdCAgbGlwUG9pbnRzLnB1c2goMC4wKTtcclxuXHRcdFx0ICBsaXBQb2ludHMucHVzaCgwLjApO1xyXG5cdFx0XHQgIGxpcFBvaW50cy5wdXNoKDAuMCk7XHJcblx0XHRcdCAgbGlwUG9pbnRzLnB1c2goMC4wKTtcclxuXHRcdFx0ICBsaXBQb2ludHMucHVzaCgwLjApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnNvbGUubG9nKFwibGlwUG9pbnRz55qE5YC86K6h566X5byA5aeLIFwiKTtcclxuXHRcdFx0XHJcblx0XHRcdGxpcFBvaW50Q291bnQgPSBsaXBJbmRleC5sZW5ndGg7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGlwUG9pbnRDb3VudDsgaSsrKSB7XHJcblx0XHRcdCAgdmFyIGluZGV4ID0gbGlwSW5kZXhbaV07XHJcblx0XHRcdCAgbGlwUG9pbnRzW2kgKiA1XSA9IHRoaXMucG9pbnRzW2luZGV4XVswXTtcclxuXHRcdFx0ICBsaXBQb2ludHNbaSAqIDUgKyAxXSA9IHRoaXMucG9pbnRzW2luZGV4XVsxXTtcclxuXHRcdFx0ICBsaXBQb2ludHNbaSAqIDUgKyAyXSA9IGxpcFRleENvb3JkbmF0ZVsyICogKGluZGV4IC0gbGlwTWFya0JlZ2luSW5kZXgpXTtcclxuXHRcdFx0ICBsaXBQb2ludHNbaSAqIDUgKyAzXSA9IGxpcFRleENvb3JkbmF0ZVsyICogKGluZGV4IC0gbGlwTWFya0JlZ2luSW5kZXgpICsgMV07XHJcblx0XHRcdCAgbGlwUG9pbnRzW2kgKiA1ICsgNF0gPSB0cmFuc2x1Y2VudDtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Y29uc29sZS5sb2cobGlwTWFya0JlZ2luSW5kZXgsXCJsaXBQb2ludHPnmoTlgLwgaGFoXCIsIGxpcFBvaW50cyxsaXBUZXhDb29yZG5hdGUpO1xyXG5cdFx0XHR2ZXJ0ZXhidWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuXHRcdFx0aWYgKHZlcnRleGJ1ZmZlciA9PT0gbnVsbCkge1xyXG5cdFx0XHQgIGNvbnNvbGUubG9nKFwidmVydGV4YnVmZmVyIGlzIG51bGxcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc29sZS5sb2coJ2RyYXdGYWNlTGlwZHJhd0ZhY2VMaXDlvIDlp4tnbC5BUlJBWV9CVUZGRVInLCB2ZXJ0ZXhidWZmZXIpXHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0Y29uc3QgRlNJWkUgPSA0O1xyXG5cdFx0XHRnbC5lbmFibGUoZ2wuQkxFTkQpO1xyXG5cdFx0XHRnbC5ibGVuZEZ1bmNTZXBhcmF0ZShnbC5TUkNfQUxQSEEsIGdsLk9ORV9NSU5VU19TUkNfQUxQSEEsIGdsLk5PTkUsIGdsLk9ORSk7XHJcblx0XHRcdGdsLmJsZW5kRXF1YXRpb25TZXBhcmF0ZShnbC5GVU5DX0FERCwgZ2wuRlVOQ19BREQpO1xyXG5cdFx0XHRnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdmVydGV4YnVmZmVyKTtcclxuXHRcdFx0Z2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkobGlwUG9pbnRzKSwgZ2wuU1RSRUFNX0RSQVcpO1xyXG5cdFx0XHRcclxuXHRcdFx0Y29uc3QgYXBvc2xvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ2FfcG9zaXRpb24nKTtcclxuXHRcdFx0Z2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXBvc2xvY2F0aW9uKTtcclxuXHRcdFx0Z2wudmVydGV4QXR0cmliUG9pbnRlcihhcG9zbG9jYXRpb24sIDIsIGdsLkZMT0FULCBmYWxzZSwgRlNJWkUgKiA1LCAwKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJhcG9zbG9jYXRpb27nmoTlgLwgXCIsIGFwb3Nsb2NhdGlvbik7XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zdCBhdXYgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAnYV91dicpO1xyXG5cdFx0XHRnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdXYpO1xyXG5cdFx0XHRnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGF1diwgMywgZ2wuRkxPQVQsIGZhbHNlLCBGU0laRSAqIDUsIEZTSVpFICogMik7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiYXV255qE5YC8IFwiLCBhdXYpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gZ2wudXNlUHJvZ3JhbSgwKTtcclxuXHRcdFx0Ly8gZ2wuYmluZFRleHR1cmUoMCk7XHJcblx0XHRcdGxpcFRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwibGlwVGV4dHVyZSBnbC5jcmVhdGVUZXh0dXJlXCIsIGxpcFRleHR1cmUpO1xyXG5cdFx0XHRpZiAobGlwVGV4dHVyZSA9PT0gbnVsbCkge1xyXG5cdFx0XHQgIGNvbnNvbGUubG9nKFwibGlwVGV4dHVyZSBpcyBudWxsXCIpO1xyXG5cdFx0XHQgIC8vIHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBsaXBUZXh0dXJlKTtcclxuXHRcdFx0Z2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcblx0XHRcdGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG5cdFx0XHRnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XHJcblx0XHRcdGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuXHRcdFx0Z2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCByZXMpOyAvLyDphY3nva7nurnnkIblm77lg49cclxuXHRcdFx0Y29uc29sZS5sb2coXCJjcmVhdGVUZXh0dXJlY3JlYXRlVGV4dHVyZSBcIiwgbGlwVGV4dHVyZSk7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0Z2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCk7XHJcblx0XHRcdGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIGxpcFRleHR1cmUpO1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTEpO1xyXG5cdFx0XHRnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBjYW1lcmFUZXh0dXJlKTtcclxuXHRcdFx0Z2wudXNlUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcclxuXHRcdFx0XHJcblx0XHRcdGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVTLCAwLCA2MCk7XHJcblx0XHR9LFxyXG5cdFx0aW5pdFJlbmRlclBpcGVsaW5lKCkge1xyXG5cdFx0XHR2YXIgdmVydENvZGUgPVxyXG5cdFx0XHQgIGAjdmVyc2lvbiAzMDAgZXNcclxuXHRcdFx0ICAgICAgbGF5b3V0KGxvY2F0aW9uID0gMCkgaW4gdmVjMiBhX3Bvc2l0aW9uO1xyXG5cdFx0XHQgICAgICBsYXlvdXQobG9jYXRpb24gPSAxKSBpbiB2ZWMzIGFfdXY7XHJcblx0XHRcdCAgICAgIG91dCB2ZWMzIHV2X291dDtcclxuXHRcdFx0ICAgICAgdm9pZCBtYWluKCkge1xyXG5cdFx0XHQgICAgICAgIGdsX1Bvc2l0aW9uID0gdmVjNChhX3Bvc2l0aW9uLCAxLjAsIDEuMCk7XHJcblx0XHRcdCAgICAgICAgdXZfb3V0ID0gYV91djtcclxuXHRcdFx0ICAgICAgICAvL3V2X291dCA9IHZlYzIoMS4wLCAwLjApO1xyXG5cdFx0XHQgICAgICB9XHJcblx0XHRcdCAgICAgIGA7XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zdCBmcmFnQ29kZSA9XHJcblx0XHRcdCAgYCN2ZXJzaW9uIDMwMCBlc1xyXG5cdFx0XHQgICAgICBwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcclxuXHRcdFx0ICAgICAgaW4gdmVjMyB1dl9vdXQ7XHJcblx0XHRcdCAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVfdGV4dHVyZTtcclxuXHRcdFx0ICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgdV90ZXh0dXJlMjtcclxuXHRcdFx0ICAgICAgbGF5b3V0KGxvY2F0aW9uID0gMCkgb3V0IHZlYzQgb3V0Q29sb3I7XHJcblx0XHRcdCAgICAgIHZvaWQgbWFpbigpIHtcclxuXHRcdFx0XHJcblx0XHRcdCAgICAgICAgdmVjMiB1diA9IHZlYzIodXZfb3V0LngsIDEuMCAtIHV2X291dC55KTtcclxuXHRcdFx0ICAgICAgICB2ZWMzIGxpcENvbG9yID0gdGV4dHVyZSh1X3RleHR1cmUsIHV2KS54eXo7XHJcblx0XHRcdCAgICAgICAgdmVjMyBjID0gbGlwQ29sb3I7XHJcblx0XHRcdCAgICAgICAgdmVjNCBLID0gdmVjNCgwLjAsIC0xLjAgLyAzLjAsIDIuMCAvIDMuMCwgLTEuMCk7XHJcblx0XHRcdCAgICAgICAgdmVjNCBwID0gbWl4KHZlYzQoYy5iZywgSy53eiksIHZlYzQoYy5nYiwgSy54eSksIHN0ZXAoYy5iLCBjLmcpKTtcclxuXHRcdFx0ICAgICAgICB2ZWM0IHEgPSBtaXgodmVjNChwLnh5dywgYy5yKSwgdmVjNChjLnIsIHAueXp4KSwgc3RlcChwLngsIGMucikpO1xyXG5cdFx0XHRcclxuXHRcdFx0ICAgICAgICBmbG9hdCBkID0gcS54IC0gbWluKHEudywgcS55KTtcclxuXHRcdFx0ICAgICAgICBmbG9hdCBlID0gMS4wZS0xMDtcclxuXHRcdFx0ICAgICAgICB2ZWMzIGhjID0gdmVjMyhhYnMocS56ICsgKHEudyAtIHEueSkgLyAoNi4wICogZCArIGUpKSwgZCAvIChxLnggKyBlKSwgcS54KTtcclxuXHRcdFx0XHJcblx0XHRcdCAgICAgICAgaGMueSAqPSAxLjI7XHJcblx0XHRcdFxyXG5cdFx0XHQgICAgICAgIHZlYzQgTCA9IHZlYzQoMS4wLCAyLjAgLyAzLjAsIDEuMCAvIDMuMCwgMy4wKTtcclxuXHRcdFx0ICAgICAgICB2ZWMzIE0gPSBhYnMoZnJhY3QoaGMueHh4ICsgTC54eXopICogNi4wIC0gTC53d3cpO1xyXG5cdFx0XHQgICAgICAgIHZlYzMgY29sb3IgPSBoYy56ICogbWl4KEwueHh4LCBjbGFtcChNIC0gTC54eHgsIDAuMCwgMS4wKSwgaGMueSk7XHJcblx0XHRcdFxyXG5cdFx0XHQgICAgICAgIC8vb3V0Q29sb3IgPSB2ZWM0KGNvbG9yLCAxLjApO1xyXG5cdFx0XHQgICAgICAgIFxyXG5cdFx0XHQgICAgICAgIFxyXG5cdFx0XHQgICAgICAgIC8vdmVjNCBsaXBDb2xvciA9IHRleHR1cmUodV90ZXh0dXJlLCB1dik7XHJcblx0XHRcdCAgICAgICAgdmVjNCBmcmFtZUNvbG9yID0gdGV4dHVyZSh1X3RleHR1cmUyLCB1dl9vdXQueHkpO1xyXG5cdFx0XHQgICAgICAgIC8vdmVjMyBmaW5hbENvbG9yID0gbGlwQ29sb3IueHl6ICogbGlwQ29sb3IudyArIGZyYW1lQ29sb3IueHl6ICogKDEuMCAtIGxpcENvbG9yLncpO1xyXG5cdFx0XHQgICAgICAgIGZsb2F0IGFscGhhID0gdGV4dHVyZSh1X3RleHR1cmUsIHV2KS53O1xyXG5cdFx0XHQgICAgICAgIG91dENvbG9yID0gdmVjNChjb2xvci54eXosIGFscGhhICogdXZfb3V0LnopO1xyXG5cdFx0XHQgICAgICB9XHJcblx0XHRcdCAgICAgIGA7XHJcblx0XHRcdFxyXG5cdFx0XHR2ZXJ0U2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIpO1xyXG5cdFx0XHRpZiAodmVydFNoYWRlciA9PT0gbnVsbCkge1xyXG5cdFx0XHQgIGNvbnNvbGUubG9nKFwidmVydFNoYWRlciBpcyBudWxsXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGdsLnNoYWRlclNvdXJjZSh2ZXJ0U2hhZGVyLCB2ZXJ0Q29kZSk7XHJcblx0XHRcdGdsLmNvbXBpbGVTaGFkZXIodmVydFNoYWRlcik7XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zb2xlLmxvZyhcInZlcnRTaGFkZXIgaXMgY29tcGlsZVNoYWRlciBcIik7XHJcblx0XHRcdFxyXG5cdFx0XHRmcmFnU2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUik7XHJcblx0XHRcdGdsLnNoYWRlclNvdXJjZShmcmFnU2hhZGVyLCBmcmFnQ29kZSk7XHJcblx0XHRcdGdsLmNvbXBpbGVTaGFkZXIoZnJhZ1NoYWRlcik7XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zb2xlLmxvZyhcImZyYWdTaGFkZXIgaXMgY29tcGlsZVNoYWRlciBcIik7XHJcblx0XHRcdHNoYWRlclByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XHJcblx0XHRcdGdsLmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCB2ZXJ0U2hhZGVyKTtcclxuXHRcdFx0Z2wuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIGZyYWdTaGFkZXIpO1xyXG5cdFx0XHRnbC5saW5rUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcclxuXHRcdFx0Z2wudXNlUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zb2xlLmxvZygn44CC44CC44CC44CC5Yid5aeL5YyW552A6Imy5Zmo5piv5ZCm5oiQ5Yqf44CC44CC44CC44CCJyk7XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zdCBGU0laRSA9IDQ7XHJcblx0XHRcdFxyXG5cdFx0XHR2ZXJ0ZXhidWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuXHRcdFx0aWYgKHZlcnRleGJ1ZmZlciA9PT0gbnVsbCkge1xyXG5cdFx0XHQgIGNvbnNvbGUubG9nKFwidmVydGV4YnVmZmVyIGlzIG51bGxcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGNvbnN0IGFwb3Nsb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdhX3Bvc2l0aW9uJyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiYV9wb3NpdGlvbueahOWAvFwiLCBhcG9zbG9jYXRpb24pO1xyXG5cdFx0XHRnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGFwb3Nsb2NhdGlvbiwgMiwgZ2wuRkxPQVQsIGZhbHNlLCBGU0laRSAqIDUsIDApO1xyXG5cdFx0XHRnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhcG9zbG9jYXRpb24pO1xyXG5cdFx0XHRcclxuXHRcdFx0Y29uc3QgYXV2ID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ2FfdXYnKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJhdXbnmoTlgLxcIiwgYXV2KTtcclxuXHRcdFx0Z2wudmVydGV4QXR0cmliUG9pbnRlcihhdXYsIDMsIGdsLkZMT0FULCBmYWxzZSwgRlNJWkUgKiA1LCBGU0laRSAqIDIpO1xyXG5cdFx0XHRnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdXYpO1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIHF1YWRWZXJ0Q29kZSA9XHJcblx0XHRcdCAgYCN2ZXJzaW9uIDMwMCBlc1xyXG5cdFx0XHQgICAgICBsYXlvdXQobG9jYXRpb24gPSAwKSBpbiB2ZWMyIGFfcG9zaXRpb247XHJcblx0XHRcdCAgICAgIGxheW91dChsb2NhdGlvbiA9IDEpIGluIHZlYzIgYV91djtcclxuXHRcdFx0ICAgICAgb3V0IHZlYzIgdXZfb3V0O1xyXG5cdFx0XHQgICAgICB2b2lkIG1haW4oKSB7XHJcblx0XHRcdCAgICAgICAgZ2xfUG9zaXRpb24gPSB2ZWM0KGFfcG9zaXRpb24sIDEuMCwgMS4wKTtcclxuXHRcdFx0ICAgICAgICB1dl9vdXQgPSBhX3V2O1xyXG5cdFx0XHQgICAgICB9XHJcblx0XHRcdCAgICAgIGA7XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zdCBxdWFkRnJhZ0NvZGUgPVxyXG5cdFx0XHQgIGAjdmVyc2lvbiAzMDAgZXNcclxuXHRcdFx0ICAgICAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcblx0XHRcdCAgICAgIGluIHZlYzIgdXZfb3V0O1xyXG5cdFx0XHQgICAgICB1bmlmb3JtIHNhbXBsZXIyRCB1X3RleHR1cmU7XHJcblx0XHRcdCAgICAgIGxheW91dChsb2NhdGlvbiA9IDApIG91dCB2ZWM0IG91dENvbG9yO1xyXG5cdFx0XHQgICAgICB2b2lkIG1haW4oKSB7XHJcblx0XHRcdCAgICAgICAgdmVjMiB1diA9IHZlYzIodXZfb3V0LngsIHV2X291dC55KTtcclxuXHRcdFx0ICAgICAgICBvdXRDb2xvciA9IHZlYzQodGV4dHVyZSh1X3RleHR1cmUsIHV2KS54eXosIDEuMCk7XHJcblx0XHRcdCAgICAgIH1cclxuXHRcdFx0ICAgICAgYDtcclxuXHRcdFx0XHRcclxuXHRcdFx0cXVhZFZlcnRTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUik7XHJcblx0XHRcdGdsLnNoYWRlclNvdXJjZShxdWFkVmVydFNoYWRlciwgcXVhZFZlcnRDb2RlKTtcclxuXHRcdFx0Z2wuY29tcGlsZVNoYWRlcihxdWFkVmVydFNoYWRlcik7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwicXVhZFZlcnRTaGFkZXLnmoTlgLxcIiwgcXVhZFZlcnRTaGFkZXIpO1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdHF1YWRGcmFnU2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUik7XHJcblx0XHRcdGdsLnNoYWRlclNvdXJjZShxdWFkRnJhZ1NoYWRlciwgcXVhZEZyYWdDb2RlKTtcclxuXHRcdFx0Z2wuY29tcGlsZVNoYWRlcihxdWFkRnJhZ1NoYWRlcik7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwicXVhZEZyYWdTaGFkZXLnmoTlgLxcIiwgcXVhZEZyYWdTaGFkZXIpO1xyXG5cdFx0XHRcclxuXHRcdFx0cXVhZFNoYWRlclByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XHJcblx0XHRcdGdsLmF0dGFjaFNoYWRlcihxdWFkU2hhZGVyUHJvZ3JhbSwgcXVhZFZlcnRTaGFkZXIpO1xyXG5cdFx0XHRnbC5hdHRhY2hTaGFkZXIocXVhZFNoYWRlclByb2dyYW0sIHF1YWRGcmFnU2hhZGVyKTtcclxuXHRcdFx0Z2wubGlua1Byb2dyYW0ocXVhZFNoYWRlclByb2dyYW0pO1xyXG5cdFx0XHRnbC51c2VQcm9ncmFtKHF1YWRTaGFkZXJQcm9ncmFtKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJxdWFkU2hhZGVyUHJvZ3JhbSDmuLLmn5PmiJDlip/lkKZcIik7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0cXVhZFZlcnRleGJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcInF1YWRWZXJ0ZXhidWZmZXJcIiwgcXVhZFZlcnRleGJ1ZmZlcik7XHJcblx0XHRcdGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBxdWFkVmVydGV4YnVmZmVyKTtcclxuXHRcdFx0Z2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIHF1YWRWZXJ0ZXgsIGdsLlNUQVRJQ19EUkFXKTtcclxuXHRcdFx0XHJcblx0XHRcdGNvbnN0IHFwb3Nsb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHF1YWRTaGFkZXJQcm9ncmFtLCAnYV9wb3NpdGlvbicpO1xyXG5cdFx0XHRnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShxcG9zbG9jYXRpb24pO1xyXG5cdFx0XHRnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHFwb3Nsb2NhdGlvbiwgMiwgZ2wuRkxPQVQsIGZhbHNlLCBGU0laRSAqIDQsIDApO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcInFwb3Nsb2NhdGlvblwiLCBxcG9zbG9jYXRpb24pO1xyXG5cdFx0XHRcclxuXHRcdFx0Y29uc3QgcXV2ID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocXVhZFNoYWRlclByb2dyYW0sICdhX3V2Jyk7XHJcblx0XHRcdGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHF1dik7XHJcblx0XHRcdGdsLnZlcnRleEF0dHJpYlBvaW50ZXIocXV2LCAyLCBnbC5GTE9BVCwgZmFsc2UsIEZTSVpFICogNCwgRlNJWkUgKiAyKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJxdXYgMjIyXCIsIHF1dik7XHJcblx0XHRcdFxyXG5cdFx0XHRnbC51c2VQcm9ncmFtKDApO1xyXG5cdFx0XHRcclxuXHRcdFx0bGlwVGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcclxuXHRcdFx0Z2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbGlwVGV4dHVyZSk7XHJcblx0XHRcdGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG5cdFx0XHRnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcclxuXHRcdFx0Z2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpO1xyXG5cdFx0XHRnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiY3JlYXRlVGV4dHVyZWNyZWF0ZVRleHR1cmUgXCIsIGxpcFRleHR1cmUpO1xyXG5cdFx0XHRcclxuXHRcdFx0Y2FtZXJhVGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcclxuXHRcdFx0Z2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgY2FtZXJhVGV4dHVyZSk7XHJcblx0XHRcdGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG5cdFx0XHRnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcclxuXHRcdFx0Z2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XHJcblx0XHRcdGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImNhbWVyYVRleHR1cmUgXCIsIGNhbWVyYVRleHR1cmUpO1xyXG5cdFx0XHRcclxuXHRcdFx0Z2wuYmluZFRleHR1cmUoMCk7XHJcblx0XHRcdFxyXG5cdFx0XHRsaXBQb2ludHMgPSBbXTtcclxuXHRcdFx0Y29uc3QgbGlwUG9pbnRDb3VudCA9IDEwNiAqIDI7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGlwUG9pbnRDb3VudDsgaSsrKSB7XHJcblx0XHRcdCAgbGlwUG9pbnRzLnB1c2goMC4wKTtcclxuXHRcdFx0ICBsaXBQb2ludHMucHVzaCgwLjApO1xyXG5cdFx0XHQgIGxpcFBvaW50cy5wdXNoKDAuMCk7XHJcblx0XHRcdCAgbGlwUG9pbnRzLnB1c2goMC4wKTtcclxuXHRcdFx0ICBsaXBQb2ludHMucHVzaCgwLjApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnNvbGUubG9nKFwibGlwUG9pbnRz55qE5YC8IFwiLCBsaXBQb2ludHMpO1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdGxpcFBvaW50c0luZGV4ID0gW107XHJcblx0XHRcdGNvbnN0IGxpcFBvaW50c0luZGV4Q291bnQgPSBsaXBJbmRleC5sZW5ndGg7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGlwUG9pbnRzSW5kZXhDb3VudDsgaSsrKSB7XHJcblx0XHRcdCAgbGlwUG9pbnRzSW5kZXgucHVzaChpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zb2xlLmxvZyhcImxpcFBvaW50c0luZGV455qE5YC8IFwiLCBsaXBQb2ludHNJbmRleCk7XHJcblx0XHR9LFxyXG5cdFx0cmVsZWFzZVJlbmRlckZhY2VQb2ludHMoKSB7XHJcblx0XHRcdC8vIGdsLmRlbGV0ZVNoYWRlcih0aGlzLmZhY2VQb2ludHMudmVydFNoYWRlcik7XHJcblx0XHRcdC8vIGdsLmRlbGV0ZVNoYWRlcih0aGlzLmZhY2VQb2ludHMuZnJhZ1NoYWRlcik7XHJcblx0XHRcdC8vIGdsLmRlbGV0ZVByb2dyYW0odGhpcy5mYWNlUG9pbnRzLnNoYWRlclByb2dyYW0pO1xyXG5cdFx0fSxcclxuXHRcdHJlbGVhc2VSZW5kZXJSZXNvdXJjZSgpIHtcclxuXHRcdFx0Z2wuZGVsZXRlU2hhZGVyKHZlcnRTaGFkZXIpO1xyXG5cdFx0XHRnbC5kZWxldGVTaGFkZXIoZnJhZ1NoYWRlcik7XHJcblx0XHRcdGdsLmRlbGV0ZVByb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XHJcblx0XHRcdGdsLmRlbGV0ZVNoYWRlcihxdWFkVmVydFNoYWRlcik7XHJcblx0XHRcdGdsLmRlbGV0ZVNoYWRlcihxdWFkRnJhZ1NoYWRlcik7XHJcblx0XHRcdGdsLmRlbGV0ZVByb2dyYW0ocXVhZFNoYWRlclByb2dyYW0pO1xyXG5cdFx0XHRnbC5kZWxldGVCdWZmZXIodmVydGV4YnVmZmVyKTtcclxuXHRcdFx0Z2wuZGVsZXRlVGV4dHVyZShsaXBUZXh0dXJlKTtcclxuXHRcdFx0Z2wuZGVsZXRlVGV4dHVyZShjYW1lcmFUZXh0dXJlKTtcclxuXHRcdFx0dGhpcy5yZWxlYXNlUmVuZGVyRmFjZVBvaW50cygpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRkcmF3RmFjZUxpcChwb2ludHMpIHtcclxuXHRcdFx0Y29uc29sZS5sb2codHJhbnNsdWNlbnQsJ2RyYXdGYWNlTGlwZHJhd0ZhY2VMaXDlvIDlp4snLCBwb2ludHMpXHJcblx0XHRcdGNvbnN0IGxpcFBvaW50Q291bnQgPSBsaXBJbmRleC5sZW5ndGg7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGlwUG9pbnRDb3VudDsgaSsrKSB7XHJcblx0XHRcdCAgdmFyIGluZGV4ID0gbGlwSW5kZXhbaV07XHJcblx0XHRcdCAgbGlwUG9pbnRzW2kgKiA1XSA9IHBvaW50c1tpbmRleF1bMF07XHJcblx0XHRcdCAgbGlwUG9pbnRzW2kgKiA1ICsgMV0gPSBwb2ludHNbaW5kZXhdWzFdO1xyXG5cdFx0XHQgIGxpcFBvaW50c1tpICogNSArIDJdID0gbGlwVGV4Q29vcmRuYXRlWzIgKiAoaW5kZXggLSBsaXBNYXJrQmVnaW5JbmRleCldO1xyXG5cdFx0XHQgIGxpcFBvaW50c1tpICogNSArIDNdID0gbGlwVGV4Q29vcmRuYXRlWzIgKiAoaW5kZXggLSBsaXBNYXJrQmVnaW5JbmRleCkgKyAxXTtcclxuXHRcdFx0ICBsaXBQb2ludHNbaSAqIDUgKyA0XSA9IHRyYW5zbHVjZW50O1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zb2xlLmxvZygnZHJhd0ZhY2VMaXBkcmF3RmFjZUxpcOW8gOWni2dsLkFSUkFZX0JVRkZFUicsIHZlcnRleGJ1ZmZlcilcclxuXHRcdFx0Z2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHZlcnRleGJ1ZmZlcik7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdkcmF3RmFjZUxpcGRyYXdGYWNlTGlwIGxpcFBvaW50cycsIHBvaW50cylcclxuXHRcdFx0Z2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkobGlwUG9pbnRzKSwgZ2wuU1RSRUFNX0RSQVcpO1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdGdsLmNsZWFyQ29sb3IoMC4wLCAwLjAsIDAuMCwgMC4wKTtcclxuXHRcdFx0Z2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcblx0XHRcdC8vIGdsLmRpc2FibGUoZ2wuREVQVEhfVEVTVCk7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8gZ2wuZGlzYWJsZShnbC5ERVBUSF9XUklURSk7XHJcblx0XHRcdC8vIGdsLmVuYWJsZShnbC5HTF9DVUxMX0ZBQ0UpO1xyXG5cdFx0XHQvLyBnbC5mcm9udEZhY2UoZ2wuQ1cpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZHJhd0ZhY2VMaXBkcmF3RmFjZUxpcCBnbC5mcm9udEZhY2UnKVxyXG5cdFx0XHRjb25zdCBGU0laRSA9IDQ7XHJcblx0XHRcdFxyXG5cdFx0XHQvL1Bhc3Mgb25lXHJcblx0XHRcdC8vIGdsLmRpc2FibGUoZ2wuQkxFTkQpO1xyXG5cdFx0XHRnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgcXVhZFZlcnRleGJ1ZmZlcik7XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zdCBxcG9zbG9jYXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihxdWFkU2hhZGVyUHJvZ3JhbSwgJ2FfcG9zaXRpb24nKTtcclxuXHRcdFx0XHJcblx0XHRcdGdsLnZlcnRleEF0dHJpYlBvaW50ZXIocXBvc2xvY2F0aW9uLCAyLCBnbC5GTE9BVCwgZmFsc2UsIEZTSVpFICogNCwgMCk7XHJcblx0XHRcdGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHFwb3Nsb2NhdGlvbik7XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zdCBxdXYgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihxdWFkU2hhZGVyUHJvZ3JhbSwgJ2FfdXYnKTtcclxuXHRcdFx0XHJcblx0XHRcdGdsLnZlcnRleEF0dHJpYlBvaW50ZXIocXV2LCAyLCBnbC5GTE9BVCwgZmFsc2UsIEZTSVpFICogNCwgRlNJWkUgKiAyKTtcclxuXHRcdFx0Z2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocXV2KTtcclxuXHRcdFx0XHJcblx0XHRcdGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTApO1xyXG5cdFx0XHRnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBjYW1lcmFUZXh0dXJlKTtcclxuXHRcdFx0Z2wudXNlUHJvZ3JhbShxdWFkU2hhZGVyUHJvZ3JhbSk7XHJcblx0XHRcdGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVTLCAwLCA2KTtcclxuXHRcdFx0XHJcblx0XHRcdC8vUGFzcyB0d29cclxuXHRcdFx0Z2wuZW5hYmxlKGdsLkJMRU5EKTtcclxuXHRcdFx0Z2wuYmxlbmRGdW5jU2VwYXJhdGUoZ2wuU1JDX0FMUEhBLCBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBLCBnbC5OT05FLCBnbC5PTkUpO1xyXG5cdFx0XHRnbC5ibGVuZEVxdWF0aW9uU2VwYXJhdGUoZ2wuRlVOQ19BREQsIGdsLkZVTkNfQUREKTtcclxuXHRcdFx0Z2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHZlcnRleGJ1ZmZlcik7XHJcblx0XHRcdGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KGxpcFBvaW50cyksIGdsLlNUUkVBTV9EUkFXKTtcclxuXHRcdFx0XHJcblx0XHRcdGNvbnN0IGFwb3Nsb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdhX3Bvc2l0aW9uJyk7XHJcblx0XHRcdGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGFwb3Nsb2NhdGlvbik7XHJcblx0XHRcdGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoYXBvc2xvY2F0aW9uLCAyLCBnbC5GTE9BVCwgZmFsc2UsIEZTSVpFICogNSwgMCk7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0Y29uc3QgYXV2ID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ2FfdXYnKTtcclxuXHRcdFx0Z2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXV2KTtcclxuXHRcdFx0Z2wudmVydGV4QXR0cmliUG9pbnRlcihhdXYsIDMsIGdsLkZMT0FULCBmYWxzZSwgRlNJWkUgKiA1LCBGU0laRSAqIDIpO1xyXG5cdFx0XHRcclxuXHRcdFx0Z2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCk7XHJcblx0XHRcdGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIGxpcFRleHR1cmUpO1xyXG5cdFx0XHRnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUxKTtcclxuXHRcdFx0Z2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgY2FtZXJhVGV4dHVyZSk7XHJcblx0XHRcdGdsLnVzZVByb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XHJcblx0XHRcdGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVTLCAwLCA2MCk7XHJcblx0XHR9LFxyXG5cdFx0IGNoYW5nZUxpcFN0eWxlKGxpcFRleHR1cmVQYXRoKSB7XHJcblx0XHRcdC8vbGV0IGltZ1BhdGggPSAnL3N0YXRpYy9pbWFnZXMvbGlwQ29sb3IucG5nJztcclxuXHRcdFx0Ly8gLy/llIflvanlm77niYdcclxuXHRcdFx0Ly8gdmFyIGltZztcclxuXHRcdFx0Ly8gLy/llIflvanlm77niYfot6/lvoRcclxuXHRcdFx0Ly8gdmFyIGltZ1BhdGg7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuY2FudmFzLCAnLi4uLi4u5Zu+54mHLnRoaXMuY2FudmFzLicsIGxpcFRleHR1cmVQYXRoKTtcclxuXHRcdFx0XHRsZXQgaW1nUGF0aCA9IGxpcFRleHR1cmVQYXRoO1xyXG5cdFx0XHRcdGxldCBpbWcxID0gY2FudmFzLmNyZWF0ZUltYWdlKCk7XHJcblx0XHRcdFx0aW1nMS5vbmxvYWQgPSAgKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gdGhpcy5pbml0UmVuZGVyUGlwZWxpbmUoKTtcclxuXHRcdFx0XHRcdC8vIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIGxpcFRleHR1cmUpO1xyXG5cdFx0XHRcdFx0Ly8gZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBpbWcpO1xyXG5cdFx0XHRcdFx0cmVzb2x2ZShpbWcxKVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhsaXBUZXh0dXJlLCcuLi4uLi7lm77niYcuLicsIHJlcywgaW1nKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0aW1nMS5vbmVycm9yID0gcmVzID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCcuLi4uLi7lm77niYfplJnor68uLicsIHJlcywgaW1nKTtcclxuXHRcdFx0XHRcdHJlamVjdChyZXMpXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRpbWcxLnNyYyA9IGltZ1BhdGg7XHJcblx0XHRcdH0pXHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdC8vIGxldCBwb3N0ZXIgPSB0aGlzLmNhbnZhcy5jcmVhdGVJbWFnZSgpO1xyXG5cdFx0XHQvLyB3eC5nZXRJbWFnZUluZm8oe1xyXG5cdFx0XHQvLyAgICBzcmM6IGxpcFRleHR1cmVQYXRoLCAvL+WbvueJh+eahOe9kee7nOWcsOWdgFxyXG5cdFx0XHQvLyAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdC8vICAgICAgcG9zdGVyLnNyYyA9IHJlcy5wYXRoIC8v5Zu+54mH57yT5a2Y5Zyw5Z2AXHJcblx0XHRcdC8vICAgICAgcG9zdGVyLm9ubG9hZCA9IChlKSA9PiB7XHJcblx0XHRcdC8vICAgICAgICAvLyBjdHguZHJhd0ltYWdlKHBvc3RlciwgMCwgMCwgMjAwLCAyMDApXHJcblx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZyhsaXBUZXh0dXJlLCAnLi4uLi4u5Zu+54mHLi4nLCBlLCBwb3N0ZXIpO1xyXG5cdFx0XHQvLyAgICAgIH1cclxuXHRcdFx0Ly8gICAgfVxyXG5cdFx0XHQvLyB9KVxyXG5cdFx0fSxcclxuXHJcblx0XHR1cGRhdGVGYWNlRGF0YShkYXRhLCB3aWR0aCwgaGVpZ2h0KSB7XHJcblx0XHRcdHZhciBkYXRhRnJhbWUgPSBuZXcgVWludDhBcnJheShkYXRhKTtcclxuXHRcdFx0Z2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgY2FtZXJhVGV4dHVyZSk7XHJcblx0XHRcdGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgd2lkdGgsIGhlaWdodCwgMCwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgZGF0YUZyYW1lKTtcclxuXHRcdH0sXHJcblx0XHR1cGRhdGVGYWNlRGF0YTEoKSB7XHJcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcblx0XHRcdFx0dW5pLmdldEltYWdlSW5mbyh7XHJcblx0XHRcdFx0XHRzcmM6IHRoaXMuaW1nTW9kZWwsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnZ2V0SW1hZ2VJbmZvICB1cGRhdGVGYWNlRGF0YTEnLCByZXMpO1xyXG5cdFx0XHRcdFx0XHR1bmkuZ2V0RmlsZVN5c3RlbU1hbmFnZXIoKS5yZWFkRmlsZSh7XHJcblx0XHRcdFx0XHRcdFx0ZmlsZVBhdGg6IHJlcy5wYXRoLCAvLyDpgInmi6nlm77niYfov5Tlm57nmoTnm7jlr7not6/lvoRcclxuXHRcdFx0XHRcdFx0XHQvLyBlbmNvZGluZzogJ2Jhc2U2NCcsIC8vIOe8lueggeagvOW8j1xyXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IHJlczEgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8g5oiQ5Yqf55qE5Zue6LCDXHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMud2lkdGgsJy0t5bCG5Zu+54mH5Zu+54mH6L2s5Li6YmFzZTY05pa55rOVdG9CYXNlNjQgIHN1Y2Nlc3MtLScsIHJlczEuZGF0YSk7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgZGF0YUZyYW1lID0gbmV3IFVpbnQ4QXJyYXkocmVzMS5kYXRhKTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIGNhbWVyYVRleHR1cmUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCByZXMud2lkdGgsIHJlcy5oZWlnaHQsIDAsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIGRhdGFGcmFtZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKHtkYXRhOmRhdGFGcmFtZSx3aWR0aDpyZXMud2lkdGgsaGVpZ2h0OnJlcy5oZWlnaHR9KVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0ZmFpbDogZXJyID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCctLeWwhuWbvueJh+WbvueJh+i9rOS4umJhc2U2NOaWueazlXRvQmFzZTY0IGZhaWwtLScsIGVycik7XHJcblx0XHRcdFx0XHRcdFx0XHRyZWplY3QoZXJyKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWw6IChlcnIpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJy0tZ2V0SW1hZ2VJbmZvICB1cGRhdGVGYWNlRGF0YTEgZmFpbC0tJywgZXJyKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSlcclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0ZHJhd0ZhY2VQb2ludHMocG9pbnRzKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdkcmF3RmFjZVBvaW50c+OAguOAguOAgicscG9pbnRzLHBvaW50cy5sZW5ndGgpXHJcblx0XHQgICAgdmFyIHBvaW50Q291bnQgPSBwb2ludHMubGVuZ3RoO1xyXG5cdFx0ICAgIGlmIChwb2ludENvdW50ID09IDApIHJldHVybjtcclxuXHRcdCAgICB2YXIgdmVydGljZXMgPSBbXTtcclxuXHRcdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50Q291bnQ7IGkrKykge1xyXG5cdFx0ICAgICAgdmVydGljZXMucHVzaChwb2ludHNbaV1bMF0pO1xyXG5cdFx0ICAgICAgdmVydGljZXMucHVzaChwb2ludHNbaV1bMV0pO1xyXG5cdFx0ICAgICAgdmVydGljZXMucHVzaCgwLjApO1xyXG5cdFx0ICAgIH1cclxuXHRcdFxyXG5cdFx0ICAgIC8vIENyZWF0ZSBhbiBlbXB0eSBidWZmZXIgb2JqZWN0IHRvIHN0b3JlIHRoZSB2ZXJ0ZXggYnVmZmVyXHJcblx0XHQgICAgdmFyIHZlcnRleF9idWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTsgXHJcblx0XHRcdGNvbnNvbGUubG9nKCfjgIJ2ZXJ0ZXhfYnVmZmVy44CC44CC44CCJylcclxuXHRcdCAgICAvL0JpbmQgYXBwcm9wcmlhdGUgYXJyYXkgYnVmZmVyIHRvIGl0XHJcblx0XHQgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHZlcnRleF9idWZmZXIpOyBcclxuXHRcdFxyXG5cdFx0ICAgIC8vIFBhc3MgdGhlIHZlcnRleCBkYXRhIHRvIHRoZSBidWZmZXJcclxuXHRcdCAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcyksIGdsLlNUQVRJQ19EUkFXKTsgXHJcblx0XHQgICAgLy8gVW5iaW5kIHRoZSBidWZmZXJcclxuXHRcdCAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgbnVsbCk7IFxyXG5cdFx0Y29uc29sZS5sb2coJ+OAglVuYmluZCB0aGUgYnVmZmVy44CC44CC44CCJylcclxuXHRcdCAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1TaGFkZXJzPT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHRcdFxyXG5cdFx0ICAgIC8vIHZlcnRleCBzaGFkZXIgc291cmNlIGNvZGVcclxuXHRcdCAgICB2YXIgdmVydENvZGUgPVxyXG5cdFx0ICAgICAgJ2F0dHJpYnV0ZSB2ZWMzIGNvb3JkaW5hdGVzOycgK1xyXG5cdFx0XHJcblx0XHQgICAgICAndm9pZCBtYWluKHZvaWQpIHsnICtcclxuXHRcdCAgICAgICAgICcgZ2xfUG9zaXRpb24gPSB2ZWM0KGNvb3JkaW5hdGVzLCAxLjApOycgK1xyXG5cdFx0ICAgICAgICAgJ2dsX1BvaW50U2l6ZSA9IDEwLjA7JytcclxuXHRcdCAgICAgICd9JztcclxuXHRcdFxyXG5cdFx0ICAgIC8vIENyZWF0ZSBhIHZlcnRleCBzaGFkZXIgb2JqZWN0XHJcblx0XHQgICAgdmFyIHZlcnRTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUik7XHJcblx0XHRcclxuXHRcdCAgICAvLyBBdHRhY2ggdmVydGV4IHNoYWRlciBzb3VyY2UgY29kZVxyXG5cdFx0ICAgIGdsLnNoYWRlclNvdXJjZSh2ZXJ0U2hhZGVyLCB2ZXJ0Q29kZSk7XHJcblx0XHRcclxuXHRcdCAgICAvLyBDb21waWxlIHRoZSB2ZXJ0ZXggc2hhZGVyXHJcblx0XHQgICAgZ2wuY29tcGlsZVNoYWRlcih2ZXJ0U2hhZGVyKTtcclxuXHRcdFxyXG5cdFx0ICAgIC8vIGZyYWdtZW50IHNoYWRlciBzb3VyY2UgY29kZVxyXG5cdFx0ICAgIHZhciBmcmFnQ29kZSA9XHJcblx0XHQgICAgICAndm9pZCBtYWluKHZvaWQpIHsnICtcclxuXHRcdCAgICAgICAgICcgZ2xfRnJhZ0NvbG9yID0gdmVjNCgxLjAsIDAuMCwgMC4wLCAxLjApOycgK1xyXG5cdFx0ICAgICAgJ30nO1xyXG5cdFx0XHJcblx0XHQgICAgLy8gQ3JlYXRlIGZyYWdtZW50IHNoYWRlciBvYmplY3RcclxuXHRcdCAgICB2YXIgZnJhZ1NoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihnbC5GUkFHTUVOVF9TSEFERVIpO1xyXG5cdFx0XHJcblx0XHQgICAgLy8gQXR0YWNoIGZyYWdtZW50IHNoYWRlciBzb3VyY2UgY29kZVxyXG5cdFx0ICAgIGdsLnNoYWRlclNvdXJjZShmcmFnU2hhZGVyLCBmcmFnQ29kZSk7XHJcblx0XHRcclxuXHRcdCAgICAvLyBDb21waWxlIHRoZSBmcmFnbWVudHQgc2hhZGVyXHJcblx0XHQgICAgZ2wuY29tcGlsZVNoYWRlcihmcmFnU2hhZGVyKTtcclxuXHRcdFxyXG5cdFx0ICAgIC8vIENyZWF0ZSBhIHNoYWRlciBwcm9ncmFtIG9iamVjdCB0byBzdG9yZVxyXG5cdFx0ICAgIC8vIHRoZSBjb21iaW5lZCBzaGFkZXIgcHJvZ3JhbVxyXG5cdFx0ICAgIHZhciBzaGFkZXJQcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xyXG5cdFx0XHJcblx0XHQgICAgLy8gQXR0YWNoIGEgdmVydGV4IHNoYWRlclxyXG5cdFx0ICAgIGdsLmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCB2ZXJ0U2hhZGVyKTsgXHJcblx0XHRcclxuXHRcdCAgICAvLyBBdHRhY2ggYSBmcmFnbWVudCBzaGFkZXJcclxuXHRcdCAgICBnbC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgZnJhZ1NoYWRlcik7XHJcblx0XHRcclxuXHRcdCAgICAvLyBMaW5rIGJvdGggcHJvZ3JhbXNcclxuXHRcdCAgICBnbC5saW5rUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcclxuXHRcdFxyXG5cdFx0ICAgIC8vIFVzZSB0aGUgY29tYmluZWQgc2hhZGVyIHByb2dyYW0gb2JqZWN0XHJcblx0XHQgICAgZ2wudXNlUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcclxuXHRcdFxyXG5cdFx0ICAgIC8qPT09PT09PT0gQXNzb2NpYXRpbmcgc2hhZGVycyB0byBidWZmZXIgb2JqZWN0cyA9PT09PT09PSovXHJcblx0XHRcclxuXHRcdCAgICAvLyBCaW5kIHZlcnRleCBidWZmZXIgb2JqZWN0XHJcblx0XHQgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHZlcnRleF9idWZmZXIpO1xyXG5cdFx0XHJcblx0XHQgICAgLy8gR2V0IHRoZSBhdHRyaWJ1dGUgbG9jYXRpb25cclxuXHRcdCAgICB2YXIgY29vcmQgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCBcImNvb3JkaW5hdGVzXCIpO1xyXG5cdFx0Y29uc29sZS5sb2coJ+OAgmNvb3Jk44CC44CC44CCJyxjb29yZClcclxuXHRcdCAgICAvLyBQb2ludCBhbiBhdHRyaWJ1dGUgdG8gdGhlIGN1cnJlbnRseSBib3VuZCBWQk9cclxuXHRcdCAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGNvb3JkLCAzLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xyXG5cdFx0XHJcblx0XHQgICAgLy8gRW5hYmxlIHRoZSBhdHRyaWJ1dGVcclxuXHRcdCAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShjb29yZCk7XHJcblx0XHRcclxuXHRcdCAgICBnbC5jbGVhckNvbG9yKDAuMCwwLjAsMC4wLDAuMCk7XHJcblx0XHQgICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcblx0XHQgICAgLy8gRHJhdyB0aGUgdHJpYW5nbGVcclxuXHRcdCAgICBnbC5kcmF3QXJyYXlzKGdsLlBPSU5UUywgMCwgcG9pbnRDb3VudCk7XHJcblx0XHQgIH0sXHJcblx0XHRkcmF3RmFjZVBvaW50czExKHBvaW50cykge1xyXG5cdFx0XHR2YXIgcG9pbnRDb3VudCA9IHBvaW50cy5sZW5ndGg7XHJcblx0XHRcdGlmIChwb2ludENvdW50ID09IDApIHJldHVybjtcclxuXHRcdFx0dmFyIHZlcnRpY2VzID0gW107XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRDb3VudDsgaSsrKSB7XHJcblx0XHRcdCAgdmVydGljZXMucHVzaChwb2ludHNbaV1bMF0pO1xyXG5cdFx0XHQgIHZlcnRpY2VzLnB1c2gocG9pbnRzW2ldWzFdKTtcclxuXHRcdFx0ICB2ZXJ0aWNlcy5wdXNoKDAuMCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdC8vIENyZWF0ZSBhbiBlbXB0eSBidWZmZXIgb2JqZWN0IHRvIHN0b3JlIHRoZSB2ZXJ0ZXggYnVmZmVyXHJcblx0XHRcdHZhciB2ZXJ0ZXhfYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7IFxyXG5cdFx0XHRcclxuXHRcdFx0Ly9CaW5kIGFwcHJvcHJpYXRlIGFycmF5IGJ1ZmZlciB0byBpdFxyXG5cdFx0XHRnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdmVydGV4X2J1ZmZlcik7IFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8gUGFzcyB0aGUgdmVydGV4IGRhdGEgdG8gdGhlIGJ1ZmZlclxyXG5cdFx0XHRnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcyksIGdsLlNUQVRJQ19EUkFXKTsgXHJcblx0XHRcdC8vIFVuYmluZCB0aGUgYnVmZmVyXHJcblx0XHRcdGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBudWxsKTsgXHJcblx0XHRcdFxyXG5cdFx0XHQvKj09PT09PT09PT09PT09PT09PT09PT09PT1TaGFkZXJzPT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHRcdFx0XHJcblx0XHRcdC8vIHZlcnRleCBzaGFkZXIgc291cmNlIGNvZGVcclxuXHRcdFx0dmFyIHZlcnRDb2RlID1cclxuXHRcdFx0ICBgYXR0cmlidXRlIHZlYzMgY29vcmRpbmF0ZXM7XHJcblx0XHRcdCAgdm9pZCBtYWluKHZvaWQpIHtcclxuXHRcdFx0ICBcdGdsX1Bvc2l0aW9uID0gdmVjNChjb29yZGluYXRlcywgMS4wKTtcclxuXHRcdFx0ICBcdGdsX1BvaW50U2l6ZSA9IDUuMDtcclxuXHRcdFx0ICB9YDtcclxuXHRcdFx0XHJcblx0XHRcdC8vIENyZWF0ZSBhIHZlcnRleCBzaGFkZXIgb2JqZWN0XHJcblx0XHRcdHZhciB2ZXJ0U2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gQXR0YWNoIHZlcnRleCBzaGFkZXIgc291cmNlIGNvZGVcclxuXHRcdFx0Z2wuc2hhZGVyU291cmNlKHZlcnRTaGFkZXIsIHZlcnRDb2RlKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIENvbXBpbGUgdGhlIHZlcnRleCBzaGFkZXJcclxuXHRcdFx0Z2wuY29tcGlsZVNoYWRlcih2ZXJ0U2hhZGVyKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIGZyYWdtZW50IHNoYWRlciBzb3VyY2UgY29kZVxyXG5cdFx0XHR2YXIgZnJhZ0NvZGUgPVxyXG5cdFx0XHQgIGBwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcclxuXHRcdFx0XHRcdFx0dW5pZm9ybSB2ZWM0IHVfRnJhZ0NvbG9yO1xyXG5cdFx0XHRcdFx0XHR2b2lkIG1haW4oKXtcclxuXHRcdFx0XHRcdFx0ICAgIGdsX0ZyYWdDb2xvcj11X0ZyYWdDb2xvcjtcclxuXHRcdFx0XHRcdFx0fWA7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBDcmVhdGUgZnJhZ21lbnQgc2hhZGVyIG9iamVjdFxyXG5cdFx0XHR2YXIgZnJhZ1NoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihnbC5GUkFHTUVOVF9TSEFERVIpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gQXR0YWNoIGZyYWdtZW50IHNoYWRlciBzb3VyY2UgY29kZVxyXG5cdFx0XHRnbC5zaGFkZXJTb3VyY2UoZnJhZ1NoYWRlciwgZnJhZ0NvZGUpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gQ29tcGlsZSB0aGUgZnJhZ21lbnR0IHNoYWRlclxyXG5cdFx0XHRnbC5jb21waWxlU2hhZGVyKGZyYWdTaGFkZXIpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gQ3JlYXRlIGEgc2hhZGVyIHByb2dyYW0gb2JqZWN0IHRvIHN0b3JlXHJcblx0XHRcdC8vIHRoZSBjb21iaW5lZCBzaGFkZXIgcHJvZ3JhbVxyXG5cdFx0XHR2YXIgc2hhZGVyUHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIEF0dGFjaCBhIHZlcnRleCBzaGFkZXJcclxuXHRcdFx0Z2wuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIHZlcnRTaGFkZXIpOyBcclxuXHRcdFx0XHJcblx0XHRcdC8vIEF0dGFjaCBhIGZyYWdtZW50IHNoYWRlclxyXG5cdFx0XHRnbC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgZnJhZ1NoYWRlcik7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBMaW5rIGJvdGggcHJvZ3JhbXNcclxuXHRcdFx0Z2wubGlua1Byb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBVc2UgdGhlIGNvbWJpbmVkIHNoYWRlciBwcm9ncmFtIG9iamVjdFxyXG5cdFx0XHRnbC51c2VQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xyXG5cdFx0XHRcclxuXHRcdFx0Lyo9PT09PT09PSBBc3NvY2lhdGluZyBzaGFkZXJzIHRvIGJ1ZmZlciBvYmplY3RzID09PT09PT09Ki9cclxuXHRcdFx0XHJcblx0XHRcdC8vIEJpbmQgdmVydGV4IGJ1ZmZlciBvYmplY3RcclxuXHRcdFx0Z2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHZlcnRleF9idWZmZXIpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gR2V0IHRoZSBhdHRyaWJ1dGUgbG9jYXRpb25cclxuXHRcdFx0dmFyIGNvb3JkID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgXCJjb29yZGluYXRlc1wiKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIFBvaW50IGFuIGF0dHJpYnV0ZSB0byB0aGUgY3VycmVudGx5IGJvdW5kIFZCT1xyXG5cdFx0XHRnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGNvb3JkLCAzLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gRW5hYmxlIHRoZSBhdHRyaWJ1dGVcclxuXHRcdFx0Z2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoY29vcmQpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly/ojrflj5Z1bmlmb3JtIOWPmOmHj1xyXG5cdFx0XHRjb25zdCB1X0ZyYWdDb2xvciA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCBcInVfRnJhZ0NvbG9yXCIpO1xyXG5cdFx0XHRsZXQgcmdiYSA9IHRoaXMuaXNTaG93RmFjZVBvaW50cyA/IDEuMCA6IDAuMDtcclxuXHRcdFx0Ly/kv67mlLl1bmlmb3JtIOWPmOmHj1xyXG5cdFx0XHRnbC51bmlmb3JtNGYodV9GcmFnQ29sb3IsIDEuMCwgMC4wLCAwLjAsIDEuMCk7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0Z2wuY2xlYXJDb2xvcigwLjAsMC4wLDAuMCwwLjApO1xyXG5cdFx0XHRnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcclxuXHRcdFx0Ly8gRHJhdyB0aGUgdHJpYW5nbGVcclxuXHRcdFx0Z2wuZHJhd0FycmF5cyhnbC5QT0lOVFMsIDAsIHBvaW50Q291bnQpO1xyXG5cdFx0fSxcclxuXHRcdCByZW5kZXJJbWcoKSB7XHJcblx0XHQgICAgbGV0IGltZ3BhdGggPSB0aGlzLmltZ01vZGVsO1xyXG5cdFx0ICAgIGNvbnNvbGUubG9nKGltZ3BhdGgsICdpbWdwYXRoJyk7XHJcblx0XHQgICAgbGV0IGNhbnZhcyA9IHRoaXMuY2FudmFzO1xyXG5cdFx0ICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcblx0XHQgICAgbGV0IGltZyA9IGNhbnZhcy5jcmVhdGVJbWFnZSgpO1xyXG5cdFx0ICAgIGltZy5vbmxvYWQgPSAocikgPT4ge1xyXG5cdFx0ICAgICAgY29uc29sZS5sb2coJ+WbvueJh+WKoOi9veaIkOWKnycsIHIpXHJcblx0XHRcclxuXHRcdCAgICAgIGlmICghdGhpcy5pbml0U2hhZGVyKGdsKSkge1xyXG5cdFx0ICAgICAgICBjb25zb2xlLmxvZygnaW5pdFNoYWRlciBpcyBmYWlsZWTvvIzliJ3lp4vljJbnnYDoibLlmajlpLHotKUnKVxyXG5cdFx0ICAgICAgICByZXR1cm47XHJcblx0XHQgICAgICB9XHJcblx0XHQgICAgICBpZiAoIXRoaXMuaW5pdFZlcnRleHMoZ2wpKSB7XHJcblx0XHQgICAgICAgIGNvbnNvbGUubG9nKCdkcmF3VmVydGV4cyBpcyBmYWlsZWQg6K6+572u6aG254K555qE55u45YWz5L+h5oGv5aSx6LSlICcpXHJcblx0XHQgICAgICAgIHJldHVybjtcclxuXHRcdCAgICAgIH1cclxuXHRcdCAgICAgIGlmICghdGhpcy5pbml0VGV4dHVyZXMoZ2wsIGltZykpIHtcclxuXHRcdCAgICAgICAgY29uc29sZS5sb2coJ2RyYXdUZXh0dXJlcyBpcyBmYWlsZWQg5peg5rOV6YWN572u57q555CGJylcclxuXHRcdCAgICAgICAgcmV0dXJuO1xyXG5cdFx0ICAgICAgfVxyXG5cdFx0XHJcblx0XHQgICAgICBjb25zb2xlLmxvZygnZ2wuZHJhd0FycmF5cycpO1xyXG5cdFx0ICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRV9TVFJJUCwgMCwgNCk7XHJcblx0XHQgICAgfVxyXG5cdFx0ICAgIGltZy5vbmVycm9yID0gZnVuY3Rpb24gKHIpIHtcclxuXHRcdCAgICAgIGNvbnNvbGUubG9nKCdvbkVycm9yJywgcilcclxuXHRcdCAgICB9XHJcblx0XHQgICAgaW1nLnNyYyA9IGltZ3BhdGg7XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0ICB9LFxyXG5cdFx0ICBpbml0U2hhZGVyKGdsKSB7XHJcblx0XHRcclxuXHRcdCAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1TaGFkZXJzPT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHRcdCAgICBsZXQgdmVydGV4U2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIpOy8vIOWIm+W7uumhtueCueedgOiJsuWZqFxyXG5cdFx0ICAgIGdsLnNoYWRlclNvdXJjZSh2ZXJ0ZXhTaGFkZXIsIFZTSEFERVJfU09VUkNFKTsvLyDnu5HlrprpobbngrnnnYDoibLlmajmupDnoIFcclxuXHRcdCAgICBnbC5jb21waWxlU2hhZGVyKHZlcnRleFNoYWRlcik7Ly8g57yW6K+R5a6a54K5552A6Imy5ZmoXHJcblx0XHRcclxuXHRcdCAgICBsZXQgZnJhZ21lbnRTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuRlJBR01FTlRfU0hBREVSKTsvLyDliJvlu7rniYflhYPnnYDoibLlmahcclxuXHRcdCAgICBnbC5zaGFkZXJTb3VyY2UoZnJhZ21lbnRTaGFkZXIsIEZTSEFERVJfU09VUkNFKTsvLyDnu5HlrprniYflhYPnnYDoibLlmajmupDnoIFcclxuXHRcdCAgICBnbC5jb21waWxlU2hhZGVyKGZyYWdtZW50U2hhZGVyKTsvLyDnvJbor5HniYflhYPnnYDoibLlmahcclxuXHRcdFxyXG5cdFx0XHJcblx0XHQgICAgbGV0IHNoYWRlclByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7Ly8g5Yib5bu6552A6Imy5Zmo56iL5bqPXHJcblx0XHQgICAgZ2wuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIHZlcnRleFNoYWRlcik7Ly8g5oyH5a6a6aG254K5552A6Imy5ZmoXHJcblx0XHQgICAgZ2wuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTsvLyDmjIflrprniYflhYPnnYDoibLoibLlmahcclxuXHRcdFxyXG5cdFx0ICAgIGdsLmxpbmtQcm9ncmFtKHNoYWRlclByb2dyYW0pOy8vIOmTvuaOpeeoi+W6j1xyXG5cdFx0ICAgIGdsLnVzZVByb2dyYW0oc2hhZGVyUHJvZ3JhbSk7Ly/kvb/nlKjnnYDoibLlmahcclxuXHRcdCAgICBnbC5wcm9ncmFtID0gc2hhZGVyUHJvZ3JhbTtcclxuXHRcdCAgICByZXR1cm4gdHJ1ZVxyXG5cdFx0ICB9LFxyXG5cdFx0ICBpbml0VmVydGV4cyhnbCwgaW1nKSB7XHJcblx0XHQgICAgLy8gQ3JlYXRlIGFuIGVtcHR5IGJ1ZmZlciBvYmplY3QgdG8gc3RvcmUgdGhlIHZlcnRleCBidWZmZXIg5Yib5bu657yT5Yay5Yy65a+56LGhKGdsLmNyZWF0ZUJ1ZmZlcigpKVxyXG5cdFx0ICAgIGxldCB2ZXJ0ZXhzQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0ICAgIGlmICh2ZXJ0ZXhzQnVmZmVyID09PSBudWxsKSB7XHJcblx0XHQgICAgICBjb25zb2xlLmxvZyhcInZlcnRleHNCdWZmZXIgaXMgbnVsbFwiKTtcclxuXHRcdCAgICAgIHJldHVybiBmYWxzZTtcclxuXHRcdCAgICB9XHJcblx0XHQgICAgLy8g57uR5a6a57yT5Yay5Yy65a+56LGhKGdsLmJpbmRCdWZmZXIodGFyZ2V0LCBidWZmZXIpKVxyXG5cdFx0ICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB2ZXJ0ZXhzQnVmZmVyKTtcclxuXHRcdFxyXG5cdFx0ICAgIC8vIOWwhuaVsOaNruWGmeWFpee8k+WGsuWMuuWvueixoShnbC5idWZmZXJEYXRhKCkpIFdlYkdMIOS4jeaUr+aMgeebtOaOpeS9v+eUqCBKYXZhU2NyaXB0IOWOn+Wni+aVsOe7hOexu+Wei++8jOmcgOimgei9rOaNolxyXG5cdFx0ICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZlcnRleHMsIGdsLlNUQVRJQ19EUkFXKTtcclxuXHRcdFxyXG5cdFx0ICAgIGxldCBhX1Bvc2l0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oZ2wucHJvZ3JhbSwgXCJhX3Bvc2l0aW9uXCIpO1xyXG5cdFx0ICAgIGNvbnNvbGUubG9nKFwiYV9Qb3NpdGlvbiDnmoTlgLxcIiwgYV9Qb3NpdGlvbik7XHJcblx0XHRcclxuXHRcdCAgICBpZiAoYV9Qb3NpdGlvbiA8IDApIHtcclxuXHRcdCAgICAgIGNvbnNvbGUubG9nKFwiYV9Qb3NpdGlvbiA8IDBcIik7XHJcblx0XHQgICAgICByZXR1cm4gZmFsc2U7XHJcblx0XHQgICAgfVxyXG5cdFx0XHJcblx0XHQgICAgbGV0IGFfVGV4Q29vcmQgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihnbC5wcm9ncmFtLCBcImFfdGV4Q29vcmRcIik7XHJcblx0XHQgICAgY29uc29sZS5sb2coXCJhX1RleENvb3Jk55qE5YC8XCIsIGFfVGV4Q29vcmQpO1xyXG5cdFx0ICAgIGlmIChhX1RleENvb3JkIDwgMCkge1xyXG5cdFx0ICAgICAgY29uc29sZS5sb2coXCJhX1RleENvb3JkIDwgMFwiKTtcclxuXHRcdCAgICAgIHJldHVybiBmYWxzZTtcclxuXHRcdCAgICB9XHJcblx0XHRcclxuXHRcdCAgICBjb25zb2xlLmxvZyhcInRoaXMudmVydGV4c1wiLCB0aGlzLnZlcnRleHMsICdCWVRFU19QRVJfRUxFTUVOVDpcXFxcJywgdGhpcy52ZXJ0ZXhzLkJZVEVTX1BFUl9FTEVNRU5UKTtcclxuXHRcdCAgICAvLyBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGNvb3JkLCAzLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xyXG5cdFx0ICAgIC8v5bCG6aG254K55Z2Q5qCH55qE5L2N572u6LWL5YC8XHJcblx0XHQgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihhX1Bvc2l0aW9uLCAzLCBnbC5GTE9BVCwgZmFsc2UsIHRoaXMudmVydGV4cy5CWVRFU19QRVJfRUxFTUVOVCAqIDUsIDApO1xyXG5cdFx0ICAgIC8vIOi1i+iDvS3mibnlpITnkIZcclxuXHRcdCAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhX1Bvc2l0aW9uKTtcclxuXHRcdFxyXG5cdFx0ICAgIC8v5bCG57q555CG5Z2Q5qCH6LWL5YC8XHJcblx0XHQgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihhX1RleENvb3JkLCAyLCBnbC5GTE9BVCwgZmFsc2UsIHRoaXMudmVydGV4cy5CWVRFU19QRVJfRUxFTUVOVCAqIDUsIHRoaXMudmVydGV4cy5CWVRFU19QRVJfRUxFTUVOVCAqIDMpO1xyXG5cdFx0ICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGFfVGV4Q29vcmQpO1xyXG5cdFx0XHJcblx0XHQgICAgcmV0dXJuIHRydWU7XHJcblx0XHQgIH0sXHJcblx0XHQgIGluaXRUZXh0dXJlcyhnbCwgaW1nKSB7XHJcblx0XHRcclxuXHRcdCAgICBsZXQgdGV4dHVyZUlkID0gZ2wuY3JlYXRlVGV4dHVyZSgpOyAvL+WIm+W7uue6ueeQhuWvueixoVxyXG5cdFx0XHJcblx0XHQgICAgaWYgKHRleHR1cmVJZCA9PT0gbnVsbCkge1xyXG5cdFx0ICAgICAgY29uc29sZS5sb2coXCJ0ZXh0dXJlSWQgaXMgbnVsbFwiKTtcclxuXHRcdCAgICAgIHJldHVybiBmYWxzZTtcclxuXHRcdCAgICB9XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0ICAgIGdsLnBpeGVsU3RvcmVpKGdsLlVOUEFDS19GTElQX1lfV0VCR0wsIDEpOyAvLyDlr7nnurnnkIblm77lg4/ov5vooYx56L205Y+N6L2sXHJcblx0XHQgICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCk7IC8vIOW8gOWQrzDlj7fnurnnkIbljZXlhYNcclxuXHRcdCAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlSWQpOyAvLyDlkJF0YXJnZXTnu5HlrprnurnnkIblr7nosaFcclxuXHRcdCAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKTsgLy8g6YWN572u57q555CG5Y+C5pWwXHJcblx0XHQgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcblx0XHQgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcblx0XHQgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpO1xyXG5cdFx0ICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuXHRcdFxyXG5cdFx0ICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgaW1nKTsgLy8g6YWN572u57q555CG5Zu+5YOPXHJcblx0XHRcclxuXHRcdCAgICBsZXQgdV9pbWFnZSA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihnbC5wcm9ncmFtLCBcInVfaW1hZ2VcIik7XHJcblx0XHQgICAgaWYgKHVfaW1hZ2UgPCAwKSB7XHJcblx0XHQgICAgICBjb25zb2xlLmxvZyhcInVfaW1hZ2UgPCAwXCIpO1xyXG5cdFx0ICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cdFx0ICAgIH1cclxuXHRcdCAgICBnbC51bmlmb3JtMWkodV9pbWFnZSwgMCk7IC8vIOWwhjDlj7fnurnnkIbkvKDpgJLnu5nnnYDoibLlmahcclxuXHRcdFxyXG5cdFx0ICAgIHJldHVybiB0cnVlXHJcblx0XHQgIH0sXHJcblx0fSxcclxuXHRtb3VudGVkKCkge30sXHJcblx0b25TaG93KCkge1xyXG5cdFx0Ly8gdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0Ly8gXHR0aGlzLiRyZWZzLmJyaWdodG5lc3MuZ2V0U2NyZWVuQnJpZ2h0bmVzcygpXHJcblx0XHQvLyB9KVxyXG5cdH0sXHJcblx0YXN5bmMgb25Mb2FkKCkge30sXHJcblx0YmVmb3JlRGVzdHJveSgpIHtcclxuXHRcdC8vIOmAgOWHuumHiuaUvui1hOa6kFxyXG5cdFx0dGhpcy5yZWxlYXNlUmVuZGVyUmVzb3VyY2UoKTtcclxuXHR9LFxyXG5cdG9uU2hhcmVBcHBNZXNzYWdlKCl7fSxcclxuXHRvblNoYXJlVGltZWxpbmUoKXtcclxuXHRcdHJldHVybntcclxuXHRcdCAgICAgICAgICB0aXRsZTogJ+iHquWumuS5iei9rOWPkeagh+mimCcsXHJcblx0XHQgICAgICAgICAgcXVlcnk6ICc/b3BlbmlkPTEyMycsXHJcblx0XHQgICAgICAgICAgaW1hZ2VVcmw6JydcclxuXHRcdCAgICAgIH1cclxuXHR9LFxyXG5cdG9uVW5sb2FkKCkge30sXHJcblx0b25IaWRlKCkge31cclxufTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuLmNvbnRhaW5lciB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG4ubW9kZS1pbWcge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxuI2FyY2FudmFzIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHotaW5kZXg6IDExO1xyXG59XHJcbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY2Nzk5MzU3NjcxNVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJFOi/ova/ku7YvSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=