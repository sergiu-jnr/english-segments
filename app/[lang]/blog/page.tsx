import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getDictionary } from "../dictionaries";
import Lang from "@/types/lang";
import { Metadata } from "next";
import Hero from "@/components/Hero";
import fetchPages from "@/util/fetch-pages";
import Page from "@/types/page";
import ListPages from "@/components/ListPages";
import languages from "@/constants/languages";

export async function generateMetadata({ params }: {
  params: Promise<{ lang: Lang }>
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict[`blog`],
    description: dict[`blogDescription`],
  };
}

// Configure ISR with a revalidation period of 1 hour (3600 seconds)
export const revalidate = 3600;

// Enable dynamic params for on-demand generation of non-prerendered paths
export const dynamicParams = true;

// Pre-generate blog pages for all languages at build time
export async function generateStaticParams() {
  // Create params for each language
  return languages.map((language) => ({
    lang: language.code as Lang,
  }));
}

export default async function Blog({ params }: {
  params: Promise<{ lang: Lang }>
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const pages = await fetchPages(lang);
  const termsAndConditions = pages.find((page: Page) => page.type === "terms-and-conditions");
  const privacyPolicy = pages.find((page: Page) => page.type === "privacy-policy");
  
  return (
    <>
      <Header dict={dict} lang={lang} page={`blog`} />
      <Hero dict={dict} title={dict[`blog`]} description={dict[`blogDescription`]} />
      <ListPages dict={dict} pages={pages.filter(o => o.type === 'article')} />
      <Footer 
        dict={dict} 
        lang={lang} 
        termsAndConditions={termsAndConditions} 
        privacyPolicy={privacyPolicy} 
      />
    </>
  );
}
