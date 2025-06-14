function pickRandom<T>(array: T[] | readonly T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

export default pickRandom
