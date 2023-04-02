## Describe: Roboger()

# Test: "Should validate that some element is entered into input"
Code: Roboger(" ")
Expected Output:True

# Test: "Should now return false if function called on parameter with no input"
Code: Roboger("")
Expected Output: false

# Test: Should return false for anything entered in the input besides a number
Code: roboger("number")
Expected Output: True

# Test: Should identify 1 and return Beep
Code: roboger("145")
Expected Output: " Beep"

# Test: Should return a "Boop" statement when 2 is identified as a element in "splitArray"
Code: roboger("245")
expected outPut: " Boop "

# Test: Should return " won't you be my neighbor?" when 3 is present in input data
Code: roboger("345")
Expected Output: "won't you be my neighbor"

# Test: Should return input character unaldulterated if 1 2 or 3 are not present in input
Code: roboger("456")
Expected Output: "456"

# Test: should return of elements input seperated out with substitions for 1 2 and 3 as well as original input for non specified characters
Code: roboger("1235") 
Expected Outout: ["Beep", "Boop", "wont you be my neighbor", "5"];

## Describe roboger2();

# Test: Should return number from string entered
Code: roboger("12")
Expected Output: (12)

