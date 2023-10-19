function reverseWordsInSentence(sentence) {
    const words = sentence.split(' ');

  const reversedWords = words.map(word => {

    const leadingPunctuation = word.match(/^\W*/)[0];
    const trailingPunctuation = word.match(/\W*$/)[0];
    const wordWithoutPunctuation = word.replace(/^\W*/, '').replace(/\W*$/, '');

    const reversedWord = wordWithoutPunctuation.split('').reverse().join('');
    return leadingPunctuation + reversedWord + trailingPunctuation;
  });

  const reversedSentence = reversedWords.join(' ');

  return reversedSentence;
}

const inputSentence = prompt();
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence);