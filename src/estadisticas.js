new Chart(document.getElementById("pie-chart"), {
  type: 'pie',
  data: {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [{
      label: "Population (millions)",
      backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
      data: [2478, 5267, 734, 784, 433]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    }
  }
});

(function () {
  "use strict";

  document.addEventListener('DOMContentLoaded', function () {
    console.log("Init institucion!!");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var i = urlParams.get('i')
    if (i == null) {
      i = 0;
    }
    console.log(Institucion[i][0]);
  }, false);
}
  ());