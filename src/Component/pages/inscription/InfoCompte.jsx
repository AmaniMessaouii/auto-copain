import React, { useState } from 'react'
import arrow from "../../../assets/Arrow - Left.svg"
import hide from "../../../assets/Hide.svg"
import hideB from "../../../assets/HideB.svg"
import lock from "../../../assets/Lock.svg"
import emailIcon from "../../../assets/emailIcon.svg"
// import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useNavigate } from 'react-router-dom'

function InfoCompte() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loader, setLoader] = useState(false);
    const [value, setValue] = useState({
        nom: "",
        prenom: "",
        CIN: "",
        email: "",
        phone: "",
        password: "",

    });
    const [phone, setPhone] = useState('');
    // const [errors, setErrors] = useState({});
    const userType = localStorage.getItem('userType');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValue((prevState) => ({
            ...prevState,
            [name]: value,
        }));

    };


    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // const validate = () => {
    //     const newErrors = {};
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //     if (!value.email) {
    //         newErrors.email = "L'email est requis";
    //     } else if (!emailRegex.test(value.login)) {
    //         newErrors.email = "L'email n'est pas valide";
    //     }

    //     if (!value.password) {
    //         newErrors.password = "Le mot de passe est requis";
    //     } else if (value.password.length < 6) {
    //         newErrors.password = "Le mot de passe doit comporter au moins 6 caractères";
    //     }
    //     if (!value.nom) {
    //         newErrors.nom = "Le Nom est requis";
    //     }
    //     if (!value.prenom) {
    //         newErrors.prenom = "Le Prénom est requis";
    //     }
    //     if (!value.CIN) {
    //         newErrors.CIN = "Le CIN est requis";
    //     }
    //     if (!value.phone) {
    //         newErrors.phone = "Le Numéro de téléphone est requis";
    //     }
    //     setErrors(newErrors);
    //     return Object.keys(newErrors).length === 0;
    // };
    const previousPage = () => {
        navigate('/profile-type');

    };
    const onFinish = (e) => {
        e.preventDefault();
        // if (validate()) {
            setLoader(true);
            if(userType === 'automobiliste'){
                navigate('/OTP-code');

            }else{
                navigate('/info-supplementaires');

            }
            toast.success('success !', { theme: 'light' });

        // } else {
        //     setLoader(false);
        //     toast.error('Failed !', { theme: 'light' });
        // }
    };

    return (
        <div className='Container'>
            <div>
                <div className='flex-row align-items-center arrow-top gap-16'
                    style={{ marginBottom: "30px" }}>
                    <img src={arrow} alt="arrow" className='cursor-pointer' onClick={previousPage}/>
                    <h4 className='grey-color-900'>S&apos;inscrire</h4>
                </div>
                <div className='flex-Column gap-30'>
                    <h4 className='primary-dark-color text-center'>Informations sur le compte</h4>
                    <form className='flex-Column gap-30'>
                        <div className='flex-Column'>
                            <div className='input-group w-100 flex-row align-items-center'>
                                <input
                                    type="text"
                                    name="nom"
                                    placeholder="Nom"
                                    className="input-field"
                                    onChange={handleChange}
                                    value={value.nom}
                                />
                            </div>
                            {/* {errors.nom && <span className="error-message">{errors.nom}</span>} */}
                        </div>
                        <div className='flex-Column'>
                            <div className='input-group w-100 flex-row align-items-center'>

                                <input
                                    type="text"
                                    name="prenom"
                                    placeholder="Prénom"
                                    className="input-field"
                                    onChange={handleChange}
                                    value={value.prenom}
                                />
                            </div>
                            {/* {errors.prenom && <span className="error-message">{errors.prenom}</span>} */}
                        </div>
                        <div className='flex-Column'>
                            <div className='input-group w-100 flex-row align-items-center'>
                                <input
                                    type="text"
                                    name="CIN"
                                    placeholder="CIN"
                                    className="input-field"
                                    onChange={handleChange}
                                    value={value.CIN}
                                />
                            </div>
                            {/* {errors.CIN && <span className="error-message">{errors.CIN}</span>} */}
                        </div>
                        <div className='flex-Column'>
                            <div className='input-group w-100 flex-row align-items-center'>
                                <PhoneInput
                                    defaultCountry="fr"
                                    value={phone}
                                    onChange={(phone) => setPhone(phone)}
                                />
                            </div>
                            {/* {errors.phone && <span className="error-message">{errors.phone}</span>} */}
                        </div>
                        <div className='flex-Column'>
                            <div className='input-group w-100 flex-row align-items-center'>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="input-field"
                                    onChange={handleChange}
                                    value={value.email}
                                />
                                <div className="input-icon-right">
                                    <img src={emailIcon} alt="profile" className='icon-input' />
                                </div>
                            </div>
                            {/* {errors.email && <span className="error-message">{errors.email}</span>} */}
                        </div>

                        <div className='double-icon-input flex-Column'>
                            <div className='input-group w-100 flex-row align-items-center'>
                                <div className="input-icon-left">
                                    <img src={lock} alt="lock icon" className='icon-input' />
                                </div>
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    name="password"
                                    placeholder="Mot de passe"
                                    className="input-field"
                                    onChange={handleChange}
                                    value={value.password}

                                />
                                <div className="toggle-password input-icon-right" onClick={togglePasswordVisibility}>
                                    <img src={passwordVisible ? hideB : hide} alt="toggle password visibility" className='icon-input' />
                                </div>
                            </div>
                            {/* {errors.password && <span className="error-message">{errors.password}</span>} */}
                        </div>

                    </form>
                    {userType === 'dapanneur' &&
                      <div className="remember-me flex-row align-items-center">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember" className='paraXlargeR primary-dark-color'>J&apos;accepte les CGU & CGV</label>
                  </div>
                    }
                </div>
            </div>

            <button type="submit" className="button-primary w-100" disabled={loader} onClick={onFinish}>
                {loader ? 'Chargement...' : 'Continuer'}
            </button>
        </div>
    )
}

export default InfoCompte