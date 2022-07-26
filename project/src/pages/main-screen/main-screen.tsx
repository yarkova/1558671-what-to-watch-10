import FilmCard from '../../components/film-card/film-card';
import Logo from '../../components/logo/logo';

const filmCardCount = 9

const films = [
  { name: 'Fantastic Beasts: The Crimes of Grindelwald', previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg' },
  { name: 'Bohemian Rhapsody', previewImage: 'img/bohemian-rhapsody.jpg' },
  { name: 'Macbeth', previewImage: 'img/macbeth.jpg' },
  { name: 'Aviator', previewImage: 'img/aviator.jpg' },
  { name: 'We need to talk about Kevin', previewImage: 'img/we-need-to-talk-about-kevin.jpg' },
  { name: 'What We Do in the Shadows', previewImage: 'img/what-we-do-in-the-shadows.jpg' },
  { name: 'Revenant', previewImage: 'img/revenant.jpg' },
  { name: 'Johnny English', previewImage: 'img/johnny-english.jpg' },
  { name: 'Shutter Island', previewImage: 'img/shutter-island.jpg' },
  { name: 'Pulp Fiction', previewImage: 'img/pulp-fiction.jpg' },
  { name: 'No Country for Old Men', previewImage: 'img/no-country-for-old-men.jpg' },
  { name: 'Snatch', previewImage: 'img/snatch.jpg' },
  { name: 'Moonrise Kingdom', previewImage: 'img/moonrise-kingdom.jpg' },
  { name: 'Seven Years in Tibet', previewImage: 'img/seven-years-in-tibet.jpg' },
  { name: 'Midnight Special', previewImage: 'img/midnight-special.jpg' },
  { name: 'War of the Worlds', previewImage: 'img/war-of-the-worlds.jpg' },
  { name: 'Dardjeeling Limited', previewImage: 'img/dardjeeling-limited.jpg' },
  { name: 'Orlando', previewImage: 'img/orlando.jpg' },
  { name: 'Mindhunter', previewImage: 'img/mindhunter.jpg' },
  { name: 'Midnight Special', previewImage: 'img/midnight-special.jpg' },
]

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
]

const mainFilm = {
    title: 'The Grand Budapest Hotel',
    genre: 'Drama',
    year: 2014,
}

function MainScreen() : JSX.Element {


  return (
    <div>
    <section className="film-card">
      <div className="film-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <div className="logo">
          <Logo light={false}/>
        </div>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{mainFilm.title}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{mainFilm.genre}</span>
              <span className="film-card__year">{mainFilm.year}</span>
            </p>

            <div className="film-card__buttons">
             <button className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
                <span className="film-card__count">{filmCardCount}</span>
              </button>
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
              <a href="#" className="catalog__genres-link">{genre}</a>
            </li>
          ))}
        </ul>

        <div className="catalog__films-list">
        {films.map((film, i) => (
          <FilmCard key={i} name={film.name} previewImage={film.previewImage} />
        ))}
        </div>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>

      <footer className="page-footer">
        <Logo light/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </div>
  )
}

export default MainScreen;
