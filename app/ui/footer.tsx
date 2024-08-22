'use client';

import Link from "next/link";
import Image from "next/image";
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Footer() {
    return (
        <footer className="bg-[#0056A0] text-white py-8">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Address and Contact Info */}
                <div className="flex flex-col items-center space-y-6 text-center">
                    <div className="w-full lg:w-2/3 space-y-6">
                        <p className="text-lg font-semibold">Vista Hermosa 1071, San Antonio</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p className="text-base">Rodrigo Sáez <br /> Mecánico Jefe</p>
                            </div>
                            <div>
                                <p className="text-base">Cesar Chavarría <br /> Asesor Comercial</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Link
                                href="mailto:rubinsteincontact@gmail.com"
                                className="flex items-center justify-center space-x-2 text-white hover:text-gray-300 transition"
                                aria-label="Email Rubinstein Contact"
                            >
                                <EnvelopeIcon className="w-6 h-6" aria-hidden="true" />
                                <span>rubinsteincontacto@gmail.com</span>
                            </Link>
                            <Link
                                href="tel:+56956608734"
                                className="flex items-center justify-center space-x-2 text-white hover:text-gray-300 transition"
                                aria-label="Call Rubinstein"
                            >
                                <PhoneIcon className="w-6 h-6" aria-hidden="true" />
                                <span>+56 9 5660 8734</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Google Map Embed */}
                <div className="flex flex-col items-center pt-8">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d850798.7625507375!2d-72.65465659999995!3d-33.594076699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966239b6176280bd%3A0xea5b7f78e2bd9a18!2sRubinstein%20mec%C3%A1nica%20automotriz!5e0!3m2!1sen!2scl!4v1724283152821!5m2!1sen!2scl"
                        className="w-full h-64 border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* Collaborators */}
                <div className="text-center mt-10">
                    <h3 className="text-xl font-semibold mb-6">Colaboradores</h3>
                    <div className="flex flex-wrap justify-center gap-8 px-4">
                        {[
                            { src: "/logos/colaboradores/def2.png", alt: "Rectomotors", name: "Rectomotors" },
                            { src: "/logos/colaboradores/controlplaga.png", alt: "Control Plaga San Antonio", name: "ControlPlaga" },
                            { src: "/logos/colaboradores/tallerpintura.png", alt: "Taller de pintura FF", name: "Taller FF" },
                            {src: "/logos/colaboradores/oceano.png", alt: "Estudio Creativo", name: "OCEANO"}
                        ].map((collaborator, index) => (
                            <div key={index} className="flex flex-col items-center justify-center w-24 h-24 md:w-30 md:h-30 lg:w-40 lg:h-40 relative bg-white bg-opacity-10 rounded-lg overflow-hidden">
                                <Image
                                    src={collaborator.src}
                                    alt={collaborator.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                    loading="lazy"
                                />
                                <p className="absolute bottom-2 left-0 right-0 text-center text-sm md:text-base lg:text-lg font-medium text-gray-200 bg-opacity-60 bg-gray-800 py-1">
                                    {collaborator.name}
                                </p>
                            </div>
                        ))}
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
