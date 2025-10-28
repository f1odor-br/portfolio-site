// Glossary Data - same as original
const glossaryData = [
    // Базовые понятия iGaming
    { category: 'Базовые понятия iGaming', term: 'iGaming', abbr: 'Internet Gaming', definition: 'Индустрия онлайн-азартных игр (гемблинг + беттинг)' },
    { category: 'Базовые понятия iGaming', term: 'Гемблинг', abbr: 'Gambling', definition: 'Онлайн-казино, слоты, рулетка, покер' },
    { category: 'Базовые понятия iGaming', term: 'Беттинг', abbr: 'Betting', definition: 'Букмекерские конторы, ставки на спортивные события' },
    { category: 'Базовые понятия iGaming', term: 'Киберспорт', abbr: 'E-sports betting', definition: 'Ставки на киберспортивные турниры (CS:GO, Dota 2, LoL)' },
    
    // Модели оплаты и финансы
    { category: 'Модели оплаты и финансы', term: 'CPA', abbr: 'Cost Per Action', definition: 'Оплата за целевое действие (депозит, регистрация, покупка)' },
    { category: 'Модели оплаты и финансы', term: 'RevShare', abbr: 'Revenue Share', definition: 'Процент от прибыли рекламодателя с игрока (30-40% в гемблинге)' },
    { category: 'Модели оплаты и финансы', term: 'Hybrid', abbr: 'Гибридная модель', definition: 'CPA + RevShare: фикс за действие + процент на дистанции' },
    { category: 'Модели оплаты и финансы', term: 'FTD', abbr: 'First Time Deposit', definition: 'Первый депозит игрока (ключевая метрика в гемблинге)' },
    { category: 'Модели оплаты и финансы', term: 'Baseline', abbr: 'Бейслайн', definition: 'Сумма депозитов, которую игрок должен внести для оплаты вебу' },
    { category: 'Модели оплаты и финансы', term: 'Холд', abbr: 'Hold', definition: 'Период заморозки выплат (обычно 7-14 дней)' },
    { category: 'Модели оплаты и финансы', term: 'Капа', abbr: 'Лимит', definition: 'Ограничение по объему трафика в день/неделю' },
    { category: 'Модели оплаты и финансы', term: 'Апрув', abbr: 'Approve', definition: 'Процент лидов, подтвержденных рекламодателем как качественные' },
    { category: 'Модели оплаты и финансы', term: 'ROI', abbr: 'Return on Investment', definition: 'Окупаемость инвестиций в % ((доход - затраты) / затраты × 100%)' },
    
    // Арбитраж трафика
    { category: 'Арбитраж трафика', term: 'Арбитраж трафика', abbr: '', definition: 'Покупка трафика по одной цене и перепродажа по более высокой' },
    { category: 'Арбитраж трафика', term: 'Арбитражник', abbr: 'веб, вебмастер, аффилейт', definition: 'Специалист, который льет трафик на офферы за комиссию' },
    { category: 'Арбитраж трафика', term: 'Лить трафик', abbr: '', definition: 'Направлять посетителей на оффер по партнерской ссылке' },
    { category: 'Арбитраж трафика', term: 'Лить в плюс', abbr: '', definition: 'Зарабатывать на трафике, получать прибыль' },
    { category: 'Арбитраж трафика', term: 'Слить в пельменную', abbr: '', definition: 'Потратить весь бюджет без результата' },
    { category: 'Арбитраж трафика', term: 'Оффер', abbr: '', definition: 'Рекламное предложение (продукт/услуга для продвижения)' },
    { category: 'Арбитраж трафика', term: 'Вертикаль', abbr: '', definition: 'Ниша в арбитраже (нутра, дейтинг, гемблинг, товарка, финансы)' },
    { category: 'Арбитраж трафика', term: 'ГЕО', abbr: 'GEO', definition: 'Географический регион (страна, город) для таргетинга' },
    { category: 'Арбитраж трафика', term: 'Связка', abbr: '', definition: 'Комплекс элементов кампании: оффер + источник + креативы + лендинг' },
    
    // Креативы и лендинги
    { category: 'Креативы и лендинги', term: 'Креатив', abbr: 'крео', definition: 'Рекламный материал: баннер, видео, изображение, текст объявления' },
    { category: 'Креативы и лендинги', term: 'Лендинг', abbr: 'ленд', definition: 'Целевая страница оффера, где совершается действие' },
    { category: 'Креативы и лендинги', term: 'Прелендинг', abbr: 'преленд, прокла', definition: 'Промежуточная страница между рекламой и лендингом для прогрева' },
    { category: 'Креативы и лендинги', term: 'Прилы', abbr: 'приложения', definition: 'Мобильные приложения для арбитража (iOS/Android)' },
    { category: 'Креативы и лендинги', term: 'CTA', abbr: 'Call To Action', definition: 'Призыв к действию (Купить, Зарегистрироваться)' },
    
    // Метрики и аналитика
    { category: 'Метрики и аналитика', term: 'CR', abbr: 'Conversion Rate', definition: 'Коэффициент конверсии: (конверсии / посетители) × 100%' },
    { category: 'Метрики и аналитика', term: 'CTR', abbr: 'Click-Through Rate', definition: 'Кликабельность: (клики / показы) × 100%' },
    { category: 'Метрики и аналитика', term: 'EPC', abbr: 'Earnings Per Click', definition: 'Доход на один клик' },
    { category: 'Метрики и аналитика', term: 'CPM', abbr: 'Cost Per Mille', definition: 'Стоимость 1000 показов рекламы' },
    { category: 'Метрики и аналитика', term: 'CPC', abbr: 'Cost Per Click', definition: 'Стоимость одного клика' },
    { category: 'Метрики и аналитика', term: 'LTV', abbr: 'Lifetime Value', definition: 'Прибыль с клиента за все время его активности' },
    { category: 'Метрики и аналитика', term: 'Reg2Dep', abbr: 'Registration to Deposit', definition: 'Конверсия из регистрации в депозит' },
    
    // Инструменты
    { category: 'Инструменты', term: 'Трекер', abbr: '', definition: 'Система отслеживания и аналитики трафика (Keitaro, Binom)' },
    { category: 'Инструменты', term: 'Сплит-тест', abbr: 'A/B-тест', definition: 'Сравнение двух вариантов элемента для выбора лучшего' },
    { category: 'Инструменты', term: 'Клоакинг', abbr: 'клоака', definition: 'Показ разного контента разным посетителям (обход модерации)' },
    { category: 'Инструменты', term: 'Spy-сервис', abbr: '', definition: 'Инструмент для анализа чужих рекламных кампаний' },
    { category: 'Инструменты', term: 'Антифрод', abbr: '', definition: 'Система борьбы с мошенничеством и ботовым трафиком' },
    { category: 'Инструменты', term: 'Postback', abbr: '', definition: 'Сигнал от партнерки трекеру о совершенной конверсии' },
    
    // Таргетинг и источники
    { category: 'Таргетинг и источники', term: 'SEO', abbr: 'Search Engine Optimization', definition: 'Поисковая оптимизация' },
    { category: 'Таргетинг и источники', term: 'ASO', abbr: 'App Store Optimization', definition: 'Оптимизация в магазинах приложений' },
    { category: 'Таргетинг и источники', term: 'PPC', abbr: 'Pay Per Click', definition: 'Контекстная реклама с оплатой за клик' },
    { category: 'Таргетинг и источники', term: 'Пуши', abbr: 'push', definition: 'Push-уведомления как источник трафика' },
    { category: 'Таргетинг и источники', term: 'Нативка', abbr: '', definition: 'Нативная реклама, интегрированная в контент' },
    
    // Роли в экосистеме
    { category: 'Роли в экосистеме', term: 'Рекламодатель', abbr: 'рекл, адверт', definition: 'Владелец продукта, заказывающий трафик' },
    { category: 'Роли в экосистеме', term: 'Партнерка', abbr: 'ПП', definition: 'CPA-сеть, посредник между рекламодателем и вебмастером' },
    { category: 'Роли в экосистеме', term: 'Аффилейт-менеджер', abbr: '', definition: 'Персональный менеджер для вебмастеров в партнерке' },
    { category: 'Роли в экосистеме', term: 'Саппорт', abbr: '', definition: 'Техподдержка партнерской программы' },
    { category: 'Роли в экосистеме', term: 'Инхаус', abbr: 'in-house', definition: 'Собственный продукт партнерки (например, BetAndreas у LGaming)' },
    
    // Термины гемблинга
    { category: 'Термины гемблинга', term: 'Деп', abbr: 'депозит', definition: 'Пополнение игрового счета' },
    { category: 'Термины гемблинга', term: 'Редеп', abbr: '', definition: 'Повторный депозит игрока' },
    { category: 'Термины гемблинга', term: 'Кит', abbr: '', definition: 'VIP-игрок с большими депозитами' },
    { category: 'Термины гемблинга', term: 'Ретеншн', abbr: 'retention', definition: 'Удержание игроков, работа с возвратом' },
    { category: 'Термины гемблинга', term: 'KYC', abbr: 'Know Your Customer', definition: 'Верификация личности игрока' },
    { category: 'Термины гемблинга', term: 'Фрод', abbr: 'fraud', definition: 'Мошенничество, накрутка, некачественный трафик' },
    
    // Технические термины
    { category: 'Технические термины', term: 'Акк', abbr: 'аккаунт', definition: 'Профиль для запуска рекламных кампаний' },
    { category: 'Технические термины', term: 'Фармить акк', abbr: '', definition: 'Подготавливать аккаунт перед заливом (прогрев, активность)' },
    { category: 'Технические термины', term: 'Бан', abbr: '', definition: 'Блокировка аккаунта/рекламы' },
    { category: 'Технические термины', term: 'Виртуальная карта', abbr: '', definition: 'Электронная карта для оплаты рекламы' },
    
    // Сленг арбитражников
    { category: 'Сленг арбитражников', term: 'Палка', abbr: 'бан-палка', definition: 'Блокировка аккаунта' },
    { category: 'Сленг арбитражников', term: 'Откручивать рекламу', abbr: '', definition: 'Запускать рекламные кампании' },
    { category: 'Сленг арбитражников', term: 'Отлить капу', abbr: '', definition: 'Использовать весь доступный лимит трафика' },
    { category: 'Сленг арбитражников', term: 'Затестить', abbr: '', definition: 'Протестировать связку/оффер' },
    { category: 'Сленг арбитражников', term: 'Масштабировать', abbr: '', definition: 'Увеличивать бюджет успешной кампании' },
    { category: 'Сленг арбитражников', term: 'Стата', abbr: '', definition: 'Статистика в личном кабинете партнерки' },
    { category: 'Сленг арбитражников', term: 'Инсайд', abbr: '', definition: 'Секретная информация, совет от инсайдера' }
];

