import React, { useEffect, useState } from 'react'
import arrow from "../../../assets/Arrow - Left.svg"
import loader from "../../../assets/loader.svg"
import { useNavigate } from 'react-router-dom';
import VerificationPopup from '../../common/VerificationPopup';

function Patienter() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const previousPage = () => {
        navigate('/camera');

    };
   
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true); 
        }, 1000,  navigate('/home'));

        return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="Container">
            <div>
                <img src={arrow} alt="profile" className='arrow-top' onClick={previousPage} />
                <div className="flex-Column gap-16">
                    <h3 className='primary-dark-color text-center'>Veuillez patienter..</h3>
                    <div className='flex-Column gap-100'>
                        <span className='paraXlargeR primary-dark-color'>Laissez-nous un instant pour que la magie opère et vous pourrez continuer.</span>
                        <img src={loader} alt='loader' className='loader-p' />
                    </div>
                </div>
            </div>
            <VerificationPopup
             isOpen={isOpen}
             setIsOpen={setIsOpen}
             title='Merci!'
             description='Vos données de vérification ont bien été envoyées.'
             valid={true}
             bottomType='loader'
             />
        </div>
    )
}

export default Patienter