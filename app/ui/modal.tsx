import { FC, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline'; // Import ArrowRightIcon

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 grid grid-rows-[auto_auto] grid-cols-1 md:grid-cols-2 gap-4 p-6">
                {/* Text Section */}
                <div className="md:col-span-1 flex flex-col justify-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-semibold mb-2">MEMBRESÍAS EXCLUSIVAS</h2>
                        <p className="mb-4">
                            Como miembro, obtienes acceso a servicios especiales y beneficios únicos para el mantenimiento y reparación de tu vehículo.
                        </p>
                        <div className="flex items-center justify-center md:justify-start mt-4">
                            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
                            <h3 className="text-sm font-semibold">100% GARANTIZADO</h3>
                        </div>
                        {/* Enhanced Link */}
                        <div className="mt-6">
                            <Link href="/membresias" className="inline-flex items-center px-4 py-2 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                    Aprende más sobre nuestros servicios exclusivos
                                    <ArrowRightIcon className="h-5 w-5 ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="md:col-span-1 relative">
                    <Image
                        src="/wheel.jpg"
                        layout="fill"
                        objectFit="cover"
                        alt="Car Wheel"
                        className="rounded-lg"
                        priority
                    />
                </div>

                {/* Button Section */}
                <button
                    onClick={onClose}
                    className="bg-navy-blue text-white px-4 py-2 rounded-lg hover:bg-navy-700 transition-colors col-span-2"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default Modal;
