function countLetters(str) {
  var output = {};
  str = str.split(" ").join("");

  for (let i = 0; i < str.length; i++) {
    var letter = str[i]
    if (!output[letter]) {
      output[letter] = [i]
    }
    else {
      output[letter].push(i)
    }
  }
  return output
}

console.log(countLetters("lighthouse in the house"))