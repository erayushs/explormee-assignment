import InputBox from "../components/InputBox";
import { useState } from "react";
import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: "",
  });

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = (name: string, value: string | boolean) => {
    let message = "";

    switch (name) {
      case "fullName":
        if (!value) message = "Full Name is required";
        break;

      case "email":
        if (!value) message = "Email is required";
        else if (typeof value === "string" && !validateEmail(value))
          message = "Please enter a valid email";
        break;

      case "password":
        if (!value) message = "Password is required";
        else if (typeof value === "string" && value.length < 6)
          message = "Password must be at least 6 characters";
        break;

      case "confirmPassword":
        if (!value) message = "Confirm Password is required";
        else if (typeof value === "string" && value !== formData.password)
          message = "Passwords do not match";
        break;

      case "acceptTerms":
        if (!value) message = "You must accept the terms";
        break;

      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: fieldValue }));

    validateForm(name, fieldValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // validate all fields before submission
    Object.entries(formData).forEach(([key, value]) =>
      validateForm(key, value)
    );

    const hasErrors = Object.values(errors).some((err) => err !== "");
    if (!hasErrors) {
      localStorage.setItem(
        "user",
        JSON.stringify({ name: formData.fullName, email: formData.email })
      );
      console.log("Form Data:", formData);

      navigate("/confirmation");
    }
  };

  const isDisabled =
    !formData.acceptTerms ||
    Object.values(errors).some((err) => err !== "") ||
    !formData.fullName ||
    !formData.email ||
    !formData.password ||
    !formData.confirmPassword;

  return (
    <div className="bg-gradient-to-b from-transparent via-white to-yellow-300 min-h-screen flex items-center justify-center">
      <div className="flex h-screen w-screen items-center justify-center font-rubik">
        <div className="lg:w-[500px] w-full h-full ">
          <div className="flex flex-col p-[20px] lg:py-0 lg:bg-white lg:h-[75%] lg:mt-16 justify-between lg:border lg:px-10 lg:rounded-2xl lg:justify-around">
            <form action="submit" onSubmit={handleSubmit}>
              <div>
                <InputBox
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  label="Full Name"
                  required
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
                <InputBox
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  label="Email Address"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
                <InputBox
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  label="Password"
                  required
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
                <InputBox
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  label="Confirm Password"
                  required
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword}
                  </p>
                )}
                <div className="flex gap-2 mt-8">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                  />
                  <label htmlFor="agree">
                    I agree to the terms and conditions
                  </label>
                </div>
              </div>

              <button
                disabled={isDisabled}
                className={`mb-4  text-white  mt-10 lg:mt-10 w-full h-[50px] rounded-lg font-semibold cursor-pointer ${
                  isDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-[#000B6B]"
                }`}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
