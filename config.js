const CONFIG = {
  company: {
    name: 'СтройМастер',
    slogan: 'Строим ваш дом мечты',
    description: 'Строительная компания полного цикла в Екатеринбурге. Ремонт квартир, строительство домов, дизайн-проекты и инженерные сети. Надёжно, качественно, в срок.',
    city: 'Екатеринбург',
    yearFounded: 2012
  },

  contact: {
    phone: '+7 (343) 333-44-55',
    phoneLink: 'tel:+73433334455',
    email: 'info@stroymaster.ru',
    address: 'Екатеринбург, ул. Малышева, д. 36, офис 501',
    workHours: 'Пн-Пт: 09:00–18:00, Сб: 10:00–15:00',
    whatsapp: '+73433334455',
    telegram: '@stroymaster_ekb'
  },

  seo: {
    title: 'СтройМастер — Строительство и ремонт в Екатеринбурге',
    description: 'Строительство домов под ключ, ремонт квартир, дизайн-проекты в Екатеринбурге. Опыт более 10 лет, гарантия на все работы, прозрачные сметы.',
    keywords: 'строительство домов Екатеринбург, ремонт квартир, строительная компания, дизайн-проект, инженерные сети, кровля, фасадные работы',
    ogImage: '/assets/og-stroymaster.jpg',
    canonical: 'https://stroymaster.ru'
  },

  design: {
    bgPrimary: '#F5F5F0',
    bgSecondary: '#FFFFFF',
    bgCard: '#FFFFFF',
    bgGlass: 'rgba(255, 255, 255, 0.8)',
    textPrimary: '#1B3A4B',
    textSecondary: '#4A5568',
    textMuted: '#8A9AAE',
    accentBlue: '#1B3A4B',
    accentGreen: '#F5A623',
    accentOrange: '#E8491D',
    gradientPrimary: 'linear-gradient(135deg, #1B3A4B 0%, #F5A623 100%)',
    gradientBorder: 'linear-gradient(135deg, #1B3A4B, #F5A623)',
    glassBlur: '20px',
    glassBorder: '1px solid rgba(27, 58, 75, 0.12)',
    fontPrimary: "'Inter', sans-serif",
    fontMono: "'JetBrains Mono', monospace"
  },

  hero: {
    headline: 'Строим ваш дом мечты',
    subheadline: 'Надёжно, качественно, в срок',
    description: 'Строительная компания полного цикла. От фундамента до чистовой отделки — берём на себя весь процесс строительства и ремонта.',
    ctaText: 'Получить консультацию',
    ctaSecondaryText: 'Рассчитать стоимость',
    ctaLink: '#pricing',
    showStats: true,
    stats: [
      { value: '12+', label: 'Лет на рынке' },
      { value: '350+', label: 'Реализованных проектов' },
      { value: '98%', label: 'Довольных клиентов' },
      { value: '5 лет', label: 'Гарантия на работы' }
    ],
    showVisualization: true
  },

  features: {
    title: 'Наши услуги',
    subtitle: 'Полный спектр строительных и ремонтных работ',
    showBentoGrid: true,
    items: [
      {
        id: 'apartment',
        title: 'Ремонт квартир',
        description: 'Косметический, капитальный и дизайнерский ремонт квартир любой сложности. От черновой отделки до «под ключ» с мебелью.',
        icon: '🏠',
        size: 'medium',
        type: 'feature',
        color: '#1B3A4B'
      },
      {
        id: 'house',
        title: 'Строительство домов',
        description: 'Строительство частных домов и коттеджей из кирпича, газобетона и по канадской технологии. Проекты любой сложности.',
        icon: '🏗️',
        size: 'medium',
        type: 'feature',
        color: '#F5A623'
      },
      {
        id: 'design',
        title: 'Дизайн-проект',
        description: 'Интерьерный дизайн с 3D-визуализацией, планировочными решениями, чертежами и подбором материалов. Реализуем проекты от идеи до сдачи.',
        icon: '🎨',
        size: 'medium',
        type: 'feature',
        color: '#E8491D'
      },
      {
        id: 'engineering',
        title: 'Инженерные сети',
        description: 'Монтаж отопления, водоснабжения, канализации, электрики и вентиляции. Проектирование и установка с гарантией.',
        icon: '⚡',
        size: 'medium',
        type: 'feature',
        color: '#1B3A4B'
      },
      {
        id: 'facade',
        title: 'Фасадные работы',
        description: 'Утепление и отделка фасадов, монтаж вентилируемых фасадов, штукатурные работы. Повышаем энергоэффективность вашего дома.',
        icon: '🧱',
        size: 'medium',
        type: 'feature',
        color: '#F5A623'
      },
      {
        id: 'roofing',
        title: 'Кровля',
        description: 'Монтаж, ремонт и замена кровли. Все виды кровельных материалов: металлочерепица, мягкая кровля, фальцевая кровля.',
        icon: '🏡',
        size: 'medium',
        type: 'feature',
        color: '#E8491D'
      }
    ]
  },

  steps: {
    showSteps: true,
    title: 'Как мы работаем',
    subtitle: 'Прозрачный процесс от заявки до сдачи объекта',
    items: [
      { number: 1, title: 'Замер', description: 'Выезд на объект, осмотр, замеры и обсуждение ваших пожеланий.' },
      { number: 2, title: 'Проект', description: 'Разработка дизайн-проекта или технического решения с 3D-визуализацией.' },
      { number: 3, title: 'Смета', description: 'Детальная смета с фиксированной стоимостью. Без скрытых доплат.' },
      { number: 4, title: 'Строительство', description: 'Выполнение работ по согласованному графику с еженедельной отчётностью.' },
      { number: 5, title: 'Сдача', description: 'Финальная проверка, устранение замечаний, подписание актов и гарантия.' }
    ]
  },

  pricing: {
    showPricing: true,
    title: 'Стоимость работ',
    subtitle: 'Прозрачные цены, фиксированные в договоре',
    plans: [
      {
        name: 'Ремонт квартир',
        price: 'от 5 000',
        currency: '₽',
        period: 'за м²',
        description: 'Косметический и капитальный ремонт',
        features: [
          'Замер и выезд бесплатно',
          'Детальная смета до начала работ',
          'Фиксированная цена в договоре',
          'Соблюдение сроков',
          'Гарантия 2 года'
        ],
        excludedFeatures: [],
        cta: 'Рассчитать стоимость',
        popular: false,
        yookassaAmount: 5000,
        yookassaDescription: 'Ремонт квартир — СтройМастер'
      },
      {
        name: 'Дом под ключ',
        price: 'от 3 000 000',
        currency: '₽',
        period: '',
        description: 'Строительство от фундамента до отделки',
        features: [
          'Индивидуальный проект',
          'Все виды работ включены',
          'Прозрачная смета',
          'Строительство за 4–8 месяцев',
          'Гарантия 5 лет',
          'Помощь в получении ипотеки'
        ],
        excludedFeatures: [],
        cta: 'Обсудить проект',
        popular: true,
        yookassaAmount: 3000000,
        yookassaDescription: 'Строительство дома — СтройМастер'
      },
      {
        name: 'Дизайн-проект',
        price: 'от 2 500',
        currency: '₽',
        period: 'за м²',
        description: 'Интерьерный дизайн с визуализацией',
        features: [
          'Замер и обмер помещения',
          '3D-визуализация',
          'Планировочные решения',
          'Чертежи для строителей',
          'Подбор материалов и мебели'
        ],
        excludedFeatures: [],
        cta: 'Заказать проект',
        popular: false,
        yookassaAmount: 2500,
        yookassaDescription: 'Дизайн-проект — СтройМастер'
      }
    ]
  },

  testimonials: {
    showTestimonials: true,
    title: 'Отзывы клиентов',
    items: [
      {
        name: 'Андрей и Мария Волковы',
        role: 'Построили дом в СНТ «Берёзки»',
        text: 'Построили дом 180 м² за 5 месяцев. Все этапы были согласованы, строители работали аккуратно, смета не изменилась. Очень довольны результатом!',
        rating: 5
      },
      {
        name: 'Ирина Соколова',
        role: 'Ремонт квартиры в Втузгородке',
        text: 'Делали капитальный ремонт двухкомнатной квартиры. Ребята профессионалы — справились за 2 месяца, уложились в смету. Отдельное спасибо за помощь с выбором материалов.',
        rating: 5
      },
      {
        name: 'Павел Егоров',
        role: 'Строительство коттеджа',
        text: 'Выбрали СтройМастер после сравнения 5 компаний. Лучшее соотношение цена-качество. Построили дом за 4 месяца, все по проекту. Рекомендую!',
        rating: 5
      }
    ]
  },

  faq: {
    showFaq: true,
    title: 'Часто задаваемые вопросы',
    items: [
      {
        question: 'Как формируется смета?',
        answer: 'Смета составляется после выезда замерщика и согласования объёмов работ. Мы фиксируем стоимость в договоре — никаких скрытых доплат. Если вы решите добавить работы, это будет оформлено отдельным соглашением.'
      },
      {
        question: 'Какие сроки строительства дома?',
        answer: 'Сроки зависят от площади и сложности проекта. Небольшой дом 100–150 м² строится за 3–5 месяцев. Коттедж 200–300 м² — за 5–8 месяцев. Точные сроки фиксируются в договоре.'
      },
      {
        question: 'Предоставляете ли вы гарантию?',
        answer: 'Да, мы предоставляем гарантию: на ремонт квартир — 2 года, на строительство — 5 лет, на инженерные сети — 3 года. В течение гарантийного срока устраняем любые дефекты бесплатно.'
      },
      {
        question: 'Можно ли контролировать ход работ?',
        answer: 'Конечно! Мы предоставляем еженедельные фотоотчёты, вы можете посещать объект в удобное время. Также у нас есть личный кабинет с графиком работ и статусом каждого этапа.'
      },
      {
        question: 'Работаете ли вы с ипотекой?',
        answer: 'Да, мы поможем оформить кредит или рассрочку через банки-партнёры. Также доступна оплата в несколько этапов по мере готовности работ.'
      }
    ]
  },

  form: {
    title: 'Бесплатная консультация',
    subtitle: 'Рассчитаем стоимость вашего проекта за 24 часа',
    fields: [
      { name: 'name', label: 'Ваше имя', type: 'text', placeholder: 'Андрей', required: true },
      { name: 'phone', label: 'Телефон', type: 'tel', placeholder: '+7 (___) ___-__-__', required: true },
      { name: 'service', label: 'Интересующая услуга', type: 'select', options: ['Ремонт квартиры', 'Строительство дома', 'Дизайн-проект', 'Инженерные сети', 'Фасадные работы', 'Кровля', 'Другое'], required: false },
      { name: 'area', label: 'Площадь (м²)', type: 'text', placeholder: '120', required: false },
      { name: 'message', label: 'Сообщение', type: 'textarea', placeholder: 'Опишите ваш проект или задачу', required: false }
    ],
    submitText: 'Получить расчёт стоимости',
    privacyText: 'Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности',
    formsubmitEmail: 'info@stroymaster.ru',
    autoResponse: 'Спасибо за заявку! Наш специалист свяжется с вами в течение 24 часов и предоставит предварительный расчёт.'
  },

  social: {
    vk: 'https://vk.com/stroymaster_ekb',
    telegram: 'https://t.me/stroymaster_ekb'
  },

  sections: {
    showHero: true,
    showBentoGrid: true,
    showSteps: true,
    showPricing: true,
    showTestimonials: true,
    showFaq: true,
    showForm: true,
    showSocial: true,
    showWhatsapp: true,
    showTelegram: true
  },

  yookassa: {
    shopId: 'YOUR_SHOP_ID',
    secretKey: 'YOUR_SECRET_KEY',
    successUrl: 'https://stroymaster.ru/success',
    cancelUrl: 'https://stroymaster.ru/cancel'
  },

  analytics: {
    yandexMetrika: '',
    googleAnalytics: ''
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
