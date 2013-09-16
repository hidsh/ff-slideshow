var tabs = require("tabs");
var timers = require("timers");
var self = require("self");

function show_page()
{
    var n = pages.length;
    var count = 1;
    var current_tab = tabs.activeTab;

    return function ()
    {
        current_tab.url = pages[count];
        count = (count + 1) % n;
    }
}

// config.text: slideshow/data/config.txt
var lines = self.data.load("config.txt").split("\n").filter(function (x) {return x != ""});

ms = Number(lines[0]);
if(typeof ms != "number") ms = 2000;           // default = 2 sec

pages = lines.slice(1);
    
var f = show_page();
timers.setInterval(f, ms);

f();                                           // show first page in advance
