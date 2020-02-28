import Carousel from "./carousel.js";
import animation from "./amazonAnimation.js";

fetch("http://localhost:5500/json/localData.json")
  .then(function(res) {
    return res.json();
  })
  .then(function(myJson) {
    const carousel = new Carousel(myJson.carouselData);
    carousel.makeHTML(); 
    animation();
  })
 

