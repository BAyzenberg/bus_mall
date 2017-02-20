'use strict';

// object constructor
function MakeImage(url, alt) {
  this.url = url;
  this.alt = alt;
  this.votes = 0;
  this.timesShown = 0;
}

MakeImage.prototype.votePercentage = function () {
  this.shownPercentage = this.votes / this.timesShown * 100;
};

function image(url, alt) {
  var newImage = new MakeImage(url, alt);
  images.push(newImage);
}

// Display

// vote tracker

// results

var images = [];
image('img/bag.jpg', 'bag');
image('img/banana.jpg', 'banana');
image('img/bathroom.jpg', 'bathroom');
image('img/boots.jpg', 'boots');
image('img/breakfast.jpg', 'breakfast');
image('img/bubblegum', 'bubblegum');
image('img/chair.jpg', 'chair');
image('img/cthulhu.jpg', 'cthulhu');
image('img/dog-duck.jpg', 'dog-duck');
image('img/dragon.jpg', 'dragon');
image('img/pen.jpg', 'pen');
image('img/pet-sweep.jpg', 'pet-sweep');
image('img/scissors.jpg', 'scissors');
image('img/sharks.jpg', 'sharks');
image('img/sweep.jpg', 'sweep');
image('img/tauntaun.jpg', 'tauntaun');
image('img/unicorn.jpg', 'unicorn');
image('img/usb.gif', 'usb');
image('img/water-can.jpg', 'water-can');
image('img/wine-glass.jpg', 'wine-glass');
console.log('---------List of Images---------');
console.log(images);
