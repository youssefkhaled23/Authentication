// React-Router
import { Link } from "react-router-dom";

// Redux
import { useAppSelector } from "../store/hooks";
import { Table } from "react-bootstrap";

const Home = () => {
  const { accessToken, user } = useAppSelector((state) => state.auth);

  return (
    <>
      {accessToken ? (
        <>
          <h2 className="text-white d-flex justify-content-center mb-0">{`WelcomeBack ${user?.firstName}${user?.lastName}`}</h2>
          <h4 className="text-white mt-5">Your Information</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user?.id}</td>
                <td>{user?.firstName}</td>
                <td>{user?.lastName}</td>
                <td>{user?.email}</td>
              </tr>
            </tbody>
          </Table>
        </>
      ) : (
        <>
          <h4 className="text-white d-flex justify-content-center mt-5">
            You Need To
            <Link className="mx-2 text-danger" to="login">
              Login
            </Link>
            Or
            <Link to="register" className="mx-2 text-danger">
              Register
            </Link>
            To View Your Information
          </h4>
        </>
      )}
    </>
  );
};

export default Home;
