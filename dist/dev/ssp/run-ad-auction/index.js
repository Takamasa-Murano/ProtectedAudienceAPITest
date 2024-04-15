/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ssp/run-ad-auction/index.ts":
/*!*****************************************!*\
  !*** ./src/ssp/run-ad-auction/index.ts ***!
  \*****************************************/
/***/ (function() {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
window.addEventListener('DOMContentLoaded', function (event) { return __awaiter(_this, void 0, void 0, function () {
    var auctionConfig, result, container;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                auctionConfig = {
                    "seller": 'https://ssp.paa-tips.com:44304',
                    "decisionLogicUrl": "https://ssp.paa-tips.com:44304/ssp/decision-logic-url/index.js",
                    "interestGroupBuyers": ["https://dsp.paa-tips.com:44303"],
                    "resolveToConfig": true
                };
                return [4 /*yield*/, navigator.runAdAuction(auctionConfig)];
            case 1:
                result = _a.sent();
                console.log('opaqueUrl', result);
                container = document.getElementById('paa-ad-container');
                // @ts-ignore
                container.config = result;
                return [2 /*return*/];
        }
    });
}); });


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/ssp/run-ad-auction/index.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3NwL3J1bi1hZC1hdWN0aW9uL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQWNBO0FBZEEsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFVBQU8sS0FBSzs7Ozs7Z0JBQzlDLGFBQWEsR0FBRztvQkFDbEIsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsa0JBQWtCLEVBQUUsZ0VBQWdFO29CQUNwRixxQkFBcUIsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO29CQUN6RCxpQkFBaUIsRUFBRSxJQUFJO2lCQUMxQjtnQkFFYyxxQkFBTSxTQUFTLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQzs7Z0JBQXBELE1BQU0sR0FBRyxTQUEyQztnQkFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDO2dCQUMxQixTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDN0QsYUFBYTtnQkFDYixTQUFTLENBQUMsTUFBTSxHQUFHLE1BQU07Ozs7S0FDNUIsQ0FBQyxDQUFDOzs7Ozs7OztVRWJIO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWEtdGlwcy8uL3NyYy9zc3AvcnVuLWFkLWF1Y3Rpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcGFhLXRpcHMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wYWEtdGlwcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcGFhLXRpcHMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgYXVjdGlvbkNvbmZpZyA9IHtcbiAgICAgICAgXCJzZWxsZXJcIjogJ2h0dHBzOi8vc3NwLnBhYS10aXBzLmNvbTo0NDMwNCcsXG4gICAgICAgIFwiZGVjaXNpb25Mb2dpY1VybFwiOiBcImh0dHBzOi8vc3NwLnBhYS10aXBzLmNvbTo0NDMwNC9zc3AvZGVjaXNpb24tbG9naWMtdXJsL2luZGV4LmpzXCIsXG4gICAgICAgIFwiaW50ZXJlc3RHcm91cEJ1eWVyc1wiOiBbXCJodHRwczovL2RzcC5wYWEtdGlwcy5jb206NDQzMDNcIl0sXG4gICAgICAgIFwicmVzb2x2ZVRvQ29uZmlnXCI6IHRydWUsXG4gICAgfVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBuYXZpZ2F0b3IucnVuQWRBdWN0aW9uKGF1Y3Rpb25Db25maWcpXG4gICAgY29uc29sZS5sb2coJ29wYXF1ZVVybCcsIHJlc3VsdClcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFhLWFkLWNvbnRhaW5lcicpXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnRhaW5lci5jb25maWcgPSByZXN1bHRcbn0pO1xuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9zc3AvcnVuLWFkLWF1Y3Rpb24vaW5kZXgudHNcIl0oKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==