import React from 'react'
import reussiImg from '../../assets/reussi.svg'
import merciImg from '../../assets/succes.svg'
import loader from '../../assets/loader.svg'
import localisation from '../../assets/localisationPop.svg'
import profile from '../../assets/profilePop.svg'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';


function VerificationPopup({ isOpen, setIsOpen, title, description, valid, bottomType, buttonContent }) {
    const navigate = useNavigate();

    const closePopup = (e) => {
        e.preventDefault();
        setIsOpen(false);
        if(buttonContent === 'Compléter'){
            navigate('/inscrit-particulier')
        }else if (buttonContent === 'Retour à l’accueil'){
            navigate('/depanneur-dispo')

        }
    };
    return (
        <div className="app-container">
            {isOpen && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup flex-Column align-items-center gap-32">
                        <img src={valid === 'OK' ? merciImg : valid === 'reussi' ? reussiImg : valid === 'local' ? localisation : profile

                        } alt='' className='top-photo-popup' />
                        <div className='flex-Column gap-16'>
                            <h4 className="primary-blue-color">{title}</h4>
                            <span className="paraLargeR grey-color-900">
                                {description}</span>
                        </div>{valid === 'local' ?
                            <div className='flex-Column gap-16 w-100'>
                                <button type="submit" className="button-primary w-100" onClick={closePopup} >
                                    Activer la Localisation

                                </button>
                                <button type="submit" className="button-secondary button-primary w-100" onClick={closePopup}>
                                    Pas Maintenant
                                </button>

                            </div>
                            :
                            <div className='w-100'>
                                {bottomType === 'loader' ? (
                                    <img src={loader} alt='loader' className='loader-popup' />
                                ) : bottomType === 'button' ? (
                                    <button type="submit" className="button-primary w-100" onClick={closePopup}>{buttonContent}</button>
                                ) : bottomType === 'vide' ? null : (
                                    null
                                )}
                            </div>
                        }

                    </div>
                </div>
            )}
        </div>
    );
}
VerificationPopup.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    valid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired, 
    bottomType: PropTypes.string.isRequired,
    buttonContent: PropTypes.string, 
  };
export default VerificationPopup