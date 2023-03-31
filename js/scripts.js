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
function handleForm(event) {
  event.preventDefault();
  const resultsHeading = document.createElement("h2");
  resultsHeading.append("List based on submission");
  document.body.append(resultsHeading);
  const resultList = document.createElement("ul");
  document.body.append(resultList);
  outputArray.forEach(function(element) {
    const returnList = document.createElement("li");
    returnList.append(element);
    resultList.append(returnList);
  });
}

window.addEventListener("load", function() {
this.document.querySelector("form#inputForm").addEventListener("submit", handleForm);
})