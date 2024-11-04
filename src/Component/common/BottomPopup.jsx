import React, { useState } from 'react'
// import devider from '../../assets/devider.svg'
import cameraIcon from '../../assets/Camerawhite.svg'
import BibliothèqueIcon from '../../assets/ImageWhite.svg'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function BottomPopup({ isOpen, setIsOpen }) {
    const [fileName, setFileName] = useState('');

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };
    const closePopup = () => {
        setIsOpen(false);
    };
    return (
        <div>
            {isOpen && (
                <div className="popup-overlay-bottom">

                    <div className="popup-bottom flex-Column gap-24 align-items-center">
                        <div className='devider-image' onClick={closePopup}></div>
                        <Link to={'/photo-kpis'} className='w-100 flex-Column'>
                            <button className="button-primary  flex-row justify-content-center align-items-center gap-16" style={{ borderRadius: '16px' }}>
                                <img src={cameraIcon} alt="" />
                                Appareil photo</button>
                        </Link>

                        <button className="button-primary w-100 " style={{ borderRadius: '16px' }}>
                            <label className='flex-row justify-content-center align-items-center gap-16'>
                                <img src={BibliothèqueIcon} alt="" />
                                Bibliothèque {fileName && <span>({fileName})</span>} 
                                <input
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    onChange={handleImageUpload}
                                    style={{ display: 'none' }}
                                />
                            </label>


                        </button>

                        <button className="button-primary w-100" onClick={closePopup}>Annuler</button>

                    </div>
                </div>
            )}
        </div>
    )
}
BottomPopup.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
  };
export default BottomPopup