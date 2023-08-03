'use client'
import { Combobox } from '@headlessui/react'
import Image from 'next/image'
import { useState } from 'react'
// import SearchIcon from '../../../public/search-icon.svg'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export interface InputSearchProps {
  autoFocus?: boolean
  mangas: MangasType.SearchProps[]
}

export default function InputSearch({ mangas, autoFocus }: InputSearchProps) {
  const [query, setQuery] = useState('')
  const router = useRouter()
  // const lastSearch =
  //   (localStorage.getItem('lastSearch') as unknown as string[]) || []
  // console.log(lastSearch)

  // const setLastSearch = (value: string) => {
  //   const lastSearchActual =
  //     (localStorage.getItem('lastSearch') as unknown as string[]) || []
  //   lastSearchActual.push(value)
  //   localStorage.setItem('lastSearch', JSON.stringify(lastSearchActual))
  // }
  // const deleteSearch = (index: number) => {
  //   const lastSearchActual =
  //     (localStorage.getItem('lastSearch') as unknown as string[]) || []
  //   // const index = lastSearchActual.findIndex((search) => search === value)
  //   lastSearchActual.splice(index, 1)
  //   localStorage.setItem('lastSearch', JSON.stringify(lastSearchActual))
  // }

  const filteredMangas =
    query === ''
      ? mangas
      : mangas.filter((manga) =>
          manga.title
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        )

  return (
    <Combobox>
      <div id="search">
        <div className="relative">
          <Combobox.Input
            className="border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 w-full focus:outline-none"
            onChange={(e) => setQuery(e.target.value)}
            // displayValue={(manga: MangasType.SearchProps) => manga.title}
            autoFocus={autoFocus}
            placeholder="Buscar mangás e novels"
            onSubmit={() => {
              router.push(`/search?s=${query}`)
            }}
          />
          <Combobox.Button
            className="absolute right-2 z-50 text-primary inset-y-0"
            onClick={() => {
              router.push(`/search?s=${query}`)
              // setLastSearch(query)
            }}
          >
            <svg
              className="fill-primary"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.3357 16.6606L22.9907 21.3601C23.1948 21.5712 23.3104 21.8581 23.3125 22.158C23.3145 22.4579 23.2028 22.7464 23.0016 22.9606C22.9005 23.0713 22.7791 23.1595 22.6445 23.22C22.5099 23.2804 22.365 23.3119 22.2185 23.3125C21.9385 23.3113 21.6697 23.1975 21.4681 22.9947L16.8783 18.3633C15.8471 19.2733 14.5997 19.876 13.2677 20.1079C11.9357 20.3397 10.5684 20.1922 9.30999 19.6808C8.05161 19.1694 6.94875 18.3131 6.11771 17.2022C5.28668 16.0912 4.75825 14.7669 4.58816 13.3687L2.7392 9.89514C2.70622 9.83395 2.68845 9.76511 2.68754 9.69491C2.68662 9.62472 2.70258 9.5554 2.73395 9.4933C2.76533 9.4312 2.81111 9.37829 2.86713 9.33943C2.92315 9.30056 2.9876 9.27697 3.05461 9.27081L5.33862 8.8281C6.06967 7.31034 7.24752 6.07705 8.69938 5.30917L9.11267 3.03889C9.1233 2.97191 9.14932 2.90862 9.18851 2.85444C9.2277 2.80026 9.27889 2.7568 9.3377 2.72779C9.39651 2.69878 9.46117 2.68507 9.52616 2.68785C9.59116 2.69063 9.65453 2.70981 9.71087 2.74375L12.9737 4.54862C13.039 4.55998 13.1055 4.57511 13.1719 4.59025C13.3049 4.62052 13.4378 4.65079 13.5611 4.65079C13.8495 4.711 14.1032 4.88834 14.2664 5.14379C14.4296 5.39925 14.4888 5.7119 14.4311 6.01296C14.3735 6.31401 14.2035 6.57882 13.9588 6.74913C13.714 6.91943 13.4145 6.98128 13.126 6.92107C12.7685 6.84207 12.4038 6.804 12.0384 6.80755C10.8857 6.80902 9.76437 7.19889 8.84115 7.91913C7.91793 8.63937 7.24221 9.65149 6.91455 10.8049C6.5869 11.9582 6.62483 13.1912 7.02269 14.3202C7.42056 15.4493 8.15709 16.4141 9.12268 17.071C10.0883 17.728 11.2313 18.042 12.3816 17.9663C13.532 17.8906 14.6282 17.4292 15.507 16.6509C16.3859 15.8726 17.0005 14.8188 17.2593 13.6466C17.5182 12.4743 17.4074 11.2461 16.9436 10.1449C16.8299 9.87069 16.8245 9.56083 16.9283 9.28246C17.0321 9.00409 17.2369 8.77966 17.4982 8.65783C17.6296 8.59771 17.771 8.5653 17.9144 8.56245C18.0578 8.5596 18.2003 8.58638 18.3337 8.64124C18.4672 8.6961 18.5889 8.77796 18.6919 8.88211C18.7949 8.98626 18.8771 9.11065 18.9339 9.24811C19.4278 10.4393 19.6317 11.7395 19.5273 13.0328C19.423 14.3261 19.0136 15.5724 18.3357 16.6606ZM16.7104 8.38115C16.5154 8.51711 16.2862 8.58968 16.0517 8.58968C15.7373 8.58968 15.4358 8.45932 15.2134 8.22728C14.9911 7.99524 14.8662 7.68053 14.8662 7.35237C14.8662 7.10766 14.9357 6.86844 15.066 6.66496C15.1963 6.46149 15.3814 6.3029 15.598 6.20925C15.8147 6.11561 16.053 6.0911 16.283 6.13884C16.513 6.18659 16.7242 6.30443 16.89 6.47747C17.0558 6.65051 17.1687 6.87097 17.2144 7.11099C17.2602 7.351 17.2367 7.59978 17.147 7.82587C17.0573 8.05196 16.9053 8.2452 16.7104 8.38115Z"
              />
            </svg>
          </Combobox.Button>
        </div>
        <Combobox.Options
          as="section"
          className="bg-white p-5 max-h-[50vh] overflow-y-auto"
          static
        >
          <h2 className="text-primary font-bold">Mangás</h2>
          {filteredMangas.map((manga) => (
            <Combobox.Option
              key={manga.id}
              value={manga.slug}
              className="py-2 px-2 leading-5 text-lg rounded-md hover:bg-primary ui-active:bg-primary ui-active:bg-opacity-60 hover:bg-opacity-30 text-tertiary cursor-pointer list-none"
            >
              <Link
                href={`/mangas/${manga.slug}`}
                className="flex items-center"
              >
                <Image
                  src={manga.thumbnail}
                  alt={manga.title}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <div className="ml-2">
                  <p className="text-base leading-5 font-medium">
                    {manga.title}
                  </p>
                </div>
              </Link>
            </Combobox.Option>
          ))}
          {/* lastSearch.map((search, index) => (
                <Combobox.Option
                  key={search + index}
                  value={search}
                  className="py-2 px-2 leading-5 text-lg rounded-md hover:bg-primary hover:bg-opacity-30 text-tertiary cursor-pointer list-none flex justify-between"
                  onClick={() => {
                    router.push(`/search?s=${search}`)
                    setLastSearch(search)
                  }}
                >
                  {search}
                  <button onClick={() => deleteSearch(index)}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-primary"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13.41 11.9999L17.71 7.70994C17.8983 7.52164 18.0041 7.26624 18.0041 6.99994C18.0041 6.73364 17.8983 6.47825 17.71 6.28994C17.5217 6.10164 17.2663 5.99585 17 5.99585C16.7337 5.99585 16.4783 6.10164 16.29 6.28994L12 10.5899L7.71 6.28994C7.5217 6.10164 7.2663 5.99585 7 5.99585C6.7337 5.99585 6.4783 6.10164 6.29 6.28994C6.1017 6.47825 5.99591 6.73364 5.99591 6.99994C5.99591 7.26624 6.1017 7.52164 6.29 7.70994L10.59 11.9999L6.29 16.2899C6.19627 16.3829 6.12188 16.4935 6.07111 16.6154C6.02034 16.7372 5.9942 16.8679 5.9942 16.9999C5.9942 17.132 6.02034 17.2627 6.07111 17.3845C6.12188 17.5064 6.19627 17.617 6.29 17.7099C6.38296 17.8037 6.49356 17.8781 6.61542 17.9288C6.73728 17.9796 6.86799 18.0057 7 18.0057C7.13201 18.0057 7.26272 17.9796 7.38458 17.9288C7.50644 17.8781 7.61704 17.8037 7.71 17.7099L12 13.4099L16.29 17.7099C16.383 17.8037 16.4936 17.8781 16.6154 17.9288C16.7373 17.9796 16.868 18.0057 17 18.0057C17.132 18.0057 17.2627 17.9796 17.3846 17.9288C17.5064 17.8781 17.617 17.8037 17.71 17.7099C17.8037 17.617 17.8781 17.5064 17.9289 17.3845C17.9797 17.2627 18.0058 17.132 18.0058 16.9999C18.0058 16.8679 17.9797 16.7372 17.9289 16.6154C17.8781 16.4935 17.8037 16.3829 17.71 16.2899L13.41 11.9999Z" />
                    </svg>
                  </button>
                </Combobox.Option>
              )) */}
        </Combobox.Options>
      </div>
      {/* </div> */}
    </Combobox>
  )
}
