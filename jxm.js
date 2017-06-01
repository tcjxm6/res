/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/d308e202e5e6b299cef72e5d23f3c741', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/d308e202e5e6b299cef72e5d23f3c741',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "list",
	      "classList": [
	        "list"
	      ],
	      "children": [
	        {
	          "type": "cell",
	          "append": "tree",
	          "classList": [
	            "cell"
	          ],
	          "style": {
	            "height": function () {return this.scrollerHeight}
	          },
	          "children": [
	            {
	              "type": "slider",
	              "classList": [
	                "slider"
	              ],
	              "attr": {
	                "interval": "3000",
	                "autoPlay": "true"
	              },
	              "style": {
	                "height": function () {return this.scrollerHeight}
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "repeat": function () {return this.imageList},
	                  "attr": {
	                    "src": function () {return this.src},
	                    "resize": "stretch"
	                  },
	                  "classList": [
	                    "frame"
	                  ]
	                },
	                {
	                  "type": "indicator",
	                  "classList": [
	                    "indicator"
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "style": {
	            "height": 360
	          },
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "/res/hot.jpg"
	              },
	              "style": {
	                "height": 360
	              }
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "style": {
	            "height": 408,
	            "width": function () {return this.screenWidth}
	          },
	          "events": {
	            "click": "cakeTypeClick"
	          },
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "/res/1.jpg"
	              },
	              "classList": [
	                "selectImage"
	              ],
	              "style": {
	                "height": 385
	              }
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "repeat": {
	            "expression": function () {return this.cakeTypeList},
	            "value": "name"
	          },
	          "style": {
	            "height": 90,
	            "justifyContent": "center"
	          },
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "color": "#3D2D23",
	                "fontSize": 28,
	                "marginLeft": 47
	              },
	              "attr": {
	                "value": function () {return this.name}
	              }
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "style": {
	            "height": 408,
	            "width": function () {return this.screenWidth}
	          },
	          "events": {
	            "click": "teaTypeClick"
	          },
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "/res/2.jpg"
	              },
	              "classList": [
	                "selectImage"
	              ],
	              "style": {
	                "height": 385
	              }
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "repeat": {
	            "expression": function () {return this.teaTypeList},
	            "value": "name"
	          },
	          "style": {
	            "height": 90,
	            "justifyContent": "center"
	          },
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "color": "#3D2D23",
	                "fontSize": 28,
	                "marginLeft": 47
	              },
	              "attr": {
	                "value": function () {return this.name}
	              }
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "style": {
	            "height": 408,
	            "width": function () {return this.screenWidth}
	          },
	          "events": {
	            "click": "souvenirTypeClick"
	          },
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "/res/3.jpg"
	              },
	              "classList": [
	                "selectImage"
	              ],
	              "style": {
	                "height": 385
	              }
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "repeat": {
	            "expression": function () {return this.souvenirTypeList},
	            "value": "name"
	          },
	          "style": {
	            "height": 90,
	            "justifyContent": "center"
	          },
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "color": "#3D2D23",
	                "fontSize": 28,
	                "marginLeft": 47
	              },
	              "attr": {
	                "value": function () {return this.name}
	              }
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "style": {
	            "height": 50
	          }
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "style": {
	            "height": 60,
	            "backgroundColor": "#ffffff"
	          },
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "marginLeft": 20,
	                    "flex": 1,
	                    "textAlign": "left",
	                    "color": "#3D2D23",
	                    "fontSize": 33
	                  },
	                  "attr": {
	                    "value": "产品推荐"
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "marginRight": 20,
	                    "flex": 1,
	                    "textAlign": "right",
	                    "color": "#BD8D46",
	                    "fontSize": 26
	                  },
	                  "attr": {
	                    "value": "查看全部"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "height": 1,
	                "backgroundColor": "#3D2D23",
	                "left": 20,
	                "right": 20,
	                "bottom": 0,
	                "position": "absolute"
	              }
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "repeat": {
	            "expression": function () {return this.cakeList},
	            "value": "cakeArr"
	          },
	          "style": {
	            "height": 390
	          },
	          "classList": [
	            "cake"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flex": 1
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "cake-image-left"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "cake-namelabel-left"
	                  ],
	                  "attr": {
	                    "value": function () {return this.cakeArr[0].name}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "cake-pricelabel-left"
	                  ],
	                  "attr": {
	                    "value": function () {return this.cakeArr[0].price}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "flex": 1
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "cake-image-right"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "cake-namelabel-right"
	                  ],
	                  "attr": {
	                    "value": function () {return this.cakeArr[1].name}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "cake-pricelabel-right"
	                  ],
	                  "attr": {
	                    "value": function () {return this.cakeArr[1].price}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "style": {
	            "height": 30
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "searchBar"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": "/res/Home_Search.png"
	          },
	          "classList": [
	            "search_image"
	          ],
	          "style": {
	            "width": 33,
	            "height": 33
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "searchText"
	          ],
	          "attr": {
	            "value": "搜寻"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "cake": {
	    "flexDirection": "row"
	  },
	  "cake-namelabel-left": {
	    "marginRight": 10,
	    "marginLeft": 20,
	    "textAlign": "center",
	    "fontSize": 21,
	    "height": 21,
	    "marginTop": 15
	  },
	  "cake-namelabel-right": {
	    "marginRight": 20,
	    "marginLeft": 10,
	    "textAlign": "center",
	    "fontSize": 21,
	    "height": 21,
	    "marginTop": 15
	  },
	  "cake-image-left": {
	    "marginTop": 23,
	    "marginLeft": 20,
	    "marginRight": 10,
	    "height": 310,
	    "backgroundColor": "#3D2D23"
	  },
	  "cake-image-right": {
	    "marginTop": 23,
	    "marginLeft": 10,
	    "marginRight": 20,
	    "height": 310,
	    "backgroundColor": "#3D2D23"
	  },
	  "cake-pricelabel-left": {
	    "color": "#8C959F",
	    "fontSize": 21,
	    "height": 21,
	    "textAlign": "center",
	    "marginTop": 2,
	    "marginLeft": 20,
	    "marginRight": 10
	  },
	  "cake-pricelabel-right": {
	    "color": "#8C959F",
	    "fontSize": 21,
	    "height": 21,
	    "textAlign": "center",
	    "marginTop": 2,
	    "marginLeft": 10,
	    "marginRight": 20
	  },
	  "searchText": {
	    "left": 82,
	    "fontSize": 25,
	    "top": 40,
	    "color": "rgba(61,45,35,0.5)",
	    "position": "absolute"
	  },
	  "search_image": {
	    "backgroundColor": "#ffffff",
	    "top": 38,
	    "left": 35,
	    "resize": "contain"
	  },
	  "wrapper": {
	    "top": 0,
	    "right": 0,
	    "left": 0,
	    "bottom": 0,
	    "backgroundColor": "#000000"
	  },
	  "list": {
	    "position": "absolute",
	    "top": 110,
	    "right": 0,
	    "left": 0,
	    "bottom": 0,
	    "backgroundColor": "#ffffff"
	  },
	  "image": {
	    "width": 700,
	    "height": 700
	  },
	  "selectImage": {
	    "marginTop": 23,
	    "marginRight": 20,
	    "marginLeft": 20
	  },
	  "slider": {},
	  "searchBar": {
	    "backgroundColor": "#ffffff",
	    "height": 110,
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "position": "absolute"
	  },
	  "indicator": {
	    "height": 14,
	    "itemColor": "#999",
	    "itemSelectedColor": "#fff",
	    "itemSize": 14,
	    "position": "absolute",
	    "left": 0,
	    "right": 0,
	    "bottom": 25
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {

	    data: function () {return {
	        imageList: [{ src: '/res/banner.jpg' }, { src: '/res/banner.jpg' }, { src: '/res/banner.jpg' }],

	        scrollerHeight: "828px",

	        screenWidth: 750,
	        cakeWidth: 325,

	        isShowCakeTypeList: false,
	        cakeTypeList: [],

	        isShowTeaTypeList: false,
	        teaTypeList: [],

	        isShowSouvenirTypeList: false,
	        souvenirTypeList: [],

	        cakeList: [[{
	            "name": "水果嘉年华",
	            "price": "168.0"
	        }, {
	            "name": "榴芒双拼",
	            "price": "128.0"
	        }], [{
	            "name": "水果嘉年华",
	            "price": "168.0"
	        }, {
	            "name": "榴芒双拼",
	            "price": "128.0"
	        }], [{
	            "name": "水果嘉年华",
	            "price": "168.0"
	        }, {
	            "name": "榴芒双拼",
	            "price": "128.0"
	        }], [{
	            "name": "水果嘉年华",
	            "price": "168.0"
	        }, {
	            "name": "榴芒双拼",
	            "price": "128.0"
	        }], [{
	            "name": "水果嘉年华",
	            "price": "168.0"
	        }, {
	            "name": "榴芒双拼",
	            "price": "128.0"
	        }], [{
	            "name": "水果嘉年华",
	            "price": "168.0"
	        }, {
	            "name": "榴芒双拼",
	            "price": "128.0"
	        }], [{
	            "name": "水果嘉年华",
	            "price": "168.0"
	        }, {
	            "name": "榴芒双拼",
	            "price": "128.0"
	        }]]
	    }},

	    created: function created() {
	        var self = this;
	        var AppInfo = __weex_require__('@weex-module/MSOAFoundation');

	        this.screenWidth = this.$getConfig().env.deviceWidth;
	        this.cakeWidth = this.$getConfig().env.deviceWidth / 2;
	    },

	    methods: {

	        cakeTypeClick: function cakeTypeClick() {
	            this.isShowCakeTypeList = !this.isShowCakeTypeList;

	            if (this.isShowCakeTypeList) {
	                this.cakeTypeList = ["查看全部", "鲜果蛋糕", "芝士慕斯蛋糕", "混合型蛋糕", "千层心蛋糕", "栗子巧克力蛋糕"];
	            } else {
	                this.cakeTypeList = [];
	            }
	        },

	        teaTypeClick: function teaTypeClick() {
	            this.isShowTeaTypeList = !this.isShowTeaTypeList;

	            if (this.isShowTeaTypeList) {
	                this.teaTypeList = ["查看全部", "鲜果蛋糕", "芝士慕斯蛋糕", "混合型蛋糕", "千层心蛋糕", "栗子巧克力蛋糕"];
	            } else {
	                this.teaTypeList = [];
	            }
	        },

	        souvenirTypeClick: function souvenirTypeClick() {
	            this.isShowSouvenirTypeList = !this.isShowSouvenirTypeList;

	            if (this.isShowSouvenirTypeList) {
	                this.souvenirTypeList = ["查看全部", "鲜果蛋糕", "芝士慕斯蛋糕", "混合型蛋糕", "千层心蛋糕", "栗子巧克力蛋糕"];
	            } else {
	                this.souvenirTypeList = [];
	            }
	        }

	    }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);