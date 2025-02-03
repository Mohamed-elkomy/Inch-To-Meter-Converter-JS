let calculate = () => {
  // Select the input element from the DOM
  const input = document.querySelector("input");

  // Select the paragraph element where result will be displayed
  const p = document.querySelector("p");

  // Convert the input value to a number
  const val = Number(input.value);

  // Perform the conversion from inches to meters
  const operation = val * 0.0254;

  // Update the paragraph text content with the result, formatted to 2 decimal places
  p.textContent = operation;
};
