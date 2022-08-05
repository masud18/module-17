/* 2) Write a function called make_avg() which will take an three integers and return the
average of those values. */
function make_avg(x,y,z){
var total = x + y + z;
var avg = total/3;
return avg ;
}
var result = make_avg(5,10,15);
console.log(result);
