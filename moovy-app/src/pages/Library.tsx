import { useCallback, useEffect } from "react";
import { useMoovy } from "../api/hooks/UseMoovy";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import { ApiMovie } from "../interfaces/Interfaces";
import AudioRecorder from "../recorder/AudioRecorder";

export default function Library() {
  const { movies, getAllMovies, deleteFavMovie } =  useMoovy();

  const removeFavorites = useCallback(async (imdbId: string) => {
    await deleteFavMovie(imdbId);
    await getAllMovies();
  } ,[deleteFavMovie, getAllMovies])

  useEffect(() => {
    getAllMovies();
  }, [getAllMovies]);

  return (
    <div>
      <Header />
      <p> Minha Biblioteca </p>

      {
        movies?.length ? movies.map((movie: ApiMovie) => (
          <div key={ `${movie.imdbId}` }>
            <MovieCard 
              Title={ movie.movieName }
              imdbID={ movie.imdbId }
              Poster={ movie.moviePoster }
              Year={ movie.movieYear }
            />
            <div> 
              <button
                onClick={ () => removeFavorites(movie.imdbId) }
                >
                Remover
              </button>
              <>
                <AudioRecorder
                  imdbId={ movie.imdbId } 
                />
                
              </>
            </div>
          </div>
        ))
        : (
          <p>Nenhum filme Favorito por enquanto.</p>
        )
      }

    </div>
  )
}
