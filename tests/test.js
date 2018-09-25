var inputdata = require('../commands/shared/inputdata.js').inputdata;
var textToVerify = require('../commands/shared/textToVerify.js').textToVerify;
var redirecturl = '';
module.exports = {
  'Test ase with function' :function(browser){
    try {
      browser.functionwithoutpara();
     }
     catch(e)
     {
       console.log(e);
     }
   },
   'Test case with function which have input parameters' :function(browser){
     try {
         browser.functionwithpara(inputdata.level1.level2.data);
      }
      catch(e)
      {
        console.log(e);
      }
   },

  'End Of test cases and Close browser' :function(browser){
     try {
          browser.end();
         }
     catch(e)
         {
           console.log(e);
         }
   }

};
