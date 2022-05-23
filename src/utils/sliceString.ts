export const sliceString = (string: string, limit: number = 4) => {
    if (string.length > limit) {
        return `${string.slice(0, limit)}...`;
    }
    return string;
}