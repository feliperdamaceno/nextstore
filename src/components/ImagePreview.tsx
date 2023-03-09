// Components
import Image from 'next/image'

// Styles
import { IoIosArrowBack as PreviousIcon } from 'react-icons/io'
import { IoIosArrowForward as NextIcon } from 'react-icons/io'

// Libs
import { useSwipeable } from 'react-swipeable'

// Hooks
import { useState, useRef, useEffect } from 'react'

// Types
import { Picture } from '@/types/ProductTypes'

interface ImagePreviewProps {
  pictures: Picture[]
}

export default function ImagePreview({ pictures }: ImagePreviewProps) {
  const [currentImage, setCurrentImage] = useState<number>(0)
  const previewImage = useRef<HTMLImageElement>(null!)
  const isFirstImage = currentImage === 0
  const isLastImage = currentImage === pictures.length - 1
  const swipeHandlers = useSwipeable({
    onSwipedRight: previousImage,
    onSwipedLeft: nextImage
  })

  function selectImage(index: number): void {
    setCurrentImage(index)
    previewImage.current.classList.add('animate-fade')
  }

  function previousImage(): void {
    if (isFirstImage) return
    setCurrentImage((previous) => previous - 1)
    previewImage.current.classList.add('animate-fade')
  }

  function nextImage(): void {
    if (isLastImage) return
    setCurrentImage((previous) => previous + 1)
    previewImage.current.classList.add('animate-fade')
  }

  useEffect(() => {
    previewImage.current.addEventListener('animationend', () => {
      previewImage.current.classList.remove('animate-fade')
    })
  }, [currentImage])

  return (
    <section
      className="bg-white grid w-full max-w-xl rounded-sm shadow-sm"
      aria-label="product images preview"
    >
      <div
        {...swipeHandlers}
        className="p-2 select-none relative grid place-items-center group"
      >
        <img
          ref={previewImage}
          className="object-cover bg-center aspect-square rounded-sm"
          src={pictures[currentImage].url}
          alt={pictures[currentImage].altText}
          width={pictures[currentImage].width}
          height={pictures[currentImage].height}
        />

        <div className="absolute flex items-center justify-between w-full px-2 text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity ease-linear duration-150">
          <button
            className={`p-2 transition-opacity duration-150 ${
              isFirstImage ? 'opacity-50' : ''
            }`}
            onClick={previousImage}
          >
            <PreviousIcon className="drop-shadow-sm hover:scale-105 transition-transform duration-75 " />
          </button>

          <button
            className={`p-2 transition-opacity duration-150 ${
              isLastImage ? 'opacity-50' : ''
            }`}
            onClick={nextImage}
          >
            <NextIcon className="drop-shadow-sm hover:scale-105 transition-transform duration-75 " />
          </button>
        </div>
      </div>

      <div className="grid grid-flow-col auto-cols-[96px] overflow-x-auto overscroll-contain snap-x scrollbar-none">
        {pictures.map((picture, index) => (
          <button
            className="hover:-translate-y-[2px] transition-transform ease-linear duration-75 p-2 snap-start"
            key={index}
            onClick={() => selectImage(index)}
          >
            <Image
              className="object-cover bg-center aspect-square rounded-sm"
              src={picture.url}
              alt={picture.altText}
              width={100}
              height={100}
            />
          </button>
        ))}
      </div>
    </section>
  )
}
