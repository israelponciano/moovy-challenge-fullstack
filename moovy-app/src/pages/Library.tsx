import { useEffect } from "react";
import { useMoovy } from "../api/hooks/UseMoovy";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import { ApiMovie } from "../interfaces/Interfaces";

export default function Library() {
  const { movies, getAllMovies } =  useMoovy();

  useEffect(() => {
    getAllMovies();
  }, [getAllMovies]);

  return (
    <div>
      <Header />
      {
        movies ? movies.map((e: ApiMovie) => (
          <div key={ `${e.imdbId}` }>
            <MovieCard 
              Title={ e.movieName }
              imdbID={ e.imdbId }
              Poster={ e.moviePoster }
              Year={ e.movieYear }
            />
          </div>
        ))
        : (
          <p>Você não tem nenhum filme Favorito por enquanto.</p>
        )
      }
    </div>
  )
}
