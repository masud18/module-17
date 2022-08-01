var x = 9;
var y = 1;
var z = 9;
if(x==y && y==z && z==x){
    console.log('It is all most equal')
}
else if(x==y && y==x){
    console.log('It is isosceles')
}
else if(y==z && z==y){
    console.log('It is isosceles')
}
else if(z==x && x==z){
    console.log('It is isosceles')
}
else{
    console.log('It is not isosceles')
}