import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RestaurantCard = props => (
  <Card>
    <CardImg top width="100%" src={props.image} alt="Restaurant Image" />
    <CardBody>
      <div>{props.name}</div>
      <div>
        {[...Array(props.star).keys()].map((_, index) => (
          <FontAwesomeIcon
            icon={faStar}
            color="gold"
            key={`star-gold-${index}`}
          />
        ))}
        {[...Array(5 - props.star).keys()].map((_, index) => (
          <FontAwesomeIcon
            icon={faStar}
            color="#ccc"
            key={`star-gray-${index}`}
          />
        ))}
      </div>
    </CardBody>
  </Card>
);

export default RestaurantCard;
