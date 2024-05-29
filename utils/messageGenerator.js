// import env from 'dotenv';
import dotenv from 'dotenv';
dotenv.config();

/**
 * 產生標記訊息
 * @param {*} action
 * @returns {string} 訊息
 */
function generateTagMessage(action) {
  const {
    TRELLO_ACCOUNT_TAG_ID: tagId
  } = process.env;

  const commentText = action.data.text || '';
  const cardDesc = action.data.card.desc || '';

  if (commentText.includes(tagId) || cardDesc.includes(tagId)) {
    // 生成訊息的程式碼
    const updateDate = new Date(action.date).toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });

    const message =
      `Oh Fuck, 您被標記了！
      標題：${action.data.card.name}
      內容: ${action.data.text || action.data.card.desc}
      連結：https://trello.com/c/${action.data.card.shortLink}
      活動類型：${action.type}
      時間：${updateDate}
      `
      ;
    return message;
  } else {
    return null;
  }
}



/**
 * 產生統一訊息
 * @param {*} action
 * @returns {string} 訊息
 */
function generateActivityMessage(action) {

  const updateDate = new Date(action.date).toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });

  const message = `Trello 卡片活動！
    標題：${action.data.card.name}
    活動類型：${action.type}
    時間：${updateDate}`;

  return message;
}

export {
  generateTagMessage,
  generateActivityMessage
};