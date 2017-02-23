'use strict';

var votes = [];
var names = [];
var votesTotal = [];
var timesShownTotal = [];
var percetentages = [];
var timesShown = [];
var backgroundColors = ['blue', 'orange', 'yellow', 'green', 'purple', 'red', 'pink', 'darkblue', 'black', 'aqua', 'coral', 'brown', 'cyan', 'goldenrod', 'grey', 'magenta', 'olive', 'tan', 'teal', 'salmon'];

var resultsEl = document.getElementById('results');
var percentageEl = document.getElementById('percentages');
var resultsTotalEl = document.getElementById('total-results');

var images = JSON.parse(localStorage.images);
var imagesTotal = JSON.parse(localStorage.imagesTotal);

// console.log(images);

function showResults() {
  for (var iResults = 0; iResults < images.length; iResults++) {
    names.push(images[iResults].alt);
    votes.push(images[iResults].votes);
    percetentages.push(images[iResults].pickPercentage);
    timesShown.push(images[iResults].timesShown);
    votesTotal.push(imagesTotal[iResults].votes);
    timesShownTotal.push(imagesTotal[iResults].timesShown);
    // console.log(images[iResults]);
  }
  new Chart(resultsEl, votesData);
  new Chart(percentageEl, percentageData);
  new Chart(resultsTotalEl, votesDataTotal);
}

var votesData = {
  type: 'bar',
  data: {
    labels: names,
    datasets: [{
      label: 'Number of votes',
      data: votes,
      backgroundColor: backgroundColors
    },
    { label: 'Number of times shown',
      data: timesShown,
      backgroundColor: 'lightgrey'
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
};
//
var percentageData = {
  type: 'radar',
  data: {
    labels: names,
    datasets: [{
      label: 'Percentages of times clicked per shown',
      data: percetentages,
      backgroundColor: backgroundColors
    }]
  },
  options: {
    scales: {
      yAxes: {
        ticks: {
          beginAtZero: true
        }
      }
    }
  }
};

var votesDataTotal = {
  type: 'bar',
  data: {
    labels: names,
    datasets: [{
      label: 'Total Number of votes',
      data: votesTotal,
      backgroundColor: backgroundColors
    },
    { label: 'Total Number of times shown',
      data: timesShownTotal,
      backgroundColor: 'lightgrey'
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
};
showResults();
