(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(module,exports,__webpack_require__){"use strict";var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result};Object.defineProperty(exports,"__esModule",{value:!0});var React=__importStar(__webpack_require__(11));function ExampleComponent(props){return React.createElement("div",{onClick:props.onClick,"data-testid":"example-component"},props.text)}exports.ExampleComponent=ExampleComponent,ExampleComponent.defaultProps={onClick:function(){return console.log("Click!")},text:"Example text."}},271:function(module,exports,__webpack_require__){"use strict";var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result};Object.defineProperty(exports,"__esModule",{value:!0});var React=__importStar(__webpack_require__(11));exports.useExampleCounter=function(initialValue){void 0===initialValue&&(initialValue=0);var _a=React.useState(initialValue),count=_a[0],setCount=_a[1];return{count:count,increment:React.useCallback((function(){return setCount((function(x){return x+1}))}),[]),reset:React.useCallback((function(){return setCount(initialValue)}),[initialValue])}}},272:function(module,exports,__webpack_require__){__webpack_require__(273),__webpack_require__(419),module.exports=__webpack_require__(420)},337:function(module,exports){},420:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(270);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(614)],module)}.call(this,__webpack_require__(421)(module))},614:function(module,exports,__webpack_require__){var map={"./ExampleComponent.stories.js":615,"./useExampleCounter.stories.js":628};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=614},615:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"TextState",(function(){return TextState})),__webpack_require__.d(__webpack_exports__,"EmojiState",(function(){return EmojiState}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(168),_components_ExampleComponent__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(111);__webpack_exports__.default={title:"Example Component",component:_components_ExampleComponent__WEBPACK_IMPORTED_MODULE_2__.ExampleComponent};var TextState=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExampleComponent__WEBPACK_IMPORTED_MODULE_2__.ExampleComponent,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked"),text:"Example text! Click me."})};TextState.displayName="TextState",TextState.story={name:"Text State",parameters:{notes:"This example component shows the text it's given."}};var EmojiState=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExampleComponent__WEBPACK_IMPORTED_MODULE_2__.ExampleComponent,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked"),text:"😀 😎 👍 💯"})};EmojiState.displayName="EmojiState",EmojiState.story={name:"Emoji State",parameters:{notes:"This story shows the example component with some emojis."}},TextState.__docgenInfo={description:"",methods:[],displayName:"TextState"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/__stories__/ExampleComponent.stories.js"]={name:"TextState",docgenInfo:TextState.__docgenInfo,path:"src/__stories__/ExampleComponent.stories.js"}),EmojiState.__docgenInfo={description:"",methods:[],displayName:"EmojiState"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/__stories__/ExampleComponent.stories.js"]={name:"EmojiState",docgenInfo:EmojiState.__docgenInfo,path:"src/__stories__/ExampleComponent.stories.js"})},628:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"UseExampleEffectHookComponent",(function(){return UseExampleEffectHookComponent}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_hooks_useExampleCounter__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(271);__webpack_exports__.default={title:"useExampleCounter Hook"};var HookComponent=function(){var counter=Object(_hooks_useExampleCounter__WEBPACK_IMPORTED_MODULE_1__.useExampleCounter)();return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Count: ",counter.count),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{onClick:function onClick(){return counter.increment()}},"+ Increment"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{onClick:function onClick(){return counter.reset()}},"Reset")))},_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HookComponent,null),UseExampleEffectHookComponent=function(){return _ref};UseExampleEffectHookComponent.displayName="UseExampleEffectHookComponent",UseExampleEffectHookComponent.story={name:"Hook State",parameters:{notes:"The counter hook provides a counter with an increment and reset function."}},UseExampleEffectHookComponent.__docgenInfo={description:"",methods:[],displayName:"UseExampleEffectHookComponent"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/__stories__/useExampleCounter.stories.js"]={name:"UseExampleEffectHookComponent",docgenInfo:UseExampleEffectHookComponent.__docgenInfo,path:"src/__stories__/useExampleCounter.stories.js"})}},[[272,1,2]]]);
//# sourceMappingURL=main.ff7eff451f64b57aba7f.bundle.js.map