import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getDictionary } from "../dictionaries";
import fetchSegment from "@/util/fetch-segment";
import Lang from "@/types/lang";
import SegmentPage from "@/components/SegmentPage";

export default async function Segment({ params }: {
  params: Promise<{ lang: Lang, slug: string }>
}) {
  const { slug, lang } = await params
  const dict = await getDictionary(lang)

  const segment = await fetchSegment(slug)

  console.log(dict, segment)

  return (
    <>
      <Header dict={dict} lang={lang} page="terms-of-use" />
      <SegmentPage dict={dict} segment={segment} />
      <Footer dict={dict} />
    </>
  );
}
