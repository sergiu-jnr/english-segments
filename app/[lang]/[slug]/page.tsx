import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getDictionary } from "../dictionaries";
import fetchSegment from "@/util/fetch-segment";
// import Hero from "@/components/Hero";

export default async function Segment({ params }: {
  params: Promise<{ lang: "en" | "ro", slug: string }>
}) {
  const { slug, lang } = await params
  const dict = await getDictionary(lang)

  const segment = await fetchSegment(slug)

  console.log(dict, segment)

  return (
    <>
      <Header page="terms-of-use" />
      {/* <Hero /> */}
      <Footer />
    </>
  );
}
