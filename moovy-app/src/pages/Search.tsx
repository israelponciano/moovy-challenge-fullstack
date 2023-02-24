import { useContext } from "react";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import { MoovyContext } from "../context/MoovyContext";
import { Movie } from "../interfaces/Interfaces";

export default function Search() {
  const { movies } = useContext(MoovyContext);

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
