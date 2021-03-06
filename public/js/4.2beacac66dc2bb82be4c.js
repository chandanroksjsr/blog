webpackJsonp([4],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/dashboard/modules/link/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Form = __webpack_require__("./resources/assets/js/dashboard/modules/link/Form.vue");

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { LinkForm: _Form2.default },
  data: function data() {
    return {
      link: undefined
    };
  },
  created: function created() {
    this.loadLink();
  },

  methods: {
    loadLink: function loadLink() {
      var _this = this;

      this.$http.get('link/' + this.$route.params.id + '/edit').then(function (response) {
        _this.link = response.data.data;
      });
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

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/dashboard/modules/link/Form.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helper = __webpack_require__("./resources/assets/js/config/helper.js");

exports.default = {
  props: {
    link: {
      type: Object,
      default: function _default() {
        return {
          image: ''
        };
      }
    }
  },
  watch: {
    link: function link() {
      return this.link;
    }
  },
  computed: {
    mode: function mode() {
      return this.link.id ? 'update' : 'create';
    }
  },
  methods: {
    change: function change(event) {
      var _this = this;

      var image = event.target.files[0];
      var formData = new FormData();
      formData.append('image', image);
      formData.append('strategy', 'links');

      if (!/\/(?:jpeg|jpg|png)/i.test(image.type)) {
        toastr.error('Uploaded Failed! Image only supported jpeg, jpg and png.');
        return;
      }

      this.$http.post('file/upload', formData).then(function (response) {
        _this.link.image = response.data.url;
      });
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      if (!this.link.image) {
        toastr.error('The image is required!');
        return;
      }

      var url = 'link' + (this.link.id ? '/' + this.link.id : '');
      var method = this.link.id ? 'patch' : 'post';

      this.$http[method](url, this.link).then(function (response) {
        toastr.success('You ' + _this2.mode + 'd the link information success!');

        _this2.$router.push({ name: 'dashboard.link' });
      }).catch(function (_ref) {
        var response = _ref.response;

        (0, _helper.stack_error)(response);
      });
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-07e177fa\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/dashboard/modules/link/Form.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.upload-box[data-v-07e177fa] {\n  position: relative;\n  width: 100px;\n  height: 100px;\n}\n.link-image[data-v-07e177fa] {\n  display: block;\n  width: 100px;\n  height: 100px;\n  text-align: center;\n  font-size: 30px;\n  line-height: 100px;\n  border: 2px dashed #e7eaec;\n  border-radius: 5px;\n  color: #e7eaec;\n}\n.image[data-v-07e177fa] {\n  border-radius: 5px;\n}\ninput#image[data-v-07e177fa] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100px;\n  height: 100px;\n  border-radius: 5px;\n  cursor: pointer;\n  opacity: 0;\n  z-index: 10;\n}\n.mask[data-v-07e177fa] {\n  display: none;\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  background-color: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n  border-radius: 5px;\n  z-index: 5;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  line-height: 100px;\n  font-size: 20px;\n}\n.upload-box:hover .mask[data-v-07e177fa] {\n  display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-07e177fa\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/dashboard/modules/link/Form.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "form",
      {
        staticClass: "col-sm-4 offset-sm-4",
        attrs: { role: "form", enctype: "multipart/form-data" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.onSubmit($event)
          }
        }
      },
      [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "name" } }, [
            _vm._v(_vm._s(_vm.$t("form.link_name")))
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.link.name,
                expression: "link.name"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              id: "name",
              name: "name",
              placeholder: _vm.$t("form.link_name")
            },
            domProps: { value: _vm.link.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.link, "name", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "link" } }, [
            _vm._v(_vm._s(_vm.$t("form.link")))
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.link.link,
                expression: "link.link"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "link",
              id: "link",
              name: "link",
              placeholder: _vm.$t("form.link")
            },
            domProps: { value: _vm.link.link },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.link, "link", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "image" } }, [
            _vm._v(_vm._s(_vm.$t("form.image")))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "upload-box" }, [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "file", id: "image", name: "image" },
              on: { change: _vm.change }
            }),
            _vm._v(" "),
            _vm.link.image
              ? _c("img", {
                  staticClass: "img-circle image",
                  attrs: {
                    src: _vm.link.image,
                    alt: _vm.link.name,
                    width: "100",
                    height: "100"
                  }
                })
              : _c("i", { staticClass: "fas fa-image link-image" }),
            _vm._v(" "),
            _vm.link.image
              ? _c("div", { staticClass: "mask" }, [
                  _c("i", { staticClass: "fas fa-cloud-upload-alt" })
                ])
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v(_vm._s(_vm.$t("form.is_enable")))]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "togglebutton",
              staticStyle: { "margin-top": "6px" }
            },
            [
              _c("label", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.link.status,
                      expression: "link.status"
                    }
                  ],
                  attrs: { type: "checkbox", name: "status" },
                  domProps: {
                    checked: Array.isArray(_vm.link.status)
                      ? _vm._i(_vm.link.status, null) > -1
                      : _vm.link.status
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.link.status,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            _vm.$set(_vm.link, "status", $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              _vm.link,
                              "status",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            )
                        }
                      } else {
                        _vm.$set(_vm.link, "status", $$c)
                      }
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "toggle" })
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c(
            "button",
            { staticClass: "btn btn-info", attrs: { type: "submit" } },
            [
              _vm._v(
                _vm._s(
                  _vm.link.id ? _vm.$t("form.edit") : _vm.$t("form.create")
                )
              )
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-07e177fa", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4b22c640\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/dashboard/modules/link/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vue-form",
    { attrs: { title: _vm.$t("form.edit_link") } },
    [
      _c(
        "template",
        { slot: "buttons" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-sm btn-secondary",
              attrs: { to: { name: "dashboard.link" }, exact: "" }
            },
            [_vm._v(_vm._s(_vm.$t("form.back")))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "template",
        { slot: "content" },
        [_c("link-form", { attrs: { link: _vm.link } })],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4b22c640", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-07e177fa\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/dashboard/modules/link/Form.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-07e177fa\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/dashboard/modules/link/Form.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("6ba92c96", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-07e177fa\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Form.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-07e177fa\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Form.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/dashboard/modules/link/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/dashboard/modules/link/Edit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4b22c640\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/dashboard/modules/link/Edit.vue")
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
Component.options.__file = "resources\\assets\\js\\dashboard\\modules\\link\\Edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b22c640", Component.options)
  } else {
    hotAPI.reload("data-v-4b22c640", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/dashboard/modules/link/Form.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-07e177fa\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/dashboard/modules/link/Form.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/dashboard/modules/link/Form.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-07e177fa\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/dashboard/modules/link/Form.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-07e177fa"
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
Component.options.__file = "resources\\assets\\js\\dashboard\\modules\\link\\Form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07e177fa", Component.options)
  } else {
    hotAPI.reload("data-v-07e177fa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});