// React-Router
import { Outlet } from "react-router-dom";

// Components
import Header from "../Components/Navbar/Header";

// BootStarp
import { Container } from "react-bootstrap";

const Layout = () => {
  return (
    <div>
      <Container>
        {/* NavBar */}
        <Header />
        {/* Outlet */}
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
