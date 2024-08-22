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
      <div className="max-w-5xl mx-auto">
        {/* Title Section */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center text-navy-blue">
          Quiénes Somos
        </h1>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image Section */}
          <div className="lg:w-1/3 p-4 lg:p-6">
            <Image
              src="/acerca/mechanic.jpg"
              width={500}
              height={500}
              alt="Mechanic"
              className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition duration-500"
              loading="lazy"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-2/3 p-6 lg:p-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-800">
              Nuestro Fundador
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700">
              Rodrigo Saez Madrid, un joven aprendiz de mecánico, ingresó en el año 2001 a estudiar la carrera de
              “Técnico en Mecánica Automotriz y Autotrónica” en la Universidad Federico Santa María...
              {showMore && (
                <>
                  <br />
                  <br />
                  ... Luego, realizó su práctica profesional en Toyota Chile, aplicando sus conocimientos y formándose como mecánico.
                  Ya para el año 2004, Rodrigo Saez se instaló con su propio taller de mecánica ubicado en Llolleo (San Antonio), al cual nombró
                  “Mecánica R y R”, nombre conformado por las iniciales de Rodrigo y Rubinstein (su padre), quien le ayudaba en el taller.
                  En noviembre de 2018 falleció Don Rubinstein Saez, motivo por el cual Rodrigo decidió cambiar el nombre del taller a “Rubinstein Mecánica Automotriz”,
                  en memoria de su padre y mentor.
                  <br />
                  <br />
                  Desde ese momento hasta hoy, Rubinstein Mecánica Automotriz sigue el legado del compromiso con sus clientes, entregando un servicio rápido y profesional,
                  con un equipo de mecánicos con vasta experiencia en el rubro y personal calificado. Lideramos en servicios automotrices en la zona y perfeccionamos cada vez más nuestra visión:
                  ofrecer un servicio de calidad con garantía de satisfacción.
                </>
              )}
            </p>
            <button
              onClick={handleToggleShowMore}
              className="mt-4 text-blue-500 hover:text-blue-700 focus:outline-none"
            >
              {showMore ? 'Leer menos' : 'Leer más'}
            </button>
          </div>
        </div>
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
