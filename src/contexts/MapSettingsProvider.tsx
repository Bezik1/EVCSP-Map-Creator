import { useState, type ReactNode } from "react";
import type { MapSettings } from "../interfaces/data";
import { DEFAULT_MAP_SETTINGS } from "../const/mapSettings";
import { MapSettingsContext } from "../hooks/useMapSettings";

export default function MapSettingsProvider({ children }: { children: ReactNode }) {
    const [mapSettings, setMapSettings] = useState<MapSettings>(DEFAULT_MAP_SETTINGS);

    return (
        <MapSettingsContext.Provider
            value={{ mapSettings, setMapSettings }} 
        >
            {children}
        </MapSettingsContext.Provider>
    );
}