import { useState, type ReactNode } from "react";
import { DEAFULT_DISTANCES_MAP, DEFAULT_DEMAND_MAP, DEFAULT_POI_MAP, DEFAULT_RENTAL_COST_MAP } from "../const/mapSettings";
import { MapsContext } from "../hooks/useMaps";
import type { MapNameType, MapType } from "../interfaces/data";

export default function MapsProvider({ children }: { children: ReactNode }) {
    const [maps, setMaps] = useState<MapType[]>([
        DEFAULT_DEMAND_MAP,
        DEFAULT_RENTAL_COST_MAP,
        DEFAULT_POI_MAP,
        DEAFULT_DISTANCES_MAP
    ]);
    const [currentMap, setCurrentMap] = useState<MapNameType>('distances_map')

    return (
        <MapsContext.Provider
            value={{ maps, setMaps, currentMap, setCurrentMap }} 
        >
            {children}
        </MapsContext.Provider>
    );
}