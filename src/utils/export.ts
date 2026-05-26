import type { MapType } from "../interfaces/data";

export const exportMapData = (width: number, height: number, maps: MapType[]) => {
    const exportObject = {
        width,
        height,
        ...maps.reduce((acc, m) => {
            const processedMap = m.map.map(row => 
                row.map(cell => cell === Infinity ? -1 : cell)
            );
            acc[m.type] = processedMap;
            return acc;
        }, {} as Record<string, number[][]>)
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObject));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "maps.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}