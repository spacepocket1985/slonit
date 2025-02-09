function sumNumbers(numbers) {  
    let totalSum = 0;  
    numbers.forEach(amount => {  
      totalSum += amount;  
    });  
    return totalSum;  
  }  
  
  let paymentAmounts = [10000, 20000, 30000];  
  console.log(sumNumbers(paymentAmounts));  