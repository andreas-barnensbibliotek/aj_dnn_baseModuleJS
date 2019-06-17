(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        main: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/main.js", "vendors~main" ]);
    return checkDeferredModules();
})({
    "./assets/js/components/test.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var _service_serviceApiHandler_2_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/serviceApiHandler.2.0 */ "./assets/js/service/serviceApiHandler.2.0.js");\nlet _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");\n\n\n\nconst hello = () => {\n  return {\n    skrik: callback => {\n      let reqobj = Object(_service_serviceApiHandler_2_0__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();\n      let url = "http://frontdata.se/DesktopModules/aj_QuizEngineAPI_vb/API/Andreas/Quiztest";\n      let svar = reqobj.Getjson(url, data => {\n        console.log("visa data: " + data);\n        callback(data);\n      });\n      console.log("TEST igen dettaeller" + _.add(6, 4) + " --- ");\n    },\n    alfvalue: "detta är ett simpelt värde från hello test!"\n  };\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (hello);\n\n//# sourceURL=webpack:///./assets/js/components/test.js?');
    },
    "./assets/js/main.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/test */ \"./assets/js/components/test.js\");\n //console.log(ny.skrik());\n//(alert(ny.alfvalue);\n//let _ = require('lodash');\n//dt.testarold('funkar detta');\n\n$(function () {\n  let init = () => {\n    let obj = Object(_components_test__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"])();\n    let svar = obj.skrik(svar => {\n      $(\"#quizMainContainer\").text(svar);\n    });\n  };\n\n  init(); //alert(' och igen..nu utan ' + ny.skrik(dt.testarold('funkar detta')));\n  //console.log('innan jplist2');\n  //jplist.init();\n});\n\n//# sourceURL=webpack:///./assets/js/main.js?");
    },
    "./assets/js/service/serviceApiHandler.2.0.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('const apiServiceHandler = () => {\n  function GetJsonData(url, callback) {\n    if (!url) {\n      return false;\n    } else {\n      fetch(url).then(resp => resp.json()) // Transform the data into json\n      .then(function (data) {\n        callback(data);\n      });\n    }\n  }\n\n  function PostJsonData(url, postdata, callback) {\n    if (!url) {\n      return false;\n    } else {\n      //console.log("Searchservicen hämtar Arrangemangdata");\n      $.ajax({\n        async: true,\n        type: "post",\n        url: url,\n        data: postdata,\n        success: function (data) {\n          console.log("Hämtar Data: ");\n          callback(data);\n        },\n        error: function (xhr, ajaxOptions, thrownError) {\n          alert("Nått blev fel vid hämtning av POST json!");\n        }\n      });\n    }\n  }\n\n  return {\n    Getjson: GetJsonData,\n    Postjson: PostJsonData\n  };\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (apiServiceHandler);\n\n//# sourceURL=webpack:///./assets/js/service/serviceApiHandler.2.0.js?');
    }
});