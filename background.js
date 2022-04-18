// Current state to which we will sync tabs to. TODO: add an icon
let play = true;
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	// Send a message to the active tab
	chrome.tabs.query({url: '*://www.youtube.com/watch?v*'}, function(tabs) { // Gets all tabs with youtube playing a video
		play = !play
		for (let tab of tabs) {
			chrome.tabs.sendMessage(tab.id, {'message': 'toggle_playing', 'play': play})
		}
	});
});
