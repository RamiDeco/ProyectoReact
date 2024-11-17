import { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {

    const [count, setCount] = useState(0);


    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">RamiDev</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Sobre Mi</Nav.Link>
                        <Nav.Link href="#features">Proyectos</Nav.Link>
                        <Nav.Link href="#pricing">Experiencia</Nav.Link>
                    </Nav>
                    <Button onClick={()=>setCount(count+1)}>{count}</Button>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;