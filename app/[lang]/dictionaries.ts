import 'server-only'
 
const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  ro: () => import('./dictionaries/ro.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: 'en' | 'ro') => {
    const loadDictionary = dictionaries[locale];
    if (!loadDictionary) throw new Error(`Locale "${locale}" not found`);
    return loadDictionary();
  };