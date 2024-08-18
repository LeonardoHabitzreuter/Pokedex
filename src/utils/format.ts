export const formatTextToCapitalizeWithTrace = (value: string) => (
  value
    .toLocaleLowerCase()
    .split('-')
    .map((l) => l.charAt(0).toUpperCase() + l.substring(1))
    .join(' ')
)

export const sumBy = <T>(predicate: (x: T) => number, arr: T[]) => (
  arr.reduce((acc, curr) => acc + predicate(curr), 0)
)
