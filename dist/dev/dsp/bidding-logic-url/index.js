/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dsp/bidding-logic-url/calc.ts":
/*!*******************************************!*\
  !*** ./src/dsp/bidding-logic-url/calc.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.calc = void 0;
var calc = function () {
    // return 10
    var loop = 10000;
    var ans = 0;
    for (var step = 0; step < loop; step++) {
        ans += step;
    }
    return ans;
};
exports.calc = calc;


/***/ }),

/***/ "./src/dsp/join-ad-interest-group/module.ts":
/*!**************************************************!*\
  !*** ./src/dsp/join-ad-interest-group/module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.reportWin = exports.generateBid = void 0;
var calc_1 = __webpack_require__(/*! ../bidding-logic-url/calc */ "./src/dsp/bidding-logic-url/calc.ts");
function generateBid(group, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals) {
    return {
        bid: (0, calc_1.calc)(),
        ad: {
            adName: "adName"
        },
        render: group.ads[0].renderUrl
    };
}
exports.generateBid = generateBid;
function reportWin(auctionSignals, perBuyerSignals, sellerSignals, browserSignals) {
    console.log("reportWin", JSON.stringify({
        auctionSignals: auctionSignals,
        perBuyerSignals: perBuyerSignals,
        sellerSignals: sellerSignals,
        browserSignals: browserSignals
    }));
}
exports.reportWin = reportWin;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************************************!*\
  !*** ./src/dsp/bidding-logic-url/index.ts ***!
  \********************************************/

