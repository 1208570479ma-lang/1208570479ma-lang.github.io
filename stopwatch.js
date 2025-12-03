// Simple stopwatch: click Start -> begin timing; click again -> reset to 0
(function(){
  const btn = document.getElementById('swBtn');
  const display = document.getElementById('swDisplay');
  let timer = null;
  let startTime = 0;
  let running = false;

  function formatTime(ms){
    const total = Math.floor(ms);
    const minutes = Math.floor(total / 60000);
    const seconds = Math.floor((total % 60000) / 1000);
    const hundredths = Math.floor((total % 1000) / 10);
    return String(minutes).padStart(2,'0') + ':' + String(seconds).padStart(2,'0') + '.' + String(hundredths).padStart(2,'0');
  }

  function update(){
    const now = Date.now();
    const elapsed = now - startTime;
    display.textContent = formatTime(elapsed);
  }

  btn && btn.addEventListener('click', function(){
    if(!running){
      // start
      startTime = Date.now();
      update();
      timer = setInterval(update, 50);
      running = true;
      btn.textContent = 'Reset';
      btn.classList.add('running');
    }else{
      // reset
      clearInterval(timer);
      timer = null;
      running = false;
      display.textContent = '00:00.00';
      btn.textContent = 'Start';
      btn.classList.remove('running');
    }
  });
})();
