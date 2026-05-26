import type { MapSettings, MapType } from "../interfaces/data";

export const DEFAULT_MAP_SETTINGS: MapSettings = {
    width: 20,
    height: 20
}

export const DEFAULT_MIN_COLOR = "#212121"
export const DEFAULT_MAX_COLOR = "#ff4757"

export const DEAFULT_DISTANCES_MAP: MapType = {
    type: 'distances_map',
    map: Array.from({ length: DEFAULT_MAP_SETTINGS.height },
        () => Array.from({ length: DEFAULT_MAP_SETTINGS.width }, () => 0))
}

export const DEFAULT_POI_MAP: MapType  = {
    type: 'poi_map' ,
    map: Array.from({ length: DEFAULT_MAP_SETTINGS.height },
        () => Array.from({ length: DEFAULT_MAP_SETTINGS.width }, () => 0))
}

export const DEFAULT_DEMAND_MAP: MapType  = {
    type: 'demand_map',
    map: Array.from({ length: DEFAULT_MAP_SETTINGS.height },
        () => Array.from({ length: DEFAULT_MAP_SETTINGS.width }, () => 0))
}

export const DEFAULT_RENTAL_COST_MAP: MapType  = {
    type: 'land_rental_cost_map',
    map: Array.from({ length: DEFAULT_MAP_SETTINGS.height },
        () => Array.from({ length: DEFAULT_MAP_SETTINGS.width }, () => 0))
}