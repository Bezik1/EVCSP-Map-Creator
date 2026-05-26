import type { MapNameType, MapSettings, MapType } from "./data"

export interface IMapSettingsContext {
    mapSettings: MapSettings
    setMapSettings?: ((mapSettings: MapSettings) => void)
}

export interface IMapsContext {
    maps: MapType[]
    setMaps?: ((maps: MapType[]) => void)
    currentMap: MapNameType
    setCurrentMap?: ((currentMap: MapNameType) => void)
}