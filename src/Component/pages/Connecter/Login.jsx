import React, { useState } from 'react'
// import welcomeBg from "../../../assets/Frame.svg"
import logo from "../../../assets/app-logo.svg"
import profile from "../../../assets/Profile.svg"
import profileB from "../../../assets/ProfileB.svg"
import hide from "../../../assets/Hide.svg"
import hideB from "../../../assets/HideB.svg"
import lock from "../../../assets/Lock.svg"
import lockB from "../../../assets/LockB.svg"
import arrow from "../../../assets/Arrow - Left.svg"
// import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
// import { LoginUser } from '../../../redux/actions/AuthActions'
import { toast } from 'react-toastify';

function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loader, setLoader] = useState(false);
    const [value, setValue] = useState({
        login: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const [inputState, setInputState] = useState({
        loginFocused: false,
        passwordFocused: false,
        loginTyping: false,
        passwordTyping: false
    });
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValue((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        setInputState((prevState) => ({
            ...prevState,
            [`${name}Typing`]: value.length > 0,
        }));
    };
    const handleFocus = (e) => {
        const { name } = e.target;

        setInputState((prevState) => ({
            ...prevState,
            [`${name}Focused`]: true,
        }));
    };

    const handleBlur = (e) => {
        const { name } = e.target;

        setInputState((prevState) => ({
            ...prevState,
            [`${name}Focused`]: false,
            [`${name}Typing`]: false,
        }));
    };


    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!value.login) {
            newErrors.login = "L'email est requis";
        } else if (!emailRegex.test(value.login)) {
            newErrors.login = "L'email n'est pas valide";
        }

        if (!value.password) {
            newErrors.password = "Le mot de passe est requis";
        } else if (value.password.length < 6) {
            newErrors.password = "Le mot de passe doit comporter au moins 6 caractères";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onFinish = (e) => {
        e.preventDefault();
        if (validate()) {
            setLoader(true);
            navigate("/home")
            // const formData = new FormData();
            // Object.keys(value).forEach((key) => {
            //     formData.append(key, value[key]);
            // });
            // dispatch(LoginUser(formData));
            toast.success('success !', { theme: 'light' });

        } else {
            setLoader(false);
            toast.error('Failed !', { theme: 'light' });
        }
    };

    return (
        <div className='login-container'>
            <div className="position-relative welcome-container">
                <img src={arrow} alt="profile" className='arrow-left position-absolute' onClick={() => navigate("/")} />
                {/* <img src={welcomeBg} alt="" className="w-100 welcome-bg" /> */}
                <h1 className="welcome-text position-absolute">Bienvenue</h1>
            </div>
            <div className="signup-container flex-Column align-items-center gap-24">
                <img src={logo} alt="" />
                <h3 className='title-signup'>Création de compte</h3>
                <form className='gap-20 flex-Column align-items-center w-100'
                    onSubmit={onFinish}>
                    <div className='flex-Column w-100'>
                        <div className={`input-group w-100 flex-row align-items-center ${inputState.loginFocused ? 'input-active' : ''}`}>
                            <div className="input-icon-left">
                                <img src={inputState.loginTyping ? profileB : profile} alt="profile" className='icon-input' />
                            </div>
                            <input
                                type="email"
                                name="login"
                                placeholder="Email"
                                className="input-field"
                                onChange={handleChange}
                                value={value.login}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </div>
                        {errors.login && <span className="error-message">{errors.login}</span>}
                    </div>

                    <div className='double-icon-input flex-Column w-100'>
                        <div className={`input-group w-100 flex-row align-items-center ${inputState.passwordFocused ? 'input-active' : ''}`}>
                            <div className="input-icon-left">
                                <img src={inputState.passwordTyping ? lockB : lock} alt="lock icon" className='icon-input' />
                            </div>
                            <input
                                type={passwordVisible ? "text" : "password"}
                                name="password"
                                placeholder="Mot de passe"
                                className="input-field"
                                onChange={handleChange}
                                value={value.password}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                            <div className="toggle-password input-icon-right" onClick={togglePasswordVisibility}>
                                <img src={inputState.passwordTyping ? hideB : hide} alt="toggle password visibility" className='icon-input' />
                                {/* <img src={inputState.passwordTyping ? (passwordVisible ? hideB : hideB) : (passwordVisible ? hide : hide)} alt="toggle password visibility" /> */}
                            </div>
                        </div>
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>
                    <div className="remember-me flex-row align-items-center">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember" className='paraLargeSemi primary-dark-color'>Se souvenir de moi</label>
                    </div>
                    <button type="submit" className="button-primary w-100" disabled={loader}>
                        {loader ? 'Chargement...' : 'Se connecter'}
                    </button>
                </form>
                <Link to="/forgot-pass" >
                    <h6 className="forgot-pass paraLargeSemi" style={{margin:0}}>Identifiant oublié ?</h6>
                </Link>

                <div className="signup">
                    <span className="paraMediumR grey-color-500">Pas de compte?</span>
                    <Link to="/profile-type" className="paraMediumSemi">
                        S’inscrire
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;