// content.js
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		const video = document.getElementsByTagName('video')[0];
		switch (request.message) {
			case 'toggle_playing':
				if (request.play && video.paused) {
					video.play();
				} else if (!request.play && !video.paused) {
					video.pause();
				}
				break;
			// TODO: add pop-up allowing to select active tabs to play/pause, receive info via request
			case 'request_video_data':
				sendResponse({'title': video.title});
		}
  	}
);
