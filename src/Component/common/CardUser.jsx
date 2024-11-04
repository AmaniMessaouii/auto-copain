import React, { useState } from 'react'
import timeIcon from '../../assets/timeIcon.svg'
import positionIcon from '../../assets/positionIcon.svg'
import priceIcon from '../../assets/priceIcon.svg'
import stars from '../../assets/stars.svg'
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom'


function CardUser({ item, key, buttonValid, buttonText1, buttonText2 }) {
    const [show, setShow] = useState(false)
    const [showcard, setShowcard] = useState(true)
    const navigate = useNavigate();

    const OnValid = (item) => {
        if (buttonText2 === 'Accepter') {
            const selectedItem = [];
            selectedItem.push(item);
            localStorage.setItem('acceptedItem', JSON.stringify(selectedItem));
              navigate('/depanneur-accepter');
            } else if (buttonText2 === 'Valider') {
            navigate('/intervention');
            setShow(true)

        }

    }
    const Note = () => {
        if (buttonText2 === 'Valider') {
            navigate('/detail-depanneur');
            setShow(true)
        } else if (buttonText2 === 'Accepter') {
            setShowcard(false)
        }

    }
    return (
        <>
            {showcard ?
                <div key={key} className='flex-Column gap-24 card-depanneur'>
                    <div className='flex-Column gap-16'>
                        <div className='flex-row align-items-center justify-content-between'>
                            <div className='flex-row align-items-center gap-20'>
                                <div className='position-relative'>
                                    <img src={item.avatar} alt="avatar" />
                                    <img src={item.avatarsub} alt="" className='position-absolute position-avatar' />
                                </div>
                                <div className='flex-Column gap-6'>
                                    <span className='paraXlargeB primary-dark-color'>{item.name}</span>
                                    <span className='paraMediumSemi grey-color-700'>{item.date}</span>
                                </div>
                            </div>
                            <div className='flex-Column align-items-end gap-6'>
                                <div className='flex-row align-items-center gap-8'>
                                    <img src={stars} alt="stars" />
                                    <span className='paraMediumM grey-color-700'>{item.stars}</span>
                                </div>
                                {!buttonValid ?
                                    <span className='paraMediumSemi grey-color-700'>{item.date}</span>
                                    : null}
                            </div>
                        </div>
                        <div className="horizontal-divider"></div>
                        <div className='flex-row align-items-center justify-content-between gap-32'>
                            <div className='flex-row align-items-center gap-8'>
                                <img src={positionIcon} alt='' />
                                <span className='paraLargeSemi grey-color-900'>{item.position}</span>
                            </div>
                            <div className='flex-row align-items-center gap-8'>
                                <img src={timeIcon} alt='' />
                                <span className='paraLargeSemi grey-color-900'>{item.time}</span>
                            </div>
                            <div className='flex-row align-items-center gap-8'>
                                <img src={priceIcon} alt='' />
                                <span className='paraLargeSemi grey-color-900'>{item.price}</span>
                            </div>
                        </div>
                        {!show ?
                            (buttonValid ?
                                <div className='flex-row align-items-center gap-12'>
                                    <button type="submit" className="button-secondary button-primary w-100" onClick={Note}>
                                        {buttonText1}
                                    </button>
                                    <button type="submit" className="button-primary w-100" onClick={() => OnValid(item)}>
                                        {buttonText2}
                                    </button>
                                </div>
                                :
                                null)
                            : null
                        }
                    </div>
                </div>
                : null

            }
        </>

    )
}
CardUser.propTypes = {
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, 
    item: PropTypes.shape({
      avatar: PropTypes.string,
      avatarsub: PropTypes.string,
      name: PropTypes.string,
      date: PropTypes.string,
      stars: PropTypes.number,
      position: PropTypes.string,
      time: PropTypes.string,
      price: PropTypes.string,
    }).isRequired,
    buttonValid: PropTypes.bool.isRequired,
    buttonText1: PropTypes.string.isRequired,
    buttonText2: PropTypes.string.isRequired,
  };
export default CardUser