import { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand onClick={()=> navigate("/")}>RamiDev</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=> navigate("/")}>Sobre Mi</Nav.Link>
                        <Nav.Link onClick={()=> navigate("/proyectos")}>Proyectos</Nav.Link>
                        <Nav.Link onClick={()=> navigate("/experiencia")}>Experiencia</Nav.Link>
                    </Nav>
                    <Button onClick={()=>setCount(count+1)}>{count}</Button>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;