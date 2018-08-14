import * as React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
  <div>
    <header>
      <span className = 'logo'>
        <img src = '/images/Starwars-logo.png' alt = 'logo star wars'/>
      </span>
    </header>
    <nav>
      <ul className = 'cfx'>
        <div className = 'leftNav'>
          <li><Link to = '/characters'>Characters</Link></li>
          <li><Link to = '/mycharacters'>My Characters</Link></li>
          <li><Link to = '/characters/add'>Add Character</Link></li>
          <li><Link to = '/loadingpage'>Loading Page</Link></li>
         
        </div>
      </ul>
    </nav>
  </div>
);

export default Header;
