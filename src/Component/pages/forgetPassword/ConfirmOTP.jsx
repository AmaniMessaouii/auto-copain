import React, { useState } from 'react'
import arrow from "../../../assets/Arrow - Left.svg"
import { useNavigate } from 'react-router-dom';

function ConfirmOTP() {
    const [otp, setOtp] = useState(new Array(4).fill(''));
    const navigate = useNavigate();
    const handleClick = () => {
       navigate('/new-pass')

    };
    const previousPage= () => {
        navigate('/forgot-pass');
    }
    const handleChange = (element, index) => {
        let newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);
        if (element.nextSibling && element.value) {
            element.nextSibling.focus();
        }
    };

    return (
        <div className="Container">
            <div className='h-100'>
                <div className='flex-row align-items-center arrow-top gap-16'
                    style={{ marginBottom: "0px" }}>
                    <img src={arrow} alt="arrow" className='cursor-pointer' onClick={previousPage}/>
                    <h4 className='grey-color-900 title-nowrap'>Entrez le code</h4>
                </div>
                <div className="flex-Column align-items-center justify-content-center gap-48 height-calc-btn">
                    <span className='paraXlargeM grey-color-900'>Un code a été envoyé +33 6 ******19</span>
                    <div className="flex-row justify-content-center gap-16 ">
                        {otp.map((data, index) => (
                            <input
                                className="otp-field"
                                type="text"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={(e) => handleChange(e.target, index)}
                                onFocus={(e) => e.target.select()}
                            />
                        ))}
                    </div>
                    <span className='paraXlargeM grey-color-900'>Renvoyer le code</span>
                </div>
            </div>
            <button className="button-primary w-100" onClick={handleClick}>Continuer</button>
        </div>
    )
}

export default ConfirmOTP