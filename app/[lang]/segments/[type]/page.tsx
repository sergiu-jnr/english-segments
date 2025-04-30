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

export async function generateMetadata({ params }: {
  params: Promise<{ lang: Lang, type: string }>
}): Promise<Metadata> {
  const { lang, type } = await params

  const dict = await getDictionary(lang)

  return {
    title: dict[`${type}Segments`],
    description: dict.description,
  }
}

export const revalidate = 1209600

export default async function Segment({ params }: {
  params: Promise<{ lang: Lang, type: string }>
}) {
  const { type, lang } = await params
  const dict = await getDictionary(lang)

  const segments = await fetchSegments(false, lang, type)
  const pages = await fetchPages(lang)
  const termsAndConditions = pages.find((page: Page) => page.type === "terms-and-conditions")
  const privacyPolicy = pages.find((page: Page) => page.type === "privacy-policy")

  return (
    <>
      <Header dict={dict} lang={lang} page={`segments/${type}`} />
      <Hero dict={dict} title={dict[`${type}Segments`]} />
      <Segments dict={dict} segments={segments} />
      <Footer dict={dict} lang={lang} termsAndConditions={termsAndConditions} privacyPolicy={privacyPolicy} />
    </>
  );
}
