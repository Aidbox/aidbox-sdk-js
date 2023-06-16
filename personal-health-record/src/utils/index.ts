import { Address, Patient } from '@aidbox/sdk-r4/types'

export const kebabToFriendlyString = (initialString: string) => initialString.split('-').join(' ')

export function transformAddress(address: Address[] | Address) {
  if (Array.isArray(address)) {
    return `${address?.[0].line}, ${address?.[0].city}, ${address?.[0].country}`
  }

  return `${address.line}, ${address.city}, ${address.country}`
}

export const transformName = (name: Patient['name']) => `${name?.[0].family} ${name?.[0].given?.[0]}`

export function formatDate(date: string) {
  if (date.includes('T')) {
    const [year, month, day] = date.split('T')[0].split('-')
    return `${day}/${month}/${year}`
  }

  const [year, month, day] = date.split('-')
  return `${day}/${month}/${year}`
}
