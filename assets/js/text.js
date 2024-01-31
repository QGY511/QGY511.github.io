const textBoxContainer = document.getElementById('textBoxContainer');

const generateTextBoxes = () => {
  const textBoxes = CONFIG.textBoxes;
  for (const text of textBoxes) {
    const textBoxDiv = document.createElement('div');
    textBoxDiv.className = 'textbox-container'; // Updated class name
    
    const textBox = document.createElement('textarea');
    textBox.className = 'textbox'; // Updated class name
    textBox.placeholder = text; // Use placeholder instead of textContent
    
    textBoxDiv.appendChild(textBox);
    textBoxContainer.appendChild(textBoxDiv);
  }
};

// Call the function to generate text box containers
generateTextBoxes();
