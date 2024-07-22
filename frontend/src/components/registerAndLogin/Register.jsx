import { useState } from "react";
import style from "./register.module.css";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io"; 
import Ellipse2 from "./../../assets/Ellipse2.png";
import Ellipse1 from "./../../assets/Ellipse1.png";
import tringle from "./../../assets/tringle.png";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords must match";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    console.log(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log({ username, email, password, confirmPassword });
    }
  };

  return (
    <div className={style.signUpFormContainer}>
       <IoMdArrowBack size={28} className={style.backIcon} onClick={() => navigate(-1)} />
       <img className={style.tringleImg} src={tringle} alt='' />
      <img className={style.Ellipse1} src={Ellipse1} alt='' />
      <img className={style.Ellipse2} src={Ellipse2} alt='' />
      <form onSubmit={handleSubmit} className={style.signUpForm}>
        <div className={style.formGroup}>
          <label htmlFor='username'>Username</label>
          <input type='text' placeholder="Enter a username" id='username' value={username} onChange={(e) => setUsername(e.target.value)} className={errors.username ? "input-error" : ""} />
          {errors.username && <p className={style.error}>{errors.username}</p>}
        </div>
        <div className={style.formGroup}>
          <label htmlFor='email'>Email</label>
          <input type='email' placeholder="Enter your email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} className={errors.email ? "input-error" : ""} />
          {errors.email && <p className={style.error}>{errors.email}</p>}
        </div>
        <div className={style.formGroup}>
          <label htmlFor='password'>Password</label>
          <input type='password' placeholder="***********" id='password' value={password} onChange={(e) => setPassword(e.target.value)} className={errors.password ? "input-error" : ""} />
          {errors.password && <p className={style.error}>{errors.password}</p>}
        </div>
        <div className={style.formGroup}>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input type='password' placeholder="***********" id='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={errors.confirmPassword ? "input-error" : ""} />
          {errors.confirmPassword && <p className={style.error}>{errors.confirmPassword}</p>}
        </div>
        <button type='submit' className={style.signUpButton}>
          Sign Up
        </button>
        <p className={style.loginLink}>
          Already have an account? <Link to={'/login'}>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
