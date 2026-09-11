const arMonths = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'];
const enMonths = ['Muharram', 'Safar', 'Rabi', 'Rabi', 'Jumada', 'Jumada', 'Rajab', "Sha'ban", 'Ramadan', 'Shawwal', 'Dhu al-Qi', 'Dhu al-Hijjah'];

function parseDateScore(dateStr) {
  if (!dateStr || dateStr.includes('مفتوح') || dateStr.includes('Open')) return 0;
  
  let year = 1447;
  let month = 0;
  let day = 0;

  // convert Arabic numerals to English first
  const normalizedStr = dateStr.replace(/[\u0660-\u0669]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x0660 + 48));

  const yearMatch = normalizedStr.match(/14\d\d/);
  if (yearMatch) {
    year = parseInt(yearMatch[0], 10);
  }

  const dayMatch = normalizedStr.match(/\d+/);
  if (dayMatch) {
    day = parseInt(dayMatch[0], 10);
  }

  for (let i = 0; i < arMonths.length; i++) {
    if (dateStr.includes(arMonths[i]) || dateStr.toLowerCase().includes(enMonths[i].toLowerCase())) {
      month = i + 1;
      break;
    }
  }

  return year * 10000 + month * 100 + day;
}

console.log(parseDateScore("١ محرم ١٤٤٨هـ"));
console.log(parseDateScore("22 Sha'ban 1447"));
console.log(parseDateScore("٢٩ رجب 1447"));
console.log(parseDateScore("1 Muharram 1448"));
