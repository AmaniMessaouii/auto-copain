import React, { useState } from 'react'
import arrow from "../../../assets/Arrow - Left.svg"
import { useNavigate } from 'react-router-dom';
// import label from '../../../assets/Label.svg'
function CodeOtp() {
    const [otp, setOtp] = useState(new Array(4).fill(''));
    const [focusedIndex, setFocusedIndex] = useState(null);
    const navigate = useNavigate();


    const handleChange = (e, index) => {
        const { value } = e.target;

        if (/^[0-9]$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (value && index < otp.length - 1) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        } else if (value === "") {
            const newOtp = [...otp];
            newOtp[index] = "";
            setOtp(newOtp);
        }
    };

    const handleFocus = (index) => {
        setFocusedIndex(index);
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            document.getElementById(`otp-input-${index - 1}`).focus();
        }
    };
    const handleClick= () => {
        navigate('/verif-identite');};
        const previousPage = () => {
            navigate('/info-compte');
    
        };
    return (
        <div className='Container'>
            <div>
                <img src={arrow} alt="profile" className='arrow-top' onClick={previousPage} />
                <div className="text-center flex-Column gap-100">
                    <div className='flex-Column gap-16'>
                        <h4 className='primary-dark-color text-center'>Entrer le code</h4>
                        <span className='paraXlargeR'>Ajouter le code OTP pour sécuriser davantage votre compte.</span>
                    </div>

                    <div className="flex-row justify-content-center gap-16 ">
                        {otp.map((data, index) => (
                            <input
                                key={index}
                                id={`otp-input-${index}`}
                                type="text"
                                className="otp-field"
                                maxLength="1"
                                value={focusedIndex === index ? otp[index] : otp[index] ? "●" : ""}
                                onChange={(e) => handleChange(e, index)}
                                onFocus={() => handleFocus(index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <button className="button-primary w-100" onClick={handleClick}>Continuer</button>

        </div>
    )
}

export default CodeOtp