// React-Hooks
import { useEffect } from "react";

// React-Hook-Form
import { useForm, SubmitHandler } from "react-hook-form";
import { signInSchema, signInType } from "../Validtion/loginValidtion";
import { zodResolver } from "@hookform/resolvers/zod";

// Redux
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actAuthLogin, resetUi } from "../store/auth/authSlice";

// React_Router
import { useNavigate, useSearchParams } from "react-router-dom";

const useLogin = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { error, loading ,accessToken } = useAppSelector((state) => state.auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<signInType>({
    mode: "onBlur",
    resolver: zodResolver(signInSchema),
  });

  const onSubmit: SubmitHandler<signInType> = (data) => {
    if (searchParams.get("message") === "account_created") {
      setSearchParams("");
    }
    dispatch(actAuthLogin(data))
      .unwrap()
      .then(() => navigate("/"));
  };

  useEffect(() => {
    return () => {
      dispatch(resetUi());
    };
  }, [dispatch]);

  return {
    error,
    loading,
    register,
    handleSubmit,
    onSubmit,
    errors,
    accessToken,
    searchParams,
  };
};

export default useLogin;
