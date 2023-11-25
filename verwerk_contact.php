<?php
// Controleer of het formulier is verzonden
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Controleer of de vereiste velden zijn ingevuld
    if (isset($_POST["voornaam"]) && isset($_POST["achternaam"]) && isset($_POST["email"]) && isset($_POST["Contact"])) {
        // Ontvang de formuliergegevens
        $voornaam = $_POST["voornaam"];
        $achternaam = $_POST["achternaam"];
        $email = $_POST["email"];
        $mobiel = isset($_POST["mobiel"]) ? $_POST["mobiel"] : "";
        $contactOptie = $_POST["Contact"];
        $bericht = isset($_POST["tekstveld"]) ? $_POST["tekstveld"] : "";

        // Stel het e-mailadres in waar het formulier naartoe moet worden verzonden
        $ontvanger = "bert@db-solutions.be";

        // Onderwerp van het e-mailbericht
        $onderwerp = "Contactformulier Inzending - $voornaam $achternaam";

        // Opbouwen van het e-mailbericht
        $berichtInhoud = "Naam: $voornaam $achternaam\n";
        $berichtInhoud .= "E-mail: $email\n";
        $berichtInhoud .= "Mobiel: $mobiel\n";
        $berichtInhoud .= "Contactoptie: $contactOptie\n";
        $berichtInhoud .= "Bericht:\n$bericht";

        // Headers voor het e-mailbericht
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        // Verzend het e-mailbericht
        $success = mail($ontvanger, $onderwerp, $berichtInhoud, $headers);

        // Controleer of het e-mailbericht met succes is verzonden
        if ($success) {
            echo "Bedankt, $voornaam $achternaam! Uw bericht is verzonden.";
        } else {
            echo "Er is een probleem opgetreden bij het verzenden van het bericht. Probeer het opnieuw.";
        }

    } else {
        // Als niet alle vereiste velden zijn ingevuld, geef een foutmelding weer
        echo "Niet alle vereiste velden zijn ingevuld. Vul alstublieft alle verplichte velden in.";
    }
} else {
    // Als het formulier niet is verzonden via POST, geef een foutmelding weer
    echo "Er is een probleem opgetreden bij het verzenden van het formulier. Probeer het opnieuw.";
}
?>
