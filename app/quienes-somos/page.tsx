'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function AboutUs() {
  const [showMore, setShowMore] = useState(false);

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <main className="mt-10 pt-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Title Section */}
        <section className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-navy-800">
            Quiénes Somos
          </h1>
        </section>

        {/* Main Content Section */}
        <section className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image Section */}
          <div className="lg:w-1/2 p-4 lg:p-6">
            <Image
              src="/acerca/taller.jpg"
              width={500}
              height={500}
              alt="Mechanic"
              className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 p-6 lg:p-8">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700">
              Rodrigo Saez Madrid, un joven aprendiz de mecánico ingresa en el año 2001 a estudiar la Carrera Universitaria
              “Técnico en Mecánica Automotriz y Autotronica” en la Universidad Federico Santa Maria (Cede Viña del mar), egresando
              de la carrera el año 2002 y titulándose como un profesional de la Mecánica, luego realiza su practica profesional en
              Toyota Chile, aplicando sus conocimientos y formándose como mecánico.

              {showMore && (
                <>
                  <br />
                  <br />
                  Ya para el año 2004, Rodrigo Saez, se instala con su propio taller de mecánica ubicado en llolleo (san Antonio),
                  el cual nombra ”Mecánica R y R”, nombre conformado por las iniciales de Rodrigo y Rubinstein (su Padre) quien le
                  ayudaba con la mecánica en taller. En Noviembre del 2018 fallece Don Rubinstein Saez, motivo por el cual Rodrigo
                  decide cambiar el nombre del taller a “ Rubinstein Mecánica Automotriz”, en su memoria de su Padre y Mentor.

                  <br />
                  <br />
                  Desde ese momento hasta hoy en día, Rubinstein Mecánica Automotriz,  sigue el legado del compromiso con sus clientes,
                  entregando un servicio rápido y profesional, con un equipo de mecánicos con basta experiencia en el rubro y  un personal
                  calificado, para atender así todas las necesidades de nuestros clientes,  liderando en servicios automotrices en la zona
                  y perfeccionando cada vez mas nuestra visión, que es dar un servicio de calidad y con garantía de satisfacción.
                </>
              )}
            </p>
            <button
              onClick={handleToggleShowMore}
              className="mt-4 text-blue-600 hover:text-blue-800 focus:outline-none font-semibold"
            >
              {showMore ? 'Leer menos' : 'Leer más'}
            </button>
          </div>
        </section>

        {/* Team Section */}
        <section className="mt-16 mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-12 text-center text-navy-blue">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6">
              <Image
                src="/acerca/rodrigo.jpg"
                width={150}
                height={150}
                alt="Rodrigo Sáez M."
                className="rounded-full mb-4"
              />
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">Rodrigo Sáez M.</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">Técnico en Mecánica Automotriz</p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">Mecánico Jefe</p>
            </div>

            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6">
              <Image
                src="/acerca/cesar.jpg"
                width={150}
                height={150}
                alt="Cesar Chavarría A."
                className="rounded-full mb-4"
              />
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">Cesar Chavarría A.</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">Asesor Comercial</p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">Gestor de Convenio Empresas</p>
            </div>
          </div>
        </section>
      </div>

      {/* WhatsApp Icon */}
      <div className="fixed bottom-4 right-4 z-50">
        <Link
          href="https://wa.me/56956608734"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-green-500 rounded-full p-2 shadow-lg"
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
