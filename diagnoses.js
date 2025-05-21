"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var Diagnosis = /** @class */ (function () {
    function Diagnosis(date, description) {
        this.date = date;
        this.description = description;
    }
    Diagnosis.acquisizione = function () {
        return __awaiter(this, void 0, void 0, function () {
            var risp, date, risultato;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                            { type: 'input', name: 'date', message: 'Inserisci la data della diagnosi (ANNO-MESE-GIORNO)' },
                            { type: 'input', name: 'description', message: 'Inserisci la descrizione della diagnosi' },
                        ])]; // <-- parentesi aggiunta qui
                    case 1:
                        risp = _a.sent() // <-- parentesi aggiunta qui
                        ;
                        date = new Date(risp.date);
                        if (isNaN(date.getTime())) {
                            console.error('Data non valida usa il formato ANNO-MESE-GIORNO');
                            Diagnosis.acquisizione();
                            return [2 /*return*/];
                        }
                        risultato = new Diagnosis(date, risp.description);
                        Diagnosis.diagnoses.push(risultato);
                        console.log("La diagnosi Passata dalla classe \u00E8 -> Data:".concat(risultato.date, " Descrizione: ").concat(risultato.description, " "));
                        console.log(chalk_1.default.green("Diagnosi acquisita con successo!"));
                        return [2 /*return*/];
                }
            });
        });
    };
    Diagnosis.visualizza = function () {
        Diagnosis.diagnoses.forEach(function (diagnosi) {
            console.log("Data: ".concat(diagnosi.date, " Descrizione: ").concat(diagnosi.description));
        });
    };
    Diagnosis.modifica = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (Diagnosis.diagnoses.length === 0) {
                    console.log(chalk_1.default.red("Nessuna diagnosi trovata"));
                    return [2 /*return*/];
                }
                return [2 /*return*/];
            });
        });
    };
    Diagnosis.cancellazione = function () {
        return __awaiter(this, void 0, void 0, function () {
            var scelte, i, diagnosi, risposta, elementodaeliminare, diagnosieliminata, newarray, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (Diagnosis.diagnoses.length === 0) {
                            console.log(chalk_1.default.red("Nessuna diagnosi trovata"));
                            return [2 /*return*/];
                        }
                        scelte = [];
                        for (i = 0; i < Diagnosis.diagnoses.length; i++) {
                            diagnosi = Diagnosis.diagnoses[i];
                            scelte.push({
                                name: "".concat(diagnosi.date, " - ").concat(diagnosi.description),
                                value: i
                            });
                        }
                        return [4 /*yield*/, inquirer_1.default.prompt([
                                {
                                    type: 'list',
                                    name: 'sceltediagnosi',
                                    message: 'seleziona la diagnosi da cancellare',
                                    choices: scelte
                                }
                            ])];
                    case 1:
                        risposta = _a.sent();
                        elementodaeliminare = risposta.sceltediagnosi;
                        diagnosieliminata = Diagnosis.diagnoses[elementodaeliminare];
                        newarray = [];
                        for (i = 0; i < Diagnosis.diagnoses.length; i++) {
                            if (i !== elementodaeliminare) {
                                newarray.push(Diagnosis.diagnoses[i]);
                            }
                        }
                        Diagnosis.diagnoses = newarray;
                        console.log(chalk_1.default.red("Diagnosi eliminata: ".concat(diagnosieliminata.date, " - ").concat(diagnosieliminata.description)));
                        return [2 /*return*/];
                }
            });
        });
    };
    Diagnosis.diagnoses = []; // Creo e inizializzo un array vuoto di oggetti Diagnosis
    return Diagnosis;
}());
console.log(" Scegli un opzione: ");
function acqui() {
    return __awaiter(this, void 0, void 0, function () {
        var risposta, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                        { type: 'list', name: 'scelta', message: 'Vuoi acquisire una nuova diagnosi?', choices: [
                                { name: 'Inserimento', value: 'create' },
                                { name: 'Visualizza', value: 'read' },
                                { name: 'Modifica', value: 'update' },
                                { name: 'Cancellazione', value: 'delete' },
                                { name: 'Esci', value: 'esci' }
                            ]
                        }
                    ])];
                case 1:
                    risposta = _b.sent();
                    _a = risposta.scelta;
                    switch (_a) {
                        case 'create': return [3 /*break*/, 2];
                        case 'read': return [3 /*break*/, 4];
                        case 'update': return [3 /*break*/, 6];
                        case 'delete': return [3 /*break*/, 7];
                        case 'esci': return [3 /*break*/, 9];
                    }
                    return [3 /*break*/, 10];
                case 2: return [4 /*yield*/, Diagnosis.acquisizione()];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 11];
                case 4: return [4 /*yield*/, Diagnosis.visualizza()];
                case 5:
                    _b.sent();
                    return [3 /*break*/, 11];
                case 6:
                    // await Diagnosis.modifica(); in corso di implementazione
                    console.log(" in corso");
                    return [3 /*break*/, 11];
                case 7: return [4 /*yield*/, Diagnosis.cancellazione()];
                case 8:
                    _b.sent();
                    return [2 /*return*/];
                case 9:
                    console;
                    return [2 /*return*/];
                case 10:
                    console.log("Opzione non valida");
                    return [3 /*break*/, 11];
                case 11: return [4 /*yield*/, acqui()];
                case 12:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
acqui();
