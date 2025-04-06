import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lang from "@/types/lang";
import { getDictionary } from "../dictionaries";
// import Hero from "@/components/Hero";

export default async function PrivacyPolicy({ params }: {
  params: Promise<{ lang: Lang }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <>
      <Header lang={lang} dict={dict} page="privacy-policy" />
      {/* <Hero /> */}
      <Footer dict={dict} />
    </>
  );
}
