"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    framework: 'jasmine',
    // capabilities: {
    //   browserName: 'chrome'
    // },
    multiCapabilities: [{
            'browserName': 'chrome'
        }, {
            'browserName': 'firefox'
        }
    ],
    specs: ['./FirstTestSpec.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true
};
//# sourceMappingURL=conf.js.map