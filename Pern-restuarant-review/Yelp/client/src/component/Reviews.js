import React from "react";
import StarRating from "./StarRating";
export default function Reviews({ reviews }) {
 
  return (
    <div className="row row-cols-3 mb-4">
      {reviews.map((review)=>{
        return(
          <div
        className="card text-white bg-primary mb-5 mr-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>{review.name}</span>
          <span>
            <StarRating rating={review.rating} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">{review.review}</p>
        </div>
      </div> 
        )
      })}
      {/* <div
        className="card text-white bg-primary mb-5 mr-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Jaon</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">Restaurant was nice</p>
        </div>
      </div> */}
    </div>
  );
}
