import * as React from 'react';
import * as starwarsService from '../../services/starwars.service';

const Loading = (props) => (
  <section>
    <div className="wrapper">
      <h2>Loading page</h2>
        <div>
          <div className="loading_BB8">
            <img src = 'images/BB8_body.png' className = 'BB8_body'/>
            <img src = 'images/BB8_head.png' className = 'BB8_head'/>
          </div>
          
            <h2>Characters are loading...</h2>

        </div>
    </div>
  </section>
);

export default Loading;
