export interface ProductType {
    attributes: AttributesType
    slug: string
}

export interface AttributesType {
    name: string
    quantity: number
    price: number
    currency: string
    id: string
    slug: string
    date: string
    description: string
    tags: string[]
    category: string
    images: string[]
}
