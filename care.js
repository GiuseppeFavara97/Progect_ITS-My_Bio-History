"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var Care = /** @class */ (function () {
    function Care(name, description, duration, dailyfrequency) {
        this.name = name;
        this.description = description;
        this.duration = duration;
        this.dailyfrequency = dailyfrequency;
    }
    return Care;
}());
function inserimento() {
    var arraydi = [];
    var a = 0;
    function chiedi() {
        if (a < 2) {
            inquirer_1.default.prompt([
                { type: 'input', name: 'name', message: 'Inserisci il nome del trattamento' },
                { type: 'input', name: 'descriz', message: 'Inserisci la descrizione' },
                { type: 'input', name: 'duratio', message: 'Inserisci la durata' },
                { type: 'input', name: 'daily', message: 'Inserisci la frequenza' }
            ]).then(function (answers) {
                arraydi.push(new Care(answers.name, answers.descriz, Number(answers.duratio), Number(answers.daily)));
                a++;
                chiedi();
            });
        }
        else {
            console.log(arraydi); // controllo il contentuto dell'array
            for (var i = 0; i < arraydi.length; i++) {
                console.log(arraydi[i].name); // controllo il contenuto dell'oggetto
                console.log(arraydi[i].description); // controllo il contenuto dell'oggetto
                console.log(arraydi[i].duration); // controllo il contenuto dell'oggetto
                console.log(arraydi[i].dailyfrequency); // controllo il contenuto dell'oggetto
            }
        }
    }
    chiedi();
}
inserimento();
