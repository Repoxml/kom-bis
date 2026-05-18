export default function Footer() {
    return (
        <footer className="flex justify-between flex-col md:flex-row gap-4 bg-gray-900 text-white py-4 px-8 items-center">
            <ul className="flex flex-col md:flex-row gap-2 md:gap-8">
          <li><a>Adres: Uczniowska 50, 80-530 Gdańsk</a></li>
          <li><a href="tel:+48583418259">Tel: 58 341 82 59</a></li>
          <li><a href="mailto:biuro@kom-bis.com">Email: biuro@kom-bis.com</a></li>
          
        </ul>
        <p>© 2025 KOM-BIS Sp. z o.o.</p>
        </footer>
    )
}