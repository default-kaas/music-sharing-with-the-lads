export type useCardType = {
  title: string,
  artist: string,
  image: string,
  genere: string,
  sub_generes: [string],
  release: string,
  courious_link: string
  platforms: [{name: string, link: string}]
  ratings: {
    critics: [{id: string, rating:  number}],
    you: {id: string, rating:  number},
    friends: [{id: string, rating:  number}],
    similar: [{id: string, rating:  number}]
  }
}