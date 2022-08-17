function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  const startBTN = document.querySelector('button[data-start]');
  const stopBTN = document.querySelector('button[data-stop]');
  const body = document.querySelector('body');
  
  let timer = 0; 
  startBTN.addEventListener('click', colorChanger);
  stopBTN.addEventListener('click', () => { clearInterval(timer); startBTN.disabled = false; stopBTN.disabled = true; });
  const DELAY = 1000;
  
  function colorChanger() {
      timer = setInterval(() => {
          const color = getRandomHexColor()
          body.style.backgroundColor = color;
      }, DELAY);
      startBTN.disabled=true;
      stopBTN.disabled = false;
  }
  
  
