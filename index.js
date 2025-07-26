import fetch from 'node-fetch';
import { Client, Intents } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

import { getTrelloActionMessage } from './service/messageService.js';


// 從環境變數中讀 API 金鑰、Token 等敏感信息
const {
  TRELLO_API_KEY,
  TRELLO_TOKEN,
  DISCORD_TOKEN,
  DISCORD_CHANNEL_ID,
  TRELLO_BOARD_ID
} = process.env;




const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
  console.log('Discord bot is ready!');
});


client.login(DISCORD_TOKEN);

let lastCheckTime = new Date(); // 初始化為當前時間
let processedActionIds = new Set(); // 已處理的活動 ID 集合

// 檢查 Trello 更新
const checkTrelloUpdates = async () => {
  try {
    // updateCard
    const fetchValue = `https://api.trello.com/1/boards/${TRELLO_BOARD_ID}/actions?since=${lastCheckTime.toISOString()}&key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}`;
    const response = await fetch(fetchValue);
    const actions = await response.json();

    actions.forEach(action => {


      const actionDate = new Date(action.date);
      // 檢查活動是否已處理過
      if (!processedActionIds.has(action.id) && actionDate > lastCheckTime) {

        // 取得訊息
        const message = getTrelloActionMessage(action);

        // 取得頻道
        const channel = client.channels.cache.get(DISCORD_CHANNEL_ID);

        // 判斷 message 是否為空
        if (channel && message) {
          channel.send(message);
        }

        // 將活動 ID 添加到已處理集合中
        processedActionIds.add(action.id);
      }
    });
  } catch (error) {
    console.error('Error fetching Trello updates:', error);
  }
};

// 更新 lastCheckTime
const updateLastCheckTime = async () => {
  lastCheckTime = new Date();

  processedActionIds.clear(); // 清空已处理的活动 ID 集合

  console.log('lastCheckTime:', lastCheckTime);
};

// 檢查 Trello 更新
setInterval(checkTrelloUpdates, 10000); // 每 10 秒檢查一次

// 更新 lastCheckTime
setInterval(updateLastCheckTime, 20000); // 每 20 秒 update 一次 lastCheckTime