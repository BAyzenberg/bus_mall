'use strict';

// Global Variables
var images = [
  new Image('img/bag.jpg', 'bag'),
  new Image('img/banana.jpg', 'banana'),
  new Image('img/bathroom.jpg', 'bathroom'),
  new Image('img/boots.jpg', 'boots'),
  new Image('img/breakfast.jpg', 'breakfast'),
  new Image('img/bubblegum.jpg', 'bubblegum'),
  new Image('img/chair.jpg', 'chair'),
  new Image('img/cthulhu.jpg', 'cthulhu'),
  new Image('img/dog-duck.jpg', 'dog-duck'),
  new Image('img/dragon.jpg', 'dragon'),
  new Image('img/pen.jpg', 'pen'),
  new Image('img/pet-sweep.jpg', 'pet-sweep'),
  new Image('img/scissors.jpg', 'scissors'),
  new Image('img/shark.jpg', 'sharks'),
  new Image('img/sweep.png', 'sweep'),
  new Image('img/tauntaun.jpg', 'tauntaun'),
  new Image('img/unicorn.jpg', 'unicorn'),
  new Image('img/usb.gif', 'usb'),
  new Image('img/water-can.jpg', 'water-can'),
  new Image('img/wine-glass.jpg', 'wine-glass')
];

console.log('---------List of Images---------');
console.dir(images);

var lastSet = [];
console.log('---last Set ---');
console.log(lastSet);
var currentSet = [];
console.log('----current Set----');
console.log(currentSet);

var sumbitions = 25;

// Form Parent Node
var formEl = document.getElementById('option-set');

// simple image node creator
function createImage(url, alt, id, parentNode) {
  var element = document.createElement('img');
  element.setAttribute('src', url);
  element.setAttribute('alt', alt);
  element.setAttribute('id', id);
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
  this.shownPercentage = Math.round(this.votes / this.timesShown * 100);
};

// Display

// Index Generator
function randomIndexGenerator() {
  return Math.floor(Math.random() * images.length);
}

//display a set of images
function setImage() {
  lastSet = currentSet;
  currentSet = [];
  for (var i = 0; i < 3; i++) {
    var index = randomIndexGenerator();
    var currentImage = images[index];
    currentImage.timesShown++;
    currentSet.push(currentImage);
    //lastSet check
    for (var iLast = 0; iLast < lastSet.length; iLast++) {
      if (lastSet[iLast] === currentImage){
        i--;
        currentSet.pop();
        currentImage.timesShown++;
        continue;
      }
    }
    // currentSetCheck();
    for (var iCurrent = 0; iCurrent < currentSet.length - 1; iCurrent++) {
      if (currentSet[iCurrent] === currentImage) {
        i--;
        currentSet.pop();
        currentImage.timesShown++;
        continue;
      }
    }
  }
  console.log('current set');
  console.log(currentSet);
  console.log('last set');
  console.log(lastSet);
}

function showImage() {
  for (var j = 0; j < currentSet.length; j++) {
    if (j === 0) {
      createImage(currentSet[j].url, currentSet.alt, 'left', formEl);
    } else if (j === 1) {
      createImage(currentSet[j].url, currentSet.alt, 'center', formEl);
    } else {
      createImage(currentSet[j].url, currentSet.alt, 'right', formEl);
    }
  }
}

function burnTheChildren() {
  while (formEl.hasChildNodes()) {
    formEl.removeChild(formEl.firstChild);
  }
}

// Display the Images on the Browser
function print() {
  burnTheChildren();
  setImage();
  showImage();
}

print();

// vote tracker

// results
