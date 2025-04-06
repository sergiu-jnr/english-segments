import Segment from "@/types/segment";

export default async function fetchSegment(
    slug: string
  ): Promise<Segment[]> {
    const baseUrl = "https://itb-nine.vercel.app/api/segments";
    const params = new URLSearchParams({
      slug,
    });
  
    const url = `${baseUrl}?${params.toString()}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching segments:", error);
      throw error;
    }
  }
  