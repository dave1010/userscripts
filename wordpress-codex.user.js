// ==UserScript==
// @name                WordPress Codex Title Fixer
// @namespace	        http://createopen.com
// @description	        Fixes the WP Codex page titles
// @include		http://codex.wordpress.org/*
// ==/UserScript==

/*global document*/

document.title = document.title
	.replace('Function Reference/', '')
	.replace('Class Reference/', '');