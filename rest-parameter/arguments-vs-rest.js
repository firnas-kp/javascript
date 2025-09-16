// compare arguments vs rest paramaters

function showArgs() {
    console.log(arguments); //not ana array
}
showArgs(1,2,3);

function showRest(...arg) {
    console.log(arg); // real array
}
showRest(1,2,3);5