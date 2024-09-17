import { useState } from "react";
import { validateEmail, validatePassword } from "../utils/validation";

export default function useForm(inputValues) {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
    // Validation logic for email
if (name === "email") {
  if (!validateEmail(value)) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: "Invalid email format",
    }));
  } else {
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: null, // Clear the error
    }));
  }
}

// Do the same for password validation
if (name === "password") {
  if (!validatePassword(value)) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: "Password must be at least 8 characters long",
    }));
  } else {
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: null, // Clear the error
    }));
  }
}
  };
  return { values, handleChange, setValues, errors };
}
