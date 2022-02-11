import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/">
      <span className="sr-only">Allegron</span>
      <p className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl md:text-3xl">
        Alle<span className="inline text-indigo-600">gron</span>
      </p>
    </Link>
  )
}
