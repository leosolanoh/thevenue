import React from 'react'
import Carrousel from './Carrousel';
import Countdown from './Countdown.js';


const Featured = () => {
  return (
    <div style={{position:'relative'}} >      
        <Carrousel/>

          <div className="artist_name">
              <div className="wrapper">
                <div className='f1_title'>Formula 1</div>
              </div>
          </div>

      <Countdown />
        
    </div>
  );
};

export default Featured
