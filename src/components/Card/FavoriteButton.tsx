'use client'

import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export default function FavoriteButton({ id }: { id: string }) {
  const [isFavorite, setIsFavorite] = useState(false)
  useEffect(() => {
    const localFavorites = localStorage.getItem('favorites')
    if (localFavorites) {
      const favorites = JSON.parse(localFavorites)
      if (favorites.includes(id)) {
        setIsFavorite(true)
      }
    }
  }, [])
  const handleFavorite = () => {
    const localFavorites = localStorage.getItem('favorites')
    if (localFavorites) {
      const favorites = JSON.parse(localFavorites)
      if (favorites.includes(id)) {
        localStorage.setItem(
          'favorites',
          JSON.stringify(
            favorites.filter((favorite: string) => favorite !== id),
          ),
        )
        setIsFavorite(false)
      } else {
        localStorage.setItem('favorites', JSON.stringify([...favorites, id]))
        setIsFavorite(true)
      }
    } else {
      localStorage.setItem('favorites', JSON.stringify([id]))
      setIsFavorite(true)
    }
  }
  return (
    <button
      type="button"
      className={twMerge(
        'absolute top-2 left-2 bg-secondary rounded-full p-1 z-10',
        !localStorage && 'animate-spin',
      )}
      onClick={handleFavorite}
    >
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_95_10570)">
          <path
            className={twMerge('fill-white', isFavorite && 'fill-primary')}
            d="M4.18402 10.8452C4.14135 10.758 4.08249 10.6804 4.01081 10.6169C3.93913 10.5534 3.85604 10.5051 3.76631 10.475C3.67659 10.4448 3.582 10.4333 3.48797 10.4411C3.39394 10.4489 3.30233 10.4759 3.2184 10.5205L0.890673 11.7927C0.807864 11.8374 0.734383 11.8986 0.67444 11.9728C0.614497 12.047 0.569269 12.1327 0.541349 12.225C0.513429 12.3173 0.503365 12.4144 0.511733 12.5108C0.520101 12.6072 0.546737 12.7009 0.590115 12.7865C0.647931 12.8988 0.732172 12.9941 0.835022 13.0636C0.937872 13.1331 1.056 13.1745 1.17844 13.1841H1.21681C1.33941 13.1892 1.46162 13.1666 1.57492 13.1178L3.87707 11.8391C4.04181 11.7461 4.16564 11.591 4.22281 11.4059C4.27998 11.2208 4.26609 11.02 4.18402 10.8452Z"
            fill="white"
          />
          <path
            className={twMerge('fill-white', isFavorite && 'fill-primary')}
            d="M3.5701 13.2834C3.47877 13.2561 3.38311 13.2479 3.28869 13.2593C3.19427 13.2706 3.10298 13.3014 3.02014 13.3497L0.711602 14.602C0.627963 14.6467 0.553737 14.7081 0.493241 14.7828C0.432746 14.8575 0.387189 14.9439 0.359221 15.037C0.331252 15.1301 0.321431 15.2281 0.330328 15.3251C0.339224 15.4222 0.366662 15.5165 0.411044 15.6025C0.46886 15.7147 0.553101 15.81 0.655951 15.8795C0.758801 15.949 0.876928 15.9904 0.99937 16H1.04413C1.16139 15.9998 1.27715 15.9726 1.38306 15.9205L3.70439 14.6483C3.87011 14.553 3.99389 14.395 4.04989 14.2073C4.10589 14.0197 4.08979 13.8169 4.00495 13.6412C3.90916 13.469 3.75367 13.3411 3.5701 13.2834Z"
            fill="white"
          />
          <path
            className={twMerge('fill-white', isFavorite && 'fill-primary')}
            d="M13.9042 8.55923C13.8207 8.39474 13.7771 8.21169 13.7771 8.02585C13.7771 7.84002 13.8207 7.65697 13.9042 7.49248L15.1832 5.06081C15.3501 4.73691 15.3873 4.35798 15.2868 4.00589C15.1862 3.65381 14.9561 3.35682 14.646 3.17909C14.3845 3.03131 14.0838 2.97551 13.7891 3.02007L11.1672 3.41099C10.9934 3.43597 10.8163 3.41775 10.6507 3.35785C10.485 3.29794 10.3354 3.19806 10.2144 3.06645L8.38545 1.07871C8.25954 0.948088 8.11001 0.844464 7.94542 0.773763C7.78083 0.703063 7.6044 0.666672 7.42622 0.666672C7.24805 0.666672 7.07162 0.703063 6.90703 0.773763C6.74243 0.844464 6.59291 0.948088 6.467 1.07871C6.26363 1.26707 6.11894 1.51386 6.05133 1.78767L5.61648 4.50424C5.58204 4.68704 5.50607 4.85871 5.39486 5.00504C5.28366 5.15136 5.14042 5.26815 4.977 5.34572L2.57253 6.54499C2.34606 6.66113 2.15542 6.84055 2.02213 7.063C1.88884 7.28545 1.81821 7.54206 1.81821 7.80389C1.81821 8.06572 1.88884 8.32233 2.02213 8.54478C2.15542 8.76722 2.34606 8.94664 2.57253 9.06279L4.91305 10.3349C5.07335 10.4196 5.2113 10.5435 5.31493 10.6959C5.41857 10.8483 5.48476 11.0246 5.50777 11.2095L5.87228 14.211C5.89931 14.4486 5.99045 14.6735 6.13523 14.8598C6.28002 15.0462 6.47258 15.1864 6.69082 15.2645C6.79239 15.2993 6.89757 15.3215 7.00416 15.3308H7.0873C7.25093 15.3337 7.41344 15.3024 7.56509 15.2386C7.71674 15.1748 7.85439 15.08 7.96979 14.9597L10.0481 12.8395C10.1756 12.7088 10.3319 12.6121 10.5034 12.5578C10.675 12.5036 10.8567 12.4934 11.0329 12.5281L13.9042 13.0913C13.9618 13.0913 14.1664 13.0913 14.1664 13.0913C14.4467 13.0831 14.7159 12.9763 14.9298 12.7884C15.1437 12.6005 15.2894 12.3428 15.343 12.0576C15.3546 11.9475 15.3546 11.8365 15.343 11.7264C14.9168 10.6455 14.4366 9.58834 13.9042 8.55923ZM14.1088 4.3121C14.124 4.33441 14.1321 4.36102 14.1321 4.38829C14.1321 4.41557 14.124 4.44218 14.1088 4.46449L12.8299 6.89616C12.6475 7.24023 12.5487 7.62514 12.542 8.01763C12.5353 8.41012 12.621 8.79839 12.7915 9.14893L14.0705 11.7992L11.2439 11.2427C10.8716 11.1701 10.4879 11.1925 10.1258 11.3079C9.76367 11.4233 9.43414 11.6283 9.16562 11.9053L7.04253 14.0586L6.69082 11.0572C6.64349 10.6664 6.50528 10.2934 6.28806 9.97026C6.07085 9.6471 5.78113 9.38343 5.44382 9.20193L3.06494 7.93641C3.03571 7.91743 3.0135 7.8888 3.0019 7.85514C2.99029 7.82148 2.98997 7.78475 3.00099 7.75088C3.01511 7.72637 3.03489 7.70588 3.05854 7.69125L5.51416 6.49198C5.85587 6.32388 6.15343 6.07292 6.38164 5.76035C6.60984 5.44778 6.76196 5.08282 6.82511 4.69639L7.25996 1.94669C7.27381 1.9091 7.29833 1.87676 7.3303 1.85393H7.42622C7.46072 1.85686 7.49279 1.87347 7.51575 1.90031L9.34468 3.88805C9.60205 4.1723 9.92207 4.38769 10.2773 4.51577C10.6326 4.64386 11.0126 4.68083 11.3846 4.62351L14.0193 4.20608C14.0432 4.21162 14.0647 4.22487 14.0808 4.24393C14.0969 4.26299 14.1067 4.28687 14.1088 4.3121Z"
            // fill="white"
          />
          <path
            className={twMerge('fill-white', isFavorite && 'fill-primary')}
            d="M11.1672 8.04906C11.1073 8.0106 11.0406 7.98487 10.9711 7.97339C10.9015 7.9619 10.8304 7.96487 10.762 7.98214C10.6935 7.99941 10.6291 8.03062 10.5724 8.07396C10.5157 8.11731 10.4679 8.17191 10.4318 8.23458C10.2294 8.59743 9.91042 8.87512 9.53059 9.01922C9.15076 9.16332 8.73416 9.16468 8.35346 9.02305C8.21631 8.99285 8.0732 9.01873 7.95403 9.09528C7.83486 9.17183 7.74886 9.29314 7.71398 9.43385C7.69702 9.5054 7.69394 9.57973 7.70492 9.65252C7.71589 9.72531 7.74071 9.79512 7.77793 9.8579C7.81212 9.92198 7.85875 9.97802 7.91488 10.0225C7.97101 10.067 8.03543 10.0989 8.10406 10.1163C8.3338 10.1818 8.56961 10.2217 8.8075 10.2356H9.03771C9.51181 10.2357 9.97749 10.1058 10.3875 9.85912C10.7974 9.6124 11.137 9.25765 11.3718 8.8309C11.4131 8.7724 11.4423 8.70577 11.4577 8.63511C11.4731 8.56446 11.4743 8.49128 11.4614 8.42011C11.434 8.28069 11.3562 8.1574 11.2439 8.07556L11.1672 8.04906Z"
            // fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_95_10570">
            <rect
              width="15.6778"
              height="16"
              fill="white"
              transform="translate(0.327148)"
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  )
}