import ButtonSearch from './ButtonSearch'

type ResponseApi = {
  total: number
  mangas: MangasType.SearchProps[]
}

// const mangas = [
//   {
//     id: 'e1d8bcaf-4ebe-4207-92bc-3a44912e8103',
//     title: 'Get Out Of The Way, I’ll Decide The Ending Now!',
//     slug: 'get-out-of-the-way-i-ll-decide-the-ending-now!',
//     author: null,
//     status: 'ongoing',
//     synopsis:
//       'Eu estava obcecada por um jogo chamado The Garden of the guardins pela empresa que trabalho. Entre tanto a  vilã Bellita  que é uma coadjuvante  morre depois de assediar a heroína! No entanto ela pode morrer em 4 tipo de situações por outras personagens, 1° personagem executa Bellita e sua família , 2° personagem  mata Bellita por causar caos ao imperio, 3° personagem mata Bellita  dizendo que ela é irritante, 4° personagem mata Bellita por justiça. E agora estou em apuros. So sei de uma coisa vou morrer não importa qual caminho que escolha. Só existe uma maneira de sobreviver,  tenho que ajudar a heroína e criar um final feliz para o jogo! Foda-se. Eu decidirei o final.',
//     thumbnail:
//       'https://res.cloudinary.com/dyne2rg3b/image/upload/v1690424702/get_out_the_way_ah6hxh.jpg',
//     releaseDate: '2023-07-26T20:05:04.000Z',
//     createdAt: '2023-07-27T02:32:51.699Z',
//     updatedAt: '2023-07-27T02:32:51.699Z',
//     views: 0,
//     chapters: [],
//   },
// ]

function Search({ mangas }: { mangas: MangasType.SearchProps[] }) {
  return (
    <div>
      <ButtonSearch mangas={mangas} />
    </div>
  )
}

export default Search
