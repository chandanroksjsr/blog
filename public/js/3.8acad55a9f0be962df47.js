webpackJsonp([3],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/dashboard/Main.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vuex = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

var _Sidebar = __webpack_require__("./resources/assets/js/dashboard/components/particals/Sidebar.vue");

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Navbar = __webpack_require__("./resources/assets/js/dashboard/components/particals/Navbar.vue");

var _Navbar2 = _interopRequireDefault(_Navbar);

var _FooterBar = __webpack_require__("./resources/assets/js/dashboard/components/particals/FooterBar.vue");

var _FooterBar2 = _interopRequireDefault(_FooterBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
  components: {
    Sidebar: _Sidebar2.default,
    Navbar: _Navbar2.default,
    FooterBar: _FooterBar2.default
  },
  computed: {
    isToggle: function isToggle() {
      return this.$store.state.sidebar.opened;
    }
  }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/dashboard/components/particals/Navbar.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vuex = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

exports.default = {
    methods: (0, _vuex.mapActions)(['toggle'])
}; //
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/dashboard/components/particals/Sidebar.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = __webpack_require__("./resources/assets/js/dashboard/config/menu.js");

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      menus: _menu2.default,
      user: {}
    };
  },
  mounted: function mounted() {
    this.user = window.User;
  },

  computed: {
    userInfo: function userInfo() {
      return '/user/' + this.user.name;
    }
  }
}; //
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
//

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-59bfcb48\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/dashboard/components/particals/Sidebar.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.sidebar-nav[data-v-59bfcb48] {\n  position: absolute;\n  top: 0;\n  width: 250px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.sidebar-nav i[data-v-59bfcb48] {\n    font-size: .9rem;\n}\n.sidebar-nav li[data-v-59bfcb48] {\n  text-indent: 20px;\n  line-height: 40px;\n}\n.sidebar-nav li i[data-v-59bfcb48] {\n    font-size: .6rem;\n}\n.navbar[data-v-59bfcb48] {\n  margin-bottom: 0;\n}\n.sidebar-nav li .user[data-v-59bfcb48] {\n  display: block;\n  text-align: center;\n  width: 100%;\n  background-color: #3d4e60;\n  padding-top: 20px;\n  padding-bottom: 10px;\n  color: #fff;\n}\n.user[data-v-59bfcb48] {\n  text-align: center;\n  padding-top: 15px;\n  background-color: #52697f;\n}\n.user .avatar[data-v-59bfcb48] {\n  width: 80px;\n  margin: 10px auto;\n}\n.nickname[data-v-59bfcb48] {\n  color: #fff;\n}\n.buttons[data-v-59bfcb48] {\n  height: 50px;\n}\n.buttons a[data-v-59bfcb48] {\n  display: inline-block;\n  font-size: 20px;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  margin-right: 5px;\n  color: #828a9a;\n}\n.buttons a[data-v-59bfcb48]:hover {\n  color: #fff;\n}\n.sidebar-nav li a[data-v-59bfcb48] {\n  display: block;\n  text-decoration: none;\n  color: #999999;\n}\n.sidebar-nav li a[data-v-59bfcb48]:hover {\n  text-decoration: none;\n  color: #fff;\n  background: rgba(255, 255, 255, 0.2);\n}\n.sidebar-nav li .active[data-v-59bfcb48] {\n  color: #fff !important;\n}\n.sidebar-nav li a i[data-v-59bfcb48] {\n  padding-right: 10px;\n}\n.sidebar-nav li a[data-v-59bfcb48]:active,\n.sidebar-nav li a[data-v-59bfcb48]:focus {\n  text-decoration: none;\n}\n.active[data-v-59bfcb48] {\n  background-color: #3d4e60;\n  border-right: 4px solid #647f9d;\n}\n.active a[data-v-59bfcb48] {\n  color: #fff !important;\n}\n.sidebar-nav > .sidebar-brand[data-v-59bfcb48] {\n  height: 65px;\n  font-size: 18px;\n  line-height: 60px;\n}\n.sidebar-nav > .sidebar-brand a[data-v-59bfcb48] {\n  color: #999999;\n}\n.sidebar-nav > .sidebar-brand a[data-v-59bfcb48]:hover {\n  color: #fff;\n  background: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7621cfe0\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/dashboard/Main.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* divider */\nbody {\n  overflow-x: hidden;\n}\n\n/* Toggle Styles */\n#wrapper {\n  padding-left: 0;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n#wrapper #wrapper.toggled {\n    padding-left: 250px;\n}\n#sidebar-wrapper {\n  z-index: 1000;\n  position: fixed;\n  left: 250px;\n  width: 0;\n  height: 100%;\n  margin-left: -250px;\n  overflow-y: auto;\n  background: #4d5e70;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n#wrapper.toggled #sidebar-wrapper {\n  width: 250px;\n}\n#page-content-wrapper {\n  width: 100%;\n  position: absolute;\n}\n#page-content-wrapper .container-fluid .row {\n    margin: 15px;\n}\n#wrapper.toggled #page-content-wrapper {\n  position: absolute;\n  margin-right: -250px;\n}\n@media (max-width: 768px) {\n#page-content-wrapper {\n    padding-left: 0;\n    -webkit-transition: all 0.5s ease;\n    transition: all 0.5s ease;\n}\n#wrapper.toggled #page-content-wrapper {\n    -webkit-transition: all 0.5s ease;\n    transition: all 0.5s ease;\n    padding-left: 250px;\n    margin-right: -250px;\n}\n}\n@media (min-width: 768px) {\n#wrapper {\n    padding-left: 250px;\n}\n#wrapper.toggled {\n    padding-left: 0;\n}\n#sidebar-wrapper {\n    width: 250px;\n}\n#wrapper.toggled #sidebar-wrapper {\n    width: 0;\n}\n#page-content-wrapper {\n    position: relative;\n}\n#wrapper.toggled #page-content-wrapper {\n    position: relative;\n    margin-right: 0;\n}\n}\n.hr {\n  margin-left: 1px;\n  margin-right: 1px;\n  border: 1px solid #7a8693;\n}\n.profile {\n  margin: 15px auto;\n  text-align: center;\n}\n.profile img {\n    height: 125px;\n    border: 3px solid lightgrey;\n    border-radius: 200px;\n}\n.profile h1 {\n    margin-top: 10px;\n    color: white;\n    font-size: 1.3em;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-34b5ef40\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/dashboard/components/particals/Navbar.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "navbar navbar bg-white" }, [
    _c("div", { staticClass: "navbar-brand" }, [
      _c(
        "a",
        { staticClass: "navbar-toggler text-left", on: { click: _vm.toggle } },
        [_c("i", { staticClass: "fas fa-bars text-secondary" })]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-34b5ef40", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-59bfcb48\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/dashboard/components/particals/Sidebar.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "sidebar-wrapper" } }, [
    _c(
      "ul",
      { staticClass: "sidebar-nav" },
      [
        _c("div", { staticClass: "user" }, [
          _c("div", { staticClass: "avatar" }, [
            _c("img", {
              staticClass: "img-fluid rounded-circle",
              attrs: { src: _vm.user.avatar }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "nickname" }, [
            _c("p", [_vm._v(_vm._s(_vm.user.name))]),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(_vm.user.email))])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "buttons" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("a", { attrs: { href: _vm.userInfo } }, [
              _c("i", { staticClass: "fas fa-user" })
            ]),
            _vm._v(" "),
            _vm._m(1)
          ])
        ]),
        _vm._v(" "),
        _vm._l(_vm.menus, function(menu) {
          return _c(
            "li",
            [
              _c("router-link", { attrs: { to: menu.uri } }, [
                _c("i", { class: menu.icon }),
                _vm._v(" " + _vm._s(_vm.$t(menu.label)) + "\n      ")
              ])
            ],
            1
          )
        })
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "/" } }, [
      _c("i", { staticClass: "fas fa-home" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "/setting" } }, [
      _c("i", { staticClass: "fas fa-cog" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-59bfcb48", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-616bcb78\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/dashboard/components/particals/FooterBar.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", [
      _c("div", { staticClass: "copy-right text-center" }, [
        _c("span", [_vm._v("© Pig Jian 2016. All rights reserved. ")]),
        _c(
          "a",
          {
            staticClass: "item",
            attrs: { href: "http://www.miitbeian.gov.cn/" }
          },
          [_vm._v("粤ICP备16020344号-1")]
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-616bcb78", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7621cfe0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/dashboard/Main.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: { toggled: _vm.isToggle }, attrs: { id: "wrapper" } },
    [
      _c("sidebar"),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "page-content-wrapper" } },
        [
          _c("navbar"),
          _vm._v(" "),
          _c("div", { staticClass: "container-fluid" }, [_c("router-view")], 1)
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7621cfe0", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-59bfcb48\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/dashboard/components/particals/Sidebar.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-59bfcb48\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/dashboard/components/particals/Sidebar.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("06266d06", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-59bfcb48\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sidebar.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-59bfcb48\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sidebar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7621cfe0\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/dashboard/Main.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7621cfe0\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/dashboard/Main.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("322e836a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7621cfe0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Main.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7621cfe0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Main.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/dashboard/Main.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7621cfe0\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/dashboard/Main.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/dashboard/Main.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7621cfe0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/dashboard/Main.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\dashboard\\Main.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7621cfe0", Component.options)
  } else {
    hotAPI.reload("data-v-7621cfe0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/dashboard/components/particals/FooterBar.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-616bcb78\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/dashboard/components/particals/FooterBar.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\dashboard\\components\\particals\\FooterBar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-616bcb78", Component.options)
  } else {
    hotAPI.reload("data-v-616bcb78", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/dashboard/components/particals/Navbar.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/dashboard/components/particals/Navbar.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-34b5ef40\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/dashboard/components/particals/Navbar.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\dashboard\\components\\particals\\Navbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-34b5ef40", Component.options)
  } else {
    hotAPI.reload("data-v-34b5ef40", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/dashboard/components/particals/Sidebar.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-59bfcb48\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/dashboard/components/particals/Sidebar.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/dashboard/components/particals/Sidebar.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-59bfcb48\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/dashboard/components/particals/Sidebar.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-59bfcb48"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\dashboard\\components\\particals\\Sidebar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59bfcb48", Component.options)
  } else {
    hotAPI.reload("data-v-59bfcb48", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/dashboard/config/menu.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  label: 'sidebar.dashboard',
  icon: 'fas fa-tachometer-alt',
  uri: { name: 'dashboard.home' }
}, {
  label: 'sidebar.user',
  icon: 'fas fa-users',
  uri: { name: 'dashboard.user' }
}, {
  label: 'sidebar.article',
  icon: 'fas fa-book',
  uri: { name: 'dashboard.article' }
}, {
  label: 'sidebar.discussion',
  icon: 'fas fa-question-circle',
  uri: { name: 'dashboard.discussion' }
}, {
  label: 'sidebar.comment',
  icon: 'fas fa-comments',
  uri: { name: 'dashboard.comment' }
}, {
  label: 'sidebar.file',
  icon: 'fas fa-folder',
  uri: { name: 'dashboard.file' }
}, {
  label: 'sidebar.tag',
  icon: 'fas fa-tags',
  uri: { name: 'dashboard.tag' }
}, {
  label: 'sidebar.category',
  icon: 'fas fa-list-alt',
  uri: { name: 'dashboard.category' }
}, {
  label: 'sidebar.link',
  icon: 'fas fa-globe',
  uri: { name: 'dashboard.link' }
}, {
  label: 'sidebar.visitor',
  icon: 'fas fa-eye',
  uri: { name: 'dashboard.visitor' }
}, {
  label: 'sidebar.system',
  icon: 'fas fa-cogs',
  uri: { name: 'dashboard.system' }
}];

/***/ })

});