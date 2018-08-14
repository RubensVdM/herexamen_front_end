import * as React from 'react';
import { Link } from 'react-router-dom';

const MyCharacter = (props) => (
  <Link to = {`/mycharacters/detail/${props.name}`}>
    <figure className = 'effect'>
        <img src= {`images/people/Anonymous.png`} alt="star wars character"/>
      <figcaption>
        <h3>{props.name}</h3>
        <p>Gender: {props.gender} Height: {props.height} <br/> Mass: {props.mass}</p>
      </figcaption>
    </figure>
  </Link>
);

export default MyCharacter;
