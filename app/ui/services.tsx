import Image from 'next/image';
import Link from 'next/link';
import { Services } from '@/app/lib/definitions';

export default function ServiciosPrincipales({ MainServices }: { MainServices: Services[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {MainServices.length === 0 ? (
                <p className="col-span-full text-center text-gray-600 text-lg">
                    No hay servicios disponibles por el momento.
                </p>
            ) : (
                MainServices.map((services) => (
                    <div
                        key={services.id}
                        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="relative">
                            <Link
                                href={`/servicios/${services.id}`}
                                target="_blank"
                                className="block"
                            >
                                <Image
                                    src={services.image_url || "/default-car-image.png"}
                                    alt={`Image of ${services.name}`}
                                    width={300}
                                    height={200}
                                    className="w-full h-auto object-cover"
                                />
                            </Link>
                        </div>
                        <div className="p-4">
                            <p className="text-lg font-semibold text-gray-800">
                                {services.name}
                            </p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
