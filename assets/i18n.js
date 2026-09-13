(function(){
  var STORAGE_KEY = 'vgroupLang';
  var listeners = [];
  var currentLang = 'en';

  var translations = {
    en: {
      nav_who: "Who We Are",
      nav_services: "Services",
      nav_work: "Work",
      nav_gallery: "Gallery",
      nav_why: "Why Us",
      nav_cta: "Talk to us",
      brand_word: "V Group",

      nav_home: "Home",
      nav_catalog: "Catalogue",

      hero_h1: "Today’s solutions… <em>Tomorrow’s</em> success.",
      hero_lede: "V Group is a Saudi business group built to help companies establish, grow and evolve — bringing technology, smart environments and workplace readiness together under one roof.",
      hero_btn1: "Start a conversation",
      hero_btn2: "See our services",

      who_eyebrow: "Who we are",
      who_h2: "A business group built around one belief.",
      who_p1: "Every company’s success starts with a strong foundation. V Group was founded to help organisations accelerate their digital transformation — through technology consulting, automation and intelligent systems that lift operational efficiency and productivity.",
      who_p2: "We combine practical solutions with quality, innovation and a genuine understanding of what each client needs, so we can be a trusted partner throughout the growth journey — not just a vendor for a single project.",
      pillar1_h: "Vision",
      pillar1_p: "To be among the most prominent business groups delivering integrated solutions that support institutional growth — building businesses that are more efficient, intelligent and sustainable.",
      pillar2_h: "Mission",
      pillar2_p: "Empowering companies to reach their goals through solutions that combine technology, operational expertise and high quality — while building long-term relationships founded on trust.",
      pillar3_h: "Strategic Goal",
      pillar3_p: "Strengthening our position in the technology sector through innovative solutions, expansion into target markets, strategic partnerships, and digital products that support sustainable growth.",

      services_eyebrow: "What we do",
      services_h2: "Divisions",
      services_note: "Rather than assembling separate vendors, partners work with one group that understands the whole picture — the systems and the spaces.",

      div1_num: "01 — V Technology",
      div1_h3: "Websites, ERP &amp; CRM",
      div1_tag: "Building the systems your business runs on",
      div1_desc: "We design and build custom websites, ERP and CRM systems shaped around how your business actually works — not off-the-shelf templates.",
      div1_li1: "Custom websites &amp; web platforms",
      div1_li2: "ERP systems",
      div1_li3: "CRM systems",
      div1_li4: "Data dashboards &amp; reporting",
      div1_li5: "Systems integration &amp; support",

      div2_num: "02 — V Smart Homes",
      div2_h3: "Smart Home Devices",
      div2_tag: "Supplied by our partners, installed by us",
      div2_desc: "We supply smart home devices through our technology partners and handle every step of installation, from planning to setup.",
      div2_li1: "Smart home devices (partner brands)",
      div2_li2: "Professional installation",
      div2_li3: "Automation &amp; controls",
      div2_li4: "Configuration &amp; handover",
      div2_li5: "After-installation support",

      work_eyebrow: "Selected work",
      work_h2: "Products our partners run on today.",
      work_flag1: "Flagship platform",
      work_h3_1: "Jusoor — a verified marketplace for buying and selling businesses",
      work_p1: "Built end-to-end for a strategic partner — from concept and design through development, deployment and ongoing support. Jusoor lets investors and owners browse verified, revenue-generating businesses across Saudi Arabia, protected by verified listings and transparent deal data.",
      work_flag2: "HR system",
      work_h3_2: "AinHR",
      work_p2: "An intelligent HR management system sized to each organisation, with an executive dashboard that turns attendance and workforce data into real-time decisions.",
      work_flag3: "Custom CRM",
      work_h3_3: "Pipeline &amp; revenue, one live view",
      work_p3: "A CRM shaped around each partner’s own workflow — quotations, active projects and revenue tracked through dashboards built for how the team actually works.",

      teaser_eyebrow: "Gallery &amp; catalogue",
      teaser_h2: "See the work up close, and browse our full catalogue.",
      teaser_p: "Screenshots from Jusoor, AinHR and our custom CRM, plus our complete services catalogue as a viewable PDF.",
      teaser_btn: "Open Gallery &amp; Catalogue",

      why_eyebrow: "Why V Group",
      why_h2: "What we bring to the table.",
      why_col_h: "Why partners choose us",
      why1_b: "Integrated solutions, one place",
      why1_p: "Technology and smart environments — coordinated, not outsourced piecemeal.",
      why2_b: "We understand needs from the inside",
      why2_p: "Our team has run these operations, not just built systems for them.",
      why3_b: "Technology paired with operational expertise",
      why3_p: "Systems are shaped by how the work actually happens.",
      why4_b: "Focused on value, not just the sale",
      why4_p: "Success is measured by outcomes delivered, not contracts signed.",
      why5_b: "Long-term partnership",
      why5_p: "We stay involved after launch — support, iteration, and growth.",

      values_col_h: "Our values",
      val1_b: "Trust",
      val1_p: "We build long-term relationships with our clients.",
      val2_b: "Quality",
      val2_p: "We deliver solutions we’d stake our name on.",
      val3_b: "Innovation",
      val3_p: "We use technology to create real value.",
      val4_b: "Commitment",
      val4_p: "We keep our promises.",
      val5_b: "Partnership",
      val5_p: "Our client’s success is part of our own.",

      trust_badge_b: "Authorized Partner — Optimus Solutions",
      trust_badge_span: "Designated partner, Kingdom of Saudi Arabia · certified through Dec 2027",
      trust_note: "Certificate issued by Optimus Solutions Teknoloji Üretim Sanayi Ticaret A.Ş., İstanbul",

      contact_eyebrow: "Get in touch",
      contact_h2: "Let’s build what’s next for your business.",
      contact_p: "Our team is ready to talk through your project and put the right division — or both — to work for you.",
      whatsapp_label: "WhatsApp",
      whatsapp_tag_tech: "V Technology",
      whatsapp_tag_smart: "V Smart Home",
      email_label: "Email",

      foot_legal: "Double V C · Kingdom of Saudi Arabia<br>Registered trade name of V Group.",
      foot_divs_title: "Divisions",
      foot_divs_list: "V Technology<br>V Smart Homes",
      foot_contact_title: "Contact",
      foot_bottom_copy: "© 2026 V Group. All rights reserved.",
      foot_bottom_tag: "Today’s Solutions … Tomorrow’s Success",
      foot_back_home: "← Back to home",

      pagehead_eyebrow: "Gallery &amp; catalogue",
      pagehead_h1: "A closer look at what we build and equip.",
      pagehead_lede: "Screenshots from the platforms we’ve shipped, and our complete services catalogue — open to browse below.",

      nav_section_tech: "V Technology",
      nav_section_smart: "V Smart Homes",

      section_tech_eyebrow: "V Technology",
      section_tech_h2: "Websites, ERP &amp; CRM &mdash; in practice.",
      section_smart_eyebrow: "V Smart Homes",
      section_smart_h2: "Smart home devices &amp; installations.",

      catalog_h2: "V Group Catalogue",
      catalog_p: "Our full services catalogue — every division, flagship product and case study, page by page. Use the arrows or click a thumbnail to jump; click the page to view it full-screen.",
      catalog_prev_word: "Previous",
      catalog_next_word: "Next",
      catalog_page_label: "Page {n} of {total}",
      catalog_caption: "Catalogue — page {n} of {total}",

      gallery_eyebrow: "Gallery",
      gallery_h2: "From our project catalogue.",
      group_software_h3: "Web &amp; Software",
      group_smart_h3: "Smart Homes",
      placeholder_note: "Placeholder photos — to be replaced with V Smart Homes project photography.",

      cap_jusoor_hero: "Jusoor — homepage",
      cap_jusoor_browse: "Jusoor — browse businesses",
      cap_jusoor_signin: "Jusoor — sign in",
      cap_ainhr_dashboard: "AinHR — executive dashboard",
      cap_ainhr_attendance: "AinHR — attendance by location",
      cap_crm_pipeline: "Custom CRM — operations dashboard",
      cap_tenders: "Tender-tracking portal",
      cap_pc_hardware: "Computers &amp; technical equipment",
      cap_smart_placeholder_1: "Placeholder photo (smart home photography coming soon)",
      cap_smart_placeholder_2: "Placeholder photo (smart home photography coming soon)",

      alt_jusoor_hero: "Jusoor marketplace homepage",
      alt_jusoor_browse: "Jusoor browse businesses screen",
      alt_jusoor_signin: "Jusoor sign-in screen",
      alt_ainhr_dashboard: "AinHR executive dashboard",
      alt_ainhr_attendance: "AinHR attendance-by-location report",
      alt_crm_pipeline: "Custom CRM operations dashboard",
      alt_tenders: "Tender-tracking portal, client data blurred for privacy",
      alt_pc_hardware: "Computer hardware and internal components",
      alt_smart_placeholder_1: "Placeholder image, to be replaced with smart home project photography",
      alt_smart_placeholder_2: "Placeholder image, to be replaced with smart home project photography",

      lightbox_close_label: "Close",
      lightbox_prev_label: "Previous",
      lightbox_next_label: "Next"
    },
    ar: {
      nav_who: "من نحن",
      nav_services: "خدماتنا",
      nav_work: "أعمالنا",
      nav_gallery: "المعرض",
      nav_why: "لماذا نحن",
      nav_cta: "تواصل معنا",
      brand_word: "مجموعة ڤي",

      nav_home: "الرئيسية",
      nav_catalog: "الكتالوج",

      hero_h1: "حلول اليوم... <em>نجاح الغد</em>.",
      hero_lede: "مجموعة ڤي هي مجموعة أعمال سعودية تأسست لمساعدة الشركات على التأسيس والنمو والتطور، من خلال الجمع بين التقنية، والبيئات الذكية، وتجهيز بيئات العمل تحت مظلة واحدة.",
      hero_btn1: "ابدأ محادثة",
      hero_btn2: "استعرض خدماتنا",

      who_eyebrow: "من نحن",
      who_h2: "مجموعة أعمال تأسست على مبدأ واحد.",
      who_p1: "تأسست مجموعة ڤي بهدف تمكين المؤسسات من تسريع رحلة التحول الرقمي من خلال تقديم الاستشارات التقنية، وتطوير حلول الأتمتة، وبناء الأنظمة الذكية التي تعزز الكفاءة التشغيلية وترفع الإنتاجية. كما تقدم المجموعة حلولاً متكاملة في مجال تقنية المعلومات تشمل توريد أجهزة الحاسب الآلي بمختلف المواصفات، والبنية التحتية التقنية، وتوفير الحلول التي تلبي احتياجات الشركات بمختلف أحجامها.",
      who_p2: "مجموعة ڤي هي مجموعة أعمال متخصصة في تقديم حلول متكاملة تساعد الشركات على التأسيس والنمو والتطور، من خلال الجمع بين التقنية، وحلول الأعمال، وتجهيز بيئات العمل. نؤمن بأن نجاح الشركات يبدأ من بناء أساس قوي، لذلك نقدم حلولاً عملية تجمع بين الجودة والابتكار وفهم احتياجات العميل، لنكون شريكاً موثوقاً في رحلة النمو.",
      pillar1_h: "الرؤية",
      pillar1_p: "أن نكون من أبرز مجموعات الأعمال التي تقدم حلولاً متكاملة تدعم نمو المؤسسات، وتساهم في بناء أعمال أكثر كفاءة وذكاءً واستدامة.",
      pillar2_h: "الرسالة",
      pillar2_p: "تمكين الشركات من تحقيق أهدافها من خلال تقديم حلول متكاملة تجمع بين التقنية والخبرة التشغيلية والجودة العالية، مع بناء علاقات طويلة المدى قائمة على الثقة.",
      pillar3_h: "الهدف الاستراتيجي",
      pillar3_p: "تعزيز مكانة المجموعة في قطاع التقنية من خلال تقديم حلول مبتكرة ومتكاملة، والتوسع في الأسواق المستهدفة، وبناء شراكات استراتيجية، وتطوير منتجات وخدمات رقمية تدعم التحول الرقمي وتحقق نمواً مستداماً للمجموعة.",

      services_eyebrow: "ماذا نقدم",
      services_h2: "القطاعات",
      services_note: "بدلاً من التعامل مع عدة موردين متفرقين، يعمل شركاؤنا مع مجموعة واحدة تفهم الصورة الكاملة — الأنظمة والبيئات.",

      div1_num: "01 — ڤي للتقنية",
      div1_h3: "مواقع إلكترونية وأنظمة ERP وCRM",
      div1_tag: "نبني الأنظمة التي يعمل عليها نشاطك",
      div1_desc: "نصمم ونطور مواقع إلكترونية وأنظمة ERP وCRM مخصصة، مصممة وفق طريقة عمل نشاطك فعلياً — وليست قوالب جاهزة.",
      div1_li1: "مواقع ومنصات إلكترونية مخصصة",
      div1_li2: "أنظمة تخطيط موارد المؤسسات (ERP)",
      div1_li3: "أنظمة إدارة علاقات العملاء (CRM)",
      div1_li4: "لوحات بيانات وتقارير",
      div1_li5: "ربط الأنظمة والدعم الفني",

      div2_num: "02 — ڤي للمنازل الذكية",
      div2_h3: "أجهزة المنازل الذكية",
      div2_tag: "توريد من شركائنا، وتركيب بأيدينا",
      div2_desc: "نوفر أجهزة المنازل الذكية عبر شركائنا التقنيين، ونتولى كل خطوات التركيب من التخطيط وحتى الإعداد النهائي.",
      div2_li1: "أجهزة منازل ذكية (بعلامات شركائنا)",
      div2_li2: "تركيب احترافي",
      div2_li3: "الأتمتة وأنظمة التحكم",
      div2_li4: "الإعداد والتسليم",
      div2_li5: "الدعم بعد التركيب",

      work_eyebrow: "أعمال مختارة",
      work_h2: "منتجات يعتمد عليها شركاؤنا اليوم.",
      work_flag1: "المنصة الرائدة",
      work_h3_1: "جسور — سوق موثّق لبيع وشراء الأعمال التجارية",
      work_p1: "طُوّرت بالكامل لأحد شركائنا الاستراتيجيين — من الفكرة والتصميم إلى التطوير والإطلاق والدعم المستمر. تتيح منصة جسور للمستثمرين والملاك تصفح أعمال تجارية موثّقة ومُدرّة للدخل في مختلف أنحاء المملكة، مدعومة بإعلانات موثّقة وبيانات صفقات شفافة.",
      work_flag2: "نظام موارد بشرية",
      work_h3_2: "AinHR",
      work_p2: "نظام إدارة موارد بشرية ذكي يتناسب مع حجم كل مؤسسة، مزوّد بلوحة تحكم تنفيذية تحوّل بيانات الحضور والقوى العاملة إلى قرارات لحظية.",
      work_flag3: "نظام CRM مخصص",
      work_h3_3: "مسار المبيعات والإيرادات في شاشة واحدة حيّة",
      work_p3: "نظام CRM مصمم وفق طريقة عمل كل شريك — عروض الأسعار، والمشاريع الجارية، والإيرادات، تُتابع جميعها عبر لوحات معلومات مبنية على واقع عمل الفريق الفعلي.",

      teaser_eyebrow: "المعرض والكتالوج",
      teaser_h2: "شاهد أعمالنا عن قرب، وتصفّح كتالوجنا الكامل.",
      teaser_p: "لقطات من منصات جسور وAinHR ونظام CRM المخصص، إضافة إلى كتالوج خدماتنا الكامل بصيغة PDF قابلة للتصفّح.",
      teaser_btn: "افتح المعرض والكتالوج",

      why_eyebrow: "لماذا مجموعة ڤي",
      why_h2: "ما الذي نقدمه لشركائنا.",
      why_col_h: "لماذا يختارنا شركاؤنا",
      why1_b: "حلول متكاملة في مكان واحد",
      why1_p: "التقنية والبيئات الذكية — منسّقة معاً ضمن جهة واحدة، لا موزّعة على أطراف متعددة.",
      why2_b: "نفهم احتياجات الشركات من الداخل",
      why2_p: "فريقنا خاض هذه العمليات بنفسه، ولم يكتفِ ببناء أنظمة لها من الخارج.",
      why3_b: "الجمع بين التقنية والخبرة التشغيلية",
      why3_p: "نصمّم الأنظمة وفق واقع سير العمل الفعلي.",
      why4_b: "التركيز على القيمة، لا على البيع فقط",
      why4_p: "نقيس نجاحنا بالنتائج المحققة، لا بعدد العقود الموقّعة.",
      why5_b: "شراكة طويلة المدى",
      why5_p: "نبقى إلى جانبكم بعد الإطلاق — دعماً وتطويراً ونمواً مستمراً.",

      values_col_h: "قيمنا",
      val1_b: "الثقة",
      val1_p: "نبني علاقات طويلة الأمد مع عملائنا.",
      val2_b: "الجودة",
      val2_p: "نقدّم حلولاً نثق بها ونضع اسمنا عليها.",
      val3_b: "الابتكار",
      val3_p: "نستخدم التقنية لصناعة قيمة حقيقية.",
      val4_b: "الالتزام",
      val4_p: "نفي بوعودنا.",
      val5_b: "الشراكة",
      val5_p: "نجاح عملائنا جزء لا يتجزأ من نجاحنا.",

      trust_badge_b: "شريك معتمد — Optimus Solutions",
      trust_badge_span: "شريك معتمد في المملكة العربية السعودية · الشهادة سارية حتى ديسمبر 2027",
      trust_note: "الشهادة صادرة عن شركة Optimus Solutions Teknoloji Üretim Sanayi Ticaret A.Ş.، إسطنبول",

      contact_eyebrow: "تواصل معنا",
      contact_h2: "لنبنِ معاً الخطوة القادمة لأعمالك.",
      contact_p: "فريقنا جاهز لمناقشة مشروعك، وتكليف القطاع المناسب — أو القطاعين معاً — للعمل على تحقيق أهدافك.",
      whatsapp_label: "واتساب",
      whatsapp_tag_tech: "ڤي للتقنية",
      whatsapp_tag_smart: "ڤي للمنازل الذكية",
      email_label: "البريد الإلكتروني",

      foot_legal: "Double V C · المملكة العربية السعودية<br>الاسم التجاري المسجل لمجموعة ڤي.",
      foot_divs_title: "القطاعات",
      foot_divs_list: "ڤي للتقنية<br>ڤي للمنازل الذكية",
      foot_contact_title: "التواصل",
      foot_bottom_copy: "© 2026 مجموعة ڤي. جميع الحقوق محفوظة.",
      foot_bottom_tag: "حلول اليوم... نجاح الغد",
      foot_back_home: "الرئيسية →",

      pagehead_eyebrow: "المعرض والكتالوج",
      pagehead_h1: "نظرة أقرب على ما نبنيه ونجهّزه.",
      pagehead_lede: "لقطات من المنصات التي أطلقناها، وكتالوج خدماتنا الكامل — متاح للتصفّح أدناه.",

      nav_section_tech: "ڤي للتقنية",
      nav_section_smart: "ڤي للمنازل الذكية",

      section_tech_eyebrow: "ڤي للتقنية",
      section_tech_h2: "مواقع إلكترونية وأنظمة ERP وCRM &mdash; في الواقع.",
      section_smart_eyebrow: "ڤي للمنازل الذكية",
      section_smart_h2: "أجهزة المنازل الذكية وتركيباتها.",

      catalog_h2: "كتالوج مجموعة ڤي",
      catalog_p: "كتالوج خدماتنا الكامل — كل قطاع، ومنتج رئيسي، ودراسة حالة، صفحة بصفحة. استخدم الأسهم أو اضغط على إحدى الصور المصغرة للانتقال، واضغط على الصفحة لعرضها بملء الشاشة.",
      catalog_prev_word: "السابق",
      catalog_next_word: "التالي",
      catalog_page_label: "الصفحة {n} من {total}",
      catalog_caption: "الكتالوج — صفحة {n} من {total}",

      gallery_eyebrow: "المعرض",
      gallery_h2: "من كتالوج مشاريعنا.",
      group_software_h3: "الويب والبرمجيات",
      group_smart_h3: "المنازل الذكية",
      placeholder_note: "صور مؤقتة — سيتم استبدالها بصور مشاريع ڤي للمنازل الذكية.",

      cap_jusoor_hero: "جسور — الصفحة الرئيسية",
      cap_jusoor_browse: "جسور — تصفّح الأعمال التجارية",
      cap_jusoor_signin: "جسور — تسجيل الدخول",
      cap_ainhr_dashboard: "AinHR — لوحة التحكم التنفيذية",
      cap_ainhr_attendance: "AinHR — الحضور حسب الموقع",
      cap_crm_pipeline: "نظام CRM مخصص — لوحة العمليات",
      cap_tenders: "بوابة متابعة المناقصات",
      cap_pc_hardware: "أجهزة حاسوب ومعدات تقنية",
      cap_smart_placeholder_1: "صورة مؤقتة (صور المنازل الذكية قريباً)",
      cap_smart_placeholder_2: "صورة مؤقتة (صور المنازل الذكية قريباً)",

      alt_jusoor_hero: "الصفحة الرئيسية لمنصة جسور",
      alt_jusoor_browse: "شاشة تصفّح الأعمال في جسور",
      alt_jusoor_signin: "شاشة تسجيل الدخول في جسور",
      alt_ainhr_dashboard: "لوحة التحكم التنفيذية لـ AinHR",
      alt_ainhr_attendance: "تقرير الحضور حسب الموقع في AinHR",
      alt_crm_pipeline: "لوحة عمليات نظام CRM المخصص",
      alt_tenders: "بوابة متابعة المناقصات، مع طمس بيانات العملاء حفاظاً على الخصوصية",
      alt_pc_hardware: "مكوّنات أجهزة الحاسوب الداخلية",
      alt_smart_placeholder_1: "صورة مؤقتة، سيتم استبدالها بصور مشاريع المنازل الذكية",
      alt_smart_placeholder_2: "صورة مؤقتة، سيتم استبدالها بصور مشاريع المنازل الذكية",

      lightbox_close_label: "إغلاق",
      lightbox_prev_label: "السابق",
      lightbox_next_label: "التالي"
    }
  };

  function readStored(){
    try { return localStorage.getItem(STORAGE_KEY); } catch(e){ return null; }
  }
  function writeStored(lang){
    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e){}
  }
  function t(key){
    var dict = translations[currentLang] || translations.en;
    if(dict[key] !== undefined) return dict[key];
    return (translations.en[key] !== undefined) ? translations.en[key] : '';
  }
  function applyDom(){
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n]'), function(el){
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if(val) el.innerHTML = val;
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-attr]'), function(el){
      el.getAttribute('data-i18n-attr').split(';').forEach(function(pair){
        pair = pair.trim();
        if(!pair) return;
        var idx = pair.indexOf(':');
        var attr = pair.slice(0, idx), key = pair.slice(idx + 1);
        var val = t(key);
        if(val) el.setAttribute(attr, val);
      });
    });
    Array.prototype.forEach.call(document.querySelectorAll('.lang-toggle'), function(btn){
      btn.textContent = currentLang === 'ar' ? 'English' : 'العربية';
    });
    listeners.forEach(function(fn){ try { fn(currentLang); } catch(e){} });
  }
  function setLang(lang){
    currentLang = (lang === 'ar') ? 'ar' : 'en';
    writeStored(currentLang);
    applyDom();
  }
  function init(){
    var stored = readStored();
    currentLang = (stored === 'ar' || stored === 'en') ? stored : 'en';
    applyDom();
    Array.prototype.forEach.call(document.querySelectorAll('.lang-toggle'), function(btn){
      btn.addEventListener('click', function(){
        setLang(currentLang === 'ar' ? 'en' : 'ar');
      });
    });
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.VGroupI18n = {
    t: t,
    getLang: function(){ return currentLang; },
    setLang: setLang,
    onChange: function(fn){ listeners.push(fn); }
  };
})();
