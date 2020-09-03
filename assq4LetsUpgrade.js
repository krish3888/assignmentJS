// Program to display only elements containing 'a' in them from a array

let sentence = 'krisahna singh shahi from dehrdun uttarakhand India Earth'.split(' ');
let search = 'a';
let storeResult =new Array();
let k = 0;
sentence.forEach(function(ele,indx){
    let count = 0;
    arrElement = ele.split('');
    arrElement.forEach(function(match) {
        if(count=== 0){
            if(search==match){
                storeResult[k] = sentence[indx];
                k++;
                count++;
            }
        }
    });
});
console.log(`${storeResult}`); 