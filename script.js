document.addEventListener('DOMContentLoaded', function() {
  const output = document.getElementById('output');
  const generateBtn = document.getElementById('generate-btn');

  // Generate a default random number when the page loads
  generateRandomNumber();

  generateBtn.addEventListener('click', function() {
      generateRandomNumber();
  });

  function generateRandomNumber() {
      const start = parseInt(document.getElementById('start').value);
      const end = parseInt(document.getElementById('end').value);

      if (isNaN(start) || isNaN(end) || start >= end) {
          output.textContent = "Please enter valid start and end values.";
          return;
      }

      const randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
      output.textContent = randomNumber;

      // Apply animation effect on generating a new number
      output.classList.add('animated');
      setTimeout(() => {
          output.classList.remove('animated');
      }, 1000);
  }
});
