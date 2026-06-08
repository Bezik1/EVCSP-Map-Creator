export const interpolateColor = (
    value: number | typeof Infinity,
    maxVal: number,
    colorMin: string,
    colorMax: string
) => {
    if (value === Infinity) return colorMax;
    
    const ratio = maxVal === 0 ? 0 : (value as number) / maxVal;
    
    const hexToRgb = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 33, g: 33, b: 33 };
    };

    const cMin = hexToRgb(colorMin);
    const cMax = hexToRgb(colorMax);

    const r = Math.round(cMin.r + (cMax.r - cMin.r) * ratio);
    const g = Math.round(cMin.g + (cMax.g - cMin.g) * ratio);
    const b = Math.round(cMin.b + (cMax.b - cMin.b) * ratio);

    return `rgb(${r}, ${g}, ${b})`;
}