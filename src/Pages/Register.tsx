// Hooks
import useRegister from "../hooks/useRegister";

// Components
import Input from "../Components/Common/Form/Input";

// React-Router
import { Navigate } from "react-router-dom";

// BootStrap
import { Button, Form, Spinner } from "react-bootstrap";

const Register = () => {
  const {
    error,
    loading,
    accessToken,
    emailAvailabe,
    register,
    handleSubmit,
    errors,
    handleSubmitForm,
    emailHandler,
  } = useRegister();

  // If Conditon to protect the route
  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="w-100 mt-5">
        <h3 className="text-white d-flex justify-content-center">Register</h3>
        <Form className="w-50 m-auto" onSubmit={handleSubmit(handleSubmitForm)}>
          <Input
            label="firstName"
            type="text"
            register={register}
            error={errors.firstName?.message}
            name="firstName"
          />
          <Input
            label="lastName"
            type="text"
            register={register}
            error={errors.lastName?.message}
            name="lastName"
          />
          <Input
            label="Email"
            type="email"
            register={register}
            error={
              errors.email?.message
                ? errors.email?.message
                : emailAvailabe === "not avaialbel"
                ? "This email already in use."
                : emailAvailabe === "failed"
                ? "Error from server"
                : ""
            }
            name="email"
            onBlur={emailHandler}
            formText={
              emailAvailabe === "checking"
                ? "we're currently checking the availability of this email address. Please wait... "
                : ""
            }
            success={
              emailAvailabe === "available"
                ? "This email is available for use"
                : ""
            }
            disabled={emailAvailabe === "checking" ? true : false}
          />
          <Input
            label="Password"
            type="password"
            register={register}
            error={errors.password?.message}
            name="password"
          />
          <Input
            label="RepeatPassword"
            type="password"
            register={register}
            error={errors.repeatPassword?.message}
            name="repeatPassword"
          />
          <Button
            type="submit"
            disabled={emailAvailabe === "checking" ? true : false}
          >
            {loading === "pending" ? (
              <>
                <Spinner animation="border" size="sm"></Spinner> Loading...
              </>
            ) : (
              "Register"
            )}
          </Button>
          {error && <p style={{ color: "#EEE", marginTop: "10px" }}>{error}</p>}
        </Form>
      </div>
    </>
  );
};

export default Register;
