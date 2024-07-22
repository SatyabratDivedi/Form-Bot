import { useState } from "react";
import style from "./register.module.css";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import Ellipse2 from "./../../assets/Ellipse2.png";
import Ellipse1 from "./../../assets/Ellipse1.png";
import tringle from "./../../assets/tringle.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    console.log(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log({ email, password });
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
          <label htmlFor='email'>Email</label>
          <input type='email' placeholder='Enter your email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} className={errors.email ? "input-error" : ""} />
          {errors.email && <p className={style.error}>{errors.email}</p>}
        </div>
        <div className={style.formGroup}>
          <label htmlFor='password'>Password</label>
          <input type='password' placeholder='***********' id='password' value={password} onChange={(e) => setPassword(e.target.value)} className={errors.password ? "input-error" : ""} />
          {errors.password && <p className={style.error}>{errors.password}</p>}
        </div>
        <button type='submit' className={style.signUpButton}>
          Sign In
        </button>
        <p className={style.loginLink}>
          Don't have an account? <Link to={"/register"}>Register Now</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
