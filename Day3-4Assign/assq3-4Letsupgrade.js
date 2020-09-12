let arrObj =[{
    name: "Shaktiman",
    age: 10,
    country:"India",
    hobbies: ["cric",'foot', 'gym']
  },
  {
   name: "Thor",
   age: 100,
   country:"Brazil",
   hobbies: ["cric", 'gym']
 },
 {
   name: "vikas",
   age: 30,
   country:"India",
   hobbies: ["cric",'111', 'gym']
 },
  {
    name: "Captain America",
    age: 60,
    country:"Ameriva",
    hobbies: ["cric",'5678']
  },
  {
    name: "Ironman",
    age: 29,
    country:"India",
    hobbies: ["cric",'foot', 'gym','98986']
  },];

console.log(arrObj); // displaying all obj
  
function ageCond(){
arrObj.forEach(ele => {
   if(ele.age<30){
       console.log(ele);
   }
});
}

function countryCond(){
arrObj.forEach(ele => {
   if(ele.country === "India"){
       console.log(ele);
   }
});
}