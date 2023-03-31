//Business Logic

function roboger(number) {
  const splitArray = number.split("");
  outputArray = [];
  splitArray.forEach(element => {
    if (element === "1") {
    outputArray.push("Beep");
    } else if (element === "2") {
    outputArray.push("Boop"); 
  } else if (element === "3") {
    outputArray.push("Won't you be my neighbor?");
  } else {
    outputArray.push(element);
  }
  });  
return outputArray; 
}
  
//User Interface Logic
function recieveInput(number) {
  number.preventDefault();
  const userInput = document.querySelector("input[name=userInput]:submit");
  const resultsHeading = document.createElement("h2");
  reultsHeading.append("This list contains the results of branching your submissions");
  document.body.append(resultsHeading);
  outputArray.forEach(function(element) {
    
  })
}