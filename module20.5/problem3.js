//৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 

function grading (number){
    if(number>=80 && number<=100){
        console.log("My Grading is A+ ")
    }
    else if(number>=70 && number<=79){
        console.log("My Grading is A ")
    }
    else if(number>=60 && number<=69){
        console.log("My Grading is A- ")
    }
    else if(number>=50 && number<=59){
        console.log("My Grading is B ")
    }
    else if(number>=40 && number<=49){
        console.log("My Grading is C ")
    }
    else if(number>=33 && number<=39){
        console.log("My Grading is D ")
    }
    else{
        console.log('My Grading is F')
    }
}
grading(89)
