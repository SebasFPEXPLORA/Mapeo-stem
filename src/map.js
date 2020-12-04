var map;
var minzoom;
var maxzoom;
var nivelOn = [true, true, true, true, true];
var instituciones = [];

(function () {
    "use strict";

    document.addEventListener('DOMContentLoaded', function () {
        var ImageSize = { width: 5898, height: 4443 };
        console.log("Init map");
        map = L.map('map', {
            crs: L.CRS.Simple,
            zoomSnap: 0.1,
            minZoom: -3,
            maxZoom: 3,
            //     zoom: -2,
            zoomControl: false,
            attributionControl: false
        });

        var icons = [];
        var i;
        for (i = 0; i < 5; i++) {
            icons[i] = L.icon({
                iconUrl: 'assets/mapa/p' + i + '.png',
                shadowUrl: 'assets/mapa/psombra.png',
                iconSize: [26, 39], // size of the icon
                shadowSize: [46, 33], // size of the shadow
                iconAnchor: [13, 40], // point of the icon which will correspond to marker's location
                shadowAnchor: [8, 26],  // the same for the shadow
                popupAnchor: [20, -42], // point from which the popup should open relative to the iconAnchor
                tooltipAnchor: [12, -30]
            });
        }

        var yx = L.latLng;

        var xy = function (x, y) {
            if (L.Util.isArray(x)) {    // When doing xy([x, y]);
                return yx(x[1], x[0]);
            }
            return yx(y, x);  // When doing xy(x, y);
        };

        var bounds = [xy(0, 0), xy(ImageSize.width, ImageSize.height)];
        var image = L.imageOverlay('assets/mapa/mapa.png', bounds).addTo(map);
        for (i = 0; i < Lugar.length; i++) {
            var x1 = 3419 + (Lugar[i][1] + 75.55744474) / 0.0000808232;
            var y1 = 1224 + (Lugar[i][2] - 6.175762553) / 0.0000749919;
            var xdelta = Lugar[i][4] / 2;
            var ydelta = Lugar[i][5] / 2;
            var bounds2 = [xy(x1 - xdelta, y1 - ydelta), xy(x1 + xdelta, y1 + ydelta)];
            L.rectangle(bounds2, { color: "#ff00ff00", weight: 0 }).bindTooltip(Lugar[i][0]).addTo(map);
        }


        var institucionGroup = L.featureGroup().addTo(map).on("click", institucionClick);
        for (i = 0; i < Institucion.length; i++) {
            var x1 = 3450 + (Institucion[i][2] + 75.55744474) / 0.000077;
            var y1 = 1224 + (Institucion[i][3] - 6.175762553) / 0.0000749919;
            instituciones[i] = L.marker(xy(x1, y1), { icon: icons[Institucion[i][15]] }).addTo(institucionGroup).bindTooltip(Institucion[i][0]).addTo(map);
            instituciones[i].index = i;
        }

        function institucionClick(event) {
            location.href = 'institucion.html?i=' + event.layer.index;
        }

        map.setView(xy(ImageSize.width / 2, ImageSize.height / 2), -1);
    }, false);
}
    ());

function toogleExploratorio() {
    if (nivelOn[1] === true) {
        document.getElementById('bExploratorio').src = "assets/mapa/exploratorio_on.png";
        nivelOn[1] = false;
    }
    else {
        document.getElementById('bExploratorio').src = "assets/mapa/exploratorio.png";
        nivelOn[1] = true;
    }
    turnInstituciones();
}

function toogleIntroductorio() {
    if (nivelOn[2] === true) {
        document.getElementById('bIntroductorio').src = "assets/mapa/introductorio_on.png";
        nivelOn[2] = false;
    }
    else {
        document.getElementById('bIntroductorio').src = "assets/mapa/introductorio.png";
        nivelOn[2] = true;
    }
    turnInstituciones();
}

function toogleIntermedio() {
    if (nivelOn[3] === true) {
        document.getElementById('bIntermedio').src = "assets/mapa/intermedio_on.png";
        nivelOn[3] = false;
    }
    else {
        document.getElementById('bIntermedio').src = "assets/mapa/intermedio.png";
        nivelOn[3] = true;
    }
    turnInstituciones();
}

function toogleAvanzado() {
    if (nivelOn[4] === true) {
        document.getElementById('bAvanzado').src = "assets/mapa/avanzado_on.png";
        nivelOn[4] = false;
    }
    else {
        document.getElementById('bAvanzado').src = "assets/mapa/avanzado.png";
        nivelOn[4] = true;
    }
    turnInstituciones();
}

function turnInstituciones() {
    for (i = 0; i < Institucion.length; i++) {
        if (nivelOn[Institucion[i][15]] === true)
            this.map.addLayer(instituciones[i]);
        else
            map.removeLayer(instituciones[i]);
    }
}

function zoomMas() {
    map.setZoom(map.getZoom() + 1);
}

function zoomMenos() {
    map.setZoom(map.getZoom() - 1);
}

