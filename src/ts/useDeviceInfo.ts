export type DeviceType = "mobile" | "tablet" | "desktop" | "widescreen" | "fullhd";

export interface DeviceInfo {
    type: DeviceType;
    width: number;
    height: number;
}

/**
 * Determines the device type based on the provided width.
 * @param width - The window width (defaults to window.innerWidth).
 * @returns The device type: "mobile", "tablet", "desktop", "widescreen", or "fullhd".
 */
export function getDeviceType(width: number = window.innerWidth): DeviceType {
    if (width >= 1408) return "fullhd";
    if (width >= 1216) return "widescreen";
    if (width >= 1024) return "desktop";
    if (width >= 769) return "tablet";
    return "mobile";
}

/**
 * Gets information about the current device, including type, width, and height.
 * @returns A DeviceInfo object with device data.
 */
export function getDeviceInfo(): DeviceInfo {
    return {
        type: getDeviceType(),
        width: window.innerWidth,
        height: window.innerHeight,
    };
}

/**
 * Executes a callback whenever the device dimensions change (resize event).
 * @param callback - Function that receives the device information.
 * @returns A function to remove the device change listener.
 */
export function onDeviceChange(callback: (info: DeviceInfo) => void): () => void {
    const handler = () => callback(getDeviceInfo());
    window.addEventListener("resize", handler);
    handler();
    return () => window.removeEventListener("resize", handler);
}

/**
 * Indicates if the current device is mobile.
 * @returns true if mobile, false otherwise.
 */
export const isMobile = () => getDeviceType() === "mobile";

/**
 * Indicates if the current device is a tablet.
 * @returns true if tablet, false otherwise.
 */
export const isTablet = () => getDeviceType() === "tablet";

/**
 * Indicates if the current device is a desktop.
 * @returns true if desktop, false otherwise.
 */
export const isDesktop = () => getDeviceType() === "desktop";

/**
 * Indicates if the current device is widescreen.
 * @returns true if widescreen, false otherwise.
 */
export const isWidescreen = () => getDeviceType() === "widescreen";

/**
 * Indicates if the current device is fullhd.
 * @returns true if fullhd, false otherwise.
 */
export const isFullHD = () => getDeviceType() === "fullhd";