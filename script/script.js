// min (1,2)
// min[(1,2)]
// min({a:1, b:2})
// min({a:1, b:2}, {a: 11, b: 12})



function sortBubble(num){
    let temp = '' 
    for (i = num.length - 1; i > 0; i--) {
        for (j = 0; j < i; j++) {
            if (num[j] > num[j+1]) {
                temp = num[j];
                num[j] = num[j+1];
                num[j+1] = temp;
            }
        }
    }
    return num;
}
console.log(num(5, 9, 12340, 10, 103));


function minNum (a, b){
    
    
}
minNum (1,2)