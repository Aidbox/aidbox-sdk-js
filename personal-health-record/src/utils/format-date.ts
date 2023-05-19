export function formatDate (date: string) {
  if (date.includes('T')) {
    const [year, month, day] = date.split('T')[0].split('-')
    return `${day}/${month}/${year}`
  }

  const [year, month, day] = date.split('-')
  return `${day}/${month}/${year}`
}
