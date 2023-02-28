import { useCallback, useEffect } from "react";
import { useMoovy } from "../api/hooks/UseMoovy";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import { ApiMovie } from "../interfaces/Interfaces";
import AudioRecorder from "../recorder/AudioRecorder";

export default function Library() {
  const { movies, getAllMovies, deleteFavMovie, deleteFavReview } =  useMoovy();

  const removeFavorites = useCallback(async (imdbId: string) => {
    await deleteFavReview(imdbId);
    await deleteFavMovie(imdbId);
    await getAllMovies();
  } ,[deleteFavMovie, getAllMovies])

  useEffect(() => {
    getAllMovies();
  }, [getAllMovies]);

  return (
    <div>
      <Header />
      <p className='font-bold italic text-xl text-primary mx-10'> Minha Biblioteca </p>
      <div className='grid grid-cols-5 gap-7 m-7'>
      {
        movies?.length ? movies.map((movie: ApiMovie) => (
          <div
            key={ `${movie.imdbId}` }
            className='flex flex-col justify-between rounded-xl bg-secondaryDark'
          >
            <MovieCard 
              Title={ movie.movieName }
              imdbID={ movie.imdbId }
              Poster={ movie.moviePoster }
              Year={ movie.movieYear }
            />
            <div> 
              <AudioRecorder
                imdbId={ movie.imdbId } 
                />
              
            </div>
            <button
              className='px-3 py-2 text-sm font-medium border-2 border-primary text-secondaryLight bg-secondaryDark rounded-lg hover:bg-primary hover:text-secondaryDark'
              onClick={ () => removeFavorites(movie.imdbId) }
              >
              Remover
            </button>
        </div>
        )) : (
          <p>Nenhum filme Favorito por enquanto.</p>
          )
        }
      </div>
    </div>
  )
}
