//radian To Degree
/* function radianToDegree(radian){
    if(typeof radian ==='number'){
       let degree = radian * (180/3.14159265359);
           degree = degree.toFixed(2)
        return degree; 
    }
    else{
        return 'Please Inter Your Number ';
    }
}
let result = radianToDegree(199);
console.log(result) */

//isJavaScriptFile Chack
/* function isJavaScriptFile(fileName){
    if(typeof fileName === 'string'){
        if(fileName.endsWith('.js')){
            return true;
        } 
        else{
            return false;
        }       
    }
    else{
        return 'Please Inter Your String'
    }
}
let x = isJavaScriptFile(111);
console.log(x) */

// 3. Total Oil Price 
/* function oilPrice(digelAmount,pracktolAmount,octonAmount){
    if(typeof digelAmount=='number' && typeof pracktolAmount == 'number'&&typeof octonAmount=='number'){
        let digelPrice = 114;
        let totalDigelPrice = digelPrice * digelAmount;
        let pracktolPrice = 130;
        let totalpracktolPrice = pracktolPrice * pracktolAmount; 
        let octonPrice = 135;
        let totalOctonPrice = octonPrice * octonAmount;
        let totalOilPrice = totalDigelPrice + totalpracktolPrice + totalOctonPrice;     
        return totalOilPrice;
    }
    else{
        return 'Please Inter your Number';
    }
}
let result3 = oilPrice(2,2,'2');
console.log(result3);
 */
// Turiest Calclulation 
/* function publicBusFare(person){
    let publicRent = 250;
    let rejapBuseCapaciti = 50;
    let mycroBuseCapaciti = 11;
        if(person>=50){
            let buseOverPerson= person % rejapBuseCapaciti;
            var mycroOverperson = buseOverPerson % mycroBuseCapaciti;
            var publicTotalAmount = mycroOverperson * publicRent;
            console.log(publicTotalAmount)
        }
        else{
            var mycroOverperson = person % mycroBuseCapaciti;
            var publicTotalAmount = mycroOverperson * publicRent;
            console.log(publicTotalAmount)
        }

}
let result4 = publicBusFare(4) */
// Best friend 
let bestFriend1 ={name:'abul',friend:'babul'};
let bestFriend2 = {name:'babul',friend:'abul'};
function bestFriend(bestFriend1,bestFriend2){
    if(bestFriend1.name === bestFriend2.friend && bestFriend2.name === bestFriend1.friend){
        return true;
    }
    else{
        return false;
    }
}
var result5 = bestFriend(bestFriend1,bestFriend2);
console.log(result5)
