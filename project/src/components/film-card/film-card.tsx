import { Film } from '../../types/films';
import { Link } from 'react-router-dom';

type FilmCardProps = {
  film: Film;
};

function FilmCard({ film }: FilmCardProps) {
  const { name, previewImage } = film;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={'/films/' + `${film.id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
