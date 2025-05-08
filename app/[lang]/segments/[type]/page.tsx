import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getDictionary } from "../../dictionaries";
import Lang from "@/types/lang";
import { Metadata } from "next";
import fetchSegments from "@/util/fetch-segments";
import Segments from "@/components/Segments";
import Hero from "@/components/Hero";
import fetchPages from "@/util/fetch-pages";
import Page from "@/types/page";
import languages from "@/constants/languages";

export async function generateMetadata(
  { params }: { params: Promise<{ lang: Lang, type: string }> }
): Promise<Metadata> {
  const { lang, type } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict[`${type}Segments`],
    description: dict.description,
  };
}

// Configure ISR with a revalidation period of 1 hour (3600 seconds)
export const revalidate = 3600;

// Enable dynamic params for on-demand generation of non-prerendered paths
export const dynamicParams = true;

// Pre-generate all segment types (movie, podcast, story) for all languages at build time
export async function generateStaticParams() {
  // The three segment types
  const segmentTypes = ["movie", "podcast", "story"];
  
  // Generate combinations of language and segment type
  const params = [];
  for (const language of languages) {
    for (const type of segmentTypes) {
      params.push({ 
        lang: language.code as Lang, 
        type 
      });
    }
  }
  
  return params;
}

export default async function Segment({ params }: { 
  params: Promise<{ lang: Lang, type: string }> 
}) {
  const { lang, type } = await params;
  const dict = await getDictionary(lang);
  const segments = await fetchSegments(false, lang, type);
  const pages = await fetchPages(lang);
  const termsAndConditions = pages.find((page: Page) => page.type === "terms-and-conditions");
  const privacyPolicy = pages.find((page: Page) => page.type === "privacy-policy");
  
  return (
    <>
      <Header dict={dict} lang={lang} page={`segments/${type}`} />
      <Hero dict={dict} title={dict[`${type}Segments`]} />
      <Segments dict={dict} segments={segments} />
      <Footer 
        dict={dict} 
        lang={lang} 
        termsAndConditions={termsAndConditions} 
        privacyPolicy={privacyPolicy} 
      />
    </>
  );
}
