const secretNumberGame = () => {
    let minNumber = 1;
    let maxNumber = 100;
    const secretNumber = Math.floor(Math.random() * maxNumber) + minNumber;
  
    console.log(`Компьютер 1 загадал число: ${secretNumber}.`);
  
    let guess;
  
    while (true) {
      guess = Math.floor((minNumber + maxNumber) / 2);
      console.log(`Компьютер 2: Пробую число ${guess}.`);
  
      if (guess < secretNumber) {
        console.log(`Компьютер 1: Больше.`);
        minNumber = guess + 1;
      } else if (guess > secretNumber) {
        console.log(`Компьютер 1: Меньше.`);
        maxNumber = guess - 1;
      } else {
        console.log(`Компьютер 1: Угадал!`);
  
        break;
      }
  
      if (minNumber > maxNumber) {
        console.log("Компьютер 2 не может угадать число в заданном диапазоне.");
        break;
      }
    }
  };
  
  secretNumberGame();
  