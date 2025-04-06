import Lang from '@/types/lang';
import 'server-only'
 
const dictionaries = {
  ar: () => import('./dictionaries/ar.json').then((module) => module.default as Record<string, string>),
  bg: () => import('./dictionaries/bg.json').then((module) => module.default as Record<string, string>),
  cs: () => import('./dictionaries/cs.json').then((module) => module.default as Record<string, string>),
  da: () => import('./dictionaries/da.json').then((module) => module.default as Record<string, string>),
  en: () => import('./dictionaries/en.json').then((module) => module.default as Record<string, string>),
  de: () => import('./dictionaries/de.json').then((module) => module.default as Record<string, string>),
  el: () => import('./dictionaries/el.json').then((module) => module.default as Record<string, string>),
  es: () => import('./dictionaries/es.json').then((module) => module.default as Record<string, string>),
  et: () => import('./dictionaries/et.json').then((module) => module.default as Record<string, string>),
  fi: () => import('./dictionaries/fi.json').then((module) => module.default as Record<string, string>),
  fr: () => import('./dictionaries/fr.json').then((module) => module.default as Record<string, string>),
  hu: () => import('./dictionaries/hu.json').then((module) => module.default as Record<string, string>),
  id: () => import('./dictionaries/id.json').then((module) => module.default as Record<string, string>),
  it: () => import('./dictionaries/it.json').then((module) => module.default as Record<string, string>),
  ja: () => import('./dictionaries/ja.json').then((module) => module.default as Record<string, string>),
  ko: () => import('./dictionaries/ko.json').then((module) => module.default as Record<string, string>),
  lt: () => import('./dictionaries/lt.json').then((module) => module.default as Record<string, string>),
  lv: () => import('./dictionaries/lv.json').then((module) => module.default as Record<string, string>),
  nb: () => import('./dictionaries/nb.json').then((module) => module.default as Record<string, string>),
  nl: () => import('./dictionaries/nl.json').then((module) => module.default as Record<string, string>),
  pl: () => import('./dictionaries/pl.json').then((module) => module.default as Record<string, string>),
  pt: () => import('./dictionaries/pt.json').then((module) => module.default as Record<string, string>),
  ro: () => import('./dictionaries/ro.json').then((module) => module.default as Record<string, string>),
  ru: () => import('./dictionaries/ru.json').then((module) => module.default as Record<string, string>),
  sk: () => import('./dictionaries/sk.json').then((module) => module.default as Record<string, string>),
  sl: () => import('./dictionaries/sl.json').then((module) => module.default as Record<string, string>),
  sv: () => import('./dictionaries/sv.json').then((module) => module.default as Record<string, string>),
  tr: () => import('./dictionaries/tr.json').then((module) => module.default as Record<string, string>),
  uk: () => import('./dictionaries/uk.json').then((module) => module.default as Record<string, string>),
  zh: () => import('./dictionaries/zh.json').then((module) => module.default as Record<string, string>),
}
 
export const getDictionary = async (locale: Lang): Promise<Record<string, string>> => {
    const loadDictionary = dictionaries[locale];
    if (!loadDictionary) throw new Error(`Locale "${locale}" not found`);
    return loadDictionary();
  };