import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(getCurrentVideoTime, 1000));

function getCurrentVideoTime(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}

function setCurrentVideoTime() {
    const saveCurrentTime = localStorage.getItem('videoplayer-current-time');

    if (saveCurrentTime) {
        player.setCurrentTime(saveCurrentTime)
    }
}

setCurrentVideoTime();