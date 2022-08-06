function leapYear(netYear){
    if((netYear%4===0 || netYear%400===0) && (netYear%100!=0)){
        console.log("Your years is leapYear");
        return true;
    }
    else{
        console.log('Your years is not a leapYear');
        return false;
    }
}
var result = leapYear(1952);
console.log(result)
