const textBoxContainer = document.getElementById('textBoxContainer');

const generateTextBoxes = () => {
  const textBoxes = CONFIG.textBoxes;
  for (const text of textBoxes) {
    const textBoxDiv = document.createElement('div');
    textBoxDiv.className = 'textBoxContainer';
    
    const textBox = document.createElement('textarea');
    textBox.className = 'textBox';
    textBox.textContent = text;
    
    textBoxDiv.appendChild(textBox);
    textBoxContainer.appendChild(textBoxDiv);
  }
};

// Call the function to generate text box containers
generateTextBoxes();
