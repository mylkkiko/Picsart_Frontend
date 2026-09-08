export function formatTime(seconds: number): string {
    const secs = Math.floor(seconds / 60);
    const minutes = seconds % 60;
    const format = `${String(secs).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
    return format;
}