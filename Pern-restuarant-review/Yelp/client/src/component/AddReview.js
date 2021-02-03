import React, { useState } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";

export default function AddReview() {
  //useLocation from react-router-dom gives us access to our all url but is not the best in this case
   const location = useLocation();
  const { id } = useParams();
  const history = useHistory()
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("Rating");

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    try {
      await RestaurantFinder.post(`/${id}/addReview`, {
        name,
        review,
        rating,
      });
      //here this code will go back home and come back to refresh to det the data and it is quick
      history.push("/")
      history.push(location.pathname);
      setName("")
      setReview("")
      setRating("Rating")
    } catch (error) {}
  };
  return (
    <div className="mb-2">
      <form action="" onSubmit={handleSubmitReview}>
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name" className="">
              Name
            </label>
            <input
              id="name"
              className="form-control"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              id="rating"
              className="custom-select"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Review">Review</label>
          <textarea
            id="Review"
            className="form-control"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
