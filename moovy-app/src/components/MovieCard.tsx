import { Movie } from '../interfaces/Interfaces';
import noPoster from '../images/noPoster.png';

export default function MovieCard(props: Movie ) {
  const { Title, imdbID, Poster, Year } = props;
  return (
    <>
      <div className='mx-4 mt-4 translate-y-0'>
        <img
          className='img'
          src={ Poster === 'N/A' ? noPoster : Poster }
          alt={ `${Title}-${imdbID}` }
        />
      </div>
      <div className='flex flex-col'>
        <span className='mx-4 p-2 font-medium text-secondaryLight'>{ Title }</span>
        <span className='mx-4 p-2 font-medium text-secondaryLight'>{ Year }</span>
      </div>
    </>
  )
}
