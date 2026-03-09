import React from "react";
import Containers from "../../ui/Containers";
import { getMovies } from "@/service/useGetMovie";
import { getCategory } from "@/service/useGetCategories";
import { getMovieCategory } from "@/service/useGetMovieCategories";
import MoviesCard from "../../ui/MoviesCard";
import MovieCard from "../movies/MovieCard";
import { getMovieGenre } from "@/service/useGetGenreMovie";
import { getGener } from "@/service/useGetGanre";
import Link from "next/link";

const HomeTopMovies = async () => {
  const movies = await getMovies();
  const movieCategories = await getMovieCategory();
  const categories = await getCategory();
  const twoMainCategories = categories?.slice(0, 2);
  const firstCategoryId = twoMainCategories[0]?.id;
  const secondCategoryId = twoMainCategories[1]?.id;
  // console.log(movieCategories);
  const movieFirstIds = movieCategories?.map((el) => {
    if (el.category_id === firstCategoryId) {
      return el.movie_id;
    }
  });
  const categoryFirstMovies = movies?.filter((el) =>
    movieFirstIds?.includes(el?.id),
  );

  const movieGenres = await getMovieGenre();
  const allMovieGenres = await getGener();
  const movieId = categoryFirstMovies[0].id;

  const movieIdGenres = movieGenres?.map((el) => {
    if (el.movie_id === movieId) {
      return el.genre_id;
    }
  });

  const movieIdAllGenres = allMovieGenres?.filter((el) =>
    movieIdGenres?.includes(el.id),
  );

  const countries = movies?.map((el) => el.country);
  const allCountries = [...new Set(countries)];
  console.log(allCountries);
  
  

  console.log(movieIdAllGenres);

  return (
    <Containers className="grid grid-cols-2 gap-5">
      <div>
        <h1 className="text-[48px] text-white">
          {twoMainCategories[0].name_en}
        </h1>
        <div>
          <MoviesCard
            className="grid grid-cols-2"
            movies={categoryFirstMovies}
          />
        </div>
      </div>
      <div>
        <h1 className="text-[48px] text-white">
          {twoMainCategories[1].name_en}
        </h1>
      </div>
      <div>
        <h1 className="text-[48px] text-white">Gnares</h1>
        <div>
          {movieIdAllGenres?.map((el) => (
            <h1 key={el.id} className="text-white">{el.name_uz}</h1>
          ))}
        </div>
      </div>
      <div className="text-white flex gap-5">
        {
          allCountries?.map((el) => <Link href={`/movies/country/${el}`}>{el}</Link>)
        }
      </div>
    </Containers>
  );
};

export default HomeTopMovies;
