'use strict';
var config=require('./config.js');
var provider=require('provider.js')(config.provider);
var proxy=require('./proxy.js')(provider,config.proxy);
var webui=require('./webui.js')(config,provider,proxy,config.webui);


module.exports={
    config:config,
    proxy:proxy,
    pac:pac,
    webui:webui
}