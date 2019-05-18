import React, { Component } from "react";
import Carousel from "@brainhubeu/react-carousel";
import axios from "axios";
import { Container } from "reactstrap";
import styled from "@emotion/styled";

const CarouselWrapper = styled.div`
  position: relative;
  height: 350px;

  img {
    height: 250px;
    width: 350px;
    border-radius: 3px;
  }

  div {
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
  }
`;
class RecommendationRestaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantList: []
    };
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URI}/restaurants`)
      .then(response => {
        console.log(response);

        this.setState({
          restaurantList: response.data.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { restaurantList } = this.state;
    return (
      <Container>
        <Carousel
          slidesPerPage={3}
          // arrows
          autoPlay={2000}
          animationSpeed={1000}
          infinite
        >
          {restaurantList.map((data, index) => (
            <CarouselWrapper key={index}>
              <img src={data.imageUrl} alt="restaurant" />
              <div>{data.name}</div>
            </CarouselWrapper>
          ))}
        </Carousel>
      </Container>
    );
  }
}

export default RecommendationRestaurant;
