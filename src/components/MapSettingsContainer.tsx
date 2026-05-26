import { useMaps } from "../hooks/useMaps"
import { useMapSettings } from "../hooks/useMapSettings"
import type { MapNameType } from "../interfaces/data"
import "../styles/MapSettingsContainer.css"

export default function MapSettingsContainer() {
    const { currentMap, setCurrentMap } = useMaps()
    const { mapSettings, setMapSettings } = useMapSettings()

    return (
        <section className="map-settings-container glass">
            <h1>Map Settings</h1>
            <div>
                <label htmlFor="width-input">Width: </label>
                <input
                    id="width-input"
                    type="number"
                    value={mapSettings.width}
                    onChange={e => setMapSettings({...mapSettings, width: Number(e.target.value)})}
                />
            </div>
            <div>
                <label htmlFor="height-input">Height: </label>
                <input
                    id="height-input"
                    type="number"
                    value={mapSettings.height}
                    onChange={e => setMapSettings({...mapSettings, height: Number(e.target.value)})}
                />
            </div>
            <div>
                <label htmlFor="map-input">Map: </label>
                <select
                    id="map-input"
                    value={currentMap}
                    onChange={e => setCurrentMap(e.target.value as MapNameType)}
                >
                    <option value="distance_map">Distance Map</option>
                    <option value="poi_map">POI Map</option>
                    <option value="demand_map">Demand Map</option>
                    <option value="land_rental_cost_map">Land Rental Cost Map</option>
                </select>
            </div>
        </section>
    )
}