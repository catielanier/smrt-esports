import { NextRequest, NextResponse } from 'next/server';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { i18n } from '@/i18n/i18n-config';

// Get the preferred locale
function getLocale(request: NextRequest) {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: string[] = [...i18n.locales];
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);

  return matchLocale(languages, i18n.locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 🚀 Exclude ALL static assets (except JS)
  if (/\.(ico|png|jpg|jpeg|svg|gif|webp|woff2|ttf|eot|mp4|webm|ogg|mp3|wav|json|map)$/.test(pathname)) {
    console.log('Skipping middleware for static file:', pathname);
    return NextResponse.next();
  }
  // Check if the pathname already includes a locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return NextResponse.next(); // Continue without redirecting

  // Redirect if there is no locale
  const locale = getLocale(request);
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: ['/((?!_next/|favicon.ico).*)'],
};
