export default function Contact(){
    return(
        <section id="kontakt" className="py-16 px-8 md:px-24 bg-primary-light text-black">
        <h2 className="text-3xl font-bold text-center">Kontakt</h2>
        <div className="flex flex-col gap-4 mt-8">
        <p className="text-lg">Adres: Uczniowska 50, 80-530 Gdańsk</p>
        <a href="tel:+48583418259" className="text-lg hover:underline hover:text-primary transition-colors">Tel: 58 341 82 59</a>
        <a href="mailto:biuro@kom-bis.com" className="text-lg hover:underline hover:text-primary transition-colors">Email: biuro@kom-bis.com</a>
        </div>
        </section>
    )
}