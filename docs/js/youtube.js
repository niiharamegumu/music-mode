// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: videoId,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// The API will call this function when the video player is ready.
var duration;
function onPlayerReady(event) {
  showTitle();
  fadeIn(controls);
  fadeIn(title);
  fadeIn(thumb);
  updateProgress();

  event.target.playVideo();
  duration = player.getDuration();
}

// The API calls this function when the player's state changes.
// The function indicates that when playing a video (state=1),
// the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    hide(play_btn);
  }
}