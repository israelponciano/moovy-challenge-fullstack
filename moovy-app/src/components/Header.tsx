import Nav from "./Nav";
import cam from "../images/209134.png"

export default function Header() {
  return (
    <div className='flex items-center justify-between flex-wrap bg-secondary p-3'>
      <span className='flex items-baseline flex-shrink-0 text-primary mr-6 font-bold text-7xl tracking-tight'>
        M
        <img
          className='w-10 h-10 '
          src={ cam }
          alt="cam"
        />
        ovy
      </span>

      <Nav />
    </div>
  )
}
