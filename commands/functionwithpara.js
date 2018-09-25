var inputdata = require('./shared/inputdata.js').inputdata;
var util = require('util');
var events = require('events');

function functionwithpara(string) {
  events.EventEmitter.call(this);
}

util.inherits(functionwithpara, events.EventEmitter);
functionwithpara.prototype.command = function(string) {
  this.client.api
       .waitForElementPresent('selector',20000)
       .setValue('selector',string)
       .pause(5000)
       .waitForElementPresent('selector', 10000, () => {
	this.emit("complete");
	});

  return this.client.api;
};

module.exports = functionwithpara;
