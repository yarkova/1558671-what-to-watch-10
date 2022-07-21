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
]

function MyListScreen() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Logo />
        </div>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{filmCardCount}</span></h1>
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

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
        {films.map((film, i) => (
          <FilmCard key={i} name={film.name} previewImage={film.previewImage} />
        ))}
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  )
}

export default MyListScreen;
