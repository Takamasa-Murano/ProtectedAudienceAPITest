"use strict";
exports.__esModule = true;
var module_1 = require("../dsp/join-ad-interest-group/module");
var loop = 100;
console.log("runner start");
for (var step = 0; step < loop; step++) {
    (0, module_1.generateBid)({
        owner: '',
        name: '',
        ads: [{ renderUrl: 'https://example.com' }]
    }, undefined, undefined, undefined, undefined);
}
console.log("runner end");
//# sourceMappingURL=prof.js.map