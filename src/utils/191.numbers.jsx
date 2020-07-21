export const sum = (a, b) => {
  return a + b;
};

export const subtraction = (a, b) => {
  return a - b;
};

export const division = (a, b) => {
  return a / b;
};

export const multiplication = (a, b) => {
  return a * b;
};

export const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
