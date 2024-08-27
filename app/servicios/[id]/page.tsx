import Image from "next/image";
import Link from "next/link";
import { MainServices } from "@/app/lib/placeholder-services";

export default function ServiciosPage({ params }: { params: { id: string } }) {
    const id = params.id;
    const servicio = MainServices.find((service) => service.id === id);

    if (!servicio) {
        return (
            <main className="mt-20 pt-10 bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-xl text-gray-700">No hay servicios disponibles.</p>
                    <Link href="/servicios" className="mt-4 text-blue-500 hover:underline">
                        Volver a los servicios
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="mt-20 pt-10 pb-20 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <Image 
                    src={servicio.image_url} 
                    alt={servicio.name} 
                    width={800} 
                    height={400} 
                    className="w-full h-auto object-cover"
                />
                <div className="p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{servicio.name}</h1>
                    <p className="text-lg text-gray-600 leading-relaxed mb-4">
                        {servicio.description || "No hay descripción disponible para este servicio."}
                    </p>
                    <Link
                        href="/agenda"
                        className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
                    >
                        Contactar
                    </Link>
                </div>
            </div>
        </main>
    );
}
