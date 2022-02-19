import React from "react";
import { useHistory } from "react-router-dom";

//makes flipping through cards and into next cards possible
//lists the study view data
export default function StudyList({
  cards,
  card,
  index,
  flipped,
  setFlipped,
  setIndex,
}) {
  const history = useHistory();
  console.log(index);

  const handleFlip = () => {
    setFlipped(true);
  };

  const handleNext = () => {
    if (cards.length === index) {
      setIndex(index);
      const result = window.confirm(
        "Restart cards? \n \n Click 'cancel' to return to home page."
      );
      if (result) {
        setIndex(0);
        setFlipped(false);
      } else {
        history.push("/");
      }
    } else {
      setIndex(index);
      setFlipped(false);
    }
  };

  return !flipped ? (
    <div>
      <div className="card w-75 p-3">
        <div className="card-body">
          <h5 className="card-title font-weight-bold">
            Card {index} of {cards.length}
          </h5>
          <p className="card-text">{card.front}</p>
          <button
            type="button"
            className="btn btn-secondary glyphicon glyphicon-sort"
            style={{ margin: "3px" }}
            onClick={handleFlip}
          >
            Flip
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className="card w-75 p-3">
        <div className="card-body">
          <h5 className="card-title font-weight-bold">
            Card {index} of {cards.length}
          </h5>
          <p className="card-text">{card.back}</p>
          <button
            type="button"
            className="btn btn-secondary glyphicon glyphicon-sort"
            style={{ margin: "3px" }}
            onClick={() => setFlipped(false)}
          >
            Flip
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={{ margin: "3px" }}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
