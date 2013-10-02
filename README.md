![movie](http://www.youtube.com/watch?v=HvxzAbH4egc)

# prerequisite

- Firefox >= 23
- [Add-on sdk](https://dev.mozilla.jp/addon-sdk-docs/dev-guide/tutorials/installation.html)



# test run

    cp config.txt ~/Desktop
    cfx run

# setting

edit `~/Desktop/config.txt` in order to configure slideshow

    10000                       <-- time interval [msec]   e.g. 10 sec --> 10000
    http://www.example.com/     <-- visit pages
    http://www.google.co.jp/
    http://www.yahoo.co.jp/
    http://www.gnu.org/
    

# run under the production environment

1. export extension: `cfx xpi`

1. launch Firefox > file > open > slideshow.xpi

1. install [R-Kiosk](https://addons.mozilla.org/ja/firefox/addon/r-kiosk/?src=search)

1. reboot Firefox



# note

open console: Command + Shift + j [Mac]
