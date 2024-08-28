'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function Garantia() {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <main className="mt-20 pt-10 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-4xl mx-auto lg:px-8 lg:py-8">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-navy-800">
          Nuestra Garantía
        </h1>

        <div className="flex flex-col bg-white md:flex-row items-center mb-12 lg:p-8 lg:max-w-5xl lg:mx-auto rounded-lg shadow-lg">
          <div className="md:w-1/2 p-4 relative">
            <Image
              src="/garantia/car.jpg"
              width={700}
              height={400}
              alt="Mechanic"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
            <Image
              src="/garantia/calidad.png"
              width={200}
              height={200}
              alt="garantia"
              className="absolute bottom-0 right-0"
            />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-gray-700">
              Trabajos Garantizados
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-600">
              Contamos con un equipo de mecánicos calificados con amplia experiencia. Cada vehículo es revisado
              meticulosamente por nuestro jefe de taller,{" "}
              <button
                onClick={handleToggleDetails}
                className="font-bold text-blue-600 hover:underline focus:outline-none"
              >
                Rodrigo Sáez Madrid
              </button>, para garantizar la calidad de nuestro servicio y ofrecer una garantía sólida que inspira confianza en nuestros clientes.
            </p>
          </div>
        </div>
      </div>

      {showDetails && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300 ease-out">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800">Rodrigo Sáez Madrid</h2>
            <Image
              src="/acerca/rodrigo.jpg"
              width={300}
              height={200}
              alt="Rodrigo Sáez Madrid"
              className="w-full h-auto object-cover rounded-lg mb-4 shadow-lg"
              loading="lazy"
            />
            <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700">
              Rodrigo Sáez Madrid es un Técnico Universitario en Mecánica Automotriz y Autotrónica de la Universidad Técnica Federico
              Santa Maria con más de 23 años de experiencia en el campo. Su compromiso con la calidad y la atención profesional garantiza
              que cada vehículo reciba la mejor mantención y cuidado posible.
            </p>
            <button
              onClick={handleToggleDetails}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      <div className="mt-12 mb-12 text-center bg-blue-700 text-white py-8 px-6 rounded-lg shadow-2xl max-w-4xl mx-auto">
        <div className="flex justify-center mb-4">
          <CheckCircleIcon className="w-16 h-16 text-white" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">Todos los Vehículos con Checkout de Garantía</h2>
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">Trabajos con sello de garantía</h3>
      </div>

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
