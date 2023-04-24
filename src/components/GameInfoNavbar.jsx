import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineLanguage } from 'react-icons/md'
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoExitOutline } from 'react-icons/io5'
import GameVaultLogo from './GameVaultLogo';
import { HiUser } from 'react-icons/hi2'

function GameInfoNavbar({ username }) {
    return (
        <Navbar bg='dark' expand='lg' className="mb-3" variant='dark'>
            <Container fluid>
                <Navbar.Brand href="/mainpage" style={{ marginLeft: 200 }}>
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
                        <Navbar.Text style={{ right: 0 }}>
                            <span><HiUser style={{ color: 'white' }} size={30} /></span>
                            <span style={{ marginLeft: 10 }}>{username}</span>
                        </Navbar.Text>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href='/mainpage'>
                                <MdOutlineLanguage /> Browse
                            </Nav.Link>
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

export default GameInfoNavbar