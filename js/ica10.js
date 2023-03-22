function displayMessage() {
    const body = document.body;
  
    // Create the message box container
    const panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    body.appendChild(panel);
  
    // Add the message text
    const msg = document.createElement('p');
    msg.textContent = 'Alert! This is My Message Box for ICA10';
    panel.appendChild(msg);
  
    // Add the close button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    panel.appendChild(closeBtn);
  
    // Add the click event listener to the close button
    closeBtn.addEventListener('click', () => panel.parentNode.removeChild(panel));
  }
  