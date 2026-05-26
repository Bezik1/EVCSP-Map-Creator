export interface MapSettings {
    width: number
    height: number
}

export type MapNameType = 
    'distances_map' |
    'poi_map' |
    'demand_map' |
    'land_rental_cost_map'

export type MapType = {
    type: MapNameType
    map: (number | typeof Infinity)[][]
}