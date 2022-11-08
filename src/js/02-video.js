import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';

// Variables
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// 2. create variable for function videoplayer-current-time (for easy use). according to the task condition
const timekey = 'videoplayer-current-time';
// created a function. by restructuring the seconds were retrieves from the object "time update" (recorded in localStorage).
function durationSavelocalstorage({ seconds }) {
  localStorage.setItem(timekey, seconds);
}
// the palayer restarted when the page was loaded
window.addEventListener('load', newStart);
// 1, 4. started the 'on' method and added a delay
player.on('timeupdate', Throttle(durationSavelocalstorage, 1000));
function newStart() {
  if (!localStorage.getItem(timekey)) {
    return;
  }
  const currentVideoTime = localStorage.getItem(timekey);
  //3. set 0 for zero listening
  player.setCurrentTime(currentVideoTime ?? 0);
}
