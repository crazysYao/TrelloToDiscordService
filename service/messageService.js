import {
  generateTagMessage
  , generateAddIdentityMemberToCardMessage
  , generateActivityMessage
} from '../utils/messageGenerator.js';


/**
 * 取得Trello Message by action
 * @param {*} action
 * @returns
 */
function getTrelloActionMessage(action) {
  let messageFunction;
  switch (action.type) {
    case 'updateCard':
      messageFunction = generateTagMessage;
      break;
    case 'commentCard':
      messageFunction = generateTagMessage;
      break;
    case 'addMemberToCard':
      messageFunction = generateAddIdentityMemberToCardMessage;
      break;
    // 更多的 case...
    default:
      return null;
      // messageFunction = generateActivityMessage;
      break;
  }

  const message = messageFunction(action);
  return message;
}


export {
  getTrelloActionMessage
};

