import { IImage, IPrice } from 'types/product'

export interface ICartItem {
  _id: number
  name: string
  prices: IPrice[]
  image: IImage
  quantity: number
  countInStock: number
}
