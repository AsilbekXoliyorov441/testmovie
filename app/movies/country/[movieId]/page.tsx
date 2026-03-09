import { getMovies } from '@/service/useGetMovie';
import React from 'react'

const page = async({ params }: { params: Promise<{ movieId: string }> }) => {
    const { movieId } = await params;
    const allMovies = await getMovies();

    const filteredCountryMovies = allMovies?.filter((el) => el.country === movieId)

    console.log(filteredCountryMovies);
    
  return <div>
    <h1>{movieId}</h1>
    <div></div>
  </div>;
};

export default page