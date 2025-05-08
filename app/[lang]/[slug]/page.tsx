import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getDictionary } from "../dictionaries";
import fetchSegment from "@/util/fetch-segment";
import Lang from "@/types/lang";
import SegmentPage from "@/components/SegmentPage";
import { Metadata } from "next";
import fetchPages from "@/util/fetch-pages";
import fetchBuild from "@/util/fetch-build";
import Page from "@/types/page";
import { notFound } from "next/navigation";
// import languages from "@/constants/languages";
// import fetchSegments from "@/util/fetch-segments";

export async function generateMetadata({ params }: {
  params: Promise<{ lang: Lang, slug: string }>
}): Promise<Metadata> {
  const { slug } = await params;
  const segment = await fetchSegment(slug);
  return {
    title: segment.title,
    description: segment.description,
  };
}

// Configure ISR with a revalidation period of 1 hour (3600 seconds)
export const revalidate = 3600;

// Enable dynamic params for on-demand generation of non-prerendered paths
export const dynamicParams = true;

// Pre-generate popular segments at build time
export async function generateStaticParams() {
  const segments = await fetchBuild("segments");
  
  return segments
}

export default async function Segment({ params }: {
  params: Promise<{ lang: Lang, slug: string }>
}) {
  const { slug, lang } = await params;
  const dict = await getDictionary(lang);
  const segment = await fetchSegment(slug);
  if (segment.lang && segment.lang !== lang) {
    notFound();
  }
  const pages = await fetchPages(lang);
  const termsAndConditions = pages.find((page: Page) => page.type === "terms-and-conditions");
  const privacyPolicy = pages.find((page: Page) => page.type === "privacy-policy");
  
  return (
    <>
      <Header dict={dict} lang={lang} page={segment.slug} />
      <SegmentPage dict={dict} segment={segment} />
      <Footer 
        dict={dict} 
        lang={lang} 
        termsAndConditions={termsAndConditions} 
        privacyPolicy={privacyPolicy} 
      />
    </>
  );
}
