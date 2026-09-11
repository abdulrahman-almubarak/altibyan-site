import React from 'react';
// Interfaces are now in types.ts, but we keep imports if needed or remove them.
// We only keep static configuration data here.

export const CONTACT_INFO = {
  phone: "0583089932",
  whatsappLink: "https://wa.me/966583089932",
  telegramLink: "https://t.me/+966583089932",
  locationName: "الرياض - حي الخليج - جامع سلمان الفارسي",
  mainMapLink: "https://maps.app.goo.gl/KbQnsK6YeNpbfXmv8",
  youtubeLink: "https://www.youtube.com/@%D9%85%D8%AC%D9%85%D8%B9-%D8%A7%D9%84%D8%AA%D8%A8%D9%8A%D8%A7%D9%86-%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8%B2%D9%8A",
  instagramLink: "https://www.instagram.com/altebyan.sa?igsh=ZWRtd2xpdGd1Ymhy",
  snapchatLink: "https://www.snapchat.com/@altebyan_sa?share_id=5VwnJLyH0MI&locale=ar-AA",
  tiktokLink: "https://www.tiktok.com/@altebyan.sa",
  facebookLink: "https://www.facebook.com/profile.php?id=61588516565275",
  twitterLink: "https://x.com/altebyan_",
  linkedinLink: "https://tr.ee/pu-auw4jih"
};

export const LINKS = {
  registration: "https://docs.google.com/forms/d/1k9hEO1o-_NuRGmxUP7Yl5CcERDZK72t7cUhb6EoXNXI/viewform?edit_requested=true&pli=1",
  donation: "https://store.maknon.org.sa/BQrXGa",
  achievements: "https://forms.gle/xt9yrtq9GZg61MWx6"
};

export const STATISTICS_DATA = [
  {
    id: "mosques",
    titleKey: "affiliatedMosques",
    items: [
      { id: 1, label: "المساجد", value: 10, key: "mosques" }
    ]
  },
  {
    id: "staff",
    titleKey: "workingStaff",
    items: [
      { id: 2, label: "المشرفين", value: 10, key: "supervisors" },
      { id: 3, label: "الاداريين", value: 12, key: "admins" },
      { id: 4, label: "المقرئين", value: 4, key: "reciters" },
      { id: 5, label: "المعلمين المجازين", value: 28, key: "certifiedTeachers" }
    ]
  },
  {
    id: "beneficiaries",
    titleKey: "beneficiaryCategories",
    items: [
      { id: 6, label: "مجموع الطلاب", value: 675, key: "totalStudents" },
      { id: 7, label: "الكبار", value: 23, key: "adults" },
      { id: 8, label: "قراءات", value: 31, key: "qiraat" },
      { id: 9, label: "الجامعيين", value: 12, key: "universityStudents" },
      { id: 10, label: "الابتدائي", value: 102, key: "elementary" },
      { id: 11, label: "المتوسط", value: 83, key: "intermediate" },
      { id: 12, label: "الثانوي", value: 167, key: "highschool" }
    ]
  },
  {
    id: "circles",
    titleKey: "circlesStats",
    items: [
      { id: 13, label: "الحلقات العامة", value: 17, key: "quranCircles" },
      { id: 14, label: "تصحيح التلاوة", value: 4, key: "tilawaCorrection" },
      { id: 15, label: "المراجعة", value: 4, key: "revision" },
      { id: 16, label: "المقارئ", value: 7, key: "maqari" },
      { id: 17, label: "تصحيح الفاتحة", value: 3, key: "fatihaCorrection" },
      { id: 18, label: "تصحيح الفاتحة (للجاليات)", value: 1, key: "fatihaExpats" },
      { id: 19, label: "نور البيان", value: 2, key: "noorAlbayanCircles" }
    ]
  },
  {
    id: "courses",
    titleKey: "programBeneficiaries",
    items: [
      { id: 20, label: "التجويد", value: 185, key: "tajweed" },
      { id: 21, label: "التلاوة", value: 103, key: "tilawa" },
      { id: 22, label: "مصطلحات الضبط", value: 45, key: "dabt" },
      { id: 23, label: "برنامج ختمتي", value: 10, key: "khatmati" },
      { id: 24, label: "نور البيان", value: 55, key: "noorAlbayan" },
      { id: 25, label: "الدورة الصيفية", value: 228, key: "summerCourse" },
      { id: 26, label: "الدورة الرمضانية", value: 332, key: "ramadanCourse" }
    ]
  },
  {
    id: "achievements",
    titleKey: "fruitsAndAchievements",
    items: [
      { id: 27, label: "الخاتمين", value: 20, key: "khatmeen" },
      { id: 28, label: "المجازين", value: 17, key: "certified" },
      { id: 29, label: "الاوجه المحفوظة", value: 19915, key: "memorizedPages" },
      { id: 30, label: "اوجه المراجعة", value: 50878, key: "reviewedPages" },
      { id: 31, label: "اوجه التلاوة", value: 10596, key: "recitedPages" }
    ]
  }
];

export const CIRCLE_TYPES = [
  {
    id: 'noor',
    ageRange: '4 - 6',
    iconName: 'Baby'
  },
  {
    id: 'elementary',
    ageRange: '7 - 12',
    iconName: 'School'
  },
  {
    id: 'intermediate',
    ageRange: '13 - 15',
    iconName: 'Backpack'
  },
  {
    id: 'highschool',
    ageRange: '16 - 18',
    iconName: 'GraduationCap'
  },
  {
    id: 'adults',
    ageRange: '18+',
    iconName: 'Briefcase'
  },
  {
    id: 'correction',
    ageRange: 'لكل السنوات',
    iconName: 'CheckCircle2'
  },
  {
    id: 'online',
    ageRange: 'لكل السنوات',
    iconName: 'Globe'
  },
  {
    id: 'maqari',
    ageRange: null,
    iconName: 'Mic2'
  },
  {
    id: 'general',
    ageRange: 'الكل',
    iconName: 'Users'
  }
];