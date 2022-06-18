export interface Product {
    attributes: Attributes
    slug: string
}

export interface Attributes {
    title: string
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
