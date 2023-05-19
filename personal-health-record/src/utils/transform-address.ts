import { Address } from 'aidbox-sdk/aidbox-types'

export function transformAddress (address: Address[] | Address) {
  if (Array.isArray(address)) {
    return `${address?.[0].line}, ${address?.[0].city}, ${address?.[0].country}`
  }

  return address.line + ', ' + address.city + ', ' + address.country
}
