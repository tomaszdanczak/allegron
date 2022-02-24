import { IDeliveryInfo, IImage, IPrice } from 'types/product'

export interface ICartItem {
  _id: number
  name: string
  prices: IPrice[]
  image: IImage
  quantity: number
  countInStock: number
  deliveryInfo: IDeliveryInfo
  description: string
}
