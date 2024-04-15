"use strict";
exports.__esModule = true;
var module_1 = require("../join-ad-interest-group/module");
globalThis.generateBid = function (group, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals) {
    return (0, module_1.generateBid)(group, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals);
};
globalThis.reportWin = function (auctionSignals, perBuyerSignals, sellerSignals, browserSignals) {
    return (0, module_1.reportWin)(auctionSignals, perBuyerSignals, sellerSignals, browserSignals);
};
//# sourceMappingURL=index.js.map