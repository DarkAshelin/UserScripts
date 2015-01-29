// ==UserScript==
// @name         Facebook SFW theme
// @namespace    http://your.homepage/
// @version      0.1
// @description  Changes your Facebook theme to a more safe-for-work theme, which your colleagues won't recognize as quickly. You can now pretend to work even while openly browsing Facebook!
// @author       DarkAshelin
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

var sheet = (function() {
	// Create the <style> tag
	var style = document.createElement("style");

	// Add a media (and/or media query) here if you'd like!
	// style.setAttribute("media", "screen")
	// style.setAttribute("media", "only screen and (max-width : 1024px)")

	// WebKit hack :(
	style.appendChild(document.createTextNode(""));

	// Add the <style> element to the page
	document.head.appendChild(style);

	return style.sheet;
})();

sheet.insertRule("#globalContainer a, .fbReminders .fbRemindersStory .fbRemindersTitle { color: black; }", 0);
sheet.insertRule("img, ._ox1 { -webkit-filter: grayscale(1); filter: grayscale(1); opacity: 0.1; }", 0);
sheet.insertRule(".notifCentered a.jewelButton, #privacyFlyoutLabel, #userNavigationLabel { -webkit-filter: grayscale(1) brightness(10); filter: grayscale(1) brightness(10); }", 0);
sheet.insertRule("img:hover, ._ox1:hover { -webkit-filter: grayscale(0); filter: grayscale(0); opacity: 1; }", 0);
sheet.insertRule("#blueBarNAXAnchor, ._5q5b .fbNubFlyoutTitlebar { background: #333; color: white; border-radius: 0; }", 0);
sheet.insertRule(".smurfbarTopBorder { border-radius: 0 !important; }", 0);
sheet.insertRule("._539- .uiTypeahead .wrap, ._5vb_, ._5vb_ #contentCol, ._5vb_ ._5pr2.fbChatSidebar { background: white; }", 0);
sheet.insertRule("._5lus, .imgWrap, ._5pr2 ._56p9, ._ohe, .uiIconText._51z7 i, .pagelet, ._5ys_, ._5w1r:before, ._5w1r:after, ._3rzn ._509v ._509w { display: none; }", 0);
sheet.insertRule(".linkWrap:before { content: '- '; }", 0);
sheet.insertRule("._4-u2 { border: none; margin-bottom: 40px; border-radius: 0; padding-bottom: 50px; border-bottom: 1px solid #e5e5e5 }", 0);
sheet.insertRule("._5t35 { color: #f90; }", 0);
sheet.insertRule(".sp_0rbmCVMKg1X { background: #f90; border-radius: 50%; width: 7px; height: 7px; }", 0);
sheet.insertRule(".sp_0rbmCVMKg1X.sx_769d0b { width: 7px; height: 7px; }", 0);
sheet.insertRule("._1nc6 ._5w1r, ._1nc7 ._5w1r { background: none; border-radius: 0; border: none; margin: 0; padding: 0; width: 100% !important; max-width: none !important; -webkit-box-shadow: none; box-shadow: none; }", 0);
sheet.insertRule("._5wd4._1nc6 { background: #e0eaf1; }", 0);
sheet.insertRule("._5wd4._1nc6, ._5wd4._1nc6 { margin: 0; padding: 5px; }", 0);
sheet.insertRule("._1nc6 ._5wd9, ._1nc6 ._5wd4, ._1nc7 ._5wd9, ._1nc7 ._5wd4 { margin: 0; padding: 0; }", 0);
sheet.insertRule("._50mz .fbNubFlyoutInner { border-radius: 0; }", 0);
sheet.insertRule(".fbDockChatTabFlyout .fbNubFlyoutBody { background: #f6f7f8; }", 0);
sheet.insertRule("._5w-6 { background: none; }", 0);
sheet.insertRule("._1nc7 ._5wd9 { min-height: 0; }", 0);
sheet.insertRule("._4-u2.mvm._495i { padding: 10px; }", 0);
sheet.insertRule("#pagelet_composer ._4-u2.mbm { padding: 0; margin-bottom: 0; }", 0);