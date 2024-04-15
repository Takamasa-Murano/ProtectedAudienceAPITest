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
/*!****************************!*\
  !*** ./src/runner/step.ts ***!
  \****************************/

exports.__esModule = true;
var module_1 = __webpack_require__(/*! ../dsp/join-ad-interest-group/module */ "./src/dsp/join-ad-interest-group/module.ts");
(0, module_1.generateBid)({
    owner: '',
    name: '',
    ads: [{ renderUrl: 'https://example.com' }]
}, undefined, undefined, undefined, undefined);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVubmVyL3N0ZXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPLElBQU0sSUFBSSxHQUFHO0lBQ2hCLFlBQVk7SUFDWixJQUFNLElBQUksR0FBRyxLQUFLLENBQUM7SUFDbkIsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUVYLEtBQUssSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDcEMsR0FBRyxJQUFJLElBQUk7S0FDZDtJQUNELE9BQU8sR0FBRztBQUNkLENBQUM7QUFUWSxZQUFJLFFBU2hCOzs7Ozs7Ozs7Ozs7OztBQ1RELHlHQUErQztBQUUvQyxTQUFnQixXQUFXLENBQUMsS0FBSyxFQUNMLGNBQWMsRUFDZCxlQUFlLEVBQ2YscUJBQXFCLEVBQ3JCLGNBQWM7SUFFdEMsT0FBTztRQUNILEdBQUcsRUFBRSxlQUFJLEdBQUU7UUFDWCxFQUFFLEVBQUU7WUFDQSxNQUFNLEVBQUUsUUFBUTtTQUNuQjtRQUNELE1BQU0sRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7S0FDakM7QUFDTCxDQUFDO0FBYkQsa0NBYUM7QUFFRCxTQUFnQixTQUFTLENBQUMsY0FBYyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsY0FBYztJQUNwRixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3BDLGNBQWM7UUFDZCxlQUFlO1FBQ2YsYUFBYTtRQUNiLGNBQWM7S0FDakIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVBELDhCQU9DOzs7Ozs7O1VDeEJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ3RCQSw2SEFBaUU7QUFFakUsd0JBQVcsRUFDVjtJQUNRLEtBQUssRUFBRSxFQUFFO0lBQ1QsSUFBSSxFQUFFLEVBQUU7SUFDUixHQUFHLEVBQUUsQ0FBQyxFQUFDLFNBQVMsRUFBRSxxQkFBcUIsRUFBQyxDQUFDO0NBQzFDLEVBQ0osU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxDQUNaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFhLXRpcHMvLi9zcmMvZHNwL2JpZGRpbmctbG9naWMtdXJsL2NhbGMudHMiLCJ3ZWJwYWNrOi8vcGFhLXRpcHMvLi9zcmMvZHNwL2pvaW4tYWQtaW50ZXJlc3QtZ3JvdXAvbW9kdWxlLnRzIiwid2VicGFjazovL3BhYS10aXBzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BhYS10aXBzLy4vc3JjL3J1bm5lci9zdGVwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjYWxjID0gKCkgPT4ge1xuICAgIC8vIHJldHVybiAxMFxuICAgIGNvbnN0IGxvb3AgPSAxMDAwMDtcbiAgICB2YXIgYW5zID0gMFxuXG4gICAgZm9yIChsZXQgc3RlcCA9IDA7IHN0ZXAgPCBsb29wOyBzdGVwKyspIHtcbiAgICAgICAgYW5zICs9IHN0ZXBcbiAgICB9XG4gICAgcmV0dXJuIGFuc1xufVxuIiwiaW1wb3J0IHtjYWxjfSBmcm9tIFwiLi4vYmlkZGluZy1sb2dpYy11cmwvY2FsY1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVCaWQoZ3JvdXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXVjdGlvblNpZ25hbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyQnV5ZXJTaWduYWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydXN0ZWRCaWRkaW5nU2lnbmFscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicm93c2VyU2lnbmFsc1xuKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYmlkOiBjYWxjKCksXG4gICAgICAgIGFkOiB7XG4gICAgICAgICAgICBhZE5hbWU6IFwiYWROYW1lXCJcbiAgICAgICAgfSxcbiAgICAgICAgcmVuZGVyOiBncm91cC5hZHNbMF0ucmVuZGVyVXJsLFxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcG9ydFdpbihhdWN0aW9uU2lnbmFscywgcGVyQnV5ZXJTaWduYWxzLCBzZWxsZXJTaWduYWxzLCBicm93c2VyU2lnbmFscykge1xuICAgIGNvbnNvbGUubG9nKFwicmVwb3J0V2luXCIsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgYXVjdGlvblNpZ25hbHMsXG4gICAgICAgIHBlckJ1eWVyU2lnbmFscyxcbiAgICAgICAgc2VsbGVyU2lnbmFscyxcbiAgICAgICAgYnJvd3NlclNpZ25hbHNcbiAgICB9KSlcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHtnZW5lcmF0ZUJpZH0gZnJvbSBcIi4uL2RzcC9qb2luLWFkLWludGVyZXN0LWdyb3VwL21vZHVsZVwiO1xuXG5nZW5lcmF0ZUJpZChcbiB7XG4gICAgICAgICBvd25lcjogJycsXG4gICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgIGFkczogW3tyZW5kZXJVcmw6ICdodHRwczovL2V4YW1wbGUuY29tJ31dXG4gICAgICAgfSxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWRcbilcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=