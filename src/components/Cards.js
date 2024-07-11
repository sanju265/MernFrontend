import React from "react";
import Card from "./Card";

import image1 from "../assets/dogs.jpg";
import image2 from '../assets/duck.jpg';
import image3 from '../assets/horse.jpeg';
import image4 from '../assets/shirt.jpeg';
import image5 from '../assets/shoes.jpg';
import image6 from '../assets/hat.jpg';
import image7 from '../assets/bread.jpg';
import image8 from '../assets/water.jpeg';
import image9 from '../assets/rice.jpg';
const cards = [
  {
    id: 1,
    title: "Perras (F) / Perros (M)",
    image: image1,
    
  },
  {
    id: 2,
    title: "Pata (F) / Pato (M)",
    image: image2,
    
  },
  {
    id: 3,
    title: "Caballo",
    image: image3,
    
  },
  {
    id: 4,
    title: "Camisa",
    image: image4,
  },
  {
    id: 5,
    title: "Zapatos",
    image: image5,
    
  },
  {
    id: 6,
    title: "Sombero",
    image: image6,
    
  },
  {
    id: 7,
    title: "Pan",
    image: image7,

  },
  {
    id: 8,
    title: "agua",
    image: image8,
    
  },
  {
    id: 9,
    title: "Arroz",
    image: image9,
  },
];

function Cards() {
  return (
    <div>
        
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Cards;