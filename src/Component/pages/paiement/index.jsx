import React, { useState } from 'react'
import arrow from "../../../assets/Arrow - Left.svg"
import timeIcon from '../../../assets/timeIcon.svg'
import positionIcon from '../../../assets/positionIcon.svg'
import priceIcon from '../../../assets/priceIcon.svg'
import VerificationPopup from '../../common/VerificationPopup'
import { useNavigate } from 'react-router-dom'

function Paiement() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const openPopup = () => {
    setIsOpen(true);
  };
  const previousPage = () => {
    navigate('/depanneur-accepter');

};

  return (
    <div className='Container' style={{ padding: 0 }}>
      <div className='padding-container'>
        <div className='flex-row align-items-center arrow-top gap-16'
          style={{ marginBottom: "30px" }}>
          <img src={arrow} alt="arrow" className='cursor-pointer' onClick={previousPage}
          />
          <h4 className='grey-color-900'>Paiements</h4>
        </div>
        <div className='flex-Column gap-30'>
          <form className='flex-Column gap-30'>
            <div className='flex-Column gap-12'>
              <h6 className='primary-dark-color'>Nom de la carte</h6>
              <div className='input-group w-100 flex-row align-items-center'>
                <input
                  type="text"
                  name="nom"
                  placeholder="Wajdi Madani"
                  className="input-field"
                // onChange={handleChange}
                // value={value.nom}
                />
              </div>
              {/* {errors.nomEntreprise && <span className="error-message">{errors.nomEntreprise}</span>} */}
            </div>
            <div className='flex-Column gap-12'>
              <h6 className='primary-dark-color'>Numéro de la carte</h6>
              <div className='input-group w-100 flex-row align-items-center'>
                <input
                  type="text"
                  name="numcart"
                  placeholder="2672 4738 7837 7285"
                  className="input-field"
                // onChange={handleChange}
                // value={value.numcart}
                />
              </div>
              {/* {errors.numSiret && <span className="error-message">{errors.numSiret}</span>} */}
            </div>
            <div className='flex-row gap-20'>
              <div className=' flex-Column gap-12 w-100'>
                <h6 className='primary-dark-color'>Numéro de la carte</h6>
                <div className='input-group w-100 flex-row align-items-center'>
                  <input
                    type='date'
                    name="date"
                    placeholder="09/07/26"
                    className="input-field date-input"
                  // onChange={handleChange}
                  // value={value.date}
                  />

                </div>
                {/* {errors.service && <span className="error-message">{errors.service}</span>} */}
              </div>
              <div className='flex-Column gap-12 w-100'>
                <h6 className='primary-dark-color'>CVV</h6>
                <div className='input-group w-100 flex-row align-items-center'>
                  <input
                    type="text"
                    name="cvv"
                    placeholder="***"
                    className="input-field"
                  // onChange={handleChange}
                  // value={value.cvv}
                  />
                </div>
                {/* {errors.NIV && <span className="error-message">{errors.NIV}</span>} */}
              </div>
            </div>
            <div className="horizontal-divider"></div>

            <div className='flex-Column gap-12'>
              <h6 className='primary-dark-color'>Code promo</h6>
              <div className='input-group w-100 flex-row align-items-center'>
                <input
                  type="text"
                  name="promo"
                  placeholder="Enter Promo Code"
                  className="input-field"
                // onChange={handleChange}
                // value={value.promo}
                />
              </div>
              {/* {errors.assurance && <span className="error-message">{errors.assurance}</span>} */}
            </div>
          </form>
        </div>
      </div>
      <VerificationPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title='Paiement Réussi !'
        description="Merci pour votre paiement. Votre transaction a été effectuée avec succès. Vous recevrez un e-mail de confirmation sous peu."
        valid='OK'
        bottomType='vide'
      />
      <div className='flex-Column gap-24 horizontal-divider-rounder'>
        <div className='flex-row align-items-center justify-content-between gap-32 paiement-details'>
          <div className='flex-row align-items-center gap-8'>
            <img src={positionIcon} alt='' />
            <span className='paraLargeSemi grey-color-900'>10 km</span>
          </div>
          <div className='flex-row align-items-center gap-8'>
            <img src={timeIcon} alt='' />
            <span className='paraLargeSemi grey-color-900'>30 mins</span>
          </div>
          <div className='flex-row align-items-center gap-8'>
            <img src={priceIcon} alt='' />
            <span className='paraLargeSemi grey-color-900'>30.00€</span>
          </div>
        </div>
        <button type="submit" className="button-primary w-100" onClick={openPopup}>
          Payer
        </button>
      </div>

    </div>
  )
}

export default Paiement