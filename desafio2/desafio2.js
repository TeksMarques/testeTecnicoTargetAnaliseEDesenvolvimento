const isFibonacci = (num) => {
    let a = 0,
      b = 1,
      temp;
    if (num === 0 || num === 1) return true;
    while (b < num) {
      temp = b;
      b = a + b;
      a = temp;
    }

    return b === num;
  };

  const checkFibonacci = () => {
    const num = parseInt(document.getElementById("number").value);
    const result = document.getElementById("result");
    if (isFibonacci(num)) {
      result.textContent = `${num} pertence à sequência de Fibonacci.`;
    } else {
      result.textContent = `${num} não pertence à sequência de Fibonacci.`;
    }
  };