import React from 'react'
// import devider from '../../assets/devider.svg'
import stars from '../../assets/stars.svg'
import Rating from 'react-rating'
import { depanneurData } from "../constants"
import yellowStar from '../../assets/star-yellow.svg'
import greyStar from '../../assets/star-grey.svg'
import PropTypes from 'prop-types';

function BottomNotePopup({ isOpen, setIsOpen }) {

   
    const closePopup = () => {
        setIsOpen(false);
    };
    return (
        <div>
            {isOpen && (
                <div className="popup-overlay-bottom">
                    <div className="popup-bottom flex-Column gap-24 align-items-center">

                        <div className='devider-image' onClick={closePopup} style={{margin:0}}></div>
                        <h4>Notez votre Dépanneur</h4>
                        <div className="horizontal-divider"></div>
                        <div className='flex-row align-items-center justify-content-between w-100'>
                            <div className='flex-row align-items-center gap-20'>
                                <div className='position-relative'>
                                    <img src={depanneurData[0].avatar} alt="avatar" />
                                    <img src={depanneurData[0].avatarsub} alt="" className='position-absolute position-avatar' />
                                </div>
                                <div className='flex-Column gap-6'>
                                    <span className='paraXlargeB primary-dark-color'>{depanneurData[0].name}</span>
                                    <span className='paraMediumSemi grey-color-700'>{depanneurData[0].date}</span>
                                </div>
                            </div>
                            <div className='flex-Column align-items-end gap-6'>
                                <div className='flex-row align-items-center gap-8'>
                                    <img src={stars} alt="stars" />
                                    <span className='paraMediumM grey-color-700'>{depanneurData[0].stars}</span>
                                </div>

                            </div>
                        </div>
                        <div className="horizontal-divider"></div>
                        <span className='paraLargeM grey-color-450 text-center'>Nous aimerions connaître votre avis sur le service que vous avez reçu. Veuillez noter votre dépanneur pour nous aider à améliorer nos services.</span>
                        <div className='Rating'>
                        <Rating
                            placeholderRating={3}
                            emptySymbol={<img src={greyStar} alt='' />}
                            placeholderSymbol={<img src={yellowStar} alt=''/>}
                            fullSymbol={<img src={yellowStar} alt='' />}
                        />
                        </div>
                       
                        <div className='flex-row align-items-center gap-12 w-100' style={{marginTop:'24px'}}>
                            <button type="submit" className="button-secondary button-primary w-100" onClick={closePopup}>
                                Annuler
                            </button>
                            <button type="submit" className="button-primary w-100" onClick={closePopup}>
                                Soumettre
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}
BottomNotePopup.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
  };

export default BottomNotePopup;
