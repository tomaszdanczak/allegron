import { useCurrency } from 'hooks/useCurrency'
import { useCart } from 'hooks/useCart'
import { IPrice } from 'types/product'
import { displaySelectedCurrency } from 'helpers'

export const usePrices = () => {
  const { cartItems } = useCart()
  const { currency } = useCurrency()

  const getPriceInSelectedCurrency = (prices: IPrice[]): number => {
    const priceInfo = prices.find((price) => price.currency === currency) || prices[0]

    return priceInfo.price
  }

  const subtotalPrice = cartItems.reduce((a, c) => a + c.quantity * getPriceInSelectedCurrency(c.prices), 0)

  const taxPrice = cartItems.length > 0 ? subtotalPrice * 0.23 : 0

  const roundedTaxPrice = Math.round(taxPrice * 100) / 100

  const shippingPrice = cartItems.length === 0 ? 0 : subtotalPrice > 100 ? 0 : 5

  const totalPrice = subtotalPrice + shippingPrice + roundedTaxPrice

  const currentCurrency = displaySelectedCurrency(currency)

  return { totalPrice, shippingPrice, roundedTaxPrice, subtotalPrice, currentCurrency }
}
