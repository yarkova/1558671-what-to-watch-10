export type Rate = {
  score: number,
  level: string,
  count: number
};

export type Player = {
  videolink: string,
  poster: string
}

export type FilmDetail = {
  director: string,
  starring: string[],
  runTime: number,
  description: string,
  rate: Rate
};

export type Film = {
  id: string,
  name: string,
  previewImage: string,
  backGroundImage: string,
  genre: string,
  year: number,
  details: FilmDetail,
  player: Player
};
export type Films = Film[];
