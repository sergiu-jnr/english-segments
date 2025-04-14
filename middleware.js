import { NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match as localeMatcher } from "@formatjs/intl-localematcher";
import languages from "./constants/languages";

const locales = languages.map((lang) => lang.code);
const defaultLocale = "en"; // Default locale

function getLocale(request) {
  const headers = { "accept-language": request.headers.get("accept-language") || "" };
  const languages = new Negotiator({ headers }).languages();
  return localeMatcher(languages, locales, defaultLocale);
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
 
  if (pathnameHasLocale) return

  // Redirect if no locale is present in the pathname
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
    '/((?!_next|api|public|media|yandex_e3f529782174cad6\\.html|robots\\.txt|BingSiteAuth\\.xml|sitemap\\.xml).*)'
  ]
};
