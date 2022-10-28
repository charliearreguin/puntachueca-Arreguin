import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';




const MiNavbar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Punta Chueca</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#pricing">Menú</Nav.Link>
                        <Nav.Link href="#features">Servicio</Nav.Link>
                        <div>
                            <CartWidget/>
                        </div>
                        
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default MiNavbar