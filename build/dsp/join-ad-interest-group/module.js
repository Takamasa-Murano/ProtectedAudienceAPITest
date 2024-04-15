"use strict";
exports.__esModule = true;
exports.reportWin = exports.generateBid = void 0;
var calc_1 = require("../bidding-logic-url/calc");
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
//# sourceMappingURL=module.js.map