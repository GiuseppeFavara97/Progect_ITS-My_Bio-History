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
var Allergies = /** @class */ (function () {
    function Allergies(id, id_patient, medical_records, allergen, reaction, severity, note, start_date, end_date) {
        this.id = id;
        this.id_patient = id_patient;
        this.medical_records = medical_records;
        this.allergen = allergen;
        this.reaction = reaction;
        this.severity = severity;
        this.note = note;
        this.start_date = start_date;
        this.end_date = end_date;
    }
    // ✅ Metodo statico per creare un'istanza da terminale
    Allergies.acquisisciDaTerminale = function () {
        return __awaiter(this, void 0, void 0, function () {
            var inputData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                type: 'input',
                                name: 'allergen',
                                message: "Inserisci l'allergene"
                            },
                            {
                                type: 'input',
                                name: 'reaction',
                                message: 'Inserisci il grado di reazione'
                            },
                            {
                                type: 'input',
                                name: 'severity',
                                message: 'Inserisci la gravità'
                            },
                            {
                                type: 'input',
                                name: 'note',
                                message: 'Inserisci note'
                            },
                            {
                                type: 'input',
                                name: 'start_date',
                                message: 'Inserisci la data di inizio (YYYY-MM-DD)'
                            },
                            {
                                type: 'input',
                                name: 'end_date',
                                message: 'Inserisci la data di fine (YYYY-MM-DD)'
                            }
                        ])];
                    case 1:
                        inputData = _a.sent();
                        return [2 /*return*/, new Allergies(2, 1, 1, inputData.allergen, inputData.reaction, inputData.severity, inputData.note, new Date(inputData.start_date), new Date(inputData.end_date))];
                }
            });
        });
    };
    return Allergies;
}());
// Oggetto di esempio iniziale
var allergen = new Allergies(1, 1, 1, 'peanuts', 'swelling of the hands', 'medium', 'no note', new Date(2003, 10, 1), new Date());
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var running, answers, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    running = true;
                    _b.label = 1;
                case 1:
                    if (!running) return [3 /*break*/, 10];
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                type: 'list',
                                name: 'action',
                                message: "Cosa vuoi fare?",
                                choices: ['visualizzare', 'eliminare', 'aggiungi', 'esci']
                            }
                        ])];
                case 2:
                    answers = _b.sent();
                    _a = answers.action;
                    switch (_a) {
                        case 'visualizzare': return [3 /*break*/, 3];
                        case 'eliminare': return [3 /*break*/, 4];
                        case 'aggiungi': return [3 /*break*/, 5];
                        case 'esci': return [3 /*break*/, 7];
                    }
                    return [3 /*break*/, 8];
                case 3:
                    console.log('Allergia:', allergen);
                    return [3 /*break*/, 9];
                case 4:
                    allergen.allergen = '';
                    console.log('Allergene eliminato');
                    return [3 /*break*/, 9];
                case 5: return [4 /*yield*/, Allergies.acquisisciDaTerminale()];
                case 6:
                    allergen = _b.sent();
                    console.log('Nuovo allergene aggiunto:');
                    console.log(allergen);
                    return [3 /*break*/, 9];
                case 7:
                    running = false;
                    console.log('Uscita dal programma.');
                    return [3 /*break*/, 9];
                case 8:
                    console.log('Azione non riconosciuta.');
                    _b.label = 9;
                case 9: return [3 /*break*/, 1];
                case 10: return [2 /*return*/];
            }
        });
    });
}
main();
