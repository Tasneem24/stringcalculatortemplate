add ("")
add (0)
add (2)
add (1,2)

function add(numbers){
    let emptystring = ("")

if (numbers === emptystring){
    results = "Value is empty"
}
else{

    results = "Value is positive";
}
 console.log(results)

}
console.log('');
console.log(sum2("2,4"));


function sum2(numbers){

    

    let emptystring =("");
    let results = 0;
    let myArray = numbers.split(",")

 if (numbers === emptystring){
   results = 0;
} 
else { 
    results = parseInt(myArray[0]) + parseInt(myArray[1])
}

//console.log(result);

return results;
} 

function addUnkownNumbers(){
  
} 
function addNewLineNumbers(){   

}

