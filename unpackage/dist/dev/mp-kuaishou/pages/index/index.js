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
var translucentBase = 1;
//嘴唇面片缩放系数
var lipScale;

//阿里ar sdk嘴唇关键点起始索引
var lipMarkBeginIndex;
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
var cameraTexture;var _default =


{
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
      imgLipstick: 'https://cdn-mdj.oss-cn-beijing.aliyuncs.com/common/test-ar-makeup/lipColor1.png',
      imgModel: 'https://cdn-mdj.oss-cn-beijing.aliyuncs.com/common/test-ar-makeup/model.jpg',
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
    // this.handleARFrame1();
  },
  onReady: function onReady() {
    console.log('。。。。。。。onReady。。。');
  },
  methods: {
    imgLoad: function imgLoad(e) {
      console.log(e, 'width', e.detail.width);
      console.log('height：', e.detail.height);
      var systemInfo = uni.getSystemInfoSync();
      this.imgWidth = e.detail.width;
      this.imgHeight = e.detail.height;
      var w = systemInfo.windowWidth;
      var h = systemInfo.windowHeight;
      var r = e.detail.width / e.detail.height;
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

      this.canvasWxFn();




    },
    handleARFrame1: function handleARFrame1() {
      var rawPoints = this.points84By63;
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

      console.log(points, '...gl 出来了么....', this.imgWidth, this.imgHeight);
      this.points = points;
    },
    canvasWxFn: function canvasWxFn() {var _this = this;


      try {
        uni.createSelectorQuery().
        select('#arcanvas').
        fields({ node: true, size: true }).
        exec(function (res) {
          console.log('drawAiwendy', res);
          var c = res[0].node;
          var systemInfo = uni.getSystemInfoSync();
          console.log('。。。systemInfo。。', _this.canvasObj, _this.canvasObj);
          c.height = _this.canvasObj.height;
          c.width = _this.canvasObj.width;
          console.log(c.width, '。。。。。。。uni.createCanvas。。success。', c);
          _this.gl = c.getContext('webgl');
          gl = _this.gl;
          _this.canvas = c;
          canvas = c;
          console.log(_this.points, '。。。。。。。uni.createCanvas。。success。', gl);
          // this.renderImg()

          Promise.all([_this.changeLipStyle(_this.imgLipstick),
          _this.changeLipStyle(_this.imgModel)]).
          then(function (res) {
            console.log('zhixingwanbi 哈哈哈', res);
            _this.initRenderPipeline();
            gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, res[1]);


            gl.bindTexture(gl.TEXTURE_2D, lipTexture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, res[0]);

            // var dataFrame = new Uint8Array(res1.data);

            _this.drawFaceLip(_this.points);

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
    canvasH5Fn: function canvasH5Fn() {var _this2 = this;
      //通过getElementById()方法获取canvas画布
      // canvas = document.getElementById('arcanvas');
      // const canvas = document.querySelector("#arcanvas");
      //     const gl = canvas.getContext("webgl");

      canvas = this.$refs.arcanvas.$refs.canvas;
      console.log(canvas, '。。canvas。。。', this.$refs.arcanvas);
      // canvas.height = this.canvasObj.height ;
      // canvas.width = this.canvasObj.width;
      // gl = uni.createCanvasContext('arcanvas')

      // //通过方法getContext()获取WebGL上下文
      gl = canvas.getContext('webgl');
      console.log('。。ctx。。。', gl);
      // this.initRenderPipeline();
      Promise.all([this.changeLipStyle(this.imgLipstick),
      this.changeLipStyle(this.imgModel)]).
      then(function (res) {
        console.log('zhixingwanbi 哈哈哈', res);
        _this2.initRenderPipeline();
        gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, res[1]);


        gl.bindTexture(gl.TEXTURE_2D, lipTexture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, res[0]);

        // var dataFrame = new Uint8Array(res1.data);

        _this2.drawFaceLip(_this2.points);

        // this.drawFacePoints(this.points);
      }).catch(function (err) {
        console.log('失败 哈哈哈', err);
      });

    },
    loadTexTureH5: function loadTexTureH5(gl, n, u_Sampler, image, texUnit) {

      var texture = gl.createTexture(); //创建纹理对象
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1); //对纹理图像镜像y轴反转 
      if (texUnit === 0) {
        gl.activeTexture(gl.TEXTURE0); //激活纹理单元0 
        g_texUnit = true;
      } else if (texUnit === 1) {
        gl.activeTexture(gl.TEXTURE1); //激活纹理单元1 
        g_texUnit1 = true;
      } else if (texUnit === 2) {
        gl.activeTexture(gl.TEXTURE2); //激活纹理单元2 
        g_texUnit2 = true;
      }

      gl.bindTexture(gl.TEXTURE_2D, texture); //绑定纹理对象
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); //配置纹理对象参数
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image); //纹理图像分配给纹理对象
      gl.uniform1i(u_Sampler, texUnit); //纹理单元编号传给片元着色器中uniform变量

      //清空canvas
      gl.clear(gl.COLOR_BUFFER_BIT);

      //纹理图像全部处理完绘制图像
      if (g_texUnit && g_texUnit1 && g_texUnit2) {
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, n);
        gl.deleteTexture(texture);
      }

    },
    onCanvasReady: function onCanvasReady(id) {































    },


    initRenderPipeline: function initRenderPipeline() {
      var vertCode = "#version 300 es\n\t\t\t\t\t  layout(location = 0) in vec2 a_position;\n\t\t\t\t\t  layout(location = 1) in vec3 a_uv;\n\t\t\t\t\t  out vec3 uv_out;\n\t\t\t\t\t  void main() {\n\t\t\t\t\t\tgl_Position = vec4(a_position, 1.0, 1.0);\n\t\t\t\t\t\tuv_out = a_uv;\n\t\t\t\t\t\t//uv_out = vec2(1.0, 0.0);\n\t\t\t\t\t  }\n\t\t\t\t\t  ";











      var fragCode = "#version 300 es\n\t\t\t\t\t  precision mediump float;\n\t\t\t\t\t  in vec3 uv_out;\n\t\t\t\t\t  uniform sampler2D u_texture;\n\t\t\t\t\t  uniform sampler2D u_texture2;\n\t\t\t\t\t  layout(location = 0) out vec4 outColor;\n\t\t\t\t\t  void main() {\n\n\t\t\t\t\t\tvec2 uv = vec2(uv_out.x, 1.0 - uv_out.y);\n\t\t\t\t\t\tvec3 lipColor = texture(u_texture, uv).xyz;\n\t\t\t\t\t\tvec3 c = lipColor;\n\t\t\t\t\t\tvec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n\t\t\t\t\t\tvec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n\t\t\t\t\t\tvec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n\n\t\t\t\t\t\tfloat d = q.x - min(q.w, q.y);\n\t\t\t\t\t\tfloat e = 1.0e-10;\n\t\t\t\t\t\tvec3 hc = vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n\n\t\t\t\t\t\thc.y *= 1.2;\n\n\t\t\t\t\t\tvec4 L = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n\t\t\t\t\t\tvec3 M = abs(fract(hc.xxx + L.xyz) * 6.0 - L.www);\n\t\t\t\t\t\tvec3 color = hc.z * mix(L.xxx, clamp(M - L.xxx, 0.0, 1.0), hc.y);\n\n\t\t\t\t\t\t//outColor = vec4(color, 1.0);\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t//vec4 lipColor = texture(u_texture, uv);\n\t\t\t\t\t\tvec4 frameColor = texture(u_texture2, uv_out.xy);\n\t\t\t\t\t\t//vec3 finalColor = lipColor.xyz * lipColor.w + frameColor.xyz * (1.0 - lipColor.w);\n\t\t\t\t\t\tfloat alpha = texture(u_texture, uv).w;\n\t\t\t\t\t\t//outColor = vec4(color.xyz, alpha);\n\t\t\t\t\t\toutColor = vec4(color.xyz, alpha * uv_out.z);\n\t\t\t\t\t  }\n\t\t\t\t\t  ";





































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

      var FSIZE = 4;

      vertexbuffer = gl.createBuffer();
      var aposlocation = gl.getAttribLocation(shaderProgram, 'a_position');
      gl.enableVertexAttribArray(aposlocation);
      gl.vertexAttribPointer(aposlocation, 3, gl.FLOAT, false, FSIZE * 6, 0);
      console.log("aposlocation： ", aposlocation);

      var auv = gl.getAttribLocation(shaderProgram, 'a_uv');
      gl.enableVertexAttribArray(auv);
      gl.vertexAttribPointer(auv, 3, gl.FLOAT, false, FSIZE * 6, FSIZE * 3);
      console.log("auv： ", auv);


      var quadVertCode = "#version 300 es\n\t\t\t\t  layout(location = 0) in vec2 a_position;\n\t\t\t\t  layout(location = 1) in vec2 a_uv;\n\t\t\t\t  out vec2 uv_out;\n\t\t\t\t  void main() {\n\t\t\t\t\tgl_Position = vec4(a_position, 1.0, 1.0);\n\t\t\t\t\tuv_out = a_uv;\n\t\t\t\t  }\n\t\t\t\t  ";










      var quadFragCode = "#version 300 es\n\t\t\t\t  precision mediump float;\n\t\t\t\t  in vec2 uv_out;\n\t\t\t\t  uniform sampler2D u_texture;\n\t\t\t\t  layout(location = 0) out vec4 outColor;\n\t\t\t\t  void main() {\n\t\t\t\t\tvec2 uv = vec2(uv_out.x, uv_out.y);\n\t\t\t\t\toutColor = vec4(texture(u_texture, uv).xyz, 1.0);\n\t\t\t\t  }\n\t\t\t\t  ";











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

      var qposlocation = gl.getAttribLocation(quadShaderProgram, 'a_position');
      gl.enableVertexAttribArray(qposlocation);
      gl.vertexAttribPointer(qposlocation, 2, gl.FLOAT, false, FSIZE * 4, 0);
      console.log("qposlocation： ", qposlocation);

      var quv = gl.getAttribLocation(quadShaderProgram, 'a_uv');
      gl.enableVertexAttribArray(quv);
      gl.vertexAttribPointer(quv, 2, gl.FLOAT, false, FSIZE * 4, FSIZE * 2);
      console.log("quv： ", quv);

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
      var lipPointCount = 106 * 2;
      for (var i = 0; i < lipPointCount; i++) {
        lipPoints.push(0.0);
        lipPoints.push(0.0);
        lipPoints.push(0.0);
        lipPoints.push(0.0);
        lipPoints.push(0.0);
      }


    },
    releaseRenderFacePoints: function releaseRenderFacePoints() {
      gl.deleteShader(this.facePoints.vertShader);
      gl.deleteShader(this.facePoints.fragShader);
      gl.deleteProgram(this.facePoints.shaderProgram);
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
      var lipPointCount = lipIndex.length;
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

      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      // gl.clearDepth(1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.disable(gl.DEPTH_TEST);



      var FSIZE = 4;

      //Pass one
      gl.disable(gl.BLEND);
      gl.bindBuffer(gl.ARRAY_BUFFER, quadVertexbuffer);
      console.log('draw quadVertexbuffer:', quadVertexbuffer);

      var qposlocation = gl.getAttribLocation(quadShaderProgram, 'a_position');
      gl.vertexAttribPointer(qposlocation, 2, gl.FLOAT, false, FSIZE * 4, 0);
      gl.enableVertexAttribArray(qposlocation);
      console.log('draw qposlocation:', qposlocation);


      var quv = gl.getAttribLocation(quadShaderProgram, 'a_uv');
      gl.vertexAttribPointer(quv, 2, gl.FLOAT, false, FSIZE * 4, FSIZE * 2);
      gl.enableVertexAttribArray(quv);
      console.log('draw quv:', quv);


      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
      gl.useProgram(quadShaderProgram);
      //gl.polygonMode(gl.FRONT_AND_BACK, gl.FILL);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      console.log('draw drawArrays zhengge :');


      //Pass two
      gl.enable(gl.BLEND);
      // gl.enable(gl.DEPTH_TEST);
      // gl.depthFunc(gl.LESS);
      gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexbuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lipPoints), gl.STREAM_DRAW);

      var aposlocation = gl.getAttribLocation(shaderProgram, 'a_position');
      gl.vertexAttribPointer(aposlocation, 2, gl.FLOAT, false, FSIZE * 5, 0);
      gl.enableVertexAttribArray(aposlocation);
      console.log('draw aposlocation :', aposlocation);

      var auv = gl.getAttribLocation(shaderProgram, 'a_uv');
      gl.vertexAttribPointer(auv, 3, gl.FLOAT, false, FSIZE * 5, FSIZE * 2);
      gl.enableVertexAttribArray(auv);
      console.log('draw auv :', auv);

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, lipTexture);
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
      gl.useProgram(shaderProgram);
      //gl.polygonMode(gl.FRONT_AND_BACK, gl.LINE);

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
        var img1;

        img1 = canvas.createImage();





        img1.onload = function (res) {
          resolve(img1);
          console.log(lipTexture, '......图片..', res, img);

        };
        img1.onerror = function (res) {
          console.log('......图片错误..', res, img);
          reject();
        };
        img1.src = imgPath;

      });

    },

    updateFaceData: function updateFaceData(data, width, height) {
      var dataFrame = new Uint8Array(data);
      gl.bindTexture(gl.TEXTURE_2D, cameraTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, dataFrame);
    },
    drawFacePoints: function drawFacePoints(points) {
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
      var vertCode = "attribute vec3 coordinates;\n\t\t    void main(void) {\n\t\t\t\tgl_Position = vec4(coordinates, 1.0);\n\t\t\t\tgl_PointSize = 5.0;\n\t\t    }";





      // Create a vertex shader object
      this.facePoints.vertShader = gl.createShader(gl.VERTEX_SHADER);
      // Attach vertex shader source code
      gl.shaderSource(this.facePoints.vertShader, vertCode);

      // Compile the vertex shader
      gl.compileShader(this.facePoints.vertShader);

      // fragment shader source code
      var fragCode = "precision mediump float;\n\t\t\tuniform vec4 u_FragColor;\n\t\t\tvoid main(){\n\t\t\t    gl_FragColor=u_FragColor;\n\t\t\t}";





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
      var u_FragColor = gl.getUniformLocation(this.facePoints.shaderProgram, 'u_FragColor');
      var rgba = this.isShowFacePoints ? 1.0 : 0.0;
      //修改uniform 变量
      gl.uniform4f(u_FragColor, 1.0, 0.0, 0.0, 1.0);

      // gl.clearColor(0.0,0.0,0.0,0.0);
      // gl.clear(gl.COLOR_BUFFER_BIT);
      // Draw the triangle
      gl.drawArrays(gl.POINTS, 0, pointCount);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRTovb3RoZXIvZGlhb3lhbi9hci90ZXN0LWFyLW1hcmt1cC9wYWdlcy9pbmRleC9pbmRleC52dWU/MDIwYiIsIndlYnBhY2s6Ly8vRTovb3RoZXIvZGlhb3lhbi9hci90ZXN0LWFyLW1hcmt1cC9wYWdlcy9pbmRleC9pbmRleC52dWU/MmNiMSIsIndlYnBhY2s6Ly8vRTovb3RoZXIvZGlhb3lhbi9hci90ZXN0LWFyLW1hcmt1cC9wYWdlcy9pbmRleC9pbmRleC52dWU/NjFkNCIsIndlYnBhY2s6Ly8vRTovb3RoZXIvZGlhb3lhbi9hci90ZXN0LWFyLW1hcmt1cC9wYWdlcy9pbmRleC9pbmRleC52dWU/NmJjYSIsInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIiwid2VicGFjazovLy9FOi9vdGhlci9kaWFveWFuL2FyL3Rlc3QtYXItbWFya3VwL3BhZ2VzL2luZGV4L2luZGV4LnZ1ZT8yZWY2Iiwid2VicGFjazovLy9FOi9vdGhlci9kaWFveWFuL2FyL3Rlc3QtYXItbWFya3VwL3BhZ2VzL2luZGV4L2luZGV4LnZ1ZT82Nzc2Il0sIm5hbWVzIjpbInd4IiwiX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImNyZWF0ZVBhZ2UiLCJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBQUE7OztBQUdBO0FBQ0EsNEYsOEZBSEE7QUFDQUEsRUFBRSxDQUFDQyxpQ0FBSCxHQUF1Q0MsbUJBQXZDLENBR0FDLFVBQVUsQ0FBQ0MsY0FBRCxDQUFWLEM7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrSDtBQUNsSDtBQUN5RDtBQUNMO0FBQ2E7OztBQUdqRTtBQUNzTTtBQUN0TSxnQkFBZ0IsdU1BQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFl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QUNBOztBQUVBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQS9sQkEsRUFqRkE7O0FBa3JCQSxTQWxyQkEscUJBa3JCQSxFQWxyQkE7QUFtckJBLFFBbnJCQSxvQkFtckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0F2ckJBO0FBd3JCQSxRQXhyQkEsb0JBd3JCQSxxUUF4ckJBO0FBeXJCQSxlQXpyQkEsMkJBeXJCQTtBQUNBO0FBQ0E7QUFDQSxHQTVyQkE7QUE2ckJBLFVBN3JCQSxzQkE2ckJBLEVBN3JCQTtBQThyQkEsUUE5ckJBLG9CQThyQkEsRUE5ckJBLEU7Ozs7Ozs7Ozs7Ozs7OztBQ2xKQTtBQUFBO0FBQUE7QUFBQTtBQUEwbUMsQ0FBZ0IsMGhDQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0E5bkM7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJwYWdlcy9pbmRleC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbi8vIEB0cy1pZ25vcmVcbnd4Ll9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyA9IF9fd2VicGFja19yZXF1aXJlX187XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvaW5kZXgvaW5kZXgudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3MjgwMjI4JlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTcyODAyMjgmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcblx0PGltYWdlXHJcblx0XHQ6c3JjPVwiaW1nTW9kZWxcIlxyXG5cdFx0Y2xhc3M9XCJtb2RlLWltZ1wiXHJcblx0XHRAbG9hZD1cImltZ0xvYWRcIlxyXG5cdFx0OnN0eWxlPVwieyB3aWR0aDogY2FudmFzT2JqLndpZHRoICsgJ3B4JywgaGVpZ2h0OiBjYW52YXNPYmouaGVpZ2h0ICsgJ3B4JywgdG9wOiBjYW52YXNPYmoudG9wICsgJ3B4JywgbGVmdDogY2FudmFzT2JqLmxlZnQgKyAncHgnIH1cIlxyXG5cdD48L2ltYWdlPlxyXG5cdDxidXR0b24gc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAxMDBweDsgXCI+IOWTiOWTiOWTiDwvYnV0dG9uPlxyXG5cdDwhLS0gaDXjgIFhcHAtdnVlIOS4reWNleS4quWwuuWvuOi/h+Wkp+eahCBjYW52YXMg5ZyoIGlPUy9TYWZhcmkg5peg5rOV57uY5Yi277yI5YW35L2T6ZmQ5Yi25bC65a+45pyq5YWs5biD77yJIC0tPlxyXG5cdDxjYW52YXNcclxuXHRcdGlkPVwiYXJjYW52YXNcIlxyXG5cdFx0dHlwZT1cIndlYmdsXCJcclxuXHRcdHJlZj1cImFyY2FudmFzXCJcclxuXHRcdDpzdHlsZT1cInsgd2lkdGg6IGNhbnZhc09iai53aWR0aCArICdweCcsIGhlaWdodDogY2FudmFzT2JqLmhlaWdodCArICdweCcsIHRvcDogY2FudmFzT2JqLnRvcCArICdweCcsIGxlZnQ6IGNhbnZhc09iai5sZWZ0ICsgJ3B4JyB9XCJcclxuXHQ+PC9jYW52YXM+XHJcblx0PGJ1dHRvbiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDIwMHB4OyB6LWluZGV4OiAyMjtcIj4g55Wl55WlPC9idXR0b24+XHJcblx0XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxudmFyIGNhbnZhcztcbnZhciBnbDtcblxudmFyIHRlc3Q7XG5cbnZhciB3ID0gMDtcbnZhciBoID0gMDtcblxuLy/llIflvanlm77niYdcbnZhciBpbWc7XG4vL+WUh+W9qeWbvueJh+i3r+W+hFxudmFyIGltZ1BhdGg7XG4vL+WUh+W9qeeJueaViOmAj+aYjuW6plxudmFyIHRyYW5zbHVjZW50O1xyXG52YXIgdHJhbnNsdWNlbnRCYXNlID0gMVxuLy/lmLTllIfpnaLniYfnvKnmlL7ns7vmlbBcbnZhciBsaXBTY2FsZTtcblxuLy/pmL/ph4xhciBzZGvlmLTllIflhbPplK7ngrnotbflp4vntKLlvJVcbnZhciBsaXBNYXJrQmVnaW5JbmRleDtcbi8v5b635Yqz5YaF5LiJ6KeS5YyW6YCA5YyW5oiQ5p+l5om+6KGoXG5jb25zdCBsaXBJbmRleCA9IG5ldyBJbnQzMkFycmF5KFtcbiAgODQsIDg1LCA5NixcbiAgOTYsIDg1LCA5NyxcbiAgOTcsIDg1LCA4NixcbiAgOTcsIDg2LCA4NyxcbiAgOTcsIDg3LCA5OCxcbiAgOTgsIDg3LCA4OCxcbiAgOTgsIDg4LCA5OSxcbiAgOTksIDg4LCA4OSxcbiAgOTksIDg5LCAxMDAsXG4gIDEwMCwgODksIDkwLFxuICA4NCwgOTYsIDk1LFxuICA5NSwgOTYsIDEwMyxcbiAgOTUsIDEwMywgOTQsXG4gIDk0LCAxMDMsIDEwMixcbiAgOTQsIDEwMiwgOTMsXG4gIDkzLCAxMDIsIDEwMSxcbiAgOTMsIDEwMSwgOTIsXG4gIDkyLCAxMDEsIDkxLFxuICA5MSwgMTAxLCAxMDAsXG4gIDkxLCAxMDAsIDkwXG4gICAgXSk7XG5cbi8v5YWz6ZSu54K557yp5pS+55qE54K55a+557Si5byVXG5jb25zdCBsaXBTY2FsZUluZGV4ID0gbmV3IEludDMyQXJyYXkoW1xuICA4NCwgOTYsXG4gIDk2LCA4NCxcbiAgODUsIDk3LFxuICA4NiwgOTcsXG4gIDk3LCA4NixcbiAgODcsIDk4LFxuICA5OCwgODcsXG4gIDg4LCA5OSxcbiAgOTksIDg4LFxuICA4OSwgOTksXG4gIDkwLCAxMDAsXG4gIDEwMCwgOTAsXG4gIDkxLCAxMDEsXG4gIDkyLCAxMDEsXG4gIDEwMSwgOTIsXG4gIDkzLCAxMDIsXG4gIDEwMiwgOTMsXG4gIDk0LCAxMDMsXG4gIDEwMywgOTQsXG4gIDk1LCAxMDNcbiAgICBdKTtcblxuY29uc3QgbGlwVGV4Q29vcmRuYXRlID0gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgMCwgMC41LFxuICAgIDAuMTUzLCAwLjY4NixcbiAgICAwLjM2OCwgMC43NDEsXG4gICAgMC41LCAwLjY5MyxcbiAgICAwLjYzMiwgMC43NDEsXG4gICAgMC44NDcsIDAuNjg2LFxuICAgIDEsIDAuNSxcbiAgICAwLjg2MywgMC4zMTEsXG4gICAgMC42NzcsIDAuMjQsXG4gICAgMC41LCAwLjIxMixcbiAgICAwLjMyMywgMC4yNCxcbiAgICAwLjEzNywgMC4zMTEsXG4gICAgMC4wNzIsIDAuNDk5LFxuICAgIDAuMzYzLCAwLjUwNCxcbiAgICAwLjUsIDAuNDg4LFxuICAgIDAuNjM3LCAwLjUwNCxcbiAgICAwLjkyOCwgMC40OTksXG4gICAgMC42MzcsIDAuNDc1LFxuICAgIDAuNSwgMC40NjQsXG4gICAgMC4zNjMsIDAuNDc1XG4gIF0pO1xuXG5jb25zdCBxdWFkVmVydGV4ID0gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgLTEuMCwgMS4wLCAwLjAsIDAuMCxcbiAgICAtMS4wLCAtMS4wLCAwLjAsIDEuMCxcbiAgICAxLjAsIC0xLjAsIDEuMCwgMS4wLFxuICAgIDEuMCwgLTEuMCwgMS4wLCAxLjAsXG4gICAgMS4wLCAxLjAsIDEuMCwgMC4wLFxuICAgIC0xLjAsIDEuMCwgMC4wLCAwLjBdKTtcblxuY29uc3QgbGlwVmVydGV4ID0gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgLTEuMCwgMS4wLCAwLjAsIDAuMCwgMS4wLFxuICAgIC0xLjAsIC0xLjAsIDAuMCwgMS4wLCAxLjAsXG4gICAgMS4wLCAtMS4wLCAxLjAsIDEuMCwgMS4wLFxuICAgIDEuMCwgLTEuMCwgMS4wLCAxLjAsIDEuMCxcbiAgICAxLjAsIDEuMCwgMS4wLCAwLjAsIDEuMCxcbiAgICAtMS4wLCAxLjAsIDAuMCwgMC4wLCAxLjBdKTtcblxuLy9yZW5kZXIgcmVzb3VyY2VcbnZhciB2ZXJ0U2hhZGVyO1xudmFyIGZyYWdTaGFkZXI7XG52YXIgc2hhZGVyUHJvZ3JhbTtcbnZhciBxdWFkVmVydFNoYWRlcjtcbnZhciBxdWFkRnJhZ1NoYWRlcjtcbnZhciBxdWFkU2hhZGVyUHJvZ3JhbTtcbnZhciB2ZXJ0ZXhidWZmZXI7XG52YXIgcXVhZFZlcnRleGJ1ZmZlcjtcbnZhciBsaXBQb2ludHM7XG52YXIgbGlwUG9pbnRzSW5kZXg7XG52YXIgbGlwUG9pbnRzU2NhbGU7XG52YXIgbGlwUG9pbnRzVW5TY2FsZTtcbnZhciBsaXBUZXh0dXJlO1xudmFyIGNhbWVyYVRleHR1cmU7XG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAnYXItY2FtZXJhLWNvbScsXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHBvaW50czpbXSxcclxuXHRcdFx0Y2FudmFzT2JqOiB7XHJcblx0XHRcdFx0d2lkdGg6IDAsXHJcblx0XHRcdFx0aGVpZ2h0OiAwLFxyXG5cdFx0XHRcdHRvcDogMCxcclxuXHRcdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHRcdHBpeGVsUmF0aW86IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2w6IG51bGwsXHJcblx0XHRcdGNhbnZhczogbnVsbCxcclxuXHRcdFx0bGlwTWFya0JlZ2luSW5kZXg6IDg0LCAvL+mYv+mHjGFyIHNka+WYtOWUh+WFs+mUrueCuei1t+Wni+e0ouW8lVxyXG5cdFx0XHRsaXBTY2FsZTogbnVsbCwgLy/lmLTllIfpnaLniYfnvKnmlL7ns7vmlbBcclxuXHRcdFx0ZmFjZVBvaW50czoge30sXHJcblx0XHRcdHBvaW50czg0Qnk2MzogW1xyXG5cdFx0XHRcdDk1Ny41MDQwOTQ4MixcclxuXHRcdFx0XHQyMDQ4LjI1MDkwMTg2LFxyXG5cdFx0XHRcdDEwMjQuMjAzMjg5NTQsXHJcblx0XHRcdFx0MjAyMS4wMDM1NDE4OSxcclxuXHRcdFx0XHQxMTAwLjM1NTM1NzE3LFxyXG5cdFx0XHRcdDE5OTYuMDAyMTg3MzcsXHJcblx0XHRcdFx0MTE0NS41NjY1MjMzMSxcclxuXHRcdFx0XHQyMDA3LjA3Mjg4NDAxLFxyXG5cdFx0XHRcdDExODkuMjYzMzIxNyxcclxuXHRcdFx0XHQxOTk2LjA0Nzk1MjU2LFxyXG5cdFx0XHRcdDEyNjEuNDk4NDcwMSxcclxuXHRcdFx0XHQyMDE3LjQzOTA2MzA2LFxyXG5cdFx0XHRcdDEzMjUuMjI4MzE1MDksXHJcblx0XHRcdFx0MjA0Ni41NjYxODU4OSxcclxuXHRcdFx0XHQxMjc2LjU1NzI3NjI2LFxyXG5cdFx0XHRcdDIwOTMuODQ3NDM5OTcsXHJcblx0XHRcdFx0MTIyNC4zOTI4Mjc4NCxcclxuXHRcdFx0XHQyMTM0LjMyMDY5ODEsXHJcblx0XHRcdFx0MTE0NC42NTU4MjAyMixcclxuXHRcdFx0XHQyMTQ0LjI5ODU5OTQ1LFxyXG5cdFx0XHRcdDEwNjkuMzI5NDYzMTgsXHJcblx0XHRcdFx0MjEyOS44MDg0NjgxNixcclxuXHRcdFx0XHQxMDExLjQyNDE0NjgzLFxyXG5cdFx0XHRcdDIwOTQuMjkxMDQ3NTQsXHJcblx0XHRcdFx0OTg4LjE2NzYyMDUsXHJcblx0XHRcdFx0MjA1NS42MjE4ODIzMixcclxuXHRcdFx0XHQxMDU0LjkwNzg1ODYxLFxyXG5cdFx0XHRcdDIwNTIuOTcyODI4MzksXHJcblx0XHRcdFx0MTE1Mi43MzUwNzE1LFxyXG5cdFx0XHRcdDIwNTQuMTU2NDI3NjIsXHJcblx0XHRcdFx0MTI0MS4xMjYzMDEwMSxcclxuXHRcdFx0XHQyMDU2Ljk4MzY5OTQ0LFxyXG5cdFx0XHRcdDEyOTkuNjk3NjM0MDcsXHJcblx0XHRcdFx0MjA0Ni4yMzYxNDM4LFxyXG5cdFx0XHRcdDEyMzcuNjg1OTIwOTEsXHJcblx0XHRcdFx0MjA2Mi4zMDY3NDgxMixcclxuXHRcdFx0XHQxMTQ1LjcyOTM2NTA3LFxyXG5cdFx0XHRcdDIwNzEuNDczODMwNzMsXHJcblx0XHRcdFx0MTAyNC4yMDMyODk1NCxcclxuXHRcdFx0XHQyMDIxLjAwMzU0MTg5XHJcblx0XHRcdF0sXHJcblx0XHRcdHRyYW5zbHVjZW50OiAwLjUsXHJcblx0XHRcdGltZ0xpcHN0aWNrOiAnaHR0cHM6Ly9jZG4tbWRqLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9jb21tb24vdGVzdC1hci1tYWtldXAvbGlwQ29sb3IxLnBuZycsXHJcblx0XHRcdGltZ01vZGVsOiAnaHR0cHM6Ly9jZG4tbWRqLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9jb21tb24vdGVzdC1hci1tYWtldXAvbW9kZWwuanBnJyxcclxuXHRcdFx0aXNGYWNlQmVhdXR5OiB0cnVlLFxyXG5cdFx0XHRpc1Nob3dGYWNlUG9pbnRzOiBmYWxzZSxcclxuXHRcdFx0IHZlcnRleHM6IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG5cdFx0XHQgICAgICAtMS4wLCAxLjAsIDAuMCwgMC4wLCAxLjAsXHJcblx0XHRcdCAgICAgIC0xLjAsIC0xLjAsIDAuMCwgMC4wLCAwLjAsXHJcblx0XHRcdCAgICAgIDEuMCwgMS4wLCAwLjAsIDEuMCwgMS4wLFxyXG5cdFx0XHQgICAgICAxLjAsIC0xLjAsIDAuMCwgMS4wLCAwLjBdKVxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdHByb3BzOiB7fSxcclxuXHRjb21wb25lbnRzOiB7fSxcclxuXHRjb21wdXRlZDoge30sXHJcblx0Y3JlYXRlZCgpIHtcclxuXHRcdC8vIHRoaXMuc2V0Q2FudmFzV2goKTtcclxuXHRcdC8vIHRoaXMuaGFuZGxlQVJGcmFtZTEoKTtcclxuXHR9LFxyXG5cdG9uUmVhZHkoKSB7XHJcblx0XHRjb25zb2xlLmxvZygn44CC44CC44CC44CC44CC44CC44CCb25SZWFkeeOAguOAguOAgicpO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0aW1nTG9hZChlKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUsICd3aWR0aCcsIGUuZGV0YWlsLndpZHRoKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2hlaWdodO+8micsIGUuZGV0YWlsLmhlaWdodCk7XHJcblx0XHRcdHZhciBzeXN0ZW1JbmZvID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblx0XHRcdHRoaXMuaW1nV2lkdGggPSBlLmRldGFpbC53aWR0aFxyXG5cdFx0XHR0aGlzLmltZ0hlaWdodCA9IGUuZGV0YWlsLmhlaWdodFxyXG5cdFx0XHRsZXQgdyA9ICBzeXN0ZW1JbmZvLndpbmRvd1dpZHRoO1xyXG5cdFx0XHRsZXQgaCA9ICBzeXN0ZW1JbmZvLndpbmRvd0hlaWdodDtcclxuXHRcdFx0bGV0IHIgPSBlLmRldGFpbC53aWR0aCAvIGUuZGV0YWlsLmhlaWdodDtcclxuXHRcdFx0Y29uc29sZS5sb2coc3lzdGVtSW5mbywgJ2dldEltYWdlSW5mbycsIHRoaXMuY2FudmFzT2JqLCB3LCBoLCByKTtcclxuXHRcdFx0aWYgKHcgLyBoIDwgcikge1xyXG5cdFx0XHRcdC8vIOihqOekuumrmOaYr+efrei+uSznjrDlnKjlrr3liafkuK1cclxuXHRcdFx0XHR0aGlzLmNhbnZhc09iai5oZWlnaHQgPSBoO1xyXG5cdFx0XHRcdHRoaXMuY2FudmFzT2JqLndpZHRoID0gciAqIGg7XHJcblx0XHRcdFx0dGhpcy5jYW52YXNPYmoudG9wID0gMCArICdweCc7XHJcblx0XHRcdFx0dGhpcy5jYW52YXNPYmoubGVmdCA9ICh3IC0gdGhpcy5jYW52YXNPYmoud2lkdGgpIC8gMjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmNhbnZhc09iai53aWR0aCA9IHc7XHJcblx0XHRcdFx0dGhpcy5jYW52YXNPYmouaGVpZ2h0ID0gdyAvIHI7XHJcblx0XHRcdFx0dGhpcy5jYW52YXNPYmoudG9wID0gKGggLSB0aGlzLmNhbnZhc09iai5oZWlnaHQpIC8gMjtcclxuXHRcdFx0XHR0aGlzLmNhbnZhc09iai5sZWZ0ID0gMDtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmNhbnZhc09iai5waXhlbFJhdGlvID0gc3lzdGVtSW5mby5waXhlbFJhdGlvO1xyXG5cdFx0XHRjb25zb2xlLmxvZyh3IC8gaCA8IHIsICfjgILjgILjgILjgILjgILjgILjgIJ0aGlzLmNhbnZhc09iauOAguOAguOAgicsIHRoaXMuY2FudmFzT2JqKTtcclxuXHRcdFx0dGhpcy5oYW5kbGVBUkZyYW1lMSgpO1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHR0cmFuc2x1Y2VudCA9IDAuNztcclxuXHRcdFx0bGlwTWFya0JlZ2luSW5kZXggPSB0aGlzLmxpcE1hcmtCZWdpbkluZGV4ID0gODQ7XHJcblx0XHRcdC8vIHRoaXMubGlwU2NhbGUgPSAwLjAxO1xyXG5cdFx0XHQvLyAjaWZkZWYgTVBcclxuXHRcdFx0dGhpcy5jYW52YXNXeEZuKCk7XHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHQvLyAjaWZkZWYgSDVcclxuXHRcdFx0dGhpcy5jYW52YXNINUZuKCk7XHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0fSxcclxuXHRcdGhhbmRsZUFSRnJhbWUxKCkge1xyXG5cdFx0XHR2YXIgcmF3UG9pbnRzID0gdGhpcy5wb2ludHM4NEJ5NjM7XHJcblx0XHRcdGxldCBsZW4gPSAxMDY7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgODQ7IGkrKykge1xyXG5cdFx0XHRcdHJhd1BvaW50cy51bnNoaWZ0KDAuMSwgMC4xKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IgKHZhciBpID0gMTA0OyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRyYXdQb2ludHMucHVzaCgwLjEsIDAuMSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZnVuY3Rpb24gdHJhbnNmb3JtUG9pbnQocG9pbnQsIGZ3LCBmaCkge1xyXG5cdFx0XHRcdHJldHVybiBbKHBvaW50WzBdIC8gZncpICogMiAtIDEsICgxIC0gcG9pbnRbMV0gLyBmaCkgKiAyIC0gMV07XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIHBvaW50cyA9IFtdXHJcblx0XHRcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDY7IGkrKykge1xyXG5cdFx0XHRcdHBvaW50cy5wdXNoKHRyYW5zZm9ybVBvaW50KFtyYXdQb2ludHNbaSAqIDJdLCByYXdQb2ludHNbaSAqIDIgKyAxXV0sIHRoaXMuaW1nV2lkdGgsIHRoaXMuaW1nSGVpZ2h0KSk7XHJcblx0XHRcdH1cclxuXHRcdFxyXG5cdFx0XHRjb25zb2xlLmxvZyhwb2ludHMsJy4uLmdsIOWHuuadpeS6huS5iC4uLi4nLHRoaXMuaW1nV2lkdGgsdGhpcy5pbWdIZWlnaHQpXHJcblx0XHRcdHRoaXMucG9pbnRzID0gcG9pbnRzO1xyXG5cdFx0fSxcclxuXHRcdGNhbnZhc1d4Rm4oKSB7XHJcblx0XHRcdC8vICNpZmRlZiBNUFxyXG5cdFx0XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0dW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKVxyXG5cdFx0XHRcdFx0LnNlbGVjdCgnI2FyY2FudmFzJylcclxuXHRcdFx0XHRcdC5maWVsZHMoeyBub2RlOiB0cnVlLCBzaXplOiB0cnVlIH0pXHJcblx0XHRcdFx0XHQuZXhlYyhyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnZHJhd0Fpd2VuZHknLCByZXMpO1xyXG5cdFx0XHRcdFx0XHRjb25zdCBjID0gcmVzWzBdLm5vZGU7XHJcblx0XHRcdFx0XHRcdHZhciBzeXN0ZW1JbmZvID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfjgILjgILjgIJzeXN0ZW1JbmZv44CC44CCJywgdGhpcy5jYW52YXNPYmosIHRoaXMuY2FudmFzT2JqKTtcclxuXHRcdFx0XHRcdFx0Yy5oZWlnaHQgPSB0aGlzLmNhbnZhc09iai5oZWlnaHQ7XHJcblx0XHRcdFx0XHRcdGMud2lkdGggPSB0aGlzLmNhbnZhc09iai53aWR0aDtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coYy53aWR0aCwgJ+OAguOAguOAguOAguOAguOAguOAgnVuaS5jcmVhdGVDYW52YXPjgILjgIJzdWNjZXNz44CCJywgYyk7XHJcblx0XHRcdFx0XHRcdHRoaXMuZ2wgPSBjLmdldENvbnRleHQoJ3dlYmdsJyk7XHJcblx0XHRcdFx0XHRcdGdsID0gdGhpcy5nbDtcclxuXHRcdFx0XHRcdFx0dGhpcy5jYW52YXMgPSBjO1xyXG5cdFx0XHRcdFx0XHRjYW52YXMgPSBjO1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLnBvaW50cywn44CC44CC44CC44CC44CC44CC44CCdW5pLmNyZWF0ZUNhbnZhc+OAguOAgnN1Y2Nlc3PjgIInLCBnbCk7XHJcblx0XHRcdFx0XHRcdC8vIHRoaXMucmVuZGVySW1nKClcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFByb21pc2UuYWxsKFt0aGlzLmNoYW5nZUxpcFN0eWxlKHRoaXMuaW1nTGlwc3RpY2spLFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY2hhbmdlTGlwU3R5bGUodGhpcy5pbWdNb2RlbClcclxuXHRcdFx0XHRcdFx0XSkudGhlbihyZXM9PntcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnemhpeGluZ3dhbmJpIOWTiOWTiOWTiCcscmVzKVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuaW5pdFJlbmRlclBpcGVsaW5lKCk7XHJcblx0XHRcdFx0XHRcdFx0Z2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgY2FtZXJhVGV4dHVyZSk7XHJcblx0XHRcdFx0XHRcdFx0Z2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCByZXNbMV0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0Z2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbGlwVGV4dHVyZSk7XHJcblx0XHRcdFx0XHRcdFx0Z2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCByZXNbMF0pO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQvLyB2YXIgZGF0YUZyYW1lID0gbmV3IFVpbnQ4QXJyYXkocmVzMS5kYXRhKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kcmF3RmFjZUxpcCh0aGlzLnBvaW50cyk7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0Ly8gdGhpcy5kcmF3RmFjZVBvaW50cyh0aGlzLnBvaW50cyk7XHJcblx0XHRcdFx0XHRcdH0pLmNhdGNoKGVycj0+e1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCflpLHotKUg5ZOI5ZOI5ZOIJyxlcnIpXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHQvL1RPRE8gaGFuZGxlIHRoZSBleGNlcHRpb25cclxuXHRcdFx0XHRjb25zb2xlLmxvZygnLi4uLicsIGUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0Ly8gdGhpcy5vbkNhbnZhc1JlYWR5KCdhcmNhbnZhcycpXHJcblx0XHR9LFxyXG5cdFx0Y2FudmFzSDVGbigpe1xyXG5cdFx0XHQvL+mAmui/h2dldEVsZW1lbnRCeUlkKCnmlrnms5Xojrflj5ZjYW52YXPnlLvluINcclxuXHRcdFx0Ly8gY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FyY2FudmFzJyk7XHJcblx0XHRcdC8vIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXJjYW52YXNcIik7XHJcblx0XHRcdC8vICAgICBjb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2xcIik7XHJcblxyXG5cdFx0XHRjYW52YXMgPSB0aGlzLiRyZWZzLmFyY2FudmFzLiRyZWZzLmNhbnZhcztcclxuXHRcdFx0Y29uc29sZS5sb2coY2FudmFzLCfjgILjgIJjYW52YXPjgILjgILjgIInLHRoaXMuJHJlZnMuYXJjYW52YXMpXHJcblx0XHRcdC8vIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmNhbnZhc09iai5oZWlnaHQgO1xyXG5cdFx0XHQvLyBjYW52YXMud2lkdGggPSB0aGlzLmNhbnZhc09iai53aWR0aDtcclxuXHRcdFx0Ly8gZ2wgPSB1bmkuY3JlYXRlQ2FudmFzQ29udGV4dCgnYXJjYW52YXMnKVxyXG5cdFx0XHRcclxuXHRcdFx0Ly8gLy/pgJrov4fmlrnms5VnZXRDb250ZXh0KCnojrflj5ZXZWJHTOS4iuS4i+aWh1xyXG5cdFx0XHRnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygn44CC44CCY3R444CC44CC44CCJyxnbClcclxuXHRcdFx0Ly8gdGhpcy5pbml0UmVuZGVyUGlwZWxpbmUoKTtcclxuXHRcdFx0UHJvbWlzZS5hbGwoW3RoaXMuY2hhbmdlTGlwU3R5bGUodGhpcy5pbWdMaXBzdGljayksXHJcblx0XHRcdFx0dGhpcy5jaGFuZ2VMaXBTdHlsZSh0aGlzLmltZ01vZGVsKVxyXG5cdFx0XHRdKS50aGVuKHJlcz0+e1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCd6aGl4aW5nd2FuYmkg5ZOI5ZOI5ZOIJyxyZXMpXHJcblx0XHRcdFx0dGhpcy5pbml0UmVuZGVyUGlwZWxpbmUoKTtcclxuXHRcdFx0XHRnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBjYW1lcmFUZXh0dXJlKTtcclxuXHRcdFx0XHRnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIHJlc1sxXSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBsaXBUZXh0dXJlKTtcclxuXHRcdFx0XHRnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIHJlc1swXSk7XHJcblx0XHRcdFxyXG5cdFx0XHRcdC8vIHZhciBkYXRhRnJhbWUgPSBuZXcgVWludDhBcnJheShyZXMxLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLmRyYXdGYWNlTGlwKHRoaXMucG9pbnRzKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyB0aGlzLmRyYXdGYWNlUG9pbnRzKHRoaXMucG9pbnRzKTtcclxuXHRcdFx0fSkuY2F0Y2goZXJyPT57XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ+Wksei0pSDlk4jlk4jlk4gnLGVycilcclxuXHRcdFx0fSlcclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0bG9hZFRleFR1cmVINShnbCwgbiwgdV9TYW1wbGVyLCBpbWFnZSwgdGV4VW5pdCkge1xyXG5cdFx0XHJcblx0XHQgICAgICB2YXIgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKSAvL+WIm+W7uue6ueeQhuWvueixoVxyXG5cdFx0ICAgICAgZ2wucGl4ZWxTdG9yZWkoZ2wuVU5QQUNLX0ZMSVBfWV9XRUJHTCwgMSkgLy/lr7nnurnnkIblm77lg4/plZzlg4956L205Y+N6L2sIFxyXG5cdFx0ICAgICAgaWYgKHRleFVuaXQgPT09IDApIHtcclxuXHRcdCAgICAgICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCkgLy/mv4DmtLvnurnnkIbljZXlhYMwIFxyXG5cdFx0ICAgICAgICBnX3RleFVuaXQgPSB0cnVlXHJcblx0XHQgICAgICB9IGVsc2UgaWYgKHRleFVuaXQgPT09IDEpIHtcclxuXHRcdCAgICAgICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMSkgLy/mv4DmtLvnurnnkIbljZXlhYMxIFxyXG5cdFx0ICAgICAgICBnX3RleFVuaXQxID0gdHJ1ZVxyXG5cdFx0ICAgICAgfSBlbHNlIGlmICh0ZXhVbml0ID09PSAyKSB7XHJcblx0XHQgICAgICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTIpIC8v5r+A5rS757q555CG5Y2V5YWDMiBcclxuXHRcdCAgICAgICAgZ190ZXhVbml0MiA9IHRydWVcclxuXHRcdCAgICAgIH1cclxuXHRcdFxyXG5cdFx0ICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSkgLy/nu5HlrprnurnnkIblr7nosaFcclxuXHRcdCAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpIC8v6YWN572u57q555CG5a+56LGh5Y+C5pWwXHJcblx0XHQgICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQiwgZ2wuUkdCLCBnbC5VTlNJR05FRF9CWVRFLCBpbWFnZSkgLy/nurnnkIblm77lg4/liIbphY3nu5nnurnnkIblr7nosaFcclxuXHRcdCAgICAgIGdsLnVuaWZvcm0xaSh1X1NhbXBsZXIsIHRleFVuaXQpIC8v57q555CG5Y2V5YWD57yW5Y+35Lyg57uZ54mH5YWD552A6Imy5Zmo5LitdW5pZm9ybeWPmOmHj1xyXG5cdFx0XHJcblx0XHQgICAgICAvL+a4heepumNhbnZhc1xyXG5cdFx0ICAgICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcblx0XHRcclxuXHRcdCAgICAgIC8v57q555CG5Zu+5YOP5YWo6YOo5aSE55CG5a6M57uY5Yi25Zu+5YOPXHJcblx0XHQgICAgICBpZiAoZ190ZXhVbml0ICYmIGdfdGV4VW5pdDEgJiYgZ190ZXhVbml0Mikge1xyXG5cdFx0ICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCBuKVxyXG5cdFx0ICAgICAgICBnbC5kZWxldGVUZXh0dXJlKHRleHR1cmUpXHJcblx0XHQgICAgICB9XHJcblx0XHRcclxuXHRcdCAgICB9LFxyXG5cdFx0b25DYW52YXNSZWFkeShpZCkge1xyXG5cdFx0XHQvLyAjaWZkZWYgTVAtQUxJUEFZXHJcblxyXG5cdFx0XHQvLyDpobXpnaLliqDovb3lrozmiJBcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHR0cmFuc2x1Y2VudCA9IHRoaXMudHJhbnNsdWNlbnQgKiB0cmFuc2x1Y2VudEJhc2U7XHJcblx0XHRcdGxpcE1hcmtCZWdpbkluZGV4ID0gdGhpcy5saXBNYXJrQmVnaW5JbmRleCA9IDg0O1xyXG5cdFx0XHRsaXBTY2FsZSA9IHRoaXMubGlwU2NhbGUgPSAwLjAxO1xyXG5cdFx0XHRteS5fY3JlYXRlQ2FudmFzKHtcclxuXHRcdFx0XHRpZCxcclxuXHRcdFx0XHRzdWNjZXNzOiBjID0+IHtcclxuXHRcdFx0XHRcdHZhciBzeXN0ZW1JbmZvID0gbXkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfjgILjgILjgIJzeXN0ZW1JbmZv44CC44CCJywgSlNPTi5zdHJpbmdpZnkoc3lzdGVtSW5mbykpO1xyXG5cdFx0XHRcdFx0Yy5oZWlnaHQgPSB0aGlzLmNhbnZhc09iai5oZWlnaHQgKiBzeXN0ZW1JbmZvLnBpeGVsUmF0aW87XHJcblx0XHRcdFx0XHRjLndpZHRoID0gdGhpcy5jYW52YXNPYmoud2lkdGggKiBzeXN0ZW1JbmZvLnBpeGVsUmF0aW87XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn44CC44CC44CC44CC44CC44CC44CCbXkuY3JlYXRlQ2FudmFz44CC44CCc3VjY2Vzc+OAgicsIGMpO1xyXG5cdFx0XHRcdFx0c2VsZi5nbCA9IGMuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcclxuXHRcdFx0XHRcdGdsID0gc2VsZi5nbDtcclxuXHRcdFx0XHRcdHNlbGYuY2FudmFzID0gYztcclxuXHRcdFx0XHRcdGNhbnZhcyA9IGM7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZhaWw6ICgpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfjgILjgILjgILjgILjgILjgILjgIJteS5jcmVhdGVDYW52YXPjgILjgIJmYWls44CCJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuaW5pdFJlbmRlclBpcGVsaW5lKCk7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLmNoYW5nZUxpcFN0eWxlKHRoaXMuaW1nTGlwc3RpY2spO1xyXG5cdFx0XHR0aGlzLmZhY2VCZWF1dHlGbigpO1xyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdGluaXRSZW5kZXJQaXBlbGluZSgpIHtcclxuXHRcdFx0IHZhciB2ZXJ0Q29kZSA9IFxuXHRcdFx0XHRcdCAgYCN2ZXJzaW9uIDMwMCBlc1xuXHRcdFx0XHRcdCAgbGF5b3V0KGxvY2F0aW9uID0gMCkgaW4gdmVjMiBhX3Bvc2l0aW9uO1xuXHRcdFx0XHRcdCAgbGF5b3V0KGxvY2F0aW9uID0gMSkgaW4gdmVjMyBhX3V2O1xuXHRcdFx0XHRcdCAgb3V0IHZlYzMgdXZfb3V0O1xuXHRcdFx0XHRcdCAgdm9pZCBtYWluKCkge1xuXHRcdFx0XHRcdFx0Z2xfUG9zaXRpb24gPSB2ZWM0KGFfcG9zaXRpb24sIDEuMCwgMS4wKTtcblx0XHRcdFx0XHRcdHV2X291dCA9IGFfdXY7XG5cdFx0XHRcdFx0XHQvL3V2X291dCA9IHZlYzIoMS4wLCAwLjApO1xuXHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdCAgYDtcblxuXHRcdFx0XHRjb25zdCBmcmFnQ29kZSA9IFxuXHRcdFx0XHRcdCAgYCN2ZXJzaW9uIDMwMCBlc1xuXHRcdFx0XHRcdCAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XG5cdFx0XHRcdFx0ICBpbiB2ZWMzIHV2X291dDtcblx0XHRcdFx0XHQgIHVuaWZvcm0gc2FtcGxlcjJEIHVfdGV4dHVyZTtcblx0XHRcdFx0XHQgIHVuaWZvcm0gc2FtcGxlcjJEIHVfdGV4dHVyZTI7XG5cdFx0XHRcdFx0ICBsYXlvdXQobG9jYXRpb24gPSAwKSBvdXQgdmVjNCBvdXRDb2xvcjtcblx0XHRcdFx0XHQgIHZvaWQgbWFpbigpIHtcblxuXHRcdFx0XHRcdFx0dmVjMiB1diA9IHZlYzIodXZfb3V0LngsIDEuMCAtIHV2X291dC55KTtcblx0XHRcdFx0XHRcdHZlYzMgbGlwQ29sb3IgPSB0ZXh0dXJlKHVfdGV4dHVyZSwgdXYpLnh5ejtcblx0XHRcdFx0XHRcdHZlYzMgYyA9IGxpcENvbG9yO1xuXHRcdFx0XHRcdFx0dmVjNCBLID0gdmVjNCgwLjAsIC0xLjAgLyAzLjAsIDIuMCAvIDMuMCwgLTEuMCk7XG5cdFx0XHRcdFx0XHR2ZWM0IHAgPSBtaXgodmVjNChjLmJnLCBLLnd6KSwgdmVjNChjLmdiLCBLLnh5KSwgc3RlcChjLmIsIGMuZykpO1xuXHRcdFx0XHRcdFx0dmVjNCBxID0gbWl4KHZlYzQocC54eXcsIGMuciksIHZlYzQoYy5yLCBwLnl6eCksIHN0ZXAocC54LCBjLnIpKTtcblxuXHRcdFx0XHRcdFx0ZmxvYXQgZCA9IHEueCAtIG1pbihxLncsIHEueSk7XG5cdFx0XHRcdFx0XHRmbG9hdCBlID0gMS4wZS0xMDtcblx0XHRcdFx0XHRcdHZlYzMgaGMgPSB2ZWMzKGFicyhxLnogKyAocS53IC0gcS55KSAvICg2LjAgKiBkICsgZSkpLCBkIC8gKHEueCArIGUpLCBxLngpO1xuXG5cdFx0XHRcdFx0XHRoYy55ICo9IDEuMjtcblxuXHRcdFx0XHRcdFx0dmVjNCBMID0gdmVjNCgxLjAsIDIuMCAvIDMuMCwgMS4wIC8gMy4wLCAzLjApO1xuXHRcdFx0XHRcdFx0dmVjMyBNID0gYWJzKGZyYWN0KGhjLnh4eCArIEwueHl6KSAqIDYuMCAtIEwud3d3KTtcblx0XHRcdFx0XHRcdHZlYzMgY29sb3IgPSBoYy56ICogbWl4KEwueHh4LCBjbGFtcChNIC0gTC54eHgsIDAuMCwgMS4wKSwgaGMueSk7XG5cblx0XHRcdFx0XHRcdC8vb3V0Q29sb3IgPSB2ZWM0KGNvbG9yLCAxLjApO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdC8vdmVjNCBsaXBDb2xvciA9IHRleHR1cmUodV90ZXh0dXJlLCB1dik7XG5cdFx0XHRcdFx0XHR2ZWM0IGZyYW1lQ29sb3IgPSB0ZXh0dXJlKHVfdGV4dHVyZTIsIHV2X291dC54eSk7XG5cdFx0XHRcdFx0XHQvL3ZlYzMgZmluYWxDb2xvciA9IGxpcENvbG9yLnh5eiAqIGxpcENvbG9yLncgKyBmcmFtZUNvbG9yLnh5eiAqICgxLjAgLSBsaXBDb2xvci53KTtcblx0XHRcdFx0XHRcdGZsb2F0IGFscGhhID0gdGV4dHVyZSh1X3RleHR1cmUsIHV2KS53O1xuXHRcdFx0XHRcdFx0Ly9vdXRDb2xvciA9IHZlYzQoY29sb3IueHl6LCBhbHBoYSk7XG5cdFx0XHRcdFx0XHRvdXRDb2xvciA9IHZlYzQoY29sb3IueHl6LCBhbHBoYSAqIHV2X291dC56KTtcblx0XHRcdFx0XHQgIH1cblx0XHRcdFx0XHQgIGA7XG5cdFx0XHRcblx0XHRcdHZlcnRTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUik7XG5cdFx0XHRnbC5zaGFkZXJTb3VyY2UodmVydFNoYWRlciwgdmVydENvZGUpO1xuXHRcdFx0Z2wuY29tcGlsZVNoYWRlcih2ZXJ0U2hhZGVyKTtcblx0XHRcdGNvbnNvbGUubG9nKFwidmVydFNoYWRlciBpcyBjb21waWxlU2hhZGVyIFwiKTtcclxuXHRcdFx0XG5cdFx0XHRmcmFnU2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUik7XG5cdFx0XHRnbC5zaGFkZXJTb3VyY2UoZnJhZ1NoYWRlciwgZnJhZ0NvZGUpO1xuXHRcdFx0Z2wuY29tcGlsZVNoYWRlcihmcmFnU2hhZGVyKTtcblx0XHRcdGNvbnNvbGUubG9nKFwiZnJhZ1NoYWRlciBpcyBjb21waWxlU2hhZGVyIFwiKTtcclxuXHRcdFx0XG5cdFx0XHRzaGFkZXJQcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuXHRcdFx0Z2wuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIHZlcnRTaGFkZXIpOyBcblx0XHRcdGdsLmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCBmcmFnU2hhZGVyKTtcblx0XHRcdGdsLmxpbmtQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuXHRcdFx0Z2wudXNlUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcblx0XHRcdGNvbnNvbGUubG9nKFwic2hhZGVyUHJvZ3JhbSBcIik7XG5cblx0XHRcdGNvbnN0IEZTSVpFID0gNDtcblxuXHRcdFx0dmVydGV4YnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG5cdFx0XHRjb25zdCBhcG9zbG9jYXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAnYV9wb3NpdGlvbicpO1xuXHRcdFx0Z2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXBvc2xvY2F0aW9uKTtcblx0XHRcdGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoYXBvc2xvY2F0aW9uLCAzLCBnbC5GTE9BVCwgZmFsc2UsIEZTSVpFICogNiwgMCk7XG5cdFx0XHRjb25zb2xlLmxvZyhcImFwb3Nsb2NhdGlvbu+8miBcIixhcG9zbG9jYXRpb24pO1xuXG5cdFx0XHRjb25zdCBhdXYgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAnYV91dicpO1xuXHRcdFx0Z2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXV2KTtcblx0XHRcdGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoYXV2LCAzLCBnbC5GTE9BVCwgZmFsc2UsIEZTSVpFICogNiwgRlNJWkUgKiAzKTtcblx0XHRcdGNvbnNvbGUubG9nKFwiYXV277yaIFwiLGF1dik7XHJcblx0XHRcdFxyXG5cdFx0XHRcblx0XHRcdHZhciBxdWFkVmVydENvZGUgPSBcblx0XHRcdFx0ICBgI3ZlcnNpb24gMzAwIGVzXG5cdFx0XHRcdCAgbGF5b3V0KGxvY2F0aW9uID0gMCkgaW4gdmVjMiBhX3Bvc2l0aW9uO1xuXHRcdFx0XHQgIGxheW91dChsb2NhdGlvbiA9IDEpIGluIHZlYzIgYV91djtcblx0XHRcdFx0ICBvdXQgdmVjMiB1dl9vdXQ7XG5cdFx0XHRcdCAgdm9pZCBtYWluKCkge1xuXHRcdFx0XHRcdGdsX1Bvc2l0aW9uID0gdmVjNChhX3Bvc2l0aW9uLCAxLjAsIDEuMCk7XG5cdFx0XHRcdFx0dXZfb3V0ID0gYV91djtcblx0XHRcdFx0ICB9XG5cdFx0XHRcdCAgYDtcblxuXHRcdFx0Y29uc3QgcXVhZEZyYWdDb2RlID0gXG5cdFx0XHRcdCAgYCN2ZXJzaW9uIDMwMCBlc1xuXHRcdFx0XHQgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xuXHRcdFx0XHQgIGluIHZlYzIgdXZfb3V0O1xuXHRcdFx0XHQgIHVuaWZvcm0gc2FtcGxlcjJEIHVfdGV4dHVyZTtcblx0XHRcdFx0ICBsYXlvdXQobG9jYXRpb24gPSAwKSBvdXQgdmVjNCBvdXRDb2xvcjtcblx0XHRcdFx0ICB2b2lkIG1haW4oKSB7XG5cdFx0XHRcdFx0dmVjMiB1diA9IHZlYzIodXZfb3V0LngsIHV2X291dC55KTtcblx0XHRcdFx0XHRvdXRDb2xvciA9IHZlYzQodGV4dHVyZSh1X3RleHR1cmUsIHV2KS54eXosIDEuMCk7XG5cdFx0XHRcdCAgfVxuXHRcdFx0XHQgIGA7XG5cblx0XHRcdHF1YWRWZXJ0U2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIpO1xuXHRcdFx0Z2wuc2hhZGVyU291cmNlKHF1YWRWZXJ0U2hhZGVyLCBxdWFkVmVydENvZGUpO1xuXHRcdFx0Z2wuY29tcGlsZVNoYWRlcihxdWFkVmVydFNoYWRlcik7XG5cblx0XHRcdHF1YWRGcmFnU2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUik7XG5cdFx0XHRnbC5zaGFkZXJTb3VyY2UocXVhZEZyYWdTaGFkZXIsIHF1YWRGcmFnQ29kZSk7XG5cdFx0XHRnbC5jb21waWxlU2hhZGVyKHF1YWRGcmFnU2hhZGVyKTtcblxuXHRcdFx0cXVhZFNoYWRlclByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG5cdFx0XHRnbC5hdHRhY2hTaGFkZXIocXVhZFNoYWRlclByb2dyYW0sIHF1YWRWZXJ0U2hhZGVyKTsgXG5cdFx0XHRnbC5hdHRhY2hTaGFkZXIocXVhZFNoYWRlclByb2dyYW0sIHF1YWRGcmFnU2hhZGVyKTtcblx0XHRcdGdsLmxpbmtQcm9ncmFtKHF1YWRTaGFkZXJQcm9ncmFtKTtcblx0XHRcdGdsLnVzZVByb2dyYW0ocXVhZFNoYWRlclByb2dyYW0pO1xuXG5cblx0XHRcdHF1YWRWZXJ0ZXhidWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcblx0XHRcdGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBxdWFkVmVydGV4YnVmZmVyKTtcblx0XHRcdGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBxdWFkVmVydGV4LCBnbC5TVEFUSUNfRFJBVyk7XG5cblx0XHRcdGNvbnN0IHFwb3Nsb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHF1YWRTaGFkZXJQcm9ncmFtLCAnYV9wb3NpdGlvbicpO1xuXHRcdFx0Z2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocXBvc2xvY2F0aW9uKTtcblx0XHRcdGdsLnZlcnRleEF0dHJpYlBvaW50ZXIocXBvc2xvY2F0aW9uLCAyLCBnbC5GTE9BVCwgZmFsc2UsIEZTSVpFICogNCwgMCk7XG5cdFx0XHRjb25zb2xlLmxvZyhcInFwb3Nsb2NhdGlvbu+8miBcIixxcG9zbG9jYXRpb24pO1xuXG5cdFx0XHRjb25zdCBxdXYgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihxdWFkU2hhZGVyUHJvZ3JhbSwgJ2FfdXYnKTtcblx0XHRcdGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHF1dik7XG5cdFx0XHRnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHF1diwgMiwgZ2wuRkxPQVQsIGZhbHNlLCBGU0laRSAqIDQsIEZTSVpFICogMik7XG5cdFx0XHRjb25zb2xlLmxvZyhcInF1du+8miBcIixxdXYpO1xyXG5cdFx0XHRcblx0XHRcdGdsLnVzZVByb2dyYW0oMCk7XG5cblx0XHRcdGxpcFRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG5cdFx0XHRnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBsaXBUZXh0dXJlKTtcblx0XHRcdGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xuXHRcdFx0Z2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XG5cdFx0XHRnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XG5cdFx0XHRnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XG5cblxuXHRcdFx0Y2FtZXJhVGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcblx0XHRcdGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIGNhbWVyYVRleHR1cmUpO1xuXHRcdFx0Z2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XG5cdFx0XHRnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcblx0XHRcdGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpO1xuXHRcdFx0Z2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUik7XG5cblx0XHRcdGdsLmJpbmRUZXh0dXJlKDApO1xuXG5cdFx0XHRsaXBQb2ludHMgPSBbXTtcblx0XHRcdGxpcFBvaW50c1NjYWxlID0gW107XG5cdFx0XHRsaXBQb2ludHNVblNjYWxlID0gW107XG5cdFx0XHRjb25zdCBsaXBQb2ludENvdW50ID0gMTA2ICogMjtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGlwUG9pbnRDb3VudDsgaSsrKSB7XG5cdFx0XHQgIGxpcFBvaW50cy5wdXNoKDAuMCk7XG5cdFx0XHQgIGxpcFBvaW50cy5wdXNoKDAuMCk7XG5cdFx0XHQgIGxpcFBvaW50cy5wdXNoKDAuMCk7XG5cdFx0XHQgIGxpcFBvaW50cy5wdXNoKDAuMCk7XG5cdFx0XHQgIGxpcFBvaW50cy5wdXNoKDAuMCk7XG5cdFx0XHR9XG5cblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdHJlbGVhc2VSZW5kZXJGYWNlUG9pbnRzKCkge1xyXG5cdFx0XHRnbC5kZWxldGVTaGFkZXIodGhpcy5mYWNlUG9pbnRzLnZlcnRTaGFkZXIpO1xyXG5cdFx0XHRnbC5kZWxldGVTaGFkZXIodGhpcy5mYWNlUG9pbnRzLmZyYWdTaGFkZXIpO1xyXG5cdFx0XHRnbC5kZWxldGVQcm9ncmFtKHRoaXMuZmFjZVBvaW50cy5zaGFkZXJQcm9ncmFtKTtcclxuXHRcdH0sXHJcblx0XHRyZWxlYXNlUmVuZGVyUmVzb3VyY2UoKSB7XHJcblx0XHRcdGdsLmRlbGV0ZVNoYWRlcih2ZXJ0U2hhZGVyKTtcclxuXHRcdFx0Z2wuZGVsZXRlU2hhZGVyKGZyYWdTaGFkZXIpO1xyXG5cdFx0XHRnbC5kZWxldGVQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xyXG5cdFx0XHRnbC5kZWxldGVTaGFkZXIocXVhZFZlcnRTaGFkZXIpO1xyXG5cdFx0XHRnbC5kZWxldGVTaGFkZXIocXVhZEZyYWdTaGFkZXIpO1xyXG5cdFx0XHRnbC5kZWxldGVQcm9ncmFtKHF1YWRTaGFkZXJQcm9ncmFtKTtcclxuXHRcdFx0Z2wuZGVsZXRlQnVmZmVyKHZlcnRleGJ1ZmZlcik7XHJcblx0XHRcdGdsLmRlbGV0ZVRleHR1cmUobGlwVGV4dHVyZSk7XHJcblx0XHRcdGdsLmRlbGV0ZVRleHR1cmUoY2FtZXJhVGV4dHVyZSk7XHJcblx0XHRcdHRoaXMucmVsZWFzZVJlbmRlckZhY2VQb2ludHMoKTtcclxuXHRcdH0sXHJcblx0XHRkcmF3RmFjZUxpcChwb2ludHMpIHtcclxuXHRcdFx0Y29uc3QgbGlwUG9pbnRDb3VudCA9IGxpcEluZGV4Lmxlbmd0aDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGlwUG9pbnRDb3VudDsgaSsrKSB7XG5cdFx0XHQgIHZhciBpbmRleCA9IGxpcEluZGV4W2ldO1xyXG5cdFx0XHQgICAgICAgIGxpcFBvaW50c1tpICogNV0gPSBwb2ludHNbaW5kZXhdWzBdO1xyXG5cdFx0XHQgICAgICAgIGxpcFBvaW50c1tpICogNSArIDFdID0gcG9pbnRzW2luZGV4XVsxXTtcclxuXHRcdFx0ICAgICAgICBsaXBQb2ludHNbaSAqIDUgKyAyXSA9IGxpcFRleENvb3JkbmF0ZVsyICogKGluZGV4IC0gbGlwTWFya0JlZ2luSW5kZXgpXTtcclxuXHRcdFx0ICAgICAgICBsaXBQb2ludHNbaSAqIDUgKyAzXSA9IGxpcFRleENvb3JkbmF0ZVsyICogKGluZGV4IC0gbGlwTWFya0JlZ2luSW5kZXgpICsgMV07XHJcblx0XHRcdCAgICAgICAgbGlwUG9pbnRzW2kgKiA1ICsgNF0gPSB0cmFuc2x1Y2VudDtcblx0XHRcdH1cblxuXHRcdFx0XG5cblx0XHRcdGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB2ZXJ0ZXhidWZmZXIpO1xuXHRcdFx0Z2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkobGlwUG9pbnRzKSwgZ2wuU1RSRUFNX0RSQVcpO1xuXG5cdFx0XHRnbC5jbGVhckNvbG9yKDAuMCwwLjAsMC4wLDAuMCk7XHJcblx0XHRcdC8vIGdsLmNsZWFyRGVwdGgoMS4wKTtcclxuXHRcdFx0Z2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcblx0XHRcdGdsLmRpc2FibGUoZ2wuREVQVEhfVEVTVCk7XG5cdFx0XHRcblxuXG5cdFx0XHRjb25zdCBGU0laRSA9IDQ7XG5cblx0XHRcdC8vUGFzcyBvbmVcblx0XHRcdGdsLmRpc2FibGUoZ2wuQkxFTkQpO1xuXHRcdFx0Z2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHF1YWRWZXJ0ZXhidWZmZXIpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZHJhdyBxdWFkVmVydGV4YnVmZmVyOicscXVhZFZlcnRleGJ1ZmZlcilcblxuXHRcdFx0Y29uc3QgcXBvc2xvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocXVhZFNoYWRlclByb2dyYW0sICdhX3Bvc2l0aW9uJyk7XG5cdFx0XHRnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHFwb3Nsb2NhdGlvbiwgMiwgZ2wuRkxPQVQsIGZhbHNlLCBGU0laRSAqIDQsIDApO1xuXHRcdFx0Z2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocXBvc2xvY2F0aW9uKTtcblx0XHRcdGNvbnNvbGUubG9nKCdkcmF3IHFwb3Nsb2NhdGlvbjonLHFwb3Nsb2NhdGlvbilcblx0XHRcdFxuXG5cdFx0XHRjb25zdCBxdXYgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihxdWFkU2hhZGVyUHJvZ3JhbSwgJ2FfdXYnKTtcblx0XHRcdGdsLnZlcnRleEF0dHJpYlBvaW50ZXIocXV2LCAyLCBnbC5GTE9BVCwgZmFsc2UsIEZTSVpFICogNCwgRlNJWkUgKiAyKTtcblx0XHRcdGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHF1dik7XG5cdFx0XHRjb25zb2xlLmxvZygnZHJhdyBxdXY6JyxxdXYpXHJcblx0XHRcdFxyXG5cdFx0XHRcblx0XHRcdGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTApO1xuXHRcdFx0Z2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgY2FtZXJhVGV4dHVyZSk7XG5cdFx0XHRnbC51c2VQcm9ncmFtKHF1YWRTaGFkZXJQcm9ncmFtKTtcblx0XHRcdC8vZ2wucG9seWdvbk1vZGUoZ2wuRlJPTlRfQU5EX0JBQ0ssIGdsLkZJTEwpO1xuXHRcdFx0Z2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRVMsIDAsIDYpO1xuXHRcdFx0Y29uc29sZS5sb2coJ2RyYXcgZHJhd0FycmF5cyB6aGVuZ2dlIDonKVxyXG5cdFx0XHRcclxuXHRcdFx0XG5cdFx0XHQvL1Bhc3MgdHdvXG5cdFx0XHRnbC5lbmFibGUoZ2wuQkxFTkQpO1xuXHRcdFx0Ly8gZ2wuZW5hYmxlKGdsLkRFUFRIX1RFU1QpO1xuXHRcdFx0Ly8gZ2wuZGVwdGhGdW5jKGdsLkxFU1MpO1xuXHRcdFx0Z2wuYmxlbmRGdW5jU2VwYXJhdGUoZ2wuU1JDX0FMUEhBLCBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBLCBnbC5TUkNfQUxQSEEsIGdsLk9ORV9NSU5VU19TUkNfQUxQSEEpO1xuXHRcdFx0Z2wuYmxlbmRFcXVhdGlvblNlcGFyYXRlKGdsLkZVTkNfQURELCBnbC5GVU5DX0FERCk7XG5cdFx0XHRnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdmVydGV4YnVmZmVyKTtcblx0XHRcdGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KGxpcFBvaW50cyksIGdsLlNUUkVBTV9EUkFXKTtcblxuXHRcdFx0Y29uc3QgYXBvc2xvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ2FfcG9zaXRpb24nKTtcblx0XHRcdGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoYXBvc2xvY2F0aW9uLCAyLCBnbC5GTE9BVCwgZmFsc2UsIEZTSVpFICogNSwgMCk7XG5cdFx0XHRnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhcG9zbG9jYXRpb24pO1xuXHRcdFx0Y29uc29sZS5sb2coJ2RyYXcgYXBvc2xvY2F0aW9uIDonLGFwb3Nsb2NhdGlvbilcblxuXHRcdFx0Y29uc3QgYXV2ID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ2FfdXYnKTtcblx0XHRcdGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoYXV2LCAzLCBnbC5GTE9BVCwgZmFsc2UsIEZTSVpFICogNSwgRlNJWkUgKiAyKTtcclxuXHRcdFx0Z2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXV2KTtcblx0XHRcdGNvbnNvbGUubG9nKCdkcmF3IGF1diA6JyxhdXYpXHJcblx0XHRcdFxuXHRcdFx0Z2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCk7XG5cdFx0XHRnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBsaXBUZXh0dXJlKTtcblx0XHRcdGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTEpO1xuXHRcdFx0Z2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgY2FtZXJhVGV4dHVyZSk7XG5cdFx0XHRnbC51c2VQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuXHRcdFx0Ly9nbC5wb2x5Z29uTW9kZShnbC5GUk9OVF9BTkRfQkFDSywgZ2wuTElORSk7XG5cdFx0XHRcblx0XHRcdGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVTLCAwLCA2MCk7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRjaGFuZ2VMaXBTdHlsZShsaXBUZXh0dXJlUGF0aCkge1xyXG5cdFx0XHQvL2xldCBpbWdQYXRoID0gJy9zdGF0aWMvaW1hZ2VzL2xpcENvbG9yLnBuZyc7XHJcblx0XHRcdC8vIC8v5ZSH5b2p5Zu+54mHXHJcblx0XHRcdC8vIHZhciBpbWc7XHJcblx0XHRcdC8vIC8v5ZSH5b2p5Zu+54mH6Lev5b6EXHJcblx0XHRcdC8vIHZhciBpbWdQYXRoO1xyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLmNhbnZhcywgJy4uLi4uLuWbvueJhy50aGlzLmNhbnZhcy4nLCBsaXBUZXh0dXJlUGF0aCk7XHJcblx0XHRcdFx0bGV0IGltZ1BhdGggPSBsaXBUZXh0dXJlUGF0aDtcclxuXHRcdFx0XHRsZXQgaW1nMTtcclxuXHRcdFx0XHQvLyAjaWZkZWYgTVBcclxuXHRcdFx0XHRpbWcxID0gY2FudmFzLmNyZWF0ZUltYWdlKCk7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0Ly8gI2lmZGVmIEg1XHJcblx0XHRcdFx0aW1nMSA9IG5ldyBJbWFnZSgpXHJcblx0XHRcdFx0aW1nMS5jcm9zc09yaWdpbiA9IFwiYW5vbnltb3VzXCI7IC8vIOa3u+WKoOi/meihjOS7o+eggVxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdGltZzEub25sb2FkID0gIChyZXMpID0+IHtcclxuXHRcdFx0XHRcdHJlc29sdmUoaW1nMSlcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGxpcFRleHR1cmUsJy4uLi4uLuWbvueJhy4uJywgcmVzLCBpbWcpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRpbWcxLm9uZXJyb3IgPSByZXMgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJy4uLi4uLuWbvueJh+mUmeivry4uJywgcmVzLCBpbWcpO1xyXG5cdFx0XHRcdFx0cmVqZWN0KClcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGltZzEuc3JjID0gaW1nUGF0aDtcclxuXHRcdFx0XHRcclxuXHRcdFx0fSlcclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cclxuXHRcdHVwZGF0ZUZhY2VEYXRhKGRhdGEsIHdpZHRoLCBoZWlnaHQpIHtcclxuXHRcdFx0dmFyIGRhdGFGcmFtZSA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xyXG5cdFx0XHRnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBjYW1lcmFUZXh0dXJlKTtcclxuXHRcdFx0Z2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCB3aWR0aCwgaGVpZ2h0LCAwLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBkYXRhRnJhbWUpO1xyXG5cdFx0fSxcclxuXHRcdGRyYXdGYWNlUG9pbnRzKHBvaW50cykge1xyXG5cdFx0XHR2YXIgcG9pbnRDb3VudCA9IHBvaW50cy5sZW5ndGg7XHJcblx0XHRcdGlmIChwb2ludENvdW50ID09IDApIHJldHVybjtcclxuXHRcdFx0dmFyIHZlcnRpY2VzID0gW107XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRDb3VudDsgaSsrKSB7XHJcblx0XHRcdFx0dmVydGljZXMucHVzaChwb2ludHNbaV1bMF0pO1xyXG5cdFx0XHRcdHZlcnRpY2VzLnB1c2gocG9pbnRzW2ldWzFdKTtcclxuXHRcdFx0XHR2ZXJ0aWNlcy5wdXNoKDAuMCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIENyZWF0ZSBhbiBlbXB0eSBidWZmZXIgb2JqZWN0IHRvIHN0b3JlIHRoZSB2ZXJ0ZXggYnVmZmVyXHJcblx0XHRcdHZhciB2ZXJ0ZXhfYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XHJcblxyXG5cdFx0XHQvL0JpbmQgYXBwcm9wcmlhdGUgYXJyYXkgYnVmZmVyIHRvIGl0XHJcblx0XHRcdGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB2ZXJ0ZXhfYnVmZmVyKTtcclxuXHJcblx0XHRcdC8vIFBhc3MgdGhlIHZlcnRleCBkYXRhIHRvIHRoZSBidWZmZXJcclxuXHRcdFx0Z2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkodmVydGljZXMpLCBnbC5TVEFUSUNfRFJBVyk7XHJcblx0XHRcdC8vIFVuYmluZCB0aGUgYnVmZmVyXHJcblx0XHRcdGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBudWxsKTtcclxuXHJcblx0XHRcdC8qPT09PT09PT09PT09PT09PT09PT09PT09PVNoYWRlcnM9PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHRcdFx0Ly8gdmVydGV4IHNoYWRlciBzb3VyY2UgY29kZVxyXG5cdFx0XHR2YXIgdmVydENvZGUgPSBgYXR0cmlidXRlIHZlYzMgY29vcmRpbmF0ZXM7XHJcblx0XHQgICAgdm9pZCBtYWluKHZvaWQpIHtcclxuXHRcdFx0XHRnbF9Qb3NpdGlvbiA9IHZlYzQoY29vcmRpbmF0ZXMsIDEuMCk7XHJcblx0XHRcdFx0Z2xfUG9pbnRTaXplID0gNS4wO1xyXG5cdFx0ICAgIH1gO1xyXG5cclxuXHRcdFx0Ly8gQ3JlYXRlIGEgdmVydGV4IHNoYWRlciBvYmplY3RcclxuXHRcdFx0dGhpcy5mYWNlUG9pbnRzLnZlcnRTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUik7XHJcblx0XHRcdC8vIEF0dGFjaCB2ZXJ0ZXggc2hhZGVyIHNvdXJjZSBjb2RlXHJcblx0XHRcdGdsLnNoYWRlclNvdXJjZSh0aGlzLmZhY2VQb2ludHMudmVydFNoYWRlciwgdmVydENvZGUpO1xyXG5cclxuXHRcdFx0Ly8gQ29tcGlsZSB0aGUgdmVydGV4IHNoYWRlclxyXG5cdFx0XHRnbC5jb21waWxlU2hhZGVyKHRoaXMuZmFjZVBvaW50cy52ZXJ0U2hhZGVyKTtcclxuXHJcblx0XHRcdC8vIGZyYWdtZW50IHNoYWRlciBzb3VyY2UgY29kZVxyXG5cdFx0XHR2YXIgZnJhZ0NvZGUgPSBgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcblx0XHRcdHVuaWZvcm0gdmVjNCB1X0ZyYWdDb2xvcjtcclxuXHRcdFx0dm9pZCBtYWluKCl7XHJcblx0XHRcdCAgICBnbF9GcmFnQ29sb3I9dV9GcmFnQ29sb3I7XHJcblx0XHRcdH1gO1xyXG5cclxuXHRcdFx0Ly8gQ3JlYXRlIGZyYWdtZW50IHNoYWRlciBvYmplY3RcclxuXHRcdFx0dGhpcy5mYWNlUG9pbnRzLmZyYWdTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuRlJBR01FTlRfU0hBREVSKTtcclxuXHJcblx0XHRcdC8vIEF0dGFjaCBmcmFnbWVudCBzaGFkZXIgc291cmNlIGNvZGVcclxuXHRcdFx0Z2wuc2hhZGVyU291cmNlKHRoaXMuZmFjZVBvaW50cy5mcmFnU2hhZGVyLCBmcmFnQ29kZSk7XHJcblxyXG5cdFx0XHQvLyBDb21waWxlIHRoZSBmcmFnbWVudHQgc2hhZGVyXHJcblx0XHRcdGdsLmNvbXBpbGVTaGFkZXIodGhpcy5mYWNlUG9pbnRzLmZyYWdTaGFkZXIpO1xyXG5cclxuXHRcdFx0Ly8gQ3JlYXRlIGEgc2hhZGVyIHByb2dyYW0gb2JqZWN0IHRvIHN0b3JlXHJcblx0XHRcdC8vIHRoZSBjb21iaW5lZCBzaGFkZXIgcHJvZ3JhbVxyXG5cdFx0XHR0aGlzLmZhY2VQb2ludHMuc2hhZGVyUHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcclxuXHJcblx0XHRcdC8vIEF0dGFjaCBhIHZlcnRleCBzaGFkZXJcclxuXHRcdFx0Z2wuYXR0YWNoU2hhZGVyKHRoaXMuZmFjZVBvaW50cy5zaGFkZXJQcm9ncmFtLCB0aGlzLmZhY2VQb2ludHMudmVydFNoYWRlcik7XHJcblxyXG5cdFx0XHQvLyBBdHRhY2ggYSBmcmFnbWVudCBzaGFkZXJcclxuXHRcdFx0Z2wuYXR0YWNoU2hhZGVyKHRoaXMuZmFjZVBvaW50cy5zaGFkZXJQcm9ncmFtLCB0aGlzLmZhY2VQb2ludHMuZnJhZ1NoYWRlcik7XHJcblxyXG5cdFx0XHQvLyBMaW5rIGJvdGggcHJvZ3JhbXNcclxuXHRcdFx0Z2wubGlua1Byb2dyYW0odGhpcy5mYWNlUG9pbnRzLnNoYWRlclByb2dyYW0pO1xyXG5cclxuXHRcdFx0Ly8gVXNlIHRoZSBjb21iaW5lZCBzaGFkZXIgcHJvZ3JhbSBvYmplY3RcclxuXHRcdFx0Z2wudXNlUHJvZ3JhbSh0aGlzLmZhY2VQb2ludHMuc2hhZGVyUHJvZ3JhbSk7XHJcblxyXG5cdFx0XHQvKj09PT09PT09IEFzc29jaWF0aW5nIHNoYWRlcnMgdG8gYnVmZmVyIG9iamVjdHMgPT09PT09PT0qL1xyXG5cclxuXHRcdFx0Ly8gQmluZCB2ZXJ0ZXggYnVmZmVyIG9iamVjdFxyXG5cdFx0XHRnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdmVydGV4X2J1ZmZlcik7XHJcblxyXG5cdFx0XHQvLyBHZXQgdGhlIGF0dHJpYnV0ZSBsb2NhdGlvblxyXG5cdFx0XHR2YXIgY29vcmQgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLmZhY2VQb2ludHMuc2hhZGVyUHJvZ3JhbSwgJ2Nvb3JkaW5hdGVzJyk7XHJcblxyXG5cdFx0XHQvLyBQb2ludCBhbiBhdHRyaWJ1dGUgdG8gdGhlIGN1cnJlbnRseSBib3VuZCBWQk9cclxuXHRcdFx0Z2wudmVydGV4QXR0cmliUG9pbnRlcihjb29yZCwgMywgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcclxuXHJcblx0XHRcdC8v6I635Y+WdW5pZm9ybSDlj5jph49cclxuXHRcdFx0Y29uc3QgdV9GcmFnQ29sb3IgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5mYWNlUG9pbnRzLnNoYWRlclByb2dyYW0sICd1X0ZyYWdDb2xvcicpO1xyXG5cdFx0XHRsZXQgcmdiYSA9IHRoaXMuaXNTaG93RmFjZVBvaW50cyA/IDEuMCA6IDAuMDtcclxuXHRcdFx0Ly/kv67mlLl1bmlmb3JtIOWPmOmHj1xyXG5cdFx0XHRnbC51bmlmb3JtNGYodV9GcmFnQ29sb3IsIDEuMCwgMC4wLCAwLjAsIDEuMCk7XHJcblxyXG5cdFx0XHQvLyBnbC5jbGVhckNvbG9yKDAuMCwwLjAsMC4wLDAuMCk7XHJcblx0XHRcdC8vIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xyXG5cdFx0XHQvLyBEcmF3IHRoZSB0cmlhbmdsZVxyXG5cdFx0XHRnbC5kcmF3QXJyYXlzKGdsLlBPSU5UUywgMCwgcG9pbnRDb3VudCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRtb3VudGVkKCkge30sXHJcblx0b25TaG93KCkge1xyXG5cdFx0Ly8gdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0Ly8gXHR0aGlzLiRyZWZzLmJyaWdodG5lc3MuZ2V0U2NyZWVuQnJpZ2h0bmVzcygpXHJcblx0XHQvLyB9KVxyXG5cdH0sXHJcblx0YXN5bmMgb25Mb2FkKCkge30sXHJcblx0YmVmb3JlRGVzdHJveSgpIHtcclxuXHRcdC8vIOmAgOWHuumHiuaUvui1hOa6kFxyXG5cdFx0dGhpcy5yZWxlYXNlUmVuZGVyUmVzb3VyY2UoKTtcclxuXHR9LFxyXG5cdG9uVW5sb2FkKCkge30sXHJcblx0b25IaWRlKCkge31cclxufTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuLmNvbnRhaW5lciB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHdpZHRoOiAxMDB2dztcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5tb2RlLWltZyB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG4jYXJjYW52YXMge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0ei1pbmRleDogMTE7XHJcbn1cclxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjY3NTU4Mjk2Mjk4XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkU6L+i9r+S7ti9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==