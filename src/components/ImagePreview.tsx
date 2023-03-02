// Components
import Image from 'next/image'

// Types
import { Picture } from '@/types/ProductType'

// Hooks
import { useState } from 'react'

interface ImagePreviewProps {
  pictures: Picture[]
}

export default function ImagePreview({ pictures }: ImagePreviewProps) {
  const [currentImage, setCurrentImage] = useState<number>(0)

  function selectImage(index: number): void {
    setCurrentImage(index)
  }

  const TESTE = [...pictures, ...pictures, ...pictures, ...pictures]

  return (
    <section
      className="bg-white grid w-full max-w-xl rounded-sm shadow-sm"
      aria-label="product images preview"
    >
      <div className="p-2">
        <Image
          className="object-cover bg-center aspect-square rounded-sm"
          src={pictures[currentImage].url}
          alt={pictures[currentImage].title}
          width={pictures[currentImage].width}
          height={pictures[currentImage].height}
        />
      </div>

      <div className="grid grid-flow-col auto-cols-[96px] overflow-x-auto overscroll-contain snap-x scrollbar-none">
        {TESTE.map((picture, index) => (
          <button
            className="hover:-translate-y-[2px] transition-transform ease-linear duration-75 p-2 snap-start"
            key={index}
            onClick={() => selectImage(index)}
          >
            <Image
              className="object-cover bg-center aspect-square rounded-sm"
              src={picture.url}
              alt={picture.title}
              width={100}
              height={100}
            />
          </button>
        ))}
      </div>
    </section>
  )
}
