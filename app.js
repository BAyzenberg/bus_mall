'use strict';

// Global Variables
var images = [
  new Image('img/bag.jpg', 'bag'),
  new Image('img/banana.jpg', 'banana'),
  new Image('img/bathroom.jpg', 'bathroom'),
  new Image('img/boots.jpg', 'boots'),
  new Image('img/breakfast.jpg', 'breakfast'),
  new Image('img/bubblegum', 'bubblegum'),
  // new Image('img/chair.jpg', 'chair'),
  // new Image('img/cthulhu.jpg', 'cthulhu'),
  // new Image('img/dog-duck.jpg', 'dog-duck'),
  // new Image('img/dragon.jpg', 'dragon'),
  // new Image('img/pen.jpg', 'pen'),
  // new Image('img/pet-sweep.jpg', 'pet-sweep'),
  // new Image('img/scissors.jpg', 'scissors'),
  // new Image('img/sharks.jpg', 'sharks'),
  // new Image('img/sweep.jpg', 'sweep'),
  // new Image('img/tauntaun.jpg', 'tauntaun'),
  // new Image('img/unicorn.jpg', 'unicorn'),
  // new Image('img/usb.gif', 'usb'),
  // new Image('img/water-can.jpg', 'water-can'),
  // new Image('img/wine-glass.jpg', 'wine-glass')
];

console.log('---------List of Images---------');
console.dir(images);

var lastSet = [];
console.log('---last Set ---');
console.log(lastSet);
var currentSet = [];
console.log('----current Set----');
console.log(currentSet);

// simple image node creator
function createImage(url, alt, parentNode) {
  var element = document.createElement('img');
  element.setAttribute('src', url);
  element.setAttribute('alt', alt);
  // console.log(element);
  //give the Child to the Dom
  parentNode.appendChild(element);
  return element;
}

// object constructor
function Image(url, alt) {
  this.url = url;
  this.alt = alt;
  this.votes = 0;
  this.timesShown = 0;
}

Image.prototype.votePercentage = function () {
  this.shownPercentage = this.votes / this.timesShown * 100;
};

// function image(url, alt) {
//   var newImage = new MakeImage(url, alt);
//   images.push(newImage);
// }

// Display
var formEl = document.getElementById('option-set');

// Index Generator
function randomIndexGenerator() {
  return Math.floor(Math.random() * images.length);
}

// function lastSetCheck() {
// }

// currentSetCheck
// function currentSetCheck() {
// }

function showImage() {
  lastSet = currentSet;
  currentSet = [];
  for (var i = 0; i < 3; i++) {
    var index = randomIndexGenerator();
    var currentImage = images[index];
    currentSet.push(currentImage);
    // lastSetCheck();
    //lastSet check
    for (var iLast = 0; iLast < lastSet.length; iLast++) {
      if (lastSet[iLast] === currentImage){
        i--;
        currentSet.pop();
        continue;
      }
    }
    // currentSetCheck();
    for (var iCurrent = 0; iCurrent < currentSet.length - 1; iCurrent++) {
      if (currentSet[iCurrent] === currentImage) {
        i--;
        currentSet.pop();
        continue;
      }
    }
  }
}

showImage();
console.log('----run 1 current set----');
console.log(currentSet);
showImage();
console.log('----run 2 current set');
console.log(currentSet);
console.log('----run 2 last set');
console.log(lastSet);
// vote tracker

// results
