var tabs = require("tabs");
var timers = require("timers");

var pages = ["http://www.example.com",
             "http://www.google.co.jp",
             "http://www.yahoo.co.jp",
             "http://www.gnu.org"];

var ms = 2000;

function show_page()
{
    var n = pages.length;
    var count = 0;
    var current_tab = tabs.activeTab;

    return function ()
    {
        current_tab.url = pages[count];
        count = (count + 1) % n;
    }
}

var f = show_page();
timers.setInterval(f, ms);


