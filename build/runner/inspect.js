"use strict";
exports.__esModule = true;
var module_1 = require("../dsp/join-ad-interest-group/module");
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
//# sourceMappingURL=inspect.js.map