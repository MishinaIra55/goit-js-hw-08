import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Разбери документацию метода on() и начни отслеживать событие timeupdate - обновление времени воспроизведения.
// Сохраняй время воспроизведения в локальное хранилище. Пусть ключом для хранилища будет строка "videoplayer-current-time".
const onTimeUpdate = (data) => {
   console.log('тайм апдейт', data);
   localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));

// При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы возобновить воспроизведение с сохраненной позиции.
const setTimeToPlayer = () => {
   
   player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
};

window.addEventListener("load", setTimeToPlayer);

