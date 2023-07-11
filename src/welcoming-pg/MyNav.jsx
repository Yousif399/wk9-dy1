import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { Navbar } from "react-bootstrap"
export function MyNav() {
    return (
        <>
            <div>
                <h4>HERE</h4>
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Link className="navbar-brand" to="/">My 1st React</Link>
                        <Nav className="me-auto">
                            <Link className="navbar-brand" to="/wlcm">Welcome</Link>
                            <Link className="navbar-brand" to="/Bye">Bye</Link>
                           
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default MyNav;



