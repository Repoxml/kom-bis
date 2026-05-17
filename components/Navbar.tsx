export default function Navbar() {
    return (
      <nav className="flex justify-between bg-white py-4 px-8 text-black items-center">
        <div>KOM-BIS</div>
        <ul className="flex gap-8">
          <li><a href="#home" className="hover:text-gray-500">Home</a></li>
          <li><a href="#ofirmie" className="hover:text-gray-500">O firmie</a></li>
          <li><a href="#oferta" className="hover:text-gray-500">Oferta</a></li>
          <li><a href="#kontakt" className="hover:text-gray-500">Kontakt</a></li>
        </ul>
        <a href="#kontakt">58 341 82 59</a>
      </nav>
    )
  }