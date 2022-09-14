const generateSeries = (length: number, maxValue: number = 10) =>
  Array
  .from({ length: length * 2 })
  .map(() => Math.floor(Math.random() * maxValue))
  .sort((a,b) => b - a)
  .slice(0, 10)

export const fetchRecords= () => {
  return {
    wins: generateSeries(10,10),
    losses: generateSeries(10,10),
    draws: generateSeries(10,10),
  }
}
