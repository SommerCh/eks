import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { NavLink, BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Kontakt from '../pages/kontakt/kontakt';
import Forside from '../pages/forside/forside';
import Produkter from '../pages/produkter/produkter';
import Produktdetaljer from '../pages/produktdetaljer/produktdetaljer'
import Login from '../pages/login/login';
import './navbar.css';
import Baguette from '../pages/produkter/baguettes';
import Kager from '../pages/produkter/kager';
import Rugbrød from '../pages/produkter/rugbrød';
import SearchPage from './searchpage';
import Fejl404 from '../pages/fejl404/fejl404';
import Profil from '../pages/login/profil';


const NavbarBootstrap = () => {

const [searchWord, setSearchWord] = useState('');
const handleSearchWord = (e) => {setSearchWord(e.target.value)
}

return ( 
    <BrowserRouter>

    <div>
        <Navbar id="nav" expand="lg">
            <Navbar.Toggle aria - controls="" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/Kontakt">
                        </NavLink> <Nav.Link href="/"> FORSIDE </Nav.Link> <Nav.Link href="Produkter"> PRODUKTER
                        </Nav.Link>  <Navbar.Brand href="/"> bageriet </Navbar.Brand> <Nav.Link href="/Kontakt"> KONTAKT </Nav.Link> <Nav.Link href="Login"> LOGIN
                          <Form inline>
                          <FormControl type="text" value={ searchWord } onChange={
                                                        handleSearchWord } placeholder="Søg..." className="mr-sm-2" />
                         <Nav.Link href={'/SearchPage/' + searchWord }>
                                                        <FontAwesomeIcon icon={ faSearch } className="fase" />
                                                        </Nav.Link> </Form>
                                                            </Navbar.Collapse> </Navbar>
                                                                </div> <Switch>
                                                                    <Route exact path="/" component={ Forside } />
                                                                    <Route exact path="/Produktdetaljer" component={
                                                                        Produktdetaljer } />
                                                                    <Route exact path="/Produkter" component={
                                                                        Produkter } />
                                                                    <Route exact path="/Kontakt" component={ Kontakt
                                                                        } />
                                                                    <Route exact path="/Login" component={ Login }/>
                                                                    <Route exact path="/Baguette" exact component={
                                                                        Baguette } />
                                                                    <Route exact path="/Kager" exact component={ Kager
                                                                        } />
                                                                    <Route exact path="/Rugbrød" exact component={
                                                                        Rugbrød } />
                                                                    <Route exact path="/NavbarBootstrap" component={
                                                                        NavbarBootstrap }/>
                                                                    <Route exact path="/SearchPage/:searchWord"
                                                                        component={ SearchPage } />
                                                                    <Route exact path="/Profil" component={ Profil }/>
                                                                    <Route component={ Fejl404 }/>


                                                                    </Switch> </BrowserRouter> ) }
export default NavbarBootstrap