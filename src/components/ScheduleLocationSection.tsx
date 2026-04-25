import { Clock, MapPin, Navigation, Phone, Mail } from "lucide-react";
import type { Schedule, SiteSettings } from "@/types";

interface ScheduleLocationSectionProps {
  schedule: Schedule[];
  settings: SiteSettings | null;
}

const defaultSchedule: Schedule[] = [
  { _id: "1", day: "Lunes – Viernes", openingTime: "9:00 a.m.", closingTime: "7:00 p.m.", closed: false, order: 1 },
  { _id: "2", day: "Sábado", openingTime: "9:00 a.m.", closingTime: "2:00 p.m.", closed: false, order: 2 },
  { _id: "3", day: "Domingo", closed: true, order: 3 },
];

export default function ScheduleLocationSection({
  schedule,
  settings,
}: ScheduleLocationSectionProps) {
  const displaySchedule = schedule.length > 0 ? schedule : defaultSchedule;
  const address = settings?.address || "Miraflores, Lima, Perú";
  const mapsUrl = settings?.googleMapsUrl || `https://maps.google.com/?q=${encodeURIComponent(address)}`;
  const mapsEmbedUrl = settings?.googleMapsEmbedUrl;
  const phone = settings?.phone;
  const email = settings?.email;

  return (
    <section id="horarios" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Visítanos
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-gray-900 mb-4">
            Horarios y Ubicación
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Estamos en un lugar accesible para ti. Puedes venir directo o reservar cita primero.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Schedule + Contact */}
          <div className="space-y-6">
            {/* Hours card */}
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                  <Clock size={20} className="text-sky-600" />
                </div>
                <h3 className="font-display text-xl text-gray-800">Horarios de Atención</h3>
              </div>

              <div className="space-y-3">
                {displaySchedule.map((item) => (
                  <div
                    key={item._id}
                    className={`flex items-center justify-between py-3 border-b border-gray-50 last:border-0 ${
                      item.closed ? "opacity-50" : ""
                    }`}
                  >
                    <span className="text-gray-700 font-medium">{item.day}</span>
                    {item.closed ? (
                      <span className="text-red-400 text-sm font-semibold bg-red-50 px-3 py-1 rounded-full">
                        Cerrado
                      </span>
                    ) : (
                      <span className="text-sky-700 text-sm font-semibold bg-sky-50 px-3 py-1 rounded-full">
                        {item.openingTime} – {item.closingTime}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Location card */}
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                  <MapPin size={20} className="text-sky-600" />
                </div>
                <h3 className="font-display text-xl text-gray-800">Dirección</h3>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">{address}</p>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 hover:shadow-blue"
              >
                <Navigation size={16} />
                Cómo llegar
              </a>
            </div>

            {/* Contact card */}
            {(phone || email) && (
              <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100">
                <h3 className="font-display text-xl text-gray-800 mb-4">Contacto</h3>
                <div className="space-y-3">
                  {phone && (
                    <a
                      href={`tel:${phone}`}
                      className="flex items-center gap-3 text-gray-700 hover:text-sky-600 transition-colors"
                    >
                      <Phone size={18} className="text-sky-500 flex-shrink-0" />
                      <span>{phone}</span>
                    </a>
                  )}
                  {email && (
                    <a
                      href={`mailto:${email}`}
                      className="flex items-center gap-3 text-gray-700 hover:text-sky-600 transition-colors"
                    >
                      <Mail size={18} className="text-sky-500 flex-shrink-0" />
                      <span>{email}</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-soft border border-gray-100 min-h-[400px] lg:min-h-auto">
            {mapsEmbedUrl ? (
              <iframe
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ minHeight: "400px", border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del consultorio"
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] bg-gradient-to-br from-sky-50 to-blue-50 p-8">
                <MapPin size={48} className="text-sky-300 mb-4" />
                <p className="text-sky-600 font-semibold font-display text-xl text-center mb-2">
                  {address}
                </p>
                <p className="text-gray-400 text-sm text-center mb-6">
                  Agrega el embed de Google Maps desde Sanity Studio para mostrar el mapa aquí.
                </p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200"
                >
                  <Navigation size={16} />
                  Ver en Google Maps
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
