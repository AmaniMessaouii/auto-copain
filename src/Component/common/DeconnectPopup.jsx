import React from 'react'
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function DeconnectPopup({ isOpen, setIsOpen }) {
    const navigate = useNavigate();

    const closePopup = () => {
        setIsOpen(false);
    };
    const signOut = () => {
        navigate('/login');
        localStorage.removeItem('userType');
        localStorage.removeItem('selectedServices');
    };
    return (
        <div>
            {isOpen && (
                <div className="popup-overlay-bottom">
                    <div className="popup-bottom flex-Column gap-24 align-items-center">
                        <div className='devider-image' onClick={closePopup} style={{ margin: 0 }}></div>
                         <h4 className='red-color'>Se déconnecter</h4>
                         <div className="horizontal-divider"></div>
                          <h5 className='grey-color-800 title-max-w text-center'>Êtes-vous sûr de vouloir vous
                          déconnecter ?</h5>
                        <div className='flex-row align-items-center gap-12 w-100' style={{ marginTop: '24px' }}>
                            <button type="submit" className="button-secondary button-primary w-100" onClick={closePopup}>
                                Annuler
                            </button>
                            <button type="submit" className="button-primary w-100" onClick={signOut}>
                                Déconnexion
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}
DeconnectPopup.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
  };
export default DeconnectPopup