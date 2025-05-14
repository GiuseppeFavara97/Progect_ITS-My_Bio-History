/** type Reverser = (input: string) => string;

const reverseString: Reverser = (input) => input.split('').reverse().join('');

let uaglio: string = "stressed";
let reversed: string = reverseString(uaglio);
console.log(reversed); // Outputs: "desserts"  Altro metodo **/
function reversestringa(str) {
    var reverse = '';
    for (var i = str.length; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}
var uaglio = reversestringa('stressed');
console.log(uaglio);
