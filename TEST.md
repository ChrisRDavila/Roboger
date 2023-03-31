##### Describe: Roboger()

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

