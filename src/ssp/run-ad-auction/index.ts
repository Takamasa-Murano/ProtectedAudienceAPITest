window.addEventListener('DOMContentLoaded', async (event) => {
    const auctionConfig = {
        "seller": 'https://another.geniee.jp',
        "decisionLogicUrl": "https://another.geniee.jp/test/murano/Reproducts/protectedAudienceDemo/ssp/decision-logic-url/index.js",
        "interestGroupBuyers": ["https://another.geniee.jp"],
        "resolveToConfig": true,
    }
    // @ts-ignore
    const result = await navigator.runAdAuction(auctionConfig)
    console.log('opaqueUrl', result)
    const container = document.getElementById('paa-ad-container')
    // @ts-ignore
    container.config = result
});
