import { MovieGenreType } from "@/types/MovieGenreTypes";

export async function getMovieGenre(): Promise<MovieGenreType[]> {
  const res = await fetch(
    "https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie_genre",
    {
      next: { revalidate: 300 },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch movies");

  return res.json();
}
