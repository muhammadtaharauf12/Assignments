  /*    Question 1 :  Declare an empty array using JS literal notation to store.   */


  let studentsLiteral = [];




  /*     Question 2 :   Declare an empty array using JS object notation to store
student names in future.  */






/*  Question 3 :  Declare and initialize a strings array.  */


let fruits = ["Apple", "Mango", "Orange"];




/*  Question 4 :  Declare and initialize a numbers array. */

 
let number = [0,1,2,3];




/*    Question 5 :      Declare and initialize a boolean array. */


let boolean = [true,false];



/*    Question 6 :       Declare and initialize a mixed array. */



let mixed_arr = [true,"Array",1];




/*   Question 7 :  Declare and Initialize an array and store available
education qualifications in Pakistan (e.g. SSC, HSC, BCS,
BS, BCOM, MS, M. Phil., PhD). Show the listed
qualifications in your browser*/






let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h3>Qualifications:</h3>");
document.write("1)" + qualifications[0] + "<br>2) " + qualifications[1] + "<br>3) " + qualifications[2] + "<br>4)" + qualifications[3] + "<br>5 " + qualifications[4] + "<br>6) " + qualifications[5] + "<br>7) " + qualifications[6] + "<br>8) " + qualifications[7]);





/* Question 8 :   Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students*/






/* Question 9 :   Initialize an array with color names. Display the array
elements in your browser.
a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.
b. Ask the user what color he/she wants to add to the end
& add that color to the end of the array. Display the
updated array in your browser.
c. Add two more color to the beginning of the array.
Display the updated array in your browser.
d. Delete the first color in the array. Display the updated
array in your browser.
e. Delete the last color in the array. Display the updated
array in your browser.
f. Ask the user at which index he/she wants to add a color
& color name. Then add the color to desired
position/index. . Display the updated array in your
browser.
g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
Arrays | JAVASCRIPT
Page 3 of 6
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser.*/




let colors = ["Red", "Green", "Blue"]; 
document.write("Initial colors: " + colors + "<br>");

// a. Add to beginning 
let addStart = prompt("Enter color to add to the beginning:");
colors.unshift(addStart);

// b. Add to end 
let addEnd = prompt("Enter color to add to the end:");
colors.push(addEnd);

// c. Add two more to beginning 
colors.unshift("Yellow", "Purple");

// d. Delete first color 
colors.shift();

// e. Delete last color
colors.pop();

// f. Add at specific index 
let indexToAdd = prompt("At which index do you want to add a color?");
let colorName = prompt("Enter the color name:");
colors.splice(indexToAdd, 0, colorName);

// g. Delete from specific index 
let indexToDel = prompt("At which index do you want to delete color(s)?");
let countToDel = prompt("How many colors do you want to delete?");
colors.splice(indexToDel, countToDel);

document.write("Updated colors: " + colors);




/*   Question 10 : Write a program to store student scores in an array &
sort the array in ascending order using Array’s sort
method.*/



let unsortedScores = [320, 230, 480, 120];
unsortedScores.sort();
document.write("Ordered Scores: " + unsortedScores + "<br>");




/*  Question 11 :     Write a program to initialize an array with city names.
Copy 3 array elements from cities array to selectedCities
array.*/



let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]; 
let selectedCities = cities.slice(2, 4); 
document.write("Selected Cities: " + selectedCities + "<br>");





/* Question 12  :    Write a program to create a single string from the
below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];*/



var arr = ["This", "is", "my", "cat"]; 
var singleString = arr.join(" "); 
document.write("String: " + singleString);






/* Question 13  :  Create a new array. Store values one by one in such a way
that you can access the values in the order in which they
were stored. (FIFO-First In First Out)*/



let queue = [];
queue.push("keyboard"); 
queue.push("mouse");
queue.push("printer");
queue.push("monitor");

document.write("Out: " + queue.shift() + "<br>"); 
document.write("Out: " + queue.shift() + "<br>");






/*  Question 14  :    Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last InFirst Out)*/


let stack = ["keyboard", "mouse", "printer", "monitor"]; 
document.write("Out: " + stack.pop() + "<br>"); 
document.write("Out: " + stack.pop() + "<br>"); 




/*  Question 15   :  5. Write a program to store phone manufacturers (Apple,
Samsung, Motorola, Nokia, Sony & Haier) in an array.
Display the following dropdown/select menu in your
browser using document.write() method:*/




