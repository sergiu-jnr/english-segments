type Language = {
    flag: string;
    code: string;
    english_name: string;
    local_name: string;
    countries: string[];
}

const languages: Language[] = [
    {
        flag: 'fi-eg',
        code: 'ar',
        english_name: 'Arabic',
        local_name: 'العربية',
        countries: ['EG', 'SA', 'AE', 'LB', 'JO', 'SY', 'IQ', 'MA', 'TN', 'DZ', 'YE', 'SD', 'LY', 'KW', 'QA', 'BH', 'OM']
    },
    {
        flag: 'fi-bg',
        code: 'bg',
        english_name: 'Bulgarian',
        local_name: 'Български',
        countries: ['BG']
    },
    {
        flag: 'fi-cz',
        code: 'cs',
        english_name: 'Czech',
        local_name: 'Čeština',
        countries: ['CZ']
    },
    {
        flag: 'fi-dk',
        code: 'da',
        english_name: 'Danish',
        local_name: 'Dansk',
        countries: ['DK']
    },
    {
        flag: 'fi-gb',
        code: 'en',
        english_name: 'English',
        local_name: 'English',
        countries: ['US', 'GB', 'CA', 'AU']
    },
    {
        flag: 'fi-de',
        code: 'de',
        english_name: 'German',
        local_name: 'Deutsch',
        countries: ['DE', 'AT', 'CH', 'LI']
    },
    {

        flag: 'fi-gr',
        code: 'el',
        english_name: 'Greek',
        local_name: 'Ελληνικά',
        countries: ['GR', 'CY']
    },
    {
        flag: 'fi-es',
        code: 'es',
        english_name: 'Spanish',
        local_name: 'Español',
        countries: ['ES', 'MX', 'CO', 'AR', 'PE', 'VE', 'CL', 'EC', 'GT', 'HN', 'SV', 'CR', 'PA', 'DO', 'BO', 'PY', 'UY', 'NI', 'CU']
    },
    {
        flag: 'fi-ee',
        code: 'et',
        english_name: 'Estonian',
        local_name: 'Eesti',
        countries: ['EE']
    },
    {
        flag: 'fi-fi',
        code: 'fi',
        english_name: 'Finnish',
        local_name: 'Suomi',
        countries: ['FI']
    },
    {
        flag: 'fi-fr',
        code: 'fr',
        english_name: 'French',
        local_name: 'Français',
        countries: ['FR', 'CA', 'BE', 'CH', 'LU', 'MC']
    },
    {
        flag: 'fi-hu',
        code: 'hu',
        english_name: 'Hungarian',
        local_name: 'Magyar',
        countries: ['HU']
    },
    {
        flag: 'fi-id',
        code: 'id',
        english_name: 'Indonesian',
        local_name: 'Bahasa Indonesia',
        countries: ['ID']
    },
    {
        flag: 'fi-it',
        code: 'it',
        english_name: 'Italian',
        local_name: 'Italiano',
        countries: ['IT', 'CH', 'SM', 'VA', 'SI']
    },
    {
        flag: 'fi-jp',
        code: 'ja',
        english_name: 'Japanese',
        local_name: '日本語',
        countries: ['JP']
    },
    {
        flag: 'fi-kr',
        code: 'ko',
        english_name: 'Korean',
        local_name: '한국어',
        countries: ['KR', 'KP']
    },
    {
        flag: 'fi-lt',
        code: 'lt',
        english_name: 'Lithuanian',
        local_name: 'Lietuvių',
        countries: ['LT']
    },
    {
        flag: 'fi-lv',
        code: 'lv',
        english_name: 'Latvian',
        local_name: 'Latviešu',
        countries: ['LV']
    },
    {
        flag: 'fi-no',
        code: 'nb',
        english_name: 'Norwegian Bokmål',
        local_name: 'Norsk Bokmål',
        countries: ['NO']
    },
    {
        flag: 'fi-nl',
        code: 'nl',
        english_name: 'Dutch',
        local_name: 'Nederlands',
        countries: ['NL', 'BE', 'SR']
    },
    {
        flag: 'fi-pl',
        code: 'pl',
        english_name: 'Polish',
        local_name: 'Polski',
        countries: ['PL']
    },
    {
        flag: 'fi-pt',
        code: 'pt',
        english_name: 'Portuguese',
        local_name: 'Português',
        countries: ['PT', 'AO', 'MZ', 'GW', 'TL', 'MO']
    },
    {
        flag: 'fi-ro',
        code: 'ro',
        english_name: 'Romanian',
        local_name: 'Română',
        countries: ['RO', 'MD']
    },
    {
        flag: 'fi-ru',
        code: 'ru',
        english_name: 'Russian',
        local_name: 'Русский',
        countries: ['RU', 'KZ', 'BY', 'KG', 'TJ', 'UA', 'MD']
    },
    {
        flag: 'fi-sk',
        code: 'sk',
        english_name: 'Slovak',
        local_name: 'Slovenčina',
        countries: ['SK']
    },
    {
        flag: 'fi-si',
        code: 'sl',
        english_name: 'Slovenian',
        local_name: 'Slovenščina',
        countries: ['SI']
    },
    {
        flag: 'fi-se',
        code: 'sv',
        english_name: 'Swedish',
        local_name: 'Svenska',
        countries: ['SE', 'FI', 'AX']
    },
    {
        flag: 'fi-tr',
        code: 'tr',
        english_name: 'Turkish',
        local_name: 'Türkçe',
        countries: ['TR', 'CY']
    },
    {
        flag: 'fi-ua',
        code: 'uk',
        english_name: 'Ukrainian',
        local_name: 'Українська',
        countries: ['UA']
    },
    {
        flag: 'fi-cn',
        code: 'zh',
        english_name: 'Chinese (simplified)',
        local_name: '简体中文',
        countries: ['CN', 'SG', 'MY']
    },
];

export default languages;