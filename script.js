// script.js
document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('background-audio');
    const audioControl = document.getElementById('audio-control');
    let isPlaying = true;

    audioControl.addEventListener('click', function () {
        if (isPlaying) {
            audio.pause();
            audioControl.classList.remove('playing');
        } else {
            audio.play();
            audioControl.classList.add('playing');
        }
        isPlaying = !isPlaying;
    });
});
