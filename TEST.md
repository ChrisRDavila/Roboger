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

# Test: Should count down from 12 to 0 when 12 entered with for loop
Code: ("12");
Expected OutPut: (12,11, 10, 9, 8,7, 6, 5, 4, 3, 2, 1, 0)

# Test: Should reverse outputArray into an array that couts up from 0 as per prompt
Code: ("12")
Expected Output: (0,1,2,3,4,5,6,7,8,9,10,11,12)

# Describe: replaceInt();

# Test: Should take an array and replace all strings including a 3 with a wont you be my neighbor
Code: replaceInt("3")
Exepected Output: ["wont you be my neighbor"]

# Test: should replace number other then 3 that also has a 3 with intended message"
Code: "replaceInt("13");
Expected Output: "Won't you be my neighbor"
