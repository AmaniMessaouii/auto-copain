import React from 'react'
import arrow from "../../../assets/Arrow - Left.svg"
import tick from "../../../assets/Tick.svg"
import { useNavigate } from 'react-router-dom';


function VerifIdentite() {
    const navigate = useNavigate();
    const handleClick= () => {
        navigate('/camera');
    }
    const previousPage = () => {
        navigate('/OTP-code');

    };
    return (

        <div className="Container">
            <div>
                <img src={arrow} alt="arrow" className='arrow-top cursor-pointer' onClick={previousPage}/>
                <div className="verification-content flex-Column gap-30">
                    <h3 className='primary-dark-color text-center'>Vérifions votre identité</h3>
                    <div className='flex-Column gap-40'>
                        <span className='paraXlargeR primary-dark-color'>Laissez-nous un instant pour que la magie opère et vous pourrez continuer.</span>
                        <div className='flex-Column gap-16'>
                            <span className='paraXlargeB grey-color-900'>Avant de commencer, veuillez :</span>
                            <ul className='flex-Column gap-12'>
                                <li className='flex-row gap-16 align-items-start'>
                                    <img src={tick} alt=''/>
                                    <span className='paraXlargeR primary-dark-color flex-row '>Vérifier si la caméra de votre appareil est découverte et fonctionnelle</span>
                                </li>
                                <li className='flex-row gap-16 align-items-start'>
                                    {/* <input type="checkbox" checked readOnly /> */}
                                    <img src={tick} alt=''/>
                                    <span className='paraXlargeR primary-dark-color'>Préparez-vous à prendre un selfie</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <button className="button-primary w-100" onClick={handleClick}>C&apos;est parti !</button>
        </div>
    )
}

export default VerifIdentite