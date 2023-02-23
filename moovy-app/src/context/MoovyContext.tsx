import { createContext, useState } from 'react'
import { Movie } from '../interfaces/Interfaces';

export const MoovyContext = createContext({
  movies: [{} as Movie],
  setMovies: (movies: Array<Movie>) => { },
})

function MoovyProvider({ children }: any) {
  const [movies, setMovies] = useState<Array<Movie>>([])

  return (
    <MoovyContext.Provider value={{ movies, setMovies }}>
      { children }
    </MoovyContext.Provider>
  );
}

export default MoovyProvider;