import AvailableLanguages from "@/components/AvailableLanguages";
import Edition from "@/components/Edition";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import languages from "@/constants/languages";
import fetchSegments from "@/util/fetch-segments";
import { getDictionary } from "./dictionaries";
import Lang from "@/types/lang";
import { Metadata, } from "next";

export async function generateMetadata(
  { params }: { params: Promise<{ lang: Lang }> }
): Promise<Metadata> {
  const { lang } = await params

  const dict = await getDictionary(lang)
 
  return {
    title: dict.title,
    description: dict.description, 
  }
}

export default async function Home({ params }: {
  params: Promise<{ lang: Lang }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const segments = await fetchSegments(true, lang)

  return (
    <>
      <Header dict={dict} lang={lang} page='/' />
      <Hero dict={dict} />
      <AvailableLanguages lang={lang} languages={languages} />
      <Edition dict={dict} segments={segments} />
      <Footer dict={dict} />
    </>
  );
}
