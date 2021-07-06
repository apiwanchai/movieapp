function myFunction(getNumber) {
    var x = document.fc.num.value;
    alert(fib(x));
  }
  function fib(n) {
    if (n < 2) {
        return n;
    }
    else {
        return fib(n - 1) + fib(n - 2);
    }
  }
