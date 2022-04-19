// Current state to which we will sync tabs to, when clicked.
let play = true;
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	// Gets all tabs with YouTube playing a video
	chrome.tabs.query({url: '*://www.youtube.com/watch?v*'}, function(tabs) {
		if (tabs.length === 0) {
			return;
		}

		const icon = play ? 'icons/play.png' : 'icons/pause.png';
		const title = play ? 'Play YouTube' : 'Pause YouTube';
		play = !play;

		chrome.browserAction.setIcon({
			path: icon,
		});
		chrome.browserAction.setTitle({
			title: title,
		});
		for (let tab of tabs) {
			chrome.tabs.sendMessage(tab.id, {'message': 'toggle_playing', 'play': play})
		}
	});
});
