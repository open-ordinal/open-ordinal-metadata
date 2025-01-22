/*! 
* Open Ordinal Metadata 0.5.3
*/
/******/ var __webpack_modules__ = ({

/***/ 977:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BootstrapMode = void 0;
/**
 * Bootstap Mode
 *
 * @category Bootstrap
 */
var BootstrapMode;
(function (BootstrapMode) {
    /**
     * Load Inscription Directly by Id and Boot
     */
    BootstrapMode[BootstrapMode["LoadByInscriptionIdAndBoot"] = 1] = "LoadByInscriptionIdAndBoot";
    /**
     * Load Inscription via Id and then via it's SAT and fetch Latest and Boot
     */
    BootstrapMode[BootstrapMode["LoadLatestByInscriptionIdAndBoot"] = 2] = "LoadLatestByInscriptionIdAndBoot";
    /**
     * Load specified index via SAT and Boot
     */
    BootstrapMode[BootstrapMode["LoadIndexBySatAndBoot"] = 3] = "LoadIndexBySatAndBoot";
    /**
     * Load Latest Inscription via SAT and Boot
     */
    BootstrapMode[BootstrapMode["LoadLatestBySatAndBoot"] = 4] = "LoadLatestBySatAndBoot";
})(BootstrapMode || (exports.BootstrapMode = BootstrapMode = {}));
//# sourceMappingURL=Bootstrap.js.map

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;

/*!
 * Open Ordinal Metadata
 *
 * @author   Open Ordinal <https://openordinal.dev>
 * @license  MIT
 */
/**
 * @module OOMD
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BootstrapMode = void 0;
var Bootstrap_1 = __webpack_require__(977);
Object.defineProperty(exports, "BootstrapMode", ({ enumerable: true, get: function () { return Bootstrap_1.BootstrapMode; } }));
//# sourceMappingURL=OOMD.js.map
})();

var __webpack_exports__BootstrapMode = __webpack_exports__.BootstrapMode;
var __webpack_exports___esModule = __webpack_exports__.__esModule;
export { __webpack_exports__BootstrapMode as BootstrapMode, __webpack_exports___esModule as __esModule };
