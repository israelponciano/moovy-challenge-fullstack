import { useCallback, useContext, useEffect } from "react";
import { useMoovy } from "../api/hooks/UseMoovy";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import { MoovyContext } from "../context/MoovyContext";
import { Movie } from "../interfaces/Interfaces";

export default function Search() {
  const { movies } = useContext(MoovyContext);
  const { postNewMovie, getAllMovies} = useMoovy();

  const saveFavorites = useCallback(async (movie: Movie) => {
    const newMovie = {
      movieName: movie.Title,
      moviePoster: movie.Poster,
      movieYear: movie.Year,
      imdbId: movie.imdbID
    }
    await postNewMovie(newMovie);
    await getAllMovies();
  } ,[postNewMovie, getAllMovies])


  return (
    <div>
      <Header />
      <p>Pesquisa</p>
      <SearchBar />

      {
        movies ? movies.map((e: Movie) => (
          <div key={ `${e.imdbID}` }>
            <MovieCard 
              Title={ e.Title }
              imdbID={ e.imdbID }
              Poster={ e.Poster }
              Year={ e.Year }
            />
            <button
              onClick={ () => saveFavorites(e) }
            >
              Adicionar
            </button>
          </div>
        ))
        : (
          <p>Não achamos o filmes que você procura.</p>
        )
      }

    </div>
  )
}
