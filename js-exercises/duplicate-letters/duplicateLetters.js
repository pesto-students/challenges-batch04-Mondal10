function duplicateLetters(...args) {
  const letterArr = [...args[0]];
  const letterCounter = {};
  let maxCount = 1;

  letterArr.forEach((letter) => {
    if (letter in letterCounter) {
      letterCounter[letter] += 1;
    } else {
      letterCounter[letter] = 1;
    }
  });

  Object.values(letterCounter).forEach((letterCount) => {
    if (letterCount > maxCount) maxCount = letterCount;
  });

  return maxCount === 1 ? false : maxCount;
}

export {
  duplicateLetters,
};
