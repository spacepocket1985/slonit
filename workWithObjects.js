const sumNumericFields = (obj) => {  
  let sum = 0;  
  for (let key in obj) {  
    if (typeof obj[key] === 'number') sum += obj[key];  
  }  
  return sum;  
};  

const getSortedNumericFieldNames = (obj) => {  
  const result = [];  
  for (let key in obj) {  
    if (typeof obj[key] === 'number') result.push(key);  
  }  
  return result.sort((a, b) => obj[b] - obj[a]);  
};