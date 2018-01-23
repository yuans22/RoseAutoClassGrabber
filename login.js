var rose_username = "YOUR_ROSE_USERNAME";
var rose_password = "YOUR_PASSWORD";
var rose_pin = YOUR_PIN;

var crn_1 = "CLASS_CRN_NUMBER";
var crn_2 = "CLASS_CRN_NUMBER";
var crn_3 = "CLASS_CRN_NUMBER";
var crn_4 = "CLASS_CRN_NUMBER";
var crn_5 = "CLASS_CRN_NUMBER";
var crn_6 = "CLASS_CRN_NUMBER";


var casper = require('casper').create({   
    verbose: true, 
    logLevel: 'info',
    pageSettings: {
         loadImages:  false,         // The WebPage instance used by Casper will
         loadPlugins: false,         // use these settings
         userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4'
    }
});

// print out all the messages in the headless browser context
casper.on('remote.message', function(msg) {
    this.echo('remote message caught: ' + msg);
});

// print out all the messages in the headless browser context
casper.on("page.error", function(msg, trace) {
    this.echo("Page Error: " + msg, "ERROR");
});

var url = 'https://bannerweb.rose-hulman.edu/login';

casper.start(url, function() {
   this.fill('form#loginForm', { 
        username: rose_username, 
        password:  rose_password
    }, true);
});

casper.then(function(){
});


casper.then(function(){
   //casper.capture('login_success.png');
   casper.click("a[href^='/BanSS/twbkwbis.P_GenMenu?name=bmenu.P_StuMainMnu']");
   
});

casper.then(function(){
   //casper.capture('student_tab.png'); 
   casper.click("a[href^='/BanSS/twbkwbis.P_GenMenu?name=bmenu.P_RegMnu']");
   
});

casper.then(function(){
   //casper.capture('reg_tab.png'); 
   casper.click("a[href^='/BanSS/bwskfreg.P_AltPin']");

});

casper.then(function(){
   //casper.capture('select.png'); 
   this.fill('form[action="/BanSS/bwskfreg.P_AltPin"]', {
    }, true);

});

casper.then(function(){
});

casper.then(function(){
    //casper.capture('pin_vref.png'); 
    this.fill('form[action="/BanSS/bwskfreg.P_CheckAltPin"]', {
	pin: rose_pin
    }, true);
});

casper.then(function(){
});


casper.then(function(){


this.sendKeys('input[id="crn_id1"]', crn_1);
this.sendKeys('input[id="crn_id2"]', crn_2);
this.sendKeys('input[id="crn_id3"]', crn_3);
this.sendKeys('input[id="crn_id4"]', crn_4);
this.sendKeys('input[id="crn_id5"]', crn_5);
this.sendKeys('input[id="crn_id6"]', crn_6);


this.sendKeys('input[id="crn_id6"]', casper.page.event.key.Enter , {keepFocus: true});
  
});

casper.then(function(){
});

casper.run(function() {
    casper.capture('~/finished.png'); 	
    this.exit(); 
});
