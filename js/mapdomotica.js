let map = L.map('map').setView([51.14301, 4.16186], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker = L.marker([51.14301, 4.16186]).addTo(map) 
  .bindPopup("Niko Showroom<br>Industriepark West 40<br> 9100 Sint-Niklaas, België")
  .openPopup();
