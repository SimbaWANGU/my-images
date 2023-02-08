import React, { FormEvent, ReactElement, useState, Suspense, lazy } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { Swiper , SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCards } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-cards'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { generateImage } from './../../api/Post'

interface Image {
  url: string
}

interface Images {
  message: string
  images: Image[]
}

const ImageDiv = lazy(() => import('../../components/ImageDiv'))

const Generate = (): ReactElement => {
  const queryClient = useQueryClient()
  let data: Images
  const [images, setImages] = useState<Images>()
  const [prompt, setPrompt] = useState('')
  const [number, setNumber] = useState('')

  const { status, mutateAsync: generateImages} = useMutation(async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    data = await generateImage(prompt, Number(number))
    setPrompt('')
    setNumber('')
    queryClient.invalidateQueries('images')
    queryClient.setQueryData('images', data)
  }, {
    onSuccess: () => {
      data = queryClient.getQueryData('images') as Images
      setImages(data)
    },
    onError: () => {
      console.log('done')
    }
  })
  
  const styles = {
    div: 'bg-weird-blue px-14 text-white flex flex-row h-full w-full',
    formDiv: 'flex-size-1',
    form: 'glass flex flex-col',
    h3: 'text-center p-5 text-3xl font-semibold base',
    input: 'p-2 m-auto my-5 rounded w-8/12 text-sm text-center bg-transparent border-b outline-none focus:outline-white focus:border-none placeholder:italic alt',
    inputSubmit: 'p-2 mx-auto my-5 rounded w-5/12 bg-violet-500 hover:bg-violet-600 duration-200 ease-in',
    result: 'flex-size-2',
    swiper: 'w-96',
    download: 'relative -top-8 -right-44 hover:scale-150 duration-1000 ease-in',
    classes: 'h-full w-full object-cover rounded-xl',
    Imagediv: 'h-80 border rounded-xl',
  }

  return (
    <div className={styles.div}>
      <div className={styles.formDiv}>
        <form className={styles.form} onSubmit={generateImages}>
          <h3 className={styles.h3}>Image Generation Prompt</h3>
          <input
            className={styles.input}
            type='text'
            placeholder='Type your prompt here...'
            value={prompt}
            onChange={(e) => { setPrompt(e.target.value) }}
            maxLength={30}
            required
          />
          <input
            className={styles.input}
            type='number'
            placeholder='Number of images...'
            value={number}
            onChange={(e) => { setNumber(e.target.value) }}
            max={10}
            required
          />
          <input 
            className={styles.inputSubmit}
            type='submit'
            value='Generate'
          />
        </form>
      </div>
      <div className={styles.result}>
        {
          (status === 'idle' && images === undefined) ?
          <h2>Type in a prompt to generate images</h2>
          : <Swiper
            effect={'cards'}
            grabCursor={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            modules={[EffectCards, Autoplay]}
            className={styles.swiper}
          >
            {status === 'loading' ?
            <h2>Please wait while we generate the images</h2>
            :
              (typeof images === 'object') ?
              images.images.map((image: Image) => (
                <SwiperSlide key={images.images.findIndex((item) => item === image)}>
                  <Suspense fallback={<h1>Loading</h1>}>
                    <ImageDiv src={image.url} classes={styles.classes} div={styles.Imagediv} />
                  </Suspense>
                  <FileDownloadIcon className={styles.download} />
                </SwiperSlide>
              )) 
              : ''
            }
          </Swiper>
        }
      </div>
    </div>
  )
}

export default Generate