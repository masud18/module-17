/* Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
as the input parameter and will return the sum of the odd numbers. */
function findOddSum(arr){
    var sum = 0;
    for(var i = 0; i< arr.length; i++){
            sum = sum + arr[i];
    }
    return sum;
}
var arr = [5, 7, 8, 10, 45, 30];
var result =findOddSum(arr);
console.log(result)