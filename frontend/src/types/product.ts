export interface IImage {
  _id: number
  imageSrc: string
  imageAlt: string
  primary?: boolean
}

export interface IPrice {
  _id: number
  price: number
  currency: string
}

export interface IDeliveryInfo {
  _id: number
  inStock: boolean
  leadTime?: string
}

export interface IProduct {
  _id: number
  name: string
  color: string
  countInStock: number
  rating: number
  reviewCount: number
  category: string[]
  prices: IPrice[]
  images: IImage[]
  description: string[]
  details: string[]
  deliveryInfo: IDeliveryInfo
}
