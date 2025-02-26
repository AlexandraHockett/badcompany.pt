"use client";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type Event = {
  name: string;
  date: string;
  description: string;
};

type Location = {
  name: string;
  coords: [number, number];
  images: string[];
  events: Event[];
};

type InteractiveMapProps = {
  locations: Location[];
};

// Função para criar o ícone, carregada dinamicamente
const createCustomIcon = async () => {
  const L = (await import("leaflet")).default;
  return L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  });
};

function CenterMapButton({ coords }: { coords: [number, number] }) {
  const map = useMap();

  const centerMap = () => {
    map.setView(coords, 4);
  };

  return (
    <button
      onClick={centerMap}
      className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-lg z-[1000] hover:bg-gray-100 transition-colors"
    >
      Centralizar
    </button>
  );
}

export default function InteractiveMap({ locations }: InteractiveMapProps) {
  const [mounted, setMounted] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [icon, setIcon] = useState<any>(null);

  useEffect(() => {
    createCustomIcon().then((loadedIcon) => {
      setIcon(loadedIcon);
      setMounted(true);
    });
  }, []);

  if (!mounted || !icon) {
    return <div>Carregando mapa...</div>;
  }

  return (
    <div className="relative max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-lg">
      <MapContainer
        center={[0, 0] as [number, number]}
        zoom={2}
        className="w-full h-64 sm:h-96 z-10 relative"
        style={{ minHeight: "300px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((loc) => (
          <Marker
            key={loc.name}
            position={loc.coords}
            icon={icon}
            eventHandlers={{
              click: () => setSelectedLocation(loc),
            }}
          >
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
        <CenterMapButton coords={[0, 0]} />
      </MapContainer>
      {/* ... (rest of your JSX remains unchanged) */}
    </div>
  );
}
