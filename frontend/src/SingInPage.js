import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../src/axiousInstance";
import "./SignInPage.css";

export default function SignInPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/booking";
  const emailRef = useRef(null);

  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    emailRef.current?.focus();
  }, [isLogin]);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    const { firstName, lastName, email, password, confirmPassword } = form;

    if (!validateEmail(email.trim())) newErrors.email = "Enter a valid email address";
    if (password.trim().length < 6) newErrors.password = "Password must be at least 6 characters";

    if (!isLogin) {
      if (!firstName.trim()) newErrors.firstName = "First name is required";
      if (!lastName.trim()) newErrors.lastName = "Last name is required";
      if (!confirmPassword.trim()) newErrors.confirmPassword = "Please confirm your password";
      if (password.trim() !== confirmPassword.trim()) newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const userData = isLogin
        ? { email: form.email.trim(), password: form.password.trim() }
        : {
          firstname: form.firstName.trim(),
          lastname: form.lastName.trim(),
          email: form.email.trim(),
          password: form.password.trim()
        };

    try {
      const endpoint = isLogin
          ? "http://localhost:8080/api/auth/login"
          : "http://localhost:8080/api/auth/register";

      const response = await axios.post(endpoint, userData);
      console.log("Success:", response.data);

      // Save user data to localStorage after successful login/registration
      localStorage.setItem("user", JSON.stringify(response.data));

      alert(isLogin ? "Logged in successfully!" : "Account created successfully!");
      navigate(from);
    } catch (error) {
      const message = error.response?.data?.message || "Authentication failed.";
      console.error("Auth Error:", message);
      alert(message);
    }
  };

  const handleCancel = () => navigate(from);

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
    setErrors({});
  };

  return (
      <div className="signin-page">
        <div className="signin-container">
          <h1>{isLogin ? "Sign In" : "Create Account"}</h1>
          <p className="signin-subtitle">
            {isLogin
                ? "Access your MINERVA account below."
                : "Join MINERVA by filling out the form below."}
          </p>

          <form onSubmit={handleSubmit} className="signin-form">
            <div className="form-section">
              {!isLogin && (
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name:</label>
                      <input
                          id="firstName"
                          type="text"
                          value={form.firstName}
                          onChange={handleChange}
                          className={errors.firstName ? "error" : ""}
                      />
                      {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="lastName">Last Name:</label>
                      <input
                          id="lastName"
                          type="text"
                          value={form.lastName}
                          onChange={handleChange}
                          className={errors.lastName ? "error" : ""}
                      />
                      {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                    </div>
                  </div>
              )}

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    ref={emailRef}
                    value={form.email}
                    onChange={handleChange}
                    className={errors.email ? "error" : ""}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group password-group">
                <label htmlFor="password">Password:</label>
                <div className="password-wrapper">
                  <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      onChange={handleChange}
                      className={errors.password ? "error" : ""}
                  />
                  <button
                      type="button"
                      className="toggle-password"
                      onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>

              {!isLogin && (
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        className={errors.confirmPassword ? "error" : ""}
                    />
                    {errors.confirmPassword && (
                        <span className="error-message">{errors.confirmPassword}</span>
                    )}
                  </div>
              )}
            </div>

            <div className="toggle-form">
              <p>
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <button type="button" onClick={toggleForm} className="toggle-button">
                  {isLogin ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-button" onClick={handleCancel}>
                Cancel
              </button>
              <button type="submit" className="confirm-button">
                {isLogin ? "Sign In" : "Create Account"}
              </button>
            </div>

            <div className="or-divider">OR</div>

            {/* Uncomment and add Google sign-in if needed */}
            {/* <button type="button" className="google-button" onClick={handleGoogleSignIn}>
            <FcGoogle size={20} /> Continue with Google
          </button> */}
          </form>
        </div>
      </div>
  );
}
