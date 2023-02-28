import { Movie } from '../interfaces/Interfaces';
import noPoster from '../images/noPoster.png';

export default function MovieCard(props: Movie ) {
  const { Title, imdbID, Poster, Year } = props;
  return (
    <>
      <p>{ Title }</p>
      <p>{ Year }</p>
      <img
        style={{ height: '100px' }}
        src={ Poster === 'N/A' ? noPoster : Poster }
        alt={ `${Title}-${imdbID}` }
      />
    </>
  )
}
