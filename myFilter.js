function myFilter(array, callback) {  
  const result = [];  

  for (let i = 0; i < array.length; i++) {  
    if (callback(array[i]))   
      result.push(array[i]);  
  }  

  return result;  
}  

const numbers = [1, 2, 3, 4, 5];  

// Фильтруем четные числа  
const evenNumbers = myFilter(numbers, function(num) {   
  return num % 2 === 0;  
});  
console.log(evenNumbers); // [2, 4]  

// Фильтруем числа больше 3  
const greaterThanThree = myFilter(numbers, function(num) {   
  return num > 3;  
});  
console.log(greaterThanThree); // [4, 5] 