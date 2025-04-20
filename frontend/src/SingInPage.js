import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
//import { FcGoogle } from "react-icons/fc";
import "./SignInPage.css";

// Firebase config
//import { auth, provider } from "../firebase"; // You'll create this file
import { signInWithPopup } from "firebase/auth";

export default function SignInPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef(null);
  const from = location.state?.from?.pathname || "/booking";

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    emailRef.current?.focus();
  }, [isLogin]);

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!validateEmail(trimmedEmail)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!trimmedPassword || trimmedPassword.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!isLogin) {
      if (!firstName.trim()) newErrors.firstName = "First name is required";
      if (!lastName.trim()) newErrors.lastName = "Last name is required";
      if (!confirmPassword.trim()) newErrors.confirmPassword = "Please confirm your password";
      if (trimmedPassword !== confirmPassword.trim()) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const userData = isLogin
      ? { email: trimmedEmail, password: trimmedPassword }
      : {
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: trimmedEmail,
          password: trimmedPassword,
        };

    console.log(isLogin ? "Login data:" : "Sign up data:", userData);
    alert(isLogin ? "Signed in successfully!" : "Account created successfully!");
    navigate(from);
  };

  const handleCancel = () => {
    navigate(from);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  // const handleGoogleSignIn = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const name = result.user.displayName;
  //       const email = result.user.email;
  //       console.log("Google Sign-In success:", { name, email });
  //       alert("Signed in with Google!");
  //       navigate(from);
  //     })
  //     .catch((error) => {
  //       console.error("Google Sign-In error:", error);
  //       alert("Google Sign-In failed. Try again.");
  //     });
  // };

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
                ref={emailRef}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? "error" : ""}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group password-group">
              <label htmlFor="password">Password:</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

          {/* <button type="button" className="google-button" onClick={handleGoogleSignIn}>
            <FcGoogle size={20} /> Continue with Google
          </button> */}
        </form>
      </div>
    </div>
  );
}


