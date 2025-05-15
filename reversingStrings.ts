

/** type Reverser = (input: string) => string;

const reverseString: Reverser = (input) => input.split('').reverse().join('');

let uaglio: string = "stressed";
let reversed: string = reverseString(uaglio);
console.log(reversed); // Outputs: "desserts"  Altro metodo **/

function reversestringa(str2: string): string {
    let reverse = '';
    for (let i = str2.length - 1; i >= 0; i--) {
        reverse += str2[i];
    }
    return reverse;
}

const uaglio = reversestringa('stressed');
console.log(uaglio);


