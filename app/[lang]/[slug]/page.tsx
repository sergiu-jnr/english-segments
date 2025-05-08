import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getDictionary } from "../dictionaries";
import fetchSegment from "@/util/fetch-segment";
import Lang from "@/types/lang";
import SegmentPage from "@/components/SegmentPage";
import { Metadata } from "next";
import fetchPages from "@/util/fetch-pages";
import Page from "@/types/page";
import languages from "@/constants/languages";
import fetchSegments from "@/util/fetch-segments";

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
  const params = [];
  
  // Get a list of popular segments to pre-generate
  // This is just an example - you may need to adjust how you fetch featured segments
  for (const language of languages) {
    // For each language, fetch some featured segments (e.g., first 5 from each type)
    try {
      // Get some segments from each type
      const movieSegments = await fetchSegments(false, language.code as Lang, "movie");
      const podcastSegments = await fetchSegments(false, language.code as Lang, "podcast");
      const storySegments = await fetchSegments(false, language.code as Lang, "story");
      
      // Combine all segments
      const allSegments = [...movieSegments, ...podcastSegments, ...storySegments];
      
      // Take the first few segments from each type (limit to avoid excessive build times)
      const featuredSegments = allSegments.slice(0, 15);
      
      // Add each segment to params
      for (const segment of featuredSegments) {
        params.push({
          lang: language.code as Lang,
          slug: segment.slug
        });
      }
    } catch (error) {
      console.error(`Error fetching segments for language ${language.code}:`, error);
      // Continue with other languages even if one fails
    }
  }
  
  return params;
}

export default async function Segment({ params }: {
  params: Promise<{ lang: Lang, slug: string }>
}) {
  const { slug, lang } = await params;
  const dict = await getDictionary(lang);
  const segment = await fetchSegment(slug);
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
