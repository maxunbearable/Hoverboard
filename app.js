const board = document.querySelector('#board')
const SQUARES_NUMBER = 1044;
const header = document.querySelector('.page-header')
const footer = document.querySelector('.footer-text')


for (let i = 0; i < SQUARES_NUMBER; i++) {
const square = document.createElement('div')
square.classList.add('square')

square.addEventListener('mouseover', setColor)
square.addEventListener('mouseleave', removeColor)
board.append(square)
}

function setColor(event) {
    const element = event.target
    let RandomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' +    colorValue() + ')';
    const color = RandomColor;
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    header.style.color = color;
    header.style.textShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    footer.style.color = color;
    footer.style.textShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '';
    element.style.boxShadow = ``;
    header.style.textShadow = ``;
    header.style.color = '';
    footer.style.textShadow = ``;
    footer.style.color = '';

}

function colorValue() {
    return Math.floor(Math.random() * 256);
  }