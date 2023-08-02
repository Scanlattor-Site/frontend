'use client'
import React, { useState } from 'react'
import InputSearch from './InputSearch'
import Image from 'next/image'

export interface ButtonSearchProps {
  mangas: MangasType.SearchProps[]
}

export default function ButtonSearch({ mangas }: ButtonSearchProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <div className="md:relative flex items-center">
        <button
          type="button"
          className="bg-quaternary bg-opacity-50 rounded-full p-1 w-fit"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            src="/search-icon.svg"
            alt="Search icon"
            width={26}
            height={26}
          />
        </button>
        {isOpen && (
          <div
            className="absolute w-screen md:right-0 max-sm:left-0 top-16 container z-20"
            style={{ maxWidth: '22rem' }}
          >
            <InputSearch mangas={mangas} autoFocus />
          </div>
        )}
      </div>
      {isOpen && (
        <div
          className="w-screen h-screen bg-secondary left-0 top-0 absolute opacity-50 z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
