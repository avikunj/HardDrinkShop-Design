import React, { useState } from "react";
import "./productview.scss";
import Kingfrisher from "../../img/kingfisher.webp";
import { Container } from "react-bootstrap";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Bottom from "../home/bottom";

const Viewproduct = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("now your value is 0");
      setCount(0);
    }
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="Productview">
      <div className="Backbutton">
        <Link to="/" className="link">
          {" "}
          <h4>
            <ArrowBackIosIcon />
            Back
          </h4>
        </Link>
      </div>
      <div className="heart">
        <FavoriteIcon className="redheart" />
      </div>
      <div className="productpage">
        <div className="ProductImage">
          <img src={Kingfrisher} className="image" />
        </div>
        <Container className="productdetail">
          <p>Whisky Type</p>
          <h4>Red</h4>
          <p>Alcohal</p>
          <h4>18%</h4>
          <p>Volume</p>
          <h4>500ml</h4>
          <p>country</p>
          <h4>Malaysia</h4>
        </Container>
        <div className="productinformation">
          <div className="productName">
            <h2>Kingfisher</h2>
            <p>Beer</p>
          </div>
          <div className="productPrice">
            <h6>Price</h6>
            <h4>$150</h4>
          </div>
          <p>
            Alcoholic beer is likely safe for most adults when used in
            moderation (two 12-ounce glasses daily). But drinking more than this
            is possibly unsafe. Drinking higher amounts of alcoholic beer can
            cause, blackouts, drowsiness,{" "}
            <Link to="#" className="link">
              Read More
            </Link>
          </p>
          <h5>Quantity</h5>
        </div>
        <div className="IncreasePrice">
          <button type="button" onClick={increment} className="increas">
            <AddIcon />
          </button>
          <span>{count}</span>
          <button type="button" onClick={decrement} className="decreas">
            <RemoveIcon />
          </button>
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default Viewproduct;
