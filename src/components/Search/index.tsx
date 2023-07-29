import Image from 'next/image'

async function Search() {
  // const mangas = await fetch(
  //   'https://scanlattor-site-back.bohr.io/api/mangas',
  //   {

  //   }
  // ).then((res) => res.json())
  // console.log(mangas)

  return (
    <div>
      <div className="bg-quaternary bg-opacity-50 rounded-full p-1 w-fit">
        <Image
          src="/search-icon.svg"
          alt="Search icon"
          width={26}
          height={26}
        />
      </div>
    </div>
  )
}

export default Search
