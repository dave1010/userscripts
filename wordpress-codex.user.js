// ==UserScript==
// @name                WordPress Codex Title Fixer
// @namespace	        http://createopen.com
// @description	        Fixes the WP Codex page titles
// @include		http://codex.wordpress.org/*
// ==/UserScript==

// Changes this: http://i.imgur.com/a1uct.png
// Into this:    http://i.imgur.com/OLAQQ.png

/*global document*/

document.title = document.title
	.replace('Function Reference/', '')
	.replace('Class Reference/', '');