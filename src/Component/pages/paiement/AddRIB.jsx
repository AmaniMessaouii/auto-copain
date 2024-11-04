import React, { useState } from 'react'
import arrow from "../../../assets/Arrow - Left.svg"
import RIB from '../../../assets/ribPhoto.svg'
import VerificationPopup from '../../common/VerificationPopup'
import { useNavigate } from 'react-router-dom';
function AddRIB() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const previousPage = () => {
        navigate('/inscrit-particulier');

    };

    const openPopup = () => {
        setIsOpen(true);
        setTimeout(() => {
            navigate('/profile-depanneur');
            localStorage.setItem('userType', 'dapanneur');

        }, 1000);
    };
    return (
        <div className='Container gap-12'>
            <div>
                <div className='flex-row align-items-center arrow-top gap-16'>
                    <img src={arrow} alt="arrow" className='cursor-pointer' onClick={previousPage} />
                    <h4 className='grey-color-900 title-nowrap'>Ajouter votre RIB</h4>
                </div>
                <div className='flex-Column gap-24'>
                    <span className='paraXlargeR primary-dark-color'>
                        Veuillez ajouter votre RIB (Relevé d&apos;Identité Bancaire)
                        pour que nous puissions transférer vos gains directement
                        sur votre compte
                    </span>
                    <img src={RIB} alt='' className='image-rib' />
                    <form className='flex-Column gap-24'>
                        <div className='flex-Column gap-12'>
                            <h6 className='primary-dark-color'>Nom de la Banque</h6>
                            <div className='input-group w-100 flex-row align-items-center'>
                                <input
                                    type="text"
                                    name="assurance"
                                    placeholder="BNP"
                                    className="input-field paraMediumSemi"
                                />
                            </div>
                        </div>
                        <div className='flex-Column gap-12'>
                            <h6 className='primary-dark-color'>IBAN</h6>
                            <div className='input-group w-100 flex-row align-items-center grey-color-900'>
                                <input
                                    type='text'
                                    name="service"
                                    placeholder="FR 234 567890"
                                    className="input-field paraMediumSemi grey-color-900"
                                />
                            </div>
                        </div>
                        <div className='flex-Column gap-12'>
                            <h6 className='primary-dark-color'>BIC</h6>
                            <div className='input-group w-100 flex-row align-items-center'>
                                <input
                                    type="text"
                                    name="NIV"
                                    placeholder="BNPXFTP"
                                    className="input-field paraMediumSemi grey-color-900"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            
            </div>
            <VerificationPopup
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    title='Votre Compte Dépanneur est Prêt !'
                    description="Félicitations ! Votre compte dépanneur AutoCopain est maintenant prêt. Vous pouvez dès à présent commencer à recevoir des demandes d'assistance."
                    valid='OK'
                    bottomType='loader'
                />
            <button type="submit" className="button-primary w-100" onClick={openPopup}>Envoyer </button>
        </div>
    )
}

export default AddRIB