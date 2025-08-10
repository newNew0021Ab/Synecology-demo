const API_BASE = "https://directus-production-6ce1.up.railway.app";

function getImageUrl(id?: string) {
  return id ? `${API_BASE}/assets/${id}` : null;
}

export type CaseStudy = {
  title: string;
  slug: string;
  previewText: string;
  coverImage: string | null;
  timeline: string;
  completionDate: string;
  results: string[];
};

export async function fetchCaseStudies(): Promise<CaseStudy[]> {
  const url = `${API_BASE}/items/case_studies?fields=title,slug,preview_text,cover_image,timeline,completion_date,results`;

  const res = await fetch(url, {
    headers: { Accept: "application/json" }
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch case studies: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();

  return json.data.map((item: any) => ({
    title: item.title,
    slug: item.slug,
    previewText: item.preview_text,
    coverImage: getImageUrl(item.cover_image),
    timeline: item.timeline,
    completionDate: item.completion_date,
    results: item.results || []
  }));
}
