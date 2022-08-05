/* 3) Challenging: Write a function called make_avg() which will take an array of integers and
the size of that array and return the average of those values. */
var arr = [10, 40, 50, 60, 70];
var arrLength = arr.length;
var totalArray = 0;
for( var i = 0; i < arrLength; i++){
    totalArray = totalArray + arr[i];
}
// console.log(totalArray)
function make_avg(){
    var avg = totalArray / arrLength;
    return avg;
}
console.log(make_avg());