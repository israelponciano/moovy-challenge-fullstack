import { MoovyContext } from '../context/MoovyContext'
import { useContext } from 'react';
import fetchAPIAllData from '../api/FetchAPI';

export default function SearchBar() {
  const { setMovies } = useContext(MoovyContext)

  return (
    <div>
      <input
        placeholder='Nome do Filme...'
        type='text'
        onChange={ async ({ target }) =>  setMovies(await fetchAPIAllData(target.value)) }
      />
    </div>
  )
}
