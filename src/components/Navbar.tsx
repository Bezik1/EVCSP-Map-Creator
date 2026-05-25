import { useMapSettings } from "../hooks/useMapSettings"
import "../styles/Navbar.css"

export default function Navbar() {
    const { mapSettings, setMapSettings } = useMapSettings()

    return (
        <nav className="glass">
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
        </nav>
    )
}