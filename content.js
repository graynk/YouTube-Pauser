chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.message !== 'toggle_playing') return;

		const video = document.getElementsByTagName('video')[0];
		if (request.play && video.paused) {
			video.play();
		} else if (!request.play && !video.paused) {
			video.pause();
		}
  	}
);
