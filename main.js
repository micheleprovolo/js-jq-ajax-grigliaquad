// DESCRIZIONE:
// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

$(document).ready(function () {

    // al click sul blocco...
    $(".block").click(function () {

        var clicked = $(this);

        $.ajax({
            url: "https://flynn.boolean.careers/exercises/api/random/int",
            method: "GET",
            success: function (data) {
                console.log("hey è andata tutto bene!");
                console.log(data);

                // inserisco dentro il blocco cliccato il risultato dell'API
                clicked.text(data.response);

                // se il risultato è minore o uguale a 5 coloro il blocco di giallo
                if (data.response <= 5) {
                    clicked.css("background", "yellow");

                // altrimenti lo coloro di verde
                } else {
                    clicked.css("background", "green");
                }

                // spengo la possibilità di cliccare sul blocco
                clicked.off("click");
            },
            error: function (stato) {
                console.log("c'è stato un errore: " + stato);
            }

        });

    });
});