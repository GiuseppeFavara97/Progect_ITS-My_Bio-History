var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor(nome, cognome, province, email, specializzazione, numLicenza) {
        var _this = _super.call(this, nome, cognome, province, email) || this;
        _this.specializzazione = specializzazione;
        _this.numLicenza = numLicenza;
        return _this;
    }
    Doctor.prototype.mostraDettagliDoctor = function () {
        console.log("Dr. ".concat(this.nome, " ").concat(this.cognome, ", Specializzazione: ").concat(this.specializzazione, ", Numero Licenza: ").concat(this.numLicenza));
    };
    return Doctor;
}(User));
var medico1 = new Doctor("Giulia", "Verdi", "Palermo", "giulia.verdi@email.com", "Cardiologia", "DOC12345");
medico1.mostraDettagli(); // Mostra i dati generali ereditati da User
medico1.mostraDettagliDoctor(); // Mostra i dati specifici del medico
