// Program to search for a element in a array of strings

let sentence = prompt('enter array of string').split(' ');
let search = prompt('element to be search');
let count=0; 
let pos= new Array();
sentence.forEach(function(match,ind) {
    if(search==match){
        let k=0;
        pos[count] = ++ind;
        count++;    
    }
});
 console.log(`total occurance of "${search}" in "${sentence}" is "${count}" at position ${pos}`);
