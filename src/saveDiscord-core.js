/**
 * @param {string} channelId 
 * @param {string} fromDate
 * @param {string} toDate
 * @returns {Promise<Array>} 
 */
export async function searchMessages(channelId, fromDate, toDate) {
    const API_SEARCH_URL = `https://discord.com/api/v9/channels/${channelId}/messages/search`;
    const queryParams = new URLSearchParams({
        min_id: fromDate, 
        max_id: toDate,   
    });
    
    try {
    const response = await fetch(`${API_SEARCH_URL}?${queryParams.toString()}`, {
        method: 'GET',
        headers: {
            'Authorization': 'YOUR_DISCORD_TOKEN', 
    },
    });
    
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data.messages.map(msg => ({
            id: msg.id,
            content: msg.content,
            timestamp: msg.timestamp,
        }));
    } 
    
    catch (error) {
        console.error('Search request error:', error);
        throw error;
    }
}

/**
   * @param {Array} messages 
   * @param {string} format
   */

export function saveMessagesToFile(messages, format = 'json') {
    let output;

    if (format === 'json') {
        output = JSON.stringify(messages, null, 2);
    } 
    else if (format === 'txt') {
        output = messages.map(msg => `[${msg.timestamp}] ${msg.id}: ${msg.content}`).join('\n');
    }

    console.log('Saved messages:', output);
}
