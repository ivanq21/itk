import React from 'react';
import preloader from '../../../assets/loader.svg';
let Preloader = (props) => {
  return <div>
          <img className="preloader" src={preloader} alt=""/>
        </div>
}

export default Preloader;