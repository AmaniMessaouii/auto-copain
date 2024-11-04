import React, { useState } from 'react'
import arrow from '../../assets/arrow-collapse.svg'
import PropTypes from 'prop-types';

function FaqItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            <div className="flex-row align-items-center justify-content-between gap-12" onClick={toggleOpen}>
                <h6 className='grey-color-900'>{question}</h6>
                <div className={`arrow-icon ${isOpen ? 'open-icon' : ''} text-center`} onClick={toggleOpen}>
                    <img src={arrow} alt='' />
                </div>
            </div>
            <div className="faq-answer flex-Column gap-16" >
                <div className="horizontal-divider" style={{marginTop: '16px'}}></div>
                <span className='paraMediumM grey-color-800'>{answer}</span>
            </div>
        </div>
    )
}
FaqItem.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  };
export default FaqItem