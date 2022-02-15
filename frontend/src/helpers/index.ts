import { IPrice } from 'types/product'

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function displayPriceWithCurrency(priceInfo: IPrice): string {
  switch (priceInfo.currency) {
    case 'USD':
      return `$ ${priceInfo.price}`
  }
  return ``
}

export function displaySelectedCurrency(currency: string): string {
  switch (currency) {
    case 'USD':
      return `$`
  }
  return ``
}
