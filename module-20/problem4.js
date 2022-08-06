function hoursSecond(hours){
    var minutes = hours * 60;
    var second = minutes * 60;
    return second;
}
var result = hoursSecond(4);
console.log(result)