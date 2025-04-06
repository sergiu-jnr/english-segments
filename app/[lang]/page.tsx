import AvailableLanguages from "@/components/AvailableLanguages";
import Edition from "@/components/Edition";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import languages from "@/constants/languages";
import fetchSegments from "@/util/fetch-segments";
import { getDictionary } from "./dictionaries";

export default async function Home({ params }: {
  params: Promise<{ lang: "en" | "ro" }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang) // en

  const segments = await fetchSegments(true, 'en')

  // console.log(segments)
  return (
    <>
      <Header page='/' />
      <Hero title={dict['title']} description={dict['description']} />
      <AvailableLanguages languages={languages} />
      <Edition segments={segments} />
      <Footer />
    </>
  );
}
