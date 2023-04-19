import L from 'leaflet';
export default () => {
    const map=L.map('map').setView([54.175481,17.487995], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    const marker = L.marker([54.175481,17.487995]).addTo(map);
}
