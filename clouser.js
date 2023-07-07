function outerFunction() {
    var outerVariable = 'Hello';
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  var closureFunction = outerFunction();
  closureFunction(); // Output: Hello
  