function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("strops"));

/** type Reverser = (input: string) => string;

const reverseString: Reverser = (input) => input.split('').reverse().join('');

let uaglio: string = "stressed";
let reversed: string = reverseString(uaglio);
console.log(reversed); // Outputs: "desserts"  Altro metodo **/
function reversestringa(str2) {
    var reverse = '';
    for (var i = str2.length; i >= 0; i--) {
        reverse += str2[i];
    }
    return reverse;
}
var uaglio = reversestringa('stressed');
console.log(uaglio);
