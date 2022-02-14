export interface IImage {
  _id: number
  imageSrc: string
  imageAlt: string
}

export interface IPrice {
  _id: number
  price: number
  currency: string
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
}
