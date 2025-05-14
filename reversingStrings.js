var message = "helloworld";
//one way with built in functions
function reverseStringBuildIn(str) {
    var mystr = str.split("").reverse().join("");
    return mystr;
}
function reverseStringWithLoop(str) {
    var mystr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        mystr += str[i];
    }
    return mystr;
}
//Time Consuming Process if string is lengthy 
function reverseStringWithRecursion(str) {
    if (str === "") {
        return str;
    }
    else {
        return reverseStringWithRecursion(str.substr(1)) + str.charAt(0);
    }
}
console.log("With Predefined Functions : " + message + " to " + reverseStringBuildIn(message));
console.log("With Loop : " + message + " to " + reverseStringWithLoop(message));
console.log("With Recursion : " + message + " to " + reverseStringWithRecursion(message));
