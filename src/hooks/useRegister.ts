// ReactHooksm
import { useEffect } from "react";

// React-Use-Form
import { useForm, SubmitHandler } from "react-hook-form";
import { signUpSchema, signUpType } from "../Validtion/registerValidtion";
import { zodResolver } from "@hookform/resolvers/zod";

// Email Checker
import useEmailAvailable from "../hooks/useEmailAvailable";

// Redux
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actAuthRegister, resetUi } from "../store/auth/authSlice";

// React_Router
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { error, loading, accessToken } = useAppSelector((state) => state.auth);

  const { emailAvailabe, emailEnterd, checkEmail, resetEmail } =
    useEmailAvailable();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getFieldState,
    trigger,
  } = useForm<signUpType>({
    mode: "onBlur",
    resolver: zodResolver(signUpSchema),
  });

  const handleSubmitForm: SubmitHandler<signUpType> = (data) => {
    const { firstName, lastName, email, password } = data;
    dispatch(actAuthRegister({ firstName, lastName, email, password }))
      .unwrap()
      .then(() => navigate("/login?message=account_created"));
  };

  const emailHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    await trigger("email");
    const value = e.target.value;
    const { isDirty, invalid } = getFieldState("email");
    if (isDirty && !invalid && emailEnterd !== value) {
      checkEmail(value);
    }
    if (emailEnterd && isDirty && invalid) {
      resetEmail();
    }
  };

  useEffect(() => {
    return () => {
      dispatch(resetUi());
    };
  }, [dispatch]);

  return {
    error,
    loading,
    accessToken,
    emailAvailabe,
    register,
    handleSubmit,
    errors,
    handleSubmitForm,
    emailHandler,
  };
};

export default useRegister;
