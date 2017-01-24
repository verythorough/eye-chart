var letterArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    numLetters = letterArray.length;

//Fisher-Yates shuffle
function shuffle (array) {
  let i, j, temp;
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
  
function scrambleLetters () {
  let letterDivs = document.querySelectorAll('.ltr'),
      i = 0;
  shuffle(letterArray);
  for (i; i < numLetters; i++) {
    letterDivs[i].textContent = letterArray[i];
  }
}

scrambleLetters();

var scrambleBtn = document.createElement('button');
scrambleBtn.setAttribute('type', 'button');
scrambleBtn.name = 'scramble';
scrambleBtn.textContent = 'Scramble letters';
scrambleBtn.addEventListener('click', scrambleLetters);
document.getElementById('interface').appendChild(scrambleBtn);
