import { createContext, useContext } from "react"
import type { IMapSettingsContext } from "../interfaces/contexts"
import { DEFAULT_MAP_SETTINGS } from "../const/mapSettings"

export const MapSettingsContext = createContext<IMapSettingsContext>({
    mapSettings: DEFAULT_MAP_SETTINGS,
})

export const useMapSettings = () => {
    const context = useContext(MapSettingsContext)

    if (!context || typeof context.setMapSettings === 'undefined') {
        throw new Error("Element is outside Map Settings Provider!")
    }

    return {
        mapSettings: context.mapSettings,
        setMapSettings: context.setMapSettings
    } 
}