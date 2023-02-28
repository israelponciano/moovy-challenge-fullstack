import { useCallback, useContext } from "react";
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
      <SearchBar />
      <div className='grid grid-cols-5 gap-7 m-7'>
      {
        movies ? movies.map((movie: Movie) => (
          <div
            className='flex flex-col justify-between rounded-xl bg-secondaryDark'
            key={ `${movie.imdbID}` }
          >
            <MovieCard 
              Title={ movie.Title }
              imdbID={ movie.imdbID }
              Poster={ movie.Poster }
              Year={ movie.Year }
              />
            <button
              className='px-3 py-2 text-sm font-medium border-2 border-primary text-secondaryLight bg-secondaryDark rounded-lg hover:bg-primary hover:text-secondaryDark'
              onClick={ () => saveFavorites(movie) }
              >
              Adicionar
            </button>
          </div>
        )) : (
          <span className='text-lg text-secondaryLight col-span-5 text-center'>Não achamos o filmes que você procura.</span>
        )
      }
      </div>
    </div>
  )
}
