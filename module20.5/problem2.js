//২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 
function nn(f){
    var c = (f-32)*(5/9);
    return c;
}
var result = nn(50);
console.log(result +'c')