var arr = ['Masud', 'Rohim vai', 'Mydul Islam vai', 'Hakim'];
var temp = arr[0];
for (var i = 0; i<arr.length; i++){
    var element = arr[i];
    if(temp.length<element.length){
        temp = element;
    }
}
console.log(temp)