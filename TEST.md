Describe: Roboger()

Test: "Should validate that some element is entered into input"
Code: Roboger(" ")
expected Output:True

Test: "Should now return false if function called on parameter with no input"
Code: Roboger("")
OUtput: false

Test: Should return false for anything entered in the input besides a number
Code: roboger("number")
expected output: True

Test: Should identify 1 and return Beep
Code: roboger("145")
expected output: "Beep"