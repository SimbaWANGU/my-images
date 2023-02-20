import React, { FormEvent, ReactElement, useState, Suspense, lazy } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { Swiper , SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCards } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { generateImage } from './../../api/Post'
import PacmanLoader from 'react-spinners/PacmanLoader'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { Image, Images } from '../../interfaces/Interface'
import { useStore } from '../../zustand/Store'
const ImageDiv = lazy(() => import('../../components/ImageDiv'))

const Generate = (): ReactElement => {
  const queryClient = useQueryClient()
  let data: Images
  const [images, setImages] = useState<Images>()
  const [prompt, setPrompt] = useState('')
  const [number, setNumber] = useState('')
  const [AddImages] = useStore((state) => [state.AddImages])

  const { status, isLoading, mutateAsync: generateImages} = useMutation(async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    toast.info('Generating Images. Please wait...', {
      position: 'top-center',
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      toastId: 'generateImage'
    })
    data = await generateImage(prompt, Number(number))
    setPrompt('')
    setNumber('')
    queryClient.invalidateQueries('images')
    queryClient.setQueryData('images', data)
  }, {
    onSuccess: () => {
      data = queryClient.getQueryData('images') as Images
      if (data.images === null) {
        toast.update('generateImage', {
          render: 'API usage is at limit. Please hold on while we work on this...'
        })
        setImages(undefined)
      } else {
        toast.update('generateImage', {
          render: 'Got your images...',
          autoClose: 5000,
        })
        setImages(data)
        AddImages(data)
      }
    },
    onError: () => {
      toast.update('generateImage', {
        render: 'An error occurred...',
        type: toast.TYPE.ERROR
      })
    }
  })
  
  const styles = {
    div: 'bg-weird-blue px-14 text-white flex flex-row h-full w-full',
    formDiv: 'flex-size-1',
    form: 'glass flex flex-col',
    h2: 'base text-center text-2xl',
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
        <form
          className={styles.form} 
          onSubmit={generateImages}
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h3 className={styles.h3}>Image Generation Prompt</h3>
          <input
            className={styles.input}
            type='text'
            placeholder='Type your prompt here...'
            value={prompt}
            onChange={(e) => { setPrompt(e.target.value) }}
            data-aos="fade-right"
            data-aos-delay="500"
            maxLength={30}
            required
          />
          <input
            className={styles.input}
            type='number'
            placeholder='Number of images...'
            value={number}
            onChange={(e) => { setNumber(e.target.value) }}
            data-aos="fade-right"
            data-aos-delay="750"
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
          <h2
            className={styles.h2}
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            Type in a prompt to generate images
          </h2>
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
            <>
              <PacmanLoader 
                color='#ffffff'
                loading={isLoading}
                cssOverride={{
                  margin: '5rem auto'
                }}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </>
            :
              (typeof images === 'object') ?
              images.images.map((image: Image) => (
                <SwiperSlide key={images.images.findIndex((item) => item === image)}>
                  <Suspense fallback={<h1>Loading</h1>}>
                    <ImageDiv src={image.url} classes={styles.classes} div={styles.Imagediv} />
                  </Suspense>
                </SwiperSlide>
              )) 
              : ''
            }
          </Swiper>
        }
      </div>
      <ToastContainer />
    </div>
  )
}

export default Generate