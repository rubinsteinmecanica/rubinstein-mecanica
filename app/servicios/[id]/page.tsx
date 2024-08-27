import Image from "next/image";
import { MainServices } from "@/app/lib/placeholder-services";

export default function ServiciosPage({ params }: { params: { id: string } }) {
    const id = params.id;
    const servicios = MainServices.find((service) => service.id === id);

    if (!servicios) {
        return (
            <main className="mt-20 pt-10 bg-gray-100 min-h-screen flex items-center justify-center">
                <p className="text-xl text-gray-700">No hay servicios</p>
            </main>
        );
    }

    return (
        <main className="mt-20 pt-10 pb-20 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <Image 
                    src={servicios.image_url} 
                    alt={servicios.name} 
                    width={800} 
                    height={400} 
                    className="w-full h-auto object-cover"
                />
                <div className="p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{servicios.name}</h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        {servicios.description || "No hay descripción disponible para este servicio."}
                    </p>
                </div>
            </div>
        </main>
    );
}
