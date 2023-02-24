import { useCallback, useEffect } from "react";
import { useMoovy } from "../api/hooks/UseMoovy";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import { ApiMovieDelete } from "../interfaces/Interfaces";

export default function Library() {
  const { movies, getAllMovies, deleteFavMovie } =  useMoovy();

  const removeFavorites = useCallback(async (id: string) => {
    await deleteFavMovie(id);
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
        movies?.length ? movies.map((e: ApiMovieDelete) => (
          <div key={ `${e.imdbId}` }>
            <MovieCard 
              Title={ e.movieName }
              imdbID={ e.imdbId }
              Poster={ e.moviePoster }
              Year={ e.movieYear }
            />
             <button
              onClick={ () => removeFavorites(e.id) }
            >
              Remover
            </button>
          </div>
        ))
        : (
          <p>Nenhum filme Favorito por enquanto.</p>
        )
      }

    </div>
  )
}
