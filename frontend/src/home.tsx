import React from 'react'
import Header from './header';

export default function Home() {
 const data = [
  {
    "adult": false,
    "backdrop_path": "/aAgGrfBwna1nO4M2USxwFgK5O0t.jpg",
    "genre_ids": [
      27,
      53,
      14
    ],
    "id": 713704,
    "original_language": "en",
    "original_title": "Evil Dead Rise",
    "overview": "Three siblings find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
    "popularity": 5030.612,
    "poster_path": "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
    "release_date": "2023-04-12",
    "title": "Evil Dead Rise",
    "video": false,
    "vote_average": 7.1,
    "vote_count": 1017
  },
  {
    "adult": false,
    "backdrop_path": "/3CxUndGhUcZdt1Zggjdb2HkLLQX.jpg",
    "genre_ids": [
      28,
      12,
      878
    ],
    "id": 640146,
    "original_language": "en",
    "original_title": "Ant-Man and the Wasp: Quantumania",
    "overview": "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
    "popularity": 3023.011,
    "poster_path": "/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg",
    "release_date": "2023-02-15",
    "title": "Ant-Man and the Wasp: Quantumania",
    "video": false,
    "vote_average": 6.5,
    "vote_count": 2525
  },
  {
    "adult": false,
    "backdrop_path": "/nLBRD7UPR6GjmWQp6ASAfCTaWKX.jpg",
    "genre_ids": [
      16,
      10751,
      12,
      14,
      35
    ],
    "id": 502356,
    "original_language": "en",
    "original_title": "The Super Mario Bros. Movie",
    "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
    "popularity": 4675.159,
    "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    "release_date": "2023-04-05",
    "title": "The Super Mario Bros. Movie",
    "video": false,
    "vote_average": 7.5,
    "vote_count": 2202
  },
  {
    "adult": false,
    "backdrop_path": "/hiHGRbyTcbZoLsYYkO4QiCLYe34.jpg",
    "genre_ids": [
      27,
      53,
      14
    ],
    "id": 758323,
    "original_language": "en",
    "original_title": "The Pope's Exorcist",
    "overview": "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
    "popularity": 2378.68,
    "poster_path": "/4IjRR2OW2itjQWQnmlUzvwLz9DQ.jpg",
    "release_date": "2023-04-05",
    "title": "The Pope's Exorcist",
    "video": false,
    "vote_average": 7.2,
    "vote_count": 971
  },
  {
    "adult": false,
    "backdrop_path": "/99NBEpQEM4uLItZY2RquqdqdSXM.jpg",
    "genre_ids": [
      878,
      12,
      28
    ],
    "id": 447365,
    "original_language": "en",
    "original_title": "Guardians of the Galaxy Vol. 3",
    "overview": "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    "popularity": 2137.214,
    "poster_path": "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    "release_date": "2023-05-03",
    "title": "Guardians of the Galaxy Vol. 3",
    "video": false,
    "vote_average": 8.2,
    "vote_count": 1200
  },
  {
    "adult": false,
    "backdrop_path": "/b9UCfDzwiWw7mIFsIQR9ZJUeh7q.jpg",
    "genre_ids": [
      28,
      35,
      10749
    ],
    "id": 868759,
    "original_language": "en",
    "original_title": "Ghosted",
    "overview": "Salt-of-the-earth Cole falls head over heels for enigmatic Sadie — but then makes the shocking discovery that she’s a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.",
    "popularity": 1732.717,
    "poster_path": "/liLN69YgoovHVgmlHJ876PKi5Yi.jpg",
    "release_date": "2023-04-18",
    "title": "Ghosted",
    "video": false,
    "vote_average": 7.1,
    "vote_count": 784
  },
  {
    "adult": false,
    "backdrop_path": "/nDxJJyA5giRhXx96q1sWbOUjMBI.jpg",
    "genre_ids": [
      28,
      35,
      14,
      12
    ],
    "id": 594767,
    "original_language": "en",
    "original_title": "Shazam! Fury of the Gods",
    "overview": "Billy Batson and his foster siblings, who transform into superheroes by saying \"Shazam!\", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.",
    "popularity": 1632.305,
    "poster_path": "/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg",
    "release_date": "2023-03-15",
    "title": "Shazam! Fury of the Gods",
    "video": false,
    "vote_average": 6.8,
    "vote_count": 1603
  },
  {
    "adult": false,
    "backdrop_path": "/8rpDcsfLJypbO6vREc0547VKqEv.jpg",
    "genre_ids": [
      878,
      12,
      28
    ],
    "id": 76600,
    "original_language": "en",
    "original_title": "Avatar: The Way of Water",
    "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    "popularity": 1636.43,
    "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    "release_date": "2022-12-14",
    "title": "Avatar: The Way of Water",
    "video": false,
    "vote_average": 7.7,
    "vote_count": 7998
  },
  {
    "adult": false,
    "backdrop_path": "/zPEDfWece7gg1I0904KFFVUq5mg.jpg",
    "genre_ids": [
      53,
      28,
      80
    ],
    "id": 1102776,
    "original_language": "fr",
    "original_title": "AKA",
    "overview": "A steely special ops agent finds his morality put to the test when he infiltrates a crime syndicate and unexpectedly bonds with the boss' young son.",
    "popularity": 1399.383,
    "poster_path": "/3BSxAjiporlwQTWzaHZ9Yrl5C9D.jpg",
    "release_date": "2023-04-28",
    "title": "AKA",
    "video": false,
    "vote_average": 7,
    "vote_count": 257
  },
  {
    "adult": false,
    "backdrop_path": "/cEyhk8tZWubni71M6plwLMQFOIX.jpg",
    "genre_ids": [
      28,
      80
    ],
    "id": 385687,
    "original_language": "en",
    "original_title": "Fast X",
    "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
    "popularity": 1623.73,
    "poster_path": "/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
    "release_date": "2023-05-17",
    "title": "Fast X",
    "video": false,
    "vote_average": 6.2,
    "vote_count": 29
  },
  {
    "adult": false,
    "backdrop_path": "/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",
    "genre_ids": [
      18,
      28
    ],
    "id": 677179,
    "original_language": "en",
    "original_title": "Creed III",
    "overview": "After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damian Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damian — a fighter who has nothing to lose.",
    "popularity": 1242.591,
    "poster_path": "/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
    "release_date": "2023-03-01",
    "title": "Creed III",
    "video": false,
    "vote_average": 7.3,
    "vote_count": 1357
  },
  {
    "adult": false,
    "backdrop_path": "/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "id": 603692,
    "original_language": "en",
    "original_title": "John Wick: Chapter 4",
    "overview": "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    "popularity": 1175.963,
    "poster_path": "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    "release_date": "2023-03-22",
    "title": "John Wick: Chapter 4",
    "video": false,
    "vote_average": 7.9,
    "vote_count": 1403
  },
  {
    "adult": false,
    "backdrop_path": "/44immBwzhDVyjn87b3x3l9mlhAD.jpg",
    "genre_ids": [
      27,
      9648,
      53
    ],
    "id": 934433,
    "original_language": "en",
    "original_title": "Scream VI",
    "overview": "Following the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter.",
    "popularity": 1196.76,
    "poster_path": "/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg",
    "release_date": "2023-03-08",
    "title": "Scream VI",
    "video": false,
    "vote_average": 7.3,
    "vote_count": 1165
  },
  {
    "adult": false,
    "backdrop_path": "/wUwFMnbFxuDfcRSGGT7QQIGDRrH.jpg",
    "genre_ids": [
      27
    ],
    "id": 785759,
    "original_language": "en",
    "original_title": "Two Witches",
    "overview": "A matriarchal witch passes on her sinister inheritance to her grand-daughter, triggering the most horrific curses.",
    "popularity": 879.202,
    "poster_path": "/uL9fFTdNmUUlKIJfHJclN5X3bxH.jpg",
    "release_date": "2023-03-02",
    "title": "Two Witches",
    "video": false,
    "vote_average": 6.2,
    "vote_count": 45
  }

]
data.map(e=>console.log(e.poster_path))
//
  return (
    <div>
<Header></Header>
      <div className='flex p-4  w-[50vw] xl:w-[25vw] lg:w-[30vw] '> 
  
      {data.map(e=><img className='p-4 h-[50vh]' src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}></img>)}

</div>
      </div>
  )
}
