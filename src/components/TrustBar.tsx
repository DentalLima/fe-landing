import { Shield, Clock, Heart, MapPin, Star, CheckCircle, Award, Users } from "lucide-react";
import type { TrustItem } from "@/types";

interface TrustBarProps {
  items: TrustItem[];
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Shield, Clock, Heart, MapPin, Star, CheckCircle, Award, Users,
};

const defaultItems = [
  { _id: "1", title: "Ambiente Seguro", description: "Protocolo de higiene y esterilización en cada atención", iconName: "Shield", order: 1, active: true },
  { _id: "2", title: "Atención Personalizada", description: "Evaluación individual para cada paciente", iconName: "Heart", order: 2, active: true },
  { _id: "3", title: "Reserva por WhatsApp", description: "Agenda tu cita de forma rápida y sencilla", iconName: "CheckCircle", order: 3, active: true },
  { _id: "4", title: "Ubicación Accesible", description: "En el corazón de Miraflores, Lima", iconName: "MapPin", order: 4, active: true },
];

export default function TrustBar({ items }: TrustBarProps) {
  const displayItems = items.length > 0 ? items : defaultItems;

  return (
    <section className="relative bg-white py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {displayItems.map((item, index) => {
            const IconComponent = item.iconName ? iconMap[item.iconName] : Shield;
            return (
              <div
                key={item._id}
                className="group text-center p-6 rounded-2xl hover:bg-sky-50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-sky-100 rounded-2xl mb-4 group-hover:bg-sky-200 transition-colors duration-300">
                  {IconComponent && (
                    <IconComponent size={24} className="text-sky-600" />
                  )}
                </div>
                <h3 className="font-bold text-gray-800 text-sm lg:text-base mb-2">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-gray-500 text-xs lg:text-sm leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
