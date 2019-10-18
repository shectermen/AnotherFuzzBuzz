// «Напишите программу, которая выводит на экран
// числа от 1 до 110. При этом вместо чисел, кратных трем,
// программа должна выводить слово Fizz, а вместо чисел,
// кратных пяти — слово Buzz. Если число кратно и трем и пяти,
// то программа должна выводить слово FizzBuzz.
// Решение должно быть гибким и масштабироваться при
// добавлении одного условия менее чем за 1 мин, 2 условия
// менее 2х минут и тд

let words = {
  fizz: {
    word: "Fizz",
    mainCase: 3,
    cases: [3, 5]
  },
  buzz: {
    word: "Buzz",
    mainCase: 5,
    cases: []
  },
  mass: {
    word: "Mass",
    mainCase: 7,
    cases: [3, 5]
  },
  tazz: {
    word: "Tuzz",
    mainCase: 11,
    cases: [3, 5]
  }
};

let isValid = (iter, cases) => {
  if (Array.isArray(cases)) {
    let asd = cases.map(c => {
      return iter % c === 0;
    });
    return asd.every(i => {
      return i === true;
    });
  } else {
    return iter % cases === 0;
  }
};

const FizzBuzz = num => {
  for (let i = 0; i <= num; i++) {
    switch (true) {
      case isValid(i, words.fizz.cases):
        console.log(`${words.fizz.word}${words.buzz.word}`);
        break;
      case isValid(i, words.fizz.mainCase):
        console.log(words.fizz.word);
        break;
      case isValid(i, words.buzz.mainCase):
        console.log(words.buzz.word);
        break;
      case isValid(i, words.mass.mainCase):
        console.log(words.mass.word);
        break;
      case isValid(i, words.tazz.mainCase):
        console.log(words.tazz.word);
        break;
      default:
        console.log(i);
    }
  }
};

FizzBuzz(110);
