import React, { useState, useEffect } from "react";
import axios from "axios";
import SupportButton from "./supportFlow";
import Image from "react-bootstrap/Image";

export const Giphy: React.FunctionComponent = () => {
  const [giphy, setGiphy] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://coffee.alexflipnote.dev/random.json?fbclid=IwAR2FKFn5oty4UzpGvdVVEljHeCdjfPlCgYemKIAu2eYd66HtrPfC2FmX_6M"
        )
        .then(res => setGiphy(res.data.file));
    };
    getData();
  }, [])

  return (
    <div className="giphy-box">
      <h2 className="giphy-header">This is a random coffee image!</h2>
      {giphy && (
        <Image
          className="img-giphy"
          src={giphy}
          alt="random coffe image"
          roundedCircle
        />
      )}
      <SupportButton />
    </div>
  );
};

export default Giphy;
