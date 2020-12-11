var i;
var radarChart;
var experiencias;

(function () {
  "use strict";

  document.addEventListener('DOMContentLoaded', function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    i = urlParams.get('i')
    if (i == null) {
      i = 0;
    }

    document.getElementById("institucion").innerHTML = Institucion[i][0];
    document.getElementById("rector").innerHTML = Institucion[i][5];
    document.getElementById("email").innerHTML = Institucion[i][6];
    document.getElementById("nivelimg").src = "assets/institucion/nivel" + Institucion[i][15] + ".png";
    radarChart = document.getElementById("radar-chart");
    experiencias = document.getElementById("experiencias");
    experiencias.style.display = "none";

    document.getElementById("numParticipantes").innerHTML = "En esta institución los estudiantes están participando en " + Institucion[i][16] + " experiencias Ser+STEM:";

    var listExp = document.getElementById("listExp");
    for (var e = 0; e < Institucion[i][16]; e++) {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(Institucion[i][17 + e]));
      listExp.appendChild(li);
    }

    new Chart(radarChart, {
      type: 'radar',
      data: {
        labels: [['Metodologías', 'activas'], ['Integración', 'curricular'], ["Evaluación de", "aprendizajes"], ["Formación", "de maestros", "y directivos"], ["Liderazgo", "institucional"], ["Gestión del", "conocimiento"], ["Ambientes de", "aprendizaje"], ["Alianzas"]],
        datasets: [
          {
            label: "",
            fill: true,
            backgroundColor: "rgba(153,68,131,0.1)",
            borderColor: "#994483",
            pointBorderColor: "#994483",
            pointBackgroundColor: "#994483",
            pointRadius: 5,
            data: [Institucion[i][7], Institucion[i][8], Institucion[i][9], Institucion[i][10], Institucion[i][11], Institucion[i][12], Institucion[i][13], Institucion[i][14]]
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
  }, false);
}
  ());


function openDiagnostico() {
  radarChart.style.display = "block";
  experiencias.style.display = "none";
  document.getElementById('bDiagnostico').src = "assets/institucion/diagnostico_on.png";
  document.getElementById('bExperiencias').src = "assets/institucion/experiencias.png";
}

function openRecomendaciones() {
  location.href = 'recomendaciones.html?i=' + i;
}

function openExperiencias() {
  radarChart.style.display = "none";
  experiencias.style.display = "block";
  document.getElementById('bDiagnostico').src = "assets/institucion/diagnostico.png";
  document.getElementById('bExperiencias').src = "assets/institucion/experiencias_on.png";
}