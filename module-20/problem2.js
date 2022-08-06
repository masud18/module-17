function yourAge(age){
    if(age%2==0){
        console.log('Your age is even');
        return true;
    }
    else{
        console.log("Your age is  odd");
        return false;
    }
}
var result = yourAge(20);
console.log(result);