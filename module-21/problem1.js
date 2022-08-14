var arr = [15, 10, 20];
function mm(arr){
var temp = arr [0];
for(var i = 0; i<arr.length; i++){
    var element = arr[i];
    if(temp>element){
        temp = element;
    }
}
return temp;    
}
var result =mm(arr);
console.log(result)
