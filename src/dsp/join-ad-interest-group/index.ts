const interestGroup = {
    owner: 'https://another.geniee.jp',
    name: 'PAAPIDemo_20240415',
    biddingLogicUrl: 'https://another.geniee.jp/test/murano/Reproducts/protectedAudienceDemo/dsp/bidding-logic-url/index.js',
    ads: [{ renderUrl: 'https://another.geniee.jp/test/murano/Reproducts/protectedAudienceDemo/dsp/creative/index.html' }]
}

// @ts-ignore
navigator.joinAdInterestGroup(interestGroup, 60 * 60 * 24 * 7)
