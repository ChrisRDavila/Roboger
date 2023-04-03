//Business Logic

//function roboger(number) {
//  const splitArray = number.split("");
//  outputArray = [];
//  splitArray.forEach(element => {
//    if (element === "1") {
//    outputArray.push("Beep");
//    } else if (element === "2") {
//    outputArray.push("Boop"); 
//  } else if (element === "3") {
//    outputArray.push("Won't you be my neighbor?");
//  } else {
//    outputArray.push(element);
//  }
//  });  
//return outputArray; 
//}

function roboger2(input) {
const stringToAdd = [];
for (let i=0; i <= parseInt(input); i++) {
  const stringToAdd = replaceInt("$(i)");
  stringToAdd.push(stringToAdd);
  } return stringToAdd
}
function replaceInt(string) {
  if (string.includes("3")) {
    return "Won't you be my neighber?";
  } else if (string.includes("2")) {
    return "Boop!"
  } else if (string.includes("1")) {
    return "Beep"
  } else {
    return "${string}";
  }
}



//function replaceInt(array) {
//  roboger2.value = array
//  finalArray = [];
//  roboger2.forEach(number => {
//    if (roboger2.includes(1)) {
//      finalArray.push("Beep");
//    } else {
//      finalArray.push(number);
//    }
//    return finalArray;
//  })
//}


  
//User Interface Logic
function handleSubmit(event) {
  event.preventDefault();
  const numberElement = document.querySelector("#userInput");//or "#inputForm"
  const listStrings = roboger2(numberElement.value);//.value?
  //const resultsHeading = document.createElement("h2");
  //resultsHeading.append("Here's your robogized list!");
  //document.body.append(resultsHeading);
  //const resultList = document.createElement("ul");
  //document.body.append(resultList);
  listStrings.forEach(function(string) {
    const li = document.createElement("li");
    li.innerHTML = string;
    body.appendChild(li);
  });
}

window.addEventListener("load", function() {
body = document.querySelector("body");
form = document.querySelector("#inputForm");
form.addEventListener("submit", handleSubmit);
});

