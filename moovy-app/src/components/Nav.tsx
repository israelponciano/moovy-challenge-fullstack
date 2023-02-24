import { Link } from 'react-router-dom'

export default function Nav() {

  return (
    <nav>
      <Link to='/'>
      <span>Pesquisa</span>
      </Link>
      <Link to='/mylibrary'>
      <span>Biblioteca</span>
      </Link>
    </nav>
  )
}
