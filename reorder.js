const fs = require('fs');

const file = 'utils/translations.ts';
let content = fs.readFileSync(file, 'utf8');

// We need to reorder the items in the adsList array for both 'ar' and 'en'
// It might be easier to just remove `.reverse()` from Advertisements.tsx, 
// wait! the user says "الترتيب حسب التاريخ" meaning sort by date.

// Instead of parsing TS, let's just use regex to extract each object in adsList, but that's error prone.
// Let's see if we can just define the order of IDs and sort the ads in Advertisements.tsx.
