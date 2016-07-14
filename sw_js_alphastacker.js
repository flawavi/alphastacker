var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function stackLetters(stack) {
  var test = "";
  for (var i = 0; i < stack.length; i++) {
    if (i > 0 && i % 5 === 0) {
      test += stack[i]+" "
    } else {
      test += stack[i];
    }
    console.log(test);
  }
}

stackLetters(alphabet);