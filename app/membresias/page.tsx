import Image from "next/image";

export default function Membresias() {
    return (
        <main className="mt-20 pt-10 bg-white">
            {/* Convenios Section */}
            <section className="text-center bg-gray-50 py-12 px-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-4 text-navy-blue">CONVENIOS</h1>
                <p className="text-lg mb-6 text-gray-700">
                    Clientes en convenio tendrán descuentos especiales y beneficios exclusivos para sus vehículos.
                </p>
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-green-600">100% GARANTIZADO</h2>
                    <h3 className="text-xl font-medium text-gray-600">Atención Preferencial</h3>
                </div>
                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
                    <Image
                        src="/membresia/andrew.jpg"
                        layout="fill"
                        objectFit="cover"
                        alt="auto"
                        className="transition-transform transform hover:scale-105 duration-500"
                        priority
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="mt-12 bg-navy-blue text-white py-12 px-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-center">BENEFICIOS PARA CONVENIOS</h1>
                <ul className="list-disc list-inside space-y-4 text-lg">
                    <li>Retiro del vehículo en domicilio o trabajo para llevar al taller y entrega del mismo a domicilio después del arreglo (sin costo).</li>
                    <li>1 lavado y aspirado gratis en la primera atención.</li>
                    <li>1 escáner y chequeo gratis al año.</li>
                    <li>1 cambio de ampolletas gratis al año.</li>
                    <li>20% de descuento en instalación de inmovilizador, cierre centralizado y alarma.</li>
                    <li>50% de descuento en trámites (revisión técnica y permiso de circulación).</li>
                </ul>
            </section>

            {/* Membresias Section */}
             <section className="text-center bg-gray-50 py-12 px-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-4 text-navy-blue">MEMBRESIAS</h1>
                <p className="text-lg mb-6 text-gray-700">
                    Clientes con membresia tendran un servicio especial y descuentos para su vehículos.
                </p>
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-green-600">100% GARANTIZADO</h2>
                    <h3 className="text-xl font-medium text-gray-600">Mantención Profesional</h3>
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
            <section className="mt-16 bg-gray-100 py-12 px-8 rounded-lg shadow-lg text-navy-blue space-y-12">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">
                        MEMBRESÍA <span className="text-red-600">LITE</span>
                    </h1>
                    <h2 className="text-2xl font-semibold mb-6">Valor mensualidad $15.000</h2>
                    <h3 className="text-xl font-medium mb-4">Incluye</h3>
                    <ul className="list-disc list-inside text-lg space-y-4 text-gray-700">
                        <li>Retiro del vehículo en domicilio o trabajo para llevar al taller y entrega del mismo a domicilio después del arreglo (sin costo).</li>
                        <li>1 scanner y chequeo gratis al año.</li>
                        <li>1 cambio de ampolletas gratis al año.</li>
                        <li>20% Desc. en instalaciones (inmovilizadores, cierre centralizado, alarma, radio Android (táctil) y cámara de retroceso).</li>
                        <li>10% Desc. cambio de aceite y filtro al año.</li>
                        <li>Trámites de revisión técnica, permiso de circulación y SOAP gratis (no incluye costo de permiso de circulación).</li>
                    </ul>
                </div>

                <hr className="border-gray-300 my-8" />

                {/* Membership Plus */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">
                        MEMBRESÍA <span className="text-red-600">PLUS</span>
                    </h1>
                    <h2 className="text-2xl font-semibold mb-6">Valor mensualidad $30.000</h2>
                    <h3 className="text-xl font-medium mb-4">Incluye</h3>
                    <ul className="list-disc list-inside text-lg space-y-4 text-gray-700">
                        <li>Retiro del vehículo en domicilio o trabajo para llevar al taller y entrega del mismo a domicilio después del arreglo (sin costo).</li>
                        <li>1 scanner y chequeo gratis al año.</li>
                        <li>1 cambio de ampolletas gratis al año.</li>
                        <li>30% Desc. mantención anual.</li>
                        <li>30% Desc. en instalaciones (inmovilizadores, cierre centralizado, alarma, radio Android (táctil) y cámara de retroceso).</li>
                        <li>50% Desc. cambio de aceite y filtro al año.</li>
                        <li>Trámites de revisión técnica, permiso de circulación y SOAP gratis (no incluye costo de permiso de circulación).</li>
                    </ul>
                </div>

                <hr className="border-gray-300 my-8" />

                {/* Membership Premium */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">
                        MEMBRESÍA <span className="text-red-600">PREMIUM</span>
                    </h1>
                    <h2 className="text-2xl font-semibold mb-6">Valor mensualidad $50.000</h2>
                    <h3 className="text-xl font-medium mb-4">Incluye</h3>
                    <ul className="list-disc list-inside text-lg space-y-4 text-gray-700">
                        <li>Retiro del vehículo en domicilio o trabajo para llevar al taller y entrega del mismo a domicilio después del arreglo (sin costo).</li>
                        <li>1 scanner y chequeo gratis al año.</li>
                        <li>1 cambio de ampolletas gratis al año.</li>
                        <li>50% Desc. mantenimiento anual.</li>
                        <li>50% Desc. en instalaciones (inmovilizador, cierre centralizado, alarma, radio Android (táctil) y cámara de retroceso.)</li>
                        <li>50% Desc. servicio de grúa.</li>
                        <li>1 cambio de aceite y filtro al año.</li>
                        <li>Trámites de revisión técnica, permiso de circulación y SOAP gratis (no incluye costo de permiso de circulación).</li>
                        <li>1 lavado y aspirado del vehículo gratis al mes.</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