exports.__esModule = true;
var module_1 = __webpack_require__(/*! ../join-ad-interest-group/module */ "./src/dsp/join-ad-interest-group/module.ts");
globalThis.generateBid = function (group, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals) {
    return (0, module_1.generateBid)(group, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals);
};
globalThis.reportWin = function (auctionSignals, perBuyerSignals, sellerSignals, browserSignals) {
    return (0, module_1.reportWin)(auctionSignals, perBuyerSignals, sellerSignals, browserSignals);
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHNwL2JpZGRpbmctbG9naWMtdXJsL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNLElBQUksR0FBRztJQUNoQixZQUFZO0lBQ1osSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ25CLElBQUksR0FBRyxHQUFHLENBQUM7SUFFWCxLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO1FBQ3BDLEdBQUcsSUFBSSxJQUFJO0tBQ2Q7SUFDRCxPQUFPLEdBQUc7QUFDZCxDQUFDO0FBVFksWUFBSSxRQVNoQjs7Ozs7Ozs7Ozs7Ozs7QUNURCx5R0FBK0M7QUFFL0MsU0FBZ0IsV0FBVyxDQUFDLEtBQUssRUFDTCxjQUFjLEVBQ2QsZUFBZSxFQUNmLHFCQUFxQixFQUNyQixjQUFjO0lBRXRDLE9BQU87UUFDSCxHQUFHLEVBQUUsZUFBSSxHQUFFO1FBQ1gsRUFBRSxFQUFFO1lBQ0EsTUFBTSxFQUFFLFFBQVE7U0FDbkI7UUFDRCxNQUFNLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0tBQ2pDO0FBQ0wsQ0FBQztBQWJELGtDQWFDO0FBRUQsU0FBZ0IsU0FBUyxDQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLGNBQWM7SUFDcEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNwQyxjQUFjO1FBQ2QsZUFBZTtRQUNmLGFBQWE7UUFDYixjQUFjO0tBQ2pCLENBQUMsQ0FBQztBQUNQLENBQUM7QUFQRCw4QkFPQzs7Ozs7OztVQ3hCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7QUN0QkEseUhBQXdFO0FBRXhFLFVBQVUsQ0FBQyxXQUFXLEdBQUcsVUFBUyxLQUFLLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxxQkFBcUIsRUFBRSxjQUFjO0lBQzNHLE9BQU8sd0JBQVcsRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxxQkFBcUIsRUFBRSxjQUFjLENBQUM7QUFDckcsQ0FBQztBQUVELFVBQVUsQ0FBQyxTQUFTLEdBQUcsVUFBUyxjQUFjLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxjQUFjO0lBQzFGLE9BQU8sc0JBQVMsRUFBQyxjQUFjLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxjQUFjLENBQUM7QUFDcEYsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BhYS10aXBzLy4vc3JjL2RzcC9iaWRkaW5nLWxvZ2ljLXVybC9jYWxjLnRzIiwid2VicGFjazovL3BhYS10aXBzLy4vc3JjL2RzcC9qb2luLWFkLWludGVyZXN0LWdyb3VwL21vZHVsZS50cyIsIndlYnBhY2s6Ly9wYWEtdGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wYWEtdGlwcy8uL3NyYy9kc3AvYmlkZGluZy1sb2dpYy11cmwvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNhbGMgPSAoKSA9PiB7XG4gICAgLy8gcmV0dXJuIDEwXG4gICAgY29uc3QgbG9vcCA9IDEwMDAwO1xuICAgIHZhciBhbnMgPSAwXG5cbiAgICBmb3IgKGxldCBzdGVwID0gMDsgc3RlcCA8IGxvb3A7IHN0ZXArKykge1xuICAgICAgICBhbnMgKz0gc3RlcFxuICAgIH1cbiAgICByZXR1cm4gYW5zXG59XG4iLCJpbXBvcnQge2NhbGN9IGZyb20gXCIuLi9iaWRkaW5nLWxvZ2ljLXVybC9jYWxjXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUJpZChncm91cCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdWN0aW9uU2lnbmFscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJCdXllclNpZ25hbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1c3RlZEJpZGRpbmdTaWduYWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyb3dzZXJTaWduYWxzXG4pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBiaWQ6IGNhbGMoKSxcbiAgICAgICAgYWQ6IHtcbiAgICAgICAgICAgIGFkTmFtZTogXCJhZE5hbWVcIlxuICAgICAgICB9LFxuICAgICAgICByZW5kZXI6IGdyb3VwLmFkc1swXS5yZW5kZXJVcmwsXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwb3J0V2luKGF1Y3Rpb25TaWduYWxzLCBwZXJCdXllclNpZ25hbHMsIHNlbGxlclNpZ25hbHMsIGJyb3dzZXJTaWduYWxzKSB7XG4gICAgY29uc29sZS5sb2coXCJyZXBvcnRXaW5cIiwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBhdWN0aW9uU2lnbmFscyxcbiAgICAgICAgcGVyQnV5ZXJTaWduYWxzLFxuICAgICAgICBzZWxsZXJTaWduYWxzLFxuICAgICAgICBicm93c2VyU2lnbmFsc1xuICAgIH0pKVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQge2dlbmVyYXRlQmlkLCByZXBvcnRXaW59IGZyb20gXCIuLi9qb2luLWFkLWludGVyZXN0LWdyb3VwL21vZHVsZVwiO1xuXG5nbG9iYWxUaGlzLmdlbmVyYXRlQmlkID0gZnVuY3Rpb24oZ3JvdXAsIGF1Y3Rpb25TaWduYWxzLCBwZXJCdXllclNpZ25hbHMsIHRydXN0ZWRCaWRkaW5nU2lnbmFscywgYnJvd3NlclNpZ25hbHMpIHtcbiAgICByZXR1cm4gZ2VuZXJhdGVCaWQoZ3JvdXAsIGF1Y3Rpb25TaWduYWxzLCBwZXJCdXllclNpZ25hbHMsIHRydXN0ZWRCaWRkaW5nU2lnbmFscywgYnJvd3NlclNpZ25hbHMpXG59XG5cbmdsb2JhbFRoaXMucmVwb3J0V2luID0gZnVuY3Rpb24oYXVjdGlvblNpZ25hbHMsIHBlckJ1eWVyU2lnbmFscywgc2VsbGVyU2lnbmFscywgYnJvd3NlclNpZ25hbHMpIHtcbiAgICByZXR1cm4gcmVwb3J0V2luKGF1Y3Rpb25TaWduYWxzLCBwZXJCdXllclNpZ25hbHMsIHNlbGxlclNpZ25hbHMsIGJyb3dzZXJTaWduYWxzKVxufVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==