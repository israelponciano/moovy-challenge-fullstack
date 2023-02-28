import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='flex-grow flex items-center w-auto'>
      <div className='text-sm flex-grow'>
        <Link 
          className='mt-4 inline-block text-secondaryLight hover:text-white mr-4'
          to='/'
          >
            Pesquisa
        </Link>
        <Link 
          className='mt-4 inline-block text-secondaryLight hover:text-white mr-4'
          to='/mylibrary'
          >
            Biblioteca
        </Link>
      </div>
    </nav>
  )
}
