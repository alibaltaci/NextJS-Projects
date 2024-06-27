
export interface IAnime {
    id: string
    name: string
    image: {
        original: string
    }
    kind: string
    episodes: number
    episodes_aired: number
    score: string
}

interface Prop {
    anime: IAnime
    index: number
}

const AnimeCard = ( {anime}: Prop ) => {
  return (
    <div>AnimeCard</div>
  )
}

export default AnimeCard