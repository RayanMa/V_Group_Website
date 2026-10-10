(function(){
  var STORAGE_KEY = 'vgroupLang';
  var listeners = [];
  var currentLang = 'en';

  var translations = {
    en: {
      nav_who: "Who We Are",
      nav_work: "Work",
      nav_pricing: "Pricing",
      nav_gallery: "Gallery",
      nav_why: "Why Us",
      nav_cta: "Talk to us",
      brand_word: "V Group",

      nav_home: "Home",
      nav_catalog: "Catalogue",

      hero_h1: "Today’s solutions… <em>Tomorrow’s</em> success.",
      hero_lede: "V Group is a Saudi business group built to help companies establish, grow and evolve — bringing custom technology and workplace readiness together under one roof.",
      hero_btn1: "Start a conversation",
      hero_btn2: "See our work",

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

      work_eyebrow: "Selected work",
      work_h2: "Products our partners run on today.",
      work_flag1: "Our product",
      work_h3_1: "MAT — customers, projects and pricing in one platform",
      work_p1: "Built and run in-house, MAT is our own CRM and project management platform — tracking customers, price offers, project pipelines, files and finances in real time. It’s the same platform behind the CRM packages below.",
      work_flag2: "HR system",
      work_h3_2: "AinHR",
      work_p2: "An intelligent HR management system sized to each organisation, with an executive dashboard that turns attendance and workforce data into real-time decisions.",
      work_flag3: "Flagship platform",
      work_h3_3: "Jusoor — a verified marketplace for buying and selling businesses",
      work_p3: "Built end-to-end for a strategic partner. Jusoor lets investors and owners browse verified, revenue-generating businesses across Saudi Arabia.",
      work_flag4: "B2B platform",
      work_h3_4: "FAZ Global — medical, construction &amp; furniture catalogue",
      work_p4: "A bilingual product and services platform for FAZ Global, showcasing medical equipment, construction works and complete furniture programmes across three business lines.",

      pricing_eyebrow: "MAT CRM",
      pricing_h2: "The right MAT package for the way you sell.",
      pricing_lede: "MAT is our CRM and project management platform. Three packages, priced per user per month, from core customer management to a complete sales and pre-sales platform. Enterprise clients can add AI as an optional extra.",
      pkg_unit: "USD / Month",

      pkg1_tag: "Core",
      pkg1_name: "Essential",
      pkg1_desc: "Customers, price offers and projects in one place.",
      pkg1_billing: "Billed annually, 10 users min.",
      pkg1_trial: "2-week free trial",
      pkg1_li1: "Customer management",
      pkg1_li2: "Price offers",
      pkg1_li3: "Project tracking",
      pkg1_li4: "Standard reports",
      pkg1_li5: "Weekly backups",

      pkg2_badge: "Best for sales teams",
      pkg2_tag: "Sales &amp; Pre-Sales",
      pkg2_name: "Professional",
      pkg2_desc: "Sales, lead tracking and full pre-sales for growing teams.",
      pkg2_billing: "Billed annually, 10 users min.",
      pkg2_trial: "1-month free trial",
      pkg2_li1: "Everything in Essential",
      pkg2_li2: "Lead source tracking",
      pkg2_li3: "Pre-sales workflow",
      pkg2_li4: "Advanced analytics",
      pkg2_li5: "Daily backups",

      pkg3_tag: "Complete",
      pkg3_name: "Enterprise",
      pkg3_desc: "Every feature, with enhanced security, backup and support.",
      pkg3_billing: "Billed annually, 10 users min.",
      pkg3_trial: "2-month free trial",
      pkg3_li1: "Everything in Professional",
      pkg3_li2: "All features unlocked",
      pkg3_li3: "Permission &amp; audit controls",
      pkg3_li4: "Enhanced privacy controls",
      pkg3_li5: "Priority support",

      addon_tag: "Add-on",
      addon_name: "AI Add-on",
      addon_desc: "An optional extra for Enterprise subscribers only. Not included in the Enterprise price. Usage is subject to a monthly limit.",
      addon_unit: "USD / month",
      addon_li1: "Instant summaries of customers and deals",
      addon_li2: "Assisted drafting of offers and follow-ups",
      addon_li3: "Ask questions of your CRM data in plain language",

      pricing_note: "All prices are in US Dollars (USD) and exclude VAT. Packages are billed annually per user after their free trial period. The AI Add-on is an optional extra for Enterprise subscribers, billed monthly and subject to a monthly usage limit.",

      cmp_feature_col: "Feature",
      cmp_col1_name: "Essential",
      cmp_col1_price: "$30 / user / mo",
      cmp_col2_name: "Professional",
      cmp_col2_price: "$40 / user / mo",
      cmp_col3_name: "Enterprise",
      cmp_col3_price: "$60 / user / mo",
      cmp_billed_annually: "Billed annually",

      cmp_cat_core: "Core CRM",
      cmp_core_1: "Customer management",
      cmp_core_2: "Price offers &amp; quotations",
      cmp_core_3: "Project tracking",
      cmp_core_4: "Standard dashboard &amp; reports",
      cmp_core_5: "Data export",
      cmp_core_6: "Data import",

      cmp_cat_sales: "Sales &amp; Pre-Sales",
      cmp_sales_1: "Sales pipeline &amp; lead tracking",
      cmp_sales_2: "Lead source tracking",
      cmp_sales_3: "Full pre-sales workflow",
      cmp_sales_4: "Tasks, follow-ups &amp; reminders",
      cmp_sales_5: "Advanced reports &amp; analytics",

      cmp_cat_enterprise: "Enterprise Platform",
      cmp_ent_1: "Every platform feature unlocked",
      cmp_ent_2: "Advanced permissions &amp; audit trail",

      cmp_cat_security: "Security, Privacy &amp; Backup",
      cmp_sec_1: "Role-based user access",
      cmp_sec_2: "Data privacy &amp; confidentiality controls",
      cmp_sec_2_v1: "Standard",
      cmp_sec_2_v2: "Standard",
      cmp_sec_2_v3: "Enhanced",
      cmp_sec_3: "Automated data backups",
      cmp_sec_3_v1: "Weekly",
      cmp_sec_3_v2: "Daily",
      cmp_sec_3_v3: "Daily, extended retention",

      cmp_cat_support: "Support",
      cmp_sup_1: "Support level",
      cmp_sup_1_v1: "Email",
      cmp_sup_1_v2: "Priority",
      cmp_sup_1_v3: "Priority + account manager",

      teaser_eyebrow: "Gallery &amp; catalogue",
      teaser_h2: "See the work up close, and browse our full catalogue.",
      teaser_p: "Screenshots from Jusoor, MAT, AinHR and FAZ Global, plus our complete services catalogue as a viewable PDF.",
      teaser_btn: "Open Gallery &amp; Catalogue",

      why_eyebrow: "Why V Group",
      why_h2: "What we bring to the table.",
      why_col_h: "Why partners choose us",
      why1_b: "Integrated solutions, one place",
      why1_p: "Custom technology and CRM, built and supported end-to-end — not outsourced piecemeal.", // was "Technology and smart environments..." — restore when V Smart Homes returns
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
      trust_badge_span: "Designated partner, Kingdom of Saudi Arabia",
      trust_note: "Certificate issued by Optimus Solutions Teknoloji Üretim Sanayi Ticaret A.Ş., İstanbul",

      contact_eyebrow: "Get in touch",
      contact_h2: "Let’s build what’s next for your business.",
      contact_p: "Our team is ready to talk through your project and build the right solution for your business.", // was "...put the right division — or both — to work for you." — restore when V Smart Homes returns
      whatsapp_label: "WhatsApp",
      whatsapp_tag_tech: "Sales",
      whatsapp_tag_smart: "V Smart Home",
      email_label: "Email",

      foot_legal: "Double V C · Kingdom of Saudi Arabia<br>Registered trade name of V Group.",
      foot_contact_title: "Contact",
      foot_bottom_copy: "© 2026 V Group. All rights reserved.",
      foot_bottom_tag: "Today’s Solutions … Tomorrow’s Success",
      foot_back_home: "← Back to home",

      pagehead_eyebrow: "Gallery &amp; catalogue",
      pagehead_h1: "A closer look at what we build and equip.",
      pagehead_lede: "Screenshots from the platforms we’ve shipped, and our complete services catalogue — open to browse below.",

      nav_section_tech: "Our Work",
      nav_section_smart: "V Smart Homes",

      section_tech_eyebrow: "Our Work",
      section_tech_h2: "Websites, ERP &amp; CRM &mdash; in practice.",
      section_smart_eyebrow: "V Smart Homes",
      section_smart_h2: "Smart home devices &amp; installations.",

      catalog_h2: "Catalogue",
      catalog_p: "Our full services catalogue — flagship products and case studies, page by page. Use the arrows or click a thumbnail to jump; click the page to view it full-screen.",
      catalog_prev_word: "Previous",
      catalog_next_word: "Next",
      catalog_page_label: "Page {n} of {total}",

      gallery_eyebrow: "Gallery",
      gallery_h2: "From our project catalogue.",
      group_software_h3: "Web &amp; Software",
      group_smart_h3: "Smart Homes",

      cap_jusoor_hero: "Jusoor — homepage",
      cap_jusoor_features: "Jusoor — features",
      cap_jusoor_browse: "Jusoor — browse businesses",
      cap_ainhr_dashboard: "AinHR — control dashboard",
      cap_ainhr_requests: "AinHR — all requests",
      cap_ainhr_payroll: "AinHR — payroll",
      cap_mat_home: "MAT — home dashboard",
      cap_mat_reports: "MAT — reports",
      cap_mat_files: "MAT — files",
      cap_mat_finance: "MAT — finance",
      cap_faz_home: "FAZ Global — homepage",
      cap_faz_services: "FAZ Global — services",
      cap_faz_furniture: "FAZ Global — furniture catalogue",
      cap_smart_touch_panel: "Smart wall touch panel",
      cap_smart_edge_panel: "8-inch smart control panel",
      cap_smart_switch: "Smart wall switch with thermostat display",
      cap_smart_device_1: "Smart relay modules",
      cap_smart_device_2: "Smart control modules",

      alt_jusoor_hero: "Jusoor marketplace homepage",
      alt_jusoor_features: "Jusoor features section: secure deals, transparent data, verified listings",
      alt_jusoor_browse: "Jusoor browse businesses screen",
      alt_ainhr_dashboard: "AinHR control dashboard showing attendance, headcount and pending requests",
      alt_ainhr_requests: "AinHR all-requests screen listing employee leave, expense and training requests",
      alt_ainhr_payroll: "AinHR payroll summary with per-employee salary breakdown",
      alt_mat_home: "MAT home dashboard showing open projects, new leads and project value",
      alt_mat_reports: "MAT reports screen with pipeline and conversion analytics",
      alt_mat_files: "MAT files screen listing project documents and price offers",
      alt_mat_finance: "MAT finance screen with revenue, expenses and cash flow",
      alt_faz_home: "FAZ Global homepage for medical, construction and furniture equipment",
      alt_faz_services: "FAZ Global services page covering healthcare facilities and construction works",
      alt_faz_furniture: "FAZ Global furniture catalogue page with product photos",
      alt_smart_touch_panel: "Black smart touch panel mounted on a wall, showing room info and favorite devices",
      alt_smart_edge_panel: "8-inch smart control panel showing security, favorite devices and scenes",
      alt_smart_switch: "Smart wall switch panel with a thermostat display and touch controls",
      alt_smart_device_1: "Three smart relay modules on a desk",
      alt_smart_device_2: "A set of DIN-rail smart control modules",

      lightbox_close_label: "Close",
      lightbox_prev_label: "Previous",
      lightbox_next_label: "Next"
    },
    ar: {
      nav_who: "من نحن",
      nav_work: "أعمالنا",
      nav_pricing: "الأسعار",
      nav_gallery: "المعرض",
      nav_why: "لماذا نحن",
      nav_cta: "تواصل معنا",
      brand_word: "مجموعة ڤي",

      nav_home: "الرئيسية",
      nav_catalog: "الكتالوج",

      hero_h1: "حلول اليوم... <em>نجاح الغد</em>.",
      hero_lede: "مجموعة ڤي هي مجموعة أعمال سعودية تأسست لمساعدة الشركات على التأسيس والنمو والتطور، من خلال الجمع بين الحلول التقنية المخصصة وتجهيز بيئات العمل تحت مظلة واحدة.",
      hero_btn1: "ابدأ محادثة",
      hero_btn2: "استعرض أعمالنا",

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

      work_eyebrow: "أعمال مختارة",
      work_h2: "منتجات يعتمد عليها شركاؤنا اليوم.",
      work_flag1: "منتجنا",
      work_h3_1: "MAT — العملاء والمشاريع والتسعير في منصة واحدة",
      work_p1: "طُوّر ويُستخدم داخلياً، MAT هو نظام إدارة علاقات العملاء وإدارة المشاريع الخاص بنا — يتابع العملاء وعروض الأسعار ومسار المشاريع والملفات والمالية لحظياً. وهو نفس النظام الذي تقوم عليه باقات CRM أدناه.",
      work_flag2: "نظام موارد بشرية",
      work_h3_2: "AinHR",
      work_p2: "نظام إدارة موارد بشرية ذكي يتناسب مع حجم كل مؤسسة، مزوّد بلوحة تحكم تنفيذية تحوّل بيانات الحضور والقوى العاملة إلى قرارات لحظية.",
      work_flag3: "المنصة الرائدة",
      work_h3_3: "جسور — سوق موثّق لبيع وشراء الأعمال التجارية",
      work_p3: "طُوّرت بالكامل لأحد شركائنا الاستراتيجيين. تتيح منصة جسور للمستثمرين والملاك تصفح أعمال تجارية موثّقة ومُدرّة للدخل في مختلف أنحاء المملكة.",
      work_flag4: "منصة B2B",
      work_h3_4: "FAZ Global — كتالوج المعدات الطبية والإنشاءات والأثاث",
      work_p4: "منصة منتجات وخدمات ثنائية اللغة لشركة FAZ Global، تعرض المعدات الطبية وأعمال الإنشاءات وبرامج الأثاث الكاملة عبر ثلاثة قطاعات أعمال.",

      pricing_eyebrow: "MAT CRM",
      pricing_h2: "باقة MAT المناسبة لطريقة بيعك.",
      pricing_lede: "MAT هو نظام إدارة العملاء والمشاريع الخاص بنا. ثلاث باقات، بسعر لكل مستخدم شهرياً، من إدارة العملاء الأساسية إلى منصة مبيعات وما قبل بيع متكاملة. يمكن لعملاء باقة المؤسسات إضافة الذكاء الاصطناعي كخيار إضافي.",
      pkg_unit: "دولار أمريكي / شهرياً",

      pkg1_tag: "أساسي",
      pkg1_name: "الباقة الأساسية",
      pkg1_desc: "العملاء وعروض الأسعار والمشاريع في مكان واحد.",
      pkg1_billing: "فوترة سنوية، 10 مستخدمين كحد أدنى.",
      pkg1_trial: "تجربة مجانية لأسبوعين",
      pkg1_li1: "إدارة العملاء",
      pkg1_li2: "عروض الأسعار",
      pkg1_li3: "متابعة المشاريع",
      pkg1_li4: "تقارير قياسية",
      pkg1_li5: "نسخ احتياطي أسبوعي",

      pkg2_badge: "الأفضل لفرق المبيعات",
      pkg2_tag: "المبيعات وما قبل البيع",
      pkg2_name: "الباقة الاحترافية",
      pkg2_desc: "المبيعات وتتبع العملاء المحتملين وعمليات ما قبل البيع الكاملة للفرق النامية.",
      pkg2_billing: "فوترة سنوية، 10 مستخدمين كحد أدنى.",
      pkg2_trial: "تجربة مجانية لشهر واحد",
      pkg2_li1: "كل ما في الباقة الأساسية",
      pkg2_li2: "تتبع مصدر العملاء المحتملين",
      pkg2_li3: "سير عمل ما قبل البيع",
      pkg2_li4: "تحليلات متقدمة",
      pkg2_li5: "نسخ احتياطي يومي",

      pkg3_tag: "متكامل",
      pkg3_name: "باقة المؤسسات",
      pkg3_desc: "كل الميزات، مع أمان ونسخ احتياطي ودعم معزز.",
      pkg3_billing: "فوترة سنوية، 10 مستخدمين كحد أدنى.",
      pkg3_trial: "تجربة مجانية لشهرين",
      pkg3_li1: "كل ما في الباقة الاحترافية",
      pkg3_li2: "جميع الميزات مفعّلة",
      pkg3_li3: "صلاحيات ومراجعة العمليات",
      pkg3_li4: "ضوابط خصوصية معززة",
      pkg3_li5: "دعم ذو أولوية",

      addon_tag: "إضافة اختيارية",
      addon_name: "إضافة الذكاء الاصطناعي",
      addon_desc: "إضافة اختيارية لمشتركي باقة المؤسسات فقط. غير مشمولة في سعر باقة المؤسسات. الاستخدام يخضع لحد شهري.",
      addon_unit: "دولار أمريكي / شهرياً",
      addon_li1: "ملخصات فورية للعملاء والصفقات",
      addon_li2: "مساعدة في صياغة العروض والمتابعات",
      addon_li3: "اطرح أسئلة عن بيانات CRM الخاصة بك بلغة طبيعية",

      pricing_note: "جميع الأسعار بالدولار الأمريكي (USD) ولا تشمل ضريبة القيمة المضافة. تُفوتر الباقات سنوياً لكل مستخدم بعد انتهاء فترة التجربة المجانية. إضافة الذكاء الاصطناعي اختيارية لمشتركي باقة المؤسسات، تُفوتر شهرياً وتخضع لحد استخدام شهري.",

      cmp_feature_col: "الميزة",
      cmp_col1_name: "الباقة الأساسية",
      cmp_col1_price: "30$ / مستخدم / شهر",
      cmp_col2_name: "الباقة الاحترافية",
      cmp_col2_price: "40$ / مستخدم / شهر",
      cmp_col3_name: "باقة المؤسسات",
      cmp_col3_price: "60$ / مستخدم / شهر",
      cmp_billed_annually: "فوترة سنوية",

      cmp_cat_core: "النظام الأساسي لـ CRM",
      cmp_core_1: "إدارة العملاء",
      cmp_core_2: "عروض الأسعار والاقتباسات",
      cmp_core_3: "متابعة المشاريع",
      cmp_core_4: "لوحة التحكم والتقارير القياسية",
      cmp_core_5: "تصدير البيانات",
      cmp_core_6: "استيراد البيانات",

      cmp_cat_sales: "المبيعات وما قبل البيع",
      cmp_sales_1: "مسار المبيعات وتتبع العملاء المحتملين",
      cmp_sales_2: "تتبع مصدر العملاء المحتملين",
      cmp_sales_3: "سير عمل ما قبل البيع الكامل",
      cmp_sales_4: "المهام والمتابعات والتذكيرات",
      cmp_sales_5: "تقارير وتحليلات متقدمة",

      cmp_cat_enterprise: "منصة المؤسسات",
      cmp_ent_1: "جميع ميزات المنصة مفعّلة",
      cmp_ent_2: "صلاحيات متقدمة وسجل تدقيق",

      cmp_cat_security: "الأمان والخصوصية والنسخ الاحتياطي",
      cmp_sec_1: "وصول المستخدمين حسب الصلاحيات",
      cmp_sec_2: "ضوابط خصوصية وسرية البيانات",
      cmp_sec_2_v1: "قياسي",
      cmp_sec_2_v2: "قياسي",
      cmp_sec_2_v3: "معزز",
      cmp_sec_3: "نسخ احتياطي تلقائي للبيانات",
      cmp_sec_3_v1: "أسبوعي",
      cmp_sec_3_v2: "يومي",
      cmp_sec_3_v3: "يومي، مع فترة احتفاظ ممتدة",

      cmp_cat_support: "الدعم",
      cmp_sup_1: "مستوى الدعم",
      cmp_sup_1_v1: "بريد إلكتروني",
      cmp_sup_1_v2: "ذو أولوية",
      cmp_sup_1_v3: "أولوية + مدير حساب",

      teaser_eyebrow: "المعرض والكتالوج",
      teaser_h2: "شاهد أعمالنا عن قرب، وتصفّح كتالوجنا الكامل.",
      teaser_p: "لقطات من منصات جسور وMAT وAinHR وFAZ Global، إضافة إلى كتالوج خدماتنا الكامل بصيغة PDF قابلة للتصفّح.",
      teaser_btn: "افتح المعرض والكتالوج",

      why_eyebrow: "لماذا مجموعة ڤي",
      why_h2: "ما الذي نقدمه لشركائنا.",
      why_col_h: "لماذا يختارنا شركاؤنا",
      why1_b: "حلول متكاملة في مكان واحد",
      why1_p: "حلول تقنية مخصصة وأنظمة CRM، نبنيها وندعمها من الألف إلى الياء — لا نسندها لأطراف متعددة.", // كانت "التقنية والبيئات الذكية..." — أعد هذا النص عند عودة قطاع ڤي للمنازل الذكية
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
      trust_badge_span: "شريك معتمد في المملكة العربية السعودية",
      trust_note: "الشهادة صادرة عن شركة Optimus Solutions Teknoloji Üretim Sanayi Ticaret A.Ş.، إسطنبول",

      contact_eyebrow: "تواصل معنا",
      contact_h2: "لنبنِ معاً الخطوة القادمة لأعمالك.",
      contact_p: "فريقنا جاهز لمناقشة مشروعك وبناء الحل المناسب لأعمالك.", // كانت "...وتكليف القطاع المناسب — أو القطاعين معاً..." — أعد هذا النص عند عودة قطاع ڤي للمنازل الذكية
      whatsapp_label: "واتساب",
      whatsapp_tag_tech: "المبيعات",
      whatsapp_tag_smart: "ڤي للمنازل الذكية",
      email_label: "البريد الإلكتروني",

      foot_legal: "Double V C · المملكة العربية السعودية<br>الاسم التجاري المسجل لمجموعة ڤي.",
      foot_contact_title: "التواصل",
      foot_bottom_copy: "© 2026 مجموعة ڤي. جميع الحقوق محفوظة.",
      foot_bottom_tag: "حلول اليوم... نجاح الغد",
      foot_back_home: "الرئيسية →",

      pagehead_eyebrow: "المعرض والكتالوج",
      pagehead_h1: "نظرة أقرب على ما نبنيه ونجهّزه.",
      pagehead_lede: "لقطات من المنصات التي أطلقناها، وكتالوج خدماتنا الكامل — متاح للتصفّح أدناه.",

      nav_section_tech: "أعمالنا",
      nav_section_smart: "ڤي للمنازل الذكية",

      section_tech_eyebrow: "أعمالنا",
      section_tech_h2: "مواقع إلكترونية وأنظمة ERP وCRM &mdash; في الواقع.",
      section_smart_eyebrow: "ڤي للمنازل الذكية",
      section_smart_h2: "أجهزة المنازل الذكية وتركيباتها.",

      catalog_h2: "الكتالوج",
      catalog_p: "كتالوج خدماتنا الكامل — منتجاتنا الرئيسية ودراسات حالة، صفحة بصفحة. استخدم الأسهم أو اضغط على إحدى الصور المصغرة للانتقال، واضغط على الصفحة لعرضها بملء الشاشة.",
      catalog_prev_word: "السابق",
      catalog_next_word: "التالي",
      catalog_page_label: "الصفحة {n} من {total}",

      gallery_eyebrow: "المعرض",
      gallery_h2: "من كتالوج مشاريعنا.",
      group_software_h3: "الويب والبرمجيات",
      group_smart_h3: "المنازل الذكية",

      cap_jusoor_hero: "جسور — الصفحة الرئيسية",
      cap_jusoor_features: "جسور — المميزات",
      cap_jusoor_browse: "جسور — تصفّح الأعمال التجارية",
      cap_ainhr_dashboard: "AinHR — لوحة التحكم",
      cap_ainhr_requests: "AinHR — جميع الطلبات",
      cap_ainhr_payroll: "AinHR — الرواتب",
      cap_mat_home: "MAT — لوحة التحكم الرئيسية",
      cap_mat_reports: "MAT — التقارير",
      cap_mat_files: "MAT — الملفات",
      cap_mat_finance: "MAT — المالية",
      cap_faz_home: "FAZ Global — الصفحة الرئيسية",
      cap_faz_services: "FAZ Global — الخدمات",
      cap_faz_furniture: "FAZ Global — كتالوج الأثاث",
      cap_smart_touch_panel: "لوحة تحكم ذكية بالحائط",
      cap_smart_edge_panel: "لوحة تحكم ذكية مقاس 8 بوصة",
      cap_smart_switch: "مفتاح حائط ذكي بشاشة تحكم بالحرارة",
      cap_smart_device_1: "وحدات ريليه ذكية",
      cap_smart_device_2: "وحدات تحكم ذكية",

      alt_jusoor_hero: "الصفحة الرئيسية لمنصة جسور",
      alt_jusoor_features: "قسم مميزات جسور: صفقات محمية، بيانات شفافة، فرص موثقة",
      alt_jusoor_browse: "شاشة تصفّح الأعمال في جسور",
      alt_ainhr_dashboard: "لوحة تحكم AinHR تعرض الحضور وعدد الموظفين والطلبات المعلقة",
      alt_ainhr_requests: "شاشة جميع الطلبات في AinHR تعرض طلبات الإجازات والمصاريف والتدريب",
      alt_ainhr_payroll: "ملخص رواتب AinHR مع تفاصيل راتب كل موظف",
      alt_mat_home: "لوحة تحكم MAT الرئيسية تعرض المشاريع المفتوحة والعملاء الجدد وقيمة المشاريع",
      alt_mat_reports: "شاشة تقارير MAT مع تحليلات مسار المبيعات ونسبة التحويل",
      alt_mat_files: "شاشة ملفات MAT تعرض مستندات المشاريع وعروض الأسعار",
      alt_mat_finance: "شاشة مالية MAT مع الإيرادات والمصروفات والتدفق النقدي",
      alt_faz_home: "الصفحة الرئيسية لموقع FAZ Global للمعدات الطبية ومعدات الإنشاءات والأثاث",
      alt_faz_services: "صفحة خدمات FAZ Global التي تغطي المنشآت الصحية وأعمال الإنشاءات",
      alt_faz_furniture: "صفحة كتالوج الأثاث في FAZ Global مع صور المنتجات",
      alt_smart_touch_panel: "لوحة تحكم ذكية سوداء مثبتة على الحائط تعرض معلومات الغرفة والأجهزة المفضلة",
      alt_smart_edge_panel: "لوحة تحكم ذكية مقاس 8 بوصة تعرض الأمان والأجهزة المفضلة والمشاهد",
      alt_smart_switch: "لوحة مفتاح حائط ذكي بشاشة تحكم بالحرارة وأزرار لمس",
      alt_smart_device_1: "ثلاث وحدات ريليه ذكية على طاولة",
      alt_smart_device_2: "مجموعة من وحدات التحكم الذكية على سكة DIN",

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
