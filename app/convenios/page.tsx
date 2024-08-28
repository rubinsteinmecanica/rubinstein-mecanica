import Image from "next/image";
import Link from "next/link";

export default function Convenios() {
    return (
        <main className="bg-white">
            {/* Convenios Section */}
            <section className="mt-20 pt-20 text-center bg-gray-50 py-12 px-8 rounded-lg shadow-lg max-w-4xl mx-auto">
                <h1 className="text-4xl font-extrabold mb-6 text-navy-blue tracking-wide">
                    CONVENIOS
                </h1>
                <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                    Clientes en convenio tendrán descuentos especiales y beneficios exclusivos para sus vehículos.
                </p>
                <div className="mb-10">
                    <h2 className="text-3xl font-bold text-green-600 mb-2">
                        100% GARANTIZADO
                    </h2>
                    <h3 className="text-xl font-medium text-gray-600">
                        Atención Preferencial
                    </h3>
                </div>
                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
                    <Image
                        src="/membresia/tabea.jpg"
                        layout="fill"
                        objectFit="cover"
                        alt="auto"
                        className="transition-transform transform hover:scale-105 duration-500"
                        priority
                    />
                </div>
            </section>

            <section className="text-gray-800 max-w-4xl mx-auto mt-12 px-8 leading-relaxed">
                <p className="mb-8">
                    En Rubinstein nos motiva entregar un servicio preferencial e integral a nuestros clientes Empresa que tengan
                    convenio, por tanto, ofrecemos descuentos especiales y servicios adicionales, tales como Rotulado Vehicular,
                    Windows Visión, Pendones, Letreros de Acrílico, Gigantografías y Letras Volumétricas.
                    Además, en el área de seguridad, ofrecemos instalación de inmovilizadores, alarmas, cierre centralizado, recarga y mantención
                    de extintores.
                </p>
            </section>

            {/* Benefits Section */}
            <section className="mt-12 mb-10 bg-navy-blue text-white py-12 px-8 rounded-lg shadow-lg max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center tracking-wide">
                    BENEFICIOS PARA CONVENIOS
                </h1>
                <ul className="list-disc list-inside space-y-4 text-lg">
                    <li>
                        Retiro del vehículo en domicilio o trabajo para llevar al taller y entrega del mismo a domicilio después del arreglo (sin costo).
                    </li>
                    <li>1 lavado y aspirado gratis en la primera atención.</li>
                    <li>1 escáner y chequeo gratis al año.</li>
                    <li>1 cambio de ampolletas gratis al año.</li>
                    <li>20% de descuento en instalación de inmovilizador, cierre centralizado y alarma.</li>
                    <li>50% de descuento en trámites (revisión técnica y permiso de circulación).</li>
                </ul>
            </section>

            {/* <div className="text-center mt-12 mb-20">
                <Link href="/joinUs" className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300">
                        Únete ahora
                </Link>
            </div> */}
        </main>
    );
}
