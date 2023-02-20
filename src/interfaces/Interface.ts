interface Image {
  url: string
}

interface Images {
  message: string
  images: Image[]
}

interface ImageDiv {
  src: string
  classes: string
  div: string
}

interface GridDivInterface {
  className: string
  photos: string[]
  classes: string
  div: string
}

interface ImagesProps {
  handleOpenImagesModal: any
}

interface Store {
  Images: Images[]
  AddImages: (images: Images) => void
}

export type { Image, Images, ImageDiv, GridDivInterface, ImagesProps, Store }