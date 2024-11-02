export const getReadableDate = (timestamp: number): string =>
  new Date(timestamp).toISOString().slice(0, 10);
