import fs from 'fs';

// To just test logic:
const arMonths = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'];
const enMonths = ['Muharram', 'Safar', 'Rabi', 'Rabi', 'Jumada', 'Jumada', 'Rajab', "Sha'ban", 'Ramadan', 'Shawwal', 'Dhu al-Qi', 'Dhu al-Hijjah'];

function parseDateScore(dateStr) {
  if (!dateStr || dateStr.includes('مفتوح') || dateStr.includes('Open')) return 0;
  
  let year = 1447;
  let month = 0;
  let day = 0;

  const yearMatch = dateStr.match(/14\d\d/);
  if (yearMatch) {
    year = parseInt(yearMatch[0], 10);
  }

  const dayMatch = dateStr.match(/\d+|[\u0660-\u0669]+/);
  if (dayMatch) {
    // convert Arabic numerals to English
    const numStr = dayMatch[0].replace(/[\u0660-\u0669]/g, c => c.charCodeAt(0) - 0x0660);
    day = parseInt(numStr, 10);
  }

  for (let i = 0; i < arMonths.length; i++) {
    if (dateStr.includes(arMonths[i]) || dateStr.toLowerCase().includes(enMonths[i].toLowerCase())) {
      month = i + 1;
      break;
    }
  }

  return year * 10000 + month * 100 + day;
}

console.log(parseDateScore("٢٢ شعبان 1447"));
console.log(parseDateScore("22 Sha'ban 1447"));
console.log(parseDateScore("٢٩ رجب 1447"));
console.log(parseDateScore("مفتوح الآن"));
console.log(parseDateScore("١٠ رمضان 1447"));
console.log(parseDateScore("١ محرم ١٤٤٨هـ"));

