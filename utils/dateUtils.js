export const convertToTaipeiTime = (date) => {
  return new Date(date).toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });
};