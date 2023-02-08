interface Image {
  url: string
}

interface Images {
  message: string
  images: Image[]
}

export type { Image, Images}