// ==UserScript==
// @name        Basecamp Classic Tweaks
// @namespace   http://createopen.com
// @include     https://*.basecamphq.com/*
// @grant       none
// @version     1
// ==/UserScript==

document.observe("dom:loaded", function() {


    // highlight my tasks more
    $$('[style="background: #ffc"]').forEach(function(e) {
        e.style.background = '#ff9';
    });

    // highlight unassigned tasks
    $$('.commentable_icon_position_reference > span > span[id]').forEach(function(e) {
        if (!e.next() && !e.up('.done')) {
           e.style.background = '#ddd';
        }
    });

});
