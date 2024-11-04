import React from 'react'
import arrow from "../../../assets/Arrow - Left.svg"
import call from '../../../assets/appel-icon.svg'
import vocal from '../../../assets/vocale.svg'
import gallery from '../../../assets/gallery.svg'
import { useNavigate } from 'react-router-dom'
function ServiceClient() {
  const navigate = useNavigate();

  const previousPage = () => {
      navigate('/centre-assistance');

  };
  return (
    <div className='Container'>
      <div>
        <div className='flex-row align-items-center justify-content-between' style={{ marginBottom: "30px" }}>
          <div className='flex-row align-items-center gap-16'>
            <img src={arrow} alt="arrow" className='arrow-top cursor-pointer' style={{ margin: 0 }} onClick={previousPage}/>
            <h4 className='grey-color-900 title-nowrap'>Service clientéle</h4>
          </div>  
          <img src={call} alt="call" />
        </div>
        <div className=' flex-Column gap-24'>
          <div className='date-chat'>
            <span className='paraXsmallSemi dark-color-400'>Aujourd’hui</span>
          </div>
          <div className='flex-Column align-items-start gap-12'>
            <div className='flex-row align-items-end justify-content-between chat-receive'>
              <span className='paraLargeR primary-dark-color text-max-w'>Lorem ipsum dolor sit amet, consectetur </span>
              <span className='paraMediumR grey-color-500'>10:00</span>
            </div>
            <div className='flex-row align-items-end justify-content-between chat-receive'>
              <span className='paraLargeR primary-dark-color text-max-w'>Lorem ipsum dolor sit amet, consectetur </span>
              <span className='paraMediumR grey-color-500'>10:00</span>
            </div>
          </div>
          <div className='flex-Column align-items-end gap-12'>
            <div className='flex-row align-items-end justify-content-between chat-send'>
              <span className='paraLargeR white-color text-max-w'>Lorem ipsum dolor sit amet, consectetur </span>
              <span className='paraMediumR color-grey-50'>10:00</span>
            </div>
            <div className='flex-row align-items-end justify-content-between chat-send'>
              <span className='paraLargeR white-color text-max-w'>Lorem ipsum dolor sit amet, consectetur </span>
              <span className='paraMediumR color-grey-50'>10:00</span>
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>

      <div className='flex-row gap-12'>
        <div className='conversation-group w-100 flex-row align-items-center'>
          <textarea placeholder='Message...' className='conversation-msg' />
          <div className="input-icon-right">
            <img src={gallery} alt="camera Icon" className='icon-input' />
          </div>
        </div>
        <img src={vocal} alt='' />
      </div>


    </div>
  )
}

export default ServiceClient