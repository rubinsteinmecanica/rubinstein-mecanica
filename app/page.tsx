'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ServiciosPrincipales from "./ui/services";
import { MainServices } from "./lib/placeholder-services";
import { homeBanner } from "./lib/home-banners";
import Carousel from "./ui/banner-table";
import Modal from "./ui/modal";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    useEffect(() => {
        setIsModalOpen(true);
    }, []);

    return (
        <main className="bg-gray-100 text-gray-900 mt-12 pt-20 px-4 sm:px-6 md:px-8 lg:px-12">
            {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}

            {/* Header Section */}
            <section className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
                    Rubinstein Mecánica Automotriz
                </h1>
            </section>

            {/* Services Section */}
            <section className="mb-12">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800">
                        Nuestros Servicios
                    </h2>
                </div>
                <ServiciosPrincipales MainServices={MainServices} />
            </section>

            {/* Carousel Section */}
            <section className="pb-10">
                <Carousel slides={homeBanner} />
            </section>

            {/* Additional Information Section */}
            <section className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-12 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-gray-800">
                    Atención y Mantención Personalizada
                </h2>
                <p className="text-center text-base sm:text-lg lg:text-xl leading-relaxed mb-8 text-gray-700">
                    En Rubinstein nos encargamos de la reparación y mantención de su vehículo, con garantía por los
                    trabajos realizados. Hacemos seguimiento de mantenciones, asesoramiento en mecánica, repuestos,
                    lubricantes, Scanner y accesorios para mejorar la seguridad de su vehículo. Ofrecemos convenios de atención preferencial
                    para empresas y agrupaciones, para mantención de la flota de vehículos corporativos, arreglos en general y trámites de permisos.
                    Además, tenemos un innovador sistema de membresía para clientes particulares.
                </p>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                    <div className="flex flex-col items-center">
                        <Image
                            src="/home/flota-empresa.jpg"
                            width={600}
                            height={300}
                            alt="Imagen de flota de coches para empresas"
                            className="w-full h-auto mb-4 rounded-lg shadow-lg"
                        />
                        <Link
                            href="/convenios"
                            className="inline-block px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                        >
                            EMPRESAS
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src="/home/particular.jpg"
                            width={600}
                            height={300}
                            alt="Imagen de un coche particular"
                            className="w-full h-auto mb-4 rounded-lg shadow-lg"
                        />
                        <Link
                            href="/membresias"
                            className="inline-block px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                        >
                            PARTICULARES
                        </Link>
                    </div>
                </div>
            </section>

            {/* WhatsApp Icon */}
            <div className="fixed bottom-4 right-4 z-50">
                <Link
                    href="https://wa.me/56956608734"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-green-500 rounded-full p-2 shadow-lg"
                    aria-label="Contact Us on WhatsApp"
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
