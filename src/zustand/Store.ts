import { create } from 'zustand'
import { Images } from '../interfaces/Interface'

type Store = {
  Images: Images[]
  AddImages: (images: Images) => void
}

const useStore = create<Store>(set => ({
  Images: [],
  AddImages: (images) => {
    set(state => ({
      Images: [...state.Images, images]
    }))
  }
}))

export { useStore }