const createRandomGenerator = (min, max) => {
  return () => {
    const rand = min + Math.random() * (max - min);
    return Math.floor(rand);
  };
};

const randomGenerator = createRandomGenerator(1, 5);
console.log(randomGenerator());
console.log(randomGenerator());
