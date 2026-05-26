import "../styles/Map.css";
import { interpolateColor } from "../utils/colors";

interface MapProps {
    map: (number | typeof Infinity)[][];
    width: number;
    height: number;
    maxVal: number;
    colorMin: string;
    colorMax: string;
    onMouseDown: (x: number, y: number) => void;
    onMouseEnter: (x: number, y: number) => void;
}

export default function Map({ map, width, height, maxVal, colorMin, colorMax, onMouseDown, onMouseEnter }: MapProps) {
    return (
        <section
            className="map-container"
            style={{
                "--grid-columns": width,
                "--grid-rows": height
            } as React.CSSProperties}
        >
            {map.map((row, y) =>
                row.map((value, x) => (
                    <div
                        key={`${x}-${y}`}
                        className="map-cell"
                        onMouseDown={() => onMouseDown(x, y)}
                        onMouseEnter={() => onMouseEnter(x, y)}
                        style={{
                            backgroundColor: value === 0 ?
                                "var(--bg-color-input)"
                                : interpolateColor(value, maxVal, colorMin, colorMax),
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: value === Infinity ? "#000" : "inherit",
                            fontWeight: value === Infinity ? "bold" : "normal"
                        }}
                    >
                        {value === Infinity ? "INF" : value}
                    </div>
                ))
            )}
        </section>
    );
}