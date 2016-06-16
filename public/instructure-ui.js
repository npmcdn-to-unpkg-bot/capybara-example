(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("react-addons-css-transition-group"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "react-addons-css-transition-group"], factory);
	else if(typeof exports === 'object')
		exports["InstUI"] = factory(require("react"), require("react-dom"), require("react-addons-css-transition-group"));
	else
		root["InstUI"] = factory(root["React"], root["ReactDOM"], root["React.addons.CSSTransitionGroup"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_93__, __WEBPACK_EXTERNAL_MODULE_124__, __WEBPACK_EXTERNAL_MODULE_150__) {
return /******/ (function(modules) { // webpackBootstrap
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

	module.exports = __webpack_require__(321);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp; // forked from: https://github.com/andreypopp/rethemeable


	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _ThemeContextTypes = __webpack_require__(94);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	  The ApplyTheme component provides a way to set theme properties for all `@themeable` child components.
	  Theme properties will fall back to defaults when they are not set. Note that ApplyTheme components can be nested.

	  ```jsx_example
	  <ApplyTheme theme={{

	      [Link.theme]: { textColor: 'green', textDecoration: 'underline' },
	      [Heading.theme]: { fontFamily: 'serif' }

	    }}>
	    <div>
	      <Link>I should be Green</Link>
	      <Heading>I should be Serif</Heading>
	      <ApplyTheme theme={{

	          [Link.theme]: { textColor: 'red' }

	        }}>
	        <Link>I should be Red</Link>
	      </ApplyTheme>
	      <div>
	        <Link theme={{ textColor: 'blue' }}>I should be Blue</Link>
	      </div>
	    </div>
	  </ApplyTheme>
	  ```
	**/
	var ApplyTheme = (_temp = _class = function (_Component) {
	  (0, _inherits3.default)(ApplyTheme, _Component);

	  function ApplyTheme() {
	    (0, _classCallCheck3.default)(this, ApplyTheme);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ApplyTheme).apply(this, arguments));
	  }

	  (0, _createClass3.default)(ApplyTheme, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      var theme = this.props.theme;

	      var prevTheme = (0, _ThemeContextTypes.getThemeContext)(this.context);

	      if (prevTheme) {
	        return (0, _ThemeContextTypes.makeThemeContext)((0, _extends3.default)({}, prevTheme, theme));
	      } else {
	        return (0, _ThemeContextTypes.makeThemeContext)(theme);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.Children.only(this.props.children);
	    }
	  }]);
	  return ApplyTheme;
	}(_react.Component), _class.propTypes = {
	  theme: _react.PropTypes.object,
	  /**
	  * accepts only one child (children must be wrapped in a single component/element)
	  */
	  children: _react.PropTypes.node
	}, _class.childContextTypes = _ThemeContextTypes.ThemeContextTypes, _class.contextTypes = _ThemeContextTypes.ThemeContextTypes, _temp);
	exports.default = ApplyTheme;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(3);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(4), __esModule: true };

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	module.exports = __webpack_require__(8).Object.assign;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(6);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(21)});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(7)
	  , core      = __webpack_require__(8)
	  , ctx       = __webpack_require__(9)
	  , hide      = __webpack_require__(11)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 7 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(10);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(12)
	  , createDesc = __webpack_require__(20);
	module.exports = __webpack_require__(16) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(13)
	  , IE8_DOM_DEFINE = __webpack_require__(15)
	  , toPrimitive    = __webpack_require__(19)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(16) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(14);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(16) && !__webpack_require__(17)(function(){
	  return Object.defineProperty(__webpack_require__(18)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(17)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(14)
	  , document = __webpack_require__(7).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(14);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(22)
	  , gOPS     = __webpack_require__(37)
	  , pIE      = __webpack_require__(38)
	  , toObject = __webpack_require__(39)
	  , IObject  = __webpack_require__(26)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(17)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(23)
	  , enumBugKeys = __webpack_require__(36);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(24)
	  , toIObject    = __webpack_require__(25)
	  , arrayIndexOf = __webpack_require__(29)(false)
	  , IE_PROTO     = __webpack_require__(33)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(26)
	  , defined = __webpack_require__(28);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(27);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(25)
	  , toLength  = __webpack_require__(30)
	  , toIndex   = __webpack_require__(32);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(31)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(31)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(34)('keys')
	  , uid    = __webpack_require__(35);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(7)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 37 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 38 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(28);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(41), __esModule: true };

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(42);
	module.exports = __webpack_require__(8).Object.getPrototypeOf;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(39)
	  , $getPrototypeOf = __webpack_require__(43);

	__webpack_require__(44)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(24)
	  , toObject    = __webpack_require__(39)
	  , IE_PROTO    = __webpack_require__(33)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(6)
	  , core    = __webpack_require__(8)
	  , fails   = __webpack_require__(17);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(47);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(48), __esModule: true };

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49);
	var $Object = __webpack_require__(8).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(16), 'Object', {defineProperty: __webpack_require__(12).f});

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(51);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(52);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(71);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(53), __esModule: true };

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(54);
	__webpack_require__(66);
	module.exports = __webpack_require__(70).f('iterator');

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(55)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(56)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(31)
	  , defined   = __webpack_require__(28);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(57)
	  , $export        = __webpack_require__(6)
	  , redefine       = __webpack_require__(58)
	  , hide           = __webpack_require__(11)
	  , has            = __webpack_require__(24)
	  , Iterators      = __webpack_require__(59)
	  , $iterCreate    = __webpack_require__(60)
	  , setToStringTag = __webpack_require__(64)
	  , getPrototypeOf = __webpack_require__(43)
	  , ITERATOR       = __webpack_require__(65)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11);

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(61)
	  , descriptor     = __webpack_require__(20)
	  , setToStringTag = __webpack_require__(64)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(11)(IteratorPrototype, __webpack_require__(65)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(13)
	  , dPs         = __webpack_require__(62)
	  , enumBugKeys = __webpack_require__(36)
	  , IE_PROTO    = __webpack_require__(33)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(18)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(63).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(12)
	  , anObject = __webpack_require__(13)
	  , getKeys  = __webpack_require__(22);

	module.exports = __webpack_require__(16) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7).document && document.documentElement;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(12).f
	  , has = __webpack_require__(24)
	  , TAG = __webpack_require__(65)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(34)('wks')
	  , uid        = __webpack_require__(35)
	  , Symbol     = __webpack_require__(7).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(67);
	var global        = __webpack_require__(7)
	  , hide          = __webpack_require__(11)
	  , Iterators     = __webpack_require__(59)
	  , TO_STRING_TAG = __webpack_require__(65)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(68)
	  , step             = __webpack_require__(69)
	  , Iterators        = __webpack_require__(59)
	  , toIObject        = __webpack_require__(25);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(56)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(65);

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(72), __esModule: true };

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(73);
	__webpack_require__(82);
	__webpack_require__(83);
	__webpack_require__(84);
	module.exports = __webpack_require__(8).Symbol;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(7)
	  , has            = __webpack_require__(24)
	  , DESCRIPTORS    = __webpack_require__(16)
	  , $export        = __webpack_require__(6)
	  , redefine       = __webpack_require__(58)
	  , META           = __webpack_require__(74).KEY
	  , $fails         = __webpack_require__(17)
	  , shared         = __webpack_require__(34)
	  , setToStringTag = __webpack_require__(64)
	  , uid            = __webpack_require__(35)
	  , wks            = __webpack_require__(65)
	  , wksExt         = __webpack_require__(70)
	  , wksDefine      = __webpack_require__(75)
	  , keyOf          = __webpack_require__(76)
	  , enumKeys       = __webpack_require__(77)
	  , isArray        = __webpack_require__(78)
	  , anObject       = __webpack_require__(13)
	  , toIObject      = __webpack_require__(25)
	  , toPrimitive    = __webpack_require__(19)
	  , createDesc     = __webpack_require__(20)
	  , _create        = __webpack_require__(61)
	  , gOPNExt        = __webpack_require__(79)
	  , $GOPD          = __webpack_require__(81)
	  , $DP            = __webpack_require__(12)
	  , $keys          = __webpack_require__(22)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(80).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(38).f  = $propertyIsEnumerable;
	  __webpack_require__(37).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(57)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(35)('meta')
	  , isObject = __webpack_require__(14)
	  , has      = __webpack_require__(24)
	  , setDesc  = __webpack_require__(12).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(17)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(7)
	  , core           = __webpack_require__(8)
	  , LIBRARY        = __webpack_require__(57)
	  , wksExt         = __webpack_require__(70)
	  , defineProperty = __webpack_require__(12).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(22)
	  , toIObject = __webpack_require__(25);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(22)
	  , gOPS    = __webpack_require__(37)
	  , pIE     = __webpack_require__(38);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(27);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(25)
	  , gOPN      = __webpack_require__(80).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(23)
	  , hiddenKeys = __webpack_require__(36).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(38)
	  , createDesc     = __webpack_require__(20)
	  , toIObject      = __webpack_require__(25)
	  , toPrimitive    = __webpack_require__(19)
	  , has            = __webpack_require__(24)
	  , IE8_DOM_DEFINE = __webpack_require__(15)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(16) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 82 */
/***/ function(module, exports) {

	

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(75)('asyncIterator');

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(75)('observable');

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(86);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(90);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(51);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(88);
	module.exports = __webpack_require__(8).Object.setPrototypeOf;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(6);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(89).set});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(14)
	  , anObject = __webpack_require__(13);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(9)(Function.call, __webpack_require__(81).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(91), __esModule: true };

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(92);
	var $Object = __webpack_require__(8).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(61)});

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_93__;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ThemeContextTypes = undefined;

	var _defineProperty2 = __webpack_require__(95);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	exports.makeThemeContext = makeThemeContext;
	exports.getThemeContext = getThemeContext;

	var _react = __webpack_require__(93);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CONTEXTKEY = '@@themeable';

	var ThemeContextTypes = exports.ThemeContextTypes = (0, _defineProperty3.default)({}, CONTEXTKEY, _react.PropTypes.object);

	function makeThemeContext(theme) {
	  return (0, _defineProperty3.default)({}, CONTEXTKEY, theme);
	}

	function getThemeContext(context) {
	  return context ? context[CONTEXTKEY] : undefined;
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(47);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _defineProperty2 = __webpack_require__(95);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(97);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _themeable = __webpack_require__(98);

	var _themeable2 = _interopRequireDefault(_themeable);

	var _Avatar = __webpack_require__(132);

	var _Avatar2 = _interopRequireDefault(_Avatar);

	var _Avatar3 = __webpack_require__(133);

	var _Avatar4 = _interopRequireDefault(_Avatar3);

	var _Avatar5 = __webpack_require__(134);

	var _Avatar6 = _interopRequireDefault(_Avatar5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	  An Avatar component
	  ```jsx_example
	  <Avatar userName="Blake Simkins" userImgUrl={avatarImage} />
	  ```
	  When an image url is not supplied the user's initials will display.
	  ```jsx_example
	  <Avatar userName="Kyle Montgomery" />
	  ```
	  The avatar can be `circle` or `rectangle` shaped.
	  ```jsx_example
	  <Avatar userName="Kyle Montgomery" variant="rectangle" />
	  ```
	 **/

	var Avatar = (_dec = (0, _themeable2.default)(_Avatar4.default, _Avatar6.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  (0, _inherits3.default)(Avatar, _Component);

	  function Avatar() {
	    (0, _classCallCheck3.default)(this, Avatar);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Avatar).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Avatar, [{
	    key: 'makeInitialsFromName',
	    value: function makeInitialsFromName() {
	      var name = this.props.userName;
	      if (name.match(/\s+/)) {
	        var names = name.split(/\s+/);
	        return (names[0][0] + names[names.length - 1][0]).toUpperCase();
	      } else {
	        return name[0].toUpperCase();
	      }
	    }
	  }, {
	    key: 'renderInitials',
	    value: function renderInitials() {
	      return _react2.default.createElement(
	        'div',
	        { className: _Avatar2.default.initials },
	        this.makeInitialsFromName()
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classes;

	      var classes = (_classes = {}, (0, _defineProperty3.default)(_classes, _Avatar2.default.root, true), (0, _defineProperty3.default)(_classes, _Avatar2.default[this.props.variant], true), _classes);
	      var style = this.props.userImgUrl ? {
	        backgroundImage: 'url("' + this.props.userImgUrl + '")'
	      } : null;

	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(classes), style: style, 'aria-hidden': 'true' },
	        !this.props.userImgUrl && this.renderInitials()
	      );
	    }
	  }]);
	  return Avatar;
	}(_react.Component), _class2.propTypes = {
	  userName: _react.PropTypes.string.isRequired,
	  userImgUrl: _react.PropTypes.string,
	  variant: _react.PropTypes.oneOf(['circle', 'rectangle'])
	}, _class2.defaultProps = {
	  variant: 'circle'
	}, _temp)) || _class);
	exports.default = Avatar;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(99);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _get2 = __webpack_require__(100);

	var _get3 = _interopRequireDefault(_get2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _symbol = __webpack_require__(71);

	var _symbol2 = _interopRequireDefault(_symbol);

	exports.default = themeable;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _ThemeContextTypes = __webpack_require__(94);

	var _applyThemeVariables = __webpack_require__(104);

	var _applyThemeVariables2 = _interopRequireDefault(_applyThemeVariables);

	var _config = __webpack_require__(105);

	var _config2 = _interopRequireDefault(_config);

	var _shortid = __webpack_require__(114);

	var _shortid2 = _interopRequireDefault(_shortid);

	var _ScopedStyle = __webpack_require__(123);

	var _ScopedStyle2 = _interopRequireDefault(_ScopedStyle);

	var _shallowequal = __webpack_require__(125);

	var _shallowequal2 = _interopRequireDefault(_shallowequal);

	var _safeCloneElement = __webpack_require__(130);

	var _safeCloneElement2 = _interopRequireDefault(_safeCloneElement);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Mark component as themeable.
	 *
	 * Themeable components have a `theme` attribute which can be configured explicitly
	 * via props or passed via context.
	 *
	 */
	// inspired by: https://github.com/andreypopp/rethemeable
	function themeable(themeVariables, themeStyles) {
	  return function (ComposedComponent) {
	    var _class, _temp;

	    var displayName = ComposedComponent.displayName || ComposedComponent.name;
	    var themeKey = (0, _symbol2.default)(displayName);

	    return _temp = _class = function (_ComposedComponent) {
	      (0, _inherits3.default)(_class, _ComposedComponent);

	      function _class(props, context) {
	        (0, _classCallCheck3.default)(this, _class);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, props, context));

	        _this._themeCache = null;
	        _this.themeId = 'Theme__' + _shortid2.default.generate();
	        return _this;
	      }

	      (0, _createClass3.default)(_class, [{
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState, nextContext) {
	          if (!(0, _shallowequal2.default)(nextProps.theme, this.props.theme) || (0, _ThemeContextTypes.getThemeContext)(nextContext) !== (0, _ThemeContextTypes.getThemeContext)(this.context)) {
	            this._themeCache = null;
	          }

	          if ((0, _get3.default)((0, _getPrototypeOf2.default)(_class.prototype), 'componentWillUpdate', this)) {
	            (0, _get3.default)((0, _getPrototypeOf2.default)(_class.prototype), 'componentWillUpdate', this).call(this, nextProps, nextState, nextContext);
	          }
	        }
	      }, {
	        key: 'renderTheme',
	        value: function renderTheme() {
	          return _react2.default.createElement(
	            _ScopedStyle2.default,
	            { scope: '[data-theme-id="' + this.themeId + '"]', key: this.themeId },
	            (0, _applyThemeVariables2.default)(displayName, this.theme, themeStyles)
	          );
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          var componentTree = (0, _get3.default)((0, _getPrototypeOf2.default)(_class.prototype), 'render', this).call(this);
	          var _componentTree$props = componentTree.props;
	          var children = _componentTree$props.children;
	          var props = (0, _objectWithoutProperties3.default)(_componentTree$props, ['children']);

	          props['data-theme-id'] = this.themeId;
	          return (0, _safeCloneElement2.default)(componentTree, props, [this.renderTheme()].concat(_react2.default.Children.toArray(children)));
	        }
	      }, {
	        key: 'theme',
	        get: function get() {
	          if (this._themeCache !== null) {
	            return this._themeCache;
	          }

	          var theme = this.props.theme;


	          if (!theme) {
	            var themeUniverse = (0, _ThemeContextTypes.getThemeContext)(this.context);
	            theme = themeUniverse && themeUniverse[themeKey];
	          }

	          if (themeVariables) {
	            var defaults = themeVariables(_config2.default);
	            theme = (0, _extends3.default)({}, defaults, theme);
	          }

	          if (!theme) {
	            theme = {};
	          }

	          this._themeCache = theme;

	          return theme;
	        }
	      }]);
	      return _class;
	    }(ComposedComponent), _class.displayName = displayName, _class.theme = themeKey, _class.contextTypes = (0, _extends3.default)({}, ComposedComponent.contextTypes, _ThemeContextTypes.ThemeContextTypes), _class.propTypes = (0, _extends3.default)({}, ComposedComponent.propTypes, {
	      theme: _react.PropTypes.object
	    }), _temp;
	  };
	}

/***/ },
/* 99 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _getOwnPropertyDescriptor = __webpack_require__(101);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;
	  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

	  if (desc === undefined) {
	    var parent = (0, _getPrototypeOf2.default)(object);

	    if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;

	    if (getter === undefined) {
	      return undefined;
	    }

	    return getter.call(receiver);
	  }
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(102), __esModule: true };

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(103);
	var $Object = __webpack_require__(8).Object;
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $Object.getOwnPropertyDescriptor(it, key);
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(25)
	  , $getOwnPropertyDescriptor = __webpack_require__(81).f;

	__webpack_require__(44)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 104 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = applyThemeVariabes;
	/**
	 * Replaces strings that match "map({componentName}, {variableName})" with the variable value in the `styles` param
	 *
	 */
	function applyThemeVariabes(componentName, variables, styles) {
	  var variableMatcher = new RegExp('map\\(' + componentName + ',\\s*(.+?)\\)', 'g');
	  var matches = [];
	  var css = styles.toString();

	  while ((matches = variableMatcher.exec(styles)) !== null) {
	    var variable = matches[1];

	    if (variable && variables[variable]) {
	      css = css.replace(matches[0], variables[variable], 'g');
	    } else {
	      throw new Error('Undefined theme variable: ' + variable);
	    }
	  }

	  return css;
	}

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _freeze = __webpack_require__(106);

	var _freeze2 = _interopRequireDefault(_freeze);

	var _borders = __webpack_require__(109);

	var _borders2 = _interopRequireDefault(_borders);

	var _breakpoints = __webpack_require__(110);

	var _breakpoints2 = _interopRequireDefault(_breakpoints);

	var _colors = __webpack_require__(111);

	var _colors2 = _interopRequireDefault(_colors);

	var _typography = __webpack_require__(112);

	var _typography2 = _interopRequireDefault(_typography);

	var _spacing = __webpack_require__(113);

	var _spacing2 = _interopRequireDefault(_spacing);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _freeze2.default)({
	  borders: _borders2.default,
	  breakpoints: _breakpoints2.default,
	  colors: _colors2.default,
	  typography: _typography2.default,
	  spacing: _spacing2.default
	});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(108);
	module.exports = __webpack_require__(8).Object.freeze;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(14)
	  , meta     = __webpack_require__(74).onFreeze;

	__webpack_require__(44)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _freeze = __webpack_require__(106);

	var _freeze2 = _interopRequireDefault(_freeze);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// use for consistency between buttons, text inputs, etc.

	exports.default = (0, _freeze2.default)({
	  borderRadiusSmall: '0.125rem',
	  borderRadiusMedium: '0.25rem',
	  borderRadiusLarge: '0.5rem',
	  borderWidthDefault: '1px',
	  borderStyleDefault: 'solid'
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _freeze = __webpack_require__(106);

	var _freeze2 = _interopRequireDefault(_freeze);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// define different layouts for different screen sizes

	exports.default = (0, _freeze2.default)({
	  tablet: '768px',
	  desktop: '992px',
	  wide: '1200px'
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _freeze = __webpack_require__(106);

	var _freeze2 = _interopRequireDefault(_freeze);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _freeze2.default)({
	  /*
	    Note: Inverse colors should meet 4.5:1 requirements with
	    when used as a text color on colorBgInverse, and when used as
	    a background color with colorText.
	  
	    Accent colors don't necessarily meet contrast requirements when
	    used as a background or text.
	  
	    This default theme is configured for a light background with
	    dark text, but this can be changed to the inverse.
	  */

	  colorBrand: '#005e8e',
	  colorBrandAccent: '#0073ac',
	  colorBrandInverse: '#67ccff',

	  colorSuccess: '#004b0b',
	  colorSuccessAccent: '#008a14',
	  colorSuccessInverse: '#5eda92',

	  colorAction: '#8c307c',
	  colorActionAccent: '#a23891',
	  colorActionInverse: '#ecc7e6',

	  colorDanger: '#892e2f',
	  colorDangerAccent: '#a03536',
	  colorDangerInverse: '#f4b1aa',
	  colorDangerTransparent: 'rgba(137, 46, 47, 0.5)',

	  colorAlert: '#624203',
	  colorAlertAccent: '#9e6b05',
	  colorAlertInverse: '#f9bd44',

	  colorFocus: '#005e8e',
	  colorFocusAccent: '#0073ac',
	  colorFocusInverse: '#fff',
	  colorFocusTransparent: 'rgba(0, 115, 172, 0.5)',

	  colorNeutral: '#4c4c4c',
	  colorNeutralAccent: '#999',
	  colorNeutralMedium: '#d9d9d9',
	  colorNeutralInverse: '#e6e6e6',

	  colorNeutralTransparent: 'rgba(255, 255, 255, 0.35)',
	  colorNeutralInverseTransparent: 'rgba(0, 0, 0, 0.3)',

	  /*
	    Default primary and secondary text colors should meet 4.5:1 contrast
	    with colorBackground, and Inverse text colors should meet 4.5:1
	    with colorBackgroundInverse.
	  */

	  colorText: '#333',
	  colorTextInverse: '#fff',

	  colorTextSecondary: '#4c4c4c',
	  colorTextSecondaryInverse: '#d6d6d6',

	  colorBackground: '#fff',
	  colorBackgroundInverse: '#333'
	});

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _freeze = __webpack_require__(106);

	var _freeze2 = _interopRequireDefault(_freeze);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var base = '"Open Sans", sans-serif';
	var light = '"Open Sans Light"';
	var bold = '"Open Sans Bold"';

	exports.default = (0, _freeze2.default)({
	  fontFamilyBase: base,
	  fontFamilyBold: [bold, base].join(', '),
	  fontFamilyLight: [light, base].join(', '),
	  fontFamilyMonospace: 'Menlo, Consolas, Monaco, "Andale Mono", monospace',

	  fontSizeExtraSmall: '0.75rem',
	  fontSizeSmall: '0.875rem',
	  fontSizeMedium: '1rem',
	  fontSizeLarge: '1.125rem',
	  fontSizeExtraLarge: '1.75rem',

	  fontWeightBold: 500,
	  fontWeightNormal: 300,
	  fontWeightLight: 200,

	  lineHeightBase: 1.4,
	  lineHeightFit: 1.1,
	  lineHeightCondensed: 1.25,
	  lineHeightDouble: 2
	});

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _freeze = __webpack_require__(106);

	var _freeze2 = _interopRequireDefault(_freeze);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _freeze2.default)({
	  spacingXXSmall: '0.125rem',
	  spacingExtraSmall: '0.25rem',
	  spacingSmall: '0.5rem',
	  spacingMedium: '1rem',
	  spacingLarge: '2rem',
	  spacingExtraLarge: '4rem'
	});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	module.exports = __webpack_require__(115);


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var alphabet = __webpack_require__(116);
	var encode = __webpack_require__(118);
	var decode = __webpack_require__(120);
	var isValid = __webpack_require__(121);

	// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
	// This number should be updated every year or so to keep the generated id short.
	// To regenerate `new Date() - 0` and bump the version. Always bump the version!
	var REDUCE_TIME = 1459707606518;

	// don't change unless we change the algos or REDUCE_TIME
	// must be an integer and less than 16
	var version = 6;

	// if you are using cluster or multiple servers use this to make each instance
	// has a unique value for worker
	// Note: I don't know if this is automatically set when using third
	// party cluster solutions such as pm2.
	var clusterWorkerId = __webpack_require__(122) || 0;

	// Counter is used when shortid is called multiple times in one second.
	var counter;

	// Remember the last time shortid was called in case counter is needed.
	var previousSeconds;

	/**
	 * Generate unique id
	 * Returns string id
	 */
	function generate() {

	    var str = '';

	    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

	    if (seconds === previousSeconds) {
	        counter++;
	    } else {
	        counter = 0;
	        previousSeconds = seconds;
	    }

	    str = str + encode(alphabet.lookup, version);
	    str = str + encode(alphabet.lookup, clusterWorkerId);
	    if (counter > 0) {
	        str = str + encode(alphabet.lookup, counter);
	    }
	    str = str + encode(alphabet.lookup, seconds);

	    return str;
	}


	/**
	 * Set the seed.
	 * Highly recommended if you don't want people to try to figure out your id schema.
	 * exposed as shortid.seed(int)
	 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
	 */
	function seed(seedValue) {
	    alphabet.seed(seedValue);
	    return module.exports;
	}

	/**
	 * Set the cluster worker or machine id
	 * exposed as shortid.worker(int)
	 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
	 * returns shortid module so it can be chained.
	 */
	function worker(workerId) {
	    clusterWorkerId = workerId;
	    return module.exports;
	}

	/**
	 *
	 * sets new characters to use in the alphabet
	 * returns the shuffled alphabet
	 */
	function characters(newCharacters) {
	    if (newCharacters !== undefined) {
	        alphabet.characters(newCharacters);
	    }

	    return alphabet.shuffled();
	}


	// Export all other functions as properties of the generate function
	module.exports = generate;
	module.exports.generate = generate;
	module.exports.seed = seed;
	module.exports.worker = worker;
	module.exports.characters = characters;
	module.exports.decode = decode;
	module.exports.isValid = isValid;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var randomFromSeed = __webpack_require__(117);

	var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
	var alphabet;
	var previousSeed;

	var shuffled;

	function reset() {
	    shuffled = false;
	}

	function setCharacters(_alphabet_) {
	    if (!_alphabet_) {
	        if (alphabet !== ORIGINAL) {
	            alphabet = ORIGINAL;
	            reset();
	        }
	        return;
	    }

	    if (_alphabet_ === alphabet) {
	        return;
	    }

	    if (_alphabet_.length !== ORIGINAL.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
	    }

	    var unique = _alphabet_.split('').filter(function(item, ind, arr){
	       return ind !== arr.lastIndexOf(item);
	    });

	    if (unique.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
	    }

	    alphabet = _alphabet_;
	    reset();
	}

	function characters(_alphabet_) {
	    setCharacters(_alphabet_);
	    return alphabet;
	}

	function setSeed(seed) {
	    randomFromSeed.seed(seed);
	    if (previousSeed !== seed) {
	        reset();
	        previousSeed = seed;
	    }
	}

	function shuffle() {
	    if (!alphabet) {
	        setCharacters(ORIGINAL);
	    }

	    var sourceArray = alphabet.split('');
	    var targetArray = [];
	    var r = randomFromSeed.nextValue();
	    var characterIndex;

	    while (sourceArray.length > 0) {
	        r = randomFromSeed.nextValue();
	        characterIndex = Math.floor(r * sourceArray.length);
	        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
	    }
	    return targetArray.join('');
	}

	function getShuffled() {
	    if (shuffled) {
	        return shuffled;
	    }
	    shuffled = shuffle();
	    return shuffled;
	}

	/**
	 * lookup shuffled letter
	 * @param index
	 * @returns {string}
	 */
	function lookup(index) {
	    var alphabetShuffled = getShuffled();
	    return alphabetShuffled[index];
	}

	module.exports = {
	    characters: characters,
	    seed: setSeed,
	    lookup: lookup,
	    shuffled: getShuffled
	};


/***/ },
/* 117 */
/***/ function(module, exports) {

	'use strict';

	// Found this seed-based random generator somewhere
	// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

	var seed = 1;

	/**
	 * return a random number based on a seed
	 * @param seed
	 * @returns {number}
	 */
	function getNextValue() {
	    seed = (seed * 9301 + 49297) % 233280;
	    return seed/(233280.0);
	}

	function setSeed(_seed_) {
	    seed = _seed_;
	}

	module.exports = {
	    nextValue: getNextValue,
	    seed: setSeed
	};


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var randomByte = __webpack_require__(119);

	function encode(lookup, number) {
	    var loopCounter = 0;
	    var done;

	    var str = '';

	    while (!done) {
	        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() );
	        done = number < (Math.pow(16, loopCounter + 1 ) );
	        loopCounter++;
	    }
	    return str;
	}

	module.exports = encode;


/***/ },
/* 119 */
/***/ function(module, exports) {

	'use strict';

	var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

	function randomByte() {
	    if (!crypto || !crypto.getRandomValues) {
	        return Math.floor(Math.random() * 256) & 0x30;
	    }
	    var dest = new Uint8Array(1);
	    crypto.getRandomValues(dest);
	    return dest[0] & 0x30;
	}

	module.exports = randomByte;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(116);

	/**
	 * Decode the id to get the version and worker
	 * Mainly for debugging and testing.
	 * @param id - the shortid-generated id.
	 */
	function decode(id) {
	    var characters = alphabet.shuffled();
	    return {
	        version: characters.indexOf(id.substr(0, 1)) & 0x0f,
	        worker: characters.indexOf(id.substr(1, 1)) & 0x0f
	    };
	}

	module.exports = decode;


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(116);

	function isShortId(id) {
	    if (!id || typeof id !== 'string' || id.length < 6 ) {
	        return false;
	    }

	    var characters = alphabet.characters();
	    var len = id.length;
	    for(var i = 0; i < len;i++) {
	        if (characters.indexOf(id[i]) === -1) {
	            return false;
	        }
	    }
	    return true;
	}

	module.exports = isShortId;


/***/ },
/* 122 */
/***/ function(module, exports) {

	'use strict';

	module.exports = 0;


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(124);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _shallowequal = __webpack_require__(125);

	var _shallowequal2 = _interopRequireDefault(_shallowequal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ScopedStyle = (_temp = _class = function (_Component) {
	  (0, _inherits3.default)(ScopedStyle, _Component);

	  function ScopedStyle() {
	    (0, _classCallCheck3.default)(this, ScopedStyle);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ScopedStyle).apply(this, arguments));
	  }

	  (0, _createClass3.default)(ScopedStyle, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.polyfillScopedStyle();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (prevProps.scope !== this.props.scope || !(0, _shallowequal2.default)(prevProps.children, this.props.children)) {
	        this.polyfillScopedStyle();
	      }
	    }
	  }, {
	    key: 'polyfillScopedStyle',
	    value: function polyfillScopedStyle() {
	      var styleNode = _reactDom2.default.findDOMNode(this);

	      if (styleNode.scoped) {
	        return; // if scoped styles are supported, we can just leave the styles alone
	      }

	      var parentSheet = styleNode.sheet || styleNode.getSheet;
	      var allRules = parentSheet.cssRules || parentSheet.rules;
	      var scope = this.props.scope;

	      var index = allRules.length || 0;

	      // we need to loop through the rules backwards because IE only allows inserting rules at the end
	      while (index--) {
	        var rule = allRules[index];
	        processCssRules(rule, index);
	      }

	      function processCssRules(parentRule, index) {
	        var allRules = parentRule.cssRules || [parentRule];
	        var i = allRules.length || 0;
	        var ruleIndex = parentRule.cssRules ? i : index;
	        var selector = '';

	        // we need to loop through the rules backwards because IE only allows inserting rules at the end
	        while (i--) {
	          var _rule = allRules[i];
	          if (_rule.selectorText) {
	            var parts = _rule.selectorText.split(',');

	            // add the scope prop to the selectors to scope the rules
	            parts = parts.map(function (part) {
	              return scope + part.trim() + ', ' + scope + ' ' + part;
	            });
	            selector = parts.join(', ');
	            selector = selector.replace(/[\ ]+:root/gi, '');

	            try {
	              _rule.selectorText = selector;
	            } catch (e) {}
	            // catch errors for IE


	            // handle IE:
	            if (_rule.selectorText.toLowerCase() !== selector && (!_rule.type || _rule.type === 1) && parentRule.type !== 4) {
	              var sheet = parentRule.cssRules ? parentRule : parentSheet;
	              var styleRule = _rule.style.cssText;

	              if (styleRule) {
	                // IE doesn't allow inserting of '' as a styleRule
	                sheet.deleteRule(ruleIndex);
	                sheet.insertRule(selector + '{' + styleRule + '}', ruleIndex);
	              }
	            }
	          } else if (_rule.cssRules) {
	            processCssRules(_rule, ruleIndex);
	          }
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      // add scoped attribute for FF https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style#A_scoped_stylesheet
	      return _react2.default.createElement('style', { scoped: true, dangerouslySetInnerHTML: { __html: this.props.children } });
	    }
	  }]);
	  return ScopedStyle;
	}(_react.Component), _class.propTypes = {
	  /**
	  *  parent node id or some other selector that you want to use to scope the css
	  */
	  scope: _react.PropTypes.string.isRequired,
	  /**
	  * css that you want to scope to children of the parent node
	  */
	  children: _react.PropTypes.node
	}, _temp);
	exports.default = ScopedStyle;

/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_124__;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var fetchKeys = __webpack_require__(126);

	module.exports = function shallowEqual(objA, objB, compare, compareContext) {

	    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

	    if (ret !== void 0) {
	        return !!ret;
	    }

	    if (objA === objB) {
	        return true;
	    }

	    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	        return false;
	    }

	    var keysA = fetchKeys(objA);
	    var keysB = fetchKeys(objB);

	    var len = keysA.length;
	    if (len !== keysB.length) {
	        return false;
	    }

	    compareContext = compareContext || null;

	    // Test for A's keys different from B.
	    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	    for (var i = 0; i < len; i++) {
	        var key = keysA[i];
	        if (!bHasOwnProperty(key)) {
	            return false;
	        }
	        var valueA = objA[key];
	        var valueB = objB[key];

	        var _ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
	        if (_ret === false || _ret === void 0 && valueA !== valueB) {
	            return false;
	        }
	    }

	    return true;
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(127),
	    isArguments = __webpack_require__(128),
	    isArray = __webpack_require__(129);

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;

	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));

	  var index = -1,
	      result = [];

	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;

	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;

	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keys;


/***/ },
/* 127 */
/***/ function(module, exports) {

	/**
	 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = getNative;


/***/ },
/* 128 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.8 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isArguments;


/***/ },
/* 129 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = isArray;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	exports.default = safeCloneElement;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(131);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function safeCloneElement(element, config) {
	  var cloneRef = config.ref;
	  var originalRef = element.ref;
	  var originalRefIsAFunction = typeof originalRef === 'function';

	  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    children[_key - 2] = arguments[_key];
	  }

	  if (originalRef == null || cloneRef == null) {
	    return _react2.default.cloneElement.apply(_react2.default, [element, config].concat(children));
	  }

	  if (originalRefIsAFunction) {
	    return _react2.default.cloneElement.apply(_react2.default, [element, config].concat(children));
	  } else {
	    (0, _invariant2.default)(originalRefIsAFunction, 'Cloning an element with a ref that will be overwritten because it ' + 'is not a function. Use a composable callback-style ref instead. ' + 'Ignoring ref: ' + originalRef);
	  }

	  return _react2.default.cloneElement.apply(_react2.default, [element, (0, _extends3.default)({}, config, {
	    ref: function ref(component) {
	      cloneRef(component);
	      originalRef(component);
	    }
	  })].concat(children));
	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (false) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 132 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-Avatar__root","initials":"ic-0-9-2-Avatar__initials","circle":"ic-0-9-2-Avatar__circle","rectangle":"ic-0-9-2-Avatar__rectangle"};

/***/ },
/* 133 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var typography = _ref.typography;
	  var colors = _ref.colors;

	  return {
	    fontFamily: typography.fontFamilyBase,
	    letterSpacing: '0.03125em',
	    textColor: colors.colorTextInverse,
	    backgroundColor: colors.colorBrand
	  };
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(135);
	module.exports = __webpack_require__(136);

/***/ },
/* 135 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"initials":"ic-0-9-2-Avatar__initials"};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	if (false) {
	  module.hot.accept([]);
	}
	module.exports = ".ic-0-9-2-Avatar__initials {\n  font-family: map(Avatar, fontFamily);\n  color: map(Avatar, textColor);\n  background-color: map(Avatar, backgroundColor);\n  letter-spacing: map(Avatar, letterSpacing);\n}\n"

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(95);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _objectWithoutProperties2 = __webpack_require__(99);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class, _class2, _temp2;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(124);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(97);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _themeable = __webpack_require__(98);

	var _themeable2 = _interopRequireDefault(_themeable);

	var _keycode = __webpack_require__(138);

	var _keycode2 = _interopRequireDefault(_keycode);

	var _Button = __webpack_require__(139);

	var _Button2 = _interopRequireDefault(_Button);

	var _Button3 = __webpack_require__(140);

	var _Button4 = _interopRequireDefault(_Button3);

	var _Button5 = __webpack_require__(146);

	var _Button6 = _interopRequireDefault(_Button5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	  The default button component.
	  ```jsx_example
	  <Button>OK</Button>
	  ```
	  The default button in its disabled state.
	  ```jsx_example
	  <Button disabled>OK</Button>
	  ```

	  A button with an href passed outputs a link element styled like a button.
	  ```jsx_example
	  <Button href="example.html">Click Here</Button>
	  ```

	  Button variants for different contexts using the `variant` prop.
	  ```jsx_example
	  <div>
	    <Button variant='primary'>Primary button</Button>&nbsp;
	    <Button variant='success'>Success button</Button>&nbsp;
	    <Button variant='alert'>Alert button</Button>&nbsp;
	    <Button variant='danger'>Danger button</Button>&nbsp;
	    <Button variant='link'>Link button</Button>
	  </div>
	  ```

	  Change the `size` prop to `small` or `large` to produce smaller or larger buttons than the default.
	  ```jsx_example
	  <div>
	    <Button size="small">Small-size button</Button>&nbsp;
	    <Button>Default-size button</Button>&nbsp;
	    <Button size="large">Large-size button</Button>
	  </div>
	  ```

	  Set the `isBlock` prop to `true` if you want the button to display as a block-level element.
	  ```jsx_example
	  <Button isBlock={true}>Block-level button</Button>
	  ```
	**/

	var Button = (_dec = (0, _themeable2.default)(_Button4.default, _Button6.default), _dec(_class = (_temp2 = _class2 = function (_Component) {
	  (0, _inherits3.default)(Button, _Component);

	  function Button() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, Button);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Button)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClick = function (e) {
	      var _this$props = _this.props;
	      var disabled = _this$props.disabled;
	      var onClick = _this$props.onClick;


	      if (disabled) {
	        e.preventDefault();
	        e.stopPropagation();
	      } else if (typeof onClick === 'function') {
	        onClick(e);
	      }
	    }, _this.handleKeyDown = function (e) {
	      var _this$props2 = _this.props;
	      var disabled = _this$props2.disabled;
	      var onClick = _this$props2.onClick;
	      var href = _this$props2.href;

	      // make link behave like a button

	      if (_this.isLink() && e.keyCode === _keycode2.default.codes.space) {
	        if (disabled) {
	          e.preventDefault();
	          e.stopPropagation();
	        } else if (typeof onClick === 'function') {
	          e.preventDefault();
	          onClick(e);
	        } else {
	          window.location.href = href;
	        }
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(Button, [{
	    key: 'isLink',
	    value: function isLink() {
	      var href = this.props.href;

	      return href && href !== '#';
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      _reactDom2.default.findDOMNode(this).focus();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classes;

	      /* eslint-disable no-unused-vars */
	      var _props = this.props;
	      var children = _props.children;
	      var variant = _props.variant;
	      var size = _props.size;
	      var isBlock = _props.isBlock;
	      var describedBy = _props.describedBy;
	      var disabled = _props.disabled;
	      var onClick = _props.onClick;
	      var href = _props.href;
	      var props = (0, _objectWithoutProperties3.default)(_props, ['children', 'variant', 'size', 'isBlock', 'describedBy', 'disabled', 'onClick', 'href']);
	      /* eslint-enable no-unused-vars */

	      var classes = (_classes = {}, (0, _defineProperty3.default)(_classes, _Button2.default.root, true), (0, _defineProperty3.default)(_classes, _Button2.default[variant], true), (0, _defineProperty3.default)(_classes, _Button2.default[size], size), (0, _defineProperty3.default)(_classes, _Button2.default['is-block'], isBlock), _classes);

	      if (this.isLink()) {
	        return _react2.default.createElement(
	          'a',
	          (0, _extends3.default)({
	            href: href,
	            className: (0, _classnames2.default)(classes),
	            'aria-describedby': describedBy,
	            'aria-disabled': disabled ? 'true' : null,
	            onClick: this.handleClick,
	            onKeyDown: this.handleKeyDown
	          }, props),
	          children
	        );
	      } else {
	        return _react2.default.createElement(
	          'button',
	          (0, _extends3.default)({
	            className: (0, _classnames2.default)(classes),
	            'aria-disabled': disabled ? 'true' : null,
	            'aria-describedby': describedBy,
	            onClick: this.handleClick
	          }, props),
	          children
	        );
	      }
	    }
	  }]);
	  return Button;
	}(_react.Component), _class2.propTypes = {
	  children: _react.PropTypes.node.isRequired,
	  type: _react.PropTypes.oneOf(['button', 'submit', 'reset']),
	  variant: _react.PropTypes.oneOf(['default', 'primary', 'success', 'alert', 'danger', 'link']),
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
	  isBlock: _react.PropTypes.bool,
	  describedBy: _react.PropTypes.string,
	  disabled: _react.PropTypes.bool,
	  href: _react.PropTypes.string,
	  onClick: _react.PropTypes.func
	}, _class2.defaultProps = {
	  type: 'button',
	  variant: 'default',
	  size: 'medium'
	}, _temp2)) || _class);
	exports.default = Button;

/***/ },
/* 138 */
/***/ function(module, exports) {

	// Source: http://jsfiddle.net/vWx8V/
	// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

	/**
	 * Conenience method returns corresponding value for given keyName or keyCode.
	 *
	 * @param {Mixed} keyCode {Number} or keyName {String}
	 * @return {Mixed}
	 * @api public
	 */

	exports = module.exports = function(searchInput) {
	  // Keyboard Events
	  if (searchInput && 'object' === typeof searchInput) {
	    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
	    if (hasKeyCode) searchInput = hasKeyCode
	  }

	  // Numbers
	  if ('number' === typeof searchInput) return names[searchInput]

	  // Everything else (cast to string)
	  var search = String(searchInput)

	  // check codes
	  var foundNamedKey = codes[search.toLowerCase()]
	  if (foundNamedKey) return foundNamedKey

	  // check aliases
	  var foundNamedKey = aliases[search.toLowerCase()]
	  if (foundNamedKey) return foundNamedKey

	  // weird character?
	  if (search.length === 1) return search.charCodeAt(0)

	  return undefined
	}

	/**
	 * Get by name
	 *
	 *   exports.code['enter'] // => 13
	 */

	var codes = exports.code = exports.codes = {
	  'backspace': 8,
	  'tab': 9,
	  'enter': 13,
	  'shift': 16,
	  'ctrl': 17,
	  'alt': 18,
	  'pause/break': 19,
	  'caps lock': 20,
	  'esc': 27,
	  'space': 32,
	  'page up': 33,
	  'page down': 34,
	  'end': 35,
	  'home': 36,
	  'left': 37,
	  'up': 38,
	  'right': 39,
	  'down': 40,
	  'insert': 45,
	  'delete': 46,
	  'command': 91,
	  'right click': 93,
	  'numpad *': 106,
	  'numpad +': 107,
	  'numpad -': 109,
	  'numpad .': 110,
	  'numpad /': 111,
	  'num lock': 144,
	  'scroll lock': 145,
	  'my computer': 182,
	  'my calculator': 183,
	  ';': 186,
	  '=': 187,
	  ',': 188,
	  '-': 189,
	  '.': 190,
	  '/': 191,
	  '`': 192,
	  '[': 219,
	  '\\': 220,
	  ']': 221,
	  "'": 222
	}

	// Helper aliases

	var aliases = exports.aliases = {
	  'windows': 91,
	  '⇧': 16,
	  '⌥': 18,
	  '⌃': 17,
	  '⌘': 91,
	  'ctl': 17,
	  'control': 17,
	  'option': 18,
	  'pause': 19,
	  'break': 19,
	  'caps': 20,
	  'return': 13,
	  'escape': 27,
	  'spc': 32,
	  'pgup': 33,
	  'pgdn': 33,
	  'ins': 45,
	  'del': 46,
	  'cmd': 91
	}


	/*!
	 * Programatically add the following
	 */

	// lower case chars
	for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32

	// numbers
	for (var i = 48; i < 58; i++) codes[i - 48] = i

	// function keys
	for (i = 1; i < 13; i++) codes['f'+i] = i + 111

	// numpad keys
	for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96

	/**
	 * Get by code
	 *
	 *   exports.name[13] // => 'Enter'
	 */

	var names = exports.names = exports.title = {} // title for backward compat

	// Create reverse mapping
	for (i in codes) names[codes[i]] = i

	// Add aliases
	for (var alias in aliases) {
	  codes[alias] = aliases[alias]
	}


/***/ },
/* 139 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-Button__root","default":"ic-0-9-2-Button__default","primary":"ic-0-9-2-Button__primary","success":"ic-0-9-2-Button__success","alert":"ic-0-9-2-Button__alert","danger":"ic-0-9-2-Button__danger","link":"ic-0-9-2-Button__link","small":"ic-0-9-2-Button__small","medium":"ic-0-9-2-Button__medium","large":"ic-0-9-2-Button__large","is-block":"ic-0-9-2-Button__is-block"};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(95);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	exports.default = function (_ref) {
	  var borders = _ref.borders;
	  var colors = _ref.colors;
	  var typography = _ref.typography;

	  var _default = makeVariables('default', colors.colorNeutralInverse, colors.colorText, colors.colorFocusAccent);

	  var _primary = makeVariables('primary', colors.colorBrand, colors.colorTextInverse, colors.colorFocusInverse);

	  var _success = makeVariables('success', colors.colorSuccess, colors.colorTextInverse, colors.colorFocusInverse);

	  var _alert = makeVariables('alert', colors.colorAlert, colors.colorTextInverse, colors.colorFocusInverse);

	  var _danger = makeVariables('danger', colors.colorDanger, colors.colorTextInverse, colors.colorFocusInverse);

	  var _base = {
	    fontFamily: typography.fontFamilyLight,
	    borderRadius: borders.borderRadiusMedium,
	    borderWidth: borders.borderWidthDefault,
	    borderStyle: borders.borderStyleDefault,
	    textTransform: 'none',

	    linkTextColor: colors.colorBrand,
	    linkFocusOutlineColor: colors.colorFocusAccent,
	    linkTextDecoration: 'none',
	    linkTextDecorationHover: 'underline',
	    linkTextDecorationFocus: 'underline',
	    linkBorderColor: 'transparent'
	  };

	  return (0, _extends3.default)({}, _base, _default, _primary, _success, _alert, _danger);
	};

	var _color = __webpack_require__(141);

	var _color2 = _interopRequireDefault(_color);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function darken(color, percent) {
	  return (0, _color2.default)(color).darken(percent).hexString();
	}

	function makeVariables(style, mainColor, textColor, focusOutlineColor) {
	  var _ref2;

	  return _ref2 = {}, (0, _defineProperty3.default)(_ref2, style + 'Background', mainColor), (0, _defineProperty3.default)(_ref2, style + 'BorderColor', darken(mainColor, 0.2)), (0, _defineProperty3.default)(_ref2, style + 'TextColor', textColor), (0, _defineProperty3.default)(_ref2, style + 'BackgroundHover', darken(mainColor, 0.1)), (0, _defineProperty3.default)(_ref2, style + 'InnerBorderColor', darken(mainColor, 0.35)), (0, _defineProperty3.default)(_ref2, style + 'FocusOutlineColor', focusOutlineColor), _ref2;
	}

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	/* MIT license */
	var convert = __webpack_require__(142);
	var string = __webpack_require__(144);

	var Color = function (obj) {
		if (obj instanceof Color) {
			return obj;
		}
		if (!(this instanceof Color)) {
			return new Color(obj);
		}

		this.values = {
			rgb: [0, 0, 0],
			hsl: [0, 0, 0],
			hsv: [0, 0, 0],
			hwb: [0, 0, 0],
			cmyk: [0, 0, 0, 0],
			alpha: 1
		};

		// parse Color() argument
		var vals;
		if (typeof obj === 'string') {
			vals = string.getRgba(obj);
			if (vals) {
				this.setValues('rgb', vals);
			} else if (vals = string.getHsla(obj)) {
				this.setValues('hsl', vals);
			} else if (vals = string.getHwb(obj)) {
				this.setValues('hwb', vals);
			} else {
				throw new Error('Unable to parse color from string "' + obj + '"');
			}
		} else if (typeof obj === 'object') {
			vals = obj;
			if (vals.r !== undefined || vals.red !== undefined) {
				this.setValues('rgb', vals);
			} else if (vals.l !== undefined || vals.lightness !== undefined) {
				this.setValues('hsl', vals);
			} else if (vals.v !== undefined || vals.value !== undefined) {
				this.setValues('hsv', vals);
			} else if (vals.w !== undefined || vals.whiteness !== undefined) {
				this.setValues('hwb', vals);
			} else if (vals.c !== undefined || vals.cyan !== undefined) {
				this.setValues('cmyk', vals);
			} else {
				throw new Error('Unable to parse color from object ' + JSON.stringify(obj));
			}
		}
	};

	Color.prototype = {
		rgb: function () {
			return this.setSpace('rgb', arguments);
		},
		hsl: function () {
			return this.setSpace('hsl', arguments);
		},
		hsv: function () {
			return this.setSpace('hsv', arguments);
		},
		hwb: function () {
			return this.setSpace('hwb', arguments);
		},
		cmyk: function () {
			return this.setSpace('cmyk', arguments);
		},

		rgbArray: function () {
			return this.values.rgb;
		},
		hslArray: function () {
			return this.values.hsl;
		},
		hsvArray: function () {
			return this.values.hsv;
		},
		hwbArray: function () {
			if (this.values.alpha !== 1) {
				return this.values.hwb.concat([this.values.alpha]);
			}
			return this.values.hwb;
		},
		cmykArray: function () {
			return this.values.cmyk;
		},
		rgbaArray: function () {
			var rgb = this.values.rgb;
			return rgb.concat([this.values.alpha]);
		},
		hslaArray: function () {
			var hsl = this.values.hsl;
			return hsl.concat([this.values.alpha]);
		},
		alpha: function (val) {
			if (val === undefined) {
				return this.values.alpha;
			}
			this.setValues('alpha', val);
			return this;
		},

		red: function (val) {
			return this.setChannel('rgb', 0, val);
		},
		green: function (val) {
			return this.setChannel('rgb', 1, val);
		},
		blue: function (val) {
			return this.setChannel('rgb', 2, val);
		},
		hue: function (val) {
			if (val) {
				val %= 360;
				val = val < 0 ? 360 + val : val;
			}
			return this.setChannel('hsl', 0, val);
		},
		saturation: function (val) {
			return this.setChannel('hsl', 1, val);
		},
		lightness: function (val) {
			return this.setChannel('hsl', 2, val);
		},
		saturationv: function (val) {
			return this.setChannel('hsv', 1, val);
		},
		whiteness: function (val) {
			return this.setChannel('hwb', 1, val);
		},
		blackness: function (val) {
			return this.setChannel('hwb', 2, val);
		},
		value: function (val) {
			return this.setChannel('hsv', 2, val);
		},
		cyan: function (val) {
			return this.setChannel('cmyk', 0, val);
		},
		magenta: function (val) {
			return this.setChannel('cmyk', 1, val);
		},
		yellow: function (val) {
			return this.setChannel('cmyk', 2, val);
		},
		black: function (val) {
			return this.setChannel('cmyk', 3, val);
		},

		hexString: function () {
			return string.hexString(this.values.rgb);
		},
		rgbString: function () {
			return string.rgbString(this.values.rgb, this.values.alpha);
		},
		rgbaString: function () {
			return string.rgbaString(this.values.rgb, this.values.alpha);
		},
		percentString: function () {
			return string.percentString(this.values.rgb, this.values.alpha);
		},
		hslString: function () {
			return string.hslString(this.values.hsl, this.values.alpha);
		},
		hslaString: function () {
			return string.hslaString(this.values.hsl, this.values.alpha);
		},
		hwbString: function () {
			return string.hwbString(this.values.hwb, this.values.alpha);
		},
		keyword: function () {
			return string.keyword(this.values.rgb, this.values.alpha);
		},

		rgbNumber: function () {
			return (this.values.rgb[0] << 16) | (this.values.rgb[1] << 8) | this.values.rgb[2];
		},

		luminosity: function () {
			// http://www.w3.org/TR/WCAG20/#relativeluminancedef
			var rgb = this.values.rgb;
			var lum = [];
			for (var i = 0; i < rgb.length; i++) {
				var chan = rgb[i] / 255;
				lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
			}
			return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
		},

		contrast: function (color2) {
			// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
			var lum1 = this.luminosity();
			var lum2 = color2.luminosity();
			if (lum1 > lum2) {
				return (lum1 + 0.05) / (lum2 + 0.05);
			}
			return (lum2 + 0.05) / (lum1 + 0.05);
		},

		level: function (color2) {
			var contrastRatio = this.contrast(color2);
			if (contrastRatio >= 7.1) {
				return 'AAA';
			}

			return (contrastRatio >= 4.5) ? 'AA' : '';
		},

		dark: function () {
			// YIQ equation from http://24ways.org/2010/calculating-color-contrast
			var rgb = this.values.rgb;
			var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
			return yiq < 128;
		},

		light: function () {
			return !this.dark();
		},

		negate: function () {
			var rgb = [];
			for (var i = 0; i < 3; i++) {
				rgb[i] = 255 - this.values.rgb[i];
			}
			this.setValues('rgb', rgb);
			return this;
		},

		lighten: function (ratio) {
			this.values.hsl[2] += this.values.hsl[2] * ratio;
			this.setValues('hsl', this.values.hsl);
			return this;
		},

		darken: function (ratio) {
			this.values.hsl[2] -= this.values.hsl[2] * ratio;
			this.setValues('hsl', this.values.hsl);
			return this;
		},

		saturate: function (ratio) {
			this.values.hsl[1] += this.values.hsl[1] * ratio;
			this.setValues('hsl', this.values.hsl);
			return this;
		},

		desaturate: function (ratio) {
			this.values.hsl[1] -= this.values.hsl[1] * ratio;
			this.setValues('hsl', this.values.hsl);
			return this;
		},

		whiten: function (ratio) {
			this.values.hwb[1] += this.values.hwb[1] * ratio;
			this.setValues('hwb', this.values.hwb);
			return this;
		},

		blacken: function (ratio) {
			this.values.hwb[2] += this.values.hwb[2] * ratio;
			this.setValues('hwb', this.values.hwb);
			return this;
		},

		greyscale: function () {
			var rgb = this.values.rgb;
			// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
			var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
			this.setValues('rgb', [val, val, val]);
			return this;
		},

		clearer: function (ratio) {
			this.setValues('alpha', this.values.alpha - (this.values.alpha * ratio));
			return this;
		},

		opaquer: function (ratio) {
			this.setValues('alpha', this.values.alpha + (this.values.alpha * ratio));
			return this;
		},

		rotate: function (degrees) {
			var hue = this.values.hsl[0];
			hue = (hue + degrees) % 360;
			hue = hue < 0 ? 360 + hue : hue;
			this.values.hsl[0] = hue;
			this.setValues('hsl', this.values.hsl);
			return this;
		},

		/**
		 * Ported from sass implementation in C
		 * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		 */
		mix: function (mixinColor, weight) {
			var color1 = this;
			var color2 = mixinColor;
			var p = weight === undefined ? 0.5 : weight;

			var w = 2 * p - 1;
			var a = color1.alpha() - color2.alpha();

			var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
			var w2 = 1 - w1;

			return this
				.rgb(
					w1 * color1.red() + w2 * color2.red(),
					w1 * color1.green() + w2 * color2.green(),
					w1 * color1.blue() + w2 * color2.blue()
				)
				.alpha(color1.alpha() * p + color2.alpha() * (1 - p));
		},

		toJSON: function () {
			return this.rgb();
		},

		clone: function () {
			return new Color(this.rgb());
		}
	};

	Color.prototype.getValues = function (space) {
		var vals = {};

		for (var i = 0; i < space.length; i++) {
			vals[space.charAt(i)] = this.values[space][i];
		}

		if (this.values.alpha !== 1) {
			vals.a = this.values.alpha;
		}

		// {r: 255, g: 255, b: 255, a: 0.4}
		return vals;
	};

	Color.prototype.setValues = function (space, vals) {
		var spaces = {
			rgb: ['red', 'green', 'blue'],
			hsl: ['hue', 'saturation', 'lightness'],
			hsv: ['hue', 'saturation', 'value'],
			hwb: ['hue', 'whiteness', 'blackness'],
			cmyk: ['cyan', 'magenta', 'yellow', 'black']
		};

		var maxes = {
			rgb: [255, 255, 255],
			hsl: [360, 100, 100],
			hsv: [360, 100, 100],
			hwb: [360, 100, 100],
			cmyk: [100, 100, 100, 100]
		};

		var i;
		var alpha = 1;
		if (space === 'alpha') {
			alpha = vals;
		} else if (vals.length) {
			// [10, 10, 10]
			this.values[space] = vals.slice(0, space.length);
			alpha = vals[space.length];
		} else if (vals[space.charAt(0)] !== undefined) {
			// {r: 10, g: 10, b: 10}
			for (i = 0; i < space.length; i++) {
				this.values[space][i] = vals[space.charAt(i)];
			}

			alpha = vals.a;
		} else if (vals[spaces[space][0]] !== undefined) {
			// {red: 10, green: 10, blue: 10}
			var chans = spaces[space];

			for (i = 0; i < space.length; i++) {
				this.values[space][i] = vals[chans[i]];
			}

			alpha = vals.alpha;
		}

		this.values.alpha = Math.max(0, Math.min(1, (alpha === undefined ? this.values.alpha : alpha)));

		if (space === 'alpha') {
			return false;
		}

		var capped;

		// cap values of the space prior converting all values
		for (i = 0; i < space.length; i++) {
			capped = Math.max(0, Math.min(maxes[space][i], this.values[space][i]));
			this.values[space][i] = Math.round(capped);
		}

		// convert to all the other color spaces
		for (var sname in spaces) {
			if (sname !== space) {
				this.values[sname] = convert[space][sname](this.values[space]);
			}

			// cap values
			for (i = 0; i < sname.length; i++) {
				capped = Math.max(0, Math.min(maxes[sname][i], this.values[sname][i]));
				this.values[sname][i] = Math.round(capped);
			}
		}

		return true;
	};

	Color.prototype.setSpace = function (space, args) {
		var vals = args[0];

		if (vals === undefined) {
			// color.rgb()
			return this.getValues(space);
		}

		// color.rgb(10, 10, 10)
		if (typeof vals === 'number') {
			vals = Array.prototype.slice.call(args);
		}

		this.setValues(space, vals);
		return this;
	};

	Color.prototype.setChannel = function (space, index, val) {
		if (val === undefined) {
			// color.red()
			return this.values[space][index];
		} else if (val === this.values[space][index]) {
			// color.red(color.red())
			return this;
		}

		// color.red(100)
		this.values[space][index] = val;
		this.setValues(space, this.values[space]);

		return this;
	};

	module.exports = Color;


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var conversions = __webpack_require__(143);

	var convert = function() {
	   return new Converter();
	}

	for (var func in conversions) {
	  // export Raw versions
	  convert[func + "Raw"] =  (function(func) {
	    // accept array or plain args
	    return function(arg) {
	      if (typeof arg == "number")
	        arg = Array.prototype.slice.call(arguments);
	      return conversions[func](arg);
	    }
	  })(func);

	  var pair = /(\w+)2(\w+)/.exec(func),
	      from = pair[1],
	      to = pair[2];

	  // export rgb2hsl and ["rgb"]["hsl"]
	  convert[from] = convert[from] || {};

	  convert[from][to] = convert[func] = (function(func) { 
	    return function(arg) {
	      if (typeof arg == "number")
	        arg = Array.prototype.slice.call(arguments);
	      
	      var val = conversions[func](arg);
	      if (typeof val == "string" || val === undefined)
	        return val; // keyword

	      for (var i = 0; i < val.length; i++)
	        val[i] = Math.round(val[i]);
	      return val;
	    }
	  })(func);
	}


	/* Converter does lazy conversion and caching */
	var Converter = function() {
	   this.convs = {};
	};

	/* Either get the values for a space or
	  set the values for a space, depending on args */
	Converter.prototype.routeSpace = function(space, args) {
	   var values = args[0];
	   if (values === undefined) {
	      // color.rgb()
	      return this.getValues(space);
	   }
	   // color.rgb(10, 10, 10)
	   if (typeof values == "number") {
	      values = Array.prototype.slice.call(args);        
	   }

	   return this.setValues(space, values);
	};
	  
	/* Set the values for a space, invalidating cache */
	Converter.prototype.setValues = function(space, values) {
	   this.space = space;
	   this.convs = {};
	   this.convs[space] = values;
	   return this;
	};

	/* Get the values for a space. If there's already
	  a conversion for the space, fetch it, otherwise
	  compute it */
	Converter.prototype.getValues = function(space) {
	   var vals = this.convs[space];
	   if (!vals) {
	      var fspace = this.space,
	          from = this.convs[fspace];
	      vals = convert[fspace][space](from);

	      this.convs[space] = vals;
	   }
	  return vals;
	};

	["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(space) {
	   Converter.prototype[space] = function(vals) {
	      return this.routeSpace(space, arguments);
	   }
	});

	module.exports = convert;

/***/ },
/* 143 */
/***/ function(module, exports) {

	/* MIT license */

	module.exports = {
	  rgb2hsl: rgb2hsl,
	  rgb2hsv: rgb2hsv,
	  rgb2hwb: rgb2hwb,
	  rgb2cmyk: rgb2cmyk,
	  rgb2keyword: rgb2keyword,
	  rgb2xyz: rgb2xyz,
	  rgb2lab: rgb2lab,
	  rgb2lch: rgb2lch,

	  hsl2rgb: hsl2rgb,
	  hsl2hsv: hsl2hsv,
	  hsl2hwb: hsl2hwb,
	  hsl2cmyk: hsl2cmyk,
	  hsl2keyword: hsl2keyword,

	  hsv2rgb: hsv2rgb,
	  hsv2hsl: hsv2hsl,
	  hsv2hwb: hsv2hwb,
	  hsv2cmyk: hsv2cmyk,
	  hsv2keyword: hsv2keyword,

	  hwb2rgb: hwb2rgb,
	  hwb2hsl: hwb2hsl,
	  hwb2hsv: hwb2hsv,
	  hwb2cmyk: hwb2cmyk,
	  hwb2keyword: hwb2keyword,

	  cmyk2rgb: cmyk2rgb,
	  cmyk2hsl: cmyk2hsl,
	  cmyk2hsv: cmyk2hsv,
	  cmyk2hwb: cmyk2hwb,
	  cmyk2keyword: cmyk2keyword,

	  keyword2rgb: keyword2rgb,
	  keyword2hsl: keyword2hsl,
	  keyword2hsv: keyword2hsv,
	  keyword2hwb: keyword2hwb,
	  keyword2cmyk: keyword2cmyk,
	  keyword2lab: keyword2lab,
	  keyword2xyz: keyword2xyz,

	  xyz2rgb: xyz2rgb,
	  xyz2lab: xyz2lab,
	  xyz2lch: xyz2lch,

	  lab2xyz: lab2xyz,
	  lab2rgb: lab2rgb,
	  lab2lch: lab2lch,

	  lch2lab: lch2lab,
	  lch2xyz: lch2xyz,
	  lch2rgb: lch2rgb
	}


	function rgb2hsl(rgb) {
	  var r = rgb[0]/255,
	      g = rgb[1]/255,
	      b = rgb[2]/255,
	      min = Math.min(r, g, b),
	      max = Math.max(r, g, b),
	      delta = max - min,
	      h, s, l;

	  if (max == min)
	    h = 0;
	  else if (r == max)
	    h = (g - b) / delta;
	  else if (g == max)
	    h = 2 + (b - r) / delta;
	  else if (b == max)
	    h = 4 + (r - g)/ delta;

	  h = Math.min(h * 60, 360);

	  if (h < 0)
	    h += 360;

	  l = (min + max) / 2;

	  if (max == min)
	    s = 0;
	  else if (l <= 0.5)
	    s = delta / (max + min);
	  else
	    s = delta / (2 - max - min);

	  return [h, s * 100, l * 100];
	}

	function rgb2hsv(rgb) {
	  var r = rgb[0],
	      g = rgb[1],
	      b = rgb[2],
	      min = Math.min(r, g, b),
	      max = Math.max(r, g, b),
	      delta = max - min,
	      h, s, v;

	  if (max == 0)
	    s = 0;
	  else
	    s = (delta/max * 1000)/10;

	  if (max == min)
	    h = 0;
	  else if (r == max)
	    h = (g - b) / delta;
	  else if (g == max)
	    h = 2 + (b - r) / delta;
	  else if (b == max)
	    h = 4 + (r - g) / delta;

	  h = Math.min(h * 60, 360);

	  if (h < 0)
	    h += 360;

	  v = ((max / 255) * 1000) / 10;

	  return [h, s, v];
	}

	function rgb2hwb(rgb) {
	  var r = rgb[0],
	      g = rgb[1],
	      b = rgb[2],
	      h = rgb2hsl(rgb)[0],
	      w = 1/255 * Math.min(r, Math.min(g, b)),
	      b = 1 - 1/255 * Math.max(r, Math.max(g, b));

	  return [h, w * 100, b * 100];
	}

	function rgb2cmyk(rgb) {
	  var r = rgb[0] / 255,
	      g = rgb[1] / 255,
	      b = rgb[2] / 255,
	      c, m, y, k;

	  k = Math.min(1 - r, 1 - g, 1 - b);
	  c = (1 - r - k) / (1 - k) || 0;
	  m = (1 - g - k) / (1 - k) || 0;
	  y = (1 - b - k) / (1 - k) || 0;
	  return [c * 100, m * 100, y * 100, k * 100];
	}

	function rgb2keyword(rgb) {
	  return reverseKeywords[JSON.stringify(rgb)];
	}

	function rgb2xyz(rgb) {
	  var r = rgb[0] / 255,
	      g = rgb[1] / 255,
	      b = rgb[2] / 255;

	  // assume sRGB
	  r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	  g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	  b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	  var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	  var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	  var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	  return [x * 100, y *100, z * 100];
	}

	function rgb2lab(rgb) {
	  var xyz = rgb2xyz(rgb),
	        x = xyz[0],
	        y = xyz[1],
	        z = xyz[2],
	        l, a, b;

	  x /= 95.047;
	  y /= 100;
	  z /= 108.883;

	  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
	  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
	  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

	  l = (116 * y) - 16;
	  a = 500 * (x - y);
	  b = 200 * (y - z);

	  return [l, a, b];
	}

	function rgb2lch(args) {
	  return lab2lch(rgb2lab(args));
	}

	function hsl2rgb(hsl) {
	  var h = hsl[0] / 360,
	      s = hsl[1] / 100,
	      l = hsl[2] / 100,
	      t1, t2, t3, rgb, val;

	  if (s == 0) {
	    val = l * 255;
	    return [val, val, val];
	  }

	  if (l < 0.5)
	    t2 = l * (1 + s);
	  else
	    t2 = l + s - l * s;
	  t1 = 2 * l - t2;

	  rgb = [0, 0, 0];
	  for (var i = 0; i < 3; i++) {
	    t3 = h + 1 / 3 * - (i - 1);
	    t3 < 0 && t3++;
	    t3 > 1 && t3--;

	    if (6 * t3 < 1)
	      val = t1 + (t2 - t1) * 6 * t3;
	    else if (2 * t3 < 1)
	      val = t2;
	    else if (3 * t3 < 2)
	      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
	    else
	      val = t1;

	    rgb[i] = val * 255;
	  }

	  return rgb;
	}

	function hsl2hsv(hsl) {
	  var h = hsl[0],
	      s = hsl[1] / 100,
	      l = hsl[2] / 100,
	      sv, v;

	  if(l === 0) {
	      // no need to do calc on black
	      // also avoids divide by 0 error
	      return [0, 0, 0];
	  }

	  l *= 2;
	  s *= (l <= 1) ? l : 2 - l;
	  v = (l + s) / 2;
	  sv = (2 * s) / (l + s);
	  return [h, sv * 100, v * 100];
	}

	function hsl2hwb(args) {
	  return rgb2hwb(hsl2rgb(args));
	}

	function hsl2cmyk(args) {
	  return rgb2cmyk(hsl2rgb(args));
	}

	function hsl2keyword(args) {
	  return rgb2keyword(hsl2rgb(args));
	}


	function hsv2rgb(hsv) {
	  var h = hsv[0] / 60,
	      s = hsv[1] / 100,
	      v = hsv[2] / 100,
	      hi = Math.floor(h) % 6;

	  var f = h - Math.floor(h),
	      p = 255 * v * (1 - s),
	      q = 255 * v * (1 - (s * f)),
	      t = 255 * v * (1 - (s * (1 - f))),
	      v = 255 * v;

	  switch(hi) {
	    case 0:
	      return [v, t, p];
	    case 1:
	      return [q, v, p];
	    case 2:
	      return [p, v, t];
	    case 3:
	      return [p, q, v];
	    case 4:
	      return [t, p, v];
	    case 5:
	      return [v, p, q];
	  }
	}

	function hsv2hsl(hsv) {
	  var h = hsv[0],
	      s = hsv[1] / 100,
	      v = hsv[2] / 100,
	      sl, l;

	  l = (2 - s) * v;
	  sl = s * v;
	  sl /= (l <= 1) ? l : 2 - l;
	  sl = sl || 0;
	  l /= 2;
	  return [h, sl * 100, l * 100];
	}

	function hsv2hwb(args) {
	  return rgb2hwb(hsv2rgb(args))
	}

	function hsv2cmyk(args) {
	  return rgb2cmyk(hsv2rgb(args));
	}

	function hsv2keyword(args) {
	  return rgb2keyword(hsv2rgb(args));
	}

	// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
	function hwb2rgb(hwb) {
	  var h = hwb[0] / 360,
	      wh = hwb[1] / 100,
	      bl = hwb[2] / 100,
	      ratio = wh + bl,
	      i, v, f, n;

	  // wh + bl cant be > 1
	  if (ratio > 1) {
	    wh /= ratio;
	    bl /= ratio;
	  }

	  i = Math.floor(6 * h);
	  v = 1 - bl;
	  f = 6 * h - i;
	  if ((i & 0x01) != 0) {
	    f = 1 - f;
	  }
	  n = wh + f * (v - wh);  // linear interpolation

	  switch (i) {
	    default:
	    case 6:
	    case 0: r = v; g = n; b = wh; break;
	    case 1: r = n; g = v; b = wh; break;
	    case 2: r = wh; g = v; b = n; break;
	    case 3: r = wh; g = n; b = v; break;
	    case 4: r = n; g = wh; b = v; break;
	    case 5: r = v; g = wh; b = n; break;
	  }

	  return [r * 255, g * 255, b * 255];
	}

	function hwb2hsl(args) {
	  return rgb2hsl(hwb2rgb(args));
	}

	function hwb2hsv(args) {
	  return rgb2hsv(hwb2rgb(args));
	}

	function hwb2cmyk(args) {
	  return rgb2cmyk(hwb2rgb(args));
	}

	function hwb2keyword(args) {
	  return rgb2keyword(hwb2rgb(args));
	}

	function cmyk2rgb(cmyk) {
	  var c = cmyk[0] / 100,
	      m = cmyk[1] / 100,
	      y = cmyk[2] / 100,
	      k = cmyk[3] / 100,
	      r, g, b;

	  r = 1 - Math.min(1, c * (1 - k) + k);
	  g = 1 - Math.min(1, m * (1 - k) + k);
	  b = 1 - Math.min(1, y * (1 - k) + k);
	  return [r * 255, g * 255, b * 255];
	}

	function cmyk2hsl(args) {
	  return rgb2hsl(cmyk2rgb(args));
	}

	function cmyk2hsv(args) {
	  return rgb2hsv(cmyk2rgb(args));
	}

	function cmyk2hwb(args) {
	  return rgb2hwb(cmyk2rgb(args));
	}

	function cmyk2keyword(args) {
	  return rgb2keyword(cmyk2rgb(args));
	}


	function xyz2rgb(xyz) {
	  var x = xyz[0] / 100,
	      y = xyz[1] / 100,
	      z = xyz[2] / 100,
	      r, g, b;

	  r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	  g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	  b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	  // assume sRGB
	  r = r > 0.0031308 ? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
	    : r = (r * 12.92);

	  g = g > 0.0031308 ? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
	    : g = (g * 12.92);

	  b = b > 0.0031308 ? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
	    : b = (b * 12.92);

	  r = Math.min(Math.max(0, r), 1);
	  g = Math.min(Math.max(0, g), 1);
	  b = Math.min(Math.max(0, b), 1);

	  return [r * 255, g * 255, b * 255];
	}

	function xyz2lab(xyz) {
	  var x = xyz[0],
	      y = xyz[1],
	      z = xyz[2],
	      l, a, b;

	  x /= 95.047;
	  y /= 100;
	  z /= 108.883;

	  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
	  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
	  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

	  l = (116 * y) - 16;
	  a = 500 * (x - y);
	  b = 200 * (y - z);

	  return [l, a, b];
	}

	function xyz2lch(args) {
	  return lab2lch(xyz2lab(args));
	}

	function lab2xyz(lab) {
	  var l = lab[0],
	      a = lab[1],
	      b = lab[2],
	      x, y, z, y2;

	  if (l <= 8) {
	    y = (l * 100) / 903.3;
	    y2 = (7.787 * (y / 100)) + (16 / 116);
	  } else {
	    y = 100 * Math.pow((l + 16) / 116, 3);
	    y2 = Math.pow(y / 100, 1/3);
	  }

	  x = x / 95.047 <= 0.008856 ? x = (95.047 * ((a / 500) + y2 - (16 / 116))) / 7.787 : 95.047 * Math.pow((a / 500) + y2, 3);

	  z = z / 108.883 <= 0.008859 ? z = (108.883 * (y2 - (b / 200) - (16 / 116))) / 7.787 : 108.883 * Math.pow(y2 - (b / 200), 3);

	  return [x, y, z];
	}

	function lab2lch(lab) {
	  var l = lab[0],
	      a = lab[1],
	      b = lab[2],
	      hr, h, c;

	  hr = Math.atan2(b, a);
	  h = hr * 360 / 2 / Math.PI;
	  if (h < 0) {
	    h += 360;
	  }
	  c = Math.sqrt(a * a + b * b);
	  return [l, c, h];
	}

	function lab2rgb(args) {
	  return xyz2rgb(lab2xyz(args));
	}

	function lch2lab(lch) {
	  var l = lch[0],
	      c = lch[1],
	      h = lch[2],
	      a, b, hr;

	  hr = h / 360 * 2 * Math.PI;
	  a = c * Math.cos(hr);
	  b = c * Math.sin(hr);
	  return [l, a, b];
	}

	function lch2xyz(args) {
	  return lab2xyz(lch2lab(args));
	}

	function lch2rgb(args) {
	  return lab2rgb(lch2lab(args));
	}

	function keyword2rgb(keyword) {
	  return cssKeywords[keyword];
	}

	function keyword2hsl(args) {
	  return rgb2hsl(keyword2rgb(args));
	}

	function keyword2hsv(args) {
	  return rgb2hsv(keyword2rgb(args));
	}

	function keyword2hwb(args) {
	  return rgb2hwb(keyword2rgb(args));
	}

	function keyword2cmyk(args) {
	  return rgb2cmyk(keyword2rgb(args));
	}

	function keyword2lab(args) {
	  return rgb2lab(keyword2rgb(args));
	}

	function keyword2xyz(args) {
	  return rgb2xyz(keyword2rgb(args));
	}

	var cssKeywords = {
	  aliceblue:  [240,248,255],
	  antiquewhite: [250,235,215],
	  aqua: [0,255,255],
	  aquamarine: [127,255,212],
	  azure:  [240,255,255],
	  beige:  [245,245,220],
	  bisque: [255,228,196],
	  black:  [0,0,0],
	  blanchedalmond: [255,235,205],
	  blue: [0,0,255],
	  blueviolet: [138,43,226],
	  brown:  [165,42,42],
	  burlywood:  [222,184,135],
	  cadetblue:  [95,158,160],
	  chartreuse: [127,255,0],
	  chocolate:  [210,105,30],
	  coral:  [255,127,80],
	  cornflowerblue: [100,149,237],
	  cornsilk: [255,248,220],
	  crimson:  [220,20,60],
	  cyan: [0,255,255],
	  darkblue: [0,0,139],
	  darkcyan: [0,139,139],
	  darkgoldenrod:  [184,134,11],
	  darkgray: [169,169,169],
	  darkgreen:  [0,100,0],
	  darkgrey: [169,169,169],
	  darkkhaki:  [189,183,107],
	  darkmagenta:  [139,0,139],
	  darkolivegreen: [85,107,47],
	  darkorange: [255,140,0],
	  darkorchid: [153,50,204],
	  darkred:  [139,0,0],
	  darksalmon: [233,150,122],
	  darkseagreen: [143,188,143],
	  darkslateblue:  [72,61,139],
	  darkslategray:  [47,79,79],
	  darkslategrey:  [47,79,79],
	  darkturquoise:  [0,206,209],
	  darkviolet: [148,0,211],
	  deeppink: [255,20,147],
	  deepskyblue:  [0,191,255],
	  dimgray:  [105,105,105],
	  dimgrey:  [105,105,105],
	  dodgerblue: [30,144,255],
	  firebrick:  [178,34,34],
	  floralwhite:  [255,250,240],
	  forestgreen:  [34,139,34],
	  fuchsia:  [255,0,255],
	  gainsboro:  [220,220,220],
	  ghostwhite: [248,248,255],
	  gold: [255,215,0],
	  goldenrod:  [218,165,32],
	  gray: [128,128,128],
	  green:  [0,128,0],
	  greenyellow:  [173,255,47],
	  grey: [128,128,128],
	  honeydew: [240,255,240],
	  hotpink:  [255,105,180],
	  indianred:  [205,92,92],
	  indigo: [75,0,130],
	  ivory:  [255,255,240],
	  khaki:  [240,230,140],
	  lavender: [230,230,250],
	  lavenderblush:  [255,240,245],
	  lawngreen:  [124,252,0],
	  lemonchiffon: [255,250,205],
	  lightblue:  [173,216,230],
	  lightcoral: [240,128,128],
	  lightcyan:  [224,255,255],
	  lightgoldenrodyellow: [250,250,210],
	  lightgray:  [211,211,211],
	  lightgreen: [144,238,144],
	  lightgrey:  [211,211,211],
	  lightpink:  [255,182,193],
	  lightsalmon:  [255,160,122],
	  lightseagreen:  [32,178,170],
	  lightskyblue: [135,206,250],
	  lightslategray: [119,136,153],
	  lightslategrey: [119,136,153],
	  lightsteelblue: [176,196,222],
	  lightyellow:  [255,255,224],
	  lime: [0,255,0],
	  limegreen:  [50,205,50],
	  linen:  [250,240,230],
	  magenta:  [255,0,255],
	  maroon: [128,0,0],
	  mediumaquamarine: [102,205,170],
	  mediumblue: [0,0,205],
	  mediumorchid: [186,85,211],
	  mediumpurple: [147,112,219],
	  mediumseagreen: [60,179,113],
	  mediumslateblue:  [123,104,238],
	  mediumspringgreen:  [0,250,154],
	  mediumturquoise:  [72,209,204],
	  mediumvioletred:  [199,21,133],
	  midnightblue: [25,25,112],
	  mintcream:  [245,255,250],
	  mistyrose:  [255,228,225],
	  moccasin: [255,228,181],
	  navajowhite:  [255,222,173],
	  navy: [0,0,128],
	  oldlace:  [253,245,230],
	  olive:  [128,128,0],
	  olivedrab:  [107,142,35],
	  orange: [255,165,0],
	  orangered:  [255,69,0],
	  orchid: [218,112,214],
	  palegoldenrod:  [238,232,170],
	  palegreen:  [152,251,152],
	  paleturquoise:  [175,238,238],
	  palevioletred:  [219,112,147],
	  papayawhip: [255,239,213],
	  peachpuff:  [255,218,185],
	  peru: [205,133,63],
	  pink: [255,192,203],
	  plum: [221,160,221],
	  powderblue: [176,224,230],
	  purple: [128,0,128],
	  rebeccapurple: [102, 51, 153],
	  red:  [255,0,0],
	  rosybrown:  [188,143,143],
	  royalblue:  [65,105,225],
	  saddlebrown:  [139,69,19],
	  salmon: [250,128,114],
	  sandybrown: [244,164,96],
	  seagreen: [46,139,87],
	  seashell: [255,245,238],
	  sienna: [160,82,45],
	  silver: [192,192,192],
	  skyblue:  [135,206,235],
	  slateblue:  [106,90,205],
	  slategray:  [112,128,144],
	  slategrey:  [112,128,144],
	  snow: [255,250,250],
	  springgreen:  [0,255,127],
	  steelblue:  [70,130,180],
	  tan:  [210,180,140],
	  teal: [0,128,128],
	  thistle:  [216,191,216],
	  tomato: [255,99,71],
	  turquoise:  [64,224,208],
	  violet: [238,130,238],
	  wheat:  [245,222,179],
	  white:  [255,255,255],
	  whitesmoke: [245,245,245],
	  yellow: [255,255,0],
	  yellowgreen:  [154,205,50]
	};

	var reverseKeywords = {};
	for (var key in cssKeywords) {
	  reverseKeywords[JSON.stringify(cssKeywords[key])] = key;
	}


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	/* MIT license */
	var colorNames = __webpack_require__(145);

	module.exports = {
	   getRgba: getRgba,
	   getHsla: getHsla,
	   getRgb: getRgb,
	   getHsl: getHsl,
	   getHwb: getHwb,
	   getAlpha: getAlpha,

	   hexString: hexString,
	   rgbString: rgbString,
	   rgbaString: rgbaString,
	   percentString: percentString,
	   percentaString: percentaString,
	   hslString: hslString,
	   hslaString: hslaString,
	   hwbString: hwbString,
	   keyword: keyword
	}

	function getRgba(string) {
	   if (!string) {
	      return;
	   }
	   var abbr =  /^#([a-fA-F0-9]{3})$/,
	       hex =  /^#([a-fA-F0-9]{6})$/,
	       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
	       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
	       keyword = /(\D+)/;

	   var rgb = [0, 0, 0],
	       a = 1,
	       match = string.match(abbr);
	   if (match) {
	      match = match[1];
	      for (var i = 0; i < rgb.length; i++) {
	         rgb[i] = parseInt(match[i] + match[i], 16);
	      }
	   }
	   else if (match = string.match(hex)) {
	      match = match[1];
	      for (var i = 0; i < rgb.length; i++) {
	         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
	      }
	   }
	   else if (match = string.match(rgba)) {
	      for (var i = 0; i < rgb.length; i++) {
	         rgb[i] = parseInt(match[i + 1]);
	      }
	      a = parseFloat(match[4]);
	   }
	   else if (match = string.match(per)) {
	      for (var i = 0; i < rgb.length; i++) {
	         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
	      }
	      a = parseFloat(match[4]);
	   }
	   else if (match = string.match(keyword)) {
	      if (match[1] == "transparent") {
	         return [0, 0, 0, 0];
	      }
	      rgb = colorNames[match[1]];
	      if (!rgb) {
	         return;
	      }
	   }

	   for (var i = 0; i < rgb.length; i++) {
	      rgb[i] = scale(rgb[i], 0, 255);
	   }
	   if (!a && a != 0) {
	      a = 1;
	   }
	   else {
	      a = scale(a, 0, 1);
	   }
	   rgb[3] = a;
	   return rgb;
	}

	function getHsla(string) {
	   if (!string) {
	      return;
	   }
	   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
	   var match = string.match(hsl);
	   if (match) {
	      var alpha = parseFloat(match[4]);
	      var h = scale(parseInt(match[1]), 0, 360),
	          s = scale(parseFloat(match[2]), 0, 100),
	          l = scale(parseFloat(match[3]), 0, 100),
	          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
	      return [h, s, l, a];
	   }
	}

	function getHwb(string) {
	   if (!string) {
	      return;
	   }
	   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
	   var match = string.match(hwb);
	   if (match) {
	    var alpha = parseFloat(match[4]);
	      var h = scale(parseInt(match[1]), 0, 360),
	          w = scale(parseFloat(match[2]), 0, 100),
	          b = scale(parseFloat(match[3]), 0, 100),
	          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
	      return [h, w, b, a];
	   }
	}

	function getRgb(string) {
	   var rgba = getRgba(string);
	   return rgba && rgba.slice(0, 3);
	}

	function getHsl(string) {
	  var hsla = getHsla(string);
	  return hsla && hsla.slice(0, 3);
	}

	function getAlpha(string) {
	   var vals = getRgba(string);
	   if (vals) {
	      return vals[3];
	   }
	   else if (vals = getHsla(string)) {
	      return vals[3];
	   }
	   else if (vals = getHwb(string)) {
	      return vals[3];
	   }
	}

	// generators
	function hexString(rgb) {
	   return "#" + hexDouble(rgb[0]) + hexDouble(rgb[1])
	              + hexDouble(rgb[2]);
	}

	function rgbString(rgba, alpha) {
	   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
	      return rgbaString(rgba, alpha);
	   }
	   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
	}

	function rgbaString(rgba, alpha) {
	   if (alpha === undefined) {
	      alpha = (rgba[3] !== undefined ? rgba[3] : 1);
	   }
	   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
	           + ", " + alpha + ")";
	}

	function percentString(rgba, alpha) {
	   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
	      return percentaString(rgba, alpha);
	   }
	   var r = Math.round(rgba[0]/255 * 100),
	       g = Math.round(rgba[1]/255 * 100),
	       b = Math.round(rgba[2]/255 * 100);

	   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
	}

	function percentaString(rgba, alpha) {
	   var r = Math.round(rgba[0]/255 * 100),
	       g = Math.round(rgba[1]/255 * 100),
	       b = Math.round(rgba[2]/255 * 100);
	   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
	}

	function hslString(hsla, alpha) {
	   if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
	      return hslaString(hsla, alpha);
	   }
	   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
	}

	function hslaString(hsla, alpha) {
	   if (alpha === undefined) {
	      alpha = (hsla[3] !== undefined ? hsla[3] : 1);
	   }
	   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
	           + alpha + ")";
	}

	// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
	// (hwb have alpha optional & 1 is default value)
	function hwbString(hwb, alpha) {
	   if (alpha === undefined) {
	      alpha = (hwb[3] !== undefined ? hwb[3] : 1);
	   }
	   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
	           + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
	}

	function keyword(rgb) {
	  return reverseNames[rgb.slice(0, 3)];
	}

	// helpers
	function scale(num, min, max) {
	   return Math.min(Math.max(min, num), max);
	}

	function hexDouble(num) {
	  var str = num.toString(16).toUpperCase();
	  return (str.length < 2) ? "0" + str : str;
	}


	//create a list of reverse color names
	var reverseNames = {};
	for (var name in colorNames) {
	   reverseNames[colorNames[name]] = name;
	}


/***/ },
/* 145 */
/***/ function(module, exports) {

	module.exports = {
		"aliceblue": [240, 248, 255],
		"antiquewhite": [250, 235, 215],
		"aqua": [0, 255, 255],
		"aquamarine": [127, 255, 212],
		"azure": [240, 255, 255],
		"beige": [245, 245, 220],
		"bisque": [255, 228, 196],
		"black": [0, 0, 0],
		"blanchedalmond": [255, 235, 205],
		"blue": [0, 0, 255],
		"blueviolet": [138, 43, 226],
		"brown": [165, 42, 42],
		"burlywood": [222, 184, 135],
		"cadetblue": [95, 158, 160],
		"chartreuse": [127, 255, 0],
		"chocolate": [210, 105, 30],
		"coral": [255, 127, 80],
		"cornflowerblue": [100, 149, 237],
		"cornsilk": [255, 248, 220],
		"crimson": [220, 20, 60],
		"cyan": [0, 255, 255],
		"darkblue": [0, 0, 139],
		"darkcyan": [0, 139, 139],
		"darkgoldenrod": [184, 134, 11],
		"darkgray": [169, 169, 169],
		"darkgreen": [0, 100, 0],
		"darkgrey": [169, 169, 169],
		"darkkhaki": [189, 183, 107],
		"darkmagenta": [139, 0, 139],
		"darkolivegreen": [85, 107, 47],
		"darkorange": [255, 140, 0],
		"darkorchid": [153, 50, 204],
		"darkred": [139, 0, 0],
		"darksalmon": [233, 150, 122],
		"darkseagreen": [143, 188, 143],
		"darkslateblue": [72, 61, 139],
		"darkslategray": [47, 79, 79],
		"darkslategrey": [47, 79, 79],
		"darkturquoise": [0, 206, 209],
		"darkviolet": [148, 0, 211],
		"deeppink": [255, 20, 147],
		"deepskyblue": [0, 191, 255],
		"dimgray": [105, 105, 105],
		"dimgrey": [105, 105, 105],
		"dodgerblue": [30, 144, 255],
		"firebrick": [178, 34, 34],
		"floralwhite": [255, 250, 240],
		"forestgreen": [34, 139, 34],
		"fuchsia": [255, 0, 255],
		"gainsboro": [220, 220, 220],
		"ghostwhite": [248, 248, 255],
		"gold": [255, 215, 0],
		"goldenrod": [218, 165, 32],
		"gray": [128, 128, 128],
		"green": [0, 128, 0],
		"greenyellow": [173, 255, 47],
		"grey": [128, 128, 128],
		"honeydew": [240, 255, 240],
		"hotpink": [255, 105, 180],
		"indianred": [205, 92, 92],
		"indigo": [75, 0, 130],
		"ivory": [255, 255, 240],
		"khaki": [240, 230, 140],
		"lavender": [230, 230, 250],
		"lavenderblush": [255, 240, 245],
		"lawngreen": [124, 252, 0],
		"lemonchiffon": [255, 250, 205],
		"lightblue": [173, 216, 230],
		"lightcoral": [240, 128, 128],
		"lightcyan": [224, 255, 255],
		"lightgoldenrodyellow": [250, 250, 210],
		"lightgray": [211, 211, 211],
		"lightgreen": [144, 238, 144],
		"lightgrey": [211, 211, 211],
		"lightpink": [255, 182, 193],
		"lightsalmon": [255, 160, 122],
		"lightseagreen": [32, 178, 170],
		"lightskyblue": [135, 206, 250],
		"lightslategray": [119, 136, 153],
		"lightslategrey": [119, 136, 153],
		"lightsteelblue": [176, 196, 222],
		"lightyellow": [255, 255, 224],
		"lime": [0, 255, 0],
		"limegreen": [50, 205, 50],
		"linen": [250, 240, 230],
		"magenta": [255, 0, 255],
		"maroon": [128, 0, 0],
		"mediumaquamarine": [102, 205, 170],
		"mediumblue": [0, 0, 205],
		"mediumorchid": [186, 85, 211],
		"mediumpurple": [147, 112, 219],
		"mediumseagreen": [60, 179, 113],
		"mediumslateblue": [123, 104, 238],
		"mediumspringgreen": [0, 250, 154],
		"mediumturquoise": [72, 209, 204],
		"mediumvioletred": [199, 21, 133],
		"midnightblue": [25, 25, 112],
		"mintcream": [245, 255, 250],
		"mistyrose": [255, 228, 225],
		"moccasin": [255, 228, 181],
		"navajowhite": [255, 222, 173],
		"navy": [0, 0, 128],
		"oldlace": [253, 245, 230],
		"olive": [128, 128, 0],
		"olivedrab": [107, 142, 35],
		"orange": [255, 165, 0],
		"orangered": [255, 69, 0],
		"orchid": [218, 112, 214],
		"palegoldenrod": [238, 232, 170],
		"palegreen": [152, 251, 152],
		"paleturquoise": [175, 238, 238],
		"palevioletred": [219, 112, 147],
		"papayawhip": [255, 239, 213],
		"peachpuff": [255, 218, 185],
		"peru": [205, 133, 63],
		"pink": [255, 192, 203],
		"plum": [221, 160, 221],
		"powderblue": [176, 224, 230],
		"purple": [128, 0, 128],
		"rebeccapurple": [102, 51, 153],
		"red": [255, 0, 0],
		"rosybrown": [188, 143, 143],
		"royalblue": [65, 105, 225],
		"saddlebrown": [139, 69, 19],
		"salmon": [250, 128, 114],
		"sandybrown": [244, 164, 96],
		"seagreen": [46, 139, 87],
		"seashell": [255, 245, 238],
		"sienna": [160, 82, 45],
		"silver": [192, 192, 192],
		"skyblue": [135, 206, 235],
		"slateblue": [106, 90, 205],
		"slategray": [112, 128, 144],
		"slategrey": [112, 128, 144],
		"snow": [255, 250, 250],
		"springgreen": [0, 255, 127],
		"steelblue": [70, 130, 180],
		"tan": [210, 180, 140],
		"teal": [0, 128, 128],
		"thistle": [216, 191, 216],
		"tomato": [255, 99, 71],
		"turquoise": [64, 224, 208],
		"violet": [238, 130, 238],
		"wheat": [245, 222, 179],
		"white": [255, 255, 255],
		"whitesmoke": [245, 245, 245],
		"yellow": [255, 255, 0],
		"yellowgreen": [154, 205, 50]
	};

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(147);
	module.exports = __webpack_require__(148);

/***/ },
/* 147 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-Button__root","default":"ic-0-9-2-Button__default","primary":"ic-0-9-2-Button__primary","success":"ic-0-9-2-Button__success","alert":"ic-0-9-2-Button__alert","danger":"ic-0-9-2-Button__danger","link":"ic-0-9-2-Button__link"};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	if (false) {
	  module.hot.accept([]);
	}
	module.exports = ".ic-0-9-2-Button__root {\n  font-family: map(Button, fontFamily);\n  text-transform: map(Button, textTransform);\n  border-radius: map(Button, borderRadius);\n  border-style: map(Button, borderStyle);\n  border-width: map(Button, borderWidth);\n}\n\n.ic-0-9-2-Button__default {\n  background: map(Button, defaultBackground);\n  color: map(Button, defaultTextColor);\n  border-color: map(Button, defaultBorderColor);\n}\n\n.ic-0-9-2-Button__default:focus,\n  .ic-0-9-2-Button__default:hover,\n  .ic-0-9-2-Button__default:active {\n\n  background: map(Button, defaultBackgroundHover);\n}\n\n.ic-0-9-2-Button__default:active {\n\n  box-shadow: inset 0 1px 0 map(Button, defaultInnerBorderColor);\n}\n\n.ic-0-9-2-Button__default:focus {\n\n  box-shadow: inset 0 0 0 1px map(Button, defaultFocusOutlineColor);\n}\n\n.ic-0-9-2-Button__primary {\n  background: map(Button, primaryBackground);\n  color: map(Button, primaryTextColor);\n  border-color: map(Button, primaryBorderColor);\n}\n\n.ic-0-9-2-Button__primary:focus,\n  .ic-0-9-2-Button__primary:hover,\n  .ic-0-9-2-Button__primary:active {\n\n  background: map(Button, primaryBackgroundHover);\n}\n\n.ic-0-9-2-Button__primary:active {\n\n  box-shadow: inset 0 1px 0 map(Button, primaryInnerBorderColor);\n}\n\n.ic-0-9-2-Button__primary:focus {\n\n  box-shadow: inset 0 0 0 1px map(Button, primaryFocusOutlineColor);\n}\n\n.ic-0-9-2-Button__success {\n  background: map(Button, successBackground);\n  color: map(Button, successTextColor);\n  border-color: map(Button, successBorderColor);\n}\n\n.ic-0-9-2-Button__success:focus,\n  .ic-0-9-2-Button__success:hover,\n  .ic-0-9-2-Button__success:active {\n\n  background: map(Button, successBackgroundHover);\n}\n\n.ic-0-9-2-Button__success:active {\n\n  box-shadow: inset 0 1px 0 map(Button, successInnerBorderColor);\n}\n\n.ic-0-9-2-Button__success:focus {\n\n  box-shadow: inset 0 0 0 1px map(Button, successFocusOutlineColor);\n}\n\n.ic-0-9-2-Button__alert {\n  background: map(Button, alertBackground);\n  color: map(Button, alertTextColor);\n  border-color: map(Button, alertBorderColor);\n}\n\n.ic-0-9-2-Button__alert:focus,\n  .ic-0-9-2-Button__alert:hover,\n  .ic-0-9-2-Button__alert:active {\n\n  background: map(Button, alertBackgroundHover);\n}\n\n.ic-0-9-2-Button__alert:active {\n\n  box-shadow: inset 0 1px 0 map(Button, alertInnerBorderColor);\n}\n\n.ic-0-9-2-Button__alert:focus {\n\n  box-shadow: inset 0 0 0 1px map(Button, alertFocusOutlineColor);\n}\n\n.ic-0-9-2-Button__danger {\n  background: map(Button, dangerBackground);\n  color: map(Button, dangerTextColor);\n  border-color: map(Button, dangerBorderColor);\n}\n\n.ic-0-9-2-Button__danger:focus,\n  .ic-0-9-2-Button__danger:hover,\n  .ic-0-9-2-Button__danger:active {\n\n  background: map(Button, dangerBackgroundHover);\n}\n\n.ic-0-9-2-Button__danger:active {\n\n  box-shadow: inset 0 1px 0 map(Button, dangerInnerBorderColor);\n}\n\n.ic-0-9-2-Button__danger:focus {\n\n  box-shadow: inset 0 0 0 1px map(Button, dangerFocusOutlineColor);\n}\n\n.ic-0-9-2-Button__link {\n  background: transparent;\n  color: map(Button, linkTextColor);\n  border-color: map(Button, linkBorderColor);\n  text-decoration: map(Button, linkTextDecoration);\n}\n\n.ic-0-9-2-Button__link:focus {\n\n  box-shadow: inset 0 0 0 1px map(Button, linkFocusOutlineColor);\n}\n\n.ic-0-9-2-Button__link:hover {\n\n  text-decoration: map(Button, linkTextDecorationHover);\n}\n\n.ic-0-9-2-Button__link:focus,\n  .ic-0-9-2-Button__link:active {\n\n  text-decoration: map(Button, linkTextDecorationFocus);\n}\n"

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(95);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _objectWithoutProperties2 = __webpack_require__(99);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(124);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactAddonsCssTransitionGroup = __webpack_require__(150);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _themeable = __webpack_require__(98);

	var _themeable2 = _interopRequireDefault(_themeable);

	var _CustomPropTypes = __webpack_require__(151);

	var _CustomPropTypes2 = _interopRequireDefault(_CustomPropTypes);

	var _keycode = __webpack_require__(138);

	var _keycode2 = _interopRequireDefault(_keycode);

	var _classnames = __webpack_require__(97);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _IconCheck = __webpack_require__(152);

	var _IconCheck2 = _interopRequireDefault(_IconCheck);

	var _IconX = __webpack_require__(153);

	var _IconX2 = _interopRequireDefault(_IconX);

	var _Checkbox = __webpack_require__(154);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	var _Checkbox3 = __webpack_require__(155);

	var _Checkbox4 = _interopRequireDefault(_Checkbox3);

	var _Checkbox5 = __webpack_require__(156);

	var _Checkbox6 = _interopRequireDefault(_Checkbox5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	  By default, the Checkbox component is a custom styled HTML checkbox. To default the checkbox to checked,
	  set the `defaultChecked` prop.

	  ```jsx_example
	  <div>
	    <Checkbox
	      label={lorem.sentence()}
	      value="foo" defaultChecked />
	    <Checkbox
	      label={lorem.sentence()}
	      value="bar" />
	  </div>
	  ```
	  Setting the `variant` prop to `toggle` turns the checkbox into a toggle switch.
	  Setting the `size` prop changes the size of the toggle switch. The default size
	  is `medium`.

	  ```jsx_example
	  <div>
	    <Checkbox label="Small size" value="small" variant="toggle" size="small" defaultChecked />
	    <br />
	    <Checkbox label="Medium size" value="medium" variant="toggle" />
	    <br />
	    <Checkbox label="Large size" value="large" variant="toggle" size="large" defaultChecked />
	  </div>
	  ```

	  You will probably want to hide the label text when using the toggle switch variant. Do that by wrapping
	  the text in the [ScreenReaderContent](#ScreenReaderContent) component.

	  ```jsx_example
	  <Checkbox
	    label={<ScreenReaderContent>Screenreader-accessible label</ScreenReaderContent>}
	    value="accessible" variant="toggle" />
	  ```

	**/
	var Checkbox = (_dec = (0, _themeable2.default)(_Checkbox4.default, _Checkbox6.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  (0, _inherits3.default)(Checkbox, _Component);

	  function Checkbox(props) {
	    (0, _classCallCheck3.default)(this, Checkbox);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Checkbox).call(this));

	    _this.handleChange = function (e) {
	      var _this$props = _this.props;
	      var onChange = _this$props.onChange;
	      var disabled = _this$props.disabled;
	      var checked = _this$props.checked;


	      if (disabled) {
	        e.preventDefault();
	        return;
	      }

	      if (checked === undefined) {
	        _this.setState({ checked: !_this.state.checked });
	      }

	      if (typeof onChange === 'function') {
	        onChange(e);
	      }
	    };

	    _this.handleKeyDown = function (e) {
	      if (_this.props.variant === 'toggle' && (e.keyCode === _keycode2.default.codes.enter || e.keyCode === _keycode2.default.codes.return)) {
	        _this.refs.input.click();
	        e.preventDefault();
	      }
	    };

	    if (props.checked === undefined) {
	      _this.state = {
	        checked: props.defaultChecked
	      };
	    }
	    return _this;
	  }

	  (0, _createClass3.default)(Checkbox, [{
	    key: 'renderOnIcon',
	    value: function renderOnIcon() {
	      if (this.checked) {
	        return _react2.default.createElement(_IconCheck2.default, { className: _Checkbox2.default.onIcon });
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: 'renderOffIcon',
	    value: function renderOffIcon() {
	      if (!this.checked && this.props.variant === 'toggle') {
	        return _react2.default.createElement(_IconX2.default, { className: _Checkbox2.default.offIcon });
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: 'renderLabel',
	    value: function renderLabel() {
	      return _react2.default.createElement(
	        'div',
	        { className: _Checkbox2.default.text },
	        this.props.label
	      );
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      _reactDom2.default.findDOMNode(this.refs.input).focus();
	    }
	  }, {
	    key: 'isFocused',
	    value: function isFocused() {
	      return document.activeElement === _reactDom2.default.findDOMNode(this.refs.input);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classes;

	      /* eslint-disable no-unused-vars, react/prop-types */
	      var _props = this.props;
	      var onChange = _props.onChange;
	      var label = _props.label;
	      var size = _props.size;
	      var disabled = _props.disabled;
	      var variant = _props.variant;
	      var props = (0, _objectWithoutProperties3.default)(_props, ['onChange', 'label', 'size', 'disabled', 'variant']);
	      /* eslint-enable no-unused-vars, react/prop-types */

	      var classes = (_classes = {}, (0, _defineProperty3.default)(_classes, _Checkbox2.default.root, true), (0, _defineProperty3.default)(_classes, _Checkbox2.default[variant], true), (0, _defineProperty3.default)(_classes, _Checkbox2.default[size], this.props.variant === 'toggle'), _classes);

	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(classes) },
	        _react2.default.createElement(
	          'label',
	          { className: _Checkbox2.default.label },
	          _react2.default.createElement('input', (0, _extends3.default)({
	            type: 'checkbox',
	            ref: 'input',
	            'aria-disabled': disabled ? 'true' : null,
	            className: _Checkbox2.default.input,
	            onChange: this.handleChange,
	            onKeyDown: this.handleKeyDown
	          }, props)),
	          variant === 'toggle' && this.renderLabel(),
	          _react2.default.createElement(
	            'div',
	            { className: _Checkbox2.default.layout },
	            _react2.default.createElement(
	              'div',
	              { className: _Checkbox2.default.facade, 'aria-hidden': 'true' },
	              _react2.default.createElement(
	                _reactAddonsCssTransitionGroup2.default,
	                {
	                  transitionName: { enter: _Checkbox2.default['enter'] },
	                  component: 'div',
	                  transitionLeave: false,
	                  transitionEnterTimeout: 0 },
	                this.renderOnIcon(),
	                this.renderOffIcon()
	              )
	            ),
	            (variant === 'simple' || variant === 'menuitem') && this.renderLabel()
	          )
	        )
	      );
	    }
	  }, {
	    key: 'checked',
	    get: function get() {
	      return this.props.checked === undefined ? this.state.checked : this.props.checked;
	    }
	  }]);
	  return Checkbox;
	}(_react.Component), _class2.propTypes = {
	  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
	  label: _react.PropTypes.node.isRequired,
	  id: _react.PropTypes.string,
	  name: _react.PropTypes.string,
	  /* whether to set the input to checked or not on initial render */
	  defaultChecked: _react.PropTypes.bool,
	  /**
	  * whether the input is checked or not (must be accompanied by an `onChange` prop)
	  */
	  checked: _CustomPropTypes2.default.controllable(_react.PropTypes.bool, 'onChange', 'defaultChecked'),
	  /**
	  * when used with the `checked` prop, the component will not control its own state
	  */
	  onChange: _react.PropTypes.func,
	  disabled: _react.PropTypes.bool,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
	  variant: _react.PropTypes.oneOf(['simple', 'toggle', 'menuitem'])
	}, _class2.defaultProps = {
	  size: 'medium',
	  variant: 'simple',
	  disabled: false
	}, _temp)) || _class);
	exports.default = Checkbox;

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_150__;

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  validChildren: function validChildren(validTypes) {
	    return function (props, propName, componentName) {
	      var error = void 0;
	      var children = props[propName];
	      var validTypeNames = validTypes.map(function (type) {
	        return type.displayName || type.name || type;
	      });

	      _react2.default.Children.forEach(children, function (child) {
	        var childName = child.type.displayName || child.type.name || child.type;

	        if (validTypeNames.indexOf(childName) < 0) {
	          error = new Error('Expected one of ' + validTypeNames.join(', ') + ' in ' + componentName + ' but found `' + childName + '`');
	        }
	      });

	      return error;
	    };
	  },
	  controllable: function controllable(propType) {
	    var handlerName = arguments.length <= 1 || arguments[1] === undefined ? 'onChange' : arguments[1];
	    var defaultPropName = arguments.length <= 2 || arguments[2] === undefined ? 'defaultValue' : arguments[2];

	    return function (props, propName, componentName) {
	      var error = propType.apply(null, arguments);
	      if (error) {
	        return error;
	      }

	      if (props[propName] && typeof props[handlerName] !== 'function') {
	        return new Error(['You provided a `' + propName + '` prop without an `' + handlerName + '` handler on `' + componentName + '`.', 'This will render a controlled component. ', 'If the component should be uncontrolled and manage its own state, use `' + defaultPropName + '`. ', 'Otherwise, set `' + handlerName + '`.'].join(''));
	      }
	    };
	  }
	};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = IconCheck;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function IconCheck(_ref) {
	  var className = _ref.className;

	  return _react2.default.createElement(
	    "svg",
	    { xmlns: "http://www.w3.org/2000/svg",
	      x: "0",
	      y: "0",
	      viewBox: "0 0 16 16",
	      "enable-background": "new 0 0 16 16",
	      className: className, "aria-hidden": "true" },
	    _react2.default.createElement("polygon", { points: "16 4.3 13.4 1.8 6.6 8.7 2.6 4.8 0 7.4 6.6 13.8" })
	  );
	}

	IconCheck.propTypes = {
	  className: _react.PropTypes.string
	};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = IconX;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function IconX(_ref) {
	  var className = _ref.className;

	  return _react2.default.createElement(
	    "svg",
	    { xmlns: "http://www.w3.org/2000/svg",
	      x: "0",
	      y: "0",
	      viewBox: "0 0 16 16",
	      "enable-background": "new 0 0 16 16",
	      className: className, "aria-hidden": "true" },
	    _react2.default.createElement("polygon", { points: "15,4.3 11.8,1 8,4.8 4.2,1 1,4.3 4.7,8.1 1,11.7 4.2,15 8,11.2 11.8,15 15,11.7 11.3,8.1" })
	  );
	}

	IconX.propTypes = {
	  className: _react.PropTypes.string
	};

/***/ },
/* 154 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-Checkbox__root","label":"ic-0-9-2-Checkbox__label","input":"ic-0-9-2-Checkbox__input","facadeLayout":"ic-0-9-2-Checkbox__facadeLayout","simple":"ic-0-9-2-Checkbox__simple","menuitem":"ic-0-9-2-Checkbox__menuitem","layout":"ic-0-9-2-Checkbox__layout","facade":"ic-0-9-2-Checkbox__facade","onIcon":"ic-0-9-2-Checkbox__onIcon","enter":"ic-0-9-2-Checkbox__enter","enter-active":"ic-0-9-2-Checkbox__enter-active","text":"ic-0-9-2-Checkbox__text","toggle":"ic-0-9-2-Checkbox__toggle","small":"ic-0-9-2-Checkbox__small","offIcon":"ic-0-9-2-Checkbox__offIcon","medium":"ic-0-9-2-Checkbox__medium","large":"ic-0-9-2-Checkbox__large"};

/***/ },
/* 155 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var borders = _ref.borders;
	  var colors = _ref.colors;
	  var typography = _ref.typography;

	  return {
	    borderColor: colors.colorNeutralAccent,
	    borderColorHover: colors.colorBrandAccent,
	    borderRadius: borders.borderRadiusSmall,
	    backgroundColor: colors.colorBackground,
	    labelTextColor: colors.colorText,
	    labelFontFamily: typography.fontFamilyBase,
	    checkmarkFillColor: colors.colorBackground,
	    checkmarkCheckedFillColor: colors.colorBrandAccent,
	    focusOutlineColor: colors.colorFocusTransparent,
	    labelLineHeight: typography.lineHeightBase,
	    labelFontSize: typography.fontSizeSmall,

	    toggleBorderRadius: borders.borderRadiusLarge,
	    toggleBgColor: colors.colorNeutral,
	    toggleHandleBgColor: colors.colorBackground,
	    toggleColorOn: colors.colorSuccessAccent,
	    toggleLabelFontWeight: typography.fontWeightBold
	  };
	};

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(157);
	module.exports = __webpack_require__(158);

/***/ },
/* 157 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-Checkbox__root","text":"ic-0-9-2-Checkbox__text","facade":"ic-0-9-2-Checkbox__facade","simple":"ic-0-9-2-Checkbox__simple","menuitem":"ic-0-9-2-Checkbox__menuitem","input":"ic-0-9-2-Checkbox__input","layout":"ic-0-9-2-Checkbox__layout","toggle":"ic-0-9-2-Checkbox__toggle"};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	if (false) {
	  module.hot.accept([]);
	}
	module.exports = ".ic-0-9-2-Checkbox__root .ic-0-9-2-Checkbox__text {\n  color: map(Checkbox, labelTextColor);\n  line-height: map(Checkbox, labelLineHeight);\n  font-family: map(Checkbox, labelFontFamily);\n}\n\n.ic-0-9-2-Checkbox__root .ic-0-9-2-Checkbox__facade {\n  color: map(Checkbox, checkmarkFillColor);\n}\n\n.ic-0-9-2-Checkbox__simple .ic-0-9-2-Checkbox__facade, .ic-0-9-2-Checkbox__menuitem .ic-0-9-2-Checkbox__facade {\n  border-color: map(Checkbox, borderColor);\n  border-radius: map(Checkbox, borderRadius);\n  background-color: map(Checkbox, backgroundColor);\n}\n\n.ic-0-9-2-Checkbox__simple .ic-0-9-2-Checkbox__text, .ic-0-9-2-Checkbox__menuitem .ic-0-9-2-Checkbox__text {\n  font-size: map(Checkbox, labelFontSize);\n}\n\n.ic-0-9-2-Checkbox__simple .ic-0-9-2-Checkbox__input:checked + .ic-0-9-2-Checkbox__layout .ic-0-9-2-Checkbox__facade, .ic-0-9-2-Checkbox__menuitem .ic-0-9-2-Checkbox__input:checked + .ic-0-9-2-Checkbox__layout .ic-0-9-2-Checkbox__facade {\n  background-color: map(Checkbox, checkmarkCheckedFillColor);\n  border-color: map(Checkbox, checkmarkCheckedFillColor);\n}\n\n.ic-0-9-2-Checkbox__simple .ic-0-9-2-Checkbox__input:focus + .ic-0-9-2-Checkbox__layout .ic-0-9-2-Checkbox__facade, .ic-0-9-2-Checkbox__menuitem .ic-0-9-2-Checkbox__input:focus + .ic-0-9-2-Checkbox__layout .ic-0-9-2-Checkbox__facade {\n  box-shadow: 0 0 0 6px map(Checkbox, focusOutlineColor);\n}\n\n.ic-0-9-2-Checkbox__simple .ic-0-9-2-Checkbox__input:hover + .ic-0-9-2-Checkbox__layout .ic-0-9-2-Checkbox__facade, .ic-0-9-2-Checkbox__menuitem .ic-0-9-2-Checkbox__input:hover + .ic-0-9-2-Checkbox__layout .ic-0-9-2-Checkbox__facade {\n  border-color: map(Checkbox, borderColorHover);\n}\n\n.ic-0-9-2-Checkbox__toggle .ic-0-9-2-Checkbox__layout {\n  background-color: map(Checkbox, toggleBgColor);\n  border-color: map(Checkbox, toggleBgColor);\n  border-radius: map(Checkbox, toggleBorderRadius);\n}\n\n.ic-0-9-2-Checkbox__toggle .ic-0-9-2-Checkbox__layout::before {\n  background-color: map(Checkbox, toggleHandleBgColor);\n  border-radius: calc(map(Checkbox, toggleBorderRadius) - 4px); /* offset by parent border width */\n}\n\n.ic-0-9-2-Checkbox__toggle .ic-0-9-2-Checkbox__text {\n  font-weight: map(Checkbox, toggleLabelFontWeight);\n}\n\n.ic-0-9-2-Checkbox__toggle .ic-0-9-2-Checkbox__input:checked ~ .ic-0-9-2-Checkbox__layout {\n  background-color: map(Checkbox, toggleColorOn);\n  border-color: map(Checkbox, toggleColorOn);\n}\n\n.ic-0-9-2-Checkbox__toggle .ic-0-9-2-Checkbox__input:focus ~ .ic-0-9-2-Checkbox__layout::before {\n  box-shadow:\n        0 3px 8px rgba(0, 0, 0, 0.4),\n        0 0 0 8px map(Checkbox, focusOutlineColor);\n}\n"

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _defineProperty2 = __webpack_require__(95);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _CustomPropTypes = __webpack_require__(151);

	var _CustomPropTypes2 = _interopRequireDefault(_CustomPropTypes);

	var _classnames = __webpack_require__(97);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _themeable = __webpack_require__(98);

	var _themeable2 = _interopRequireDefault(_themeable);

	var _Checkbox = __webpack_require__(149);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	var _safeCloneElement = __webpack_require__(130);

	var _safeCloneElement2 = _interopRequireDefault(_safeCloneElement);

	var _createChainedFunction = __webpack_require__(160);

	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

	var _CheckboxGroup = __webpack_require__(162);

	var _CheckboxGroup2 = _interopRequireDefault(_CheckboxGroup);

	var _CheckboxGroup3 = __webpack_require__(163);

	var _CheckboxGroup4 = _interopRequireDefault(_CheckboxGroup3);

	var _CheckboxGroup5 = __webpack_require__(164);

	var _CheckboxGroup6 = _interopRequireDefault(_CheckboxGroup5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	  A `<CheckboxGroup/>` is a group of [Checkbox](#Checkbox) components that share the same name. You can
	  set an array `value` for the entire group and it will handle setting the `checked` and `name` props for you.

	  ```jsx_example
	  <CheckboxGroup name="sports"
	    onChange={function (value) { console.log(value) }}
	    defaultValue={['football', 'volleyball']}
	    description="Select your favorite sports">
	    <Checkbox label="Football" value="football" />
	    <Checkbox label="Basketball" value="basketball" />
	    <Checkbox label="Volleyball" value="volleyball" />
	    <Checkbox label="Other" value="other" />
	  </CheckboxGroup>
	  ```
	**/

	var CheckboxGroup = (_dec = (0, _themeable2.default)(_CheckboxGroup4.default, _CheckboxGroup6.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  (0, _inherits3.default)(CheckboxGroup, _Component);

	  function CheckboxGroup(props) {
	    (0, _classCallCheck3.default)(this, CheckboxGroup);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CheckboxGroup).call(this));

	    _this.handleChange = function (e) {
	      var value = _this.value || [];

	      if (_this.props.disabled) {
	        e.preventDefault();
	        return;
	      }

	      if (e.target.checked) {
	        value.push(e.target.value);
	      } else {
	        value.splice(value.indexOf(e.target.value), 1);
	      }

	      if (_this.props.value === undefined) {
	        _this.setState({ value: value });
	      }

	      if (typeof _this.props.onChange === 'function') {
	        _this.props.onChange(value);
	      }
	    };

	    if (props.value === undefined) {
	      _this.state = {
	        value: props.defaultValue
	      };
	    }
	    return _this;
	  }

	  (0, _createClass3.default)(CheckboxGroup, [{
	    key: 'renderChildren',
	    value: function renderChildren() {
	      var _this2 = this;

	      var _props = this.props;
	      var children = _props.children;
	      var name = _props.name;
	      var size = _props.size;
	      var disabled = _props.disabled;


	      var value = this.value || [];

	      return _react.Children.map(children, function (child, index) {
	        if (child && child.type === _Checkbox2.default) {
	          var onChange = child.props.onChange;

	          return (0, _safeCloneElement2.default)(child, (0, _extends3.default)({}, child.props, {
	            name: name,
	            disabled: disabled || child.props.disabled,
	            size: size,
	            checked: value && value.indexOf(child.props.value) > -1,
	            onChange: (0, _createChainedFunction2.default)(onChange, _this2.handleChange)
	          }));
	        } else {
	          return child; // PropType validation should handle errors
	        }
	      });
	    }
	  }, {
	    key: 'renderErrors',
	    value: function renderErrors() {
	      var errors = this.props.errors;

	      if (errors) {
	        return errors.map(function (msg, i) {
	          return _react2.default.createElement(
	            'div',
	            { key: 'error' + i, className: _CheckboxGroup2.default.errors },
	            msg
	          );
	        });
	      }
	    }
	  }, {
	    key: 'renderDescription',
	    value: function renderDescription() {
	      var description = this.props.description;

	      if (description) {
	        return _react2.default.createElement(
	          'div',
	          { className: _CheckboxGroup2.default.description },
	          description
	        );
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = (0, _defineProperty3.default)({}, _CheckboxGroup2.default.root, true);

	      return _react2.default.createElement(
	        'fieldset',
	        { role: 'group', className: (0, _classnames2.default)(classes) },
	        _react2.default.createElement(
	          'legend',
	          { className: _CheckboxGroup2.default.label },
	          this.renderDescription(),
	          this.renderErrors()
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _CheckboxGroup2.default.root },
	          this.renderChildren()
	        )
	      );
	    }
	  }, {
	    key: 'value',
	    get: function get() {
	      return this.props.value === undefined ? this.state.value : this.props.value;
	    }
	  }]);
	  return CheckboxGroup;
	}(_react.Component), _class2.propTypes = {
	  name: _react.PropTypes.string.isRequired,
	  description: _react.PropTypes.node.isRequired,
	  /**
	  * value to set on initial render
	  */
	  defaultValue: _react.PropTypes.array,
	  /**
	  * the selected values (must be accompanied by an `onChange` prop)
	  */
	  value: _CustomPropTypes2.default.controllable(_react.PropTypes.array),
	  /**
	  * when used with the `value` prop, the component will not control its own state
	  */
	  onChange: _react.PropTypes.func,
	  disabled: _react.PropTypes.bool,
	  errors: _react.PropTypes.array,
	  /**
	  * children of type 'Checkbox'
	  **/
	  children: _CustomPropTypes2.default.validChildren([_Checkbox2.default]),
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large'])
	}, _class2.defaultProps = {
	  size: 'medium'
	}, _temp)) || _class);
	exports.default = CheckboxGroup;

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createChainedFunction = __webpack_require__(161);

	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _createChainedFunction2.default;

/***/ },
/* 161 */
/***/ function(module, exports) {

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @param {function} functions to chain
	 * @returns {function|null}
	 */
	'use strict';

	exports.__esModule = true;
	function createChainedFunction() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  return funcs.filter(function (f) {
	    return f != null;
	  }).reduce(function (acc, f) {
	    if (typeof f !== 'function') {
	      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
	    }

	    if (acc === null) {
	      return f;
	    }

	    return function chainedFunction() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      acc.apply(this, args);
	      f.apply(this, args);
	    };
	  }, null);
	}

	exports['default'] = createChainedFunction;
	module.exports = exports['default'];

/***/ },
/* 162 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-CheckboxGroup__root","label":"ic-0-9-2-CheckboxGroup__label","description":"ic-0-9-2-CheckboxGroup__description","errors":"ic-0-9-2-CheckboxGroup__errors","success":"ic-0-9-2-CheckboxGroup__success","danger":"ic-0-9-2-CheckboxGroup__danger"};

/***/ },
/* 163 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var borders = _ref.borders;
	  var colors = _ref.colors;
	  var typography = _ref.typography;

	  return {
	    borderStyle: borders.borderStyleDefault,
	    borderRadius: borders.borderRadiusLarge,
	    labelTextColor: colors.colorText,
	    labelFontWeight: typography.fontWeightBold,
	    labelFontFamily: typography.fontFamilyBase
	  };
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(165);
	module.exports = __webpack_require__(166);

/***/ },
/* 165 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"label":"ic-0-9-2-CheckboxGroup__label"};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	if (false) {
	  module.hot.accept([]);
	}
	module.exports = ".ic-0-9-2-CheckboxGroup__label {\n  color: map(CheckboxGroup, labelTextColor);\n  font-weight: map(CheckboxGroup, labelFontWeight);\n  font-family: map(CheckboxGroup, labelFontFamily);\n}\n\n"

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(95);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _objectWithoutProperties2 = __webpack_require__(99);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(97);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _themeable = __webpack_require__(98);

	var _themeable2 = _interopRequireDefault(_themeable);

	var _reactPropTypes = __webpack_require__(168);

	var _ContextBox = __webpack_require__(178);

	var _ContextBox2 = _interopRequireDefault(_ContextBox);

	var _ContextBox3 = __webpack_require__(179);

	var _ContextBox4 = _interopRequireDefault(_ContextBox3);

	var _ContextBox5 = __webpack_require__(180);

	var _ContextBox6 = _interopRequireDefault(_ContextBox5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	  A `<ContextBox/>` is a container component that displays contextual information. It may or may not
	  be displayed as on overlay using a [Popover](#Popover).

	  ```jsx_example
	  <div>
	    <ContextBox><Heading>Hello World</Heading></ContextBox>&nbsp;
	    <ContextBox placement="right"><Heading>Hello World</Heading></ContextBox>&nbsp;
	    <ContextBox placement="bottom"><Heading>Hello World</Heading></ContextBox>&nbsp;
	    <ContextBox placement="left"><Heading>Hello World</Heading></ContextBox>
	  </div>
	  ```

	  ```jsx_example
	  <div>
	    <ContextBox variant="inverse"><Heading>Hello World</Heading></ContextBox>&nbsp;
	    <ContextBox placement="right" variant="inverse"><Heading>Hello World</Heading></ContextBox>&nbsp;
	    <ContextBox placement="bottom" variant="inverse"><Heading>Hello World</Heading></ContextBox>&nbsp;
	    <ContextBox placement="left" variant="inverse"><Heading>Hello World</Heading></ContextBox>
	  </div>
	  ```
	 **/
	var ContextBox = (_dec = (0, _themeable2.default)(_ContextBox4.default, _ContextBox6.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  (0, _inherits3.default)(ContextBox, _Component);

	  function ContextBox() {
	    (0, _classCallCheck3.default)(this, ContextBox);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ContextBox).apply(this, arguments));
	  }

	  (0, _createClass3.default)(ContextBox, [{
	    key: 'render',
	    value: function render() {
	      var _classes;

	      var _props = this.props;
	      var positioned = _props.positioned;
	      var placement = _props.placement;
	      var variant = _props.variant;
	      var children = _props.children;
	      var withArrow = _props.withArrow;
	      var positionLeft = _props.positionLeft;
	      var positionTop = _props.positionTop;
	      var arrowOffsetTop = _props.arrowOffsetTop;
	      var arrowOffsetLeft = _props.arrowOffsetLeft;
	      var props = (0, _objectWithoutProperties3.default)(_props, ['positioned', 'placement', 'variant', 'children', 'withArrow', 'positionLeft', 'positionTop', 'arrowOffsetTop', 'arrowOffsetLeft']);


	      var classes = (_classes = {}, (0, _defineProperty3.default)(_classes, _ContextBox2.default.root, true), (0, _defineProperty3.default)(_classes, _ContextBox2.default[variant], true), (0, _defineProperty3.default)(_classes, _ContextBox2.default['with-arrow'], withArrow), (0, _defineProperty3.default)(_classes, _ContextBox2.default['positioned--' + (positioned || placement)], true), _classes);

	      var containerStyle = {
	        position: positionTop || positionLeft ? 'absolute' : null,
	        left: positionLeft,
	        top: positionTop
	      };

	      var arrowStyle = {
	        left: arrowOffsetLeft,
	        top: arrowOffsetTop
	      };

	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, props, { className: (0, _classnames2.default)(classes), style: containerStyle }),
	        withArrow && _react2.default.createElement('div', { className: _ContextBox2.default.arrow, style: arrowStyle }),
	        _react2.default.createElement(
	          'div',
	          { className: _ContextBox2.default.content },
	          children
	        )
	      );
	    }
	  }]);
	  return ContextBox;
	}(_react.Component), _class2.propTypes = {
	  children: _react.PropTypes.node.isRequired,
	  variant: _react.PropTypes.oneOf(['default', 'inverse']),
	  withArrow: _react.PropTypes.bool,
	  arrowOffsetLeft: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  arrowOffsetTop: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  placement: _react.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
	  positionLeft: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  positionTop: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  /**
	   * @deprecated
	   */
	  positioned: (0, _reactPropTypes.deprecated)(_react.PropTypes.oneOf(['above', 'below', 'left', 'right']), 'Use `placement`.')
	}, _class2.defaultProps = {
	  variant: 'default',
	  placement: 'top',
	  withArrow: true
	}, _temp)) || _class);
	exports.default = ContextBox;

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _isRequiredForA11y2 = __webpack_require__(169);

	var _isRequiredForA11y3 = _interopRequireDefault(_isRequiredForA11y2);

	exports.isRequiredForA11y = _isRequiredForA11y3['default'];

	var _mountable2 = __webpack_require__(170);

	var _mountable3 = _interopRequireDefault(_mountable2);

	exports.mountable = _mountable3['default'];

	var _elementType2 = __webpack_require__(172);

	var _elementType3 = _interopRequireDefault(_elementType2);

	exports.elementType = _elementType3['default'];

	var _keyOf2 = __webpack_require__(173);

	var _keyOf3 = _interopRequireDefault(_keyOf2);

	exports.keyOf = _keyOf3['default'];

	var _singlePropFrom2 = __webpack_require__(174);

	var _singlePropFrom3 = _interopRequireDefault(_singlePropFrom2);

	exports.singlePropFrom = _singlePropFrom3['default'];

	var _all2 = __webpack_require__(175);

	var _all3 = _interopRequireDefault(_all2);

	exports.all = _all3['default'];

	var _deprecated2 = __webpack_require__(176);

	var _deprecated3 = _interopRequireDefault(_deprecated2);

	exports.deprecated = _deprecated3['default'];

/***/ },
/* 169 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = isRequiredForA11y;

	function isRequiredForA11y(propType) {
	  return function validate(props, propName, componentName) {
	    if (props[propName] == null) {
	      return new Error("The prop '" + propName + "' is required to make '" + componentName + "' accessible" + " for users using assistive technologies such as screen readers");
	    }

	    return propType(props, propName, componentName);
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _common = __webpack_require__(171);

	/**
	 * Checks whether a prop provides a DOM element
	 *
	 * The element can be provided in two forms:
	 * - Directly passed
	 * - Or passed an object that has a `render` method
	 *
	 * @param props
	 * @param propName
	 * @param componentName
	 * @returns {Error|undefined}
	 */

	function validate(props, propName, componentName) {
	  if (typeof props[propName] !== 'object' || typeof props[propName].render !== 'function' && props[propName].nodeType !== 1) {
	    return new Error(_common.errMsg(props, propName, componentName, ', expected a DOM element or an object that has a `render` method'));
	  }
	}

	exports['default'] = _common.createChainableTypeChecker(validate);
	module.exports = exports['default'];

/***/ },
/* 171 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.errMsg = errMsg;
	exports.createChainableTypeChecker = createChainableTypeChecker;

	function errMsg(props, propName, componentName, msgContinuation) {
	  return 'Invalid prop \'' + propName + '\' of value \'' + props[propName] + '\'' + (' supplied to \'' + componentName + '\'' + msgContinuation);
	}

	/**
	 * Create chain-able isRequired validator
	 *
	 * Largely copied directly from:
	 *  https://github.com/facebook/react/blob/0.11-stable/src/core/ReactPropTypes.js#L94
	 */

	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName) {
	    componentName = componentName || '<<anonymous>>';
	    if (props[propName] == null) {
	      if (isRequired) {
	        return new Error('Required prop \'' + propName + '\' was not specified in \'' + componentName + '\'.');
	      }
	    } else {
	      return validate(props, propName, componentName);
	    }
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _common = __webpack_require__(171);

	/**
	 * Checks whether a prop provides a type of element.
	 *
	 * The type of element can be provided in two forms:
	 * - tag name (string)
	 * - a return value of React.createClass(...)
	 *
	 * @param props
	 * @param propName
	 * @param componentName
	 * @returns {Error|undefined}
	 */

	function validate(props, propName, componentName) {
	  var errBeginning = _common.errMsg(props, propName, componentName, '. Expected an Element `type`');

	  if (typeof props[propName] !== 'function') {
	    if (_react2['default'].isValidElement(props[propName])) {
	      return new Error(errBeginning + ', not an actual Element');
	    }

	    if (typeof props[propName] !== 'string') {
	      return new Error(errBeginning + ' such as a tag name or return value of React.createClass(...)');
	    }
	  }
	}

	exports['default'] = _common.createChainableTypeChecker(validate);
	module.exports = exports['default'];

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = keyOf;

	var _common = __webpack_require__(171);

	/**
	 * Checks whether a prop matches a key of an associated object
	 *
	 * @param props
	 * @param propName
	 * @param componentName
	 * @returns {Error|undefined}
	 */

	function keyOf(obj) {
	  function validate(props, propName, componentName) {
	    var propValue = props[propName];
	    if (!obj.hasOwnProperty(propValue)) {
	      var valuesString = JSON.stringify(Object.keys(obj));
	      return new Error(_common.errMsg(props, propName, componentName, ', expected one of ' + valuesString + '.'));
	    }
	  }
	  return _common.createChainableTypeChecker(validate);
	}

	module.exports = exports['default'];

/***/ },
/* 174 */
/***/ function(module, exports) {

	/**
	 * Checks if only one of the listed properties is in use. An error is given
	 * if multiple have a value
	 *
	 * @param props
	 * @param propName
	 * @param componentName
	 * @returns {Error|undefined}
	 */
	'use strict';

	exports.__esModule = true;
	exports['default'] = createSinglePropFromChecker;

	function createSinglePropFromChecker() {
	  for (var _len = arguments.length, arrOfProps = Array(_len), _key = 0; _key < _len; _key++) {
	    arrOfProps[_key] = arguments[_key];
	  }

	  function validate(props, propName) {
	    var usedPropCount = arrOfProps.map(function (listedProp) {
	      return props[listedProp];
	    }).reduce(function (acc, curr) {
	      return acc + (curr !== undefined ? 1 : 0);
	    }, 0);

	    if (usedPropCount > 1) {
	      var first = arrOfProps[0];
	      var others = arrOfProps.slice(1);

	      var message = others.join(', ') + ' and ' + first;
	      return new Error('Invalid prop \'' + propName + '\', only one of the following ' + ('may be provided: ' + message));
	    }
	  }
	  return validate;
	}

	module.exports = exports['default'];

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = all;

	var _common = __webpack_require__(171);

	function all() {
	  for (var _len = arguments.length, propTypes = Array(_len), _key = 0; _key < _len; _key++) {
	    propTypes[_key] = arguments[_key];
	  }

	  if (propTypes === undefined) {
	    throw new Error('No validations provided');
	  }

	  if (propTypes.some(function (propType) {
	    return typeof propType !== 'function';
	  })) {
	    throw new Error('Invalid arguments, must be functions');
	  }

	  if (propTypes.length === 0) {
	    throw new Error('No validations provided');
	  }

	  function validate(props, propName, componentName) {
	    for (var i = 0; i < propTypes.length; i++) {
	      var result = propTypes[i](props, propName, componentName);

	      if (result !== undefined && result !== null) {
	        return result;
	      }
	    }
	  }

	  return _common.createChainableTypeChecker(validate);
	}

	module.exports = exports['default'];

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = deprecated;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(177);

	var _warning2 = _interopRequireDefault(_warning);

	var warned = {};

	function deprecated(propType, explanation) {
	  return function validate(props, propName, componentName) {
	    if (props[propName] != null) {
	      var message = '"' + propName + '" property of "' + componentName + '" has been deprecated.\n' + explanation;
	      if (!warned[message]) {
	        _warning2['default'](false, message);
	        warned[message] = true;
	      }
	    }

	    return propType(props, propName, componentName);
	  };
	}

	function _resetWarned() {
	  warned = {};
	}

	deprecated._resetWarned = _resetWarned;
	module.exports = exports['default'];

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (false) {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;


/***/ },
/* 178 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-ContextBox__root","default":"ic-0-9-2-ContextBox__default","inverse":"ic-0-9-2-ContextBox__inverse","content":"ic-0-9-2-ContextBox__content","with-arrow":"ic-0-9-2-ContextBox__with-arrow","arrow":"ic-0-9-2-ContextBox__arrow","positioned--right":"ic-0-9-2-ContextBox__positioned--right","positioned--left":"ic-0-9-2-ContextBox__positioned--left","positioned--below":"ic-0-9-2-ContextBox__positioned--below","positioned--bottom":"ic-0-9-2-ContextBox__positioned--bottom","positioned--above":"ic-0-9-2-ContextBox__positioned--above","positioned--top":"ic-0-9-2-ContextBox__positioned--top"};

/***/ },
/* 179 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var colors = _ref.colors;

	  return {
	    borderColor: colors.colorNeutralMedium,
	    backgroundColor: colors.colorBackground,
	    boxShadowColor: 'rgba(0, 0, 0, 0.1)',
	    textColor: colors.colorText,

	    borderColorInverse: 'transparent',
	    backgroundColorInverse: colors.colorBackgroundInverse,
	    textColorInverse: colors.colorTextInverse,
	    boxShadowColorInverse: 'transparent'
	  };
	};

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(181);
	module.exports = __webpack_require__(182);

/***/ },
/* 181 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"default":"ic-0-9-2-ContextBox__default","inverse":"ic-0-9-2-ContextBox__inverse","with-arrow":"ic-0-9-2-ContextBox__with-arrow","positioned--right":"ic-0-9-2-ContextBox__positioned--right","arrow":"ic-0-9-2-ContextBox__arrow","positioned--left":"ic-0-9-2-ContextBox__positioned--left","positioned--below":"ic-0-9-2-ContextBox__positioned--below","positioned--bottom":"ic-0-9-2-ContextBox__positioned--bottom","positioned--above":"ic-0-9-2-ContextBox__positioned--above","positioned--top":"ic-0-9-2-ContextBox__positioned--top"};

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	if (false) {
	  module.hot.accept([]);
	}
	module.exports = ".ic-0-9-2-ContextBox__default {\n  background: map(ContextBox, backgroundColor);\n  border-color: map(ContextBox, borderColor);\n  box-shadow: 0 1px 6px map(ContextBox, boxShadowColor);\n  color: map(ContextBox, textColor);\n}\n\n.ic-0-9-2-ContextBox__inverse {\n  background: map(ContextBox, backgroundColorInverse);\n  border-color: map(ContextBox, borderColorInverse);\n  box-shadow: 0 1px 6px map(ContextBox, boxShadowColorInverse);\n  color: map(ContextBox, textColorInverse);\n}\n\n/* arrow on the left */\n\n.ic-0-9-2-ContextBox__default.ic-0-9-2-ContextBox__with-arrow.ic-0-9-2-ContextBox__positioned--right .ic-0-9-2-ContextBox__arrow::after {\n  border-right-color: map(ContextBox, backgroundColor);\n}\n\n.ic-0-9-2-ContextBox__default.ic-0-9-2-ContextBox__with-arrow.ic-0-9-2-ContextBox__positioned--right .ic-0-9-2-ContextBox__arrow {\n  border-right-color: map(ContextBox, borderColor);\n}\n\n/* arrow on the right */\n\n.ic-0-9-2-ContextBox__default.ic-0-9-2-ContextBox__with-arrow.ic-0-9-2-ContextBox__positioned--left .ic-0-9-2-ContextBox__arrow::after {\n  border-left-color: map(ContextBox, backgroundColor);\n}\n\n.ic-0-9-2-ContextBox__default.ic-0-9-2-ContextBox__with-arrow.ic-0-9-2-ContextBox__positioned--left .ic-0-9-2-ContextBox__arrow {\n  border-left-color: map(ContextBox, borderColor);\n}\n\n/* arrow on top */\n\n.ic-0-9-2-ContextBox__default.ic-0-9-2-ContextBox__with-arrow.ic-0-9-2-ContextBox__positioned--below .ic-0-9-2-ContextBox__arrow::after, .ic-0-9-2-ContextBox__default.ic-0-9-2-ContextBox__with-arrow.ic-0-9-2-ContextBox__positioned--bottom .ic-0-9-2-ContextBox__arrow::after {\n  border-bottom-color: map(ContextBox, backgroundColor);\n}\n\n.ic-0-9-2-ContextBox__default.ic-0-9-2-ContextBox__with-arrow.ic-0-9-2-ContextBox__positioned--below .ic-0-9-2-ContextBox__arrow, .ic-0-9-2-ContextBox__default.ic-0-9-2-ContextBox__with-arrow.ic-0-9-2-ContextBox__positioned--bottom .ic-0-9-2-ContextBox__arrow {\n  border-bottom-color: map(ContextBox, borderColor);\n}\n\n/* arrow on bottom */\n\n.ic-0-9-2-ContextBox__default.ic-0-9-2-ContextBox__with-arrow.ic-0-9-2-ContextBox__positioned--above .ic-0-9-2-ContextBox__arrow::after, .ic-0-9-2-ContextBox__default.ic-0-9-2-ContextBox__with-arrow.ic-0-9-2-ContextBox__positioned--top .ic-0-9-2-ContextBox__arrow::after {\n  border-top-color: map(ContextBox, backgroundColor);\n}\n\n.ic-0-9-2-ContextBox__default.ic-0-9-2-ContextBox__with-arrow.ic-0-9-2-ContextBox__positioned--above .ic-0-9-2-ContextBox__arrow, .ic-0-9-2-ContextBox__default.ic-0-9-2-ContextBox__with-arrow.ic-0-9-2-ContextBox__positioned--top .ic-0-9-2-ContextBox__arrow {\n  border-top-color: map(ContextBox, borderColor);\n}\n\n/* arrow on the left */\n\n.ic-0-9-2-ContextBox__inverse.ic-0-9-2-ContextBox__with-arrow.ic-0-9-2-ContextBox__positioned--right .ic-0-9-2-ContextBox__arrow::after {\n  border-right-color: map(ContextBox, backgroundColorInverse);\n}\n\n.ic-0-9-2-ContextBox__inverse.ic-0-9-2-ContextBox__with-arrow.ic-0-9-2-ContextBox__positioned--right .ic-0-9-2-ContextBox__arrow {\n  border-right-color: map(ContextBox, borderColorInverse);\n}\n\n/* arrow on the right */\n\n.ic-0-9-2-ContextBox__inverse.ic-0-9-2-ContextBox__with-arrow.ic-0-9-2-ContextBox__positioned--left .ic-0-9-2-ContextBox__arrow::after {\n  border-left-color: map(ContextBox, backgroundColorInverse);\n}\n\n.ic-0-9-2-ContextBox__inverse.ic-0-9-2-ContextBox__with-arrow.ic-0-9-2-ContextBox__positioned--left .ic-0-9-2-ContextBox__arrow {\n  border-left-color: map(ContextBox, borderColorInverse);\n}\n\n/* arrow on top */\n\n.ic-0-9-2-ContextBox__inverse.ic-0-9-2-ContextBox__with-arrow.ic-0-9-2-ContextBox__positioned--below .ic-0-9-2-ContextBox__arrow::after, .ic-0-9-2-ContextBox__inverse.ic-0-9-2-ContextBox__with-arrow.ic-0-9-2-ContextBox__positioned--bottom .ic-0-9-2-ContextBox__arrow::after {\n  border-bottom-color: map(ContextBox, backgroundColorInverse);\n}\n\n.ic-0-9-2-ContextBox__inverse.ic-0-9-2-ContextBox__with-arrow.ic-0-9-2-ContextBox__positioned--below .ic-0-9-2-ContextBox__arrow, .ic-0-9-2-ContextBox__inverse.ic-0-9-2-ContextBox__with-arrow.ic-0-9-2-ContextBox__positioned--bottom .ic-0-9-2-ContextBox__arrow {\n  border-bottom-color: map(ContextBox, borderColorInverse);\n}\n\n/* arrow on bottom */\n\n.ic-0-9-2-ContextBox__inverse.ic-0-9-2-ContextBox__with-arrow.ic-0-9-2-ContextBox__positioned--above .ic-0-9-2-ContextBox__arrow::after, .ic-0-9-2-ContextBox__inverse.ic-0-9-2-ContextBox__with-arrow.ic-0-9-2-ContextBox__positioned--top .ic-0-9-2-ContextBox__arrow::after {\n  border-top-color: map(ContextBox, backgroundColorInverse);\n}\n\n.ic-0-9-2-ContextBox__inverse.ic-0-9-2-ContextBox__with-arrow.ic-0-9-2-ContextBox__positioned--above .ic-0-9-2-ContextBox__arrow, .ic-0-9-2-ContextBox__inverse.ic-0-9-2-ContextBox__with-arrow.ic-0-9-2-ContextBox__positioned--top .ic-0-9-2-ContextBox__arrow {\n  border-top-color: map(ContextBox, borderColorInverse);\n}\n"

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GridRow = exports.GridCol = exports.default = undefined;

	var _defineProperty2 = __webpack_require__(95);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(99);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class, _class2, _temp;

	var _GridCol = __webpack_require__(184);

	Object.defineProperty(exports, 'GridCol', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_GridCol).default;
	  }
	});

	var _GridRow = __webpack_require__(191);

	Object.defineProperty(exports, 'GridRow', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_GridRow).default;
	  }
	});

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _CustomPropTypes = __webpack_require__(151);

	var _CustomPropTypes2 = _interopRequireDefault(_CustomPropTypes);

	var _classnames = __webpack_require__(97);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _themeable = __webpack_require__(98);

	var _themeable2 = _interopRequireDefault(_themeable);

	var _capitalizeFirstLetter = __webpack_require__(190);

	var _capitalizeFirstLetter2 = _interopRequireDefault(_capitalizeFirstLetter);

	var _safeCloneElement = __webpack_require__(130);

	var _safeCloneElement2 = _interopRequireDefault(_safeCloneElement);

	var _GridRow2 = _interopRequireDefault(_GridRow);

	var _Grid = __webpack_require__(197);

	var _Grid2 = _interopRequireDefault(_Grid);

	var _Grid3 = __webpack_require__(198);

	var _Grid4 = _interopRequireDefault(_Grid3);

	var _Grid5 = __webpack_require__(199);

	var _Grid6 = _interopRequireDefault(_Grid5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**

	  ### Create a basic column layout

	  Simply create a `<Grid>` with some `<GridRow>` and `GridCol` children, and
	  the component will evenly distribute its columns.

	  Note the `visualDebug` prop you can set if you're wondering
	  exactly where your grid columns are.

	  ```jsx_example
	  <Grid visualDebug>
	    <GridRow>
	      <GridCol>
	        {lorem.paragraph()}
	      </GridCol>
	      <GridCol>
	        {lorem.paragraph()}
	      </GridCol>
	      <GridCol>
	        {lorem.paragraph()}
	      </GridCol>
	    </GridRow>
	  </Grid>
	  ```

	  ### Make the grid stack until a certain breakpoint/screen width

	  Often you will want to stack your `<GridCol>`s until you reach a certain
	  screen width. To do this, use the `startAt` prop.

	  Reduce the screen width and see how the grid below only displays its
	  columns inline after it hits the `desktop` breakpoint. Note that by
	  default, stacked columns have bottom margin for visual separation.

	  ```jsx_example
	  <Grid startAt="desktop" visualDebug>
	    <GridRow>
	      <GridCol>
	        {lorem.paragraph()}
	      </GridCol>
	      <GridCol>
	        {lorem.paragraph()}
	      </GridCol>
	    </GridRow>
	  </Grid>
	  ```

	  ### Control the width of each column

	  You can control the width of the `<GridCol>` columns for each
	  breakpoint with the `width` prop. Please note the following:

	  + If you don't need complex responsive behavior, you can just set
	    the width property to a single value for all breakpoints after
	    and including the breakpoint set via the `startAt` prop. e.g.
	    `<GridCol width={2}>`

	  + The grid is made up of **12 columns**. If the columns' total
	    width exceeds 12, the layout will break.

	  + In addition to accepting the numerical values `1, 2, 3 ... 12`,
	    columns can also accept an `auto` value. This tells the column
	    to expand to the width of its content. (See the final example grid
	    to see how this can be useful for right-aligning column content.)

	  + The `startAt` prop setting supercedes any `<GridCol>` width props. For
	    example, if you set `width={{phone: 2}}` on a column, but the `startAt` prop
	    on your `<Grid>` is set to `tablet`, the `width={{phone: 2}}` will be ignored.

	  ```jsx_example
	  <Grid visualDebug>
	    <GridRow>
	      <GridCol width={{phone: 4, tablet: 6, desktop: 3, wide: 6}}>
	        {lorem.paragraph()}
	      </GridCol>
	      <GridCol width={{phone: 4, tablet: 4, desktop: 3, wide: 5}}>
	        {lorem.paragraph()}
	      </GridCol>
	      <GridCol width={{phone: 4, tablet: 2, desktop: 6, wide: 1}}>
	        {lorem.paragraph()}
	      </GridCol>
	    </GridRow>
	  </Grid>
	  ```

	  ### Add space/gutter between columns and rows

	  By default there is uniform spacing between grid columns and rows, use the `colSpacing` and
	  `rowSpacing` props, which accept `small`, `medium`, and `large` as values, you can change amount of spacing,
	  or remove it with `none`.

	  ```jsx_example
	  <Grid colSpacing="large" rowSpacing="small" visualDebug>
	    <GridRow>
	      <GridCol>
	        {lorem.paragraph()}
	      </GridCol>
	      <GridCol>
	        {lorem.paragraph()}
	      </GridCol>
	      <GridCol>
	        {lorem.paragraph()}
	      </GridCol>
	    </GridRow>
	    <GridRow>
	      <GridCol>
	        {lorem.paragraph()}
	      </GridCol>
	      <GridCol>
	        {lorem.paragraph()}
	      </GridCol>
	      <GridCol>
	        {lorem.paragraph()}
	      </GridCol>
	    </GridRow>
	  </Grid>
	  ```

	  Another useful method for spacing out `<GridCol>` elements is to use the `hAlign`
	  prop together with set widths on the columns. `hAlign` accepts the following
	  values: `start`, `center`, `end`, `spaceAround`, and `spaceBetween`.

	  #### `hAlign="spaceBetween"`

	  ```jsx_example
	    <Grid hAlign="spaceBetween" visualDebug>
	      <GridRow>
	        <GridCol width={2}>
	          {lorem.paragraph()}
	        </GridCol>
	        <GridCol width={4}>
	          {lorem.paragraph()}
	        </GridCol>
	        <GridCol width={2}>
	          {lorem.paragraph()}
	        </GridCol>
	      </GridRow>
	    </Grid>
	  ```
	  #### `hAlign="spaceAround"`

	  ```jsx_example
	    <Grid hAlign="spaceAround" visualDebug>
	      <GridRow>
	        <GridCol width={2}>
	          {lorem.paragraph()}
	        </GridCol>
	        <GridCol width={4}>
	          {lorem.paragraph()}
	        </GridCol>
	        <GridCol width={2}>
	          {lorem.paragraph()}
	        </GridCol>
	      </GridRow>
	    </Grid>
	  ```

	  ### Vertically align your columns

	  Align your columns along the vertical axis with the `vAlign` prop. In the example
	  below the grid is set to vertically center its columns.

	  ```jsx_example
	    <Grid vAlign="middle" visualDebug>
	      <GridRow>
	        <GridCol>
	          {lorem.paragraph()}
	        </GridCol>
	        <GridCol>
	          {lorem.paragraph()}
	        </GridCol>
	        <GridCol>
	          {lorem.paragraph()}
	        </GridCol>
	      </GridRow>
	    </Grid>
	  ```

	  ### Putting it all together

	  Let's use `<Grid>` to create a page header with a heading on the left side
	  and some action buttons on the right. In addition, let's say that on small
	  screens &#151; like phones &#151; we want the header to stack the heading and
	  the buttons.

	  Use `startAt="tablet"` to make the grid only affect tablets and above. To align
	  the buttons to the right, add `width="auto"` to their `<GridCol>`. This will
	  make the column only expand to fit the width of the buttons. Because the
	  `<GridCol>` containing the heading has no set width, it will expand by default
	  to take up all the width it can, pinning the columns containing the buttons
	  to the right.

	  ```jsx_example
	    <Grid startAt="tablet" vAlign="middle" visualDebug>
	      <GridRow>
	        <GridCol>
	          <Heading>I am a fairly lengthy heading for the page</Heading>
	        </GridCol>
	        <GridCol width="auto">
	          <Button>Cancel</Button>
	          &nbsp;
	          <Button variant="primary">+ Widget</Button>
	        </GridCol>
	      </GridRow>
	    </Grid>
	  ```
	**/
	var Grid = (_dec = (0, _themeable2.default)(_Grid4.default, _Grid6.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  (0, _inherits3.default)(Grid, _Component);

	  function Grid() {
	    (0, _classCallCheck3.default)(this, Grid);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Grid).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Grid, [{
	    key: 'colSpacingClass',
	    value: function colSpacingClass() {
	      return 'colSpacing' + (0, _capitalizeFirstLetter2.default)(this.props.colSpacing);
	    }
	  }, {
	    key: 'startAtClass',
	    value: function startAtClass() {
	      return 'startAt' + (0, _capitalizeFirstLetter2.default)(this.props.startAt);
	    }
	  }, {
	    key: 'renderChildren',
	    value: function renderChildren() {
	      var _props = this.props;
	      var children = _props.children;
	      var props = (0, _objectWithoutProperties3.default)(_props, ['children']);


	      return _react2.default.Children.map(children, function (child) {
	        if (child && child.type === _GridRow2.default) {
	          return (0, _safeCloneElement2.default)(child, (0, _extends3.default)({}, props, child.props));
	        } else /* child props should override parent */
	          {
	            return child; // PropType validation should handle errors
	          }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classes;

	      var classes = (_classes = {}, (0, _defineProperty3.default)(_classes, _Grid2.default.root, true), (0, _defineProperty3.default)(_classes, _Grid2.default[this.colSpacingClass()], true), (0, _defineProperty3.default)(_classes, _Grid2.default[this.startAtClass()], true), (0, _defineProperty3.default)(_classes, _Grid2.default.visualDebug, this.props.visualDebug), _classes);

	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(classes) },
	        this.renderChildren()
	      );
	    }
	  }]);
	  return Grid;
	}(_react.Component), _class2.propTypes = {
	  children: _CustomPropTypes2.default.validChildren([_GridRow2.default]),
	  colSpacing: _react.PropTypes.oneOf(['none', 'small', 'medium', 'large']),
	  rowSpacing: _react.PropTypes.oneOf(['none', 'small', 'medium', 'large']),
	  hAlign: _react.PropTypes.oneOf(['start', 'center', 'end', 'spaceAround', 'spaceBetween']),
	  vAlign: _react.PropTypes.oneOf(['top', 'middle', 'bottom']),
	  startAt: _react.PropTypes.oneOf(['phone', 'tablet', 'desktop', 'wide']),
	  visualDebug: _react.PropTypes.bool
	}, _class2.defaultProps = {
	  colSpacing: 'medium',
	  rowSpacing: 'medium',
	  hAlign: 'start',
	  startAt: 'phone',
	  vAlign: 'top',
	  visualDebug: false
	}, _temp)) || _class);
	exports.default = Grid;

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _defineProperty2 = __webpack_require__(95);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(97);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _themeable = __webpack_require__(98);

	var _themeable2 = _interopRequireDefault(_themeable);

	var _GridCol = __webpack_require__(185);

	var _GridCol2 = _interopRequireDefault(_GridCol);

	var _GridCol3 = __webpack_require__(186);

	var _GridCol4 = _interopRequireDefault(_GridCol3);

	var _GridCol5 = __webpack_require__(187);

	var _GridCol6 = _interopRequireDefault(_GridCol5);

	var _capitalizeFirstLetter = __webpack_require__(190);

	var _capitalizeFirstLetter2 = _interopRequireDefault(_capitalizeFirstLetter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var COL_WIDTHS = ['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	var GridCol = (_dec = (0, _themeable2.default)(_GridCol4.default, _GridCol6.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  (0, _inherits3.default)(GridCol, _Component);

	  function GridCol() {
	    (0, _classCallCheck3.default)(this, GridCol);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(GridCol).apply(this, arguments));
	  }

	  (0, _createClass3.default)(GridCol, [{
	    key: 'startAtClass',
	    value: function startAtClass() {
	      return 'startAt' + (0, _capitalizeFirstLetter2.default)(this.props.startAt);
	    }
	  }, {
	    key: 'colSpacingClass',
	    value: function colSpacingClass() {
	      return 'colSpacing' + (0, _capitalizeFirstLetter2.default)(this.props.colSpacing);
	    }
	  }, {
	    key: 'rowSpacingClass',
	    value: function rowSpacingClass() {
	      return 'rowSpacing' + (0, _capitalizeFirstLetter2.default)(this.props.rowSpacing);
	    }
	  }, {
	    key: 'breakpointClass',
	    value: function breakpointClass(breakpoint) {
	      var width = this.props.width && this.props.width[breakpoint] || this.props.width;
	      return breakpoint + '--' + width;
	    }
	  }, {
	    key: 'enabledBreakpoints',
	    value: function enabledBreakpoints() {
	      var breakpoints = ['phone', 'tablet', 'desktop', 'wide'];
	      return breakpoints.slice(breakpoints.indexOf(this.props.startAt));
	    }
	  }, {
	    key: 'breakpointIsEnabled',
	    value: function breakpointIsEnabled(breakpoint) {
	      return this.props.width && this.enabledBreakpoints().indexOf(breakpoint) >= 0;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classes;

	      var _props = this.props;
	      var children = _props.children;
	      var visualDebug = _props.visualDebug;


	      var classes = (_classes = {}, (0, _defineProperty3.default)(_classes, _GridCol2.default.root, true), (0, _defineProperty3.default)(_classes, _GridCol2.default[this.startAtClass()], true), (0, _defineProperty3.default)(_classes, _GridCol2.default[this.props.vAlign], true), (0, _defineProperty3.default)(_classes, _GridCol2.default[this.colSpacingClass()], true), (0, _defineProperty3.default)(_classes, _GridCol2.default[this.rowSpacingClass()], true), (0, _defineProperty3.default)(_classes, _GridCol2.default[this.breakpointClass('phone')], this.breakpointIsEnabled('phone')), (0, _defineProperty3.default)(_classes, _GridCol2.default[this.breakpointClass('tablet')], this.breakpointIsEnabled('tablet')), (0, _defineProperty3.default)(_classes, _GridCol2.default[this.breakpointClass('desktop')], this.breakpointIsEnabled('desktop')), (0, _defineProperty3.default)(_classes, _GridCol2.default[this.breakpointClass('wide')], this.breakpointIsEnabled('wide')), (0, _defineProperty3.default)(_classes, _GridCol2.default.visualDebug, visualDebug), _classes);

	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(classes) },
	        children
	      );
	    }
	  }]);
	  return GridCol;
	}(_react.Component), _class2.propTypes = {
	  children: _react.PropTypes.node,
	  colSpacing: _react.PropTypes.oneOf(['none', 'small', 'medium', 'large']),
	  rowSpacing: _react.PropTypes.oneOf(['none', 'small', 'medium', 'large']),
	  vAlign: _react.PropTypes.oneOf(['top', 'middle', 'bottom']),
	  startAt: _react.PropTypes.oneOf(['phone', 'tablet', 'desktop', 'wide']),
	  visualDebug: _react.PropTypes.bool,
	  width: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(COL_WIDTHS), _react.PropTypes.shape({
	    phone: _react.PropTypes.oneOf(COL_WIDTHS),
	    tablet: _react.PropTypes.oneOf(COL_WIDTHS),
	    desktop: _react.PropTypes.oneOf(COL_WIDTHS),
	    wide: _react.PropTypes.oneOf(COL_WIDTHS)
	  })])
	}, _temp)) || _class);
	exports.default = GridCol;

/***/ },
/* 185 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-GridCol__root","visualDebug":"ic-0-9-2-GridCol__visualDebug","top":"ic-0-9-2-GridCol__top","middle":"ic-0-9-2-GridCol__middle","bottom":"ic-0-9-2-GridCol__bottom","colSpacingNone":"ic-0-9-2-GridCol__colSpacingNone","colSpacingSmall":"ic-0-9-2-GridCol__colSpacingSmall","colSpacingMedium":"ic-0-9-2-GridCol__colSpacingMedium","colSpacingLarge":"ic-0-9-2-GridCol__colSpacingLarge","rowSpacingNone":"ic-0-9-2-GridCol__rowSpacingNone","rowSpacingSmall":"ic-0-9-2-GridCol__rowSpacingSmall","rowSpacingMedium":"ic-0-9-2-GridCol__rowSpacingMedium","rowSpacingLarge":"ic-0-9-2-GridCol__rowSpacingLarge","startAtPhone":"ic-0-9-2-GridCol__startAtPhone","startAtTablet":"ic-0-9-2-GridCol__startAtTablet","startAtDesktop":"ic-0-9-2-GridCol__startAtDesktop","startAtWide":"ic-0-9-2-GridCol__startAtWide","phone--auto":"ic-0-9-2-GridCol__phone--auto","phone--1":"ic-0-9-2-GridCol__phone--1","phone--2":"ic-0-9-2-GridCol__phone--2","phone--3":"ic-0-9-2-GridCol__phone--3","phone--4":"ic-0-9-2-GridCol__phone--4","phone--5":"ic-0-9-2-GridCol__phone--5","phone--6":"ic-0-9-2-GridCol__phone--6","phone--7":"ic-0-9-2-GridCol__phone--7","phone--8":"ic-0-9-2-GridCol__phone--8","phone--9":"ic-0-9-2-GridCol__phone--9","phone--10":"ic-0-9-2-GridCol__phone--10","tablet--auto":"ic-0-9-2-GridCol__tablet--auto","tablet--1":"ic-0-9-2-GridCol__tablet--1","tablet--2":"ic-0-9-2-GridCol__tablet--2","tablet--3":"ic-0-9-2-GridCol__tablet--3","tablet--4":"ic-0-9-2-GridCol__tablet--4","tablet--5":"ic-0-9-2-GridCol__tablet--5","tablet--6":"ic-0-9-2-GridCol__tablet--6","tablet--7":"ic-0-9-2-GridCol__tablet--7","tablet--8":"ic-0-9-2-GridCol__tablet--8","tablet--9":"ic-0-9-2-GridCol__tablet--9","tablet--10":"ic-0-9-2-GridCol__tablet--10","desktop--auto":"ic-0-9-2-GridCol__desktop--auto","desktop--1":"ic-0-9-2-GridCol__desktop--1","desktop--2":"ic-0-9-2-GridCol__desktop--2","desktop--3":"ic-0-9-2-GridCol__desktop--3","desktop--4":"ic-0-9-2-GridCol__desktop--4","desktop--5":"ic-0-9-2-GridCol__desktop--5","desktop--6":"ic-0-9-2-GridCol__desktop--6","desktop--7":"ic-0-9-2-GridCol__desktop--7","desktop--8":"ic-0-9-2-GridCol__desktop--8","desktop--9":"ic-0-9-2-GridCol__desktop--9","desktop--10":"ic-0-9-2-GridCol__desktop--10","wide--auto":"ic-0-9-2-GridCol__wide--auto","wide--1":"ic-0-9-2-GridCol__wide--1","wide--2":"ic-0-9-2-GridCol__wide--2","wide--3":"ic-0-9-2-GridCol__wide--3","wide--4":"ic-0-9-2-GridCol__wide--4","wide--5":"ic-0-9-2-GridCol__wide--5","wide--6":"ic-0-9-2-GridCol__wide--6","wide--7":"ic-0-9-2-GridCol__wide--7","wide--8":"ic-0-9-2-GridCol__wide--8","wide--9":"ic-0-9-2-GridCol__wide--9","wide--10":"ic-0-9-2-GridCol__wide--10"};

/***/ },
/* 186 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var breakpoints = _ref.breakpoints;
	  var spacing = _ref.spacing;

	  return {
	    breakpointTablet: breakpoints.tablet,
	    breakpointDesktop: breakpoints.desktop,
	    breakpointWide: breakpoints.wide,
	    spacingSmall: spacing.spacingSmall,
	    spacingMedium: spacing.spacingMedium,
	    spacingLarge: spacing.spacingLarge
	  };
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(188);
	module.exports = __webpack_require__(189);

/***/ },
/* 188 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-GridCol__root","rowSpacingSmall":"ic-0-9-2-GridCol__rowSpacingSmall","rowSpacingMedium":"ic-0-9-2-GridCol__rowSpacingMedium","rowSpacingLarge":"ic-0-9-2-GridCol__rowSpacingLarge","startAtPhone":"ic-0-9-2-GridCol__startAtPhone","colSpacingSmall":"ic-0-9-2-GridCol__colSpacingSmall","colSpacingMedium":"ic-0-9-2-GridCol__colSpacingMedium","colSpacingLarge":"ic-0-9-2-GridCol__colSpacingLarge","top":"ic-0-9-2-GridCol__top","middle":"ic-0-9-2-GridCol__middle","bottom":"ic-0-9-2-GridCol__bottom","phone--auto":"ic-0-9-2-GridCol__phone--auto","phone--1":"ic-0-9-2-GridCol__phone--1","phone--2":"ic-0-9-2-GridCol__phone--2","phone--3":"ic-0-9-2-GridCol__phone--3","phone--4":"ic-0-9-2-GridCol__phone--4","phone--5":"ic-0-9-2-GridCol__phone--5","phone--6":"ic-0-9-2-GridCol__phone--6","phone--7":"ic-0-9-2-GridCol__phone--7","phone--8":"ic-0-9-2-GridCol__phone--8","phone--9":"ic-0-9-2-GridCol__phone--9","phone--10":"ic-0-9-2-GridCol__phone--10","phone--11":"ic-0-9-2-GridCol__phone--11","phone--12":"ic-0-9-2-GridCol__phone--12","startAtTablet":"ic-0-9-2-GridCol__startAtTablet","tablet--auto":"ic-0-9-2-GridCol__tablet--auto","tablet--1":"ic-0-9-2-GridCol__tablet--1","tablet--2":"ic-0-9-2-GridCol__tablet--2","tablet--3":"ic-0-9-2-GridCol__tablet--3","tablet--4":"ic-0-9-2-GridCol__tablet--4","tablet--5":"ic-0-9-2-GridCol__tablet--5","tablet--6":"ic-0-9-2-GridCol__tablet--6","tablet--7":"ic-0-9-2-GridCol__tablet--7","tablet--8":"ic-0-9-2-GridCol__tablet--8","tablet--9":"ic-0-9-2-GridCol__tablet--9","tablet--10":"ic-0-9-2-GridCol__tablet--10","tablet--11":"ic-0-9-2-GridCol__tablet--11","tablet--12":"ic-0-9-2-GridCol__tablet--12","startAtDesktop":"ic-0-9-2-GridCol__startAtDesktop","desktop--auto":"ic-0-9-2-GridCol__desktop--auto","desktop--1":"ic-0-9-2-GridCol__desktop--1","desktop--2":"ic-0-9-2-GridCol__desktop--2","desktop--3":"ic-0-9-2-GridCol__desktop--3","desktop--4":"ic-0-9-2-GridCol__desktop--4","desktop--5":"ic-0-9-2-GridCol__desktop--5","desktop--6":"ic-0-9-2-GridCol__desktop--6","desktop--7":"ic-0-9-2-GridCol__desktop--7","desktop--8":"ic-0-9-2-GridCol__desktop--8","desktop--9":"ic-0-9-2-GridCol__desktop--9","desktop--10":"ic-0-9-2-GridCol__desktop--10","desktop--11":"ic-0-9-2-GridCol__desktop--11","desktop--12":"ic-0-9-2-GridCol__desktop--12","startAtWide":"ic-0-9-2-GridCol__startAtWide","wide--auto":"ic-0-9-2-GridCol__wide--auto","wide--1":"ic-0-9-2-GridCol__wide--1","wide--2":"ic-0-9-2-GridCol__wide--2","wide--3":"ic-0-9-2-GridCol__wide--3","wide--4":"ic-0-9-2-GridCol__wide--4","wide--5":"ic-0-9-2-GridCol__wide--5","wide--6":"ic-0-9-2-GridCol__wide--6","wide--7":"ic-0-9-2-GridCol__wide--7","wide--8":"ic-0-9-2-GridCol__wide--8","wide--9":"ic-0-9-2-GridCol__wide--9","wide--10":"ic-0-9-2-GridCol__wide--10","wide--11":"ic-0-9-2-GridCol__wide--11","wide--12":"ic-0-9-2-GridCol__wide--12"};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	if (false) {
	  module.hot.accept([]);
	}
	module.exports = ".ic-0-9-2-GridCol__root {\n  margin-bottom: 0;\n}\n\n.ic-0-9-2-GridCol__root.ic-0-9-2-GridCol__rowSpacingSmall {\n  margin-bottom: map(GridCol, spacingSmall);\n}\n\n.ic-0-9-2-GridCol__root.ic-0-9-2-GridCol__rowSpacingMedium {\n  margin-bottom: map(GridCol, spacingMedium);\n}\n\n.ic-0-9-2-GridCol__root.ic-0-9-2-GridCol__rowSpacingLarge {\n  margin-bottom: map(GridCol, spacingLarge);\n}\n\n.ic-0-9-2-GridCol__root:last-child {\n  margin-bottom: 0;\n}\n\n.ic-0-9-2-GridCol__startAtPhone {\n  -ms-flex: 1;\n      flex: 1;\n  margin-bottom: 0;\n}\n\n.ic-0-9-2-GridCol__startAtPhone.ic-0-9-2-GridCol__rowSpacingSmall,\n  .ic-0-9-2-GridCol__startAtPhone.ic-0-9-2-GridCol__rowSpacingMedium,\n  .ic-0-9-2-GridCol__startAtPhone.ic-0-9-2-GridCol__rowSpacingLarge {\n  margin-bottom: 0;\n}\n\n.ic-0-9-2-GridCol__startAtPhone.ic-0-9-2-GridCol__colSpacingSmall {\n  padding-right: calc(map(GridCol, spacingSmall) / 2);\n  padding-left: calc(map(GridCol, spacingSmall) / 2);\n}\n\n.ic-0-9-2-GridCol__startAtPhone.ic-0-9-2-GridCol__colSpacingMedium {\n  padding-right: calc(map(GridCol, spacingMedium) / 2);\n  padding-left: calc(map(GridCol, spacingMedium) / 2);\n}\n\n.ic-0-9-2-GridCol__startAtPhone.ic-0-9-2-GridCol__colSpacingLarge {\n  padding-right: calc(map(GridCol, spacingLarge) / 2);\n  padding-left: calc(map(GridCol, spacingLarge) / 2);\n}\n\n.ic-0-9-2-GridCol__startAtPhone.ic-0-9-2-GridCol__top {\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n}\n\n.ic-0-9-2-GridCol__startAtPhone.ic-0-9-2-GridCol__middle {\n  -ms-flex-item-align: center;\n      align-self: center;\n}\n\n.ic-0-9-2-GridCol__startAtPhone.ic-0-9-2-GridCol__bottom {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n\n/* stylelint-disable selector-class-pattern, selector-no-type */\n\n.ic-0-9-2-GridCol__phone--auto {\n  -ms-flex: 0 1 auto;\n      flex: 0 1 auto;\n}\n\n.ic-0-9-2-GridCol__phone--1 {\n  -ms-flex: 0 0 8.33325%;\n      flex: 0 0 8.33325%;\n  max-width: 8.33325%;\n}\n\n.ic-0-9-2-GridCol__phone--2 {\n  -ms-flex: 0 0 16.6665%;\n      flex: 0 0 16.6665%;\n  max-width: 16.6665%;\n}\n\n.ic-0-9-2-GridCol__phone--3 {\n  -ms-flex: 0 0 24.99975%;\n      flex: 0 0 24.99975%;\n  max-width: 24.99975%;\n}\n\n.ic-0-9-2-GridCol__phone--4 {\n  -ms-flex: 0 0 33.333%;\n      flex: 0 0 33.333%;\n  max-width: 33.333%;\n}\n\n.ic-0-9-2-GridCol__phone--5 {\n  -ms-flex: 0 0 41.66625%;\n      flex: 0 0 41.66625%;\n  max-width: 41.66625%;\n}\n\n.ic-0-9-2-GridCol__phone--6 {\n  -ms-flex: 0 0 49.9995%;\n      flex: 0 0 49.9995%;\n  max-width: 49.9995%;\n}\n\n.ic-0-9-2-GridCol__phone--7 {\n  -ms-flex: 0 0 58.33275%;\n      flex: 0 0 58.33275%;\n  max-width: 58.33275%;\n}\n\n.ic-0-9-2-GridCol__phone--8 {\n  -ms-flex: 0 0 66.666%;\n      flex: 0 0 66.666%;\n  max-width: 66.666%;\n}\n\n.ic-0-9-2-GridCol__phone--9 {\n  -ms-flex: 0 0 74.99925%;\n      flex: 0 0 74.99925%;\n  max-width: 74.99925%;\n}\n\n.ic-0-9-2-GridCol__phone--10 {\n  -ms-flex: 0 0 74.99925%;\n      flex: 0 0 74.99925%;\n  max-width: 74.99925%;\n}\n\n.ic-0-9-2-GridCol__phone--11 {\n  -ms-flex: 0 0 74.99925%;\n      flex: 0 0 74.99925%;\n  max-width: 74.99925%;\n}\n\n.ic-0-9-2-GridCol__phone--12 {\n  -ms-flex: 0 0 100%;\n      flex: 0 0 100%;\n}\n\n/* stylelint-enable selector-class-pattern, selector-no-type */\n\n@media screen and (min-width: map(GridCol, breakpointTablet)) {\n\n  .ic-0-9-2-GridCol__startAtTablet {\n    -ms-flex: 1;\n        flex: 1;\n    margin-bottom: 0;\n  }\n\n  .ic-0-9-2-GridCol__startAtTablet.ic-0-9-2-GridCol__rowSpacingSmall,\n  .ic-0-9-2-GridCol__startAtTablet.ic-0-9-2-GridCol__rowSpacingMedium,\n  .ic-0-9-2-GridCol__startAtTablet.ic-0-9-2-GridCol__rowSpacingLarge {\n    margin-bottom: 0;\n  }\n\n  .ic-0-9-2-GridCol__startAtTablet.ic-0-9-2-GridCol__colSpacingSmall {\n    padding-right: calc(map(GridCol, spacingSmall) / 2);\n    padding-left: calc(map(GridCol, spacingSmall) / 2);\n  }\n\n  .ic-0-9-2-GridCol__startAtTablet.ic-0-9-2-GridCol__colSpacingMedium {\n    padding-right: calc(map(GridCol, spacingMedium) / 2);\n    padding-left: calc(map(GridCol, spacingMedium) / 2);\n  }\n\n  .ic-0-9-2-GridCol__startAtTablet.ic-0-9-2-GridCol__colSpacingLarge {\n    padding-right: calc(map(GridCol, spacingLarge) / 2);\n    padding-left: calc(map(GridCol, spacingLarge) / 2);\n  }\n\n  .ic-0-9-2-GridCol__startAtTablet.ic-0-9-2-GridCol__top {\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n  }\n\n  .ic-0-9-2-GridCol__startAtTablet.ic-0-9-2-GridCol__middle {\n    -ms-flex-item-align: center;\n        align-self: center;\n  }\n\n  .ic-0-9-2-GridCol__startAtTablet.ic-0-9-2-GridCol__bottom {\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n  }\n\n  /* stylelint-disable selector-class-pattern, selector-no-type */\n\n  .ic-0-9-2-GridCol__tablet--auto {\n    -ms-flex: 0 1 auto;\n        flex: 0 1 auto;\n  }\n\n  .ic-0-9-2-GridCol__tablet--1 {\n    -ms-flex: 0 0 8.33325%;\n        flex: 0 0 8.33325%;\n    max-width: 8.33325%;\n  }\n\n  .ic-0-9-2-GridCol__tablet--2 {\n    -ms-flex: 0 0 16.6665%;\n        flex: 0 0 16.6665%;\n    max-width: 16.6665%;\n  }\n\n  .ic-0-9-2-GridCol__tablet--3 {\n    -ms-flex: 0 0 24.99975%;\n        flex: 0 0 24.99975%;\n    max-width: 24.99975%;\n  }\n\n  .ic-0-9-2-GridCol__tablet--4 {\n    -ms-flex: 0 0 33.333%;\n        flex: 0 0 33.333%;\n    max-width: 33.333%;\n  }\n\n  .ic-0-9-2-GridCol__tablet--5 {\n    -ms-flex: 0 0 41.66625%;\n        flex: 0 0 41.66625%;\n    max-width: 41.66625%;\n  }\n\n  .ic-0-9-2-GridCol__tablet--6 {\n    -ms-flex: 0 0 49.9995%;\n        flex: 0 0 49.9995%;\n    max-width: 49.9995%;\n  }\n\n  .ic-0-9-2-GridCol__tablet--7 {\n    -ms-flex: 0 0 58.33275%;\n        flex: 0 0 58.33275%;\n    max-width: 58.33275%;\n  }\n\n  .ic-0-9-2-GridCol__tablet--8 {\n    -ms-flex: 0 0 66.666%;\n        flex: 0 0 66.666%;\n    max-width: 66.666%;\n  }\n\n  .ic-0-9-2-GridCol__tablet--9 {\n    -ms-flex: 0 0 74.99925%;\n        flex: 0 0 74.99925%;\n    max-width: 74.99925%;\n  }\n\n  .ic-0-9-2-GridCol__tablet--10 {\n    -ms-flex: 0 0 74.99925%;\n        flex: 0 0 74.99925%;\n    max-width: 74.99925%;\n  }\n\n  .ic-0-9-2-GridCol__tablet--11 {\n    -ms-flex: 0 0 74.99925%;\n        flex: 0 0 74.99925%;\n    max-width: 74.99925%;\n  }\n\n  .ic-0-9-2-GridCol__tablet--12 {\n    -ms-flex: 0 0 100%;\n        flex: 0 0 100%;\n  }\n\n  /* stylelint-enable selector-class-pattern, selector-no-type */\n}\n\n@media screen and (min-width: map(GridCol, breakpointDesktop)) {\n\n  .ic-0-9-2-GridCol__startAtDesktop {\n    -ms-flex: 1;\n        flex: 1;\n    margin-bottom: 0;\n  }\n\n  .ic-0-9-2-GridCol__startAtDesktop.ic-0-9-2-GridCol__rowSpacingSmall,\n  .ic-0-9-2-GridCol__startAtDesktop.ic-0-9-2-GridCol__rowSpacingMedium,\n  .ic-0-9-2-GridCol__startAtDesktop.ic-0-9-2-GridCol__rowSpacingLarge {\n    margin-bottom: 0;\n  }\n\n  .ic-0-9-2-GridCol__startAtDesktop.ic-0-9-2-GridCol__colSpacingSmall {\n    padding-right: calc(map(GridCol, spacingSmall) / 2);\n    padding-left: calc(map(GridCol, spacingSmall) / 2);\n  }\n\n  .ic-0-9-2-GridCol__startAtDesktop.ic-0-9-2-GridCol__colSpacingMedium {\n    padding-right: calc(map(GridCol, spacingMedium) / 2);\n    padding-left: calc(map(GridCol, spacingMedium) / 2);\n  }\n\n  .ic-0-9-2-GridCol__startAtDesktop.ic-0-9-2-GridCol__colSpacingLarge {\n    padding-right: calc(map(GridCol, spacingLarge) / 2);\n    padding-left: calc(map(GridCol, spacingLarge) / 2);\n  }\n\n  .ic-0-9-2-GridCol__startAtDesktop.ic-0-9-2-GridCol__top {\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n  }\n\n  .ic-0-9-2-GridCol__startAtDesktop.ic-0-9-2-GridCol__middle {\n    -ms-flex-item-align: center;\n        align-self: center;\n  }\n\n  .ic-0-9-2-GridCol__startAtDesktop.ic-0-9-2-GridCol__bottom {\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n  }\n\n  /* stylelint-disable selector-class-pattern, selector-no-type */\n\n  .ic-0-9-2-GridCol__desktop--auto {\n    -ms-flex: 0 1 auto;\n        flex: 0 1 auto;\n  }\n\n  .ic-0-9-2-GridCol__desktop--1 {\n    -ms-flex: 0 0 8.33325%;\n        flex: 0 0 8.33325%;\n    max-width: 8.33325%;\n  }\n\n  .ic-0-9-2-GridCol__desktop--2 {\n    -ms-flex: 0 0 16.6665%;\n        flex: 0 0 16.6665%;\n    max-width: 16.6665%;\n  }\n\n  .ic-0-9-2-GridCol__desktop--3 {\n    -ms-flex: 0 0 24.99975%;\n        flex: 0 0 24.99975%;\n    max-width: 24.99975%;\n  }\n\n  .ic-0-9-2-GridCol__desktop--4 {\n    -ms-flex: 0 0 33.333%;\n        flex: 0 0 33.333%;\n    max-width: 33.333%;\n  }\n\n  .ic-0-9-2-GridCol__desktop--5 {\n    -ms-flex: 0 0 41.66625%;\n        flex: 0 0 41.66625%;\n    max-width: 41.66625%;\n  }\n\n  .ic-0-9-2-GridCol__desktop--6 {\n    -ms-flex: 0 0 49.9995%;\n        flex: 0 0 49.9995%;\n    max-width: 49.9995%;\n  }\n\n  .ic-0-9-2-GridCol__desktop--7 {\n    -ms-flex: 0 0 58.33275%;\n        flex: 0 0 58.33275%;\n    max-width: 58.33275%;\n  }\n\n  .ic-0-9-2-GridCol__desktop--8 {\n    -ms-flex: 0 0 66.666%;\n        flex: 0 0 66.666%;\n    max-width: 66.666%;\n  }\n\n  .ic-0-9-2-GridCol__desktop--9 {\n    -ms-flex: 0 0 74.99925%;\n        flex: 0 0 74.99925%;\n    max-width: 74.99925%;\n  }\n\n  .ic-0-9-2-GridCol__desktop--10 {\n    -ms-flex: 0 0 74.99925%;\n        flex: 0 0 74.99925%;\n    max-width: 74.99925%;\n  }\n\n  .ic-0-9-2-GridCol__desktop--11 {\n    -ms-flex: 0 0 74.99925%;\n        flex: 0 0 74.99925%;\n    max-width: 74.99925%;\n  }\n\n  .ic-0-9-2-GridCol__desktop--12 {\n    -ms-flex: 0 0 100%;\n        flex: 0 0 100%;\n  }\n\n  /* stylelint-enable selector-class-pattern, selector-no-type */\n}\n\n@media screen and (min-width: map(GridCol, breakpointWide)) {\n\n  .ic-0-9-2-GridCol__startAtWide {\n    -ms-flex: 1;\n        flex: 1;\n    margin-bottom: 0;\n  }\n\n  .ic-0-9-2-GridCol__startAtWide.ic-0-9-2-GridCol__rowSpacingSmall,\n  .ic-0-9-2-GridCol__startAtWide.ic-0-9-2-GridCol__rowSpacingMedium,\n  .ic-0-9-2-GridCol__startAtWide.ic-0-9-2-GridCol__rowSpacingLarge {\n    margin-bottom: 0;\n  }\n\n  .ic-0-9-2-GridCol__startAtWide.ic-0-9-2-GridCol__colSpacingSmall {\n    padding-right: calc(map(GridCol, spacingSmall) / 2);\n    padding-left: calc(map(GridCol, spacingSmall) / 2);\n  }\n\n  .ic-0-9-2-GridCol__startAtWide.ic-0-9-2-GridCol__colSpacingMedium {\n    padding-right: calc(map(GridCol, spacingMedium) / 2);\n    padding-left: calc(map(GridCol, spacingMedium) / 2);\n  }\n\n  .ic-0-9-2-GridCol__startAtWide.ic-0-9-2-GridCol__colSpacingLarge {\n    padding-right: calc(map(GridCol, spacingLarge) / 2);\n    padding-left: calc(map(GridCol, spacingLarge) / 2);\n  }\n\n  .ic-0-9-2-GridCol__startAtWide.ic-0-9-2-GridCol__top {\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n  }\n\n  .ic-0-9-2-GridCol__startAtWide.ic-0-9-2-GridCol__middle {\n    -ms-flex-item-align: center;\n        align-self: center;\n  }\n\n  .ic-0-9-2-GridCol__startAtWide.ic-0-9-2-GridCol__bottom {\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n  }\n\n  /* stylelint-disable selector-class-pattern, selector-no-type */\n\n  .ic-0-9-2-GridCol__wide--auto {\n    -ms-flex: 0 1 auto;\n        flex: 0 1 auto;\n  }\n\n  .ic-0-9-2-GridCol__wide--1 {\n    -ms-flex: 0 0 8.33325%;\n        flex: 0 0 8.33325%;\n    max-width: 8.33325%;\n  }\n\n  .ic-0-9-2-GridCol__wide--2 {\n    -ms-flex: 0 0 16.6665%;\n        flex: 0 0 16.6665%;\n    max-width: 16.6665%;\n  }\n\n  .ic-0-9-2-GridCol__wide--3 {\n    -ms-flex: 0 0 24.99975%;\n        flex: 0 0 24.99975%;\n    max-width: 24.99975%;\n  }\n\n  .ic-0-9-2-GridCol__wide--4 {\n    -ms-flex: 0 0 33.333%;\n        flex: 0 0 33.333%;\n    max-width: 33.333%;\n  }\n\n  .ic-0-9-2-GridCol__wide--5 {\n    -ms-flex: 0 0 41.66625%;\n        flex: 0 0 41.66625%;\n    max-width: 41.66625%;\n  }\n\n  .ic-0-9-2-GridCol__wide--6 {\n    -ms-flex: 0 0 49.9995%;\n        flex: 0 0 49.9995%;\n    max-width: 49.9995%;\n  }\n\n  .ic-0-9-2-GridCol__wide--7 {\n    -ms-flex: 0 0 58.33275%;\n        flex: 0 0 58.33275%;\n    max-width: 58.33275%;\n  }\n\n  .ic-0-9-2-GridCol__wide--8 {\n    -ms-flex: 0 0 66.666%;\n        flex: 0 0 66.666%;\n    max-width: 66.666%;\n  }\n\n  .ic-0-9-2-GridCol__wide--9 {\n    -ms-flex: 0 0 74.99925%;\n        flex: 0 0 74.99925%;\n    max-width: 74.99925%;\n  }\n\n  .ic-0-9-2-GridCol__wide--10 {\n    -ms-flex: 0 0 74.99925%;\n        flex: 0 0 74.99925%;\n    max-width: 74.99925%;\n  }\n\n  .ic-0-9-2-GridCol__wide--11 {\n    -ms-flex: 0 0 74.99925%;\n        flex: 0 0 74.99925%;\n    max-width: 74.99925%;\n  }\n\n  .ic-0-9-2-GridCol__wide--12 {\n    -ms-flex: 0 0 100%;\n        flex: 0 0 100%;\n  }\n\n  /* stylelint-enable selector-class-pattern, selector-no-type */\n}\n"

/***/ },
/* 190 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = capitalizeFirstLetter;
	function capitalizeFirstLetter(word) {
	  return word ? word.charAt(0).toUpperCase() + word.slice(1) : word;
	}

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _defineProperty2 = __webpack_require__(95);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(99);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _CustomPropTypes = __webpack_require__(151);

	var _CustomPropTypes2 = _interopRequireDefault(_CustomPropTypes);

	var _classnames = __webpack_require__(97);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _themeable = __webpack_require__(98);

	var _themeable2 = _interopRequireDefault(_themeable);

	var _safeCloneElement = __webpack_require__(130);

	var _safeCloneElement2 = _interopRequireDefault(_safeCloneElement);

	var _capitalizeFirstLetter = __webpack_require__(190);

	var _capitalizeFirstLetter2 = _interopRequireDefault(_capitalizeFirstLetter);

	var _GridCol = __webpack_require__(184);

	var _GridCol2 = _interopRequireDefault(_GridCol);

	var _GridRow = __webpack_require__(192);

	var _GridRow2 = _interopRequireDefault(_GridRow);

	var _GridRow3 = __webpack_require__(193);

	var _GridRow4 = _interopRequireDefault(_GridRow3);

	var _GridRow5 = __webpack_require__(194);

	var _GridRow6 = _interopRequireDefault(_GridRow5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var GridRow = (_dec = (0, _themeable2.default)(_GridRow4.default, _GridRow6.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  (0, _inherits3.default)(GridRow, _Component);

	  function GridRow() {
	    (0, _classCallCheck3.default)(this, GridRow);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(GridRow).apply(this, arguments));
	  }

	  (0, _createClass3.default)(GridRow, [{
	    key: 'startAtClass',
	    value: function startAtClass() {
	      return 'startAt' + (0, _capitalizeFirstLetter2.default)(this.props.startAt);
	    }
	  }, {
	    key: 'rowSpacingClass',
	    value: function rowSpacingClass() {
	      return 'rowSpacing' + (0, _capitalizeFirstLetter2.default)(this.props.rowSpacing);
	    }
	  }, {
	    key: 'colSpacingClass',
	    value: function colSpacingClass() {
	      return 'colSpacing' + (0, _capitalizeFirstLetter2.default)(this.props.colSpacing);
	    }
	  }, {
	    key: 'renderChildren',
	    value: function renderChildren() {
	      var _props = this.props;
	      var children = _props.children;
	      var props = (0, _objectWithoutProperties3.default)(_props, ['children']);


	      return _react2.default.Children.map(children, function (child) {
	        if (child && child.type === _GridCol2.default) {
	          return (0, _safeCloneElement2.default)(child, (0, _extends3.default)({}, props, child.props));
	        } else /* child props should override parent */
	          {
	            return child; // PropType validation should handle errors
	          }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classes;

	      var classes = (_classes = {}, (0, _defineProperty3.default)(_classes, _GridRow2.default.root, true), (0, _defineProperty3.default)(_classes, _GridRow2.default[this.props.hAlign], true), (0, _defineProperty3.default)(_classes, _GridRow2.default[this.props.vAlign], true), (0, _defineProperty3.default)(_classes, _GridRow2.default[this.rowSpacingClass()], true), (0, _defineProperty3.default)(_classes, _GridRow2.default[this.colSpacingClass()], true), (0, _defineProperty3.default)(_classes, _GridRow2.default[this.startAtClass()], true), _classes);

	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(classes) },
	        this.renderChildren()
	      );
	    }
	  }]);
	  return GridRow;
	}(_react.Component), _class2.propTypes = {
	  children: _CustomPropTypes2.default.validChildren([_GridCol2.default]),
	  colSpacing: _react.PropTypes.oneOf(['none', 'small', 'medium', 'large']),
	  rowSpacing: _react.PropTypes.oneOf(['none', 'small', 'medium', 'large']),
	  hAlign: _react.PropTypes.oneOf(['start', 'center', 'end', 'spaceAround', 'spaceBetween']),
	  vAlign: _react.PropTypes.oneOf(['top', 'middle', 'bottom']),
	  startAt: _react.PropTypes.oneOf(['phone', 'tablet', 'desktop', 'wide']),
	  visualDebug: _react.PropTypes.bool
	}, _temp)) || _class);
	exports.default = GridRow;

/***/ },
/* 192 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-GridRow__root","start":"ic-0-9-2-GridRow__start","center":"ic-0-9-2-GridRow__center","end":"ic-0-9-2-GridRow__end","spaceAround":"ic-0-9-2-GridRow__spaceAround","spaceBetween":"ic-0-9-2-GridRow__spaceBetween","top":"ic-0-9-2-GridRow__top","middle":"ic-0-9-2-GridRow__middle","bottom":"ic-0-9-2-GridRow__bottom","startAtPhone":"ic-0-9-2-GridRow__startAtPhone","startAtTablet":"ic-0-9-2-GridRow__startAtTablet","startAtDesktop":"ic-0-9-2-GridRow__startAtDesktop","startAtWide":"ic-0-9-2-GridRow__startAtWide","rowSpacingNone":"ic-0-9-2-GridRow__rowSpacingNone","rowSpacingSmall":"ic-0-9-2-GridRow__rowSpacingSmall","rowSpacingMedium":"ic-0-9-2-GridRow__rowSpacingMedium","rowSpacingLarge":"ic-0-9-2-GridRow__rowSpacingLarge","colSpacingNone":"ic-0-9-2-GridRow__colSpacingNone","colSpacingSmall":"ic-0-9-2-GridRow__colSpacingSmall","colSpacingMedium":"ic-0-9-2-GridRow__colSpacingMedium","colSpacingLarge":"ic-0-9-2-GridRow__colSpacingLarge"};

/***/ },
/* 193 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var breakpoints = _ref.breakpoints;
	  var spacing = _ref.spacing;

	  return {
	    breakpointTablet: breakpoints.tablet,
	    breakpointDesktop: breakpoints.desktop,
	    breakpointWide: breakpoints.wide,
	    spacingSmall: spacing.spacingSmall,
	    spacingMedium: spacing.spacingMedium,
	    spacingLarge: spacing.spacingLarge
	  };
	};

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(195);
	module.exports = __webpack_require__(196);

/***/ },
/* 195 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"startAtPhone":"ic-0-9-2-GridRow__startAtPhone","center":"ic-0-9-2-GridRow__center","start":"ic-0-9-2-GridRow__start","end":"ic-0-9-2-GridRow__end","spaceAround":"ic-0-9-2-GridRow__spaceAround","spaceBetween":"ic-0-9-2-GridRow__spaceBetween","middle":"ic-0-9-2-GridRow__middle","bottom":"ic-0-9-2-GridRow__bottom","rowSpacingSmall":"ic-0-9-2-GridRow__rowSpacingSmall","rowSpacingMedium":"ic-0-9-2-GridRow__rowSpacingMedium","rowSpacingLarge":"ic-0-9-2-GridRow__rowSpacingLarge","colSpacingSmall":"ic-0-9-2-GridRow__colSpacingSmall","colSpacingMedium":"ic-0-9-2-GridRow__colSpacingMedium","colSpacingLarge":"ic-0-9-2-GridRow__colSpacingLarge","startAtTablet":"ic-0-9-2-GridRow__startAtTablet","startAtDesktop":"ic-0-9-2-GridRow__startAtDesktop","startAtWide":"ic-0-9-2-GridRow__startAtWide"};

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	if (false) {
	  module.hot.accept([]);
	}
	module.exports = ".ic-0-9-2-GridRow__startAtPhone {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row nowrap;\n      flex-flow: row nowrap;\n}\n\n.ic-0-9-2-GridRow__startAtPhone.ic-0-9-2-GridRow__center {\n\n  -ms-flex-pack: center;\n\n      justify-content: center;\n}\n\n.ic-0-9-2-GridRow__startAtPhone.ic-0-9-2-GridRow__start {\n\n  -ms-flex-pack: start;\n\n      justify-content: flex-start;\n}\n\n.ic-0-9-2-GridRow__startAtPhone.ic-0-9-2-GridRow__end {\n\n  -ms-flex-pack: end;\n\n      justify-content: flex-end;\n}\n\n.ic-0-9-2-GridRow__startAtPhone.ic-0-9-2-GridRow__spaceAround {\n\n  -ms-flex-pack: distribute;\n\n      justify-content: space-around;\n}\n\n.ic-0-9-2-GridRow__startAtPhone.ic-0-9-2-GridRow__spaceBetween {\n\n  -ms-flex-pack: justify;\n\n      justify-content: space-between;\n}\n\n.ic-0-9-2-GridRow__startAtPhone.ic-0-9-2-GridRow__middle {\n\n  -ms-flex-align: center;\n\n      -ms-grid-row-align: center;\n\n      align-items: center;\n}\n\n.ic-0-9-2-GridRow__startAtPhone.ic-0-9-2-GridRow__bottom {\n\n  -ms-flex-align: end;\n\n      -ms-grid-row-align: flex-end;\n\n      align-items: flex-end;\n}\n\n.ic-0-9-2-GridRow__startAtPhone.ic-0-9-2-GridRow__rowSpacingSmall {\n\n  margin-bottom: map(GridRow, spacingSmall);\n}\n\n.ic-0-9-2-GridRow__startAtPhone.ic-0-9-2-GridRow__rowSpacingMedium {\n\n  margin-bottom: map(GridRow, spacingMedium);\n}\n\n.ic-0-9-2-GridRow__startAtPhone.ic-0-9-2-GridRow__rowSpacingLarge {\n\n  margin-bottom: map(GridRow, spacingLarge);\n}\n\n.ic-0-9-2-GridRow__startAtPhone.ic-0-9-2-GridRow__colSpacingSmall {\n\n  margin-left: calc(-1 * map(GridRow, spacingSmall) / 2);\n\n  margin-right: calc(-1 * map(GridRow, spacingSmall) / 2);\n}\n\n.ic-0-9-2-GridRow__startAtPhone.ic-0-9-2-GridRow__colSpacingMedium {\n\n  margin-left: calc(-1 * map(GridRow, spacingMedium) / 2);\n\n  margin-right: calc(-1 * map(GridRow, spacingMedium) / 2);\n}\n\n.ic-0-9-2-GridRow__startAtPhone.ic-0-9-2-GridRow__colSpacingLarge {\n\n  margin-left: calc(-1 * map(GridRow, spacingLarge) / 2);\n\n  margin-right: calc(-1 * map(GridRow, spacingLarge) / 2);\n}\n\n.ic-0-9-2-GridRow__startAtPhone:last-child {\n\n  margin-bottom: 0;\n}\n\n@media screen and (min-width: map(GridRow, breakpointTablet)) {\n\n  .ic-0-9-2-GridRow__startAtTablet {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: row nowrap;\n        flex-flow: row nowrap;\n  }\n\n  .ic-0-9-2-GridRow__startAtTablet.ic-0-9-2-GridRow__center {\n\n    -ms-flex-pack: center;\n\n        justify-content: center;\n  }\n\n  .ic-0-9-2-GridRow__startAtTablet.ic-0-9-2-GridRow__start {\n\n    -ms-flex-pack: start;\n\n        justify-content: flex-start;\n  }\n\n  .ic-0-9-2-GridRow__startAtTablet.ic-0-9-2-GridRow__end {\n\n    -ms-flex-pack: end;\n\n        justify-content: flex-end;\n  }\n\n  .ic-0-9-2-GridRow__startAtTablet.ic-0-9-2-GridRow__spaceAround {\n\n    -ms-flex-pack: distribute;\n\n        justify-content: space-around;\n  }\n\n  .ic-0-9-2-GridRow__startAtTablet.ic-0-9-2-GridRow__spaceBetween {\n\n    -ms-flex-pack: justify;\n\n        justify-content: space-between;\n  }\n\n  .ic-0-9-2-GridRow__startAtTablet.ic-0-9-2-GridRow__middle {\n\n    -ms-flex-align: center;\n\n        -ms-grid-row-align: center;\n\n        align-items: center;\n  }\n\n  .ic-0-9-2-GridRow__startAtTablet.ic-0-9-2-GridRow__bottom {\n\n    -ms-flex-align: end;\n\n        -ms-grid-row-align: flex-end;\n\n        align-items: flex-end;\n  }\n\n  .ic-0-9-2-GridRow__startAtTablet.ic-0-9-2-GridRow__rowSpacingSmall {\n\n    margin-bottom: map(GridRow, spacingSmall);\n  }\n\n  .ic-0-9-2-GridRow__startAtTablet.ic-0-9-2-GridRow__rowSpacingMedium {\n\n    margin-bottom: map(GridRow, spacingMedium);\n  }\n\n  .ic-0-9-2-GridRow__startAtTablet.ic-0-9-2-GridRow__rowSpacingLarge {\n\n    margin-bottom: map(GridRow, spacingLarge);\n  }\n\n  .ic-0-9-2-GridRow__startAtTablet.ic-0-9-2-GridRow__colSpacingSmall {\n\n    margin-left: calc(-1 * map(GridRow, spacingSmall) / 2);\n\n    margin-right: calc(-1 * map(GridRow, spacingSmall) / 2);\n  }\n\n  .ic-0-9-2-GridRow__startAtTablet.ic-0-9-2-GridRow__colSpacingMedium {\n\n    margin-left: calc(-1 * map(GridRow, spacingMedium) / 2);\n\n    margin-right: calc(-1 * map(GridRow, spacingMedium) / 2);\n  }\n\n  .ic-0-9-2-GridRow__startAtTablet.ic-0-9-2-GridRow__colSpacingLarge {\n\n    margin-left: calc(-1 * map(GridRow, spacingLarge) / 2);\n\n    margin-right: calc(-1 * map(GridRow, spacingLarge) / 2);\n  }\n\n  .ic-0-9-2-GridRow__startAtTablet:last-child {\n\n    margin-bottom: 0;\n  }\n}\n\n@media screen and (min-width: map(GridRow, breakpointDesktop)) {\n\n  .ic-0-9-2-GridRow__startAtDesktop {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: row nowrap;\n        flex-flow: row nowrap;\n  }\n\n  .ic-0-9-2-GridRow__startAtDesktop.ic-0-9-2-GridRow__center {\n\n    -ms-flex-pack: center;\n\n        justify-content: center;\n  }\n\n  .ic-0-9-2-GridRow__startAtDesktop.ic-0-9-2-GridRow__start {\n\n    -ms-flex-pack: start;\n\n        justify-content: flex-start;\n  }\n\n  .ic-0-9-2-GridRow__startAtDesktop.ic-0-9-2-GridRow__end {\n\n    -ms-flex-pack: end;\n\n        justify-content: flex-end;\n  }\n\n  .ic-0-9-2-GridRow__startAtDesktop.ic-0-9-2-GridRow__spaceAround {\n\n    -ms-flex-pack: distribute;\n\n        justify-content: space-around;\n  }\n\n  .ic-0-9-2-GridRow__startAtDesktop.ic-0-9-2-GridRow__spaceBetween {\n\n    -ms-flex-pack: justify;\n\n        justify-content: space-between;\n  }\n\n  .ic-0-9-2-GridRow__startAtDesktop.ic-0-9-2-GridRow__middle {\n\n    -ms-flex-align: center;\n\n        -ms-grid-row-align: center;\n\n        align-items: center;\n  }\n\n  .ic-0-9-2-GridRow__startAtDesktop.ic-0-9-2-GridRow__bottom {\n\n    -ms-flex-align: end;\n\n        -ms-grid-row-align: flex-end;\n\n        align-items: flex-end;\n  }\n\n  .ic-0-9-2-GridRow__startAtDesktop.ic-0-9-2-GridRow__rowSpacingSmall {\n\n    margin-bottom: map(GridRow, spacingSmall);\n  }\n\n  .ic-0-9-2-GridRow__startAtDesktop.ic-0-9-2-GridRow__rowSpacingMedium {\n\n    margin-bottom: map(GridRow, spacingMedium);\n  }\n\n  .ic-0-9-2-GridRow__startAtDesktop.ic-0-9-2-GridRow__rowSpacingLarge {\n\n    margin-bottom: map(GridRow, spacingLarge);\n  }\n\n  .ic-0-9-2-GridRow__startAtDesktop.ic-0-9-2-GridRow__colSpacingSmall {\n\n    margin-left: calc(-1 * map(GridRow, spacingSmall) / 2);\n\n    margin-right: calc(-1 * map(GridRow, spacingSmall) / 2);\n  }\n\n  .ic-0-9-2-GridRow__startAtDesktop.ic-0-9-2-GridRow__colSpacingMedium {\n\n    margin-left: calc(-1 * map(GridRow, spacingMedium) / 2);\n\n    margin-right: calc(-1 * map(GridRow, spacingMedium) / 2);\n  }\n\n  .ic-0-9-2-GridRow__startAtDesktop.ic-0-9-2-GridRow__colSpacingLarge {\n\n    margin-left: calc(-1 * map(GridRow, spacingLarge) / 2);\n\n    margin-right: calc(-1 * map(GridRow, spacingLarge) / 2);\n  }\n\n  .ic-0-9-2-GridRow__startAtDesktop:last-child {\n\n    margin-bottom: 0;\n  }\n}\n\n@media screen and (min-width: map(GridRow, breakpointWide)) {\n\n  .ic-0-9-2-GridRow__startAtWide {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: row nowrap;\n        flex-flow: row nowrap;\n  }\n\n  .ic-0-9-2-GridRow__startAtWide.ic-0-9-2-GridRow__center {\n\n    -ms-flex-pack: center;\n\n        justify-content: center;\n  }\n\n  .ic-0-9-2-GridRow__startAtWide.ic-0-9-2-GridRow__start {\n\n    -ms-flex-pack: start;\n\n        justify-content: flex-start;\n  }\n\n  .ic-0-9-2-GridRow__startAtWide.ic-0-9-2-GridRow__end {\n\n    -ms-flex-pack: end;\n\n        justify-content: flex-end;\n  }\n\n  .ic-0-9-2-GridRow__startAtWide.ic-0-9-2-GridRow__spaceAround {\n\n    -ms-flex-pack: distribute;\n\n        justify-content: space-around;\n  }\n\n  .ic-0-9-2-GridRow__startAtWide.ic-0-9-2-GridRow__spaceBetween {\n\n    -ms-flex-pack: justify;\n\n        justify-content: space-between;\n  }\n\n  .ic-0-9-2-GridRow__startAtWide.ic-0-9-2-GridRow__middle {\n\n    -ms-flex-align: center;\n\n        -ms-grid-row-align: center;\n\n        align-items: center;\n  }\n\n  .ic-0-9-2-GridRow__startAtWide.ic-0-9-2-GridRow__bottom {\n\n    -ms-flex-align: end;\n\n        -ms-grid-row-align: flex-end;\n\n        align-items: flex-end;\n  }\n\n  .ic-0-9-2-GridRow__startAtWide.ic-0-9-2-GridRow__rowSpacingSmall {\n\n    margin-bottom: map(GridRow, spacingSmall);\n  }\n\n  .ic-0-9-2-GridRow__startAtWide.ic-0-9-2-GridRow__rowSpacingMedium {\n\n    margin-bottom: map(GridRow, spacingMedium);\n  }\n\n  .ic-0-9-2-GridRow__startAtWide.ic-0-9-2-GridRow__rowSpacingLarge {\n\n    margin-bottom: map(GridRow, spacingLarge);\n  }\n\n  .ic-0-9-2-GridRow__startAtWide.ic-0-9-2-GridRow__colSpacingSmall {\n\n    margin-left: calc(-1 * map(GridRow, spacingSmall) / 2);\n\n    margin-right: calc(-1 * map(GridRow, spacingSmall) / 2);\n  }\n\n  .ic-0-9-2-GridRow__startAtWide.ic-0-9-2-GridRow__colSpacingMedium {\n\n    margin-left: calc(-1 * map(GridRow, spacingMedium) / 2);\n\n    margin-right: calc(-1 * map(GridRow, spacingMedium) / 2);\n  }\n\n  .ic-0-9-2-GridRow__startAtWide.ic-0-9-2-GridRow__colSpacingLarge {\n\n    margin-left: calc(-1 * map(GridRow, spacingLarge) / 2);\n\n    margin-right: calc(-1 * map(GridRow, spacingLarge) / 2);\n  }\n\n  .ic-0-9-2-GridRow__startAtWide:last-child {\n\n    margin-bottom: 0;\n  }\n}\n"

/***/ },
/* 197 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-Grid__root","visualDebug":"ic-0-9-2-Grid__visualDebug","startAtPhone":"ic-0-9-2-Grid__startAtPhone","startAtTablet":"ic-0-9-2-Grid__startAtTablet","startAtDesktop":"ic-0-9-2-Grid__startAtDesktop","startAtWide":"ic-0-9-2-Grid__startAtWide","colSpacingNone":"ic-0-9-2-Grid__colSpacingNone","colSpacingSmall":"ic-0-9-2-Grid__colSpacingSmall","colSpacingMedium":"ic-0-9-2-Grid__colSpacingMedium","colSpacingLarge":"ic-0-9-2-Grid__colSpacingLarge"};

/***/ },
/* 198 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var breakpoints = _ref.breakpoints;
	  var spacing = _ref.spacing;

	  return {
	    breakpointTablet: breakpoints.tablet,
	    breakpointDesktop: breakpoints.desktop,
	    breakpointWide: breakpoints.wide,
	    spacingSmall: spacing.spacingSmall,
	    spacingMedium: spacing.spacingMedium,
	    spacingLarge: spacing.spacingLarge
	  };
	};

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(200);
	module.exports = __webpack_require__(201);

/***/ },
/* 200 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"startAtPhone":"ic-0-9-2-Grid__startAtPhone","colSpacingSmall":"ic-0-9-2-Grid__colSpacingSmall","colSpacingMedium":"ic-0-9-2-Grid__colSpacingMedium","colSpacingLarge":"ic-0-9-2-Grid__colSpacingLarge","startAtTablet":"ic-0-9-2-Grid__startAtTablet","startAtDesktop":"ic-0-9-2-Grid__startAtDesktop","startAtWide":"ic-0-9-2-Grid__startAtWide"};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	if (false) {
	  module.hot.accept([]);
	}
	module.exports = ".ic-0-9-2-Grid__startAtPhone {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column nowrap;\n      flex-flow: column nowrap;\n}\n\n.ic-0-9-2-Grid__startAtPhone.ic-0-9-2-Grid__colSpacingSmall {\n  padding-left: calc(map(Grid, spacingSmall) / 2);\n  padding-right: calc(map(Grid, spacingSmall) / 2);\n}\n\n.ic-0-9-2-Grid__startAtPhone.ic-0-9-2-Grid__colSpacingMedium {\n  padding-left: calc(map(Grid, spacingMedium) / 2);\n  padding-right: calc(map(Grid, spacingMedium) / 2);\n}\n\n.ic-0-9-2-Grid__startAtPhone.ic-0-9-2-Grid__colSpacingLarge {\n  padding-left: calc(map(Grid, spacingLarge) / 2);\n  padding-right: calc(map(Grid, spacingLarge) / 2);\n}\n\n@media screen and (min-width: map(Grid, breakpointTablet)) {\n\n  .ic-0-9-2-Grid__startAtTablet {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: column nowrap;\n        flex-flow: column nowrap;\n  }\n\n  .ic-0-9-2-Grid__startAtTablet.ic-0-9-2-Grid__colSpacingSmall {\n    padding-left: calc(map(Grid, spacingSmall) / 2);\n    padding-right: calc(map(Grid, spacingSmall) / 2);\n  }\n\n  .ic-0-9-2-Grid__startAtTablet.ic-0-9-2-Grid__colSpacingMedium {\n    padding-left: calc(map(Grid, spacingMedium) / 2);\n    padding-right: calc(map(Grid, spacingMedium) / 2);\n  }\n\n  .ic-0-9-2-Grid__startAtTablet.ic-0-9-2-Grid__colSpacingLarge {\n    padding-left: calc(map(Grid, spacingLarge) / 2);\n    padding-right: calc(map(Grid, spacingLarge) / 2);\n  }\n}\n\n@media screen and (min-width: map(Grid, breakpointDesktop)) {\n\n  .ic-0-9-2-Grid__startAtDesktop {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: column nowrap;\n        flex-flow: column nowrap;\n  }\n\n  .ic-0-9-2-Grid__startAtDesktop.ic-0-9-2-Grid__colSpacingSmall {\n    padding-left: calc(map(Grid, spacingSmall) / 2);\n    padding-right: calc(map(Grid, spacingSmall) / 2);\n  }\n\n  .ic-0-9-2-Grid__startAtDesktop.ic-0-9-2-Grid__colSpacingMedium {\n    padding-left: calc(map(Grid, spacingMedium) / 2);\n    padding-right: calc(map(Grid, spacingMedium) / 2);\n  }\n\n  .ic-0-9-2-Grid__startAtDesktop.ic-0-9-2-Grid__colSpacingLarge {\n    padding-left: calc(map(Grid, spacingLarge) / 2);\n    padding-right: calc(map(Grid, spacingLarge) / 2);\n  }\n}\n\n@media screen and (min-width: map(Grid, breakpointWide)) {\n\n  .ic-0-9-2-Grid__startAtWide {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: column nowrap;\n        flex-flow: column nowrap;\n  }\n\n  .ic-0-9-2-Grid__startAtWide.ic-0-9-2-Grid__colSpacingSmall {\n    padding-left: calc(map(Grid, spacingSmall) / 2);\n    padding-right: calc(map(Grid, spacingSmall) / 2);\n  }\n\n  .ic-0-9-2-Grid__startAtWide.ic-0-9-2-Grid__colSpacingMedium {\n    padding-left: calc(map(Grid, spacingMedium) / 2);\n    padding-right: calc(map(Grid, spacingMedium) / 2);\n  }\n\n  .ic-0-9-2-Grid__startAtWide.ic-0-9-2-Grid__colSpacingLarge {\n    padding-left: calc(map(Grid, spacingLarge) / 2);\n    padding-right: calc(map(Grid, spacingLarge) / 2);\n  }\n}\n"

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _themeable = __webpack_require__(98);

	var _themeable2 = _interopRequireDefault(_themeable);

	var _Heading = __webpack_require__(203);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _Heading3 = __webpack_require__(204);

	var _Heading4 = _interopRequireDefault(_Heading3);

	var _Heading5 = __webpack_require__(205);

	var _Heading6 = _interopRequireDefault(_Heading5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	  A Heading component [WIP]

	  ```jsx_example
	  <Heading>I'm a heading</Heading>
	  ```
	 **/
	var Heading = (_dec = (0, _themeable2.default)(_Heading4.default, _Heading6.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  (0, _inherits3.default)(Heading, _Component);

	  function Heading() {
	    (0, _classCallCheck3.default)(this, Heading);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Heading).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Heading, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'h2',
	        { className: _Heading2.default.root },
	        this.props.children
	      );
	    }
	  }]);
	  return Heading;
	}(_react.Component), _class2.propTypes = {
	  children: _react.PropTypes.node.isRequired
	}, _temp)) || _class);
	exports.default = Heading;

/***/ },
/* 203 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-Heading__root"};

/***/ },
/* 204 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var typography = _ref.typography;

	  return {
	    fontFamily: typography.fontFamilyBase,
	    fontWeight: typography.fontWeightNormal
	  };
	};

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(206);
	module.exports = __webpack_require__(207);

/***/ },
/* 206 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-Heading__root"};

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	if (false) {
	  module.hot.accept([]);
	}
	module.exports = ".ic-0-9-2-Heading__root {\n  font-family: map(Heading, fontFamily);\n  font-weight: map(Heading, fontWeight);\n}\n"

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _Image = __webpack_require__(209);

	var _Image2 = _interopRequireDefault(_Image);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	  An Image component

	  ```jsx_example
	  <Image src={placeholderImage(250, 250)} />
	  ```
	 **/
	var Image = (_temp = _class = function (_Component) {
	  (0, _inherits3.default)(Image, _Component);

	  function Image() {
	    (0, _classCallCheck3.default)(this, Image);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Image).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Image, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('img', (0, _extends3.default)({}, this.props, { className: _Image2.default.root }));
	    }
	  }]);
	  return Image;
	}(_react.Component), _class.propTypes = {
	  src: _react.PropTypes.string.isRequired,
	  alt: _react.PropTypes.string
	}, _class.defaultProps = {
	  alt: ''
	}, _temp);
	exports.default = Image;

/***/ },
/* 209 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-Image__root"};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(95);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _objectWithoutProperties2 = __webpack_require__(99);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class, _class2, _temp2;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(124);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _themeable = __webpack_require__(98);

	var _themeable2 = _interopRequireDefault(_themeable);

	var _classnames = __webpack_require__(97);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Link = __webpack_require__(211);

	var _Link2 = _interopRequireDefault(_Link);

	var _Link3 = __webpack_require__(212);

	var _Link4 = _interopRequireDefault(_Link3);

	var _Link5 = __webpack_require__(213);

	var _Link6 = _interopRequireDefault(_Link5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	  A Link component

	  ```jsx_example
	    <Link href="example.html">I'm a link</Link>
	  ```

	  ```jsx_example
	    <Link>I'm a button that looks like a link because I have no href prop</Link>
	  ```

	  ```jsx_example
	    <Link variant="menuitem">I'm a menu item link</Link>
	  ```
	 **/
	var Link = (_dec = (0, _themeable2.default)(_Link4.default, _Link6.default), _dec(_class = (_temp2 = _class2 = function (_Component) {
	  (0, _inherits3.default)(Link, _Component);

	  function Link() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, Link);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Link)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClick = function (e) {
	      var _this$props = _this.props;
	      var disabled = _this$props.disabled;
	      var onClick = _this$props.onClick;


	      if (disabled) {
	        e.preventDefault();
	        e.stopPropagation();
	      } else if (typeof onClick === 'function') {
	        onClick(e);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(Link, [{
	    key: 'isLink',
	    value: function isLink() {
	      var href = this.props.href;

	      return href && href !== '#';
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      _reactDom2.default.findDOMNode(this).focus();
	    }
	  }, {
	    key: 'isFocused',
	    value: function isFocused() {
	      return document.activeElement === _reactDom2.default.findDOMNode(this);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classes;

	      var _props = this.props;
	      var children = _props.children;
	      var variant = _props.variant;
	      var disabled = _props.disabled;
	      var onClick = _props.onClick;
	      var role = _props.role;
	      var href = _props.href;
	      var props = (0, _objectWithoutProperties3.default)(_props, ['children', 'variant', 'disabled', 'onClick', 'role', 'href']);


	      var classes = (_classes = {}, (0, _defineProperty3.default)(_classes, _Link2.default.root, true), (0, _defineProperty3.default)(_classes, _Link2.default[variant], true), _classes);

	      if (this.isLink()) {
	        return _react2.default.createElement(
	          'a',
	          (0, _extends3.default)({
	            href: href,
	            className: (0, _classnames2.default)(classes),
	            'aria-disabled': disabled ? 'true' : null,
	            role: onClick ? 'button' : role,
	            onClick: this.handleClick,
	            onKeyDown: this.handleKeyDown
	          }, props),
	          children
	        );
	      } else {
	        return _react2.default.createElement(
	          'button',
	          (0, _extends3.default)({
	            className: (0, _classnames2.default)(classes),
	            'aria-disabled': disabled ? 'true' : null,
	            onClick: this.handleClick
	          }, props),
	          children
	        );
	      }
	    }
	  }]);
	  return Link;
	}(_react.Component), _class2.propTypes = {
	  href: _react.PropTypes.string,
	  children: _react.PropTypes.node.isRequired,
	  /**
	  * the `role` is auto-set to `button` if the `onClick` prop is set
	  */
	  role: _react.PropTypes.string,
	  disabled: _react.PropTypes.bool,
	  variant: _react.PropTypes.oneOf(['default', 'menuitem']),
	  onClick: _react.PropTypes.func
	}, _class2.defaultProps = {
	  variant: 'default'
	}, _temp2)) || _class);
	exports.default = Link;

/***/ },
/* 211 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-Link__root","default":"ic-0-9-2-Link__default","menuitem":"ic-0-9-2-Link__menuitem"};

/***/ },
/* 212 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var colors = _ref.colors;
	  var typography = _ref.typography;

	  return {
	    textColor: colors.colorBrand,
	    textDecoration: 'none',
	    textDecorationHover: 'underline',
	    fontFamily: typography.fontFamilyBase,

	    menuItemTextDecoration: 'none',
	    menuItemBackground: colors.colorBackground,
	    menuItemTextColor: colors.colorText,
	    menuItemBackgroundHover: colors.colorFocus,
	    menuItemTextColorHover: colors.colorTextInverse,
	    menuItemTextDecorationHover: 'none'

	  };
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(214);
	module.exports = __webpack_require__(215);

/***/ },
/* 214 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-Link__root","default":"ic-0-9-2-Link__default","menuitem":"ic-0-9-2-Link__menuitem"};

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	if (false) {
	  module.hot.accept([]);
	}
	module.exports = ".ic-0-9-2-Link__root {\n  font-family: map(Link, fontFamily);\n}\n\n.ic-0-9-2-Link__default {\n  color: map(Link, textColor);\n  text-decoration: map(Link, textDecoration);\n}\n\n.ic-0-9-2-Link__default:focus,\n  .ic-0-9-2-Link__default:hover {\n  text-decoration: map(Link, textDecorationHover);\n}\n\n.ic-0-9-2-Link__menuitem {\n  background: map(Link, menuItemBackground);\n  color: map(Link, menuItemTextColor);\n  text-decoration: map(Link, menuItemTextDecoration);\n}\n\n.ic-0-9-2-Link__menuitem:hover,\n  .ic-0-9-2-Link__menuitem:active,\n  .ic-0-9-2-Link__menuitem:focus {\n  background: map(Link, menuItemBackgroundHover);\n  color: map(Link, menuItemTextColorHover);\n  text-decoration: map(Link, menuItemTextDecorationHover);\n}\n"

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MenuItemSeparator = exports.MenuItem = exports.default = undefined;

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(99);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _MenuItem = __webpack_require__(217);

	Object.defineProperty(exports, 'MenuItem', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_MenuItem).default;
	  }
	});

	var _MenuItemSeparator = __webpack_require__(231);

	Object.defineProperty(exports, 'MenuItemSeparator', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_MenuItemSeparator).default;
	  }
	});

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _CustomPropTypes = __webpack_require__(151);

	var _CustomPropTypes2 = _interopRequireDefault(_CustomPropTypes);

	var _createChainedFunction = __webpack_require__(160);

	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

	var _safeCloneElement = __webpack_require__(130);

	var _safeCloneElement2 = _interopRequireDefault(_safeCloneElement);

	var _keycode = __webpack_require__(138);

	var _keycode2 = _interopRequireDefault(_keycode);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _MenuItemSeparator2 = _interopRequireDefault(_MenuItemSeparator);

	var _Menu = __webpack_require__(237);

	var _Menu2 = _interopRequireDefault(_Menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	  The `<Menu/>` component provides a list of actionable
	  `<MenuItems/>`that are keyboard accessible. A `<Menu/>`
	  is typically used in a `<Popover/>`, so you may be looking for the [PopoverMenu](#PopoverMenu) component.

	  ```jsx_example
	  <Menu focus labelledBy="foobar">
	    <MenuItem><Link>Default (Grid view)</Link></MenuItem>
	    <MenuItem><Link>Learning Mastery</Link></MenuItem>
	    <MenuItem><Link disabled>Individual (List view)</Link></MenuItem>
	    <MenuItem>
	      <RadioInput value="foo" name="foobar"
	        defaultChecked onChange={function (e) { console.log(e.target.value) }}
	        label="Foo" />
	    </MenuItem>
	    <MenuItem>
	      <RadioInput value="bar" name="foobar" label="Bar"/>
	    </MenuItem>
	    <MenuItem>
	      <Checkbox value="anchor"
	        defaultChecked onChange={function (e) { console.log(e.target.checked)  }}
	        label="Include Anchor Standards" />
	    </MenuItem>
	    <MenuItemSeparator />
	    <MenuItem><Link>Open grading history...</Link></MenuItem>
	  </Menu>
	  ```
	**/
	var Menu = (_temp = _class = function (_Component) {
	  (0, _inherits3.default)(Menu, _Component);

	  function Menu(props) {
	    (0, _classCallCheck3.default)(this, Menu);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Menu).call(this, props));

	    _this.handleKeyDown = function (event) {
	      switch (event.keyCode) {
	        case _keycode2.default.codes.down:
	          _this.focusNext();
	          event.preventDefault();
	          break;
	        case _keycode2.default.codes.up:
	          _this.focusPrevious();
	          event.preventDefault();
	          break;
	        case _keycode2.default.codes.esc:
	          _this.props.onClose(event);
	          break;
	        case _keycode2.default.codes.tab:
	          _this.props.onClose(event);
	          break;
	        default:
	      }
	    };

	    _this.state = {
	      needsFocus: props.focus
	    };

	    _this._menuitems = [];
	    return _this;
	  }

	  (0, _createClass3.default)(Menu, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.focusIfNeeded();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.focus !== this.props.focus) {
	        this.setState({ needsFocus: nextProps.focus });
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.focusIfNeeded();
	    }
	  }, {
	    key: 'focusIfNeeded',
	    value: function focusIfNeeded() {
	      if (this.state.needsFocus) {
	        this.state.needsFocus = false; // avoid setState here so we don't trigger a re-render
	        this.focus();
	      }
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      var items = this.getFocusableItems();
	      if (items.length > 0) {
	        items[0].focus();
	      }
	    }
	  }, {
	    key: 'focusNext',
	    value: function focusNext() {
	      var activeItemIndex = this.getActiveItemIndex();
	      var items = this.getFocusableItems();

	      if (items.length === 0) {
	        return;
	      }

	      if (activeItemIndex === items.length - 1) {
	        items[0].focus();
	        return;
	      }

	      items[activeItemIndex + 1].focus();
	    }
	  }, {
	    key: 'focusPrevious',
	    value: function focusPrevious() {
	      var activeItemIndex = this.getActiveItemIndex();
	      var items = this.getFocusableItems();

	      if (activeItemIndex === 0) {
	        items[items.length - 1].focus();
	        return;
	      }

	      items[activeItemIndex - 1].focus();
	    }
	  }, {
	    key: 'getActiveItemIndex',
	    value: function getActiveItemIndex() {
	      var items = this.getFocusableItems();
	      var activeItemIndex = 0;

	      items.forEach(function (item, index) {
	        if (item.isFocused()) {
	          activeItemIndex = index;
	        }
	      });

	      return activeItemIndex;
	    }
	  }, {
	    key: 'getFocusableItems',
	    value: function getFocusableItems() {
	      return this._menuitems.filter(function (item) {
	        return typeof item.focus === 'function' && typeof item.isFocused === 'function';
	      });
	    }
	  }, {
	    key: 'renderChildren',
	    value: function renderChildren() {
	      var _this2 = this;

	      var children = this.props.children;


	      this._menuitems = [];

	      var items = _react.Children.map(children, function (child, index) {
	        if (child.type === _MenuItem2.default) {
	          var _child$props = child.props;
	          var onKeyDown = _child$props.onKeyDown;
	          var onClick = _child$props.onClick;
	          var childProps = (0, _objectWithoutProperties3.default)(_child$props, ['onKeyDown', 'onClick']);


	          return (0, _safeCloneElement2.default)(child, (0, _extends3.default)({}, childProps, {
	            ref: function ref(c) {
	              _this2._menuitems[index] = c;
	            },
	            onKeyDown: (0, _createChainedFunction2.default)(onKeyDown, _this2.handleKeyDown),
	            onClick: (0, _createChainedFunction2.default)(onClick, _this2.props.onSelect)
	          }));
	        } else {
	          return child;
	        }
	      });

	      return items;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var labelledBy = _props.labelledBy;
	      var isOpen = _props.isOpen;

	      return _react2.default.createElement(
	        'ul',
	        {
	          role: 'menu',
	          tabIndex: 0,
	          className: _Menu2.default.root,
	          'aria-hidden': isOpen,
	          'aria-labelledby': labelledBy },
	        this.renderChildren()
	      );
	    }
	  }]);
	  return Menu;
	}(_react.Component), _class.propTypes = {
	  /**
	  * children of type `MenuItem`
	  */
	  children: _CustomPropTypes2.default.validChildren([_MenuItem2.default, _MenuItemSeparator2.default]),
	  labelledBy: _react.PropTypes.string,
	  isOpen: _react.PropTypes.bool,
	  focus: _react.PropTypes.bool,
	  onSelect: _react.PropTypes.func,
	  onClose: _react.PropTypes.func
	}, _class.defaultProps = {
	  focus: false,
	  onClose: function onClose() {}
	}, _temp);
	exports.default = Menu;

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(99);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _Checkbox = __webpack_require__(149);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	var _RadioInputGroup = __webpack_require__(218);

	var _safeCloneElement = __webpack_require__(130);

	var _safeCloneElement2 = _interopRequireDefault(_safeCloneElement);

	var _MenuItem = __webpack_require__(230);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MenuItem = (_temp = _class = function (_Component) {
	  (0, _inherits3.default)(MenuItem, _Component);

	  function MenuItem() {
	    (0, _classCallCheck3.default)(this, MenuItem);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MenuItem).apply(this, arguments));
	  }

	  (0, _createClass3.default)(MenuItem, [{
	    key: 'getRoleForType',
	    value: function getRoleForType(type) {
	      if (type === _Checkbox2.default) {
	        return 'menuitemcheckbox';
	      } else if (type === _RadioInputGroup.RadioInput) {
	        return 'menuitemradio';
	      } else {
	        return 'menuitem';
	      }
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      if (this._item && this._item.focus) {
	        this._item.focus();
	      }
	    }
	  }, {
	    key: 'isFocused',
	    value: function isFocused() {
	      return this._item.isFocused();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var children = _props.children;
	      var props = (0, _objectWithoutProperties3.default)(_props, ['children']);


	      var child = _react.Children.only(children);

	      var menuItem = (0, _safeCloneElement2.default)(child, (0, _extends3.default)({}, props, child.props, {
	        ref: function ref(c) {
	          _this2._item = c;
	        },
	        variant: 'menuitem',
	        role: this.getRoleForType(child.type),
	        tabIndex: -1
	      }));

	      return _react2.default.createElement(
	        'li',
	        { className: _MenuItem2.default.root },
	        menuItem
	      );
	    }
	  }]);
	  return MenuItem;
	}(_react.Component), _class.propTypes = {
	  children: _react.PropTypes.element.isRequired
	}, _temp);
	exports.default = MenuItem;

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RadioInput = exports.default = undefined;

	var _defineProperty2 = __webpack_require__(95);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class, _class2, _temp;

	var _RadioInput = __webpack_require__(219);

	Object.defineProperty(exports, 'RadioInput', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_RadioInput).default;
	  }
	});

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _CustomPropTypes = __webpack_require__(151);

	var _CustomPropTypes2 = _interopRequireDefault(_CustomPropTypes);

	var _classnames = __webpack_require__(97);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _themeable = __webpack_require__(98);

	var _themeable2 = _interopRequireDefault(_themeable);

	var _safeCloneElement = __webpack_require__(130);

	var _safeCloneElement2 = _interopRequireDefault(_safeCloneElement);

	var _createChainedFunction = __webpack_require__(160);

	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

	var _RadioInput2 = _interopRequireDefault(_RadioInput);

	var _RadioInputGroup = __webpack_require__(225);

	var _RadioInputGroup2 = _interopRequireDefault(_RadioInputGroup);

	var _RadioInputGroup3 = __webpack_require__(226);

	var _RadioInputGroup4 = _interopRequireDefault(_RadioInputGroup3);

	var _RadioInputGroup5 = __webpack_require__(227);

	var _RadioInputGroup6 = _interopRequireDefault(_RadioInputGroup5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	  A RadioInputGroup is a group of RadioInput components. It will handle setting
	  the name property on the RadioInput components for you and will set the selected item
	  based on the `value` property.

	  ```jsx_example
	  <RadioInputGroup name="fruit" defaultValue="banana" description="Select a fruit">
	    <RadioInput label="Apple" value="apple" />
	    <RadioInput label="Orange" value="orange" />
	    <RadioInput label="Banana" value="banana" />
	  </RadioInputGroup>
	  ```

	  Set the `variant` prop to `toggle` to have the RadioInputGroup display as a toggle switch.
	  If the `variant` prop is set to `toggle`, you can set the `size` prop to produce toggles of
	  different sizes. As with the [Button](#Button) component and the input components, `medium` is the default.

	  ```jsx_example
	  <div>
	   <RadioInputGroup
	      name="featuresm"
	      defaultValue="off"
	      description="Small-size"
	      variant="toggle"
	      size="small">
	      <RadioInput label="Off" value="off" />
	      <RadioInput label="Allow" value="allow" />
	      <RadioInput label="On" value="on" />
	    </RadioInputGroup>
	    <br />
	    <RadioInputGroup
	      name="featuremed"
	      defaultValue="off"
	      description="Medium-size (default)"
	      variant="toggle">
	      <RadioInput label="Off" value="off" />
	      <RadioInput label="Allow" value="allow" />
	      <RadioInput label="On" value="on" />
	    </RadioInputGroup>
	    <br />
	    <RadioInputGroup
	      name="featurelg"
	      defaultValue="off"
	      description="Large-size"
	      variant="toggle"
	      size="large">
	      <RadioInput label="Off" value="off" />
	      <RadioInput label="Allow" value="allow" />
	      <RadioInput label="On" value="on" />
	    </RadioInputGroup>
	  </div>
	  ```

	  Use the `context` prop on individual RadioInput components to encourage
	  users to make good decisions - or simply as an additional way to convey to sighted
	  users that a feature is on/active through color. Also note that toggles have a max-width: If your
	  options have walls of text, please use the default RadioInputGroup variant.

	  ```jsx_example
	  <RadioInputGroup name="security" defaultValue="none" description="Security settings" variant="toggle">
	    <RadioInput label="None" value="none" context="danger" />
	    <RadioInput label="Password" value="password" />
	    <RadioInput label="Two-factor authentication" value="auth" context="success" />
	  </RadioInputGroup>
	  ```

	  Setting the `disabled` prop to `true` will disable the entire RadioInputGroup.

	  ```jsx_example
	  <RadioInputGroup
	    name="fruits"
	    description="Fruits"
	    defaultValue="orange"
	    disabled
	  >
	    <RadioInput label="Apple" value="apple" />
	    <RadioInput label="Orange" value="orange" />
	    <RadioInput label="Banana" value="banana" />
	  </RadioInputGroup>
	  ```

	  ```jsx_example
	  <RadioInputGroup name="feature" defaultValue="off" description="Super-awesome feature" variant="toggle" disabled>
	    <RadioInput label="Off" value="off" />
	    <RadioInput label="Allow" value="allow" />
	    <RadioInput label="On" value="on" />
	  </RadioInputGroup>
	  ```

	  Or disable an individual RadioInput component via its `disabled` prop.

	  ```jsx_example
	  <RadioInputGroup
	    name="fruits"
	    defaultValue="banana"
	    description="Fruits"
	  >
	    <RadioInput label="Apple" value="apple" />
	    <RadioInput label="Orange" value="orange" disabled />
	    <RadioInput label="Banana" value="banana" />
	  </RadioInputGroup>
	  ```

	  ```jsx_example
	  <RadioInputGroup name="feature" defaultValue="off" description="Super-awesome feature" variant="toggle">
	    <RadioInput label="Off" value="off" />
	    <RadioInput label="Allow" value="allow" />
	    <RadioInput label="On" value="on" disabled />
	  </RadioInputGroup>
	  ```

	  If you would like to make the description visible only to screen readers you can use the
	  [ScreenReaderContent](#ScreenReaderContent) component.

	  ```jsx_example
	  <RadioInputGroup name="fruit" defaultValue="banana" description={
	    <ScreenReaderContent>Select a fruit</ScreenReaderContent>
	    }>
	    <RadioInput label="Apple" value="apple" />
	    <RadioInput label="Orange" value="orange" />
	    <RadioInput label="Banana" value="banana" />
	  </RadioInputGroup>
	  ```

	  ```jsx_example
	  <RadioInputGroup name="fruit" defaultValue="banana" description="A list of fruits (select your favorite)">
	    <RadioInput value="Apple" label={<div>
	        <ScreenReaderContent>Apple</ScreenReaderContent>
	        <TextInput label={
	          <ScreenReaderContent>Edit fruit</ScreenReaderContent>
	          } defaultValue="Apple"/>
	      </div>} />
	      <RadioInput value="banana" label={<div>
	        <ScreenReaderContent>Banana</ScreenReaderContent>
	        <TextInput label={
	          <ScreenReaderContent>Edit fruit</ScreenReaderContent>
	          } defaultValue="Banana"/>
	      </div>} />
	          <RadioInput value="Orange" label={<div>
	        <ScreenReaderContent>Orange</ScreenReaderContent>
	        <TextInput label={
	          <ScreenReaderContent>Edit fruit</ScreenReaderContent>
	          } defaultValue="Orange"/>
	      </div>} />
	  </RadioInputGroup>
	  ```
	**/

	var RadioInputGroup = (_dec = (0, _themeable2.default)(_RadioInputGroup4.default, _RadioInputGroup6.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  (0, _inherits3.default)(RadioInputGroup, _Component);

	  function RadioInputGroup(props) {
	    (0, _classCallCheck3.default)(this, RadioInputGroup);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RadioInputGroup).call(this));

	    _this.handleChange = function (e) {
	      var value = e.target.value;

	      if (_this.props.disabled) {
	        e.preventDefault();
	        return;
	      }

	      if (_this.props.value === undefined) {
	        _this.setState({ value: value });
	      }

	      if (typeof _this.props.onChange === 'function') {
	        _this.props.onChange(value);
	      }
	    };

	    if (props.value === undefined) {
	      _this.state = {
	        value: props.defaultValue
	      };
	    }
	    return _this;
	  }

	  (0, _createClass3.default)(RadioInputGroup, [{
	    key: 'getCheckedInput',
	    value: function getCheckedInput() {
	      var _this2 = this;

	      var checked = void 0;

	      _react.Children.forEach(this.props.children, function (child, index) {
	        if (child && child.type === _RadioInput2.default && _this2.value === child.props.value) {
	          checked = child;
	        }
	      });

	      return checked;
	    }
	  }, {
	    key: 'renderChildren',
	    value: function renderChildren() {
	      var _this3 = this;

	      var _props = this.props;
	      var children = _props.children;
	      var name = _props.name;
	      var variant = _props.variant;
	      var size = _props.size;
	      var disabled = _props.disabled;

	      // This adds the passed in name property to each RadioInput component
	      // and checks the input whose value matches the value property

	      return _react.Children.map(children, function (child) {
	        if (child && child.type === _RadioInput2.default) {
	          var onChange = child.props.onChange;

	          return (0, _safeCloneElement2.default)(child, (0, _extends3.default)({}, child.props, {
	            name: name,
	            disabled: disabled || child.props.disabled,
	            variant: variant,
	            size: size,
	            checked: _this3.value === child.props.value,
	            onChange: (0, _createChainedFunction2.default)(onChange, _this3.handleChange)
	          }));
	        } else {
	          return child; // PropType validation should handle errors
	        }
	      });
	    }
	  }, {
	    key: 'renderErrors',
	    value: function renderErrors() {
	      var errors = this.props.errors;

	      if (errors) {
	        return errors.map(function (msg, i) {
	          return _react2.default.createElement(
	            'div',
	            { key: 'error' + i, className: _RadioInputGroup2.default.errors },
	            msg
	          );
	        });
	      }
	    }
	  }, {
	    key: 'renderDescription',
	    value: function renderDescription() {
	      var description = this.props.description;

	      if (description) {
	        return _react2.default.createElement(
	          'div',
	          { className: _RadioInputGroup2.default.description },
	          description
	        );
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classes;

	      var checkedInput = this.getCheckedInput();
	      var context = checkedInput && checkedInput.props.context;
	      var classes = (_classes = {}, (0, _defineProperty3.default)(_classes, _RadioInputGroup2.default.root, true), (0, _defineProperty3.default)(_classes, _RadioInputGroup2.default[this.props.variant], true), (0, _defineProperty3.default)(_classes, _RadioInputGroup2.default[context], context), _classes);

	      return _react2.default.createElement(
	        'fieldset',
	        {
	          className: (0, _classnames2.default)(classes),
	          'aria-disabled': this.props.disabled ? 'true' : null },
	        _react2.default.createElement(
	          'legend',
	          { className: _RadioInputGroup2.default.label },
	          this.renderDescription(),
	          this.renderErrors()
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _RadioInputGroup2.default.layout },
	          this.renderChildren()
	        )
	      );
	    }
	  }, {
	    key: 'value',
	    get: function get() {
	      return this.props.value === undefined ? this.state.value : this.props.value;
	    }
	  }]);
	  return RadioInputGroup;
	}(_react.Component), _class2.propTypes = {
	  name: _react.PropTypes.string.isRequired,
	  description: _react.PropTypes.node.isRequired,
	  /**
	  * value to set on initial render
	  */
	  defaultValue: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	  /**
	  * the selected value (must be accompanied by an `onChange` prop)
	  */
	  value: _CustomPropTypes2.default.controllable(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])),
	  /**
	  * when used with the `value` prop, the component will not control its own state
	  */
	  onChange: _react.PropTypes.func,
	  disabled: _react.PropTypes.bool,
	  errors: _react.PropTypes.array,
	  /**
	  * children of type `RadioInput`
	  */
	  children: _CustomPropTypes2.default.validChildren([_RadioInput2.default]),
	  variant: _react.PropTypes.oneOf(['simple', 'toggle']),
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large'])
	}, _class2.defaultProps = {
	  disabled: false,
	  variant: 'simple',
	  size: 'medium'
	}, _temp)) || _class);
	exports.default = RadioInputGroup;

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(95);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _objectWithoutProperties2 = __webpack_require__(99);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class, _class2, _temp2;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(124);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(97);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _themeable = __webpack_require__(98);

	var _themeable2 = _interopRequireDefault(_themeable);

	var _RadioInput = __webpack_require__(220);

	var _RadioInput2 = _interopRequireDefault(_RadioInput);

	var _RadioInput3 = __webpack_require__(221);

	var _RadioInput4 = _interopRequireDefault(_RadioInput3);

	var _RadioInput5 = __webpack_require__(222);

	var _RadioInput6 = _interopRequireDefault(_RadioInput5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RadioInput = (_dec = (0, _themeable2.default)(_RadioInput4.default, _RadioInput6.default), _dec(_class = (_temp2 = _class2 = function (_Component) {
	  (0, _inherits3.default)(RadioInput, _Component);

	  function RadioInput() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, RadioInput);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(RadioInput)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClick = function (e) {
	      if (_this.props.disabled) {
	        e.preventDefault();
	        return;
	      }

	      _this.props.onClick(e);
	    }, _this.handleChange = function (e) {
	      if (_this.props.disabled) {
	        e.preventDefault();
	        return;
	      }

	      _this.props.onChange(e);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(RadioInput, [{
	    key: 'focus',
	    value: function focus() {
	      _reactDom2.default.findDOMNode(this.refs.input).focus();
	    }
	  }, {
	    key: 'isFocused',
	    value: function isFocused() {
	      return document.activeElement === _reactDom2.default.findDOMNode(this.refs.input);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classes;

	      /* eslint-disable no-unused-vars, react/prop-types */
	      var _props = this.props;
	      var onClick = _props.onClick;
	      var disabled = _props.disabled;
	      var label = _props.label;
	      var className = _props.className;
	      var variant = _props.variant;
	      var size = _props.size;
	      var props = (0, _objectWithoutProperties3.default)(_props, ['onClick', 'disabled', 'label', 'className', 'variant', 'size']);
	      /* eslint-enable no-unused-vars, react/prop-types */

	      var classes = (_classes = {}, (0, _defineProperty3.default)(_classes, _RadioInput2.default.root, true), (0, _defineProperty3.default)(_classes, _RadioInput2.default.input, true), (0, _defineProperty3.default)(_classes, _RadioInput2.default[variant], true), (0, _defineProperty3.default)(_classes, _RadioInput2.default[size], this.props.variant === 'toggle'), (0, _defineProperty3.default)(_classes, _RadioInput2.default[this.props.context], this.props.context && this.props.checked), _classes);

	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(classes) },
	        _react2.default.createElement(
	          'label',
	          { className: _RadioInput2.default.label },
	          _react2.default.createElement('input', (0, _extends3.default)({ ref: 'input',
	            type: 'radio',
	            className: _RadioInput2.default.input,
	            'aria-disabled': disabled ? 'true' : null,
	            onChange: this.handleChange,
	            onClick: this.handleClick
	          }, props)),
	          _react2.default.createElement(
	            'div',
	            { className: _RadioInput2.default.layout },
	            _react2.default.createElement('span', { className: _RadioInput2.default.facade }),
	            _react2.default.createElement(
	              'span',
	              { className: _RadioInput2.default.text },
	              label
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return RadioInput;
	}(_react.Component), _class2.propTypes = {
	  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
	  label: _react.PropTypes.node.isRequired,
	  name: _react.PropTypes.string,
	  checked: _react.PropTypes.bool,
	  disabled: _react.PropTypes.bool,
	  onClick: _react.PropTypes.func,
	  onChange: _react.PropTypes.func,
	  variant: _react.PropTypes.oneOf(['simple', 'toggle', 'menuitem']),
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
	  context: _react.PropTypes.oneOf(['success', 'danger'])
	}, _class2.defaultProps = {
	  onClick: function onClick(event) {},
	  onChange: function onChange(event) {},
	  variant: 'simple',
	  size: 'medium',
	  disabled: false
	}, _temp2)) || _class);
	exports.default = RadioInput;

/***/ },
/* 220 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-RadioInput__root","input":"ic-0-9-2-RadioInput__input","simple":"ic-0-9-2-RadioInput__simple","menuitem":"ic-0-9-2-RadioInput__menuitem","layout":"ic-0-9-2-RadioInput__layout","facade":"ic-0-9-2-RadioInput__facade","text":"ic-0-9-2-RadioInput__text","toggle":"ic-0-9-2-RadioInput__toggle","label":"ic-0-9-2-RadioInput__label","small":"ic-0-9-2-RadioInput__small","medium":"ic-0-9-2-RadioInput__medium","large":"ic-0-9-2-RadioInput__large","success":"ic-0-9-2-RadioInput__success","danger":"ic-0-9-2-RadioInput__danger"};

/***/ },
/* 221 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var borders = _ref.borders;
	  var colors = _ref.colors;
	  var typography = _ref.typography;

	  return {
	    borderColor: colors.colorNeutralMedium,
	    borderColorHover: colors.colorBrandAccent,
	    outlineColorFocus: colors.colorFocusTransparent,
	    outlineColorChecked: colors.colorNeutralInverseTransparent,
	    shadowColorFocus: colors.colorFocusTransparent,
	    backgroundColor: colors.colorBackground,
	    labelTextColor: colors.colorText,
	    labelLineHeight: typography.lineHeightBase,
	    labelFontSize: typography.fontSizeSmall,
	    labelFontFamily: typography.fontFamilyBase,

	    toggleBorderRadius: borders.borderRadiusLarge,
	    toggleBgColor: colors.colorNeutral,
	    toggleHandleBgColor: colors.colorBackground,
	    toggleTextColor: colors.colorTextInverse,
	    toggleHandleTextColor: colors.colorText,
	    toggleFocusColor: colors.colorFocusTransparent,
	    toggleSuccessTextColor: colors.colorSuccess,
	    toggleDangerTextColor: colors.colorDanger
	  };
	};

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223);
	module.exports = __webpack_require__(224);

/***/ },
/* 223 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-RadioInput__root","text":"ic-0-9-2-RadioInput__text","simple":"ic-0-9-2-RadioInput__simple","input":"ic-0-9-2-RadioInput__input","layout":"ic-0-9-2-RadioInput__layout","facade":"ic-0-9-2-RadioInput__facade","menuitem":"ic-0-9-2-RadioInput__menuitem","toggle":"ic-0-9-2-RadioInput__toggle","success":"ic-0-9-2-RadioInput__success","danger":"ic-0-9-2-RadioInput__danger"};

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	if (false) {
	  module.hot.accept([]);
	}
	module.exports = ".ic-0-9-2-RadioInput__root .ic-0-9-2-RadioInput__text {\n  font-family: map(RadioInput, labelFontFamily);\n}\n\n.ic-0-9-2-RadioInput__simple .ic-0-9-2-RadioInput__input:hover + .ic-0-9-2-RadioInput__layout .ic-0-9-2-RadioInput__facade, .ic-0-9-2-RadioInput__menuitem .ic-0-9-2-RadioInput__input:hover + .ic-0-9-2-RadioInput__layout .ic-0-9-2-RadioInput__facade {\n  border-color: map(RadioInput, borderColorHover);\n}\n\n.ic-0-9-2-RadioInput__simple .ic-0-9-2-RadioInput__input:checked + .ic-0-9-2-RadioInput__layout .ic-0-9-2-RadioInput__facade, .ic-0-9-2-RadioInput__menuitem .ic-0-9-2-RadioInput__input:checked + .ic-0-9-2-RadioInput__layout .ic-0-9-2-RadioInput__facade {\n  background-color: map(RadioInput, borderColorHover);\n  box-shadow: inset 0 0 0 3px map(RadioInput, backgroundColor);\n  border-color: map(RadioInput, borderColorHover);\n}\n\n.ic-0-9-2-RadioInput__simple .ic-0-9-2-RadioInput__input:focus + .ic-0-9-2-RadioInput__layout .ic-0-9-2-RadioInput__facade, .ic-0-9-2-RadioInput__menuitem .ic-0-9-2-RadioInput__input:focus + .ic-0-9-2-RadioInput__layout .ic-0-9-2-RadioInput__facade {\n  background-color: map(RadioInput, borderColorHover);\n  box-shadow:\n        inset 0 0 0 2px map(RadioInput, shadowColorFocus),\n        inset 0 0 0 4px map(RadioInput, backgroundColor);\n}\n\n.ic-0-9-2-RadioInput__simple .ic-0-9-2-RadioInput__input[aria-disabled] + .ic-0-9-2-RadioInput__layout .ic-0-9-2-RadioInput__facade, .ic-0-9-2-RadioInput__menuitem .ic-0-9-2-RadioInput__input[aria-disabled] + .ic-0-9-2-RadioInput__layout .ic-0-9-2-RadioInput__facade {\n  border-color: map(RadioInput, borderColor);\n}\n\n.ic-0-9-2-RadioInput__simple .ic-0-9-2-RadioInput__facade, .ic-0-9-2-RadioInput__menuitem .ic-0-9-2-RadioInput__facade {\n  background-color: map(RadioInput, backgroundColor);\n  border-color: map(RadioInput, borderColor);\n}\n\n.ic-0-9-2-RadioInput__simple .ic-0-9-2-RadioInput__text, .ic-0-9-2-RadioInput__menuitem .ic-0-9-2-RadioInput__text {\n  color: map(RadioInput, labelTextColor);\n  line-height: map(RadioInput, labelLineHeight);\n  font-size: map(RadioInput, labelFontSize);\n}\n\n.ic-0-9-2-RadioInput__toggle .ic-0-9-2-RadioInput__facade {\n  background: map(RadioInput, toggleHandleBgColor);\n  border-radius: calc(map(RadioInput, toggleBorderRadius) - 4px);\n}\n\n.ic-0-9-2-RadioInput__toggle .ic-0-9-2-RadioInput__text {\n  color: map(RadioInput, toggleTextColor);\n}\n\n.ic-0-9-2-RadioInput__toggle .ic-0-9-2-RadioInput__input:checked + .ic-0-9-2-RadioInput__layout .ic-0-9-2-RadioInput__text {\n  color: map(RadioInput, toggleHandleTextColor);\n}\n\n.ic-0-9-2-RadioInput__toggle .ic-0-9-2-RadioInput__input:focus + .ic-0-9-2-RadioInput__layout .ic-0-9-2-RadioInput__facade {\n  box-shadow:\n        0 3px 7px rgba(0, 0, 0, 0.3),\n        0 0 0 8px map(RadioInput, toggleFocusColor);\n}\n\n.ic-0-9-2-RadioInput__toggle.ic-0-9-2-RadioInput__success .ic-0-9-2-RadioInput__input:checked + .ic-0-9-2-RadioInput__layout .ic-0-9-2-RadioInput__text {\n  color: map(RadioInput, toggleSuccessTextColor);\n}\n\n.ic-0-9-2-RadioInput__toggle.ic-0-9-2-RadioInput__danger .ic-0-9-2-RadioInput__input:checked + .ic-0-9-2-RadioInput__layout .ic-0-9-2-RadioInput__text {\n  color: map(RadioInput, toggleDangerTextColor);\n}\n"

/***/ },
/* 225 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-RadioInputGroup__root","label":"ic-0-9-2-RadioInputGroup__label","description":"ic-0-9-2-RadioInputGroup__description","errors":"ic-0-9-2-RadioInputGroup__errors","toggle":"ic-0-9-2-RadioInputGroup__toggle","layout":"ic-0-9-2-RadioInputGroup__layout","success":"ic-0-9-2-RadioInputGroup__success","danger":"ic-0-9-2-RadioInputGroup__danger"};

/***/ },
/* 226 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var borders = _ref.borders;
	  var colors = _ref.colors;
	  var typography = _ref.typography;

	  return {
	    borderStyle: borders.borderStyleDefault,
	    borderRadius: borders.borderRadiusLarge,
	    labelTextColor: colors.colorText,
	    labelFontWeight: typography.fontWeightBold,
	    labelFontFamily: typography.fontFamilyBase,
	    toggleBgColor: colors.colorNeutral,
	    toggleHandleBgColor: colors.colorBackground,
	    toggleSuccessColor: colors.colorSuccessAccent,
	    toggleDangerColor: colors.colorDangerAccent
	  };
	};

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(228);
	module.exports = __webpack_require__(229);

/***/ },
/* 228 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"label":"ic-0-9-2-RadioInputGroup__label","toggle":"ic-0-9-2-RadioInputGroup__toggle","layout":"ic-0-9-2-RadioInputGroup__layout","success":"ic-0-9-2-RadioInputGroup__success","danger":"ic-0-9-2-RadioInputGroup__danger"};

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	if (false) {
	  module.hot.accept([]);
	}
	module.exports = ".ic-0-9-2-RadioInputGroup__label {\n  color: map(RadioInputGroup, labelTextColor);\n  font-weight: map(RadioInputGroup, labelFontWeight);\n  font-family: map(RadioInputGroup, labelFontFamily);\n}\n\n.ic-0-9-2-RadioInputGroup__toggle .ic-0-9-2-RadioInputGroup__layout {\n  background: map(RadioInputGroup, toggleBgColor);\n  border-color: map(RadioInputGroup, toggleBgColor);\n  border-style: map(RadioInputGroup, borderStyle);\n  border-radius: map(RadioInputGroup, borderRadius);\n}\n\n.ic-0-9-2-RadioInputGroup__toggle.ic-0-9-2-RadioInputGroup__success .ic-0-9-2-RadioInputGroup__layout {\n  background: map(RadioInputGroup, toggleSuccessColor);\n  border-color: map(RadioInputGroup, toggleSuccessColor);\n}\n\n.ic-0-9-2-RadioInputGroup__toggle.ic-0-9-2-RadioInputGroup__danger .ic-0-9-2-RadioInputGroup__layout {\n  background: map(RadioInputGroup, toggleDangerColor);\n  border-color: map(RadioInputGroup, toggleDangerColor);\n}\n"

/***/ },
/* 230 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-MenuItem__root"};

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _themeable = __webpack_require__(98);

	var _themeable2 = _interopRequireDefault(_themeable);

	var _MenuItemSeparator = __webpack_require__(232);

	var _MenuItemSeparator2 = _interopRequireDefault(_MenuItemSeparator);

	var _MenuItemSeparator3 = __webpack_require__(233);

	var _MenuItemSeparator4 = _interopRequireDefault(_MenuItemSeparator3);

	var _MenuItemSeparator5 = __webpack_require__(234);

	var _MenuItemSeparator6 = _interopRequireDefault(_MenuItemSeparator5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MenuItemSeparator = (_dec = (0, _themeable2.default)(_MenuItemSeparator4.default, _MenuItemSeparator6.default), _dec(_class = function (_Component) {
	  (0, _inherits3.default)(MenuItemSeparator, _Component);

	  function MenuItemSeparator() {
	    (0, _classCallCheck3.default)(this, MenuItemSeparator);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MenuItemSeparator).apply(this, arguments));
	  }

	  (0, _createClass3.default)(MenuItemSeparator, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('li', (0, _extends3.default)({}, this.props, { role: 'separator', className: _MenuItemSeparator2.default.root }));
	    }
	  }]);
	  return MenuItemSeparator;
	}(_react.Component)) || _class);
	exports.default = MenuItemSeparator;

/***/ },
/* 232 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-MenuItemSeparator__root"};

/***/ },
/* 233 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var colors = _ref.colors;
	  var typography = _ref.typography;

	  return {};
	};

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(235);
	module.exports = __webpack_require__(236);

/***/ },
/* 235 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-MenuItemSeparator__root"};

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	if (false) {
	  module.hot.accept([]);
	}
	module.exports = ".ic-0-9-2-MenuItemSeparator__root {\n}\n"

/***/ },
/* 237 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-Menu__root"};

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MetricsListItem = exports.default = undefined;

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class, _class2, _temp;

	var _MetricsListItem = __webpack_require__(239);

	Object.defineProperty(exports, 'MetricsListItem', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_MetricsListItem).default;
	  }
	});

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _CustomPropTypes = __webpack_require__(151);

	var _CustomPropTypes2 = _interopRequireDefault(_CustomPropTypes);

	var _themeable = __webpack_require__(98);

	var _themeable2 = _interopRequireDefault(_themeable);

	var _MetricsListItem2 = _interopRequireDefault(_MetricsListItem);

	var _MetricsList = __webpack_require__(245);

	var _MetricsList2 = _interopRequireDefault(_MetricsList);

	var _MetricsList3 = __webpack_require__(246);

	var _MetricsList4 = _interopRequireDefault(_MetricsList3);

	var _MetricsList5 = __webpack_require__(247);

	var _MetricsList6 = _interopRequireDefault(_MetricsList5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	  The MetricsList component displays metrics (value + label) in rows of at most three.

	  ```jsx_example
	  <MetricsList>
	    <MetricsListItem label="Grade" value="80%" />
	    <MetricsListItem label="Late" value="4" />
	    <MetricsListItem label="Missing" value="2" />
	  </MetricsList>
	  ```
	 **/
	var MetricsList = (_dec = (0, _themeable2.default)(_MetricsList4.default, _MetricsList6.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  (0, _inherits3.default)(MetricsList, _Component);

	  function MetricsList() {
	    (0, _classCallCheck3.default)(this, MetricsList);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MetricsList).apply(this, arguments));
	  }

	  (0, _createClass3.default)(MetricsList, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _MetricsList2.default.root, role: 'grid', 'aria-readonly': 'true' },
	        this.props.children
	      );
	    }
	  }]);
	  return MetricsList;
	}(_react.Component), _class2.propTypes = {
	  /**
	  * children of type `MetricsListItem`
	  */
	  children: _CustomPropTypes2.default.validChildren([_MetricsListItem2.default])
	}, _temp)) || _class);
	exports.default = MetricsList;

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _themeable = __webpack_require__(98);

	var _themeable2 = _interopRequireDefault(_themeable);

	var _MetricsListItem = __webpack_require__(240);

	var _MetricsListItem2 = _interopRequireDefault(_MetricsListItem);

	var _MetricsListItem3 = __webpack_require__(241);

	var _MetricsListItem4 = _interopRequireDefault(_MetricsListItem3);

	var _MetricsListItem5 = __webpack_require__(242);

	var _MetricsListItem6 = _interopRequireDefault(_MetricsListItem5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MetricsListItem = (_dec = (0, _themeable2.default)(_MetricsListItem4.default, _MetricsListItem6.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  (0, _inherits3.default)(MetricsListItem, _Component);

	  function MetricsListItem() {
	    (0, _classCallCheck3.default)(this, MetricsListItem);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MetricsListItem).apply(this, arguments));
	  }

	  (0, _createClass3.default)(MetricsListItem, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { role: 'row', className: _MetricsListItem2.default.root },
	        _react2.default.createElement(
	          'div',
	          { role: 'gridcell', className: _MetricsListItem2.default.value },
	          this.props.value
	        ),
	        _react2.default.createElement(
	          'div',
	          { role: 'rowheader', className: _MetricsListItem2.default.label },
	          this.props.label
	        )
	      );
	    }
	  }]);
	  return MetricsListItem;
	}(_react.Component), _class2.propTypes = {
	  label: _react.PropTypes.string.isRequired,
	  value: _react.PropTypes.string.isRequired
	}, _temp)) || _class);
	exports.default = MetricsListItem;

/***/ },
/* 240 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-MetricsListItem__root","label":"ic-0-9-2-MetricsListItem__label","value":"ic-0-9-2-MetricsListItem__value"};

/***/ },
/* 241 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var colors = _ref.colors;
	  var typography = _ref.typography;

	  return {
	    valueColor: colors.colorTextSecondary,
	    labelColor: colors.colorText,
	    fontFamily: typography.fontFamilyBase
	  };
	};

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(243);
	module.exports = __webpack_require__(244);

/***/ },
/* 243 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-MetricsListItem__root","label":"ic-0-9-2-MetricsListItem__label","value":"ic-0-9-2-MetricsListItem__value"};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	if (false) {
	  module.hot.accept([]);
	}
	module.exports = ".ic-0-9-2-MetricsListItem__root {\n  font-family: map(MetricsListItem, fontFamily);\n}\n\n.ic-0-9-2-MetricsListItem__label {\n  color: map(MetricsListItem, labelColor);\n}\n\n.ic-0-9-2-MetricsListItem__value {\n  color: map(MetricsListItem, valueColor);\n}\n"

/***/ },
/* 245 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-MetricsList__root"};

/***/ },
/* 246 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var colors = _ref.colors;

	  return {
	    textColor: colors.colorNeutral
	  };
	};

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(248);
	module.exports = __webpack_require__(249);

/***/ },
/* 248 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-MetricsList__root"};

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	if (false) {
	  module.hot.accept([]);
	}
	module.exports = ".ic-0-9-2-MetricsList__root {\n  color: map(MetricsList, textColor);\n}\n"

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(99);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _shortid = __webpack_require__(114);

	var _shortid2 = _interopRequireDefault(_shortid);

	var _themeable = __webpack_require__(98);

	var _themeable2 = _interopRequireDefault(_themeable);

	var _CustomPropTypes = __webpack_require__(151);

	var _CustomPropTypes2 = _interopRequireDefault(_CustomPropTypes);

	var _addEventListener = __webpack_require__(251);

	var _addEventListener2 = _interopRequireDefault(_addEventListener);

	var _ContextBox = __webpack_require__(167);

	var _ContextBox2 = _interopRequireDefault(_ContextBox);

	var _RangeInput = __webpack_require__(255);

	var _RangeInput2 = _interopRequireDefault(_RangeInput);

	var _RangeInput3 = __webpack_require__(256);

	var _RangeInput4 = _interopRequireDefault(_RangeInput3);

	var _RangeInput5 = __webpack_require__(257);

	var _RangeInput6 = _interopRequireDefault(_RangeInput5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	  An html5 range input/slider component

	  ```jsx_example
	  <RangeInput labelText="bar" defaultValue={50} max={100} min={0} />
	  ```
	 **/
	var RangeInput = (_dec = (0, _themeable2.default)(_RangeInput4.default, _RangeInput6.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  (0, _inherits3.default)(RangeInput, _Component);

	  function RangeInput(props) {
	    (0, _classCallCheck3.default)(this, RangeInput);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RangeInput).call(this));

	    _this.handleChange = function (event) {
	      var _this$props = _this.props;
	      var onChange = _this$props.onChange;
	      var value = _this$props.value;


	      if (value === undefined) {
	        _this.setState({ value: event.target.value });
	      }

	      if (typeof onChange === 'function') {
	        onChange(event.target.value);
	      }
	    };

	    if (props.value === undefined) {
	      _this.state = {
	        value: props.defaultValue
	      };
	    }

	    _this.inputId = 'RangeInput_' + _shortid2.default.generate();
	    return _this;
	  }

	  /* workaround for https://github.com/facebook/react/issues/554 */


	  (0, _createClass3.default)(RangeInput, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (!this.refs.rangeInput) {
	        return;
	      }
	      // https://connect.microsoft.com/IE/Feedback/Details/856998
	      this.inputListener = (0, _addEventListener2.default)(this.refs.rangeInput, 'input', this.handleChange);
	      this.changeListener = (0, _addEventListener2.default)(this.refs.rangeInput, 'change', this.handleChange);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (!this.refs.rangeInput) {
	        return;
	      }
	      this.inputListener.remove();
	      this.changeListener.remove();
	    }
	    /* end workaround */

	  }, {
	    key: 'render',
	    value: function render() {
	      /* eslint-disable no-unused-vars */
	      var _props = this.props;
	      var labelText = _props.labelText;
	      var formatValue = _props.formatValue;
	      var id = _props.id;
	      var onChange = _props.onChange;
	      var props = (0, _objectWithoutProperties3.default)(_props, ['labelText', 'formatValue', 'id', 'onChange']);
	      /* eslint-enable no-unused-vars */

	      return _react2.default.createElement(
	        'div',
	        { className: _RangeInput2.default.root },
	        _react2.default.createElement(
	          'label',
	          { className: _RangeInput2.default.label, htmlFor: id || this.inputId },
	          labelText
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _RangeInput2.default.control },
	          _react2.default.createElement('input', (0, _extends3.default)({
	            className: _RangeInput2.default.input,
	            ref: 'rangeInput',
	            type: 'range',
	            role: 'slider',
	            id: id || this.inputId,
	            'aria-valuenow': this.value,
	            'aria-valuemin': props.min,
	            'aria-valuemax': props.max,
	            'aria-valuetext': formatValue(this.value)
	          }, props)),
	          _react2.default.createElement(
	            _ContextBox2.default,
	            { variant: 'inverse', placement: 'right' },
	            _react2.default.createElement(
	              'output',
	              { htmlFor: id || this.inputId, className: _RangeInput2.default.value },
	              formatValue(this.value)
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'value',
	    get: function get() {
	      return this.props.value === undefined ? this.state.value : this.props.value;
	    }
	  }]);
	  return RangeInput;
	}(_react.Component), _class2.propTypes = {
	  min: _react.PropTypes.number.isRequired,
	  max: _react.PropTypes.number.isRequired,
	  /**
	  * value to set on initial render
	  */
	  defaultValue: _react.PropTypes.number,
	  /**
	  * the selected value (must be accompanied by an `onChange` prop)
	  */
	  value: _CustomPropTypes2.default.controllable(_react.PropTypes.number),
	  /**
	  * when used with the `value` prop, the component will not control its own state
	  */
	  onChange: _react.PropTypes.func,
	  id: _react.PropTypes.string,
	  labelText: _react.PropTypes.string.isRequired,
	  step: _react.PropTypes.number,
	  /**
	  * A function to format the displayed value
	  */
	  formatValue: _react.PropTypes.func
	}, _class2.defaultProps = {
	  step: 1,
	  formatValue: function formatValue(val) {
	    return val;
	  },
	  max: 0,
	  min: 0
	}, _temp)) || _class);
	exports.default = RangeInput;

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (node, event, handler) {
	  (0, _on2.default)(node, event, handler);
	  return {
	    remove: function remove() {
	      (0, _off2.default)(node, event, handler);
	    }
	  };
	};

	var _on = __webpack_require__(252);

	var _on2 = _interopRequireDefault(_on);

	var _off = __webpack_require__(254);

	var _off2 = _interopRequireDefault(_off);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var canUseDOM = __webpack_require__(253);
	var on = function on() {};

	if (canUseDOM) {
	  on = (function () {

	    if (document.addEventListener) return function (node, eventName, handler, capture) {
	      return node.addEventListener(eventName, handler, capture || false);
	    };else if (document.attachEvent) return function (node, eventName, handler) {
	      return node.attachEvent('on' + eventName, handler);
	    };
	  })();
	}

	module.exports = on;

/***/ },
/* 253 */
/***/ function(module, exports) {

	'use strict';
	module.exports = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var canUseDOM = __webpack_require__(253);
	var off = function off() {};

	if (canUseDOM) {

	  off = (function () {

	    if (document.addEventListener) return function (node, eventName, handler, capture) {
	      return node.removeEventListener(eventName, handler, capture || false);
	    };else if (document.attachEvent) return function (node, eventName, handler) {
	      return node.detachEvent('on' + eventName, handler);
	    };
	  })();
	}

	module.exports = off;

/***/ },
/* 255 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-RangeInput__root","label":"ic-0-9-2-RangeInput__label","control":"ic-0-9-2-RangeInput__control","input":"ic-0-9-2-RangeInput__input","value":"ic-0-9-2-RangeInput__value"};

/***/ },
/* 256 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var colors = _ref.colors;
	  var typography = _ref.typography;

	  return {
	    handleColor: colors.colorBrandAccent,
	    handleColorHover: colors.colorFocusAccent,
	    handleColorFocus: colors.colorFocusAccent,
	    focusOutlineColor: colors.colorFocusTransparent,
	    trackColor: colors.colorNeutralMedium,
	    handleShadowColor: colors.colorNeutralTransparent,
	    valueBackgroundColor: colors.colorBackgroundInverse,
	    valueTextColor: colors.colorTextInverse,
	    labelFontWeight: typography.fontWeightBold,
	    fontFamily: typography.fontFamilyBase
	  };
	};

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(258);
	module.exports = __webpack_require__(259);

/***/ },
/* 258 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-RangeInput__root","input":"ic-0-9-2-RangeInput__input","label":"ic-0-9-2-RangeInput__label"};

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	if (false) {
	  module.hot.accept([]);
	}
	module.exports = ".ic-0-9-2-RangeInput__root {\n  font-family: map(RangeInput, fontFamily);\n}\n\n.ic-0-9-2-RangeInput__input::-webkit-slider-thumb {\n  background: map(RangeInput, handleColor);\n  box-shadow: 0 0.2em 0.375em map(RangeInput, handleShadowColor);\n}\n\n.ic-0-9-2-RangeInput__input::-webkit-slider-thumb:hover {\n  background: map(RangeInput, handleColorHover);\n}\n\n.ic-0-9-2-RangeInput__input::-ms-thumb {\n  background: map(RangeInput, handleColor);\n  box-shadow: 0 0.2em 0.375em map(RangeInput, handleShadowColor);\n}\n\n.ic-0-9-2-RangeInput__input::-ms-thumb:hover {\n  background: map(RangeInput, handleColorHover);\n}\n\n.ic-0-9-2-RangeInput__input::-moz-range-thumb {\n  background: map(RangeInput, handleColor);\n  box-shadow: 0 0.2em 0.375em map(RangeInput, handleShadowColor);\n}\n\n.ic-0-9-2-RangeInput__input::-moz-range-thumb:hover {\n  background: map(RangeInput, handleColorHover);\n}\n\n.ic-0-9-2-RangeInput__input:focus::-webkit-slider-thumb, .ic-0-9-2-RangeInput__input:active::-webkit-slider-thumb {\n  box-shadow: 0 0.2em 0.375em map(RangeInput, handleShadowColor),\n        0 0 0 0.8em map(RangeInput, focusOutlineColor);\n}\n\n.ic-0-9-2-RangeInput__input:focus::-ms-thumb, .ic-0-9-2-RangeInput__input:active::-ms-thumb {\n  box-shadow: 0 0.2em 0.375em map(RangeInput, handleShadowColor),\n        0 0 0 0.8em map(RangeInput, focusOutlineColor);\n}\n\n.ic-0-9-2-RangeInput__input:focus::-moz-range-thumb, .ic-0-9-2-RangeInput__input:active::-moz-range-thumb {\n  box-shadow: 0 0.2em 0.375em map(RangeInput, handleShadowColor),\n        0 0 0 0.8em map(RangeInput, focusOutlineColor);\n}\n\n.ic-0-9-2-RangeInput__input::-webkit-slider-runnable-track {\n  background: map(RangeInput, trackColor);\n}\n\n.ic-0-9-2-RangeInput__input::-moz-range-track {\n  background: map(RangeInput, trackColor);\n}\n\n.ic-0-9-2-RangeInput__input::-ms-track {\n  background: map(RangeInput, trackColor);\n}\n\n.ic-0-9-2-RangeInput__input::-ms-fill-upper,\n  .ic-0-9-2-RangeInput__input::-ms-fill-lower {\n  background: map(RangeInput, trackColor);\n}\n\n.ic-0-9-2-RangeInput__input::-ms-track {\n  background: transparent;\n}\n\n.ic-0-9-2-RangeInput__label {\n  font-weight: map(RangeInput, labelFontWeight);\n}\n"

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _objectWithoutProperties2 = __webpack_require__(99);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _ScreenReaderContent = __webpack_require__(261);

	var _ScreenReaderContent2 = _interopRequireDefault(_ScreenReaderContent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	  The ScreenReaderContent component renders content that is accessible to
	  screen readers, but is not visible.

	  ```jsx_example
	  <ScreenReaderContent>
	    This content is not visible.
	  </ScreenReaderContent>
	  ```
	**/
	var ScreenReaderContent = (_temp = _class = function (_Component) {
	  (0, _inherits3.default)(ScreenReaderContent, _Component);

	  function ScreenReaderContent() {
	    (0, _classCallCheck3.default)(this, ScreenReaderContent);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ScreenReaderContent).apply(this, arguments));
	  }

	  (0, _createClass3.default)(ScreenReaderContent, [{
	    key: 'render',
	    value: function render() {
	      /* eslint-disable no-unused-vars, react/prop-types */
	      var _props = this.props;
	      var tag = _props.tag;
	      var className = _props.className;
	      var props = (0, _objectWithoutProperties3.default)(_props, ['tag', 'className']);
	      /* eslint-enable no-unused-vars, react/prop-types */

	      props.className = _ScreenReaderContent2.default.root;

	      return _react2.default.createElement(tag, props);
	    }
	  }]);
	  return ScreenReaderContent;
	}(_react.Component), _class.propTypes = {
	  /**
	  * the html tag to use for the root element
	  */
	  tag: _react.PropTypes.string,
	  /**
	  * content meant for screen readers only
	  */
	  children: _react.PropTypes.node
	}, _class.defaultProps = {
	  tag: 'div'
	}, _temp);
	exports.default = ScreenReaderContent;

/***/ },
/* 261 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-ScreenReaderContent__root"};

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(95);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _objectWithoutProperties2 = __webpack_require__(99);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _themeable = __webpack_require__(98);

	var _themeable2 = _interopRequireDefault(_themeable);

	var _shortid = __webpack_require__(114);

	var _shortid2 = _interopRequireDefault(_shortid);

	var _classnames = __webpack_require__(97);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _CustomPropTypes = __webpack_require__(151);

	var _CustomPropTypes2 = _interopRequireDefault(_CustomPropTypes);

	var _IconArrowDown = __webpack_require__(263);

	var _IconArrowDown2 = _interopRequireDefault(_IconArrowDown);

	var _Select = __webpack_require__(264);

	var _Select2 = _interopRequireDefault(_Select);

	var _Select3 = __webpack_require__(265);

	var _Select4 = _interopRequireDefault(_Select3);

	var _Select5 = __webpack_require__(266);

	var _Select6 = _interopRequireDefault(_Select5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	  An accessible and easily stylable select component.

	  ### Select size variants

	  Default is `medium`.

	  ```jsx_example
	  <div>
	  <Select size="small" label="Small">
	    <option value="foo">Foo</option>
	    <option disabled value="bar">Bar</option>
	  </Select>
	  <br />
	  <Select label="Medium">
	    <option value="foo">Foo</option>
	    <option disabled value="bar">Bar</option>
	  </Select>
	  <br />
	  <Select size="large" label="Large">
	    <option value="foo">Foo</option>
	    <option disabled value="bar">Bar</option>
	  </Select>
	  </div>
	  ```

	  ### Select with an error message

	  ```jsx_example
	  <Select label="What would you like for a snack?" errors={['You need to make a selection']}>
	    <option value="apples">Apples</option>
	    <option value="oranges">Oranges</option>
	    <option value="bananas">Bananas</option>
	    <option value="candy" disabled>Candy</option>
	  </Select>
	  ```

	  ### Select with the label visible only to screenreaders

	  ```jsx_example
	  <Select label={<ScreenReaderContent>What would you like for a snack?</ScreenReaderContent>}>
	    <option value="apples">Apples</option>
	    <option value="oranges">Oranges</option>
	    <option value="bananas">Bananas</option>
	    <option value="candy" disabled>Candy</option>
	  </Select>
	  ```
	**/
	var Select = (_dec = (0, _themeable2.default)(_Select4.default, _Select6.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  (0, _inherits3.default)(Select, _Component);

	  function Select(props) {
	    (0, _classCallCheck3.default)(this, Select);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Select).call(this));

	    _this.defaultId = 'Select' + _shortid2.default.generate();
	    _this.descriptionId = 'SelectDescription' + _shortid2.default.generate();
	    return _this;
	  }

	  (0, _createClass3.default)(Select, [{
	    key: 'renderErrors',
	    value: function renderErrors() {
	      var errors = this.props.errors;

	      if (errors) {
	        var messages = errors.map(function (msg, i) {
	          return _react2.default.createElement(
	            'li',
	            { key: 'error' + i, className: _Select2.default.errorMsg },
	            msg
	          );
	        });

	        return _react2.default.createElement(
	          'ul',
	          { className: _Select2.default.errors, id: this.errorsId },
	          messages
	        );
	      }
	    }
	  }, {
	    key: 'renderDescription',
	    value: function renderDescription() {
	      var errors = this.props.errors;


	      return errors && errors.length > 0 ? _react2.default.createElement(
	        'div',
	        { id: this.descriptionId },
	        this.renderErrors()
	      ) : null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classes;

	      var _props = this.props;
	      var label = _props.label;
	      var errors = _props.errors;
	      var size = _props.size;
	      var children = _props.children;
	      var props = (0, _objectWithoutProperties3.default)(_props, ['label', 'errors', 'size', 'children']);


	      var hasErrors = errors && errors.length > 0;

	      var classes = (_classes = {}, (0, _defineProperty3.default)(_classes, _Select2.default.root, true), (0, _defineProperty3.default)(_classes, _Select2.default.disabled, props.disabled), (0, _defineProperty3.default)(_classes, _Select2.default.required, props.required), (0, _defineProperty3.default)(_classes, _Select2.default[size], size), _classes);

	      var id = this.props.id || this.defaultId;
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(classes) },
	        _react2.default.createElement(
	          'label',
	          { htmlFor: id, className: _Select2.default.label },
	          _react2.default.createElement(
	            'div',
	            { className: _Select2.default.labelLayout },
	            label
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _Select2.default.selectLayout },
	            _react2.default.createElement(
	              'select',
	              (0, _extends3.default)({
	                id: id,
	                className: _Select2.default.select,
	                'aria-describedby': hasErrors ? this.descriptionId : null,
	                'aria-invalid': hasErrors ? 'true' : null
	              }, props),
	              children
	            ),
	            _react2.default.createElement(_IconArrowDown2.default, { className: _Select2.default.arrowDownIcon })
	          )
	        ),
	        this.renderDescription()
	      );
	    }
	  }]);
	  return Select;
	}(_react.Component), _class2.propTypes = {
	  /**
	  * Children must be option tags.
	  */
	  children: _CustomPropTypes2.default.validChildren(['option']),
	  disabled: _react.PropTypes.bool,
	  errors: _react.PropTypes.array,
	  id: _react.PropTypes.string,
	  label: _react.PropTypes.node.isRequired,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
	  required: _react.PropTypes.bool,
	  onBlur: _react.PropTypes.func,
	  onChange: _react.PropTypes.func,
	  onFocus: _react.PropTypes.func
	}, _class2.defaultProps = {
	  disabled: false,
	  size: 'medium'
	}, _temp)) || _class);
	exports.default = Select;

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = IconArrowDown;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function IconArrowDown(_ref) {
	  var className = _ref.className;

	  return _react2.default.createElement(
	    "svg",
	    { xmlns: "http://www.w3.org/2000/svg",
	      version: "1.1",
	      x: "0",
	      y: "0",
	      viewBox: "0 0 16 16",
	      "enable-background": "new 0 0 16 16",
	      className: className },
	    _react2.default.createElement("path", {
	      d: "M8 11.4c-0.2 0-0.4-0.1-0.6-0.2l-7-4.8C0 6.1-0.1 5.5 0.2 5c0.3-0.5 0.9-0.6 1.4-0.3L8 9.1l6.4-4.4c0.5-0.3 1.1-0.2 1.4 0.3 0.3 0.5 0.2 1.1-0.3 1.4l-7 4.8C8.4 11.3 8.2 11.4 8 11.4z" })
	  );
	}

	IconArrowDown.propTypes = {
	  className: _react.PropTypes.string
	};

/***/ },
/* 264 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-Select__root","label":"ic-0-9-2-Select__label","labelLayout":"ic-0-9-2-Select__labelLayout","selectLayout":"ic-0-9-2-Select__selectLayout","arrowDownIcon":"ic-0-9-2-Select__arrowDownIcon","select":"ic-0-9-2-Select__select","small":"ic-0-9-2-Select__small","medium":"ic-0-9-2-Select__medium","large":"ic-0-9-2-Select__large","errors":"ic-0-9-2-Select__errors","errorMsg":"ic-0-9-2-Select__errorMsg"};

/***/ },
/* 265 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var borders = _ref.borders;
	  var colors = _ref.colors;
	  var spacing = _ref.spacing;
	  var typography = _ref.typography;

	  return {
	    borderRadius: borders.borderRadiusMedium,
	    borderWidth: borders.borderWidthDefault,
	    borderColor: colors.colorNeutralMedium,
	    borderColorFocus: colors.colorBrandAccent,
	    borderColorError: colors.colorDangerAccent,
	    outlineColor: colors.colorFocusTransparent,
	    outlineColorError: colors.colorDangerTransparent,
	    backgroundColor: colors.colorBackground,
	    arrowIconColor: colors.colorTextSecondary,
	    textColor: colors.colorText,
	    errorMsgColor: colors.colorDanger,
	    labelBottomMargin: spacing.spacingExtraSmall,
	    errorMsgTopMargin: spacing.spacingExtraSmall,
	    fontFamily: typography.fontFamilyBase,
	    fontSizeSmall: typography.fontSizeExtraSmall,
	    fontSizeMedium: typography.fontSizeSmall,
	    fontSizeLarge: typography.fontSizeMedium,
	    fontSizeErrorMsgs: typography.fontSizeSmall,
	    labelLineHeight: typography.lineHeightCondensed,
	    labelFontWeight: typography.fontWeightBold,
	    paddingSmall: spacing.spacingSmall,
	    paddingMedium: spacing.spacingSmall,
	    paddingLarge: spacing.spacingMedium
	  };
	};

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(267);
	module.exports = __webpack_require__(268);

/***/ },
/* 267 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-Select__root","label":"ic-0-9-2-Select__label","labelLayout":"ic-0-9-2-Select__labelLayout","select":"ic-0-9-2-Select__select","arrowDownIcon":"ic-0-9-2-Select__arrowDownIcon","small":"ic-0-9-2-Select__small","medium":"ic-0-9-2-Select__medium","large":"ic-0-9-2-Select__large","errors":"ic-0-9-2-Select__errors","errorMsg":"ic-0-9-2-Select__errorMsg"};

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	if (false) {
	  module.hot.accept([]);
	}
	module.exports = ".ic-0-9-2-Select__root {\n\n  font-family: map(Select, fontFamily);\n\n}\n\n.ic-0-9-2-Select__root .ic-0-9-2-Select__label {\n\n  line-height: map(Select, labelLineHeight);\n\n  font-weight: map(Select, labelFontWeight);\n\n}\n\n.ic-0-9-2-Select__root .ic-0-9-2-Select__label .ic-0-9-2-Select__labelLayout {\n\n  margin-bottom: map(Select, labelBottomMargin);\n\n}\n\n.ic-0-9-2-Select__root .ic-0-9-2-Select__select {\n\n  font-family: map(Select, fontFamily);\n\n  background: map(Select, backgroundColor);\n\n  border-width: map(Select, borderWidth);\n\n  border-color: map(Select, borderColor);\n\n  border-radius: map(Select, borderRadius);\n\n  color: map(Select, textColor);\n\n}\n\n.ic-0-9-2-Select__root .ic-0-9-2-Select__select:focus {\n\n  border-color: map(Select, borderColorFocus);\n\n  outline-color: map(Select, outlineColor);\n\n}\n\n.ic-0-9-2-Select__root .ic-0-9-2-Select__select[aria-invalid] {\n\n  border-color: map(Select, borderColorError);\n\n}\n\n.ic-0-9-2-Select__root .ic-0-9-2-Select__select[aria-invalid]:focus {\n\n  border-color: map(Select, borderColorError);\n\n  outline-color: map(Select, outlineColorError);\n\n}\n\n.ic-0-9-2-Select__root .ic-0-9-2-Select__arrowDownIcon {\n\n  fill: map(Select, arrowIconColor);\n\n}\n\n.ic-0-9-2-Select__small .ic-0-9-2-Select__select {\n\n  font-size: map(Select, fontSizeSmall);\n\n  padding-left: map(Select, paddingSmall);\n\n  padding-right: calc(map(Select, paddingSmall) * 4);\n\n}\n\n.ic-0-9-2-Select__small .ic-0-9-2-Select__arrowDownIcon {\n\n  right: calc((map(Select, paddingSmall) * 2) - 0.375rem);\n\n}\n\n.ic-0-9-2-Select__medium .ic-0-9-2-Select__select {\n\n  font-size: map(Select, fontSizeMedium);\n\n  padding-left: map(Select, paddingMedium);\n\n  padding-right: calc(map(Select, paddingMedium) * 4);\n\n}\n\n.ic-0-9-2-Select__medium .ic-0-9-2-Select__arrowDownIcon {\n\n  right: calc((map(Select, paddingMedium) * 2) - 0.4375rem);\n\n}\n\n.ic-0-9-2-Select__large .ic-0-9-2-Select__select {\n\n  font-size: map(Select, fontSizeLarge);\n\n  padding-left: map(Select, paddingLarge);\n\n  padding-right: calc(map(Select, paddingLarge) * 3);\n\n}\n\n.ic-0-9-2-Select__large .ic-0-9-2-Select__arrowDownIcon {\n\n  right: calc((map(Select, paddingLarge) * 1.5) - 0.5rem);\n\n}\n\n.ic-0-9-2-Select__errors {\n  color: map(Select, errorMsgColor);\n  font-size: map(Select, fontSizeErrorMsgs);\n}\n\n.ic-0-9-2-Select__errorMsg {\n  margin-top: map(Select, errorMsgTopMargin);\n}\n"

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TabPanel = exports.Tab = exports.default = undefined;

	var _defineProperty2 = __webpack_require__(95);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class, _class2, _temp;

	var _Tab = __webpack_require__(270);

	Object.defineProperty(exports, 'Tab', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Tab).default;
	  }
	});

	var _TabPanel = __webpack_require__(276);

	Object.defineProperty(exports, 'TabPanel', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TabPanel).default;
	  }
	});

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(97);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _shortid = __webpack_require__(114);

	var _shortid2 = _interopRequireDefault(_shortid);

	var _themeable = __webpack_require__(98);

	var _themeable2 = _interopRequireDefault(_themeable);

	var _keycode = __webpack_require__(138);

	var _keycode2 = _interopRequireDefault(_keycode);

	var _CustomPropTypes = __webpack_require__(151);

	var _CustomPropTypes2 = _interopRequireDefault(_CustomPropTypes);

	var _Tab2 = _interopRequireDefault(_Tab);

	var _TabPanel2 = _interopRequireDefault(_TabPanel);

	var _TabList = __webpack_require__(290);

	var _TabList2 = _interopRequireDefault(_TabList);

	var _TabList3 = __webpack_require__(291);

	var _TabList4 = _interopRequireDefault(_TabList3);

	var _TabList5 = __webpack_require__(292);

	var _TabList6 = _interopRequireDefault(_TabList5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**

	  Accessible tabbed content component. You can use the TAB key to focus the component and
	  arrow keys to navigate between panels of content. The default display is `simple` tabs:

	  ```jsx_example
	  <TabList defaultSelectedIndex={2}>
	    <TabPanel title="First Tab">
	      Hello World
	    </TabPanel>
	    <TabPanel title="Disabled Tab" disabled>
	      {lorem.paragraphs()}
	    </TabPanel>
	    <TabPanel title="Third Tab">
	      {lorem.paragraphs()}
	    </TabPanel>
	    <TabPanel title="Fourth Tab">
	      {lorem.paragraphs()}
	    </TabPanel>
	  </TabList>
	  ```

	  Minimal style tabs

	  ```jsx_example
	  <TabList style="minimal">
	    <TabPanel title="First Tab">
	      {lorem.paragraphs()}
	    </TabPanel>
	    <TabPanel title="Disabled Tab" disabled>
	      {lorem.paragraphs()}
	    </TabPanel>
	    <TabPanel title="Third Tab">
	      {lorem.paragraphs()}
	    </TabPanel>
	    <TabPanel title="Fourth Tab">
	      {lorem.paragraphs()}
	    </TabPanel>
	  </TabList>
	  ```

	  The TabList can also display `accordion` style. This can be useful to make a component responsive to
	  the width of its container (e.g., display as tabs when there is space, but then switch to accordion when
	  the container is too small for all of the tabs to fit).

	  ```jsx_example
	  <TabList defaultSelectedIndex={2} style="accordion">
	    <TabPanel title="First Tab">
	      Hello World
	    </TabPanel>
	    <TabPanel title="Disabled Tab" disabled>
	      {lorem.paragraphs()}
	    </TabPanel>
	    <TabPanel title="Third Tab">
	      {lorem.paragraphs()}
	    </TabPanel>
	    <TabPanel title="Fourth Tab">
	      {lorem.paragraphs()}
	    </TabPanel>
	  </TabList>
	  ```
	**/

	var TabList = (_dec = (0, _themeable2.default)(_TabList4.default, _TabList6.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  (0, _inherits3.default)(TabList, _Component);

	  function TabList(props) {
	    (0, _classCallCheck3.default)(this, TabList);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TabList).call(this));

	    _this.handleClick = function (tabIndex, e) {
	      var tab = _this.getTab(tabIndex);

	      if (!tab.props.disabled) {
	        _this.setSelected(tabIndex);
	      }
	    };

	    _this.handleEnter = function (tabIndex, e) {
	      if (e.keyCode !== _keycode2.default.codes.enter && e.keyCode !== _keycode2.default.codes.return) {
	        return;
	      }

	      var tab = _this.getTab(tabIndex);

	      if (!tab.props.disabled) {
	        _this.setSelected(tabIndex);
	      }
	    };

	    _this.handleKeyDown = function (tabIndex, e) {
	      var index = _this.selectedIndex;
	      var preventDefault = false;

	      if (e.keyCode === _keycode2.default.codes.up || e.keyCode === _keycode2.default.codes.left) {
	        // Select next tab to the left
	        index = _this.getIndex(index, -1);
	        preventDefault = true;
	      } else if (e.keyCode === _keycode2.default.codes.down || e.keyCode === _keycode2.default.codes.right) {
	        // Select next tab to the right
	        index = _this.getIndex(index, 1);
	        preventDefault = true;
	      }

	      if (preventDefault) {
	        e.preventDefault();
	      }

	      _this.setSelected(index);
	    };

	    _this.state = {
	      focus: props.focus
	    };

	    if (props.selectedIndex === undefined) {
	      _this.state.selectedIndex = props.defaultSelectedIndex;
	    }
	    return _this;
	  }

	  (0, _createClass3.default)(TabList, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.focus !== this.props.focus) {
	        this.setState({ focus: nextProps.focus });
	      }
	    }
	  }, {
	    key: 'setSelected',
	    value: function setSelected(index) {
	      // Don't do anything if nothing has changed
	      if (index === this.selectedIndex) return;

	      // Check index boundary
	      if (!this.isValidIndex(index)) {
	        throw new Error('Invalid tab index: ' + index);
	      }

	      // Keep reference to last index for event handler
	      var last = this.selectedIndex;

	      // Update selected index
	      if (this.props.selectedIndex === undefined) {
	        this.setState({ selectedIndex: index, focus: true });
	      }

	      // Call change event handler
	      if (typeof this.props.onChange === 'function') {
	        this.props.onChange(index, last);
	      }
	    }
	  }, {
	    key: 'getIndex',
	    value: function getIndex(startIndex, step) {
	      var count = this.tabs.length;
	      var change = step < 0 ? step + count : step;

	      if (!this.isValidIndex(startIndex)) {
	        throw new Error('Invalid tab index: ' + startIndex);
	      }

	      var index = startIndex;
	      do {
	        index = (index + change) % count;
	      } while (this.getTab(index).props.disabled);

	      return index;
	    }
	  }, {
	    key: 'isValidIndex',
	    value: function isValidIndex(index) {
	      return index >= 0 && index < this.tabs.length;
	    }
	  }, {
	    key: 'getTab',
	    value: function getTab(index) {
	      return this.refs['tab-' + index];
	    }
	  }, {
	    key: 'createScreenReaderTab',
	    value: function createScreenReaderTab(index, id, props) {
	      return (0, _react.createElement)(_Tab2.default, {
	        style: 'screenreader-only',
	        ref: 'sr-tab-' + index,
	        key: 'sr-tab-' + index,
	        id: 'sr-tab-' + id,
	        controls: 'panel-' + id,
	        index: index,
	        selected: false,
	        disabled: props.disabled,
	        children: props.title,
	        onKeyDown: this.handleEnter,
	        onClick: this.handleClick
	      });
	    }
	  }, {
	    key: 'createTab',
	    value: function createTab(index, id, selected, props) {
	      var focus = selected && this.state.focus;

	      return (0, _react.createElement)(_Tab2.default, {
	        style: this.props.style,
	        ref: 'tab-' + index,
	        key: 'tab-' + id,
	        id: 'tab-' + id,
	        controls: 'panel-' + id,
	        index: index,
	        selected: selected,
	        focus: focus,
	        role: selected ? 'tab' : 'presentation', // only the selected tab should be visible to screen readers
	        disabled: props.disabled,
	        children: props.title,
	        onClick: this.handleClick,
	        onKeyDown: this.handleKeyDown
	      });
	    }
	  }, {
	    key: 'clonePanel',
	    value: function clonePanel(index, id, selected, panel) {
	      return (0, _react.cloneElement)(panel, {
	        ref: 'panel-' + index,
	        id: 'panel-' + id,
	        labelledBy: 'tab-' + id,
	        key: 'panel-' + index,
	        selected: selected,
	        style: this.props.style
	      });
	    }
	  }, {
	    key: 'renderChildren',
	    value: function renderChildren() {
	      var _this2 = this;

	      var children = [];
	      var ids = this.tabIds;
	      var tabs = this.tabs;
	      var count = tabs.length;

	      _react2.default.Children.forEach(this.props.children, function (child, index) {
	        if (child.type === _TabPanel2.default) {
	          var selected = !child.props.disabled && _this2.selectedIndex === index;
	          var id = ids[index];

	          // render screen reader only tabs before the selected tab
	          if (selected) {
	            for (var i = 0; i < index; i++) {
	              children.push(_this2.createScreenReaderTab(i, ids[i], tabs[i].props));
	            }
	          }

	          children.push(_this2.createTab(index, id, selected, child.props));

	          // render screen reader only tabs after the selected tab
	          if (selected) {
	            for (var _i = index + 1; _i < count; _i++) {
	              children.push(_this2.createScreenReaderTab(_i, ids[_i], tabs[_i].props));
	            }
	          }

	          children.push(_this2.clonePanel(index, id, selected, child));
	        } else {
	          children.push(child);
	        }
	      });

	      if (this.state.focus) {
	        // This fixes an issue with focus management.
	        //
	        // Ultimately, when focus is true, and an input has focus,
	        // and any change on that input causes a state change/re-render,
	        // focus gets sent back to the active tab, and input loses focus.
	        //
	        // Since the focus state only needs to be remembered
	        // for the current render, we can reset it once the
	        // render has happened.
	        //
	        // Don't use setState, because we don't want to re-render.
	        this.state.focus = false;
	      }

	      return children;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classes;

	      var classes = (_classes = {}, (0, _defineProperty3.default)(_classes, _TabList2.default.root, true), (0, _defineProperty3.default)(_classes, _TabList2.default[this.props.style], true), _classes);

	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(classes), role: 'tablist' },
	        this.renderChildren()
	      );
	    }
	  }, {
	    key: 'selectedIndex',
	    get: function get() {
	      return this.props.selectedIndex === undefined ? this.state.selectedIndex : this.props.selectedIndex;
	    }
	  }, {
	    key: 'tabIds',
	    get: function get() {
	      // cache tab ids for better performance and to prevent errors with animations
	      var ids = this._tabIds || [];
	      var diff = ids.length - this.tabs.length;

	      while (diff++ < 0) {
	        ids.push(_shortid2.default.generate());
	      }

	      this._tabIds = ids;

	      return ids;
	    }
	  }, {
	    key: 'tabs',
	    get: function get() {
	      return _react2.default.Children.toArray(this.props.children).map(function (child) {
	        return child.type === _TabPanel2.default && child;
	      });
	    }
	  }]);
	  return TabList;
	}(_react.Component), _class2.propTypes = {
	  /**
	  * children of type `TabPanel`
	  */
	  children: _CustomPropTypes2.default.validChildren([_TabPanel2.default]),
	  style: _react.PropTypes.oneOf(['simple', 'accordion', 'minimal']),
	  /**
	  * the index (zero based) of the panel that should be selected on initial render
	  */
	  defaultSelectedIndex: _react.PropTypes.number,
	  /**
	  * the index (zero based) of the panel that should be selected (should be accompanied by `onChange`)
	  */
	  selectedIndex: _CustomPropTypes2.default.controllable(_react.PropTypes.number, 'onChange', 'defaultSelectedIndex'),
	  /**
	  * Call this function when the selected tab changes. When used with `selectedIndex`,
	  * the component will not control its own state.
	  */
	  onChange: _react.PropTypes.func,
	  /**
	  * the selected tab should be focused
	  */
	  focus: _react.PropTypes.bool
	}, _class2.defaultProps = {
	  style: 'simple',
	  focus: false,
	  defaultSelectedIndex: 0
	}, _temp)) || _class);
	exports.default = TabList;

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _defineProperty2 = __webpack_require__(95);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class, _class2, _temp2;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(124);

	var _classnames = __webpack_require__(97);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _themeable = __webpack_require__(98);

	var _themeable2 = _interopRequireDefault(_themeable);

	var _Tab = __webpack_require__(271);

	var _Tab2 = _interopRequireDefault(_Tab);

	var _Tab3 = __webpack_require__(272);

	var _Tab4 = _interopRequireDefault(_Tab3);

	var _Tab5 = __webpack_require__(273);

	var _Tab6 = _interopRequireDefault(_Tab5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Tab = (_dec = (0, _themeable2.default)(_Tab4.default, _Tab6.default), _dec(_class = (_temp2 = _class2 = function (_Component) {
	  (0, _inherits3.default)(Tab, _Component);

	  function Tab() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, Tab);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Tab)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClick = function (e) {
	      if (_this.props.disabled) {
	        return;
	      }

	      _this.props.onClick(_this.props.index, e);
	    }, _this.handleKeyDown = function (e) {
	      if (_this.props.disabled) {
	        return;
	      }

	      _this.props.onKeyDown(_this.props.index, e);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(Tab, [{
	    key: 'syncNodeAttributes',
	    value: function syncNodeAttributes(node, props) {
	      if (props.selected) {
	        node.setAttribute('tabindex', 0);
	        if (props.focus) {
	          node.focus();
	        }
	      } else if (!props.disabled) {
	        node.setAttribute('tabindex', -1);
	      } else {
	        node.removeAttribute('tabindex');
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.syncNodeAttributes((0, _reactDom.findDOMNode)(this), this.props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.syncNodeAttributes((0, _reactDom.findDOMNode)(this), this.props);
	    }
	  }, {
	    key: 'renderIcon',
	    value: function renderIcon() {
	      return _react2.default.createElement('span', { className: _Tab2.default.icon, 'aria-hidden': 'true', 'aria-label': '' });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classes;

	      var classes = (_classes = {}, (0, _defineProperty3.default)(_classes, _Tab2.default.root, true), (0, _defineProperty3.default)(_classes, _Tab2.default[this.props.style], true), _classes);
	      var icon = this.props.style !== 'screenreader-only' && this.renderIcon();
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(classes),
	          role: this.props.role,
	          id: this.props.id,
	          onClick: this.handleClick,
	          onKeyDown: this.handleKeyDown,
	          'aria-selected': this.props.selected ? 'true' : null,
	          'aria-disabled': this.props.disabled ? 'true' : null,
	          'aria-hidden': this.props.role === 'presentation' ? 'true' : null,
	          'aria-controls': this.props.controls },
	        icon,
	        this.props.children
	      );
	    }
	  }]);
	  return Tab;
	}(_react.Component), _class2.propTypes = {
	  style: _react.PropTypes.oneOf(['simple', 'accordion', 'minimal', 'screenreader-only']),
	  id: _react.PropTypes.string.isRequired,
	  index: _react.PropTypes.number.isRequired,
	  controls: _react.PropTypes.string.isRequired,
	  disabled: _react.PropTypes.bool,
	  selected: _react.PropTypes.bool,
	  focus: _react.PropTypes.bool,
	  onClick: _react.PropTypes.func,
	  onKeyDown: _react.PropTypes.func,
	  role: _react.PropTypes.string,
	  children: _react.PropTypes.node
	}, _class2.defaultProps = {
	  style: 'simple',
	  disabled: false,
	  selected: false,
	  focus: false,
	  role: 'tab',
	  onClick: function onClick() {},
	  onKeyDown: function onKeyDown() {}
	}, _temp2)) || _class);
	exports.default = Tab;

/***/ },
/* 271 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-Tab__root","minimal":"ic-0-9-2-Tab__minimal","simple":"ic-0-9-2-Tab__simple","accordion":"ic-0-9-2-Tab__accordion","icon":"ic-0-9-2-Tab__icon","screenreader-only":"ic-0-9-2-Tab__screenreader-only"};

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var colors = _ref.colors;
	  var typography = _ref.typography;
	  var spacing = _ref.spacing;

	  return {
	    fontSize: typography.fontSizeSmall,
	    fontFamily: typography.fontFamilyBase,
	    spacingExtraSmall: spacing.spacingExtraSmall,
	    spacingSmall: spacing.spacingSmall,

	    simpleTextColor: colors.colorBrand,
	    simpleTextDecoration: 'none',
	    simpleTextDecorationFocused: 'underline',
	    simpleBackgroundColorSelected: colors.colorBackground,
	    simpleBorderColorSelected: colors.colorNeutralMedium,
	    simpleTextColorSelected: colors.colorText,

	    minimalTextColor: colors.colorText,
	    minimalTextDecoration: 'none',
	    minimalBorderColorHover: colors.colorNeutralAccent,
	    minimalBorderColorSelected: colors.colorBrandAccent,
	    minimalTextDecorationFocused: 'underline',

	    accordionTextColor: colors.colorText,
	    accordionBackgroundColor: colors.colorNeutralInverse,
	    accordionBorderColor: darken(colors.colorNeutralInverse, 0.2),
	    accordionBackgroundColorHover: darken(colors.colorNeutralInverse, 0.1),
	    accordionBorderColorSelected: colors.colorNeutral,
	    accordionTextColorSelected: colors.colorTextInverse,
	    accordionBackgroundColorSelected: colors.colorNeutral,
	    accordionBorderColorFocused: colors.colorFocusInverse
	  };
	};

	var _color = __webpack_require__(141);

	var _color2 = _interopRequireDefault(_color);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function darken(color, percent) {
	  return (0, _color2.default)(color).darken(percent).hexString();
	}

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(274);
	module.exports = __webpack_require__(275);

/***/ },
/* 274 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-Tab__root","simple":"ic-0-9-2-Tab__simple","minimal":"ic-0-9-2-Tab__minimal","accordion":"ic-0-9-2-Tab__accordion"};

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	if (false) {
	  module.hot.accept([]);
	}
	module.exports = ".ic-0-9-2-Tab__root {\n  font-size: map(Tab, fontSize);\n  font-family: map(Tab, fontFamily);\n}\n\n.ic-0-9-2-Tab__simple {\n  color: map(Tab, simpleTextColor);\n  text-decoration: map(Tab, simpleTextDecoration);\n\n}\n\n.ic-0-9-2-Tab__simple:not([aria-selected]):not([aria-disabled]):hover,\n  .ic-0-9-2-Tab__simple[aria-selected] {\n  background-color: map(Tab, simpleBackgroundColorSelected);\n  border-color: map(Tab, simpleBorderColorSelected);\n}\n\n.ic-0-9-2-Tab__simple:hover,\n  .ic-0-9-2-Tab__simple[aria-selected],\n  .ic-0-9-2-Tab__simple[aria-disabled] {\n  color: map(Tab, simpleTextColorSelected);\n}\n\n.ic-0-9-2-Tab__simple[aria-selected] {\n  border-bottom-color: map(Tab, simpleBackgroundColorSelected);\n}\n\n.ic-0-9-2-Tab__simple:focus {\n  text-decoration: map(Tab, simpleTextDecorationFocused);\n}\n\n.ic-0-9-2-Tab__minimal {\n  color: map(Tab, minimalTextColor);\n  text-decoration: map(Tab, minimalTextDecoration);\n}\n\n.ic-0-9-2-Tab__minimal:not([aria-selected]):not([aria-disabled]):hover {\n  border-bottom-color: map(Tab, minimalBorderColorHover);\n}\n\n.ic-0-9-2-Tab__minimal[aria-selected]::after {\n  background-color: map(Tab, minimalBorderColorSelected);\n}\n\n.ic-0-9-2-Tab__minimal:focus {\n  text-decoration: map(Tab, minimalTextDecorationFocused);\n}\n\n.ic-0-9-2-Tab__accordion {\n  color: map(Tab, accordionTextColor);\n  background-color: map(Tab, accordionBackgroundColor);\n  border-color: map(Tab, accordionBorderColor);\n\n  padding-top: map(Tab, spacingExtraSmall);\n  padding-bottom: map(Tab, spacingExtraSmall);\n  padding-right: map(Tab, spacingSmall);\n  padding-left: map(Tab, spacingSmall);\n}\n\n.ic-0-9-2-Tab__accordion:not([aria-selected]):not([aria-disabled]):hover {\n  background-color: map(Tab, accordionBackgroundColorHover);\n}\n\n.ic-0-9-2-Tab__accordion[aria-selected] {\n  border-color: map(Tab, accordionBorderColorSelected);\n  color: map(Tab, accordionTextColorSelected);\n  background-color: map(Tab, accordionBackgroundColorSelected);\n}\n\n.ic-0-9-2-Tab__accordion:focus {\n  box-shadow: inset 0 0 0 1px map(Tab, accordionBorderColorFocused);\n}\n"

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _defineProperty2 = __webpack_require__(95);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _Transition = __webpack_require__(277);

	var _Transition2 = _interopRequireDefault(_Transition);

	var _classnames = __webpack_require__(97);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _themeable = __webpack_require__(98);

	var _themeable2 = _interopRequireDefault(_themeable);

	var _TabPanel = __webpack_require__(285);

	var _TabPanel2 = _interopRequireDefault(_TabPanel);

	var _TabPanel3 = __webpack_require__(286);

	var _TabPanel4 = _interopRequireDefault(_TabPanel3);

	var _TabPanel5 = __webpack_require__(287);

	var _TabPanel6 = _interopRequireDefault(_TabPanel5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TabPanel = (_dec = (0, _themeable2.default)(_TabPanel4.default, _TabPanel6.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  (0, _inherits3.default)(TabPanel, _Component);

	  function TabPanel() {
	    (0, _classCallCheck3.default)(this, TabPanel);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TabPanel).apply(this, arguments));
	  }

	  (0, _createClass3.default)(TabPanel, [{
	    key: 'getTransitionType',
	    value: function getTransitionType() {
	      if (this.props.style === 'accordion') {
	        return 'slide-down';
	      } else {
	        return 'fade';
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classes;

	      var classes = (_classes = {}, (0, _defineProperty3.default)(_classes, _TabPanel2.default.root, true), (0, _defineProperty3.default)(_classes, _TabPanel2.default[this.props.style], true), _classes);
	      var isHidden = !this.props.selected || this.props.disabled;

	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(classes),
	          role: 'tabpanel',
	          id: this.props.id,
	          'aria-labelledby': this.props.labelledBy,
	          'aria-hidden': isHidden ? 'true' : null },
	        _react2.default.createElement(
	          _Transition2.default,
	          {
	            type: this.props.style === 'accordion' ? 'slide-down' : 'fade',
	            'in': !isHidden,
	            transitionExit: false,
	            unmountOnExit: true },
	          _react2.default.createElement(
	            'div',
	            { className: _TabPanel2.default.content },
	            this.props.children
	          )
	        )
	      );
	    }
	  }]);
	  return TabPanel;
	}(_react.Component), _class2.propTypes = {
	  title: _react.PropTypes.node.isRequired,
	  children: _react.PropTypes.node,
	  style: _react.PropTypes.oneOf(['simple', 'accordion', 'minimal']),
	  id: _react.PropTypes.string,
	  labelledBy: _react.PropTypes.string,
	  selected: _react.PropTypes.bool,
	  disabled: _react.PropTypes.bool
	}, _class2.defaultProps = {
	  id: null,
	  style: 'simple',
	  labelledBy: null,
	  selected: false,
	  onNextTabClick: function onNextTabClick() {}
	}, _temp)) || _class);
	exports.default = TabPanel;

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(99);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	exports.makeTransitionClass = makeTransitionClass;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _BaseTransition = __webpack_require__(278);

	var _BaseTransition2 = _interopRequireDefault(_BaseTransition);

	var _Transition = __webpack_require__(284);

	var _Transition2 = _interopRequireDefault(_Transition);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**

	The `Transition` component

	```jsx_example
	<Transition transitionAppear in>
	  <Heading>I Fade in</Heading>
	</Transition>
	```

	```jsx_example
	<Transition type="slide-down" transitionAppear in>
	  <Avatar userName="Collapsing User" />
	</Transition>
	```
	**/
	var Transition = (_temp = _class = function (_Component) {
	  (0, _inherits3.default)(Transition, _Component);

	  function Transition() {
	    (0, _classCallCheck3.default)(this, Transition);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Transition).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Transition, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var type = _props.type;
	      var children = _props.children;
	      var props = (0, _objectWithoutProperties3.default)(_props, ['type', 'children']);


	      return _react2.default.createElement(
	        _BaseTransition2.default,
	        (0, _extends3.default)({}, props, {
	          enterDelay: 300,
	          exitDelay: 0,
	          transitionClassName: _Transition2.default[type],
	          exitedClassName: _Transition2.default[type + '--exited'],
	          exitingClassName: _Transition2.default[type + '--exiting'],
	          enteredClassName: _Transition2.default[type + '--entered'],
	          enteringClassName: _Transition2.default[type + '--entering'] }),
	        children
	      );
	    }
	  }]);
	  return Transition;
	}(_react.Component), _class.propTypes = {
	  type: _react.PropTypes.oneOf(['fade', 'slide-down', 'slide-up', 'slide-left', 'slide-right']),
	  /**
	   * A single element to animate in and out
	   */
	  children: _react.PropTypes.element,
	  /**
	   * Show the component; triggers the enter or exit animation
	   */
	  in: _react.PropTypes.bool,
	  /**
	   * Unmount the component (remove it from the DOM) when it is not shown
	   */
	  unmountOnExit: _react.PropTypes.bool,
	  /**
	   * Run the enter animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _react.PropTypes.bool,
	  /**
	   * Run the enter animation
	   */
	  transitionEnter: _react.PropTypes.bool,
	  /**
	   * Run the exit animation
	   */
	  transitionExit: _react.PropTypes.bool,
	  /**
	   * Callback fired before the "entering" classes are applied
	   */
	  onEnter: _react.PropTypes.func,
	  /**
	   * Callback fired after the "entering" classes are applied
	   */
	  onEntering: _react.PropTypes.func,
	  /**
	   * Callback fired after the "enter" classes are applied
	   */
	  onEntered: _react.PropTypes.func,
	  /**
	   * Callback fired before the "exiting" classes are applied
	   */
	  onExit: _react.PropTypes.func,
	  /**
	   * Callback fired after the "exiting" classes are applied
	   */
	  onExiting: _react.PropTypes.func,
	  /**
	   * Callback fired after the "exited" classes are applied
	   */
	  onExited: _react.PropTypes.func
	}, _class.defaultProps = {
	  type: 'fade',
	  in: false,
	  unmountOnExit: false,
	  transitionAppear: false,
	  transitionEnter: true,
	  transitionExit: true,

	  onEnter: function onEnter() {},
	  onEntering: function onEntering() {},
	  onEntered: function onEntered() {},
	  onExit: function onExit() {},
	  onExiting: function onExiting() {},
	  onExited: function onExited() {}
	}, _temp);
	exports.default = Transition;
	function makeTransitionClass(type) {
	  var _class2, _temp2;

	  return _temp2 = _class2 = function (_Component2) {
	    (0, _inherits3.default)(TransitionClass, _Component2);

	    function TransitionClass() {
	      (0, _classCallCheck3.default)(this, TransitionClass);
	      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TransitionClass).apply(this, arguments));
	    }

	    (0, _createClass3.default)(TransitionClass, [{
	      key: 'render',
	      value: function render() {
	        var _props2 = this.props;
	        var children = _props2.children;
	        var props = (0, _objectWithoutProperties3.default)(_props2, ['children']);


	        return _react2.default.createElement(
	          Transition,
	          (0, _extends3.default)({}, props, { type: type }),
	          children
	        );
	      }
	    }]);
	    return TransitionClass;
	  }(_react.Component), _class2.propTypes = {
	    children: _react.PropTypes.node
	  }, _temp2;
	}

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(124);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _properties = __webpack_require__(279);

	var _properties2 = _interopRequireDefault(_properties);

	var _class2 = __webpack_require__(280);

	var _class3 = _interopRequireDefault(_class2);

	var _addEventListener = __webpack_require__(251);

	var _addEventListener2 = _interopRequireDefault(_addEventListener);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var UNMOUNTED = exports.UNMOUNTED = 0;
	var EXITED = exports.EXITED = 1;
	var ENTERING = exports.ENTERING = 2;
	var ENTERED = exports.ENTERED = 3;
	var EXITING = exports.EXITING = 4;

	var addEndEventListener = function addEndEventListener(node, handler) {
	  return (0, _addEventListener2.default)(node, _properties2.default.end, handler);
	};

	var addClass = _class3.default.addClass;
	var removeClass = _class3.default.removeClass;
	/**
	  Note: this is forked from https://github.com/react-bootstrap/react-overlays/blob/master/src/Transition.js
	  so that it works with css modules. The internals are pretty different now, but it has roughly the same api.
	**/

	var Transition = (_temp = _class = function (_React$Component) {
	  (0, _inherits3.default)(Transition, _React$Component);

	  function Transition(props, context) {
	    (0, _classCallCheck3.default)(this, Transition);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Transition).call(this, props, context));

	    _this._transitionClassName = null;

	    _this.state = {
	      shouldUnmount: !props.in && props.unmountOnExit
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(Transition, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.in) {
	        if (this.props.transitionAppear) {
	          this.setTransitionClassName(EXITED);
	        }
	        this.performEnter();
	      } else if (!this.props.unmountOnExit) {
	        this.setTransitionClassName(EXITED);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.in !== prevProps.in) {
	        this.cancelTimeouts();
	        if (this.props.in) {
	          this.performEnter();
	        } else {
	          this.performExit();
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.cancelTimeouts();
	    }
	  }, {
	    key: 'cancelTimeouts',
	    value: function cancelTimeouts() {
	      clearTimeout(this._transitionTimeout);
	    }
	  }, {
	    key: 'performEnter',
	    value: function performEnter() {
	      var _this2 = this;

	      var node = _reactDom2.default.findDOMNode(this);
	      var props = this.props;


	      if (!props.transitionEnter) {
	        return false;
	      }

	      props.onEnter(node);

	      this.setTransitionClassName(ENTERING);
	      props.onEntering(node);

	      this.handleTransitionEnd(node, function () {
	        _this2.setTransitionClassName(ENTERED);
	        props.onEntered();
	      }, this.props.enterDelay);
	    }
	  }, {
	    key: 'performExit',
	    value: function performExit() {
	      var _this3 = this;

	      var node = _reactDom2.default.findDOMNode(this);
	      var props = this.props;


	      if (!props.transitionExit) {
	        return false;
	      }

	      props.onExit(node);

	      this.setTransitionClassName(EXITING);
	      props.onExiting(node);

	      this.handleTransitionEnd(node, function () {
	        if (props.unmountOnExit) {
	          _this3.setState({
	            shouldUnmount: true
	          });
	        } else {
	          _this3.setTransitionClassName(EXITED);
	        }
	        props.onExited();
	      }, this.props.exitDelay);
	    }
	  }, {
	    key: 'handleTransitionEnd',
	    value: function handleTransitionEnd(node, handler, timeout) {
	      if (node) {
	        addEndEventListener(node, handler);
	        this._transitionTimeout = setTimeout(handler, timeout);
	      } else {
	        setTimeout(handler, 0);
	      }
	    }
	  }, {
	    key: 'clearTransitionClassName',
	    value: function clearTransitionClassName() {
	      var node = _reactDom2.default.findDOMNode(this);
	      var transitionClassName = this._transitionClassName;

	      if (transitionClassName) {
	        this.__transitionClassName = null;
	        removeClass(node, transitionClassName);
	      }
	    }
	  }, {
	    key: 'setTransitionClassName',
	    value: function setTransitionClassName(status) {
	      var node = _reactDom2.default.findDOMNode(this);
	      var transitionClassName = this.getTransitionClassName(status);
	      var prevTransitionClassName = this._transitionClassName;

	      this._transitionClassName = transitionClassName;

	      addClass(node, this.props.transitionClassName);

	      if (node) {
	        if (prevTransitionClassName) {
	          removeClass(node, prevTransitionClassName);
	        }

	        if (transitionClassName) {
	          addClass(node, transitionClassName);
	        }
	      }
	    }
	  }, {
	    key: 'getTransitionClassName',
	    value: function getTransitionClassName(status) {
	      var props = this.props;


	      switch (status) {
	        case EXITED:
	          return props.exitedClassName;
	        case ENTERING:
	          return props.enteringClassName;
	        case ENTERED:
	          return props.enteredClassName;
	        case EXITING:
	          return props.exitingClassName;
	        default:
	          return null;
	      }
	    }
	  }, {
	    key: 'updateTransitionClassName',
	    value: function updateTransitionClassName() {
	      var node = _reactDom2.default.findDOMNode(this);

	      if (!node) {
	        return;
	      }

	      if (this.__transitionClassName) {
	        removeClass(node, this.__transitionClassName);
	      }

	      var currentClassName = this.getTransitionClassName();

	      if (currentClassName) {
	        addClass(node, currentClassName);
	        this._transitionClassName = currentClassName;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var child = _react.Children.only(this.props.children);

	      if (this.state.shouldUnmount) {
	        this.state.shouldUnmount = false; // don't triggger a re-render
	      }

	      return !this.state.shouldUnmount ? child : null;
	    }
	  }]);
	  return Transition;
	}(_react2.default.Component), _class.propTypes = {
	  /**
	   * Show the component? Triggers the enter or exit animation.
	   */
	  in: _react.PropTypes.bool,

	  /**
	   * Unmount the component (remove it from the DOM) when it is not shown.
	   */
	  unmountOnExit: _react.PropTypes.bool,

	  /**
	   * Run the enter animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _react.PropTypes.bool,
	  /**
	   * Run the enter animation
	   */
	  transitionEnter: _react.PropTypes.bool,
	  /**
	   * Run the exit animation
	   */
	  transitionExit: _react.PropTypes.bool,

	  /**
	   * A Timeout for the animation, in milliseconds, to ensure that a node doesn't
	   * transition indefinately if the browser transitionEnd events are
	   * canceled or interrupted.
	   *
	   * By default this is set to a high number (5 seconds) as a failsafe. You should consider
	   * setting this to the duration of your animation (or a bit above it).
	   */
	  enterDelay: _react.PropTypes.number,

	  /**
	   * A Timeout for the animation, in milliseconds, to ensure that a node doesn't
	   * transition indefinately if the browser transitionEnd events are
	   * canceled or interrupted.
	   *
	   * By default this is set to a high number (5 seconds) as a failsafe. You should consider
	   * setting this to the duration of your animation (or a bit above it).
	   */
	  exitDelay: _react.PropTypes.number,

	  /**
	   * CSS class or classes applied when the component is exited
	   */
	  transitionClassName: _react.PropTypes.string,

	  /**
	   * CSS class or classes applied when the component is exited
	   */
	  exitedClassName: _react.PropTypes.string,
	  /**
	   * CSS class or classes applied while the component is exiting
	   */
	  exitingClassName: _react.PropTypes.string,
	  /**
	   * CSS class or classes applied when the component is entered
	   */
	  enteredClassName: _react.PropTypes.string,
	  /**
	   * CSS class or classes applied while the component is entering
	   */
	  enteringClassName: _react.PropTypes.string,

	  /**
	   * Callback fired before the "entering" classes are applied
	   */
	  onEnter: _react.PropTypes.func,
	  /**
	   * Callback fired after the "entering" classes are applied
	   */
	  onEntering: _react.PropTypes.func,
	  /**
	   * Callback fired after the "enter" classes are applied
	   */
	  onEntered: _react.PropTypes.func,
	  /**
	   * Callback fired before the "exiting" classes are applied
	   */
	  onExit: _react.PropTypes.func,
	  /**
	   * Callback fired after the "exiting" classes are applied
	   */
	  onExiting: _react.PropTypes.func,
	  /**
	   * Callback fired after the "exited" classes are applied
	   */
	  onExited: _react.PropTypes.func,

	  children: _react.PropTypes.node,

	  className: _react.PropTypes.string
	}, _class.defaultProps = {
	  in: false,
	  component: 'div',
	  unmountOnExit: false,
	  transitionAppear: false,
	  transitionEnter: true,
	  transitionExit: true,

	  enterDelay: 5000,
	  exitDelay: 5000,

	  onEnter: function onEnter() {},
	  onEntering: function onEntering() {},
	  onEntered: function onEntered() {},

	  onExit: function onExit() {},
	  onExiting: function onExiting() {},
	  onExited: function onExited() {}
	}, _temp);
	exports.default = Transition;

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var canUseDOM = __webpack_require__(253);

	var has = Object.prototype.hasOwnProperty,
	    transform = 'transform',
	    transition = {},
	    transitionTiming,
	    transitionDuration,
	    transitionProperty,
	    transitionDelay;

	if (canUseDOM) {
	  transition = getTransitionProperties();

	  transform = transition.prefix + transform;

	  transitionProperty = transition.prefix + 'transition-property';
	  transitionDuration = transition.prefix + 'transition-duration';
	  transitionDelay = transition.prefix + 'transition-delay';
	  transitionTiming = transition.prefix + 'transition-timing-function';
	}

	module.exports = {
	  transform: transform,
	  end: transition.end,
	  property: transitionProperty,
	  timing: transitionTiming,
	  delay: transitionDelay,
	  duration: transitionDuration
	};

	function getTransitionProperties() {
	  var endEvent,
	      prefix = '',
	      transitions = {
	    O: 'otransitionend',
	    Moz: 'transitionend',
	    Webkit: 'webkitTransitionEnd',
	    ms: 'MSTransitionEnd'
	  };

	  var element = document.createElement('div');

	  for (var vendor in transitions) if (has.call(transitions, vendor)) {
	    if (element.style[vendor + 'TransitionProperty'] !== undefined) {
	      prefix = '-' + vendor.toLowerCase() + '-';
	      endEvent = transitions[vendor];
	      break;
	    }
	  }

	  if (!endEvent && element.style.transitionProperty !== undefined) endEvent = 'transitionend';

	  return { end: endEvent, prefix: prefix };
	}

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  addClass: __webpack_require__(281),
	  removeClass: __webpack_require__(283),
	  hasClass: __webpack_require__(282)
	};

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hasClass = __webpack_require__(282);

	module.exports = function addClass(element, className) {
	  if (element.classList) element.classList.add(className);else if (!hasClass(element)) element.className = element.className + ' ' + className;
	};

/***/ },
/* 282 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function hasClass(element, className) {
	  if (element.classList) return !!className && element.classList.contains(className);else return (' ' + element.className + ' ').indexOf(' ' + className + ' ') !== -1;
	};

/***/ },
/* 283 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function removeClass(element, className) {
	  if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
	};

/***/ },
/* 284 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-Transition__root","fade":"ic-0-9-2-Transition__fade","fade--exited":"ic-0-9-2-Transition__fade--exited","fade--entering":"ic-0-9-2-Transition__fade--entering","fade--entered":"ic-0-9-2-Transition__fade--entered","fade--exiting":"ic-0-9-2-Transition__fade--exiting","slide-up":"ic-0-9-2-Transition__slide-up","slide-down":"ic-0-9-2-Transition__slide-down","slide-right":"ic-0-9-2-Transition__slide-right","slide-left":"ic-0-9-2-Transition__slide-left","slide-up--entering":"ic-0-9-2-Transition__slide-up--entering","slide-down--entering":"ic-0-9-2-Transition__slide-down--entering","slide-right--entering":"ic-0-9-2-Transition__slide-right--entering","slide-left--entering":"ic-0-9-2-Transition__slide-left--entering","animate-root":"ic-0-9-2-Transition__animate-root","slide-up--exited":"ic-0-9-2-Transition__slide-up--exited","slide-down--exited":"ic-0-9-2-Transition__slide-down--exited","slide-right--exited":"ic-0-9-2-Transition__slide-right--exited","slide-left--exited":"ic-0-9-2-Transition__slide-left--exited","slide-up--exiting":"ic-0-9-2-Transition__slide-up--exiting","slide-down--exiting":"ic-0-9-2-Transition__slide-down--exiting","slide-right--exiting":"ic-0-9-2-Transition__slide-right--exiting","slide-left--exiting":"ic-0-9-2-Transition__slide-left--exiting","slide-up--entered":"ic-0-9-2-Transition__slide-up--entered","slide-down--entered":"ic-0-9-2-Transition__slide-down--entered","slide-right--entered":"ic-0-9-2-Transition__slide-right--entered","slide-left--entered":"ic-0-9-2-Transition__slide-left--entered"};

/***/ },
/* 285 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-TabPanel__root","content":"ic-0-9-2-TabPanel__content","content--enter":"ic-0-9-2-TabPanel__content--enter","content--enter-active":"ic-0-9-2-TabPanel__content--enter-active","minimal":"ic-0-9-2-TabPanel__minimal","simple":"ic-0-9-2-TabPanel__simple","accordion":"ic-0-9-2-TabPanel__accordion"};

/***/ },
/* 286 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var colors = _ref.colors;
	  var typography = _ref.typography;

	  return {
	    fontColor: colors.colorText,
	    backgroundColor: colors.colorBackground,
	    borderColor: colors.colorNeutralMedium
	  };
	};

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(288);
	module.exports = __webpack_require__(289);

/***/ },
/* 288 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"content":"ic-0-9-2-TabPanel__content"};

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	if (false) {
	  module.hot.accept([]);
	}
	module.exports = ".ic-0-9-2-TabPanel__content {\n  background-color: map(TabPanel, backgroundColor);\n  border-color: map(TabPanel, borderColor);\n  color: map(TabPanel, fontColor);\n}\n"

/***/ },
/* 290 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-TabList__root","simple":"ic-0-9-2-TabList__simple","minimal":"ic-0-9-2-TabList__minimal"};

/***/ },
/* 291 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var colors = _ref.colors;

	  return {
	    minimalBackgroundColor: colors.colorBackground
	  };
	};

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(293);
	module.exports = __webpack_require__(294);

/***/ },
/* 293 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"minimal":"ic-0-9-2-TabList__minimal"};

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	if (false) {
	  module.hot.accept([]);
	}
	module.exports = ".ic-0-9-2-TabList__minimal {\n  background-color: map(TabList, minimalBackgroundColor);\n}\n"

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(95);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _objectWithoutProperties2 = __webpack_require__(99);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _TextInput = __webpack_require__(296);

	var _TextInput2 = _interopRequireDefault(_TextInput);

	var _CustomPropTypes = __webpack_require__(151);

	var _CustomPropTypes2 = _interopRequireDefault(_CustomPropTypes);

	var _classnames = __webpack_require__(97);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _shortid = __webpack_require__(114);

	var _shortid2 = _interopRequireDefault(_shortid);

	var _themeable = __webpack_require__(98);

	var _themeable2 = _interopRequireDefault(_themeable);

	var _TextInput3 = __webpack_require__(297);

	var _TextInput4 = _interopRequireDefault(_TextInput3);

	var _TextInput5 = __webpack_require__(298);

	var _TextInput6 = _interopRequireDefault(_TextInput5);

	var _ScreenReaderContent = __webpack_require__(260);

	var _ScreenReaderContent2 = _interopRequireDefault(_ScreenReaderContent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	  A standard text input field

	  ```jsx_example
	  <TextInput label="Name" />
	  ```

	  A text input field with errors

	  ```jsx_example
	  <TextInput errors={['Invalid name']} label="Name" />
	  ```

	  A text input field with a screenreader only label

	  ```jsx_example
	  <TextInput label={
	    <ScreenReaderContent>Age</ScreenReaderContent>
	    } placeholder="hello world"/>
	  ```

	  A password input field

	  ```jsx_example
	  <TextInput label="Password" type="password" />
	  ```

	  A text input field next to a [Button](#Button). Note: Form layout components
	  are coming soon. Please ignore the inline styles in the example.

	  ```jsx_example
	  <div>
	    <div style={{display: 'flex', alignItems: 'flex-end'}}>
	      <div>
	        <TextInput label="Default-size input and button" />
	      </div>
	      <div style={{ paddingLeft: '0.5em' }}>
	        <Button>Click me</Button>
	      </div>
	    </div>
	    <div style={{display: 'flex', alignItems: 'flex-end', marginTop: '1em'}}>
	      <div>
	        <TextInput size="small" label="Small-size input and button" />
	      </div>
	      <div style={{ paddingLeft: '0.5em' }}>
	        <Button size="small">Click me</Button>
	      </div>
	    </div>
	    <div style={{display: 'flex', alignItems: 'flex-end', marginTop: '1em'}}>
	      <div>
	        <TextInput size="large" label="Large-size input and button" />
	      </div>
	      <div style={{ paddingLeft: '0.5em' }}>
	        <Button size="large">Click me</Button>
	      </div>
	    </div>
	  </div>
	  ```
	**/
	var TextInput = (_dec = (0, _themeable2.default)(_TextInput4.default, _TextInput6.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  (0, _inherits3.default)(TextInput, _Component);

	  function TextInput(props) {
	    (0, _classCallCheck3.default)(this, TextInput);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TextInput).call(this));

	    _this.inputId = 'TextInput_' + _shortid2.default.generate();
	    _this.descriptionId = 'TextInputDescription_' + _shortid2.default.generate();
	    return _this;
	  }

	  (0, _createClass3.default)(TextInput, [{
	    key: 'renderErrors',
	    value: function renderErrors() {
	      var errors = this.props.errors;

	      if (errors) {
	        var messages = errors.map(function (msg, i) {
	          return _react2.default.createElement(
	            'li',
	            { key: 'error' + i, className: _TextInput2.default.errorMsg },
	            msg
	          );
	        });

	        return _react2.default.createElement(
	          'ul',
	          { className: _TextInput2.default.errors, id: this.errorsId },
	          messages
	        );
	      }
	    }
	  }, {
	    key: 'renderPlaceholder',
	    value: function renderPlaceholder() {
	      var placeholder = this.props.placeholder;

	      return placeholder ? _react2.default.createElement(
	        _ScreenReaderContent2.default,
	        null,
	        placeholder
	      ) : null;
	    }
	  }, {
	    key: 'renderDescription',
	    value: function renderDescription() {
	      var _props = this.props;
	      var placeholder = _props.placeholder;
	      var errors = _props.errors;


	      return errors && errors.length > 0 || placeholder ? _react2.default.createElement(
	        'div',
	        { id: this.descriptionId },
	        this.renderPlaceholder(),
	        this.renderErrors()
	      ) : null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classes;

	      var _props2 = this.props;
	      var type = _props2.type;
	      var label = _props2.label;
	      var errors = _props2.errors;
	      var size = _props2.size;
	      var props = (0, _objectWithoutProperties3.default)(_props2, ['type', 'label', 'errors', 'size']);


	      var hasErrors = errors && errors.length > 0;

	      var classes = (_classes = {}, (0, _defineProperty3.default)(_classes, _TextInput2.default.root, true), (0, _defineProperty3.default)(_classes, _TextInput2.default.disabled, props.disabled), (0, _defineProperty3.default)(_classes, _TextInput2.default.required, props.required), (0, _defineProperty3.default)(_classes, _TextInput2.default[size], size), _classes);

	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(classes) },
	        _react2.default.createElement(
	          'label',
	          {
	            htmlFor: this.inputId,
	            className: _TextInput2.default.label },
	          label
	        ),
	        _react2.default.createElement('input', (0, _extends3.default)({
	          type: type,
	          id: this.inputId,
	          'aria-describedby': hasErrors || props.placeholder ? this.descriptionId : null,
	          'aria-invalid': hasErrors ? 'true' : null,
	          className: _TextInput2.default.input
	        }, props)),
	        this.renderDescription()
	      );
	    }
	  }]);
	  return TextInput;
	}(_react.Component), _class2.propTypes = {
	  type: _react.PropTypes.oneOf(['text', 'email', 'url', 'tel', 'search', 'password']),
	  label: _react.PropTypes.node.isRequired,
	  errors: _react.PropTypes.array,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
	  /**
	  * Html placeholder text to display when the input has no value. This should be hint text, not a label
	  * replacement.
	  */
	  placeholder: _react.PropTypes.string,
	  disabled: _react.PropTypes.bool,
	  required: _react.PropTypes.bool,
	  /**
	  * value to set on initial render
	  */
	  defaultValue: _react.PropTypes.string,
	  /**
	  * the selected value (must be accompanied by an `onChange` prop)
	  */
	  value: _CustomPropTypes2.default.controllable(_react.PropTypes.string),
	  /**
	  * when used with the `value` prop, the component will not control its own state
	  */
	  onChange: _react.PropTypes.func,
	  onFocus: _react.PropTypes.func,
	  onBlur: _react.PropTypes.func
	}, _class2.defaultProps = {
	  type: 'text',
	  size: 'medium'
	}, _temp)) || _class);
	exports.default = TextInput;

/***/ },
/* 296 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-TextInput__root","input":"ic-0-9-2-TextInput__input","small":"ic-0-9-2-TextInput__small","medium":"ic-0-9-2-TextInput__medium","large":"ic-0-9-2-TextInput__large","label":"ic-0-9-2-TextInput__label","errors":"ic-0-9-2-TextInput__errors","errorMsg":"ic-0-9-2-TextInput__errorMsg","disabled":"ic-0-9-2-TextInput__disabled","required":"ic-0-9-2-TextInput__required"};

/***/ },
/* 297 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var borders = _ref.borders;
	  var colors = _ref.colors;
	  var spacing = _ref.spacing;
	  var typography = _ref.typography;

	  return {
	    fontFamily: typography.fontFamilyBase,
	    textColor: colors.colorText,
	    backgroundColor: colors.colorBackground,
	    borderColor: colors.colorNeutralMedium,
	    borderColorFocus: colors.colorFocus,
	    borderWidth: borders.borderWidthDefault,
	    borderStyle: borders.borderStyleDefault,
	    borderRadius: borders.borderRadiusMedium,
	    outlineColor: colors.colorFocusTransparent,
	    outlineColorError: colors.colorDangerTransparent,
	    placeholderTextColor: colors.colorNeutralMedium,
	    labelFontWeight: typography.fontWeightBold,
	    fontSizeSmall: typography.fontSizeExtraSmall,
	    fontSizeMedium: typography.fontSizeSmall,
	    fontSizeLarge: typography.fontSizeMedium,
	    borderColorError: colors.colorDangerAccent,
	    errorsTextColor: colors.colorDanger,
	    errorMsgTopMargin: spacing.spacingExtraSmall,
	    fontSizeErrorMsgs: typography.fontSizeSmall,
	    paddingSmall: spacing.spacingSmall,
	    paddingMedium: spacing.spacingSmall,
	    paddingLarge: spacing.spacingMedium
	  };
	};

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(299);
	module.exports = __webpack_require__(300);

/***/ },
/* 299 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-TextInput__root","input":"ic-0-9-2-TextInput__input","small":"ic-0-9-2-TextInput__small","medium":"ic-0-9-2-TextInput__medium","large":"ic-0-9-2-TextInput__large","label":"ic-0-9-2-TextInput__label","errors":"ic-0-9-2-TextInput__errors","errorMsg":"ic-0-9-2-TextInput__errorMsg"};

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	if (false) {
	  module.hot.accept([]);
	}
	module.exports = ".ic-0-9-2-TextInput__root {\n  font-family: map(TextInput, fontFamily);\n}\n\n.ic-0-9-2-TextInput__input {\n  font-family: map(TextInput, fontFamily);\n  color: map(TextInput, textColor);\n  background-color: map(TextInput, backgroundColor);\n\n  border: map(TextInput, borderWidth) map(TextInput, borderStyle) map(TextInput, borderColor);\n  border-radius: map(TextInput, borderRadius);\n}\n\n.ic-0-9-2-TextInput__input:focus {\n  border-color: map(TextInput, borderColorFocus);\n  outline-color: map(TextInput, outlineColor);\n}\n\n.ic-0-9-2-TextInput__input[aria-invalid] {\n  border-color: map(TextInput, borderColorError);\n}\n\n.ic-0-9-2-TextInput__input[aria-invalid]:focus {\n  border-color: map(TextInput, borderColorError);\n  outline-color: map(TextInput, outlineColorError);\n}\n\n.ic-0-9-2-TextInput__input::-webkit-input-placeholder {\n  color: map(TextInput, placeholderTextColor);\n}\n\n.ic-0-9-2-TextInput__input::-moz-placeholder {\n  color: map(TextInput, placeholderTextColor);\n}\n\n.ic-0-9-2-TextInput__input:-ms-input-placeholder {\n  color: map(TextInput, placeholderTextColor);\n}\n\n.ic-0-9-2-TextInput__input::placeholder {\n  color: map(TextInput, placeholderTextColor);\n}\n\n.ic-0-9-2-TextInput__small .ic-0-9-2-TextInput__input {\n  font-size: map(TextInput, fontSizeSmall);\n  padding-left: map(TextInput, paddingSmall);\n  padding-right: map(TextInput, paddingSmall);\n}\n\n.ic-0-9-2-TextInput__medium .ic-0-9-2-TextInput__input {\n  font-size: map(TextInput, fontSizeMedium);\n  padding-left: map(TextInput, paddingMedium);\n  padding-right: map(TextInput, paddingMedium);\n}\n\n.ic-0-9-2-TextInput__large .ic-0-9-2-TextInput__input {\n  font-size: map(TextInput, fontSizeLarge);\n  padding-left: map(TextInput, paddingLarge);\n  padding-right: map(TextInput, paddingLarge);\n}\n\n.ic-0-9-2-TextInput__label {\n  font-weight: map(TextInput, labelFontWeight);\n}\n\n.ic-0-9-2-TextInput__errors {\n  color: map(TextInput, errorsTextColor);\n  font-size: map(TextInput, fontSizeErrorMsgs);\n}\n\n.ic-0-9-2-TextInput__errorMsg {\n  margin-top: map(TextInput, errorMsgTopMargin);\n}\n"

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _dec2, _class, _class2, _temp;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _themeable = __webpack_require__(98);

	var _themeable2 = _interopRequireDefault(_themeable);

	var _containerQuery = __webpack_require__(302);

	var _containerQuery2 = _interopRequireDefault(_containerQuery);

	var _MetricsList = __webpack_require__(238);

	var _MetricsList2 = _interopRequireDefault(_MetricsList);

	var _Avatar = __webpack_require__(96);

	var _Avatar2 = _interopRequireDefault(_Avatar);

	var _Heading = __webpack_require__(202);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _Link = __webpack_require__(210);

	var _Link2 = _interopRequireDefault(_Link);

	var _UserCard = __webpack_require__(316);

	var _UserCard2 = _interopRequireDefault(_UserCard);

	var _UserCard3 = __webpack_require__(317);

	var _UserCard4 = _interopRequireDefault(_UserCard3);

	var _UserCard5 = __webpack_require__(318);

	var _UserCard6 = _interopRequireDefault(_UserCard5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**

	This is the UserCard in its most common format used within the [ContextBox](#ContextBox) component.
	See the [ContextBox](#ContextBox) component for prop information.

	```jsx_example
	  <ContextBox withArrow={false} withAnimation={false}>
	    <UserCard
	      userName="Jessica Jones"
	      profileData={[{
	          label: 'Section',
	          value: '2'
	        },
	        {
	          label: 'Last Login',
	          value: '2/20/12'
	      }]}
	      metricsData={[{
	       label: 'Grade',
	       value: '80%'
	     },
	     {
	        label: 'Late',
	        value: '4'
	     },
	     {
	       label: 'Missing',
	       value: '4'
	     }]}
	    />
	  </ContextBox>
	```

	When used on its own the UserCard component has no border or drop shadow.

	```jsx_example
	   <UserCard
	     userName="Blake Simkins"
	     userImgUrl={avatarImage}
	     profileUrl="example.html"
	     profileData={[{
	       label: 'Section',
	       value: '2'
	     },
	     {
	       label: 'Last Login',
	       value: '2/20/12'
	     }]}
	     metricsData={[{
	       label: 'Grade',
	       value: '80%'
	     },
	     {
	        label: 'Late',
	        value: '4'
	     },
	     {
	       label: 'Missing',
	       value: '4'
	     }]}
	   />
	```

	*/

	var UserCard = (_dec = (0, _themeable2.default)(_UserCard4.default, _UserCard6.default), _dec2 = (0, _containerQuery2.default)({ width_greater_than_avatar: { minWidth: '15.6875rem' } }), _dec(_class = _dec2(_class = (_temp = _class2 = function (_Component) {
	  (0, _inherits3.default)(UserCard, _Component);

	  function UserCard() {
	    (0, _classCallCheck3.default)(this, UserCard);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(UserCard).apply(this, arguments));
	  }

	  (0, _createClass3.default)(UserCard, [{
	    key: 'renderUserName',
	    value: function renderUserName() {
	      return this.props.profileUrl ? _react2.default.createElement(
	        _Link2.default,
	        { href: this.props.profileUrl },
	        this.props.userName
	      ) : this.props.userName;
	    }
	  }, {
	    key: 'renderProfileData',
	    value: function renderProfileData() {
	      return this.props.profileData.map(function (item, i) {
	        return _react2.default.createElement(
	          'div',
	          { className: _UserCard2.default.profileData, key: i },
	          item.label,
	          ' ',
	          item.value
	        );
	      });
	    }
	  }, {
	    key: 'renderMetricsListItems',
	    value: function renderMetricsListItems() {
	      return this.props.metricsData.map(function (item, i) {
	        return _react2.default.createElement(_MetricsList.MetricsListItem, { key: i, label: item.label, value: item.value });
	      });
	    }
	  }, {
	    key: 'renderMetricsData',
	    value: function renderMetricsData() {
	      return _react2.default.createElement(
	        _MetricsList2.default,
	        null,
	        this.renderMetricsListItems()
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _UserCard2.default.root },
	        _react2.default.createElement(
	          'div',
	          { className: _UserCard2.default.container },
	          _react2.default.createElement(
	            'div',
	            { className: _UserCard2.default.avatar },
	            _react2.default.createElement(_Avatar2.default, {
	              variant: 'rectangle',
	              userImgUrl: this.props.userImgUrl,
	              userName: this.props.userName })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _UserCard2.default.profile },
	            _react2.default.createElement(
	              _Heading2.default,
	              null,
	              this.renderUserName()
	            ),
	            this.props.profileData && this.renderProfileData(),
	            _react2.default.createElement(
	              'div',
	              { className: _UserCard2.default.metrics },
	              this.props.metricsData && this.renderMetricsData()
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return UserCard;
	}(_react.Component), _class2.propTypes = {
	  userName: _react.PropTypes.string.isRequired,
	  profileUrl: _react.PropTypes.string,
	  userImgUrl: _react.PropTypes.string,
	  profileData: _react.PropTypes.array,
	  metricsData: _react.PropTypes.array
	}, _temp)) || _class) || _class);
	exports.default = UserCard;

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keys = __webpack_require__(303);

	var _keys2 = _interopRequireDefault(_keys);

	var _slicedToArray2 = __webpack_require__(306);

	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

	var _getIterator2 = __webpack_require__(311);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(46);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(50);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _get2 = __webpack_require__(100);

	var _get3 = _interopRequireDefault(_get2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	exports.default = containerQuery;

	var _reactDom = __webpack_require__(124);

	var _shallowequal = __webpack_require__(125);

	var _shallowequal2 = _interopRequireDefault(_shallowequal);

	var _getDefaultFontSize = __webpack_require__(315);

	var _getDefaultFontSize2 = _interopRequireDefault(_getDefaultFontSize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function containerQuery(query) {
	  return function (ComposedComponent) {
	    var _class, _temp2;

	    var displayName = ComposedComponent.displayName || ComposedComponent.name;

	    return _temp2 = _class = function (_ComposedComponent) {
	      (0, _inherits3.default)(_class, _ComposedComponent);

	      function _class() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, _class);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(_class)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.updateAttributes = function () {
	          var container = (0, _reactDom.findDOMNode)(_this);
	          var selectorMap = _this._getSelectorMap(_this._size);

	          if ((0, _shallowequal2.default)(_this._containerQuerySelectorMap, selectorMap)) {
	            return;
	          }

	          _this._containerQuerySelectorMap = selectorMap;

	          var _iteratorNormalCompletion = true;
	          var _didIteratorError = false;
	          var _iteratorError = undefined;

	          try {
	            for (var _iterator = (0, _getIterator3.default)(toPairs(_this._containerQuerySelectorMap)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	              var _step$value = (0, _slicedToArray3.default)(_step.value, 2);

	              var selectorName = _step$value[0];
	              var isOn = _step$value[1];

	              if (isOn) {
	                container.setAttribute('data-' + selectorName, '');
	              } else {
	                container.removeAttribute('data-' + selectorName);
	              }
	            }
	          } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	              }
	            } finally {
	              if (_didIteratorError) {
	                throw _iteratorError;
	              }
	            }
	          }
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	      }

	      (0, _createClass3.default)(_class, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	          var _this2 = this;

	          var container = (0, _reactDom.findDOMNode)(this);

	          this._containerQuerySelectorMap = null;
	          this._getSelectorMap = parseQuery(query);
	          this._size = { width: null, height: null };
	          this._rafId = null;

	          var checkDimensions = function checkDimensions() {
	            var width = container.clientWidth;
	            var height = container.clientHeight;


	            var changed = false;

	            if (_this2._size.width !== width) {
	              changed = true;
	            }

	            _this2._size.width = width;
	            _this2._size.height = height;

	            if (changed) {
	              _this2.updateAttributes();
	            }

	            _this2._rafId = window.requestAnimationFrame(checkDimensions);
	          };

	          checkDimensions();

	          if ((0, _get3.default)((0, _getPrototypeOf2.default)(_class.prototype), 'componentDidMount', this)) {
	            (0, _get3.default)((0, _getPrototypeOf2.default)(_class.prototype), 'componentDidMount', this).call(this);
	          }
	        }
	      }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	          window.cancelAnimationFrame(this._rafId);
	          this._rafId = null;

	          if ((0, _get3.default)((0, _getPrototypeOf2.default)(_class.prototype), 'componentWillUnmount', this)) {
	            (0, _get3.default)((0, _getPrototypeOf2.default)(_class.prototype), 'componentWillUnmount', this).call(this);
	          }
	        }
	      }]);
	      return _class;
	    }(ComposedComponent), _class.displayName = displayName, _temp2;
	  };
	}

	function parseQuery(query) {
	  var rules = [];
	  var defaultFontSize = null;

	  var _iteratorNormalCompletion2 = true;
	  var _didIteratorError2 = false;
	  var _iteratorError2 = undefined;

	  try {
	    for (var _iterator2 = (0, _getIterator3.default)(toPairs(query)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	      var _step2$value = (0, _slicedToArray3.default)(_step2.value, 2);

	      var selectorName = _step2$value[0];
	      var _step2$value$ = _step2$value[1];
	      var minWidth = _step2$value$.minWidth;
	      var maxWidth = _step2$value$.maxWidth;
	      var minHeight = _step2$value$.minHeight;
	      var maxHeight = _step2$value$.maxHeight;

	      rules.push([selectorName, {
	        minWidth: px(minWidth) || 0,
	        maxWidth: px(maxWidth) || Infinity,
	        minHeight: px(minHeight) || 0,
	        maxHeight: px(maxHeight) || Infinity
	      }]);
	    }
	  } catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion2 && _iterator2.return) {
	        _iterator2.return();
	      }
	    } finally {
	      if (_didIteratorError2) {
	        throw _iteratorError2;
	      }
	    }
	  }

	  function px(val) {
	    if (!val || typeof val === 'number') {
	      return val;
	    }

	    var num = parseFloat(val);

	    if (val.indexOf('rem') > 0) {
	      // cache defaultFontSize
	      defaultFontSize = defaultFontSize || (0, _getDefaultFontSize2.default)();
	      return num * defaultFontSize;
	    } else if (val.indexOf('px') > 0) {
	      return num;
	    }
	  }

	  return function (_ref) {
	    var width = _ref.width;
	    var height = _ref.height;

	    var selectorMap = {};

	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;

	    try {
	      for (var _iterator3 = (0, _getIterator3.default)(rules), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	        var _step3$value = (0, _slicedToArray3.default)(_step3.value, 2);

	        var selectorName = _step3$value[0];
	        var _step3$value$ = _step3$value[1];
	        var minWidth = _step3$value$.minWidth;
	        var maxWidth = _step3$value$.maxWidth;
	        var minHeight = _step3$value$.minHeight;
	        var maxHeight = _step3$value$.maxHeight;

	        selectorMap[selectorName] = minWidth <= width && width <= maxWidth && minHeight <= height && height <= maxHeight;
	      }
	    } catch (err) {
	      _didIteratorError3 = true;
	      _iteratorError3 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion3 && _iterator3.return) {
	          _iterator3.return();
	        }
	      } finally {
	        if (_didIteratorError3) {
	          throw _iteratorError3;
	        }
	      }
	    }

	    return selectorMap;
	  };
	}

	function toPairs(obj) {
	  return (0, _keys2.default)(obj).map(function (key) {
	    return [key, obj[key]];
	  });
	}

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(304), __esModule: true };

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(305);
	module.exports = __webpack_require__(8).Object.keys;

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(39)
	  , $keys    = __webpack_require__(22);

	__webpack_require__(44)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _isIterable2 = __webpack_require__(307);

	var _isIterable3 = _interopRequireDefault(_isIterable2);

	var _getIterator2 = __webpack_require__(311);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(308), __esModule: true };

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(66);
	__webpack_require__(54);
	module.exports = __webpack_require__(309);

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(310)
	  , ITERATOR  = __webpack_require__(65)('iterator')
	  , Iterators = __webpack_require__(59);
	module.exports = __webpack_require__(8).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(27)
	  , TAG = __webpack_require__(65)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(312), __esModule: true };

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(66);
	__webpack_require__(54);
	module.exports = __webpack_require__(313);

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(13)
	  , get      = __webpack_require__(314);
	module.exports = __webpack_require__(8).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(310)
	  , ITERATOR  = __webpack_require__(65)('iterator')
	  , Iterators = __webpack_require__(59);
	module.exports = __webpack_require__(8).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 315 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getDefaultFontSize;
	function getDefaultFontSize() {
	  var temp = document.createElement('div');
	  temp.style.cssText = ['display: inline-block;', 'padding: 0;', 'line-height: 1;', 'position: absolute;', 'visibility: hidden;', 'font-size: 1em'].join('');
	  temp.appendChild(document.createTextNode('M'));
	  document.body.appendChild(temp);
	  var fontSize = temp.offsetHeight;
	  document.body.removeChild(temp);
	  return fontSize;
	}

/***/ },
/* 316 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-UserCard__root","profile":"ic-0-9-2-UserCard__profile","profileData":"ic-0-9-2-UserCard__profileData","metrics":"ic-0-9-2-UserCard__metrics","avatar":"ic-0-9-2-UserCard__avatar"};

/***/ },
/* 317 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var colors = _ref.colors;
	  var typography = _ref.typography;

	  return {
	    backgroundColor: colors.colorBackground,
	    textColor: colors.colorText,
	    fontFamily: typography.fontFamilyBase,
	    secondaryTextColor: colors.colorTextSecondary
	  };
	};

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(319);
	module.exports = __webpack_require__(320);

/***/ },
/* 319 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"ic-0-9-2-UserCard__root","profile":"ic-0-9-2-UserCard__profile","profileData":"ic-0-9-2-UserCard__profileData"};

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	if (false) {
	  module.hot.accept([]);
	}
	module.exports = ".ic-0-9-2-UserCard__root {\n  background-color: map(UserCard, backgroundColor);\n  font-family: map(UserCard, fontFamily);\n}\n\n.ic-0-9-2-UserCard__profile {\n  color: map(UserCard, textColor);\n}\n\n.ic-0-9-2-UserCard__profileData {\n  color: map(UserCard, secondaryTextColor);\n}\n"

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UserCard = exports.Transition = exports.TextInput = exports.TabPanel = exports.Tab = exports.TabList = exports.Select = exports.ScreenReaderContent = exports.RangeInput = exports.RadioInput = exports.RadioInputGroup = exports.MetricsListItem = exports.MetricsList = exports.MenuItemSeparator = exports.MenuItem = exports.Menu = exports.Link = exports.Image = exports.Heading = exports.GridCol = exports.GridRow = exports.Grid = exports.ContextBox = exports.CheckboxGroup = exports.Checkbox = exports.Button = exports.Avatar = exports.ApplyTheme = undefined;

	var _Grid2 = __webpack_require__(183);

	Object.defineProperty(exports, 'GridRow', {
	  enumerable: true,
	  get: function get() {
	    return _Grid2.GridRow;
	  }
	});
	Object.defineProperty(exports, 'GridCol', {
	  enumerable: true,
	  get: function get() {
	    return _Grid2.GridCol;
	  }
	});

	var _Menu2 = __webpack_require__(216);

	Object.defineProperty(exports, 'MenuItem', {
	  enumerable: true,
	  get: function get() {
	    return _Menu2.MenuItem;
	  }
	});
	Object.defineProperty(exports, 'MenuItemSeparator', {
	  enumerable: true,
	  get: function get() {
	    return _Menu2.MenuItemSeparator;
	  }
	});

	var _MetricsList2 = __webpack_require__(238);

	Object.defineProperty(exports, 'MetricsListItem', {
	  enumerable: true,
	  get: function get() {
	    return _MetricsList2.MetricsListItem;
	  }
	});

	var _RadioInputGroup2 = __webpack_require__(218);

	Object.defineProperty(exports, 'RadioInput', {
	  enumerable: true,
	  get: function get() {
	    return _RadioInputGroup2.RadioInput;
	  }
	});

	var _TabList2 = __webpack_require__(269);

	Object.defineProperty(exports, 'Tab', {
	  enumerable: true,
	  get: function get() {
	    return _TabList2.Tab;
	  }
	});
	Object.defineProperty(exports, 'TabPanel', {
	  enumerable: true,
	  get: function get() {
	    return _TabList2.TabPanel;
	  }
	});

	var _ApplyTheme2 = __webpack_require__(1);

	var _ApplyTheme3 = _interopRequireDefault(_ApplyTheme2);

	var _Avatar2 = __webpack_require__(96);

	var _Avatar3 = _interopRequireDefault(_Avatar2);

	var _Button2 = __webpack_require__(137);

	var _Button3 = _interopRequireDefault(_Button2);

	var _Checkbox2 = __webpack_require__(149);

	var _Checkbox3 = _interopRequireDefault(_Checkbox2);

	var _CheckboxGroup2 = __webpack_require__(159);

	var _CheckboxGroup3 = _interopRequireDefault(_CheckboxGroup2);

	var _ContextBox2 = __webpack_require__(167);

	var _ContextBox3 = _interopRequireDefault(_ContextBox2);

	var _Grid3 = _interopRequireDefault(_Grid2);

	var _Heading2 = __webpack_require__(202);

	var _Heading3 = _interopRequireDefault(_Heading2);

	var _Image2 = __webpack_require__(208);

	var _Image3 = _interopRequireDefault(_Image2);

	var _Link2 = __webpack_require__(210);

	var _Link3 = _interopRequireDefault(_Link2);

	var _Menu3 = _interopRequireDefault(_Menu2);

	var _MetricsList3 = _interopRequireDefault(_MetricsList2);

	var _RadioInputGroup3 = _interopRequireDefault(_RadioInputGroup2);

	var _RangeInput2 = __webpack_require__(250);

	var _RangeInput3 = _interopRequireDefault(_RangeInput2);

	var _ScreenReaderContent2 = __webpack_require__(260);

	var _ScreenReaderContent3 = _interopRequireDefault(_ScreenReaderContent2);

	var _Select2 = __webpack_require__(262);

	var _Select3 = _interopRequireDefault(_Select2);

	var _TabList3 = _interopRequireDefault(_TabList2);

	var _TextInput2 = __webpack_require__(295);

	var _TextInput3 = _interopRequireDefault(_TextInput2);

	var _Transition2 = __webpack_require__(277);

	var _Transition3 = _interopRequireDefault(_Transition2);

	var _UserCard2 = __webpack_require__(301);

	var _UserCard3 = _interopRequireDefault(_UserCard2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.ApplyTheme = _ApplyTheme3.default; /* list components in alphabetical order */

	exports.Avatar = _Avatar3.default;
	exports.Button = _Button3.default;
	exports.Checkbox = _Checkbox3.default;
	exports.CheckboxGroup = _CheckboxGroup3.default;
	exports.ContextBox = _ContextBox3.default;
	exports.Grid = _Grid3.default;
	exports.Heading = _Heading3.default;
	exports.Image = _Image3.default;
	exports.Link = _Link3.default;
	exports.Menu = _Menu3.default;
	exports.MetricsList = _MetricsList3.default;
	exports.RadioInputGroup = _RadioInputGroup3.default;
	exports.RangeInput = _RangeInput3.default;
	exports.ScreenReaderContent = _ScreenReaderContent3.default;
	exports.Select = _Select3.default;
	exports.TabList = _TabList3.default;
	exports.TextInput = _TextInput3.default;
	exports.Transition = _Transition3.default;
	exports.UserCard = _UserCard3.default;

/***/ }
/******/ ])
});
;