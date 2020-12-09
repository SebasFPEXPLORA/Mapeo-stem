var e;

(function () {
  "use strict";

  document.addEventListener('DOMContentLoaded', function () {
    console.log("Init institucion!!");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    e = urlParams.get('i')
    if (e == null) {
      e = 0;
    }
    var nivel = Institucion[e][15];
    var i = nivel - 1;
    console.log(Institucion[e][0] + " " + nivel);

    document.getElementById("header").style.background = Recomendacion[i].background;
    document.title = Recomendacion[i].titulo;
    document.getElementById("titulo").innerHTML = Recomendacion[i].titulo;
    document.getElementById("subtitulo").innerHTML = Recomendacion[i].subtitulo;

    document.getElementById("tooltiptext0").innerHTML = Tooltips[0];
    document.getElementById("tooltiptext1").innerHTML = Tooltips[1];
    document.getElementById("tooltiptext2").innerHTML = Tooltips[2];
    document.getElementById("tooltiptext3").innerHTML = Tooltips[3];
    document.getElementById("tooltiptext4").innerHTML = Tooltips[4];
    document.getElementById("tooltiptext5").innerHTML = Tooltips[5];
    document.getElementById("tooltiptext6").innerHTML = Tooltips[6];
    document.getElementById("tooltiptext7").innerHTML = Tooltips[7];

    document.getElementById("text0").innerHTML = Recomendacion[i].texto0;
    document.getElementById("text1").innerHTML = Recomendacion[i].texto1;
    document.getElementById("text2").innerHTML = Recomendacion[i].texto2;
    document.getElementById("text3").innerHTML = Recomendacion[i].texto3;
    document.getElementById("text4").innerHTML = Recomendacion[i].texto4;
    document.getElementById("text5").innerHTML = Recomendacion[i].texto5;
    document.getElementById("text6").innerHTML = Recomendacion[i].texto6;
    document.getElementById("text7").innerHTML = Recomendacion[i].texto7;
 
    // document.getElementById("nivelimg").src = "assets/institucion/nivel" + Institucion[i][15] + ".png";
  }, false);
}
  ()); 

function openInstitucion() {
  location.href = 'institucion.html?i=' + e;
}