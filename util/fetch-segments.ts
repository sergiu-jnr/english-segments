import Segment from "@/types/segment";

export default async function fetchSegments(
    is_last_edition: boolean = true,
    lang: string = 'en',
    type?: string,
    page?: number,
    page_size?: number
  ): Promise<Segment[]> {
    const baseUrl = "https://itb-nine.vercel.app/api/segments";
    const params = new URLSearchParams({
      is_last_edition: is_last_edition.toString(),
      lang,
    });
  
    if (type) params.append("type", type);
    if (page) params.append("page", page.toString());
    if (page_size) params.append("page_size", page_size.toString());
  
    const url = `${baseUrl}?${params.toString()}`;
  
    try {
      const response = await fetch(url, { next: { revalidate: 1209600 } });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching segments:", error);
      throw error;
    }
  }
  