let currentFilter = 'all';
let currentSearchTerm = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderGlossary();
    initializeFilters();
    initializeSearch();
    initializeAccordion();
    initializeScrollReveal();
    initializeModal();
    initSmoothScrolling();
});

// Smooth scrolling for navigation
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Render Glossary
function renderGlossary() {
    const glossaryGrid = document.getElementById('glossaryGrid');
    glossaryGrid.innerHTML = '';
    
    const filteredTerms = glossaryData.filter(term => {
        const matchesCategory = currentFilter === 'all' || term.category === currentFilter;
        const matchesSearch = term.term.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
                            term.definition.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
                            term.abbr.toLowerCase().includes(currentSearchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    
    filteredTerms.forEach(term => {
        const card = document.createElement('div');
        card.className = 'term-card';
        card.innerHTML = `
            <div class="term-category">${term.category}</div>
            <div class="term-name">${term.term}</div>
            ${term.abbr ? `<div class="term-abbr">${term.abbr}</div>` : ''}
            <div class="term-definition">${term.definition}</div>
        `;
        
        card.addEventListener('click', () => openModal(term));
        glossaryGrid.appendChild(card);
    });
    
    if (filteredTerms.length === 0) {
        glossaryGrid.innerHTML = '<p style="text-align: center; padding: 40px; color: #666; grid-column: 1 / -1;">Термины не найдены</p>';
    }
}

// Initialize Filters
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.category;
            renderGlossary();
        });
    });
}

// Initialize Search
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value;
        renderGlossary();
    });
}

// Initialize Accordion
function initializeAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all accordion items
            document.querySelectorAll('.accordion-item').forEach(accItem => {
                accItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Initialize Scroll Reveal
function initializeScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('revealed');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
}

// Modal Functions
function initializeModal() {
    const modal = document.getElementById('termModal');
    const closeBtn = document.querySelector('.modal-close');
    
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openModal(term) {
    const modal = document.getElementById('termModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="modal-term-category">${term.category}</div>
        <h2 class="modal-term-name">${term.term}</h2>
        ${term.abbr ? `<div class="modal-term-abbr">${term.abbr}</div>` : ''}
        <div class="modal-term-definition">${term.definition}</div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('termModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}