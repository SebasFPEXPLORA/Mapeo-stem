var i;
var piechart;
var comuna = 0;
var cantidad = [];
var initialized = false;

(function () {
  "use strict";

  document.addEventListener('DOMContentLoaded', function () {
    updatePie(0);
  }, false);
}
  ());

function elegirComuna() {
  comuna = Math.floor(Math.random() * 10) + 1;
  updatePie(comuna);
}

function updatePie(value) {
  if (piechart) {
    piechart.destroy();
    console.log("destroy");
  }
  comuna = value;
  for (i = 0; i < 4; i++) {
    cantidad[i] = 0;
  }
  var numexperiencias = 0;
  for (i = 0; i < Institucion.length; i++) {
    if (comuna === 0 || comuna === Institucion[i][4]) {
      var nivel = [Institucion[i][15]];
      cantidad[nivel - 1]++;
      numexperiencias += Institucion[i][16];
    }
  }
  numinstituciones = cantidad[0] + cantidad[1] + cantidad[2] + cantidad[3];
  document.getElementById("numinstituciones").innerHTML = numinstituciones;
  document.getElementById("numexperiencias").innerHTML = numexperiencias;
  init();
}

function init() {
  piechart = new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Exploratorio", "Introductorio", "Intermedio", "Avanzado"],
      datasets: [{
        label: "Nivel Stem",
        backgroundColor: ["#DE7342", "#FBD55B", "#219EA6", "#994483"],
        data: [cantidad[0], cantidad[1], cantidad[2], cantidad[3]]
      }]
    },
    options: {
      elements: {
        arc: {
          borderWidth: 0, // <-- Set this to zero
          borderColor: '#333'
        }
      },
      title: {
        display: false,
        text: 'Estadísticas'
      }
    }
  })
}

