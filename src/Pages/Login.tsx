// Hooks
import useLogin from "../hooks/useLogin";

// Components
import Input from "../Components/Common/Form/Input";

// React-Router
import { Navigate } from "react-router-dom";

// BootStrap
import { Alert, Button, Form, Spinner } from "react-bootstrap";

const Login = () => {
  const {
    error,
    loading,
    register,
    handleSubmit,
    onSubmit,
    errors,
    searchParams,
    accessToken
  } = useLogin();

  // If Conditon to protect the route
  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="w-100 mt-5">
        <h3 className="text-white d-flex justify-content-center">Login</h3>
        <Form className="w-50 m-auto" onSubmit={handleSubmit(onSubmit)}>
          {searchParams.get("message") === "account_created" && (
            <Alert variant="success">
              Your account successfully created. Please login.
            </Alert>
          )}
          <Input
            label="Email"
            register={register}
            error={errors.email?.message}
            name="email"
          />
          <Input
            label="Password"
            type="password"
            register={register}
            error={errors.password?.message}
            name="password"
          />
          <Button type="submit">
            {loading === "pending" ? (
              <>
                <Spinner animation="border" size="sm"></Spinner> Loading...
              </>
            ) : (
              "Login"
            )}
          </Button>
          {error && <p style={{ color: "#EEE", marginTop: "10px" }}>{error}</p>}{" "}
        </Form>
      </div>
    </>
  );
};

export default Login;
