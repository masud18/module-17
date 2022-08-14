/* var x = 'please help me and help him';
var xArr = x.split('');
var xArrLength = xArr.length;
for(var i = xArrLength - 1; i>=0; i--){
    console.log(x[i]);
} */
var x = 'please help me and help him';
var xArr = x.split(' ');
var temp = [];
var xArrLength = xArr.length;
for(var i = xArrLength - 1; i>=0; i--){
    temp.push(xArr[i])
}
console.log(temp)