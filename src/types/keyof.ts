/**
 * *Def:
 * * The keyof operator is used to query the names (cardToken, cardNumber) of the properties (User["payment"]) of a type (User) and represent them as a union (let cardNumberProp: "cardToken" | "cardNumber"):
 * ?USE:
 * ?With generics
 * ?With mapped types
 * ?With template string literal types
 */

export type User = {
  consent: {
    isUnderstoodRules: boolean
    isLiscenseOk: boolean
    lisenceNumber: string
  }
  payment: {
    cardToken: string
    cardNumber: number | string
  }
}

type cardNumberFromUser = keyof User["payment"]
/**
 * ! So, the cardNumberFromUser type is a union of properties User['payment']
 */

type Person = {
  name: string
  age: number
  location: string
}

const jhon: Person = {
  name: "Jhon",
  age: 66,
  location: "Jamalpur",
}
