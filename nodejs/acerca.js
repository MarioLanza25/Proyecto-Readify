const video = document.getElementById('my-video');
const videoPlayer = document.querySelector('.video-player');

video.addEventListener('play', function() {
  videoPlayer.classList.add('playing');
});

video.addEventListener('pause', function() {
  videoPlayer.classList.remove('playing');
});