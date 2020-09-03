// Program to search for a particular character in a string

let word = prompt('enter string').split(''); 
let search = prompt('character to be search'); //case sensitive
let count=0; 
word.forEach(function(match) {
    if(search==match){ 
        count++;    
    }
});
 console.log(`total occurance of "${search}" in "${word}" is "${count}"`);
