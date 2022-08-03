//Frist solved 
// var member = ["Masud", "Mydul", "Rashed", "Hakim", "rana"];
// var signalLength = member.length;
// var dubleLength = signalLength * 2;
// for(var i = 0,  j = 0; i<dubleLength; i++ ){
//     console.log(member[j]);
//     j++;
//     if(j==signalLength){
//         j = 0;
//     }
// }
// Reversing way
var member = ["Masud", "Mydul", "Rashed", "Hakim", "rana"];
var signalLength = member.length;
var dubleLength = signalLength * 2;
for(var i = dubleLength-1, j= dubleLength-1; i>=0; i--){
    console.log(member[j-5])
    j--;
    if(j === signalLength-1){
        j=9;
    }
}
//Second solved
// var member = ["Masud", "Mydul", "Rashed", "Hakim", "rana"];
// var memberLength = member.length;
// for(var i = 0; i< 10; i++){
//     if(member[i]===undefined){
//         console.log(member[i - memberLength])
//     }
//     else{
//         console.log(member[i])
//     }
// }
//Reversing way solved
// var member = ["Masud", "Mydul", "Rashed", "Hakim", "rana"];
// var memberLength = member.length;
// for(var i = 9; i >=0; i--){
//     if(member[i]===undefined){
//         console.log(member[i - memberLength])
//     }
//     else{
//         console.log(member[i])
//     }
// }
//while solved
var member = ["Masud", "Mydul", "Rashed", "Hakim", "rana"];
var i = 0;
while(i<10){
console.log(member[i])
    i++;
}
