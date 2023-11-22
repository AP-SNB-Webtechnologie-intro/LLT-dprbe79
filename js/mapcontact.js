// Coördinaten voor "Spechtendreef 24, Brecht".
let map = L.map('contactMap').setView([51.2989, 4.6509], 15); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


/*
L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=94oz578Z4vTAEtS7SUbj', {
attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>', 
}).addTo(map);
*/

// Coördinaten voor "Spechtendreef 24, Brecht".
let marker = L.marker([51.2989, 4.6509]).addTo(map) 
  .bindPopup("Db-solutions BV<br>Spechtendreef 24<br>2960 Brecht, België")
  .openPopup();