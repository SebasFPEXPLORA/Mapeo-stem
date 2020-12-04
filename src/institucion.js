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

    document.getElementById("institucion").innerHTML = Institucion[i][0];
    document.getElementById("rector").innerHTML = Institucion[i][5];
    document.getElementById("email").innerHTML = Institucion[i][6];
    document.getElementById("nivelimg").src = "assets/institucion/nivel" + Institucion[i][15] + ".png";

    new Chart(document.getElementById("radar-chart"), {
      type: 'radar',
      data: {
        labels: [['Metodologías', 'activas'], ['Integración', 'curricular'], ["Evaluación de", "aprendizajes"], ["Formación", "de maestros", "y directivos"], ["Liderazgo", "institucional"], ["Gestión del", "conocimiento"], ["Ambientes de", "aprendizaje"], ["Alianzas"]],
        datasets: [
          {
            label: "",
            fill: true,
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(153,0,255,1)",
            pointBorderColor: "#9900FF",
            pointBackgroundColor: "rgba(153,0,255,1)",
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