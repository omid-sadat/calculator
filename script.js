// Get display element
const display = document.getElementById("display");

// Get all buttons
const buttons = document.querySelectorAll("#buttons-n button");

// Store current input
let currentInput = "";

// Add click event to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=") {
      try {
        // Evaluate the expression safely
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = "Error";
      }
    } else if (value === "C") {
      // Clear the display
      currentInput = "";
    } else {
      // Add pressed button value
      currentInput += value;
    }

    // Update display
    display.value = currentInput;
  });
});
