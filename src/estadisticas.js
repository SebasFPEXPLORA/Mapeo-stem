var i;
var piechart;
var radarchart;
var comuna = 0;
var cantidad = [];
var initialized = false;
var modal;
var modalContent;

(function () {
  "use strict";

  document.addEventListener('DOMContentLoaded', function () {
    updatePie(0);

    modal = document.getElementById("myModal");
    modalContent = document.getElementById("modal-content");
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
      modal.style.display = "none";
    }

    var buttons = [22];

    for (e = 0; e < 22; e++) {
      i = e + 1;
      if (e === 21)
        i = 0;
      buttons[i] = document.createElement("img");
      buttons[i].src = "assets/estadisticas/" + i + ".png";
      buttons[i].index = i;
      buttons[i].style.padding = "0px 10px 5px 0px";
      modalContent.appendChild(buttons[i]);
      buttons[i].addEventListener("click", function () {
        comuna = this.index;
        if (comuna > 16)
          comuna = (50 + 10 * (comuna - 17));
        updatePie(comuna);
        modal.style.display = "none";
      });
    }

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

  }, false);
}
  ());

function elegirComuna() {
  modal.style.display = "block";
}

function updatePie(value) {
  if (piechart) {
    piechart.destroy();
  }
  if (radarchart) {
    radarchart.destroy();
  }
  comuna = value;
  for (i = 0; i < 4; i++) {
    cantidad[i] = 0;
  }
  var numexperiencias = 0;
  var puntos = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ];
  var cnt = [0, 0, 0, 0];
  for (i = 0; i < Institucion.length; i++) {
    if (comuna === 0 || comuna === Institucion[i][4]) {
      var nivel = [Institucion[i][15]];
      cantidad[nivel - 1]++;
      numexperiencias += Institucion[i][16];
      cnt[nivel - 1]++;
      for (e = 0; e < 8; e++) {
        puntos[nivel - 1][e] += Institucion[i][7 + e];
      }
    }
  }

  for (i = 0; i < 4; i++) {
    for (e = 0; e < 8; e++) {
      puntos[i][e] /= cnt[i];
    }
  }

  numinstituciones = cantidad[0] + cantidad[1] + cantidad[2] + cantidad[3];
  document.getElementById("numinstituciones").innerHTML = numinstituciones;
  document.getElementById("numexperiencias").innerHTML = numexperiencias;
  if (value === 0)
    document.getElementById("titulo").innerHTML = "Relación instituciones y niveles Ser+STEM";
  else
    document.getElementById("titulo").innerHTML = "Relación instituciones y niveles Ser+STEM : Comuna " + value;
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
          borderWidth: 0, 
          borderColor: '#333'
        }
      },
      title: {
        display: false,
        text: 'Estadísticas'
      }
    }
  });

  radarchart = new Chart(document.getElementById("radar-chart"), {
    type: 'radar',
    data: {
      labels: [['Metodologías', 'activas'], ['Integración', 'curricular'], ["Evaluación de", "aprendizajes"], ["Formación", "de maestros", "y directivos"], ["Liderazgo", "institucional"], ["Gestión del", "conocimiento"], ["Ambientes de", "aprendizaje"], ["Alianzas"]],
      datasets: [
        {
          label: "Exploratorio",
          fill: true,
          backgroundColor: "rgba(179,181,198,0)",
          borderColor: "#DE7342",
          pointBorderColor: "#DE7342",
          pointBackgroundColor: "#DE7342",
          pointRadius: 5,
          data: [puntos[0][0], puntos[0][1], puntos[0][2], puntos[0][3], puntos[0][4], puntos[0][5], puntos[0][6], puntos[0][7]]
        },
        {
          label: "",
          fill: true,
          backgroundColor: "rgba(179,181,198,0)",
          borderColor: "#FBD55B",
          pointBorderColor: "#FBD55B",
          pointBackgroundColor: "#FBD55B",
          pointRadius: 5,
          data: [puntos[1][0], puntos[1][1], puntos[1][2], puntos[1][3], puntos[1][4], puntos[1][5], puntos[1][6], puntos[1][7]]
        },
        {
          label: "",
          fill: true,
          backgroundColor: "rgba(179,181,198,0)",
          borderColor: "#219EA6",
          pointBorderColor: "#219EA6",
          pointBackgroundColor: "#219EA6",
          pointRadius: 5,
          data: [puntos[2][0], puntos[2][1], puntos[2][2], puntos[2][3], puntos[2][4], puntos[2][5], puntos[2][6], puntos[2][7]]
        },
        {
          label: "",
          fill: true,
          backgroundColor: "rgba(179,181,198,0)",
          borderColor: "#994483",
          pointBorderColor: "#994483",
          pointBackgroundColor: "#994483",
          pointRadius: 5,
          data: [puntos[3][0], puntos[3][1], puntos[3][2], puntos[3][3], puntos[3][4], puntos[3][5], puntos[3][6], puntos[3][7]]
        }
      ]
    },
    options: {
      scale: {
        gridLines: {
          circular: true
        },
        ticks: {
          beginAtZero: true,
          max: 5,
          maxTicksLimit: 6
        },
        pointLabels: {
          fontSize: 13
        }
      },
      legend: {
        display: false,
        labels: {
          fontColor: 'black',
          fontSize: 20
        }
      }
    }
  });
}





