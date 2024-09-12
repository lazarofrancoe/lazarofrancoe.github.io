"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

interface FormData {
  nombreCompleto: string;
  email: string;
  telefono: string;
  puestoActual: string;
  experiencia: string;
  habilidades: string;
}

export default function FormularioCurriculum() {
  const [formData, setFormData] = useState<FormData>({
    nombreCompleto: "",
    email: "",
    telefono: "",
    puestoActual: "",
    experiencia: "",
    habilidades: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del formulario enviados:", formData);
    // Aquí normalmente enviarías los datos a tu backend
  };

  return (
    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
      <div>
        <Label htmlFor="nombreCompleto" className="text-gray-300">
          Nombre Completo
        </Label>
        <Input
          id="nombreCompleto"
          name="nombreCompleto"
          value={formData.nombreCompleto}
          onChange={handleChange}
          required
          className="mt-1 bg-gray-700 border-gray-600 text-white"
        />
      </div>
      <div>
        <Label htmlFor="email" className="text-gray-300">
          Correo Electrónico
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 bg-gray-700 border-gray-600 text-white"
        />
      </div>
      <div>
        <Label htmlFor="telefono" className="text-gray-300">
          Teléfono
        </Label>
        <Input
          id="telefono"
          name="telefono"
          type="tel"
          value={formData.telefono}
          onChange={handleChange}
          required
          className="mt-1 bg-gray-700 border-gray-600 text-white"
        />
      </div>
      <div>
        <Label htmlFor="puestoActual" className="text-gray-300">
          Puesto Actual/Deseado
        </Label>
        <Input
          id="puestoActual"
          name="puestoActual"
          value={formData.puestoActual}
          onChange={handleChange}
          required
          className="mt-1 bg-gray-700 border-gray-600 text-white"
        />
      </div>
      <div className="md:col-span-2">
        <Label htmlFor="experiencia" className="text-gray-300">
          Experiencia Laboral
        </Label>
        <Textarea
          id="experiencia"
          name="experiencia"
          value={formData.experiencia}
          onChange={handleChange}
          required
          className="mt-1 bg-gray-700 border-gray-600 text-white"
          rows={4}
        />
      </div>
      <div className="md:col-span-2">
        <Label htmlFor="habilidades" className="text-gray-300">
          Habilidades Clave
        </Label>
        <Textarea
          id="habilidades"
          name="habilidades"
          value={formData.habilidades}
          onChange={handleChange}
          required
          className="mt-1 bg-gray-700 border-gray-600 text-white"
          rows={3}
        />
      </div>
      <div className="md:col-span-2">
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
        >
          <FileText className="mr-2 h-5 w-5" /> Generar Mi Currículum
          Profesional
        </Button>
      </div>
    </form>
  );
}
