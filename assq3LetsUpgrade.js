// Program to search for a element in a array of strings

let sentence = 'krishna shahi shahi singh shahi'.split(' ');
let search = 'shahi';
let count=0; 
sentence.forEach(function(match) {
    if(search==match){
        count++;    
    }
});
 console.log(`total occurance of "${search}" in "${sentence}" is "${count}"`);