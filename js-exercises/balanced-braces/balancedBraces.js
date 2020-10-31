/**
 * Determine if a string contains matching Braces, Brackets, and Parentheses.
 * @param {String} codeStream
 *
 * true if all opening Braces/Brackets/Parentheses have matching
 * closing Braces/Brackets/Parentheses that are correctly nested else false.
 * @returns {Boolean}
 */
function balancedBraces(codeStream) {
  const stack = [];
  const openingParenthesis = ['(', '[', '{'];
  const closingParenthesis = [')', ']', '}'];
  const validParenthesis = [...openingParenthesis, ...closingParenthesis];
  const stackParenthesis = [...codeStream].filter((letter) => validParenthesis.includes(letter));

  // Need early termination so using normal 'for' loop instead of 'forEach'.
  for (let i = 0; i < stackParenthesis.length; i += 1) {
    // If stack is empty and only closing Parenthesis is added then return.
    if (!stack.length && closingParenthesis.includes(stackParenthesis[i])) return false;

    // For opening Parenthesis push to stack.
    if (openingParenthesis.includes(stackParenthesis[i])) stack.push(stackParenthesis[i]);

    if (closingParenthesis.includes(stackParenthesis[i])) {
      const index = closingParenthesis.indexOf(stackParenthesis[i]);

      // If index of incoming Closing parenthesis and top most element of stack are same,
      // means they are the pair, so pop it else push to stack.
      if (index === openingParenthesis.indexOf(stack[stack.length - 1])) {
        stack.pop();
      } else {
        stack.push(stackParenthesis[i]);
      }
    }
  }

  // If stack is empty then it's balanced so return true else false.
  return (!stack.length);
}

export {
  balancedBraces,
};
