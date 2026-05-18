export default function Services() {
    return (
        <section id="oferta" className="py-16 px-8 md:px-24 bg-gray-100 text-black">
            
            <h2 className="text-3xl font-bold text-center">Oferty</h2>

            <div className="flex justify-between gap-8 mt-8 flex-col md:flex-row">

                <div className="bg-white shadow-md rounded-lg p-6 flex-1">
                    <h3 className="text-xl font-semibold">Pielęgnacja terenów zielonych</h3>
                    <p className="mt-2">Dbanie o parki, ogrody i skwerki. Koszenie trawników, podlewanie, nawożenie i pielęgnacja z dbałością o środowisko naturalne.</p>
                </div>


                <div className="bg-white shadow-md rounded-lg p-6 flex-1">
                    <h3 className="text-xl font-semibold">Odśnieżanie i wywóz śniegu</h3>
                    <p className="mt-2">Odśnieżanie, piaskowanie i solenie nawierzchni. Obsługujemy parkingi, osiedla, biurowce i instytucje publiczne. Dysponujemy nowoczesnym sprzętem maszynowym.</p>
                </div>

            </div>
        </section>
    )
}