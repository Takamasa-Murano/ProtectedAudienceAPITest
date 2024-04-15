/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************************!*\
  !*** ./src/ssp/decision-logic-url/index.ts ***!
  \*********************************************/
globalThis.scoreAd = function (adMetadata, bid, auctionConfig, trustedScoringSignals, browserSignals) {
    console.log('scoreAd', JSON.stringify({
        adMetadata: adMetadata,
        bid: bid,
        auctionConfig: auctionConfig,
        trustedScoringSignals: trustedScoringSignals,
        browserSignals: browserSignals
    }));
    return bid;
};
globalThis.reportResult = function (auctionConfig, browserSignals) {
    console.log('reportResult', JSON.stringify({
        auctionConfig: auctionConfig,
        browserSignals: browserSignals
    }));
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3NwL2RlY2lzaW9uLWxvZ2ljLXVybC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLFVBQVUsQ0FBQyxPQUFPLEdBQUcsVUFBUyxVQUFVLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxxQkFBcUIsRUFBRSxjQUFjO0lBQy9GLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbEMsVUFBVTtRQUNWLEdBQUc7UUFDSCxhQUFhO1FBQ2IscUJBQXFCO1FBQ3JCLGNBQWM7S0FDakIsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBRUQsVUFBVSxDQUFDLFlBQVksR0FBRyxVQUFTLGFBQWEsRUFBRSxjQUFjO0lBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdkMsYUFBYTtRQUNiLGNBQWM7S0FDakIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BhYS10aXBzLy4vc3JjL3NzcC9kZWNpc2lvbi1sb2dpYy11cmwvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZ2xvYmFsVGhpcy5zY29yZUFkID0gZnVuY3Rpb24oYWRNZXRhZGF0YSwgYmlkLCBhdWN0aW9uQ29uZmlnLCB0cnVzdGVkU2NvcmluZ1NpZ25hbHMsIGJyb3dzZXJTaWduYWxzKSB7XG4gICAgY29uc29sZS5sb2coJ3Njb3JlQWQnLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGFkTWV0YWRhdGEsXG4gICAgICAgIGJpZCxcbiAgICAgICAgYXVjdGlvbkNvbmZpZyxcbiAgICAgICAgdHJ1c3RlZFNjb3JpbmdTaWduYWxzLFxuICAgICAgICBicm93c2VyU2lnbmFscyxcbiAgICB9KSlcbiAgICByZXR1cm4gYmlkO1xufVxuXG5nbG9iYWxUaGlzLnJlcG9ydFJlc3VsdCA9IGZ1bmN0aW9uKGF1Y3Rpb25Db25maWcsIGJyb3dzZXJTaWduYWxzKSB7XG4gICAgY29uc29sZS5sb2coJ3JlcG9ydFJlc3VsdCcsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgYXVjdGlvbkNvbmZpZyxcbiAgICAgICAgYnJvd3NlclNpZ25hbHNcbiAgICB9KSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==