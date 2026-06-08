import { createContext, useContext } from "react"
import type { IMapsContext } from "../interfaces/contexts"
import { DEAFULT_DISTANCES_MAP, DEFAULT_DEMAND_MAP, DEFAULT_POI_MAP, DEFAULT_RENTAL_COST_MAP } from "../const/mapSettings"

export const MapsContext = createContext<IMapsContext>({
    maps: [
        DEFAULT_DEMAND_MAP,
        DEFAULT_RENTAL_COST_MAP,
        DEFAULT_POI_MAP,
        DEAFULT_DISTANCES_MAP
    ],
    currentMap: 'distances_map'
})

export const useMaps = () => {
    const context = useContext(MapsContext)

    if (!context || typeof context.setCurrentMap === 'undefined' || typeof context.setMaps === 'undefined') {
        throw new Error("Element is outside Map Provider!")
    }

    return {
        maps: context.maps,
        currentMap: context.currentMap,
        setMaps: context.setMaps,
        setCurrentMap: context.setCurrentMap,
    } 
}