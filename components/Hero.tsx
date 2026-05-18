export default function Hero(){
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-primary text-white text-center" id="home">
            <h1 className="text-5xl font-bold">Usługi komunalne w Trójmieście</h1>
            <h2 className="text-xl mt-4">Wywóz gruzu, odśnieżanie, sprzątanie terenów. Działamy od 2009 roku.</h2>
            <div className="flex gap-4 flex-col md:flex-row mt-8">
            <a className="bg-accent text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors" href="tel:+48583418259">Zadzwoń</a>
            <a className="px-6 py-3 rounded-lg font-semibold bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-colors" href="#oferta">Zobacz ofertę</a>
            </div>
        </section>
    )
}