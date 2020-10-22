const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
}

const timer = {
  colorChange: null,
  randomIntegerFromInterval: (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
},
  onStartClick() {
    refs.start.disabled = true;
 this.colorChange =  setInterval(() => { 
    let randomColor = 0;
    randomColor = this.randomIntegerFromInterval(0, colors.length);
   refs.body.style.backgroundColor = colors[randomColor];
   
  }, 1000)
  },

onStopClick() {
  clearInterval(this.colorChange);
  refs.body.style.backgroundColor = 'white';
  refs.start.disabled = false;
},
}

refs.start.addEventListener('click', timer.onStartClick.bind(timer));
refs.stop.addEventListener('click', timer.onStopClick.bind(timer));