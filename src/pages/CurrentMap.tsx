import { useState, useMemo, useEffect, useCallback } from "react"
import Map from "../components/Map"
import { useMapSettings } from "../hooks/useMapSettings"
import { DEFAULT_MAX_COLOR, DEFAULT_MIN_COLOR } from "../const/mapSettings"
import { useMaps } from "../hooks/useMaps"

export default function CurrentMap() {
    const { mapSettings } = useMapSettings()
    const { width, height } = mapSettings

    const [selectedValue, setSelectedValue] = useState<number>(10)
    const [colorMin, setColorMin] = useState(DEFAULT_MIN_COLOR)
    const [colorMax, setColorMax] = useState(DEFAULT_MAX_COLOR)
    const [isMouseDown, setIsMouseDown] = useState(false)

    const { maps, setMaps, currentMap } = useMaps()

    const currentMapData = useMemo(() => 
        maps.find(el => el.type === currentMap), 
    [maps, currentMap])

    const grid = currentMapData?.map || []

    const updateGlobalMap = useCallback((newGrid: number[][]) => {
        if (!setMaps) return
        setMaps(maps.map(m => 
            m.type === currentMap ? { ...m, map: newGrid } : m
        ))
    }, [maps, currentMap, setMaps])

useEffect(() => {
    const currentGrid = maps.find(m => m.type === currentMap)?.map;

    const newGrid = Array.from({ length: height }, (_, y) =>
        Array.from({ length: width }, (_, x) => {
            const oldVal = currentGrid?.[y]?.[x];
            return oldVal !== undefined ? oldVal : 0;
        })
    );

        updateGlobalMap(newGrid);
    }, [width, height]); 

    const maxVal = useMemo(() => {
        const flat = grid.flat().filter(v => v !== Infinity)
        return flat.length > 0 ? Math.max(...flat) : 1
    }, [grid])

    const updateCell = (x: number, y: number) => {
        if (!grid[y] || grid[y][x] === selectedValue) return

        const newGrid = grid.map((row, rowIndex) => {
            if (rowIndex !== y) return row
            const newRow = [...row]
            newRow[x] = selectedValue
            return newRow
        })

        updateGlobalMap(newGrid)
    }

    const handleMouseDown = (x: number, y: number) => {
        setIsMouseDown(true)
        updateCell(x, y)
    }

    const handleMouseEnter = (x: number, y: number) => {
        if (isMouseDown) updateCell(x, y)
    }

    useEffect(() => {
        const handleMouseUp = () => setIsMouseDown(false)
        window.addEventListener("mouseup", handleMouseUp)
        return () => window.removeEventListener("mouseup", handleMouseUp)
    }, [])

    return (
        <article style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ marginLeft: "5%", marginTop: "20px", display: "flex", gap: "10px", alignItems: "center" }}>
                <label>Brush Value: </label>
                <input 
                    type="number" 
                    value={selectedValue === Infinity ? "" : selectedValue} 
                    onChange={(e) => setSelectedValue(Number(e.target.value))}
                    style={{ width: "80px" }}
                />
                <button 
                    onClick={() => setSelectedValue(prev => prev === Infinity ? 0 : Infinity)}
                    style={{ 
                        padding: "5px 10px", 
                        background: selectedValue === Infinity ? colorMax : colorMin,
                        color: "white", border: "none", borderRadius: "4px", cursor: "pointer"
                    }}
                >
                    {selectedValue === Infinity ? "SET NUM" : "SET INF"}
                </button>
                <input type="color" value={colorMin} onChange={(e) => setColorMin(e.target.value)} />
                <input type="color" value={colorMax} onChange={(e) => setColorMax(e.target.value)} />
            </div>
            <Map 
                map={grid} 
                width={width} 
                height={height} 
                maxVal={maxVal}
                colorMin={colorMin}
                colorMax={colorMax}
                onMouseDown={handleMouseDown}
                onMouseEnter={handleMouseEnter}
            />
        </article>
    )
}