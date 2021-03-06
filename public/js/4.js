webpackJsonp([4],{

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(79),
  /* template */
  __webpack_require__(86),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\OSPanel\\domains\\new.test\\resources\\assets\\js\\components\\Pages\\Company.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Company.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3db3db64", Component.options)
  } else {
    hotAPI.reload("data-v-3db3db64", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
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
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            companyBin: '',
            localQuery: '',
            status: 'empty',
            oked: '',
            kato: '',
            isFilial: false,
            filials: '',
            wanted: '',
            taxes: '',
            head: '',
            results: {
                company: {}
            },
            history: {},
            historyStatus: 'empty',
            ceoInfoOpen: false,
            taxHistory1: false,
            taxButton: false,
            loadButton: false
        };
    },

    methods: {
        localSearch: function localSearch() {
            if (this.localQuery != '') {
                this.query = this.localQuery;
                this.$router.push({ name: 'search', query: { query: this.query } });
            }
        },
        getWanted: function getWanted() {
            var _this = this;

            this.wanted == 'loading';
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/backend/wanted/' + this.results.company.BIN).then(function (response) {
                console.log(response.data);
                _this.wanted = response.data;
            }).catch(function (error) {
                console.log(error);
                _this.wanted == 'error';
            });
        },
        getTaxes: function getTaxes() {
            var _this2 = this;

            this.taxes == 'loading';
            this.loadButton = true;
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/backend/taxes/' + this.results.company.BIN).then(function (response) {
                console.log(response.data);
                _this2.taxes == 'done';
                _this2.taxes = response.data;
                _this2.taxButton = true;
                _this2.loadButton = false;
            }).catch(function (error) {
                console.log(error);
                _this2.taxes == 'error';
            });
        },
        getHead: function getHead() {
            var _this3 = this;

            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/backend/head/' + this.results.company.BIN).then(function (response) {
                console.log(response.data);
                _this3.head = response.data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        getFilials: function getFilials() {
            var _this4 = this;

            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/backend/filials/' + this.results.company.BIN).then(function (response) {
                console.log(response.data);
                _this4.filials = response.data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        getHistory: function getHistory() {
            var _this5 = this;

            this.historyStatus = 'loading';
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/backend/history/' + this.companyBin).then(function (response) {
                var historyResponse = response.data;
                var historyRows = [];
                var historyFields = ['CEO', 'name_ru', 'address', 'active', 'territory_code', 'economic_activity_code'];

                for (var i in historyResponse) {
                    for (var j in historyFields) {
                        if (historyResponse[i][historyFields[j]] != _this5.results.company[historyFields[j]]) {
                            var push = true;

                            for (var k in historyRows) {
                                if (historyRows[k].oldValue == historyResponse[i][historyFields[j]]) {
                                    push = false;
                                }
                            }
                            if (push) {
                                historyRows.push({
                                    field: historyFields[j],
                                    oldValue: historyResponse[i][historyFields[j]],
                                    date: historyResponse[i].update_date
                                });
                            }
                        }
                    }
                }
                if (historyRows.length > 0) {
                    _this5.historyStatus = 'success';
                    _this5.history = historyRows;
                } else {
                    _this5.historyStatus = 'empty';
                }
                _this5.getKato();
                _this5.getOked();
            }).catch(function (error) {
                console.log(error);
                _this5.historyStatus = 'error';
            });
        },
        getKato: function getKato() {
            var _this6 = this;

            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/backend/kato/' + this.results.company.territory_code).then(function (response) {
                if (response.data[0].name__ru == '' || response.data[0].name__ru == undefined) {
                    _this6.kato = 'Нет данных...';
                } else {
                    _this6.kato = response.data[0].name__ru;
                }
                console.log(_this6.kato);
            }).catch(function (error) {
                console.log(error);
            });
        },
        getOked: function getOked() {
            var _this7 = this;

            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/backend/oked/' + this.results.company.economic_activity_code).then(function (response) {
                if (response.data[0].name_ru == '' || response.data[0].name_ru == undefined) {
                    _this7.oked = 'Нет данных...';
                } else {
                    _this7.oked = response.data[0].name_ru;
                }

                console.log(_this7.oked);
            }).catch(function (error) {
                console.log(error);
            });
        },
        getData: function getData() {
            var _this8 = this;

            this.status = 'loading';
            this.companyBin = this.$route.params.companyBin;

            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/backend/company/' + this.companyBin).then(function (response) {
                _this8.results = response.data;
                _this8.results.length == 0 ? _this8.status = 'not-found' : _this8.status = 'done';

                if (_this8.results.company.BIN[5] == 1) {
                    _this8.isFilial = true;
                    _this8.getFilials();
                    _this8.getHead();
                } else {
                    _this8.isFilial = false;
                    _this8.getFilials();
                }

                _this8.getHistory();
                _this8.taxes = [];
                _this8.getTaxes();
            }).catch(function (error) {
                console.log(error);
                _this8.status = 'error';
            });
        },
        ceoInfo: function ceoInfo() {
            this.ceoInfoOpen = !this.ceoInfoOpen;
            this.getWanted();
        }
    },
    created: function created() {
        this.getData();
    },

    watch: {
        '$route.params.companyBin': function $routeParamsCompanyBin() {
            this.getData();
        }
    }
});

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page page-company"
  }, [_c('div', {
    staticClass: "container"
  }, [(_vm.taxHistory1) ? _c('div', {
    staticClass: "tax__modal"
  }, [_c('div', {
    staticClass: "modal__backdrop",
    on: {
      "click": function($event) {
        _vm.openTaxModal()
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "modal__block"
  }, [_c('div', {
    staticClass: "modal__title"
  }, [_vm._v("\n                    Информация по налогам\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "modal__content"
  }, [_c('p', {
    staticClass: "modal__text"
  }, [_vm._v("Информация об уплате налогов и других обязательных платежей в бюджет в компетенции налоговых органов (в соответствии с пп. 1. п.1 статьи 557 Налогового Кодекса РК, данная информация не является налоговой тайной)")]), _vm._v(" "), (_vm.taxes == 0 || _vm.taxes == '0') ? _c('div', [_vm._v("\n                        Не удалось загрузить данные\n                    ")]) : _c('div', {
    staticStyle: {
      "width": "100%"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.taxes)
    }
  })])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "search"
  }, [_c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        return _vm.localSearch($event)
      }
    }
  }, [_c('div', {
    staticClass: "home__form"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.localQuery),
      expression: "localQuery"
    }],
    staticClass: "input_search input_mr10px",
    attrs: {
      "type": "text",
      "placeholder": "Искать предприятие..."
    },
    domProps: {
      "value": (_vm.localQuery)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.localQuery = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    staticClass: "btn btn-warning",
    attrs: {
      "type": "submit",
      "value": "Искать"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "company-card"
  }, [(_vm.status == 'loading') ? _c('div', {
    staticClass: "loading"
  }, [_vm._v("\n                Загрузка...\n            ")]) : _vm._e(), _vm._v(" "), (_vm.status == 'not-found') ? _c('div', {
    staticClass: "not-found"
  }, [_vm._v("\n                По вашему запросу ничего не найдено\n            ")]) : _vm._e(), _vm._v(" "), (_vm.status == 'done') ? _c('div', {
    staticClass: "company"
  }, [_c('h1', {
    staticClass: "company__name"
  }, [_vm._v("\n                    " + _vm._s(_vm.results.company.name_ru) + "\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8 company__base-info"
  }, [_c('h3', [_vm._v("Основная информация")]), _vm._v(" "), _c('p', {
    staticClass: "company__activity"
  }, [_c('b', [_vm._v(_vm._s(_vm.results.company.activity_ru))])]), _vm._v(" "), _c('p', {
    staticClass: "company__bin"
  }, [_vm._v("\n                            БИН: " + _vm._s(_vm.results.company.BIN) + "\n                        ")]), _vm._v(" "), _c('p', {
    staticClass: "company__address"
  }, [_vm._v("\n                            Юридический адрес: " + _vm._s(_vm.results.company.address) + "\n                        ")]), _vm._v(" "), _c('p', {
    staticClass: "company__date"
  }, [_vm._v("\n                            Дата основания: " + _vm._s(_vm.results.company.register_date) + "\n                        ")]), _vm._v(" "), _c('p', {
    staticClass: "company__status"
  }, [_vm._v("\n                            Статус:\n                            "), (_vm.results.company.active == 1) ? _c('span', {
    staticClass: "marker green active"
  }, [_vm._v("Действующее")]) : _c('span', {
    staticClass: "marker red"
  }, [_vm._v("Не работает")])]), _vm._v(" "), _c('p', {
    staticClass: "company__size_ru"
  }, [_vm._v("\n                            Размерность: " + _vm._s(_vm.results.company.size_ru) + "\n                        ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "company__ceo",
    on: {
      "click": function($event) {
        _vm.ceoInfo()
      }
    }
  }, [_c('button', {
    staticClass: "collapsed main-collapse",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#ceo"
    }
  }, [_vm._v("\n                                Руководитель: " + _vm._s(_vm.results.company.CEO)), _vm._m(0)]), _vm._v(" "), _c('div', {
    staticClass: "collapse",
    attrs: {
      "id": "ceo"
    }
  }, [_c('div', {
    staticClass: "director"
  }, [_c('hr'), _vm._v(" "), _c('h3', {
    staticClass: "director__title"
  }, [_vm._v(" Дополнительная информация по руководителю")]), _vm._v(" "), _c('p', {
    staticClass: "director__terror"
  }, [_vm._v("\n                                        В базе плательщиков с задолжностью :\n                                        "), (_vm.results.ceo.promiser == 0) ? _c('span', {
    staticClass: "marker green"
  }, [_vm._v("Нет")]) : _c('span', {
    staticClass: "marker red"
  }, [_vm._v("Есть")])]), _vm._v(" "), _c('p', {
    staticClass: "director__terror"
  }, [_vm._v("\n                                        В базе розыскиваемых :\n                                        "), (_vm.wanted == 'loading') ? _c('span', [_vm._v("\n                                            Загрузка...\n                                        ")]) : _vm._e(), _vm._v(" "), (!_vm.wanted) ? _c('span', {
    staticClass: "marker green"
  }, [_vm._v("Нет")]) : _c('span', {
    staticClass: "marker red"
  }, [_vm._v("Есть")])]), _vm._v(" "), _c('p', {
    staticClass: "director__terror"
  }, [_vm._v("\n                                        В базе террористов :\n                                        "), (_vm.results.ceo.terror == 0) ? _c('span', {
    staticClass: "marker green"
  }, [_vm._v("Нет")]) : _c('span', {
    staticClass: "marker red"
  }, [_vm._v("Есть")])]), _vm._v(" "), (_vm.results.ceo.interprises.length > 1) ? _c('div', {
    staticClass: "director__interprises"
  }, [_c('h3', [_vm._v(_vm._s(_vm.results.company.CEO) + " Также является директором следующих\n                                            " + _vm._s(_vm.results.ceo.interprises.length) + " предприятий ...")]), _vm._v(" "), _vm._l((_vm.results.ceo.interprises), function(item, index) {
    return _c('p', [_c('router-link', {
      attrs: {
        "to": {
          name: 'company',
          params: {
            companyBin: item.BIN
          }
        }
      }
    }, [_vm._v("\n                                                " + _vm._s(item.name_ru) + "\n                                            ")])], 1)
  })], 2) : _vm._e(), _vm._v(" "), _c('hr')])])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "company__oked"
  }, [_c('button', {
    staticClass: "collapsed main-collapse",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#oked"
    }
  }, [_vm._v("\n                                ОКЭД: " + _vm._s(_vm.results.company.economic_activity_code)), _vm._m(1)]), _vm._v(" "), _c('div', {
    staticClass: "collapse",
    attrs: {
      "id": "oked"
    }
  }, [_vm._v("\n                                " + _vm._s(_vm.oked) + "\n                            ")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "company__kato"
  }, [_c('button', {
    staticClass: "collapsed main-collapse",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#kato"
    }
  }, [_vm._v("\n                                КАТО: " + _vm._s(_vm.results.company.territory_code)), _vm._m(2)]), _vm._v(" "), _c('div', {
    staticClass: "collapse",
    attrs: {
      "id": "kato"
    }
  }, [_vm._v("\n                                " + _vm._s(_vm.kato) + "\n                            ")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "company__filials"
  }, [(_vm.isFilial) ? _c('div', [_c('div', [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "collapse",
    attrs: {
      "id": "head-company"
    }
  }, [_c('br'), _vm._v(" "), (_vm.head == '') ? _c('p', [_vm._v("\n                                            Головное предприятия к сожалению не найдено!\n                                        ")]) : _c('p', [_c('router-link', {
    attrs: {
      "to": {
        name: 'company',
        params: {
          companyBin: _vm.head.BIN
        }
      }
    }
  }, [_vm._v("\n                                                " + _vm._s(_vm.head.name) + "\n                                            ")])], 1)])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', [_vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "collapse",
    attrs: {
      "id": "other-filials"
    }
  }, [_c('br'), _vm._v(" "), (_vm.filials == '') ? _c('p', [_vm._v("\n                                            У данного предприятия больше нет филиалов\n                                        ")]) : _vm._l((_vm.filials), function(filial) {
    return _c('p', [_c('router-link', {
      attrs: {
        "to": {
          name: 'company',
          params: {
            companyBin: filial.BIN
          }
        }
      }
    }, [_vm._v("\n                                                " + _vm._s(filial.name) + "\n                                            ")]), _vm._v(" "), _c('br')], 1)
  })], 2)])]) : _c('div', [_vm._m(5), _vm._v(" "), _c('div', {
    staticClass: "collapse",
    attrs: {
      "id": "filials"
    }
  }, [(_vm.filials == '') ? _c('p', [_vm._v("\n                                        У данного предприятия нет филиалов\n                                    ")]) : _vm._l((_vm.filials), function(filial) {
    return _c('p', [_c('router-link', {
      attrs: {
        "to": {
          name: 'company',
          params: {
            companyBin: filial.BIN
          }
        }
      }
    }, [_vm._v("\n                                            " + _vm._s(filial.name) + "\n                                        ")]), _vm._v(" "), _c('br')], 1)
  })], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "company__markers"
  }, [_c('h3', [_vm._v("Налоговые поступления")]), _vm._v(" "), (_vm.$store.state.authState == 'guest') ? _c('div', [_vm._v("\n                                Для просмотра этих данных необходимо авторизоваться!\n                            ")]) : _c('div', [(_vm.taxes == '') ? _c('button', {
    staticClass: "collapsed main-collapse"
  }, [_vm._v("\n                                    Загрузка данных"), _vm._m(6)]) : _c('button', {
    staticClass: "collapsed main-collapse",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#taxes"
    }
  }, [_vm._v("\n                                    Показать"), _vm._m(7)]), _vm._v(" "), _c('div', {
    staticClass: "collapse",
    attrs: {
      "id": "taxes"
    }
  }, [(_vm.taxes == '') ? _c('div', [_vm._v(" Загрузка... ")]) : _c('div', [_c('table', {
    staticClass: "table"
  }, [_vm._m(8), _vm._v(" "), _vm._l((_vm.taxes), function(tax, index) {
    return _c('tbody', [_c('tr', [_c('td', [_vm._v(_vm._s(index))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(tax))])])])
  })], 2), _vm._v(" "), _c('h5', [_vm._v("Информация об уплате налогов и других обязательных платежей в бюджет в компетенции налоговых органов (в соответствии с пп. 1. п.1 статьи 557 Налогового Кодекса РК, данная информация не является налоговой тайной)")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "company__markers"
  }, [_c('h3', [_vm._v("Показатели надежности")]), _vm._v(" "), (_vm.$store.state.authState == 'guest') ? _c('div', [_vm._v("\n                                Для просмотра этих данных необходимо авторизоваться!\n                                \n                            ")]) : _c('div', [_c('p', {
    staticClass: "company__good"
  }, [_vm._v("\n                                    В базе добросовестных поставщиков холдинга АО «Самрук-Қазына» :\n                                    "), (_vm.results.good == 0) ? _c('span', {
    staticClass: "marker orange"
  }, [_vm._v("Нет")]) : _c('span', {
    staticClass: "marker green"
  }, [_vm._v("Есть")])]), _vm._v(" "), _c('p', {
    staticClass: "company__bad"
  }, [_vm._v("\n                                    В базе ненадежных поставщиков  холдинга АО «Самрук-Қазына» :\n                                    "), (_vm.results.bad == 0) ? _c('span', {
    staticClass: "marker green"
  }, [_vm._v("Нет")]) : _c('span', {
    staticClass: "marker red"
  }, [_vm._v("Есть")])]), _vm._v(" "), _c('p', {
    staticClass: "company__bankrot"
  }, [_vm._v("\n                                    В базе банкротов :\n                                    "), (_vm.results.bankrot == 0) ? _c('span', {
    staticClass: "marker green"
  }, [_vm._v("Нет")]) : _c('span', {
    staticClass: "marker red"
  }, [_vm._v("Есть")])]), _vm._v(" "), _c('p', {
    staticClass: "company__bad"
  }, [_vm._v("\n                                    В базе плательщиков, отсутствующих по Юридическому адресу :\n                                    "), (_vm.results.jur == 0) ? _c('span', {
    staticClass: "marker green"
  }, [_vm._v("Нет")]) : _c('span', {
    staticClass: "marker red"
  }, [_vm._v("Есть")])]), _vm._v(" "), _c('p', {
    staticClass: "company__bankrot"
  }, [_vm._v("\n                                    В базе плательщиков, нарушающие нормы Налогового кодекса :\n                                    "), (_vm.results.codex == 0) ? _c('span', {
    staticClass: "marker green"
  }, [_vm._v("Нет")]) : _c('span', {
    staticClass: "marker red"
  }, [_vm._v("Есть")])]), _vm._v(" "), _c('p', {
    staticClass: "company__exbankrot"
  }, [_vm._v("\n                                    В базе бывших банкротов :\n                                    "), (_vm.results.exbankrot == 0) ? _c('span', {
    staticClass: "marker green"
  }, [_vm._v("Нет")]) : _c('span', {
    staticClass: "marker red"
  }, [_vm._v("Есть")])]), _vm._v(" "), _c('p', {
    staticClass: "company__good"
  }, [_vm._v("\n                                    В базе налоговых должников :\n                                    "), (_vm.results.promiser == 0) ? _c('span', {
    staticClass: "marker green"
  }, [_vm._v("Нет")]) : _c('span', {
    staticClass: "marker green"
  }, [_vm._v("Есть")])]), _vm._v(" "), _c('p', {
    staticClass: "company__lie"
  }, [_vm._v("\n                                    В базе лжепредприятий :\n                                    "), (_vm.results.lie == 0) ? _c('span', {
    staticClass: "marker green"
  }, [_vm._v("Нет")]) : _c('span', {
    staticClass: "marker red"
  }, [_vm._v("Есть")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4 company__history"
  }, [_c('h3', [_vm._v("История компании")]), _vm._v(" "), (_vm.$store.state.authState == 'guest') ? _c('div', [_vm._v("\n                            Для просмотра этих данных необходимо авторизоваться!\n                        ")]) : _c('div', [(_vm.historyStatus == 'empty') ? _c('p', [_vm._v("\n                                У данной компании еще пока нет изменений\n                            ")]) : _vm._e(), _vm._v(" "), (_vm.historyStatus == 'success') ? _c('div', _vm._l((_vm.history), function(item, index) {
    return _c('div', {
      staticClass: "history"
    }, [_c('button', {
      staticClass: "collapsed main-collapse",
      attrs: {
        "data-toggle": "collapse",
        "data-target": '#history_' + index
      }
    }, [_vm._v(_vm._s(item.date) + "\n                                        "), _vm._m(9, true)]), _vm._v(" "), _c('div', {
      staticClass: "collapse",
      attrs: {
        "id": 'history_' + index
      }
    }, [(item.field == 'CEO') ? _c('p', [_vm._v("\n                                            Был директор: "), _c('br'), _vm._v(" "), _c('b', [_vm._v(_vm._s(item.oldValue))])]) : _vm._e(), _vm._v(" "), (item.field == 'name_ru') ? _c('p', [_vm._v("\n                                            Было название: "), _c('br'), _vm._v(" "), _c('b', [_vm._v(_vm._s(item.oldValue))])]) : _vm._e(), _vm._v(" "), (item.field == 'address') ? _c('p', [_vm._v("\n                                            Был адрес: "), _c('br'), _vm._v(" "), _c('b', [_vm._v(_vm._s(item.oldValue))])]) : _vm._e(), _vm._v(" "), (item.field == 'active') ? _c('p', [_vm._v("\n                                            Компания "), (item.oldValue == 1) ? _c('b', [_vm._v(" работала")]) : _vm._e(), (item.oldValue == 0) ? _c('b', [_vm._v("не работала")]) : _vm._e()]) : _vm._e(), _vm._v(" "), (item.field == 'territory_code') ? _c('p', [_vm._v("\n                                            Был КАТО: "), _c('br'), _vm._v(" "), _c('b', [_vm._v(_vm._s(item.oldValue))])]) : _vm._e(), _vm._v(" "), (item.field == 'economic_activity_code') ? _c('p', [_vm._v("\n                                            Был ОКЭД: "), _c('br'), _vm._v(" "), _c('b', [_vm._v(_vm._s(item.oldValue))])]) : _vm._e()])])
  })) : _vm._e()])])])]) : _vm._e()])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('i', [_c('img', {
    attrs: {
      "src": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUwIDUwIiBoZWlnaHQ9IjUwcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjUwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iNTAiIHdpZHRoPSI1MCIvPjxwb2x5Z29uIHBvaW50cz0iNDcuMjUsMTUgNDUuMTY0LDEyLjkxNCAyNSwzMy4wNzggNC44MzYsMTIuOTE0IDIuNzUsMTUgMjUsMzcuMjUgIi8+PC9zdmc+",
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('i', [_c('img', {
    attrs: {
      "src": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUwIDUwIiBoZWlnaHQ9IjUwcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjUwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iNTAiIHdpZHRoPSI1MCIvPjxwb2x5Z29uIHBvaW50cz0iNDcuMjUsMTUgNDUuMTY0LDEyLjkxNCAyNSwzMy4wNzggNC44MzYsMTIuOTE0IDIuNzUsMTUgMjUsMzcuMjUgIi8+PC9zdmc+",
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('i', [_c('img', {
    attrs: {
      "src": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUwIDUwIiBoZWlnaHQ9IjUwcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjUwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iNTAiIHdpZHRoPSI1MCIvPjxwb2x5Z29uIHBvaW50cz0iNDcuMjUsMTUgNDUuMTY0LDEyLjkxNCAyNSwzMy4wNzggNC44MzYsMTIuOTE0IDIuNzUsMTUgMjUsMzcuMjUgIi8+PC9zdmc+",
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "collapsed main-collapse",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#head-company"
    }
  }, [_vm._v("\n                                        Головное предприятие"), _c('i', [_c('img', {
    attrs: {
      "src": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUwIDUwIiBoZWlnaHQ9IjUwcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjUwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iNTAiIHdpZHRoPSI1MCIvPjxwb2x5Z29uIHBvaW50cz0iNDcuMjUsMTUgNDUuMTY0LDEyLjkxNCAyNSwzMy4wNzggNC44MzYsMTIuOTE0IDIuNzUsMTUgMjUsMzcuMjUgIi8+PC9zdmc+",
      "alt": ""
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "collapsed main-collapse",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#other-filials"
    }
  }, [_vm._v("\n                                        Другие филлиалы"), _c('i', [_c('img', {
    attrs: {
      "src": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUwIDUwIiBoZWlnaHQ9IjUwcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjUwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iNTAiIHdpZHRoPSI1MCIvPjxwb2x5Z29uIHBvaW50cz0iNDcuMjUsMTUgNDUuMTY0LDEyLjkxNCAyNSwzMy4wNzggNC44MzYsMTIuOTE0IDIuNzUsMTUgMjUsMzcuMjUgIi8+PC9zdmc+",
      "alt": ""
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "collapsed main-collapse",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#filials"
    }
  }, [_vm._v("\n                                    Филлиалы предприятия"), _c('i', [_c('img', {
    attrs: {
      "src": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUwIDUwIiBoZWlnaHQ9IjUwcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjUwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iNTAiIHdpZHRoPSI1MCIvPjxwb2x5Z29uIHBvaW50cz0iNDcuMjUsMTUgNDUuMTY0LDEyLjkxNCAyNSwzMy4wNzggNC44MzYsMTIuOTE0IDIuNzUsMTUgMjUsMzcuMjUgIi8+PC9zdmc+",
      "alt": ""
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('i', [_c('img', {
    attrs: {
      "src": "data:image/gif;base64,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",
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('i', [_c('img', {
    attrs: {
      "src": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUwIDUwIiBoZWlnaHQ9IjUwcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjUwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iNTAiIHdpZHRoPSI1MCIvPjxwb2x5Z29uIHBvaW50cz0iNDcuMjUsMTUgNDUuMTY0LDEyLjkxNCAyNSwzMy4wNzggNC44MzYsMTIuOTE0IDIuNzUsMTUgMjUsMzcuMjUgIi8+PC9zdmc+",
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("Год")]), _vm._v(" "), _c('th', [_vm._v("Сумма(Тыс. тг)")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('i', [_c('img', {
    attrs: {
      "src": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUwIDUwIiBoZWlnaHQ9IjUwcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjUwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iNTAiIHdpZHRoPSI1MCIvPjxwb2x5Z29uIHBvaW50cz0iNDcuMjUsMTUgNDUuMTY0LDEyLjkxNCAyNSwzMy4wNzggNC44MzYsMTIuOTE0IDIuNzUsMTUgMjUsMzcuMjUgIi8+PC9zdmc+",
      "alt": ""
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3db3db64", module.exports)
  }
}

/***/ })

});