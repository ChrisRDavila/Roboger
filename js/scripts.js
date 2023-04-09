//Business Logic

function roboger(input) {
  const resultString = [];
  for (let i = 0; i <= parseInt(input); i++) {
      const stringToAdd = replaceInt(`${i}`);
      resultString.push(stringToAdd);
  }
  return resultString;
}

function replaceInt(string) {
  if (string.includes("3")) {
    return "Won't you be my neighbor?";
  } else if (string.includes("2")) {
    return "Boop!"
  } else if (string.includes("1")) {
    return "Beep!"
  } else {
    return `${string}`;
  }
}

//User Interface Logic

function handleSubmit(event) {
  event.preventDefault();
  const list = document.querySelector("#list");
  list.innerHTML = "";
  const numberElement = document.querySelector("#userInput"); //or "#inputForm"
  const listStrings = roboger(numberElement.value);
  listStrings.forEach(function(string) {
      const li = document.createElement("li");
      li.innerHTML = string;
      list.appendChild(li);
  });
} 

window.addEventListener("load", function() {
  this.document.querySelector("#inputForm").addEventListener("submit", handleSubmit)
});