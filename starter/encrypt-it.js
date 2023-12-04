/*
 * Starter file
 */
(function () {
  "use strict";

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
    console.log("Button clicked!"); // Log a message to the console when the button is clicked

    // Add the logic here to perform encryption or any other actions you need
  }

  /**
   * Handles the click event on the "Reset" button.
   */
  function handleReset() {
    var inputText = document.getElementById("input-text");
    inputText.value = ""; // Clear the text inside the textarea

    // Additional logic can be added here if needed
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
})();
