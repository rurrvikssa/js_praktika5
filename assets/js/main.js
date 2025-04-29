// 1
const hidebtn = document.getElementById('hidebtn');

hidebtn.addEventListener('click', function () {
  hidebtn.style.display = 'none';
});

// 2
const toggleTextBtn = document.querySelector('.toggleTextBtn');
const textBlock = document.getElementById('text');

toggleTextBtn.addEventListener('click', function () {
  if (textBlock.style.display === 'none') {
    textBlock.style.display = 'block';
    toggleTextBtn.textContent = 'Скрыть текст';
  } else {
    textBlock.style.display = 'none';
    toggleTextBtn.textContent = 'Показать текст';
  }
});

// цвет фона 
let isColored = false;

document.addEventListener('keydown', function (e) {
  if (isColored) {
    document.body.style.backgroundColor = '';
    isColored = false;
    return;
  }

  switch (e.code) {
    case 'KeyR':
      document.body.style.backgroundColor = 'red';
      isColored = true;
      break;
    case 'KeyG':
      document.body.style.backgroundColor = 'green';
      isColored = true;
      break;
    case 'KeyB':
      document.body.style.backgroundColor = 'blue';
      isColored = true;
      break;
  }
});

// перемещение блока 
const moveBlock = document.getElementById('moveBlock');
let posX = 0;
let posY = 0;

document.addEventListener('keydown', function (e) {
  switch (e.code) {
    case 'KeyW':
      posY -= 1;
      break;
    case 'KeyS':
      posY += 1;
      break;
    case 'KeyA':
      posX -= 1;
      break;
    case 'KeyD':
      posX += 1;
      break;
    default:
      return;
  }

  moveBlock.style.transform = `translate(${posX}px, ${posY}px)`;
});
