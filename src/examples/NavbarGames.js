import {BrowserRouter, Route} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import '../sass/Topbar.sass'
import Switch from "react-bootstrap/Switch";
import ColouredSquare from "./ColouredSquare";
import NaughtsAndCrosses from "./NaughtsAndCrosses";

const NavbarGames =()=>{

    return (
        <BrowserRouter>
            <Navbar bg={'black'}>
                <LinkContainer to={'/coloured-square'}>
                    <Nav.Link className={'game_font'}>A Colour Changing Square</Nav.Link>
                </LinkContainer>
                <LinkContainer to={'/naughts-and-crosses'}>
                    <Nav.Link className={'game_font'}>Naughts and Crosses</Nav.Link>
                </LinkContainer>
            </Navbar>
            <Switch>
                <Route path={'/coloured-square'}>
                    <ColouredSquare/>
                </Route>
                <Route path={'/naughts-and-crosses'}>
                    <NaughtsAndCrosses/>
                </Route>
                <Route exact path={'/'}>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default NavbarGames;