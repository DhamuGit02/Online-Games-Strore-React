import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoExitOutline } from 'react-icons/io5'
import { HiUser } from 'react-icons/hi2'
import GameVaultLogo from './GameVaultLogo';

function NavbarComponent({ setCategory, username }) {
    return (
        <Navbar bg='dark' expand='lg' className="mb-3" variant='dark'>
            <Container fluid>
                <Navbar.Brand href="/mainpage" style={{marginLeft:200}}>
                    <GameVaultLogo />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={'offcanvasNavbar-expand'} />
                <Navbar.Offcanvas
                    aria-labelledby={`offcanvasNavbarLabel-expand`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>
                            <h3>PixelBay</h3>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Navbar.Text style={{right:0}}>
                            <span><HiUser style={{color:'white'}} size={30}/></span>
                            <span style={{marginLeft:10}}>{username}</span>
                        </Navbar.Text>
                        <hr />
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <NavDropdown
                                title="Genre"
                            >
                                <NavDropdown.Item href="#" onClick={(e) => setCategory(e.target.textContent)}>Action Adventure</NavDropdown.Item>
                                <NavDropdown.Item href="#" onClick={(e) => setCategory(e.target.textContent)}>Adventure</NavDropdown.Item>
                                <NavDropdown.Item href="#" onClick={(e) => setCategory(e.target.textContent)}>Racing</NavDropdown.Item>
                                <NavDropdown.Item href="#" onClick={(e) => setCategory(e.target.textContent)}>Action Shooter</NavDropdown.Item>
                                <NavDropdown.Item href="#" onClick={(e) => setCategory(e.target.textContent)}>Horror</NavDropdown.Item>
                                <NavDropdown.Item href="#" onClick={(e) => setCategory(e.target.textContent)}>Under 18 Games</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href='/compatibilitypage'>Compatibile Games</Nav.Link>
                            <Nav.Link href="#action1" onClick={(e) => setCategory(e.target.textContent)}>Discover</Nav.Link>
                            <Nav.Link href="/" onClick={() => localStorage.clear()}>
                                <IoExitOutline />
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent