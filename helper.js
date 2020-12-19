(() => {
let rewind = document.querySelector('.adblFastRewind');
if (!rewind) return;
let forward = document.querySelector('.adblFastForward');
if (!forward) return;

if (!'mediaSession' in navigator) return;

navigator.mediaSession.setActionHandler( 'previoustrack', () => {
  rewind.click();
});
navigator.mediaSession.setActionHandler('nexttrack', () => {
  forward.click();
});

await navigator.wakeLock.request('screen');

})();