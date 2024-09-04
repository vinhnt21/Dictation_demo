const $ = document.querySelector.bind(document);
const SENTENCE =
  "Get your production ready CDN links below. You can also automate your upgrades by pulling the latest versions from our API.";

const sentenceToArray = (sentence) => {
  return sentence
    .replace(/[^a-zA-Z ]/g, "")
    .toLowerCase()
    .split(" ");
};

const compareWords = (userWords, originalWords) => {
  return originalWords.map((originalWord, index) => {
    if (index < userWords.length && userWords[index] === originalWord) {
      return originalWord;
    }
    return "*".repeat(originalWord.length);
  });
};

const updateDisplay = (words) => {
  let html = "";
  words.forEach((word) => {
    html += `<span class="border border-black rounded px-2 m-2">${word}</span> `;
  });
  $("#sentence-to-result").innerHTML = html;
};

// Initialize
$("#sentence-to-check").textContent = SENTENCE;
const words = sentenceToArray(SENTENCE);
updateDisplay(words.map(word => "*".repeat(word.length)));

$("#user-textarea").addEventListener("input", (e) => {
  const userSentence = e.target.value.trim();
  const userWords = sentenceToArray(userSentence);
  const displayWords = compareWords(userWords, words);
  updateDisplay(displayWords);
});