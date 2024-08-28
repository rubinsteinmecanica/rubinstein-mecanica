'use client';

import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function MembershipForm() {
    const [status, setStatus] = useState<string | null>(null);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
    };

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;

        const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID || "";
        const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID_2 || "";
        const userID = process.env.NEXT_PUBLIC_USER_ID || "";

        if (!serviceID || !templateID || !userID) {
            setStatus("Error: EmailJS serviceID, templateID, or userID is missing.");
            return;
        }

        try {
            await emailjs.sendForm(serviceID, templateID, form, userID);
            setStatus("¡Mensaje enviado con éxito! No olvides revisar tu carpeta de SPAM para nuestra respuesta.");
            form.reset();
            setSelectedOption(null); // Reset selected option after submission
        } catch (error) {
            setStatus("Error: Hay un error enviando tu mensaje. Intenta otra vez.");
        }
    };

    return (
        <form onSubmit={sendEmail} className="pb-10 space-y-6 max-w-lg mx-auto">
            <div className="rounded-lg bg-gray-100 p-6 shadow-md border border-gray-300">
                <div className="space-y-4">
                    <p className="text-sm text-gray-600">* Campo obligatorio</p>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre*</label>
                        <input type="text" id="name" name="name" required aria-required="true" className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Nombre completo" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico*</label>
                        <input type="email" id="email" name="email" required aria-required="true" className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Ingresa tu correo electrónico" />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono*</label>
                        <input type="tel" id="phone" name="phone" required aria-required="true" className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Ingresa tu número de teléfono" />
                    </div>

                    <div>
                        <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">Número de WhatsApp*</label>
                        <input type="tel" id="whatsapp" name="whatsapp" required aria-required="true" className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Ingresa tu número de WhatsApp" />
                    </div>

                    <div>
                        <label htmlFor="membership" className="block text-sm font-medium text-gray-700">Membresía*</label>
                        <select id="membership" name="membership" required aria-required="true" className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500" onChange={handleSelectChange}>
                            <option value="" disabled>Selecciona una opción</option>
                            <option value="lite">Membresía Lite</option>
                            <option value="plus">Membresía Plus</option>
                            <option value="premium">Membresía Premium</option>
                        </select>
                    </div>

                    {/* {selectedOption === "Membresia" && (
                        <div>
                            <label htmlFor="membershipType" className="block text-sm font-medium text-gray-700">Tipo de Membresía*</label>
                            <select id="membershipType" name="membershipType" required aria-required="true" className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500">
                                <option value="" disabled>Selecciona una opción</option>
                                <option value="Lite">Membresía Lite</option>
                                <option value="Plus">Membresía Plus</option>
                                <option value="Premium">Membresía Premium</option>
                            </select>
                        </div>
                    )} */}

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Información adicional</label>
                        <textarea id="message" name="message" aria-required="true" className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Escribe tus preguntas y consultas (opcional)"></textarea>
                    </div>
                </div>

                <button type="submit" className="mt-6 w-full rounded-md bg-blue-700 py-2 text-white font-semibold shadow-md hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Enviar
                </button>

                {status && (
                    <div className={`mt-4 p-4 text-center ${status.includes("Error") ? "text-red-600" : "text-green-600"}`}>
                        {status}
                    </div>
                )}
            </div>
        </form>
    );
}
