
# Summarize Highlights from Prep Material (Technician)

- Spend approximately 15-20 minutes summarizing highlights from the prep material.
- Do ***NOT*** use outside resources except where/when noted.  The answers should be based only on the group's knowledge.
- Be sure to discuss the content with your group and that everyone agrees on the answers.
- Answers can be brief/informal.

***Q1. Create code here, but don't try it yet!  Given an example of declaring an object literal (i.e., an actual object with specific values). Provide code for an object representing a computer science course, `cs1`.  It should have a property named `roll` that contains the names of students (make it contain "Ada", "Babbage", "Turing", and "Hopper") and a method called `size()` that returns the number of students in the class (don't use a constant; base it on the `roll` property):***

***Q2. The Technician should open a Console in a web browser and try the work entered above (copy/paste it at the prompt (`>`), then enter commands to test it at the prompt, like `cs1.size()`).  If you encounter errors, just fix them and re copy/paste the updated code, which will replace the previous value of the variable. Describe any problems that occurred or errors that had to be fixed.***


***Q3. Consider the following two examples (but don't execute them)***
```JavaScript
var sayHi = function() { console.log("Hi"); }
setTimeout(sayHi, 5000);
```
***vs:***
```JavaScript
var sayHi = function() { console.log("Hi"); }
setTimeout(sayHi(), 5000);
```
***Explain the difference in meaning between the two and how you think each will behave:***

***Q4. Have the Technician try the examples above.  If there were any errors in your answers, please explain:***


***Q5. Again, try to answer this question before running code. JavaScript's `this` has some unusual behavior. Consider:***
```JavaScript
var o = {
  name: "I'm o",
  getName: function() {
    console.log(this.name)
    return this.name;
  }
}
console.log("o is: " + o);
```
***vs.***
```JavaScript
var o = {
  name: "I'm o",
  getName: function() {
    console.log(this.name)
    var aNestedFunction = function() {
      return this.name;
    }
    return aNestedFunction();
  }
}
console.log("o is: " + o);
```
***vs.***
```JavaScript
var o = {
  name: "I'm o",
  getName: function() {
    console.log(this.name)
    var cap = this.name;
    var aNestedFunction = function() {
      return cap;
    }
    return aNestedFunction();
  }
}
console.log("o is: " + o);
```
***Explain what you expect to be printed in each case:***

***Q6. The Technician should now try the code.  Explain any discrepancies in your answer:***

***Q7. Briefly explain JSON:***


*JavaScript's functions are considered "first-class".   That means that they can be handled in much the same way as any other type of data.  Below are a few examples.  Try to explain what each does:*

***Q8.1. Functions as variables.  Try to figure out what the following will print at each `console.log()`.  Fill in your answer in the comments provided and then explain your reasoning:***
```JavaScript
function plus(a,b) { return a+b; }
var result = plus(2,3)
console.log(result)                 // Will print:
var pToo = plus
console.log(pToo)                   // Will print:
var resultOfpToo = pToo(3,4)     
console.log(resultOfpToo)           // Will print:
```


***Q8.2. Check your work from the previous part.  If there were any errors, try to explain any discrepancies.***

***Q8.3.  Functions are return values.  Try to figure out what the following will print.  Fill in your answer in the comments provided and then explain your reasoning:***
```JavaScript
function plus(a,b) { return a+b; }
function mult(a,b) { return a*b; }

function binaryApplicationFactory(operation) {
  return function (a,b) {
      return operation(a,b);
  }
}

var a = binaryApplicationFactory(plus);
var aResult = a(2,3)
console.log(aResult)                 // Will print:
var b = binaryApplicationFactory(mult);
var bResult = b(2,3)
console.log(bResult)                 // Will print:
```


***Q8.4. Check your work from the previous part.  If there were any errors, try to explain any discrepancies.***

***Q8.5.  Functions as parameters.  Try to figure out what the following will print.  Fill in your answer in the comments provided and then explain your reasoning:***

```JavaScript
function mult(a,b) { return a*b; }
function plus(a,b) { return a+b; }
function applyFunctions(f1, f2, a, b) {
    return f2(f1(a,a),f1(b,b));
}

var aResult = applyFunctions(mult, plus, 2, 3);
console.log(aResult)                 // Will print:
var bResult = applyFunctions(plus, plus, 2, 3);
console.log(bResult)                 // Will print:
var bResult = applyFunctions(plus, mult, 2, 3);
console.log(bResult)                 // Will print:
```

***Q8.6.  (Optional / Challenge) Function composition.  Try to figure out what the following will print.  Fill in your answer in the comments provided and then explain your reasoning:***
```JavaScript
function mult(a,b) { return a*b; }
function plus(a,b) { return a+b; }
function binaryCompositionFactory(f1, f2) {
  return function (a,b) {
      return f2(f1(a,a),f1(b,b));
  }
}

var a = binaryCompositionFactory(mult, plus);
var aResult = a(2,3)
console.log(aResult)                 // Will print:
var b = binaryCompositionFactory(plus,mult);
var bResult = b(2,3)
console.log(bResult)                 // Will print:
```
