import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SignInPage.css";

export default function SignInPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine where to redirect after successful login/sign-up
  const from = location.state?.from?.pathname || "/booking";

  // State for managing form inputs and errors
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    const newErrors = {};

    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    if (!isLogin) {
      if (!firstName) newErrors.firstName = "First name is required";
      if (!lastName) newErrors.lastName = "Last name is required";
      if (!confirmPassword) newErrors.confirmPassword = "Please confirm your password";
      if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Example data submission (replace this with actual API call)
    const userData = isLogin
      ? { email, password }
      : { firstName, lastName, email, password };

    console.log(isLogin ? "Login data:" : "Sign up data:", userData);

    // Show success message and navigate
    alert(isLogin ? "Login successful!" : "Sign up successful!");
    navigate(from);
  };

  // Handle cancel button click
  const handleCancel = () => {
    navigate(from);
  };

  // Toggle between login and sign-up forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrors({}); // Clear errors when toggling forms
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <h1>{isLogin ? "Sign In" : "Create Account"}</h1>
        <p className="signin-subtitle">
          {isLogin
            ? "Enter your credentials to access your account at MINERVA."
            : "Fill out the form below to create your account at MINERVA."}
        </p>

        <form onSubmit={handleSubmit} className="signin-form">
          <div className="form-section">
            {!isLogin && (
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={errors.firstName ? "error" : ""}
                  />
                  {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={errors.lastName ? "error" : ""}
                  />
                  {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? "error" : ""}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={errors.password ? "error" : ""}
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
              {isLogin ? "Don't have an account?" : "Already have an account?"}
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
        </form>
      </div>
    </div>
  );
}
