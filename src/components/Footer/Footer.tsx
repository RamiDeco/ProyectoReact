import { Container, Navbar } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Footer = () => {

    const navigate = useNavigate();

  return (
    <Navbar style={{height:"200px", background:"black"}} expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={()=>navigate("/")}>Footer</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Footer