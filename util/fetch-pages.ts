import Lang from "@/types/lang";
import Page from "@/types/page";

export default async function fetchPages(
    lang: Lang
  ): Promise<Page[]> {
    const baseUrl = "https://itb-nine.vercel.app/api/pages";
    const params = new URLSearchParams({
      lang,
    });
  
    const url = `${baseUrl}?${params.toString()}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching pages:", error);
      throw error;
    }
  }
  