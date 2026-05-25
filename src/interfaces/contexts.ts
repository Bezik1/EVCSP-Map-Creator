import type { MapSettings } from "./data"

export interface IMapSettingsContext {
    mapSettings: MapSettings
    setMapSettings?: ((mapSettings: MapSettings) => void)
}