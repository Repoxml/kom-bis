"use client"
import { useState } from "react"
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <nav className="flex justify-between bg-white py-4 px-8 text-black items-center sticky top-0 z-50 shadow-md">
        <div>KOM-BIS</div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          ☰
        </button>
        <ul className="flex gap-8 hidden md:flex">
          <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
          <li><a href="#ofirmie" className="hover:text-primary transition-colors">O firmie</a></li>
          <li><a href="#oferta" className="hover:text-primary transition-colors">Oferta</a></li>
          <li><a href="#kontakt" className="hover:text-primary transition-colors">Kontakt</a></li>
        </ul>

        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-white flex flex-col items-center gap-4 py-4 shadow-md md:hidden">
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#ofirmie" onClick={() => setIsOpen(false)}>O firmie</a></li>
            <li><a href="#oferta" onClick={() => setIsOpen(false)}>Oferta</a></li>
            <li><a href="#kontakt" onClick={() => setIsOpen(false)}>Kontakt</a></li>
          </ul>
        )}
        <a href="#kontakt" className="hidden md:block">58 341 82 59</a>
      </nav>
    )
  }