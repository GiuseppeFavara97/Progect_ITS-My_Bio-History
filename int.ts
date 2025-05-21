interface Stampabile {
stampa(): void;
}

class Report implements Stampabile {
stampa() {
console.log("Stampo il report...");
}
}