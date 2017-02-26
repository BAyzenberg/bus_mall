'use strict';

var names = [];
var votes = [];
var timesShown = [];
var percetentages = [];
var votesTotal = [];
var timesShownTotal = [];
var percentagesTotal = [];
var backgroundColors = ['blue', 'orange', 'yellow', 'green', 'purple', 'red', 'pink', 'darkblue', 'black', 'aqua', 'coral', 'brown', 'cyan', 'goldenrod', 'grey', 'magenta', 'olive', 'tan', 'teal', 'salmon'];

var resultsEl = document.getElementById('results');
var percentageEl = document.getElementById('percentages');
var resultsTotalEl = document.getElementById('total-results');
var percentagesTotalEl = document.getElementById('total-percentages');

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
    percentagesTotal.push(imagesTotal[iResults].percentages);
    // console.log(images[iResults]);
  }
  new Chart(resultsEl, votesData);
  new Chart(percentageEl, percentageData);
  new Chart(resultsTotalEl, votesDataTotal);
  // new Chart(percentagesTotalEl, percentageDataTotal);
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
    responsive: false,
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
    responsive: false,
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
    responsive: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
};
// var percentageDataTotal = {
//   type: 'radar',
//   data: {
//     labels: names,
//     datasets: [{
//       label: 'Percentages of total times clicked per shown',
//       data: percetentages,
//       backgroundColor: backgroundColors
//     }]
//   },
//   options: {
//     scales: {
//       yAxes: {
//         ticks: {
//           beginAtZero: true
//         }
//       }
//     }
//   }
// };
showResults();
