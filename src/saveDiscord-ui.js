
const PREFIX = '[saveDiscord]';

import { VERSION } from '.env';

import themeCss from './ui/theme.css';
import mainCss from './ui/main.css';
import savediscordTemplate from './ui/saveDiscord.html';


const config = {
    apiEndpoint: 'https://discord.com/api/v9/channels/{channel_id}/messages',
    token: 'YOUR_DISCORD_TOKEN',
    
    };
    
    async function searchMessages(channelId, fromDate, toDate) {

    }
    
    function saveDiscord(messages, format) {

    }
    
    async function main() {

    try {

        const messages = await searchMessages('channel_id', 'from_date', 'to_date');
        saveDiscord(messages, 'json');
    } 
    
    catch (error) {
        console.error('An error occurred:', error);
    }

    }
    
    main();
    