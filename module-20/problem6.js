/* //Write a function findLeapYear() that will take the array
[2023,2024,2025,2028,2030] as the input parameter and will check if
each year is a leap year. If a year is a leap year insert that year in a
new array, return the new array and print the result. */

function findLeapYear(arr){
    var newArr = [];
    for(var i = 0;i<arr.length;i++){
        if((arr[i]%4===0 || arr[i]%400==0)&& (arr[i]%100 !=0)){
            var leap =arr[i] + ' It is leapYear' ;
            newArr.push(leap);
        }
        else{
            var notleap =arr[i] +' It is not leapYear';
            newArr.push(notleap);
        }
    }
    return newArr;
}
var arr = [2023,2024,2025,2028,2030] ;
var result = findLeapYear(arr);
console.log(result)