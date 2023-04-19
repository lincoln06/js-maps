import L from 'leaflet';

export default () => {
    const mapEl = document.getElementById('map');
    if (mapEl) {
        const map = L.map(mapEl,{
            center: [54.4524299,17.0418873],
            zoom: 14,
            gestureHandling: true
        });
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 25,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        const marker = L.marker([54.4524299,17.0418873]).addTo(map);

        marker.bindPopup("<b>Tutaj teraz jest Akademia</b><br>A od czerwca będzie Uniwersytet.");

    }
}

