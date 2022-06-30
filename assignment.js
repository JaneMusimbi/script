// 1.Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"
function multiple(){
for (var j = 1; j < 101; j++) {
    if (j % 3 === 0 || j % 5 === 0){
     console.log("FizzBuzz");}
    else if (j % 3 == 0){
     console.log("Fizz");}
    else if (j % 5 == 0){ 
    console.log("Buzz");}
    else 
    {console.log(j);}
}
}
// 2.Write a JavaScript program to sum the multiples of 3 and 5 under 1000
function sum(){
var sum = 0;
for (var y = 0; y < 1000; y++){
if (y % 3 === 0 && y % 5 === 0){
sum += y;
}
}
console.log(sum);}

// 3. Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
"0 is even"
"1 is odd"
"2 is even"
function number(){
for (var x=0; x<=20; x++) {
        if (x%2 === 0) {
                console.log(x + " " + " is even");
        }
        else{
                console.log(x + " "+" is odd");   
        }
  }
}
// 4.Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.Let num = [-2, 4,-5, 6,0]

function number (){
number= [-2,4,-5,6,0];
let largest=0;
for(let i=0;i<number.length; i++){
    if (number[0]>largest){
        largest=number[0]
    }
}
        console.log(largest)
    }
// 5. Using conditional statements, write a JavaScript program to find the largest of the
//     following two numbers: 10 & 40
function range(m, n){
        m=10
        n=40
        if(m<n){
                console.log(n)
        }
        else{
                console.log(m)
        }
}	

// 6. Write a JavaScript program to find leap years from 2000 to 2022
function leapyear() {
        for(let y=2000; y<=2022; y++){
   if (y % 4 === 0 || y % 400 === 0){
                console.log(y + " " + "is a  leap year")
        }
else 
{
                console.log(y)
        }
        }
}



