import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getDictionary } from "../../dictionaries";
import Lang from "@/types/lang";
import { Metadata } from "next";
import fetchPage from "@/util/fetch-page";
import MarkdownPage from "@/components/MarkdownPage";
import fetchPages from "@/util/fetch-pages";
import Page from "@/types/page";

export async function generateMetadata({ params }: {
  params: Promise<{ lang: Lang, slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  const page = await fetchPage(slug)

  const meta: Metadata = {
    title: page.title,
    description: page.description,
  }

  if (page.image_url) {
    meta.openGraph = {
      images: [{ url: page.image_url }]
    }
  }

  return meta
}

export const revalidate = 3600

export default async function Segment({ params }: {
  params: Promise<{ lang: Lang, slug: string }>
}) {
  const { slug, lang } = await params
  const dict = await getDictionary(lang)

  const page = await fetchPage(slug)

  const pages = await fetchPages(lang)
  const termsAndConditions = pages.find((page: Page) => page.type === "terms-and-conditions")
  const privacyPolicy = pages.find((page: Page) => page.type === "privacy-policy")

  return (
    <>
      <Header dict={dict} lang={lang} page={page.slug} />
      <MarkdownPage dict={dict} page={page} />
      <Footer dict={dict} lang={lang} termsAndConditions={termsAndConditions} privacyPolicy={privacyPolicy} />
    </>
  );
}
