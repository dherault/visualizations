export function pickRandom<T>(array: T[] | readonly T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

export function chance(probability: number) {
  return Math.random() < probability
}

export default pickRandom
