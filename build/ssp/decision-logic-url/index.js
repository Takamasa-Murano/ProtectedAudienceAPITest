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
//# sourceMappingURL=index.js.map