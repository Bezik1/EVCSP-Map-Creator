import { useState, useMemo, useEffect } from "react";
import Map from "../components/Map";
import { useMapSettings } from "../hooks/useMapSettings";
import "../styles/DistancesMap.css";
import { DEFAULT_MAX_COLOR, DEFAULT_MIN_COLOR } from "../const/mapSettings";

export default function DistancesMap() {
    const { mapSettings } = useMapSettings();
    const { width, height } = mapSettings;

    const [selectedValue, setSelectedValue] = useState<number | typeof Infinity>(10);
    const [colorMin, setColorMin] = useState(DEFAULT_MIN_COLOR);
    const [colorMax, setColorMax] = useState(DEFAULT_MAX_COLOR);
    const [isMouseDown, setIsMouseDown] = useState(false);

    const [map, setMap] = useState<(number | typeof Infinity)[][]>(() =>
        Array.from({ length: height }, () => Array.from({ length: width }, () => 0))
    );

    useEffect(() => {
        setMap(Array.from({ length: height }, () => Array.from({ length: width }, () => 0)));
    }, [width, height]);

    const maxVal = useMemo(() => {
        const flat = map.flat().filter(v => v !== Infinity) as number[];
        return flat.length > 0 ? Math.max(...flat) : 1;
    }, [map]);

    const updateCell = (x: number, y: number) => {
        setMap(prev => {
            const newMap = prev.map(row => [...row]);
            if (newMap[y][x] !== selectedValue) {
                newMap[y][x] = selectedValue;
                return newMap;
            }
            return prev;
        });
    };

    const handleMouseDown = (x: number, y: number) => {
        setIsMouseDown(true);
        updateCell(x, y);
    };

    const handleMouseEnter = (x: number, y: number) => {
        if (isMouseDown) updateCell(x, y);
    };

    useEffect(() => {
        const handleMouseUp = () => setIsMouseDown(false);
        window.addEventListener("mouseup", handleMouseUp);
        return () => window.removeEventListener("mouseup", handleMouseUp);
    }, []);

    return (
        <article style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ marginLeft: "5%", marginTop: "20px", display: "flex", gap: "10px", alignItems: "center" }}>
                <label>Brush Value: </label>
                <input 
                    type="number" 
                    disabled={selectedValue === Infinity}
                    value={selectedValue === Infinity ? "" : selectedValue} 
                    onChange={(e) => setSelectedValue(Number(e.target.value))}
                    style={{ width: "80px" }}
                />
                <button 
                    onClick={() => setSelectedValue(selectedValue === Infinity ? 0 : Infinity)}
                    style={{ 
                        padding: "5px 10px", 
                        background: selectedValue === Infinity ? colorMax : colorMin,
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontWeight: "bold"
                    }}
                >
                    INF
                </button>
                <input 
                    type="color" 
                    value={colorMin} 
                    onChange={(e) => setColorMin(e.target.value)}
                />
                <input 
                    type="color" 
                    value={colorMax} 
                    onChange={(e) => setColorMax(e.target.value)}
                />
            </div>
            <Map 
                map={map} 
                width={width} 
                height={height} 
                maxVal={maxVal}
                colorMin={colorMin}
                colorMax={colorMax}
                onMouseDown={handleMouseDown}
                onMouseEnter={handleMouseEnter}
            />
        </article>
    );
}