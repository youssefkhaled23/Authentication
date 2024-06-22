// Redux
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logOut } from "../../store/auth/authSlice";

// React-Router
import { NavLink } from "react-router-dom";

// BootStrap
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const dispatch = useAppDispatch();
  const { accessToken, user } = useAppSelector((state) => state.auth);

  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="text-white fs-3">
            Validtion Task
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-white">
              {accessToken ? (
                <>
                  <Nav.Link as={NavLink} to="/" className="text-white">
                    {`Username: ${user?.firstName}`}
                  </Nav.Link>
                  <h4 className="mb-0 mt-1">/</h4>
                  <Nav.Link
                    className="text-danger"
                    onClick={() => dispatch(logOut())}
                  >
                    LogOut
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={NavLink} to="login" className="text-white">
                    Login
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="register" className="text-white">
                    Register
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
