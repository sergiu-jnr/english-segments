import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getDictionary } from "../dictionaries";
import Lang from "@/types/lang";
import { Metadata } from "next";
import Hero from "@/components/Hero";
import fetchPages from "@/util/fetch-pages";
import Page from "@/types/page";
import ListPages from "@/components/ListPages";

export async function generateMetadata({ params }: {
  params: Promise<{ lang: Lang }>
}): Promise<Metadata> {
  const { lang } = await params

  const dict = await getDictionary(lang)

  return {
    title: dict[`blog`],
    description: dict[`blogDescription`],
  }
}

export const revalidate = 7884000

export default async function Blog({ params }: {
  params: Promise<{ lang: Lang }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const pages = await fetchPages(lang)
  const termsAndConditions = pages.find((page: Page) => page.type === "terms-and-conditions")
  const privacyPolicy = pages.find((page: Page) => page.type === "privacy-policy")

  return (
    <>
      <Header dict={dict} lang={lang} page={`blog`} />
      <Hero dict={dict} title={dict[`blog`]} description={dict[`blogDescription`]} />
      <ListPages dict={dict} pages={pages.filter(o => o.type === 'article')} />
      <Footer dict={dict} lang={lang} termsAndConditions={termsAndConditions} privacyPolicy={privacyPolicy} />
    </>
  );
}
