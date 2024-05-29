import { generateTagMessage, generateActivityMessage } from '../utils/messageGenerator.js';


function getTrelloActionMessage(action) {
  let messageFunction;
  switch (action.type) {
    case 'updateCard':
      messageFunction = generateTagMessage;
      break;
    case 'commentCard':
      messageFunction = generateTagMessage;
      break;
    // 更多的 case...
    default:
      messageFunction = generateActivityMessage;
      break;
  }

  const message = messageFunction(action);
  return message;
}


export {
  getTrelloActionMessage

};

