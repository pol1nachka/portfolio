function isPalindrome(sentence) {
  let isPalindrome;
  let n = 0;
  
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  const isLetter = (char) => alphabet.includes(char);

  let curedSentence = sentence.trim().toLowerCase();

  function filterLetters(text) {
    let filtered = "";
    for (let i = 0; i < text.length; i++) {
      if (isLetter(text[i])) {
        filtered += text[i];
      }
    }

    return filtered;
  }

  console.log(curedSentence, filterLetters(curedSentence));

  const wordToCheck = filterLetters(curedSentence);

  while (n < wordToCheck.length / 2) {
    isPalindrome = wordToCheck[n] === wordToCheck[wordToCheck.length - n - 1];

    if (!isPalindrome) {
      break;
    }

    n++;
  }

  if (isPalindrome) {
    console.log("Yes");
  } else {
    console.log("Nah");
  }
}

isPalindrome("A man, a plan, a canal, Panama");
