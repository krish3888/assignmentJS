// Program to search for a particular character in a string

let word = 'kriashna A shahi'.split(''); 
let search = 'a'; //case sensitive
let count=0; 
word.forEach(function(match) {
    if(search==match){ 
        count++;    
    }
});
 console.log(`total occurance of "${search}" in "${word}" is "${count}"`);