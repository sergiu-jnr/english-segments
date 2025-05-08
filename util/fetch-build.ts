import Segment from "@/types/segment";

export default async function fetchBuild(
    type: string,
  ): Promise<{lang: string, slug: string}[]> {
    const baseUrl = "https://itb-nine.vercel.app/api/build";
    const params = new URLSearchParams({
      type,
    });
  
    const url = `${baseUrl}?${params.toString()}`;
  
    try {
      const response = await fetch(url, { next: { revalidate: 3600 } });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching segments:", error);
      throw error;
    }
  }
  
