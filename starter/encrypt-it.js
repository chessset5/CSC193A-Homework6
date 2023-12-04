/*
 * Starter file
 */
(function () {
  ("use strict");

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * Initializes the page.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.

    // Add an event listener to the "Encrypt-It!" button
    var encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleClick);

    // Add an event listener to the "Reset" button
    var resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
  }

  /**
   * Handles the click event on the "Encrypt-It!" button.
   */
  function handleClick() {
    var inputText = document.getElementById("input-text").value;
    var shiftCipher = encryptShiftCipher(inputText, 1); // Using a shift of 1

    var resultParagraph = document.getElementById("result");
    resultParagraph.textContent = shiftCipher;

    // Additional logic can be added here if needed
  }

  /**
   * Handles the click event on the "Reset" button.
   */
  function handleReset() {
    var inputText = document.getElementById("input-text");
    inputText.value = ""; // Clear the text inside the textarea

    var resultParagraph = document.getElementById("result");
    resultParagraph.textContent = ""; // Clear the result text

    // Additional logic can be added here if needed
  }

  /**
   * Encrypts a given text using a shift cipher.
   * @param {string} text - The text to be encrypted.
   * @param {number} shift - The shift value for the cipher.
   * @returns {string} - The encrypted text.
   */
  function encryptShiftCipher(text, shift) {
    var result = "";
    // For each character in text
    for (var i = 0; i < text.length; i++) {
      // let char be a character of the text
      var char = text[i];
      // if char is a letter using RE string a-z insensitive case, meaning upper or lower case
      if (char.match(/[a-z]/i)) {
        // create a boolean to see if the character is upper case or lower
        var isUpperCase = char === char.toUpperCase();
        // gets the start of the ascii alphabet being A for uppercase and a for lowercase
        var alphabetStart = isUpperCase ? "A" : "a";
        // get the characters ascii number and subtract it from 'a' or 'A' depending on the last line
        var code = char.charCodeAt(0) - alphabetStart.charCodeAt(0);
        // Shift the code by 1, default from the helper in handleClick()
        char = String.fromCharCode(
          ((code + shift) % 26) + alphabetStart.charCodeAt(0)
        );
      }
      // add to result
      result += char;
    }
    return result;
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
})();
