// PaginaInicioCurriculumSSR.tsx
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { TrendingUp, Award, Zap } from "lucide-react";
import FormularioCurriculum from "./FormularioCurriculum";

const TarjetaCaracteristica = ({
  icon: Icon,
  titulo,
  descripcion,
}: {
  icon: any;
  titulo: string;
  descripcion: string;
}) => (
  <Card className="flex flex-col items-center text-center p-6 bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
    <Icon size={40} className="text-blue-400 mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-white">{titulo}</h3>
    <p className="text-gray-300">{descripcion}</p>
  </Card>
);

export default function PaginaInicioCurriculumSSR() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-blue-300">
            Impulsa tu Carrera con un Currículum Destacado
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Nuestro creador de currículum potenciado por IA te ayuda a crear un
            CV profesional y optimizado para ATS que te hará destacar entre los
            mejores empleadores.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <TarjetaCaracteristica
            icon={TrendingUp}
            titulo="Aumenta tus Posibilidades"
            descripcion="Nuestros currículums están optimizados para Sistemas de Seguimiento de Aplicantes (ATS), aumentando tus posibilidades de conseguir entrevistas."
          />
          <TarjetaCaracteristica
            icon={Award}
            titulo="Plantillas Profesionales"
            descripcion="Elige entre una variedad de plantillas diseñadas profesionalmente y específicas para tu industria."
          />
          <TarjetaCaracteristica
            icon={Zap}
            titulo="Rápido y Fácil"
            descripcion="Crea un currículum pulido en minutos con nuestra interfaz intuitiva y fácil de usar."
          />
        </div>

        <Card className="w-full max-w-4xl mx-auto shadow-xl bg-gray-800 border-gray-700">
          <CardHeader>
            <h2 className="text-3xl font-bold text-center text-blue-300">
              Comienza a Crear tu Currículum Ganador
            </h2>
            <p className="text-center text-gray-300">
              Completa tus datos a continuación y crearemos un currículum
              personalizado que destaque tus fortalezas.
            </p>
          </CardHeader>
          <CardContent>
            <FormularioCurriculum />
          </CardContent>
        </Card>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">
            Únete a Miles de Buscadores de Empleo Exitosos
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Nuestro creador de currículum ha ayudado a profesionales a conseguir
            trabajos en las mejores empresas de todo el mundo. ¡Comienza tu
            camino hacia el éxito profesional hoy!
          </p>
        </div>
      </div>
    </div>
  );
}
