const accessToken = 'pk.eyJ1IjoibWFwc29mc3VtaXQiLCJhIjoiY2l1ZDF3dHE5MDAxZDMwbjA0cTR3dG50eSJ9.63Xci-GKFikhAobboF0DVQ';

// set mapbox tile layer
const mapboxTiles1 = L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
    attribution:
        '&copy; <a href="https://www.mapbox.com/feedback/">Mapbox</a> &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
});


const map = L.map('example')
    .setView([22.585959993714713, 114.05181884765626], 12)
    .addLayer(mapboxTiles1);
map.on('click', (e) => {
    console.log(e);
});
map.pm.addControls({
    drawMarker: true,
    drawPolygon: true,
    editPolygon: true,
    drawPolyline: true,
    deleteLayer: true,
});

fetch('./data/road_sim_wgs.geojson').then(res => res.json()).then((data) => {
    console.log(data);
    L.geoJSON(data).addTo(map);
});

const test = [1, 2, 3];

const test2 = test;
const test3 = test.concat([4]);
console.log(test3 === test2, test3, test);
map.on('zoomend moveend', () => {
    console.log(map.getPixelBounds(),map.getBounds());
    // console.log(L.CRS.project(L.latLng(22.893887925815527,114.7624969482422)))
});
