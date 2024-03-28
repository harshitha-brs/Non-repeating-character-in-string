// Function to find the first non-repeating character in a string
function findNonRepeatingCharacter() {
  const inputString = document.getElementById("inputString").value.trim();
  const nonRepeatingChar = findFirstNonRepeatingChar(inputString);

  const nonRepeatingCharacterDiv = document.getElementById(
    "nonRepeatingCharacter"
  );
  nonRepeatingCharacterDiv.textContent =
    "First Non-Repeating Character: " + nonRepeatingChar;
}

// Function to find the first non-repeating character in a string
function findFirstNonRepeatingChar(str) {
  const charCount = new Map();

  // Count occurrences of each character
  for (let char of str) {
    charCount.set(char, charCount.has(char) ? charCount.get(char) + 1 : 1);
  }

  // Find the first non-repeating character
  for (let char of str) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  return "No non-repeating character found";
}
