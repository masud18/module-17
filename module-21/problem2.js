var arr =[4, 5, 6, 8, 20, 100];
var arrLength = arr.length;
var sum = 0;
function nn(arr){
    for(var i = 0; i<arrLength; i++){
        sum = sum + arr[i];
    }
    var avg = sum/arrLength;
    return avg;
}
var result = nn(arr);
console.log(result)
