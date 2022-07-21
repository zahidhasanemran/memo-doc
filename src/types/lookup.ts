/**
 * ? In TypeScript you can reuse the type of a property of another type - This type is called index access type or lookup type.
 * * USE CASE: "when we need to use a part of a type just once", "when we need to reuse a part of some type that we cannot touch, like, for example, a type from a third-party library"
 **/

export type submitRequest = {
  transactionId: string
  personal: {
    name: string
    phone: string
    email: string
    gender: string
    dob: string
    birthCountry: string
  }
  consent: {
    isUnderstoodRules: boolean
    isLiscenseOk: boolean
  }
  payment: {
    cardToken: string
  }
}
;(function updateConsent(
  isUnderstoodRules: submitRequest["consent"]["isUnderstoodRules"],
  isLiscenseOk: submitRequest["consent"]["isLiscenseOk"]
) {
  return {
    isUnderstoodRules,
    isLiscenseOk,
  }
})(true, true)
