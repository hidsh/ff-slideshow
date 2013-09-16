var tabs = require("tabs");
var timers = require("timers");
var file = require("file");

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


var file_path = file.join(require("system").pathFor("Desk"), "config.txt");
// console.log(file_path);

var lines = file.read(file_path).split("\n").filter(function (x) {return x != ""});
ms = Number(lines[0]);
if(typeof ms != "number") ms = 2000;           // default = 2 sec

pages = lines.slice(1);
    
var f = show_page();
timers.setInterval(f, ms);

f();                                           // show first page in advance
