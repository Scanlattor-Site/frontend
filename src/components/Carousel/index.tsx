'use client'
import { UserInfosContext } from '@/lib/UserInfos'
import { Carousel as CarouselSlider } from 'antd'
import Image from 'next/image'
import { useContext } from 'react'
import { twMerge } from 'tailwind-merge'

export default function Carousel() {
  const { isLogged } = useContext(UserInfosContext)

  return (
    <CarouselSlider
      autoplay
      appendDots={(dots) => (
        <div>
          <div className={twMerge('container flex', isLogged && 'justify-end')}>
            <ul className="flex items-center gap-2 mb-2.5 md:mb-5">{dots}</ul>
          </div>
        </div>
      )}
      className="overflow-hidden w-screen md:max-w-[calc(100vw-8px)]"
      adaptiveHeight
      pauseOnHover
    >
      <div>
        <Image
          src="/slide1.png"
          alt="Imagem 1"
          className="h-40 md:h-72 w-full"
          height={160}
          width={1000}
        />
      </div>
      <div>
        <Image
          src="/slide1.png"
          alt="Imagem 1"
          className="h-40 md:h-72 w-full"
          height={160}
          width={1000}
        />
      </div>
    </CarouselSlider>
  )
}
