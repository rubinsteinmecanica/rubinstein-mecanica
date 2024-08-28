import Image from 'next/image';
import Link from 'next/link';
import { Services } from '@/app/lib/definitions';

export default function ServiciosPrincipales({ MainServices }: { MainServices: Services[] }) {
    return (
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {MainServices.length === 0 ? (
                    <p className="col-span-full text-center text-gray-600 text-lg">
                        No hay servicios disponibles por el momento.
                    </p>
                ) : (
                    MainServices.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                        >
                            <div className="relative h-48 lg:h-60">
                                {/* <Link
                                    href={`/servicios/${service.id}`}
                                    className="block"
                                > */}
                                    <Image
                                        src={service.image_url || "/default-car-image.png"}
                                        alt={`Image of ${service.name}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className="w-full h-full"
                                    />
                                {/* </Link> */}
                            </div>
                            <div className="p-4">
                                <p className="text-base lg:text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
                                    {service.name}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
