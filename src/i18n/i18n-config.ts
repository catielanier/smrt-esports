export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'es', 'fr', 'ja', 'ko', 'zh', 'zh-cn'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
