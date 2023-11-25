
 // Functie om het GET-verzoek uit te voeren
 function getIpAddress() {
    // Maak een XMLHttpRequest-object aan
    let xhr = new XMLHttpRequest();

    // Configureer het verzoek
    xhr.open("GET", "https://api.ipify.org/?format=json", true);

    // Voeg een eventlistener toe om het antwoord te verwerken
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Parseer het JSON-antwoord
            var response = JSON.parse(xhr.responseText);

            // Haal het IP-adres op en toon het op de pagina
            var ipAddress = response.ip;
            document.getElementById("ipAddress").innerHTML = "Jouw geregistreerd IP-adres is: " + ipAddress;
        }
    };

    // Stuur het verzoek
    xhr.send();
}

// Roep de functie aan bij het laden van de pagina
window.onload = function () {
    getIpAddress();
};
