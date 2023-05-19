import { Patient } from 'aidbox-sdk/aidbox-types'

export function transformName (name: Patient['name']) {
  return `${name?.[0].family} ${name?.[0].given?.[0]}`
}
