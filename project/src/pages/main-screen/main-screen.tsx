import { Link } from 'react-router-dom';
import FilmCard from '../../components/film-card/film-card';
import Logo from '../../components/logo/logo';
import { AppRoute } from '../../const';
import { Films } from '../../types/films';

type MainScreenProps = {
  films: Films;
};

const filmCardCount = 9;

const genres = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
];

const mainFilm = {
  id: '1',
  name: 'Fantastic Beasts: The Crimes of Grindelwald',
  previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  backGroundImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  genre: 'фэнтези',
  year: 2018,
  details: {
    director: 'Дэвид Йейтс',
    starring: [
      'Эдди Редмэйн, Джонни Депп, Кэтрин Уотерстон, Элисон Судол, Дэн Фоглер, Джуд Лоу, Эзра Миллер, Зои Кравиц, Каллум Тернер, Клаудия Ким',
    ],
    runTime: 134,
    description:
      'Могущественный тёмный волшебник Геллерт Грин-де-Вальд пойман в Штатах, но не собирается молча сидеть в темнице и устраивает грандиозный побег. Теперь ничто не помешает ему добиться своей цели — установить превосходство волшебников над всеми немагическими существами на планете. ',
    rate: {
      score: 6.7,
      level: 'Good',
      count: 12564,
    },
  },
  player: {
    videolink:
      'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    poster: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  },
};

function MainScreen({ films }: MainScreenProps): JSX.Element {
  return (
    <div>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <Logo light={false} />
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img
                  src="img/avatar.jpg"
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            </li>
            <li className="user-block__item">
              <Link className="user-block__link" to={AppRoute.SignIn}>
                Sign out
              </Link>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{mainFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{mainFilm.genre}</span>
                <span className="film-card__year">{mainFilm.year}</span>
              </p>

              <div className="film-card__buttons">
                <Link
                  className="btn btn--play film-card__button"
                  type="button"
                  to={AppRoute.Player + `${mainFilm.id}`}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link
                  className="btn btn--list film-card__button"
                  type="button"
                  to={AppRoute.MyList}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{filmCardCount}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {genres.map((genre, i) => (
              <li className="catalog__genres-item" key={i}>
                <a href="#" className="catalog__genres-link">
                  {genre}
                </a>
              </li>
            ))}
          </ul>

          <div className="catalog__films-list">
            {films.map((film) => (
              <FilmCard key={film.id} film={film} />
            ))}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>

        <footer className="page-footer">
          <Logo light />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default MainScreen;
