import { Mosque, AdItem, Recitation } from '../types';

export type Language = 'ar' | 'en';

interface Translation {
  nav: any;
  common: any;
  circleTypes: any;
  hero: any;
  ads: any;
  recitations: any;
  stats: any;
  about: any;
  mosques: any;
  donation: any;
  supporters: any;
  contact: any;
  assistant: any;
  mosquesList: Mosque[];
  adsList: AdItem[];
  recitationsList: Recitation[];
}

export const translations: Record<Language, Translation> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عن المجمع',
      circleTypes: 'أنواع الحلقات',
      ads: 'الإعلانات',
      recitations: 'تلاوات الطلاب',
      donate: 'ساهم معنا',
      stats: 'الإحصائيات',
      mosques: 'مساجدنا',
      contact: 'تواصل معنا',
      donateButton: 'تبرع',
      quickContact: 'اتصال',
      whatsapp: 'واتساب',
      telegram: 'تيليجرام',
      youtube: 'يوتيوب',
      location: 'الموقع'
    },
    common: {
      siteName: 'مجمع التبيان المركزي',
      loading: 'جاري التحميل...',
      readMore: 'اقرأ المزيد',
      close: 'إغلاق',
      viewMap: 'عرض الموقع على الخريطة',
      benefits: 'الفوائد والمميزات',
      curriculum: 'ماذا يتعلمون (المنهج)',
      details: 'التفاصيل الكاملة',
      featuredSections: 'أبرز الأقسام',
      chooseSection: 'اختر القسم الذي تود زيارته'
    },
    circleTypes: {
      title: 'أنواع الحلقات القرآنية',
      subtitle: 'نقدم برامج تعليمية متخصصة تناسب كافة الفئات العمرية والمستويات العلمية',
      age: 'العمر',
      years: 'سنوات',
      above: 'فما فوق',
      allAges: 'لكل السنوات',
      types: {
        noor: 'نور البيان',
        elementary: 'الابتدائي',
        intermediate: 'المتوسط',
        highschool: 'الثانوي',
        adults: 'حلقة كبار',
        correction: 'تصحيح التلاوة',
        online: 'عن بعد',
        maqari: 'مقرأة',
        general: 'حلقة عامة'
      },
      desc: {
        noor: 'تأسيس القراءة والكتابة والقرآن للأطفال الصغار.',
        elementary: 'حلقات مخصصة لطلاب المرحلة الابتدائية.',
        intermediate: 'برامج تربوية وقرآنية لطلاب المتوسطة.',
        highschool: 'تعزيز الحفظ والمراجعة لطلاب الثانوية.',
        adults: 'حلقات مرنة تتناسب مع أوقات الموظفين والكبار.',
        correction: 'برنامج مخصص لضبط قراءة سورة الفاتحة وقصار السور (متاح بعد العصر والعشاء).',
        online: 'حلقات مرنة يتم تقديمها عبر المنصات الرقمية (متاح بعد صلاة العشاء).',
        maqari: 'ضبط التلاوة والحصول على الإجازات المسندة.',
        general: 'حلقة شاملة تجمع جميع المراحل الدراسية في بيئة واحدة.'
      },
      benefits: {
        noor: ['إتقان مخارج الحروف العربية.', 'القراءة الصحيحة من المصحف.', 'حفظ قصار السور.', 'تنمية المهارات اللغوية.'],
        elementary: ['حفظ أجزاء من القرآن الكريم.', 'تعلم أحكام التجويد الأساسية.', 'ترسيخ الأخلاق الإسلامية.', 'تحسين جودة التلاوة.'],
        intermediate: ['حفظ مكثف مع مراجعة مستمرة.', 'فهم معاني الآيات.', 'تعلم أحكام التجويد المتقدمة.', 'بيئة تربوية آمنة.'],
        highschool: ['العمل على ختم القرآن الكريم.', 'تثبيت الحفظ القديم.', 'تعلم التفسير الميسر.', 'القدوة والقيادة.'],
        adults: ['تصحيح تلاوة الفاتحة وقصار السور.', 'حفظ ميسر حسب القدرة.', 'أوقات مرنة (بعد العصر/العشاء).', 'فهم مقاصد السور.'],
        correction: ['ضمان صحة الصلاة بتصحيح الفاتحة.', 'إتقان مخارج الحروف الأساسية.', 'مناسب لجميع المستويات والأعمار.', 'جلسات قصيرة ومركزة.'],
        online: ['مرونة كاملة في الوقت والمكان.', 'استخدام أحدث تقنيات التعليم التفاعلي.', 'متابعة إلكترونية دقيقة للمستوى.', 'مناسبة للمغتربين والبعيدين عن مقراتنا.'],
        maqari: ['ضبط التلاوة بروايات مختلفة.', 'نيل الإجازات المسندة.', 'التحضير لمسابقات كبرى.', 'تأهيل المعلمين.'],
        general: ['دمج الفئات العمرية (بيئة أخوية).', 'متابعة فردية لكل طالب.', 'مناسبة للأخوة والأقارب.', 'مرونة في التعامل مع المستويات.']
      },
      curriculum: {
        noor: ['منهج نور البيان المعتمد.', 'تلقين قصار السور.', 'مبادئ العقيدة والأخلاق.'],
        elementary: ['كتاب تجويد ميسر.'],
        intermediate: ['تفسير كلمات القرآن.'],
        highschool: ['تدبر القرآن الكريم.'],
        adults: ['منهج تصحيح التلاوة.', 'حفظ مختارات من السور.'],
        correction: ['وقت الحلقة: بعد صلاة العصر وبعد صلاة العشاء.', 'منهج تصحيح الفاتحة.', 'دروس ميسرة في أحكام التجويد.', 'تلقين جزء عم.'],
        online: ['وقت الحلقة: بعد صلاة العشاء.', 'منهج الحفظ والمراجعة (حسب مستوى الطالب).', 'تصحيح التلاوة عبر الاتصال المرئي.', 'دروس تجويد تفاعلية عن بعد.'],
        maqari: ['ختمة كاملة غيباً.', 'دراسة رواية حفص عن عاصم.', 'القراءات السبع (للمتميزين).', 'حفظ متن الجزرية وتحفة الاطفال والشاطبية.'],
        general: ['خطط حفظ فردية.', 'مراجعة تراكمية.', 'منهج تربوي عام.']
      }
    },
    hero: {
      title: 'مجمع التبيان المركزي',
      subtitle: 'نورٌ يملأ الآفاق، وتربيةٌ تبني الأجيال، بيئة قرآنية متميزة تسعى لخدمة كتاب الله وتنشئة جيل حافظ لكتاب الله.',
      register: 'سجل معنا الآن',
      registerMen: 'تسجيل الرجال',
      registerWomen: 'تسجيل النساء',
      donate: 'ساهم معنا'
    },
    ads: {
      title: 'آخر الإعلانات والأخبار',
      subtitle: 'ابق على اطلاع بآخر مستجدات المجمع وفعالياته القادمة',
      date: 'تاريخ النشر',
    },
    recitations: {
      title: 'تلاوات الطلاب',
      subtitle: 'أصوات ندية وتلاوات خاشعة من حناجر طلابنا المتميزين',
      listen: 'استمع الآن',
      student: 'القارئ',
      surah: 'سورة'
    },
    stats: {
      title: 'إحصائيات المجمع',
      subtitle: 'أرقام تعكس مسيرة العطاء والإنجاز في خدمة كتاب الله الكريم',
      affiliatedMosques: 'المساجد التابعة',
      workingStaff: 'الكوادر العاملين',
      beneficiaryCategories: 'الفئات المستفيدة',
      circlesStats: 'الحلقات',
      programBeneficiaries: 'المستفيدين من الدورات والبرامج',
      fruitsAndAchievements: 'الثمار والإنجازات لعام 1447',
      mosques: 'المساجد',
      supervisors: 'المشرفين',
      admins: 'الاداريين',
      reciters: 'المقرئين',
      certifiedTeachers: 'المعلمين المجازين',
      totalStudents: 'مجموع الطلاب',
      adults: 'الكبار',
      qiraat: 'قراءات',
      universityStudents: 'الجامعيين',
      elementary: 'الابتدائي',
      intermediate: 'المتوسط',
      highschool: 'الثانوي',
      quranCircles: 'الحلقات العامة',
      tilawaCorrection: 'تصحيح التلاوة',
      revision: 'المراجعة',
      maqari: 'المقارئ',
      fatihaCorrection: 'تصحيح الفاتحة',
      fatihaExpats: 'تصحيح الفاتحة (للجاليات)',
      noorAlbayanCircles: 'نور البيان',
      tajweed: 'التجويد',
      tilawa: 'التلاوة',
      dabt: 'مصطلحات الضبط',
      khatmati: 'برنامج ختمتي',
      noorAlbayan: 'نور البيان',
      summerCourse: 'الدورة الصيفية',
      ramadanCourse: 'الدورة الرمضانية',
      khatmeen: 'الخاتمين',
      certified: 'المجازين',
      memorizedPages: 'الاوجه المحفوظة',
      reviewedPages: 'اوجه المراجعة',
      recitedPages: 'اوجه التلاوة'
    },
    about: {
      title: 'عن المجمع',
      verse: '﴿وَنَزَّلْنَا عَلَيْكَ الْكِتَابَ تِبْيَانًا لِكُلِّ شَيْءٍ وَهُدًى وَرَحْمَةً وَبُشْرَى لِلْمُسْلِمِينَ﴾',
      verseSource: '[النحل: 89]',
      mainDescription: 'صرحٌ قرآني رائد يسعى لخدمة كتاب الله وتنشئة جيلٍ قرآنيٍ متميز. نحمل على عاتقنا أمانة تعليم القرآن الكريم، ونسعى لتربية جيل يحفظ القرآن ويعمل به في بيئة تعليمية محفزة.',
      meaningTitle: 'دلالة الاسم في المعجم',
      wordComplex: 'مُجَمَّع',
      wordTibyan: 'التِّبْيَان',
      wordCentral: 'المَرْكَزي',
      meaningComplex: 'لغةً: اسم مفعول من جَمَعَ، وهو الموضع الذي يجتمع فيه الناس أو الأشياء.\nاصطلاحاً: كيان تعليمي متكامل يجمع عدة مسارات تربوية وقرآنية تحت إدارة موحدة لخدمة كتاب الله.',
      meaningTibyan: 'لغةً: مصدر للفعل بَيَّنَ، وهو الكشف والإيضاح التام والجلي.\nاصطلاحاً: منهج تعليمي يهدف لإظهار حقائق القرآن ومعانيه بوضوح، مستلهمين ذلك من وصف القرآن الكريم لنفسه بأنه تبيانٌ لكل شيء.',
      meaningCentral: 'لغةً: نسبة إلى المركز، وهو النقطة التي يدور حولها الشيء والقاعدة التي يستند إليها.\nاصطلاحاً: المقر الرئيس ونقطة الانطلاق لكافة الحلقات والمبادرات القرآنية، والقلب النابض للمشاريع التعليمية في المنطقة.',
      fullSentenceMeaningTitle: 'المعنى العام للاسم',
      fullSentenceMeaning: 'مجمع التبيان المركزي: هو صرح تعليمي قرآني، جامع بين تحفيظ القرآن وتعليم قراءته وإقرائه، يقوم على منهج قرآني واضح، لحفظ راسخ ومتين لكتاب الله تعالى، ونعمل على كونه مقرًا مهمًّا لإعداد جيل حافظ متقن، ومستوعب لقيم القرآن ومقاصده العظيمة.',
      logoTitle: 'رؤيتنا ورسالتنا',
      logoPoint1: 'توفير بيئة قرآنية آمنة وجاذبة لكل الفئات.',
      logoPoint2: 'بناء شراكات مجتمعية لخدمة القرآن الكريم.',
      logoPoint3: 'تأهيل معلمين متميزين ومجازين لضمان جودة التعليم.',
      logoPoint4: 'استخدام أحدث الوسائل التقنية في التعليم والتحفيظ.',
      programTitle: 'برنامج نور البيان للأطفال',
      programDesc: 'برنامج تعليمي يدمج بين تعليم القرآن والقراءة والكتابة بطريقة حديثة (صوت، صورة، حركة) لصناعة جيل قرآني من سن 4-6 سنوات، وفق منهج معتمد.',
      programStats: 'يضم حالياً ٨٥ طفلاً',
      missionTitle: 'رسالتنا',
      missionDesc: 'الإسهام في تعليم كتاب الله تعالى وغرس ما اشتمل عليه من قيم .. ( لتخريج جيل يحفظ كلام الله ليعمل به ويعلمه فيكون لبنة صالحة ينفع دينه ويسهم في بناء وطنه ) .',
      qualityTitle: 'رؤيتنا',
      qualityDesc: 'الريادة والتميز المؤسسي في تعليم القرآن .. ( من خلال منهج يمتاز بالجودة والإتقان ومعلمين مؤهلين أكفاء وإشراف فاعل في عمل مؤسسي متكامل يمتاز بروح الفريق الواحد ) .',
      methodTitle: 'منهجنا',
      methodDesc: 'برامج تعليمية متنوعة تناسب كافة الفئات العمرية، مع متابعة دقيقة لمستوى الطلاب.',
      quote: 'خيركم من تعلم القرآن وعلمه',
      quoteSource: 'أخرجه البخاري',
      mainLocation: 'الموقع الرئيسي',
      mainMosque: 'جامع سلمان الفارسي',
      moreAchievements: 'للمزيد عن إنجازاتنا'
    },
    mosques: {
      title: 'مساجدنا وحلقاتنا',
      subtitle: 'ننتشر في عدة أحياء بالرياض لنكون الأقرب إليكم. ابحث عن المسجد الأقرب لمنزلك من القائمة أدناه.',
      availableCircles: 'الحلقات المتوفرة'
    },
    donation: {
      tag: 'تجارة لن تبور',
      title: 'فرص المساهمة',
      subtitle: 'ساهم معنا في خدمة كتاب الله، وكن شريكاً في الأجر من خلال باقات التبرع المتنوعة',
      packages: [
        { title: 'كفالة طالب لمدة أسبوع', price: '40 ريال', icon: 'student' },
        { title: 'كفالة طالب لمدة شهر', price: '150 ريال', icon: 'student' },
        { title: 'كفالة معلم نصف شهر', price: '500 ريال', icon: 'teacher' },
        { title: 'كفالة معلم لمدة شهر', price: '1000 ريال', icon: 'teacher' },
        { title: 'كفالة حلقة', desc: '(معلم مع حوافز الطلاب المتميزين)', price: '1500 ريال', icon: 'circle' }
      ],
      donateBtn: 'تبرع الآن',
      storeTitle: 'هل ترغب بالمساهمة بمبلغ آخر؟',
      storeSubtitle: 'يمكنك زيارة المتجر الإلكتروني واختيار أوجه الخير التي تناسبك',
      storeBtn: 'زيارة المتجر الإلكتروني'
    },
    supporters: {
      title: 'شريك النجاح',
      subtitle: 'نعتز بشراكتنا مع الجهة المشرفة والراعية لمسيرة تحفيظ القرآن الكريم في الرياض',
      partnerName: 'جمعية مكنون',
      partnerType: 'الجمعية الخيرية لتحفيظ القرآن الكريم بالرياض',
      visitPartner: 'زيارة الموقع الرسمي'
    },
    contact: {
      title: 'مجمع التبيان المركزي',
      desc: 'مجمع قرآني رائد يسعى لتربية جيل قرآني متميز من خلال بيئة جاذبة وكوادر مؤهلة.',
      contactInfo: 'معلومات التواصل',
      phone: 'رقم الهاتف',
      whatsapp: 'واتساب',
      telegram: 'تيليجرام',
      youtube: 'يوتيوب',
      address: 'العنوان الرئيسي',
      rights: 'جميع الحقوق محفوظة.',
      designedBy: 'صمم بإتقان',
      openMap: 'افتح الخريطة',
      instagram: 'انستغرام',
      snapchat: 'سناب شات',
      tiktok: 'تيك توك',
      facebook: 'فيسبوك',
      twitter: 'تويتر (X)',
      linkedin: 'لينكد إن',
    },
    assistant: {
      placeholder: 'اكتب استفسارك...',
      typing: 'جاري الكتابة...',
      suggestions: {
        register: "كيف يمكنني التسجيل؟",
        donate: "ما هي طرق التبرع؟",
        location: "أين يقع المجمع؟",
        mosques: "ما هي المساجد التابعة للمجمع؟",
        students: "كم عدد الطلاب في المجمع؟"
      }
    },
    mosquesList: [
      { id: 1, name: "جامع سلمان الفارسي (الرئيسي)", mapLink: "https://maps.app.goo.gl/KbQnsK6YeNpbfXmv8", availableCircles: ['noor', 'elementary', 'intermediate', 'highschool', 'correction', 'online', 'maqari'] },
      { id: 2, name: "جامع الرومي", mapLink: "https://maps.app.goo.gl/fW2sQpCdkqjkNGFQ9", availableCircles: ['general'] },
      { id: 3, name: "جامع الروسان", mapLink: "https://maps.app.goo.gl/ynxKfqs6EhJrsPsF7", availableCircles: ['elementary', 'intermediate', 'highschool', 'maqari'] },
      { id: 4, name: "جامع الميمان", mapLink: "https://maps.app.goo.gl/zyZ58aeV828Qdfbw8", availableCircles: ['elementary', 'intermediate', 'highschool'] },
      { id: 5, name: "جامع الشيخ عبدالله بن راشد بن كليب", mapLink: "https://maps.app.goo.gl/FEDiKmtZYD7G8cUH9", availableCircles: ['elementary', 'intermediate'] },
      { id: 6, name: "جامع عبدالمحسن المحيسن", mapLink: "https://maps.app.goo.gl/4nfgYPzBQg8YPh8VA", availableCircles: ['maqari'] },
      { id: 7, name: "مسجد عقبة بن نافع", mapLink: "https://maps.app.goo.gl/r7Wkgrqh6MGQyEiR7", availableCircles: ['maqari'] },
      { id: 8, name: "جامع الشيخ عبد الرحمن بن عبدالله آل الشيخ", mapLink: "https://maps.app.goo.gl/xBW1cgguaBKgFaXP9", availableCircles: ['maqari'] },
      { id: 9, name: "مسجد أبو عبيدة بن الجراح", mapLink: "https://maps.app.goo.gl/PmVzeR45QMZBehyT6", availableCircles: ['adults'] },
      { id: 10, name: "مسجد سعيد بن زيد", mapLink: "https://maps.app.goo.gl/tw2E9swcKpyFgjPe8", availableCircles: ['adults'] },
    ],
    adsList: [
      {
        id: 7,
        title: "التسجيل في دورات المجمع",
        description: "التسجيل متاح الآن في دورات مجمع التبيان.",
        date: "٥ ربيع الأول ١٤٤٨هـ",
        image: "https://i.postimg.cc/7hLSsRDH/IMG-20260818-WA0102(1).jpg",
        link: "https://docs.google.com/forms/d/1k9hEO1o-_NuRGmxUP7Yl5CcERDZK72t7cUhb6EoXNXI/viewform?edit_requested=true&pli=1",
        buttons: [{ text: "سجل معنا الآن", link: "https://docs.google.com/forms/d/1k9hEO1o-_NuRGmxUP7Yl5CcERDZK72t7cUhb6EoXNXI/viewform?edit_requested=true&pli=1" }],
        details: {
          sections: [
            { title: "التفاصيل", items: ["مسارات متنوعة تناسب الجميع", "خطة حفظ ومراجعة متقنة", "نخبة من المعلمين المتميزين", "جوائز وتحفيز مستمر"] }
          ]
        }
      },
      {
        id: 0,
        title: "دورة التبيان الرمضانية السابعة (1447هـ)",
        description: "انطلاق التسجيل في دورة التبيان الرمضانية السابعة (تصريح: 7641). فروع متنوعة وجوائز متميزة.",
        date: "٢٢ شعبان 1447",
        image: "https://i.postimg.cc/7ZvFrCTR/IMG-20260210-WA0010.jpg",
        link: "https://forms.gle/UP6SERTgbV3KtybWA",
        details: {
          sections: [
            { title: "فروع الدورة", items: ["٣ أجزاء", "٥ أجزاء", "١٠ أجزاء", "١٥ جزء", "٢٠ جزء", "٣٠ جزء"] },
            { title: "البرامج المصاحبة", items: ["دورة تجويد", "فرسان الدورة", "تصحيح التلاوة", "غريب القرآن"] },
            { title: "مميزات الدورة", items: ["معلمون مجازون", "جوائز للفائزين", "هدايا وحوافز يومية"] },
            { title: "فترات الدورة", items: ["الفجر", "العصر", "بعد التراويح"] },
            { title: "مدة الدورة", items: ["من ١ رمضان إلى ١٩ رمضان", "من الأحد إلى الخميس"] }
          ]
        }
      },
      {
        id: 1,
        title: "انطلاق التسجيل للفصل الدراسي الجديد",
        description: "نعلن عن فتح باب القبول والتسجيل في جميع حلقات المجمع لمختلف الأعمار.",
        date: "٢٩ رجب 1447",
        image: "https://i.postimg.cc/zBNzwPfZ/IMG_20260211_WA0019.jpg",
        link: "https://docs.google.com/forms/d/1k9hEO1o-_NuRGmxUP7Yl5CcERDZK72t7cUhb6EoXNXI/viewform?edit_requested=true&pli=1",
        details: {
          sections: [
            { title: "الشروط", items: ["اجتياز المقابلة.", "المواظبة على الحضور.", "الالتزام بالمنهج الفصلي وإنجازه."] },
            { title: "المميزات", items: ["معلمين مجازين.", "منهج حفظ يناسب جميع المستويات.", "استقبال جميع المراحل الدراسية.", "جوائز تحفيزية أسبوعية وفصلية."] }
          ]
        }
      },
      {
        id: 2,
        title: "مشروع تصحيح تلاوة سورة الفاتحة",
        description: "سبع آيات فقط! لكنها أعظم سور القرآن. شاركنا في تصحيح تلاوة الفاتحة وقصار السور.",
        date: "مفتوح الآن",
        image: "https://i.postimg.cc/Xv4Fqx0N/IMG_20260211_WA0020.jpg",
        link: "https://forms.gle/kFCxzGE2TXL3Xvn39",
        buttons: [
          { text: "تسجيل الرجال", link: "https://forms.gle/kFCxzGE2TXL3Xvn39" },
          { text: "تسجيل النساء", link: "https://forms.gle/HPBPbpDduTPvzuZo8" }
        ],
        details: {
          sections: [
            { 
              title: "عن البرنامج", 
              items: [
                "7️⃣ *سَبـعُ آيــاتٍ فَقَـط!* لڪنّھاً أعظمُ سُوَر القُـرآن!",
                "واسمھا *سُورةُ الصـلاة* 🕌",
                "قِراءتُنا تَستَقيم، مع أجرٍ عَظيم فِـي تصحيــحِ قِــراءةِ الفــــاتِحة وقِصــــارِ السُـــوَر"
              ] 
            },
            {
              title: "للتواصل (واتساب)",
              items: [
                "الرجال: 0583089932",
                "النساء: 0559907862"
              ]
            }
          ]
        }
      },
      {
        id: 3,
        title: "مشروع تصحيح التلاوة للجاليات (Urdu)",
        description: "انطلاق التسجيل في مشروع تصحيح التلاوة للجاليات (الناطقين بغير العربية) لضبط تلاوة الفاتحة وقصار السور.",
        date: "٢٤ شعبان 1447",
        image: "https://i.postimg.cc/dVFVQDdH/IMG_20260215_WA0032.jpg",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSddwavhFd5qyS6bkVGXIEcPIaMpsVRVKaHnFpslBe3FhBF1dg/viewform?fbzx=1838715781690917317",
        details: {
          sections: [
            { 
              title: "پروگرام کی تفصیلات (Urdu)", 
              items: [
                "قرآن مجید کی تلاوت درست کرنے کا منصوبہ (غیر ملکیوں کے لیے)",
                "سورہ فاتحہ اور چھوٹی سورتوں کی صحیح تلاوت سیکھنا۔",
                "ماہر اساتذہ کی نگرانی میں آن لائن کلاسز۔",
                "رجسٹریشن کے لیے لنک پر کلک کریں۔"
              ] 
            },
            {
              title: "أهداف المشروع",
              items: [
                "تصحيح تلاوة سورة الفاتحة.",
                "ضبط مخارج الحروف في قصار السور.",
                "تعليم مبادئ التجويد الأساسية.",
                "دروس إيمانية ميسرة."
              ]
            }
          ]
        }
      },
      {
        id: 4,
        title: "التقرير النصفي للدورة الرمضانية السابعة",
        description: "يسر مجمع التبيان المركزي أن يقدم لكم التقرير النصفي لإنجازات الدورة الرمضانية السابعة لعام 1447هـ.",
        date: "١٠ رمضان 1447",
        image: "https://i.postimg.cc/5ymDWFpX/3f332618-2d49-4ee8-a09e-52e29ecb924b.jpg",
        details: {
          sections: [
            { title: "إحصائيات الدورة", items: ["عدد الطلاب المشاركين", "عدد الحلقات المفعلة", "نسبة الإنجاز في الحفظ", "البرامج المصاحبة المنفذة"] },
            { title: "أبرز الإنجازات", items: ["ختمات قرآنية", "تميز في الأداء", "تفاعل مجتمعي كبير"] }
          ]
        }
      },
      {
        id: 5,
        title: "انطلاق دورة التبيان الصيفية ٦",
        description: "يسر الجمعية الخيرية لتحفيظ القرآن الكريم بالرياض (مكنون) بالتعاون مع مجمع التبيان المركزي دعوتكم للمشاركة في دورة التبيان الصيفية السادسة.",
        date: "١ محرم ١٤٤٨هـ",
        image: "https://i.postimg.cc/xT6kXKRL/IMG-20260704-WA0002.jpg",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSeG60nj6gTgzsaIMUBoPAPB6lkt7MAgOip6scr-7PShFVnPgw/viewform",
        details: {
          sections: [
            { title: "التاريخ", items: ["تبدأ الدورة بمشيئة الله يوم الأحد ١ محرم ١٤٤٨هـ"] },
            { title: "فروع الدورة", items: ["جزء", "٣ أجزاء", "٥ أجزاء", "١٠ أجزاء", "١٥ جزء", "٢٠ جزء", "٢٥ جزء", "القرآن كامل"] },
            { title: "مميزات الدورة", items: ["مقرؤون معتمدون في مكنون", "معلمون مجازون", "شهادات للمنجزين", "جوائز للمتميزين"] },
            { title: "البرامج المصاحبة", items: ["دورة تجويد", "غريب القرآن"] },
            { title: "فترات الدورة", items: ["بعد صلاتي الفجر والعصر مباشرة", "المغرب والعشاء"] }
          ]
        }
      },
      {
        id: 6,
        title: "ختمة أصغر خاتم في التبيان واحتفاء الجمعية",
        description: "احتفت الجمعية الخيرية لتحفيظ القرآن الكريم بالرياض بأصغر خاتم لكتاب الله في مجمع التبيان المركزي في أجواء قرآنية بهيجة.",
        date: "٩ محرم ١٤٤٨هـ",
        image: "https://i.postimg.cc/m2zf4LN0/IMG-20260705-WA0024.jpg",
        details: {
          sections: [
            { title: "تفاصيل الخبر", items: ["تكريم أصغر خاتم", "حضور وتشريف مسؤولي الجمعية والمجمع", "توزيع الجوائز والهدايا التذكارية"] }
          ]
        }
      }
    ],
    recitationsList: [
      { id: 0, student: "عبدالمجيد بن حسن الشهري", surah: "سورة النمل", link: "https://youtu.be/kCKnLoexeAg", thumbnail: "https://img.youtube.com/vi/kCKnLoexeAg/hqdefault.jpg" },
      { id: 1, student: "عبدالرحمن الخولاني", surah: "سورة النجم", link: "https://youtu.be/YtM-YwmmpY4", thumbnail: "https://img.youtube.com/vi/YtM-YwmmpY4/hqdefault.jpg" },
      { id: 2, student: "عبدالملك عبدالقادر الأنصاري", surah: "سورة النبأ", link: "https://youtu.be/2AOmd9FyglE", thumbnail: "https://img.youtube.com/vi/2AOmd9FyglE/hqdefault.jpg" },
      { id: 3, student: "صلاح بن هشام", surah: "سورة الطارق", link: "https://youtu.be/NupjCHfg07M", thumbnail: "https://img.youtube.com/vi/NupjCHfg07M/hqdefault.jpg" },
      { id: 4, student: "أحمد بن هشام", surah: "سورة فاطر", link: "https://youtu.be/9tccFoNeR6M", thumbnail: "https://img.youtube.com/vi/9tccFoNeR6M/hqdefault.jpg" },
      { id: 5, student: "محمد بن طه أبو كريشة", surah: "سورة النجم (رواية خلف عن حمزة)", link: "https://youtu.be/U1QfNi16Ilc", thumbnail: "https://img.youtube.com/vi/U1QfNi16Ilc/hqdefault.jpg" }
    ]
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      circleTypes: 'Circles',
      ads: 'Ads',
      recitations: 'Recitations',
      donate: 'Donate',
      stats: 'Stats',
      mosques: 'Mosques',
      contact: 'Contact',
      donateButton: 'Donate',
      quickContact: 'Call',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      youtube: 'YouTube',
      location: 'Location'
    },
    common: {
      siteName: 'Al-Tibyan Central Complex',
      loading: 'Loading...',
      readMore: 'Read More',
      close: 'Close',
      viewMap: 'View Map',
      benefits: 'Benefits & Features',
      curriculum: 'What they learn',
      details: 'Full Details',
      featuredSections: 'Featured Sections',
      chooseSection: 'Choose a section to visit'
    },
    circleTypes: {
      title: 'Quranic Circle Types',
      subtitle: 'We provide specialized educational programs for all ages and levels',
      age: 'Age',
      years: 'Years',
      above: 'and above',
      allAges: 'All Ages',
      types: {
        noor: 'Noor Al-Bayan',
        elementary: 'Elementary',
        intermediate: 'Intermediate',
        highschool: 'High School',
        adults: 'Adults',
        correction: 'Recitation Correction',
        online: 'Online Circle',
        maqari: 'Maqari (Elite)',
        general: 'General Circle'
      },
      desc: {
        noor: 'Foundational reading, writing, and Quran for young children.',
        elementary: 'Dedicated circles for elementary school students.',
        intermediate: 'Educational and Quranic programs for intermediate students.',
        highschool: 'Intensive memorization for high school students.',
        adults: 'Flexible circles for employees and adults.',
        correction: 'Special program for perfecting Al-Fatiha and short surahs.',
        online: 'Flexible remote circles via digital platforms.',
        maqari: 'Perfecting recitation and obtaining supported Ijazahs.',
        general: 'A comprehensive circle for all ages in one environment.'
      },
      benefits: {
        noor: ['Mastering Arabic phonetics.', 'Correct reading from Mushaf.', 'Memorizing short Surahs.', 'Developing language skills.'],
        elementary: ['Memorizing Quranic parts.', 'Basic Tajweed rules.', 'Islamic morals.', 'Improving recitation.'],
        intermediate: ['Intensive memorization.', 'Understanding word meanings.', 'Advanced Tajweed.', 'Safe environment.'],
        highschool: ['Working on full completion.', 'Reviewing old parts.', 'Simplified Tafsir.', 'Leadership skills.'],
        adults: ['Correcting Fatiha recitation.', 'Flexible memorization.', 'Fits work schedules.', 'Understanding Surah purposes.'],
        correction: ['Ensuring valid prayer.', 'Mastering letter exits.', 'Suitable for all levels.', 'Focused sessions.'],
        online: ['Full flexibility.', 'Modern interactive tools.', 'Digital progress tracking.', 'Suitable for expats.'],
        maqari: ['Multi-narration mastery.', 'Supported Ijazahs.', 'Competition prep.', 'Teacher training.'],
        general: ['Integrating age groups.', 'Individual follow-up.', 'Suitable for siblings.', 'Flexible levels.']
      },
      curriculum: {
        noor: ['Noor Al-Bayan book.', 'Short Surahs dictation.', 'Basic Faith & Morals.'],
        elementary: ['Simplified Tajweed book.'],
        intermediate: ['Quran vocabulary meanings.'],
        highschool: ['Quranic contemplation.'],
        adults: ['Recitation correction manual.', 'Selected Surahs memorization.'],
        correction: ['After Asr & Isha.', 'Al-Fatiha correction curriculum.', 'Easy Tajweed lessons.', 'Juz Amma teaching.'],
        online: ['After Isha prayer.', 'Individual memorization plan.', 'Video call correction.', 'Interactive remote Tajweed lessons.'],
        maqari: ['Full Quran memorization.', 'Hafs Narration mastery.', 'The Seven Readings (elite).', 'Matn Al-Jazariyyah & Tuhfa.'],
        general: ['Custom memorization plans.', 'Cumulative review.', 'General Islamic education.']
      }
    },
    hero: {
      title: 'Al-Tibyan Central Complex',
      subtitle: 'A light filling the horizons, building generations, a distinguished Quranic environment dedicated to serving Allah\'s Book and raising a generation that memorizes it.',
      register: 'Join Us Now',
      registerMen: 'Men Registration',
      registerWomen: 'Women Registration',
      donate: 'Contribute Now'
    },
    ads: {
      title: 'Latest News & Ads',
      subtitle: 'Stay updated with our latest events and activities',
      date: 'Published on',
    },
    recitations: {
      title: 'Student Recitations',
      subtitle: 'Beautiful and soulful recitations from our distinguished students',
      listen: 'Listen Now',
      student: 'Reader',
      surah: 'Surah'
    },
    stats: {
      title: 'Our Statistics',
      subtitle: 'Numbers reflecting our journey of serving the Holy Quran',
      affiliatedMosques: 'Affiliated Mosques',
      workingStaff: 'Working Staff',
      beneficiaryCategories: 'Beneficiary Categories',
      circlesStats: 'Quranic Circles',
      programBeneficiaries: 'Program Beneficiaries',
      fruitsAndAchievements: 'Fruits and Achievements for 1447',
      mosques: 'Mosques',
      supervisors: 'Supervisors',
      admins: 'Administrators',
      reciters: 'Reciters',
      certifiedTeachers: 'Certified Teachers',
      totalStudents: 'Total Students',
      adults: 'Adults',
      qiraat: 'Qiraat',
      universityStudents: 'University Students',
      elementary: 'Elementary',
      intermediate: 'Intermediate',
      highschool: 'High School',
      quranCircles: 'General Circles',
      tilawaCorrection: 'Tilawa Correction',
      revision: 'Revision',
      maqari: 'Maqari Centers',
      fatihaCorrection: 'Fatiha Correction',
      fatihaExpats: 'Fatiha Correction (Expats)',
      noorAlbayanCircles: 'Noor Al-Bayan',
      tajweed: 'Tajweed',
      tilawa: 'Recitation',
      dabt: 'Dabt (Marking Rules)',
      khatmati: 'Khatmati Program',
      noorAlbayan: 'Noor Al-Bayan',
      summerCourse: 'Summer Course',
      ramadanCourse: 'Ramadan Course',
      khatmeen: 'Graduates (Khatmeen)',
      certified: 'Certified (Ijazah)',
      memorizedPages: 'Memorized Pages',
      reviewedPages: 'Reviewed Pages',
      recitedPages: 'Recited Pages'
    },
    about: {
      title: 'About the Complex',
      verse: '﴿And We have sent down to you the Book as clarification for all things and as guidance and mercy and good tidings for the Muslims.﴾',
      verseSource: '[An-Nahl: 89]',
      mainDescription: 'A leading Quranic institution seeking to serve the Book of Allah and raise a distinguished generation. We carry the trust of teaching the Holy Quran in a motivating educational environment.',
      meaningTitle: 'Etymology of the Name',
      wordComplex: 'Complex',
      wordTibyan: 'Al-Tibyan',
      wordCentral: 'Central',
      meaningComplex: 'Linguistically: A noun referring to the place where people or things gather.\nTechnically: An integrated educational entity combining multiple pedagogical and Quranic paths.',
      meaningTibyan: 'Linguistically: A source meaning "Clarification" or "Full disclosure".\nTechnically: An educational methodology aimed at making Quranic truths manifest clearly.',
      meaningCentral: 'Linguistically: Relating to the "Center" or hub.\nTechnically: The headquarters and starting point for all Quranic initiatives in the region.',
      fullSentenceMeaningTitle: 'General Meaning of the Name',
      fullSentenceMeaning: 'Al-Tibyan Central Complex: A Quranic educational institution that combines Quran memorization with teaching its reading and recitation. It is based on a clear Quranic methodology for firm and solid memorization of the Book of Allah Almighty, serving as a vital center for preparing a generation that masters and embodies Quranic values and great purposes.',
      logoTitle: 'Vision & Mission',
      logoPoint1: 'Providing a safe and attractive Quranic environment.',
      logoPoint2: 'Building community partnerships to serve the Quran.',
      logoPoint3: 'Training distinguished and certified teachers.',
      logoPoint4: 'Using modern technologies in memorization.',
      programTitle: 'Noor Al-Bayan for Kids',
      programDesc: 'An integrated program teaching Quran, reading, and writing using modern methods for children aged 4-6.',
      programStats: 'Currently hosting 85 children',
      missionTitle: 'Our Mission',
      missionDesc: 'Contributing to teaching the Book of Allah Almighty and instilling the values it contains .. (To graduate a generation that memorizes the Word of Allah to act upon it and teach it, becoming a righteous building block that benefits its religion and contributes to building its nation) .',
      qualityTitle: 'Our Vision',
      qualityDesc: 'Leadership and institutional excellence in Quranic education (through a curriculum characterized by quality and mastery, qualified teachers, and effective supervision in an integrated institutional work characterized by a team spirit).',
      methodTitle: 'Our Method',
      methodDesc: 'Diverse educational programs suitable for all ages with precise follow-up.',
      quote: 'The best of you are those who learn the Quran and teach it',
      quoteSource: 'Narrated by Al-Bukhari',
      mainLocation: 'Main Location',
      mainMosque: 'Salman Al-Farsi Mosque',
      moreAchievements: 'View Achievements'
    },
    mosques: {
      title: 'Our Mosques & Circles',
      subtitle: 'Located across Riyadh to be closer to you. Find the nearest mosque from the list.',
      availableCircles: 'Available Circles'
    },
    donation: {
      tag: 'A Trade That Never Fails',
      title: 'Donation Opportunities',
      subtitle: 'Help us serve Allah\'s Book and share the reward through our diverse donation packages',
      packages: [
        { title: 'Sponsor a Student for a Week', price: '40 SAR', icon: 'student' },
        { title: 'Sponsor a Student for a Month', price: '150 SAR', icon: 'student' },
        { title: 'Sponsor a Teacher for Half a Month', price: '500 SAR', icon: 'teacher' },
        { title: 'Sponsor a Teacher for a Month', price: '1000 SAR', icon: 'teacher' },
        { title: 'Sponsor a Circle', desc: '(Teacher with incentives for distinguished students)', price: '1500 SAR', icon: 'circle' }
      ],
      donateBtn: 'Donate Now',
      storeTitle: 'Wish to contribute another amount?',
      storeSubtitle: 'Visit our online store to choose the charitable avenues that suit you',
      storeBtn: 'Visit Online Store'
    },
    supporters: {
      title: 'Success Partner',
      subtitle: 'We are proud of our partnership with the supervising entity for Quran memorization in Riyadh',
      partnerName: 'Maknon Association',
      partnerType: 'Charity Association for Quran Memorization in Riyadh',
      visitPartner: 'Visit Website'
    },
    contact: {
      title: 'Al-Tibyan Central Complex',
      desc: 'A leading Quranic complex seeking to raise a distinguished generation through an attractive environment and qualified staff.',
      contactInfo: 'Contact Info',
      phone: 'Phone Number',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      youtube: 'YouTube',
      address: 'Main Address',
      rights: 'All rights reserved.',
      designedBy: 'Designed with Precision',
      openMap: 'Open Map',
      instagram: 'Instagram',
      snapchat: 'Snapchat',
      tiktok: 'TikTok',
      facebook: 'Facebook',
      twitter: 'Twitter (X)',
      linkedin: 'LinkedIn',
    },
    assistant: {
      placeholder: 'Type your inquiry...',
      typing: 'Assistant is typing...',
      suggestions: {
        register: "How do I register?",
        donate: "How can I donate?",
        location: "Where are you located?",
        mosques: "What are the affiliated mosques?",
        students: "How many students are there?"
      }
    },
    mosquesList: [
      { id: 1, name: "Salman Al-Farsi Mosque (Main)", mapLink: "https://maps.app.goo.gl/KbQnsK6YeNpbfXmv8", availableCircles: ['noor', 'elementary', 'intermediate', 'highschool', 'correction', 'online', 'maqari'] },
      { id: 2, name: "Al-Rumi Mosque", mapLink: "https://maps.app.goo.gl/fW2sQpCdkqjkNGFQ9", availableCircles: ['general'] },
      { id: 3, name: "Al-Rusan Mosque", mapLink: "https://maps.app.goo.gl/ynxKfqs6EhJrsPsF7", availableCircles: ['elementary', 'intermediate', 'highschool', 'maqari'] },
      { id: 4, name: "Al-Maiman Mosque", mapLink: "https://maps.app.goo.gl/zyZ58aeV828Qdfbw8", availableCircles: ['elementary', 'intermediate', 'highschool'] },
      { id: 5, name: "Sheikh Abdullah bin Rashid bin Kulaib Mosque", mapLink: "https://maps.app.goo.gl/FEDiKmtZYD7G8cUH9", availableCircles: ['elementary', 'intermediate'] },
      { id: 6, name: "Abdulmohsen Al-Muhaisen Mosque", mapLink: "https://maps.app.goo.gl/4nfgYPzBQg8YPh8VA", availableCircles: ['maqari'] },
      { id: 7, name: "Uqba bin Nafi Mosque", mapLink: "https://maps.app.goo.gl/r7Wkgrqh6MGQyEiR7", availableCircles: ['maqari'] },
      { id: 8, name: "Sheikh Abdulrahman bin Abdullah Al-Sheikh Mosque", mapLink: "https://maps.app.goo.gl/xBW1cgguaBKgFaXP9", availableCircles: ['maqari'] },
      { id: 9, name: "Abu Ubaidah bin Al-Jarrah Mosque", mapLink: "https://maps.app.goo.gl/PmVzeR45QMZBehyT6", availableCircles: ['adults'] },
      { id: 10, name: "Saeed bin Zaid Mosque", mapLink: "https://maps.app.goo.gl/tw2E9swcpyFgjPe8", availableCircles: ['adults'] },
    ],
    adsList: [
      {
        id: 7,
        title: "Registration for Complex Courses",
        description: "Registration is now open for Al-Tibyan Complex courses.",
        date: "5 Rabi' al-Awwal 1448",
        image: "https://i.postimg.cc/7hLSsRDH/IMG-20260818-WA0102(1).jpg",
        link: "https://docs.google.com/forms/d/1k9hEO1o-_NuRGmxUP7Yl5CcERDZK72t7cUhb6EoXNXI/viewform?edit_requested=true&pli=1",
        buttons: [{ text: "Register Now", link: "https://docs.google.com/forms/d/1k9hEO1o-_NuRGmxUP7Yl5CcERDZK72t7cUhb6EoXNXI/viewform?edit_requested=true&pli=1" }],
        details: {
          sections: [
            { title: "Details", items: ["Various tracks suitable for everyone", "Mastered memorization and review plan", "Elite distinguished teachers", "Prizes and continuous motivation"] }
          ]
        }
      },
      {
        id: 0,
        title: "7th Ramadan Tibyan Course (1447 AH)",
        description: "Registration is open for the 7th Ramadan Tibyan Course (Permit: 7641). Various branches and distinguished prizes.",
        date: "22 Sha'ban 1447",
        image: "https://i.postimg.cc/7ZvFrCTR/IMG-20260210-WA0010.jpg",
        link: "https://forms.gle/UP6SERTgbV3KtybWA",
        details: {
          sections: [
            { title: "Course Branches", items: ["3 Parts", "5 Parts", "10 Parts", "15 Parts", "20 Parts", "30 Parts"] },
            { title: "Accompanying Programs", items: ["Tajweed Course", "Course Knights", "Recitation Correction", "Quran Vocabulary"] },
            { title: "Features", items: ["Certified Teachers", "Prizes for Winners", "Daily Gifts and Incentives"] },
            { title: "Periods", items: ["Fajr", "Asr", "After Taraweeh"] },
            { title: "Duration", items: ["1st to 19th Ramadan", "Sunday to Thursday"] }
          ]
        }
      },
      {
        id: 1,
        title: "Registration Open for New Semester",
        description: "We are now accepting applications for all complex circles across all age groups.",
        date: "29 Rajab 1447",
        image: "https://i.postimg.cc/zBNzwPfZ/IMG_20260211_WA0019.jpg",
        link: "https://docs.google.com/forms/d/1k9hEO1o-_NuRGmxUP7Yl5CcERDZK72t7cUhb6EoXNXI/viewform?edit_requested=true&pli=1",
        details: {
          sections: [
            { title: "Conditions", items: ["Pass the interview.", "Regular attendance.", "Commitment to and completion of the semester curriculum."] },
            { title: "Features", items: ["Licensed teachers.", "Memorization curriculum suitable for all levels.", "Accepting all age groups.", "Weekly and semesterly motivational prizes."] }
          ]
        }
      },
      {
        id: 2,
        title: "Surat Al-Fatiha Correction Project",
        description: "Only 7 verses! But it is the greatest surah in the Quran. Join us in perfecting your recitation.",
        date: "Open Now",
        image: "https://i.postimg.cc/Xv4Fqx0N/IMG_20260211_WA0020.jpg",
        link: "https://forms.gle/kFCxzGE2TXL3Xvn39",
        buttons: [
          { text: "Men Registration", link: "https://forms.gle/kFCxzGE2TXL3Xvn39" },
          { text: "Women Registration", link: "https://forms.gle/HPBPbpDduTPvzuZo8" }
        ],
        details: {
          sections: [
            { 
              title: "About the Program", 
              items: [
                "Only 7 verses! But it is the greatest surah in the Quran.",
                "It is called 'The Surah of Prayer' 1",
                "Our prayer is set right, with great reward in correcting the recitation of Al-Fatiha and short surahs."
              ] 
            },
            {
              title: "Contact (WhatsApp)",
              items: [
                "Men: 0583089932",
                "Women: 0559907862"
              ]
            }
          ]
        }
      },
      {
        id: 3,
        title: "Recitation Correction Project (Urdu)",
        description: "Registration is now open for the Recitation Correction Project for non-Arabic speakers to perfect Al-Fatiha and short Surahs.",
        date: "24 Sha'ban 1447",
        image: "https://i.postimg.cc/dVFVQDdH/IMG_20260215_WA0032.jpg",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSddwavhFd5qyS6bkVGXIEcPIaMpsVRVKaHnFpslBe3FhBF1dg/viewform?fbzx=1838715781690917317",
        details: {
          sections: [
            { 
              title: "Program Details (Urdu)", 
              items: [
                "Recitation Correction Project for Non-Arabic Speakers.",
                "Perfecting Al-Fatiha and short Surahs.",
                "Online classes under the supervision of expert teachers.",
                "Click the link below to register."
              ] 
            },
            {
              title: "Objectives",
              items: [
                "Correcting Al-Fatiha recitation.",
                "Mastering letter exits in short Surahs.",
                "Teaching basic Tajweed principles.",
                "Simplified faith lessons."
              ]
            }
          ]
        }
      },
      {
        id: 4,
        title: "Mid-term Report for the 7th Ramadan Course",
        description: "Al-Tibyan Central Complex is pleased to present the mid-term report for the achievements of the 7th Ramadan Course for the year 1447 AH.",
        date: "10 Ramadan 1447",
        image: "https://i.postimg.cc/5ymDWFpX/3f332618-2d49-4ee8-a09e-52e29ecb924b.jpg",
        details: {
          sections: [
            { title: "Course Statistics", items: ["Number of participating students", "Number of active circles", "Memorization achievement rate", "Implemented accompanying programs"] },
            { title: "Key Achievements", items: ["Quranic completions", "Excellence in performance", "Great community interaction"] }
          ]
        }
      },
      {
        id: 5,
        title: "Launch of Al-Tibyan Summer Course 6",
        description: "The Charitable Society for Quran Memorization in Riyadh (Maknoon), in cooperation with Al-Tibyan Central Complex, invites you to participate in the 6th Al-Tibyan Summer Course.",
        date: "1 Muharram 1448",
        image: "https://i.postimg.cc/xT6kXKRL/IMG-20260704-WA0002.jpg",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSeG60nj6gTgzsaIMUBoPAPB6lkt7MAgOip6scr-7PShFVnPgw/viewform",
        details: {
          sections: [
            { title: "Date", items: ["The course starts on Sunday, 1 Muharram 1448 AH"] },
            { title: "Course Branches", items: ["1 Juz", "3 Juz", "5 Juz", "10 Juz", "15 Juz", "20 Juz", "25 Juz", "Full Quran"] },
            { title: "Course Features", items: ["Certified reciters from Maknoon", "Licensed teachers", "Certificates for achievers", "Prizes for outstanding students"] },
            { title: "Accompanying Programs", items: ["Tajweed Course", "Ghareeb Al-Quran (Uncommon words in Quran)"] },
            { title: "Course Periods", items: ["Immediately after Fajr and Asr prayers", "Maghrib and Isha"] }
          ]
        }
      },
      {
        id: 6,
        title: "Completion of the Youngest Memorizer and Society Celebration",
        description: "The Charitable Society for Quran Memorization in Riyadh celebrated the youngest memorizer of the Book of Allah in the Al-Tibyan Central Complex in a joyful Quranic atmosphere.",
        date: "9 Muharram 1448",
        image: "https://i.postimg.cc/m2zf4LN0/IMG-20260705-WA0024.jpg",
        details: {
          sections: [
            { title: "News Details", items: ["Honoring the youngest memorizer", "Attendance of society and complex officials", "Distribution of prizes and souvenirs"] }
          ]
        }
      }
    ],
    recitationsList: [
      { id: 0, student: "Abdulmajeed Hassan Al-Shehri", surah: "Surah An-Naml", link: "https://youtu.be/kCKnLoexeAg", thumbnail: "https://img.youtube.com/vi/kCKnLoexeAg/hqdefault.jpg" },
      { id: 1, student: "Abdulrahman Al-Kholani", surah: "Surah An-Najm", link: "https://youtu.be/YtM-YwmmpY4", thumbnail: "https://img.youtube.com/vi/YtM-YwmmpY4/hqdefault.jpg" },
      { id: 2, student: "Abdulmalik Abdulqadir Al-Ansari", surah: "Surah An-Naba", link: "https://youtu.be/2AOmd9FyglE", thumbnail: "https://img.youtube.com/vi/2AOmd9FyglE/hqdefault.jpg" },
      { id: 3, student: "Salah bin Hisham", surah: "Surah At-Tariq", link: "https://youtu.be/NupjCHfg07M", thumbnail: "https://img.youtube.com/vi/NupjCHfg07M/hqdefault.jpg" },
      { id: 4, student: "Ahmed bin Hisham", surah: "Surah Fatir", link: "https://youtu.be/9tccFoNeR6M", thumbnail: "https://img.youtube.com/vi/9tccFoNeR6M/hqdefault.jpg" },
      { id: 5, student: "Mohammed bin Taha Abu Kurayshah", surah: "Surah An-Najm (Khalaf from Hamzah)", link: "https://youtu.be/U1QfNi16Ilc", thumbnail: "https://img.youtube.com/vi/U1QfNi16Ilc/hqdefault.jpg" }
    ]
  }
};