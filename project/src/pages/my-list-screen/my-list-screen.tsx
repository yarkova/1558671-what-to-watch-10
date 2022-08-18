import { Link } from 'react-router-dom';
import FilmCard from '../../components/film-card/film-card';
import Logo from '../../components/logo/logo';
import { AppRoute } from '../../const';
import { Films } from '../../types/films';

const filmCardCount = 9;

type MyListScreenProps = {
  films: Films;
};

function MyListScreen({ films }: MyListScreenProps) {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Logo light={false} />
        </div>

        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">{filmCardCount}</span>
        </h1>
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

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {films.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>
      </section>

      <footer className="page-footer">
        <Logo light />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyListScreen;
