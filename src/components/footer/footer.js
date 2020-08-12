    import React from 'react';
    import './footer.css';
    import Pil from './chevron.png';
    import {BrowserRouter} from 'react-router-dom';
    import 'bootstrap/dist/css/bootstrap.min.css';
    
    const Footer = () => {
        return (
            <BrowserRouter>
            <div className="footer">
            <a title="Til toppen" href="#App"><img className="pil" src={Pil} alt=""/></a>
                <h1>Bageriet</h1>
                
                <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer.</p>
                <p className="copy">Copyright © 2017 bageriet aps</p>
            </div>
            </BrowserRouter>
        );
    };
    
    export default Footer;