var inputdata = require('./shared/inputdata.js').inputdata;
var util = require('util');
var events = require('events');

function functionwithoutpara() {
  events.EventEmitter.call(this);
}

util.inherits(functionwithoutpara, events.EventEmitter);
functionwithoutpara.prototype.command = function(callback) {
this.client.api
    .windowMaximize()
    .url(inputdata.level1.level2.data)
    .pause(3000)
    .maximizeWindow()
    .pause(1000)
    .waitForElementPresent('logout selector', 20000, () => {
    // callback()
        this.emit("complete");
    });

  return this.client.api;
};

module.exports = functionwithoutpara;
