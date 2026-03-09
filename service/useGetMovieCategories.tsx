import { MovieCategoryType } from "@/types/MovieCategoryType";

export async function getMovieCategory(): Promise<MovieCategoryType[]> {
  const res = await fetch(
    "https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie_category",
    {
      next: { revalidate: 300 },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch movies");

  return res.json();
}
