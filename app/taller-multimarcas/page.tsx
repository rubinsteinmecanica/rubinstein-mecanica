import Image from "next/image";
import Link from "next/link";
import CarTable from "../ui/table";
import { carBrand } from "../lib/carbrand-data";

export default function TallerMultimarcas() {
  return (
    <main className="mt-20 pt-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-navy-800">
            Taller Multimarca en San Antonio
          </h1>
          {/* <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6">
            Tu socio confiable para todas tus necesidades de reparación de automóviles.
          </p> */}
          <p className="text-base md:text-xl text-gray-600">
            En Rubinstein tenemos la tecnología para escanear, mantener y reparar vehículos de todas las marcas.
          </p>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-6">
            Marcas con las que Trabajamos
          </h2>
          {/* <p className="text-base md:text-lg text-gray-600 mb-8">
            Descubre las marcas que confían en nuestro servicio.
          </p> */}
          <div className="max-w-5xl mx-auto">
            <CarTable carBrand={carBrand} />
          </div>
        </section>
      </div>

      {/* WhatsApp Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="https://wa.me/56956608734"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-green-500 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
        >
          <Image
            src="/whatsapp.png"
            width={50}
            height={50}
            alt="Contacta con nosotros en WhatsApp"
            className="hover:opacity-80 transition-transform transform hover:scale-110"
          />
          <span className="sr-only">Contact Us on WhatsApp</span>
        </Link>
      </div>
    </main>
  );
}
