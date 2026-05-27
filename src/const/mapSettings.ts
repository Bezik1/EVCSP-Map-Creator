import type { MapSettings, MapType } from "../interfaces/data";

export const DEFAULT_MAP_SETTINGS: MapSettings = {
    width: 10,
    height: 10
}

export const DEFAULT_MIN_COLORS = ["#212121", "#373737", "#4f4f4f", "#696969"];
export const DEFAULT_MAX_COLORS = ["#ff4757", "#d557fe", "#2beb38", "#ff7d60"];

export const DEAFULT_DISTANCES_MAP: MapType = {
    type: 'distances_map',
    map: Array.from({ length: DEFAULT_MAP_SETTINGS.height },
        () => Array.from({ length: DEFAULT_MAP_SETTINGS.width }, () => 0)),
    colorMap: {
        minColor: DEFAULT_MIN_COLORS[0],
        maxColor: DEFAULT_MAX_COLORS[0]
    }
}

export const DEFAULT_POI_MAP: MapType  = {
    type: 'poi_map' ,
    map: Array.from({ length: DEFAULT_MAP_SETTINGS.height },
        () => Array.from({ length: DEFAULT_MAP_SETTINGS.width }, () => 0)),
    colorMap: {
        minColor: DEFAULT_MIN_COLORS[1],
        maxColor: DEFAULT_MAX_COLORS[1]
    }
}

export const DEFAULT_DEMAND_MAP: MapType  = {
    type: 'demand_map',
    map: Array.from({ length: DEFAULT_MAP_SETTINGS.height },
        () => Array.from({ length: DEFAULT_MAP_SETTINGS.width }, () => 0)),
    colorMap: {
        minColor: DEFAULT_MIN_COLORS[2],
        maxColor: DEFAULT_MAX_COLORS[2]
    }
}

export const DEFAULT_RENTAL_COST_MAP: MapType  = {
    type: 'land_rental_cost_map',
    map: Array.from({ length: DEFAULT_MAP_SETTINGS.height },
        () => Array.from({ length: DEFAULT_MAP_SETTINGS.width }, () => 0)),
    colorMap: {
        minColor: DEFAULT_MIN_COLORS[3],
        maxColor: DEFAULT_MAX_COLORS[3]
    }
}