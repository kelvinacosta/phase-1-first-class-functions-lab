// Code your solution in this file!



const returnFirstTwoDrivers = function (myArr){
    return myArr.slice(0,2)
}
const returnLastTwoDrivers = function(myArr){
    return myArr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(myFare){
    return function(value){
        return myFare*value;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(myDrivers, mySelectionOfDrivers){
    return mySelectionOfDrivers(myDrivers);
}
