// Hooks
import { useState } from "react";

// Axios
import axios from "axios";

type TStatus = "idle" | "checking" | "available" | "not avaialbel" | "failed";

const useEmailAvailable = () => {
  const [emailAvailabe, setemailAvailabe] = useState<TStatus>("idle");

  const [emailEnterd, setemailEnterd] = useState<string | null>(null);

  const resetEmail = () => {
    setemailAvailabe("idle");
    setemailEnterd(null);
  };

  const checkEmail = async (email: string) => {
    setemailEnterd(email);
    setemailAvailabe("checking");
    try {
      const response = await axios.get(
        `/users?email=${email}`
      );
      if (!response.data.length) {
        setemailAvailabe("available");
      } else {
        setemailAvailabe("not avaialbel");
      }
    } catch (error) {
      setemailAvailabe("failed");
    }
  };

  return { emailAvailabe, emailEnterd, checkEmail, resetEmail };
};

export default useEmailAvailable;
