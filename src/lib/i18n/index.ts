import { browser } from '$app/environment'
import { init, register } from 'svelte-i18n'

const defaultLocale = 'en'

register('en', () => import('./locales/en.json'))
register('fr', () => import('./locales/fr.json'))
register('zh', () => import('./locales/zh.json'))
register('ja', () => import('./locales/ja.json'))
register('ko', () => import('./locales/ko.json'))
register('es', () => import('./locales/es.json'))

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? window.navigator.language : defaultLocale,
})