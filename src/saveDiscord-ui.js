
const PREFIX = '[saveDiscord]';

import { VERSION } from '.env';

import themeCss from './ui/theme.css';
import mainCss from './ui/main.css';
import savediscordTemplate from './ui/saveDiscord.html';

import { searchMessages, saveMessagesToFile } from './saveDiscord-core.js';

function initUI() {
    const container = document.createElement('div');
    const startButton = document.createElement('button');
    const fromDateInput = document.createElement('input');
    const toDateInput = document.createElement('input');
    const formatSelector = document.createElement('select');
    const jsonOption = document.createElement('option');
    const txtOption = document.createElement('option');
    
    container.id = 'saveDiscordContainer';
    startButton.textContent = 'Save Messages';
    fromDateInput.type = 'date';
    toDateInput.type = 'date';
    jsonOption.value = 'json';
    jsonOption.textContent = 'JSON';
    txtOption.value = 'txt';
    txtOption.textContent = 'TXT';
    formatSelector.appendChild(jsonOption);
    formatSelector.appendChild(txtOption);
    
    startButton.addEventListener('click', async () => {
        const channelId = 'YOUR_CHANNEL_ID'; 
        const fromDate = fromDateInput.value;
        const toDate = toDateInput.value;
        const format = formatSelector.value;
    
    try {
        const messages = await searchMessages(channelId, fromDate, toDate);
        saveMessagesToFile(messages, format);
    } 
    
    catch (error) {
        console.error('Error:', error);
    }
    });
    

    container.appendChild(fromDateInput);
    container.appendChild(toDateInput);
    container.appendChild(formatSelector);
    container.appendChild(startButton);
    document.body.appendChild(container);
}

initUI();