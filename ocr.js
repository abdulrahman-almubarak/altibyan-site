import Tesseract from 'tesseract.js';

Tesseract.recognize(
  'https://i.postimg.cc/zBNzwPfZ/IMG_20260211_WA0019.jpg',
  'ara'
).then(({ data: { text } }) => {
  console.log("TEXT:");
  console.log(text);
});
