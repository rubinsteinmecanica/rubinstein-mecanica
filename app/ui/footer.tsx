'use client';

import Link from "next/link";
import Image from "next/image";
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Footer() {
    return (
        <footer className="bg-[#0056A0] text-white py-8">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Collaborators */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-6">Colaboradores</h3>
                    <div className="flex flex-wrap justify-center gap-6 px-4">
                        {[
                            { src: "/logos/colaboradores/rectmotors.jpg", href: "https://rectmotors.cl/", alt: "Rectomotors" },
                            { src: "/logos/colaboradores/ladybug.png", alt: "Control Plaga San Antonio" },
                            { src: "/logos/colaboradores/tallerpintura.png", alt: "Taller de pintura FF" },
                            { src: "/logos/colaboradores/oceano.png", alt: "Estudio Creativo" }
                        ].map((collaborator, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 overflow-hidden transform transition-transform duration-300 hover:scale-105"
                            >
                                <Link href={collaborator.href || "#"} passHref target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                                        <Image
                                            src={collaborator.src}
                                            alt={collaborator.alt}
                                            layout="fill"
                                            objectFit="contain"
                                            className="rounded-lg"
                                            loading="lazy"
                                        />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Google Map Embed */}
                <div className="mt-8">
                    <p className="text-center text-lg font-semibold mb-2">Ubicación</p>
                    <p className="text-center mb-4">Vista Hermosa 1070, San Antonio, V Región</p>
                    <div className="flex justify-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d850798.7625507375!2d-72.65465659999995!3d-33.594076699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966239b6176280bd%3A0xea5b7f78e2bd9a18!2sRubinstein%20mec%C3%A1nica%20automotriz!5e0!3m2!1sen!2scl!4v1724283152821!5m2!1sen!2scl"
                            className="w-full h-64 border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Address and Contact Info */}
                <div className="text-center mt-8">
                    <p className="text-2xl font-bold mb-4">Contáctanos</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Link
                            href="mailto:rubinsteincontacto@gmail.com"
                            className="flex items-center space-x-2 text-white hover:text-gray-300 transition"
                            aria-label="Email Rubinstein Contact"
                        >
                            <EnvelopeIcon className="w-6 h-6" aria-hidden="true" />
                            <span>rubinsteincontacto@gmail.com</span>
                        </Link>
                        <Link
                            href="tel:+56956608734"
                            className="flex items-center space-x-2 text-white hover:text-gray-300 transition"
                            aria-label="Call Rubinstein"
                        >
                            <PhoneIcon className="w-6 h-6" aria-hidden="true" />
                            <span>+56 9 5660 8734</span>
                        </Link>
                        <div className="text-sm text-gray-300 mt-2">
                            Horario de atención: <br />
                            Lunes - Viernes 9:30 - 18:00 <br />
                            Sábado 9:30 - 14:00
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 border-t border-gray-700 pt-6 text-center">
                    <Image
                        src="/logo.jpg"
                        width={100}
                        height={100}
                        alt="Rubinstein Logo"
                        className="mx-auto p-2 rounded-lg"
                        priority
                        layout="intrinsic"
                    />
                    <p className="mt-4 text-gray-400 text-sm">&copy; 2024 Rubinstein Mecanica Automotriz. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
