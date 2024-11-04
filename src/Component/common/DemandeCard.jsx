import React, { useState } from 'react'
import roue from "../../assets/roue.svg";
import timeIcon from '../../assets/timeIcon.svg'
import positionIcon from '../../assets/positionIcon.svg'
import priceIcon from '../../assets/priceIcon.svg'
import arrowup from '../../assets/arrow-up.svg'
import PropTypes from 'prop-types';

function DemandeCard({ key, item, Valid }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    return (
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
                    {Valid ?
                        <div className='flex-Column align-items-end gap-6'>
                            <button className='complete-btn'>Complété</button>
                        </div>
                        :
                        <div className='flex-Column align-items-end gap-6'>
                            <button className='complete-btn bg-red-color'>Annulé</button>
                        </div>
                    }

                </div>
                <div className="horizontal-divider"></div>
       
                <div className={`details-section ${isExpanded ? 'show' : 'hide'} flex-Column gap-16  `}>
                    <div className='flex-Column gap-12 align-items-center justify-content-center'>
                        <img src={roue} alt="" />
                        <span className='paraLargeB primary-dark-color'>Roue crevee</span>
                    </div>
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
                    <div className='flex-row align-items-center justify-content-between gap-32'>
                        <div className='flex-row align-items-center gap-8'>

                            <span className='paraMediumM grey-color-700'>Date & Time</span>
                        </div>

                        <div className='flex-row align-items-center gap-8'>
                            <span className='paraLargeSemi grey-color-800'>Date | Time</span>
                        </div>
                    </div>
                    <div className="horizontal-divider"></div>

                </div>

                <div className={`arrow ${isExpanded ? 'expanded' : ''} text-center`} onClick={toggleExpand}>
                    <img src={arrowup} alt='' />
                </div>
            </div>
        </div>
    )
}
DemandeCard.propTypes = {
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Adjust type as needed
    item: PropTypes.shape({
      avatar: PropTypes.string,
      avatarsub: PropTypes.string,
      name: PropTypes.string,
      date: PropTypes.string,
      position: PropTypes.string,
      time: PropTypes.string,
      price: PropTypes.string,
    }).isRequired,
    Valid: PropTypes.bool.isRequired,
  };
export default DemandeCard