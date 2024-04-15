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
/*!*******************************!*\
  !*** ./src/runner/inspect.ts ***!
  \*******************************/

exports.__esModule = true;
var module_1 = __webpack_require__(/*! ../dsp/join-ad-interest-group/module */ "./src/dsp/join-ad-interest-group/module.ts");
console.log("runner start");
while (true) {
    var bar = foo();
    var bid = 100 + bar;
    bid = (0, module_1.generateBid)({
        owner: '',
        name: '',
        ads: [{ renderUrl: 'https://example.com' }]
    }, undefined, undefined, undefined, undefined).bid;
}
function foo() {
    return Math.random();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVubmVyL2luc3BlY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPLElBQU0sSUFBSSxHQUFHO0lBQ2hCLFlBQVk7SUFDWixJQUFNLElBQUksR0FBRyxLQUFLLENBQUM7SUFDbkIsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUVYLEtBQUssSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDcEMsR0FBRyxJQUFJLElBQUk7S0FDZDtJQUNELE9BQU8sR0FBRztBQUNkLENBQUM7QUFUWSxZQUFJLFFBU2hCOzs7Ozs7Ozs7Ozs7OztBQ1RELHlHQUErQztBQUUvQyxTQUFnQixXQUFXLENBQUMsS0FBSyxFQUNMLGNBQWMsRUFDZCxlQUFlLEVBQ2YscUJBQXFCLEVBQ3JCLGNBQWM7SUFFdEMsT0FBTztRQUNILEdBQUcsRUFBRSxlQUFJLEdBQUU7UUFDWCxFQUFFLEVBQUU7WUFDQSxNQUFNLEVBQUUsUUFBUTtTQUNuQjtRQUNELE1BQU0sRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7S0FDakM7QUFDTCxDQUFDO0FBYkQsa0NBYUM7QUFFRCxTQUFnQixTQUFTLENBQUMsY0FBYyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsY0FBYztJQUNwRixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3BDLGNBQWM7UUFDZCxlQUFlO1FBQ2YsYUFBYTtRQUNiLGNBQWM7S0FDakIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVBELDhCQU9DOzs7Ozs7O1VDeEJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ3RCQSw2SEFBaUU7QUFFakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUM7QUFFM0IsT0FBTyxJQUFJLEVBQUU7SUFDVCxJQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUU7SUFDakIsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7SUFDbkIsR0FBRyxHQUFHLHdCQUFXLEVBQUM7UUFDZCxLQUFLLEVBQUUsRUFBRTtRQUNULElBQUksRUFBRSxFQUFFO1FBQ1IsR0FBRyxFQUFFLENBQUMsRUFBQyxTQUFTLEVBQUUscUJBQXFCLEVBQUMsQ0FBQztLQUM1QyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUc7Q0FDckQ7QUFFRCxTQUFTLEdBQUc7SUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDeEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BhYS10aXBzLy4vc3JjL2RzcC9iaWRkaW5nLWxvZ2ljLXVybC9jYWxjLnRzIiwid2VicGFjazovL3BhYS10aXBzLy4vc3JjL2RzcC9qb2luLWFkLWludGVyZXN0LWdyb3VwL21vZHVsZS50cyIsIndlYnBhY2s6Ly9wYWEtdGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wYWEtdGlwcy8uL3NyYy9ydW5uZXIvaW5zcGVjdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY2FsYyA9ICgpID0+IHtcbiAgICAvLyByZXR1cm4gMTBcbiAgICBjb25zdCBsb29wID0gMTAwMDA7XG4gICAgdmFyIGFucyA9IDBcblxuICAgIGZvciAobGV0IHN0ZXAgPSAwOyBzdGVwIDwgbG9vcDsgc3RlcCsrKSB7XG4gICAgICAgIGFucyArPSBzdGVwXG4gICAgfVxuICAgIHJldHVybiBhbnNcbn1cbiIsImltcG9ydCB7Y2FsY30gZnJvbSBcIi4uL2JpZGRpbmctbG9naWMtdXJsL2NhbGNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQmlkKGdyb3VwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1Y3Rpb25TaWduYWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlckJ1eWVyU2lnbmFscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVzdGVkQmlkZGluZ1NpZ25hbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJvd3NlclNpZ25hbHNcbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGJpZDogY2FsYygpLFxuICAgICAgICBhZDoge1xuICAgICAgICAgICAgYWROYW1lOiBcImFkTmFtZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHJlbmRlcjogZ3JvdXAuYWRzWzBdLnJlbmRlclVybCxcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBvcnRXaW4oYXVjdGlvblNpZ25hbHMsIHBlckJ1eWVyU2lnbmFscywgc2VsbGVyU2lnbmFscywgYnJvd3NlclNpZ25hbHMpIHtcbiAgICBjb25zb2xlLmxvZyhcInJlcG9ydFdpblwiLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGF1Y3Rpb25TaWduYWxzLFxuICAgICAgICBwZXJCdXllclNpZ25hbHMsXG4gICAgICAgIHNlbGxlclNpZ25hbHMsXG4gICAgICAgIGJyb3dzZXJTaWduYWxzXG4gICAgfSkpXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7Z2VuZXJhdGVCaWR9IGZyb20gXCIuLi9kc3Avam9pbi1hZC1pbnRlcmVzdC1ncm91cC9tb2R1bGVcIjtcblxuY29uc29sZS5sb2coXCJydW5uZXIgc3RhcnRcIilcblxud2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBiYXIgPSBmb28oKVxuICAgIHZhciBiaWQgPSAxMDAgKyBiYXJcbiAgICBiaWQgPSBnZW5lcmF0ZUJpZCh7XG4gICAgICAgIG93bmVyOiAnJyxcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGFkczogW3tyZW5kZXJVcmw6ICdodHRwczovL2V4YW1wbGUuY29tJ31dXG4gICAgfSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKS5iaWRcbn1cblxuZnVuY3Rpb24gZm9vKCk6IG51bWJlcntcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9