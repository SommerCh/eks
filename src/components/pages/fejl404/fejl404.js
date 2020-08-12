import React from 'react';
import './fejl404.scss';
import Fejl from './404.gif';

const Fejl404 = ({ location }) => {
    return ( 
    <div className="fejl">
    <div className="top"></div>
        <code>{location.pathname}</code>
      
        <h1 className="fejlh1">Siden findes desværre ikke</h1>
        <img src={Fejl} alt="fejl"/>
        </div>
     );
}
 
export default Fejl404;