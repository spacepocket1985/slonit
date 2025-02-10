const createLogger = () => {
    const messagesArr = [];
  
    return {
      log: (message) => {
        messagesArr.push(message);
      },
      getLogs: () => {
        return messagesArr;
      },
    };
  };
  
  const myLogger = createLogger();
  myLogger.log("Первое сообщение");
  myLogger.log("Второе сообщение");
  
  console.log(myLogger.getLogs());
  

const createRandomGenerator = (min, max) => {  
    return () => {  
      const rand = min + Math.random() * (max - min);  
      return Math.floor(rand);  
    };  
  };  
  

  const randomGenerator = createRandomGenerator(1, 5);  
  console.log(randomGenerator()); 
  console.log(randomGenerator()); 