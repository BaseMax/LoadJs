/**
*
* @Name : Load.js
* @Version : 1.0
* @Programmer : Max
* @Date : 2019-01-16
* @Released under : https://github.com/BaseMax/LoadJs/blob/master/LICENSE
* @Repository : https://github.com/BaseMax/LoadJs
*
**/
;(function(window,document)
{
	"use strict";

	/**
	* @function appendscript
	*
	* @goal : append <script> tag in the page.
	*
	* @argument url : the link of the js file
	* @argument footer : append <script> tag at end of the <body> or <head>
	* @argument callback
	*
	* @return appendChild() result
	**/
	window.appendscript(url,footer,callback)
	{
		var script = document.createElement("script");
		script.src = url;
		if(callback)
		{
			script.onreadystatechange = callback;
			script.onload = callback;
		}
		if(footer && footer === true)
		{
			// Add to the end of the `body` section
			return document.body.appendChild(script);
		}
		// else{}
		// Add to the end of the `head` section
		return document.head.appendChild(script);
	}
}(window,document));
