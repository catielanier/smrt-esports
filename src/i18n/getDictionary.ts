import 'server-only';

const dictionaries = {
  en: () => import('@/i18n/dictionaries/en.json').then((mod) => mod.default),
  es: () => import('@/i18n/dictionaries/es.json').then((mod) => mod.default),
  fr: () => import('@/i18n/dictionaries/fr.json').then((mod) => mod.default),
  ja: () => import('@/i18n/dictionaries/ja.json').then((mod) => mod.default),
  ko: () => import('@/i18n/dictionaries/ko.json').then((mod) => mod.default),
  zh: () => import('@/i18n/dictionaries/zh.json').then((mod) => mod.default),
  'zh-cn': () => import('@/i18n/dictionaries/zh-cn.json').then((mod) => mod.default),
};

const getDictionary = async (locale: string) =>
  dictionaries[locale as keyof typeof dictionaries]() ?? dictionaries.en();

export default getDictionary;
