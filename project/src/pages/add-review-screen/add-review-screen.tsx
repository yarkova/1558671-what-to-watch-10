import { Link } from 'react-router-dom';
import FormAddReview from '../../components/add-review-form/add-review-form';
import Logo from '../../components/logo/logo';
import { AppRoute } from '../../const';
import { FilmsReviews } from '../../types/reviews';

type AddReviewScreenProps = {
  filmsReviews: FilmsReviews;
};

function AddReviewScreen({ filmsReviews }: AddReviewScreenProps) {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Logo light={false} />
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">
                  The Grand Budapest Hotel
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

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

        <div className="film-card__poster film-card__poster--small">
          <img
            src="img/the-grand-budapest-hotel-poster.jpg"
            alt="The Grand Budapest Hotel poster"
            width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <FormAddReview /* film={film} */ />
      </div>
    </section>
  );
}

export default AddReviewScreen;
