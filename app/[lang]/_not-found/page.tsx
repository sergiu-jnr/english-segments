import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lang from "@/types/lang";
import { getDictionary } from "../dictionaries";
import Page from "@/types/page";
import fetchPages from "@/util/fetch-pages";
// import Hero from "@/components/Hero";

export default async function NotFound({ params }: {
  params: Promise<{ lang: Lang }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const pages = await fetchPages(lang)
  const termsAndConditions = pages.find((page: Page) => page.type === "terms-and-conditions")
  const privacyPolicy = pages.find((page: Page) => page.type === "privacy-policy")

  return (
    <>
      <Header lang={lang} dict={dict} page="not-found" />
      {/* <Hero /> */}
      <Footer dict={dict} lang={lang} termsAndConditions={termsAndConditions} privacyPolicy={privacyPolicy} />
    </>
  );
}
