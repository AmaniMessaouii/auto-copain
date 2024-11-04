import React, { useState } from 'react'
import arrow from "../../../assets/Arrow - Left.svg"
import newpass from '../../../assets/Framephone.svg'
import Hide from '../../../assets/HideBlack.svg'
import lock from '../../../assets/lockblack.svg'
import VerificationPopup from '../../common/VerificationPopup'
import { useNavigate } from 'react-router-dom'
function NewPass() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [value, setValue] = useState({
        password: '',
        newPassword: ''
    })
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
  
    const previousPage= () => {
        navigate('/confirm-OTP');
    }
    // Function to open the popup
    const openPopup = () => {
      setIsOpen(true);
    };
  
    // Function to close the popup
  
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

    return (
        <div className="Container">
            <div>
                <div className='flex-row align-items-center arrow-top gap-16'
                    style={{ marginBottom: "28px" }}>
                    <img src={arrow} alt="arrow" className='cursor-pointer' onClick={previousPage} />
                    <h4 className='grey-color-900 title-nowrap'>Nouveau mot de passe</h4>
                </div>
                <div className="flex-Column gap-28">
                    <img src={newpass} alt="new pass" className='pass-img' />
                   <div className='flex-Column gap-24'>
                   <span className='paraXlargeM primary-dark-color'>Créer votre nouveau mot de passe</span>
                   <div className='double-icon-input flex-Column w-100'>
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
                                <img src={passwordVisible ? Hide : Hide} alt="toggle password visibility" className='icon-input' />
                            </div>
                        </div>
                        {/* {errors.password && <span className="error-message">{errors.password}</span>} */}
                    </div>
                    <div className='double-icon-input flex-Column w-100'>
                        <div className='input-group w-100 flex-row align-items-center'>
                            <div className="input-icon-left">
                                <img src={lock} alt="lock icon" className='icon-input' />
                            </div>
                            <input
                                type={passwordVisible ? "text" : "password"}
                                name="newPassword"
                                placeholder="Nouveau mot de passe"
                                className="input-field"
                                onChange={handleChange}
                                value={value.password}

                            />
                            <div className="toggle-password input-icon-right" onClick={togglePasswordVisibility}>
                                <img src={passwordVisible ? Hide : Hide} alt="toggle password visibility" className='icon-input' />
                            </div>
                        </div>
                        {/* {errors.password && <span className="error-message">{errors.password}</span>} */}
                    </div>
                    <div className="remember-me flex-row align-items-center justify-content-center">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember" className='paraXlargeSemi primary-dark-color'>Souviens de moi</label>
                    </div>
                   </div>
                   
       
                </div>
            </div>
            <VerificationPopup
             isOpen={isOpen}
             setIsOpen={setIsOpen}
             title='Réussi!'
             description="Votre compte est prêt à être utilisé. Vous serez redirigé vers la page d'accueil dans quelques secondes."
             valid='reussi'
             bottomType='loader'
             />
    
            <button className="button-primary w-100" onClick={openPopup}>Continuer</button>
        </div>
    )
}

export default NewPass