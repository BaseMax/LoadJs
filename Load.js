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
	* @argument url      [Optional] : the link of the js file
	* @argument in_body  [Optional] : append <script> tag at end of the <body> or <head>
	* @argument callback [Optional]
	*
	* @return appendChild() result
	**/
	// ES6
	// window.appendscript(url,in_body=false,callback)
	window.appendscript(url,in_body,callback)
	{
		var script = document.createElement("script");
		script.src = url;
		if(callback)
		{
			script.onreadystatechange = callback;
			script.onload = callback;
		}
		// ES5
		if(in_body === undefined)
		{
			in_body=false;
		}
		else if(in_body === true)
		// if(in_body && in_body === true)
		{
			// Add to the end of the `body` section
			return document.body.appendChild(script);
		}
		// else{}
		// Add to the end of the `head` section
		return document.head.appendChild(script);
	}
}(window,document));
