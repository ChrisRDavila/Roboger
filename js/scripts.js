//Business Logic

function roboger(number) {
  const splitArray = number.split("");
  outputArray = [];
  splitArray.forEach(element => {
    if (element === "1") {
    outputArray.push("Beep");
    } else if (element === "2") {
    outputArray.push("Boop"); 
  }
  });  
return outputArray; 
}
  




//if (!Number(number)) {
//  return false;

//else {
//  return outputArray;