const board = document.querySelector('#board');
const colors = ['#c639ab', '#39c654', '#ec132d', '#13ecd2', '#6613ec', '#eaef10', '#7d1de2', '#131bec' ]
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    // square.addEventListener('mouseover' || 'touchstart', () => 
    //     setColor(square)
    // );

    square.addEventListener('touchstart', () => 
    setColor(square)
    );

    // square.addEventListener('mouseleave' || 'touchend', () => 
    //     removeColor(square)
    // );

    square.addEventListener('touchend', () => 
    removeColor(square)
    );

    board.append(square);
};

function setColor(element) {
    const color = getRandomColor()
  element.style.backgroundColor = color // 'red'
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
};

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000'
};

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}