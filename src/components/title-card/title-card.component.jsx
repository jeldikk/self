import React from "react";

import "./title-card.styles.scss";

const TitleCard = () => {
  return (
    <div className="title-card text-center">
      <div className="title-name">
        <span className="initial">J</span>{" "}
        <span className="firstName">Kamal</span>{" "}
        <span className="lastName">Kumar</span>
      </div>
      <p className="caption">
        An Engineer by Profession and Web Developer by Passion
      </p>
    </div>
  );
};

export default TitleCard;
