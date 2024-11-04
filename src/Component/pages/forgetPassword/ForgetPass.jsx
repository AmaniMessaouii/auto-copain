import React from 'react'
import arrow from "../../../assets/Arrow - Left.svg"
import passPhoto from '../../../assets/FrameMdpo.svg'
import smsIcon from '../../../assets/smsIconframe.svg'
import { useNavigate } from 'react-router-dom';
function ForgetPass() {
    const navigate = useNavigate();
    const handleClick = () => {
       navigate('/confirm-OTP')

    };
    const previousPage= () => {
        navigate('/login');
    }
    return (

        <div className="Container">
            <div>
                <div className='flex-row align-items-center arrow-top gap-16'
                    style={{ marginBottom: "28px" }}>
                    <img src={arrow} alt="arrow" className='cursor-pointer' onClick={previousPage}/>
                    <h4 className='grey-color-900 title-nowrap'>Mot de passe oublié</h4>
                </div>
                <div className="flex-Column gap-28">
                    <div className='w-100 text-center'>
                    <img src={passPhoto} alt='pass icon' className='pass-photo-img' />
                    </div>
                    <div className='flex-Column gap-24'>
                    <span className='paraXlargeM dark-color-400'>Nous allons vous envoyer un code OTP sur votre téléphone pour réinitialiser le mot de passe</span>
                    <div className='flex-row align-items-center pass-card-layout gap-20'>
                        <img src={smsIcon} alt="sms icon" />
                        <div className='flex-Column gap-12'>
                            <span className='paraMediumM grey-color-600'>via SMS:</span>
                            <span className='paraXlargeSemi primary-dark-color'>+33 6 ******19</span>
                        </div>
                    </div>
                    </div>
                    

                </div>
            </div>
            <button className="button-primary w-100" onClick={handleClick}>Continuer</button>
        </div>
    )
}

export default ForgetPass