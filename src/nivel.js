(function () {
  "use strict";

  document.addEventListener('DOMContentLoaded', function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var i = urlParams.get('i')
    if (i == null) {
      i = 0;
    }

    document.getElementById("nivelimg").src = "assets/nivel/" + Nivel[i].img;
    document.title = Nivel[i].titulo;
    document.getElementById("titulo").innerHTML = Nivel[i].titulo;
    document.getElementById("subtitulo").innerHTML = Nivel[i].subtitulo;

    document.getElementById("tooltiptext0").innerHTML = Tooltips[0];
    document.getElementById("tooltiptext1").innerHTML = Tooltips[1];
    document.getElementById("tooltiptext2").innerHTML = Tooltips[2];
    document.getElementById("tooltiptext3").innerHTML = Tooltips[3];
    document.getElementById("tooltiptext4").innerHTML = Tooltips[4];
    document.getElementById("tooltiptext5").innerHTML = Tooltips[5];
    document.getElementById("tooltiptext6").innerHTML = Tooltips[6];
    document.getElementById("tooltiptext7").innerHTML = Tooltips[7];

    document.getElementById("text0").innerHTML = Nivel[i].texto0;
    document.getElementById("text1").innerHTML = Nivel[i].texto1;
    document.getElementById("text2").innerHTML = Nivel[i].texto2;
    document.getElementById("text3").innerHTML = Nivel[i].texto3;
    document.getElementById("text4").innerHTML = Nivel[i].texto4;
    document.getElementById("text5").innerHTML = Nivel[i].texto5;
    document.getElementById("text6").innerHTML = Nivel[i].texto6;
    document.getElementById("text7").innerHTML = Nivel[i].texto7;
 
  }, false);
}
  ()); 

