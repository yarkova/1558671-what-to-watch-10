import { useState, Fragment, ChangeEvent } from "react";
import { Film } from "../../types/films";

type FormAddReviewProps = {
  // film: Film;
};

function FormAddReview({}: FormAddReviewProps) {
  const MAX_RATING = 10;

  const [formData, setFormData] = useState({
    rating: 1,
    reviewText: "",
  });

  function formChangeHandler(
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }

  // console.log("formData?", formData);

  return (
    <form className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {Array.from({ length: MAX_RATING }, (_, i) => {
            return (
              <Fragment key={i}>
                <input
                  type="radio"
                  name="rating"
                  className="rating__input"
                  id={`star-${i + 1}`}
                  value={i + 1}
                  checked={formData.rating === i + 1}
                  onChange={formChangeHandler}
                />
                <label className="rating__label" htmlFor={`star-${i + 1}`}>
                  Rating {i + 1}
                </label>
              </Fragment>
            );
          })}
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="reviewText"
          id="review-text"
          placeholder="Review text"
          value={formData.reviewText}
          onChange={formChangeHandler}
        ></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormAddReview;
