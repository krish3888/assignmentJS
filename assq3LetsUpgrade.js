// Program to search for a element in a array of strings

let sentence = prompt("enter string array").split(' ');
let search = 'shahi';
let count=0; 
sentence.forEach(function(match) {
    if(search==match){
        count++;    
    }
});
 console.log(`total occurance of "${search}" in "${sentence}" is "${count}"`);