const message:string = "stressed";
const message1:string = "strops";
const message2:string = "racecar";

//one way with built in functions
function reverseStringBuildIn(str){
    var mystr =  str.split("").reverse().join("");
    return mystr;
}


console.log("revers string: "+message+" to "+ reverseStringBuildIn(message));
console.log("revers string: "+message1+" to "+ reverseStringBuildIn(message1));
console.log("revers string: "+message2+" to "+ reverseStringBuildIn(message2));