const PLAY_DURATIONS = 5000;
const videoTriggers = document.querySelectorAll('[data-video-trigger]');
let counter = 0;

function startTimer() {
  return setInterval(() => {
    counter++;
    if (counter >= videoTriggers.length) {
      counter = 0;
    }
    videoTriggers.item(counter).click();
  }, PLAY_DURATIONS);
}

let timer = startTimer();

document.querySelector('.nav-intro').addEventListener('click', (e) => {
  const clickedTrigger = e.target.closest('[data-video-trigger]');
  if (clickedTrigger) {
    counter = [...videoTriggers].indexOf(clickedTrigger);
    clearInterval(timer);
    timer = startTimer();
    const currentVideo = document.querySelector('[data-video-active]');
    const currentTarget = currentVideo.dataset.videoTarget;
    const currentTrigger = document.querySelector(`[data-video-trigger=${currentTarget}]`);
    const clickedTriggerName = clickedTrigger.dataset.videoTrigger;

    // проверка если нажали на уже и так активный линк
    if (clickedTrigger === currentTrigger) {
      return;
    }

    const needToShowVideo = document.querySelector(`[data-video-target=${clickedTriggerName}]`);

    currentVideo.classList.toggle('visually-hidden');
    currentVideo.attributes.removeNamedItem('data-video-active');

    needToShowVideo.classList.toggle('visually-hidden');
    needToShowVideo.setAttribute('data-video-active', '');

    currentTrigger.attributes.removeNamedItem('data-trigger-active');
    clickedTrigger.setAttribute('data-trigger-active', '');
  }
});
