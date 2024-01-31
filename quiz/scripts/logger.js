// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
const error = {
    logMsg: function(obj) {
        if (obj.errMsg != undefined) {
            return obj.errMsg;
        } else {
            return "No errors\n";
        }   
    }
}

const obj = {
    errMsg: "There is an error.",
}

const obj2 = {
    firstName: "Andy",
    lastName: "Yu"
}

console.log(error.logMsg(obj)); // Logs: "There is an error."
console.log(error.logMsg(obj2)); // Logs: "No error."