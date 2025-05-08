import AvailableLanguages from "@/components/AvailableLanguages";
import Edition from "@/components/Edition";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import languages from "@/constants/languages";
import fetchSegments from "@/util/fetch-segments";
import { getDictionary } from "./dictionaries";
import Lang from "@/types/lang";
import { Metadata } from "next";
import fetchPages from "@/util/fetch-pages";
import Page from "@/types/page";

export async function generateMetadata(
  { params }: { params: { lang: Lang } }
): Promise<Metadata> {
  const dict = await getDictionary(params.lang);
  return {
    title: dict.title,
    description: dict.description,
    openGraph: {
      images: [
        {
          url: "https://www.englishsegments.com/media/cover.jpg",
          width: 795,
          height: 300,
        },
      ],
    },
  };
}

// Configure ISR with a revalidation period of 1 hour (3600 seconds)
export const revalidate = 3600;

// Enable dynamic params - if a language is requested that wasn't
// statically generated, it will be generated on demand
export const dynamicParams = true;

// Generate static params for known languages at build time
export async function generateStaticParams() {
  return languages.map((language) => ({
    lang: language.code as Lang,
  }));
}

export default async function Home({ params }: { params: { lang: Lang } }) {
  const dict = await getDictionary(params.lang);
  const segments = await fetchSegments(true, params.lang);
  const pages = await fetchPages(params.lang);
  const termsAndConditions = pages.find((page: Page) => page.type === "terms-and-conditions");
  const privacyPolicy = pages.find((page: Page) => page.type === "privacy-policy");

  return (
    <>
      <Header dict={dict} lang={params.lang} page="/" />
      <Hero dict={dict} />
      <AvailableLanguages lang={params.lang} languages={languages} />
      <Edition dict={dict} segments={segments} />
      <Footer
        dict={dict}
        lang={params.lang}
        termsAndConditions={termsAndConditions}
        privacyPolicy={privacyPolicy}
      />
    </>
  );
}
